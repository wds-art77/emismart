import "server-only";
import { and, eq, inArray, lte, isNotNull, ne } from "drizzle-orm";
import { getDb, newId, schema } from "@/lib/db";
import { sendMail } from "@/lib/mail";
import { addPeriod, deadlines } from "@/lib/deadlines";
import { countryByCode } from "@/lib/countries";
import { baseUrl } from "@/lib/auth";

// Event-driven workflow engine. Every change in a case is recorded as an event in the audit log,
// then matching handlers run: generating milestones and document requests, computing deadlines,
// notifying the parties, escalating to a lawyer. A daily job sends deadline reminders.

export type WorkflowEvent =
  | { type: "case.created"; caseId: string; actorUserId: string }
  | { type: "case.filed"; caseId: string; actorUserId: string; filedOn: string }
  | { type: "case.status"; caseId: string; actorUserId: string; status: string }
  | { type: "milestone.updated"; caseId: string; actorUserId: string; milestoneId: string; status: string }
  | { type: "document.uploaded"; caseId: string; actorUserId: string; documentId: string }
  | { type: "document.reviewed"; caseId: string; actorUserId: string; documentId: string; status: string }
  | { type: "member.invited"; caseId: string; actorUserId: string; email: string; role: string; link: string }
  | { type: "review.requested"; caseId: string; actorUserId: string }
  | { type: "comment.added"; caseId: string; actorUserId: string; excerpt: string };

type Handler = (e: WorkflowEvent) => Promise<void>;

const handlers: Partial<Record<WorkflowEvent["type"], Handler[]>> = {
  "case.created": [generateMilestonesAndDocuments],
  "case.filed": [computeDecisionDue, notifyCaseMembers("case.filed")],
  "milestone.updated": [closeCaseWhenAllDone],
  "document.uploaded": [notifyEmployerSide, advanceCollectionStatus],
  "document.reviewed": [notifyUploader],
  "member.invited": [sendInvitationMail],
  "review.requested": [escalateToLawyer],
  "comment.added": [notifyComment],
};

export async function dispatch(event: WorkflowEvent): Promise<void> {
  const db = await getDb();
  const { type, caseId, actorUserId, ...payload } = event;
  await db.insert(schema.events).values({ id: newId("evt_"), caseId, actorUserId, type, payload });
  for (const h of handlers[type] ?? []) await h(event);
}

// Handlers

async function generateMilestonesAndDocuments(e: WorkflowEvent) {
  const db = await getDb();
  const [c] = await db.select().from(schema.cases).where(eq(schema.cases.id, e.caseId));
  const country = c && countryByCode(c.country);
  if (!country) return;
  await db.insert(schema.milestones).values(country.steps.map((s, i) => ({ id: newId("ms_"), caseId: c.id, position: i, title: s.title, actor: s.actor })));
  await db.insert(schema.documents).values([
    ...country.employerDocs.map((d) => ({ id: newId("doc_"), caseId: c.id, party: "employer" as const, label: d.label, note: d.note ?? null })),
    ...country.employeeDocs.map((d) => ({ id: newId("doc_"), caseId: c.id, party: "employee" as const, label: d.label, note: d.note ?? null })),
  ]);
  await db.update(schema.cases).set({ status: "collecting", updatedAt: new Date() }).where(eq(schema.cases.id, c.id));
}

async function computeDecisionDue(e: WorkflowEvent) {
  if (e.type !== "case.filed") return;
  const db = await getDb();
  const [c] = await db.select().from(schema.cases).where(eq(schema.cases.id, e.caseId));
  if (!c) return;
  const dl = deadlines[c.country as keyof typeof deadlines];
  const due = dl ? addPeriod(new Date(e.filedOn), dl).toISOString().slice(0, 10) : null;
  await db.update(schema.cases).set({ filedOn: e.filedOn, decisionDue: due, status: "filed", updatedAt: new Date() }).where(eq(schema.cases.id, c.id));
}

async function closeCaseWhenAllDone(e: WorkflowEvent) {
  const db = await getDb();
  const rows = await db.select({ status: schema.milestones.status }).from(schema.milestones).where(eq(schema.milestones.caseId, e.caseId));
  if (rows.length && rows.every((r) => r.status === "done")) {
    await db.update(schema.cases).set({ status: "decided", updatedAt: new Date() }).where(and(eq(schema.cases.id, e.caseId), ne(schema.cases.status, "closed")));
  }
}

async function advanceCollectionStatus(e: WorkflowEvent) {
  const db = await getDb();
  const [c] = await db.select().from(schema.cases).where(eq(schema.cases.id, e.caseId));
  if (c && c.status === "draft") await db.update(schema.cases).set({ status: "collecting", updatedAt: new Date() }).where(eq(schema.cases.id, c.id));
}

function notifyCaseMembers(kind: string): Handler {
  return async (e) => {
    const members = await caseMemberUsers(e.caseId);
    const [c] = await (await getDb()).select().from(schema.cases).where(eq(schema.cases.id, e.caseId));
    for (const m of members) {
      if (m.id === e.actorUserId) continue;
      await notify(m.id, e.caseId, kind, `Case ${c?.reference ?? ""} filed`, `The application for ${c?.employeeName ?? "the employee"} was filed on ${c?.filedOn ?? ""}. Decision expected by ${c?.decisionDue ?? "the statutory deadline"}.`);
    }
  };
}

async function notifyEmployerSide(e: WorkflowEvent) {
  if (e.type !== "document.uploaded") return;
  const db = await getDb();
  const [doc] = await db.select().from(schema.documents).where(eq(schema.documents.id, e.documentId));
  const [c] = await db.select().from(schema.cases).where(eq(schema.cases.id, e.caseId));
  const members = await caseMemberUsers(e.caseId);
  for (const m of members) {
    if (m.id === e.actorUserId || m.role === "employee") continue;
    await notify(m.id, e.caseId, "document.uploaded", `Document uploaded: ${doc?.label ?? ""}`, `${c?.employeeName ?? "A party"} uploaded "${doc?.label ?? ""}" to case ${c?.reference ?? ""}. Please review it.`);
  }
}

async function notifyUploader(e: WorkflowEvent) {
  if (e.type !== "document.reviewed") return;
  const db = await getDb();
  const [doc] = await db.select().from(schema.documents).where(eq(schema.documents.id, e.documentId));
  if (!doc?.uploadedBy || doc.uploadedBy === e.actorUserId) return;
  const verb = e.status === "verified" ? "accepted" : "sent back";
  await notify(doc.uploadedBy, e.caseId, "document.reviewed", `Document ${verb}: ${doc.label}`, `"${doc.label}" was ${verb}.${doc.reviewNote ? ` Note: ${doc.reviewNote}` : ""}`);
}

async function sendInvitationMail(e: WorkflowEvent) {
  if (e.type !== "member.invited") return;
  const [c] = await (await getDb()).select().from(schema.cases).where(eq(schema.cases.id, e.caseId));
  await sendMail({
    to: e.email,
    subject: `You are invited to case ${c?.reference ?? ""} on Emismart`,
    text: `You have been invited as ${e.role} to the case file of ${c?.employeeName ?? ""} (${c?.reference ?? ""}).\n\nOpen the invitation:\n${e.link}\n\nThe link is valid for 7 days.`,
  });
}

async function escalateToLawyer(e: WorkflowEvent) {
  const db = await getDb();
  const [c] = await db.select().from(schema.cases).where(eq(schema.cases.id, e.caseId));
  if (!c) return;
  await db.update(schema.cases).set({ reviewRequestedAt: new Date(), updatedAt: new Date() }).where(eq(schema.cases.id, c.id));
  const lawyers = (await caseMemberUsers(c.id)).filter((m) => m.role === "lawyer");
  for (const l of lawyers) await notify(l.id, c.id, "review.requested", `Review requested: ${c.reference}`, `A review of the case file of ${c.employeeName} (${c.country.toUpperCase()}) was requested.`);
  const to = process.env.REVIEW_EMAIL ?? process.env.NEXT_PUBLIC_REVIEW_EMAIL ?? "weds@desaeger.be";
  if (to && lawyers.length === 0) {
    await sendMail({ to, subject: `Emismart review requested: ${c.reference}`, text: `A review was requested for case ${c.reference} (${c.employeeName}, ${c.country.toUpperCase()}).\n\n${baseUrl()}/en/app/cases/${c.id}` });
  }
}

async function notifyComment(e: WorkflowEvent) {
  if (e.type !== "comment.added") return;
  const [c] = await (await getDb()).select().from(schema.cases).where(eq(schema.cases.id, e.caseId));
  for (const m of await caseMemberUsers(e.caseId)) {
    if (m.id === e.actorUserId) continue;
    await notify(m.id, e.caseId, "comment.added", `New comment on ${c?.reference ?? "a case"}`, e.excerpt);
  }
}

// Daily job: reminders for decision deadlines within 14 days or overdue, once per case per day.
export async function runDeadlineReminders(now = new Date()): Promise<number> {
  const db = await getDb();
  const horizon = new Date(now.getTime() + 14 * 86_400_000).toISOString().slice(0, 10);
  const due = await db.select().from(schema.cases).where(and(isNotNull(schema.cases.decisionDue), lte(schema.cases.decisionDue, horizon), inArray(schema.cases.status, ["filed", "collecting"])));
  let sent = 0;
  for (const c of due) {
    const members = await caseMemberUsers(c.id);
    const today = now.toISOString().slice(0, 10);
    for (const m of members) {
      const already = await db.select({ id: schema.notifications.id }).from(schema.notifications).where(and(eq(schema.notifications.userId, m.id), eq(schema.notifications.caseId, c.id), eq(schema.notifications.type, `deadline.${today}`))).limit(1);
      if (already.length) continue;
      const days = Math.ceil((new Date(c.decisionDue!).getTime() - now.getTime()) / 86_400_000);
      const title = days < 0 ? `Decision overdue by ${-days} days: ${c.reference}` : `Decision due in ${days} days: ${c.reference}`;
      await notify(m.id, c.id, `deadline.${today}`, title, `Statutory decision date ${c.decisionDue} for ${c.employeeName} (${c.country.toUpperCase()}). Check the authority's status and prepare a follow-up if no decision has arrived.`);
      sent++;
    }
  }
  return sent;
}

// Helpers

async function caseMemberUsers(caseId: string) {
  const db = await getDb();
  const [c] = await db.select().from(schema.cases).where(eq(schema.cases.id, caseId));
  if (!c) return [];
  const direct = await db
    .select({ id: schema.users.id, email: schema.users.email, role: schema.caseMembers.role })
    .from(schema.caseMembers)
    .innerJoin(schema.users, eq(schema.users.id, schema.caseMembers.userId))
    .where(eq(schema.caseMembers.caseId, caseId));
  const org = await db
    .select({ id: schema.users.id, email: schema.users.email })
    .from(schema.memberships)
    .innerJoin(schema.users, eq(schema.users.id, schema.memberships.userId))
    .where(eq(schema.memberships.orgId, c.orgId));
  const seen = new Set(direct.map((d) => d.id));
  return [...direct, ...org.filter((o) => !seen.has(o.id)).map((o) => ({ ...o, role: "employer" as const }))];
}

export async function notify(userId: string, caseId: string | null, type: string, title: string, body: string) {
  const db = await getDb();
  const [u] = await db.select().from(schema.users).where(eq(schema.users.id, userId));
  const id = newId("ntf_");
  await db.insert(schema.notifications).values({ id, userId, caseId, type, title, body });
  if (u) {
    const r = await sendMail({ to: u.email, subject: `Emismart: ${title}`, text: `${body}\n\n${baseUrl()}/en/app` });
    if (r.delivered) await db.update(schema.notifications).set({ emailSentAt: new Date() }).where(eq(schema.notifications.id, id));
  }
}
