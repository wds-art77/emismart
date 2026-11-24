import "server-only";
import { randomBytes } from "node:crypto";
import { and, count, desc, eq, gt, isNull, or, inArray } from "drizzle-orm";
import { getDb, newId, schema } from "@/lib/db";
import { hashToken, baseUrl } from "@/lib/auth";
import { dispatch } from "@/lib/workflows";
import { countryByCode, type CountryCode } from "@/lib/countries";
import type { Locale } from "@/lib/i18n";
import { classify, type DocMeta } from "@/lib/documents/types";
import { languageCodes, validateDocument } from "@/lib/documents/validate";
import { getCountryRules } from "@/lib/rules/registry";
import "@/lib/rules/countries";

// Case service: everything the dashboard does with a case goes through here, with access checks.

export type CaseRole = "employer" | "employee" | "lawyer";
export type Access = { role: CaseRole; viaOrg: boolean };

export async function userOrgs(userId: string) {
  const db = await getDb();
  return db
    .select({ org: schema.organisations, role: schema.memberships.role })
    .from(schema.memberships)
    .innerJoin(schema.organisations, eq(schema.organisations.id, schema.memberships.orgId))
    .where(eq(schema.memberships.userId, userId));
}

export async function createOrganisation(userId: string, name: string, type: "employer" | "law_firm") {
  const db = await getDb();
  const id = newId("org_");
  await db.insert(schema.organisations).values({ id, name: name.trim().slice(0, 120), type });
  await db.insert(schema.memberships).values({ userId, orgId: id, role: "admin" });
  return id;
}

/** Determine how a user may access a case: as a named member, through the owning organisation, or through a counsel organisation linked to the case. */
export async function caseAccess(userId: string, caseId: string): Promise<Access | null> {
  const db = await getDb();
  const [member] = await db.select().from(schema.caseMembers).where(and(eq(schema.caseMembers.caseId, caseId), eq(schema.caseMembers.userId, userId)));
  if (member) return { role: member.role, viaOrg: false };
  const [c] = await db.select({ orgId: schema.cases.orgId }).from(schema.cases).where(eq(schema.cases.id, caseId));
  if (!c) return null;
  const [m] = await db.select().from(schema.memberships).where(and(eq(schema.memberships.orgId, c.orgId), eq(schema.memberships.userId, userId)));
  if (m) {
    const [org] = await db.select().from(schema.organisations).where(eq(schema.organisations.id, c.orgId));
    return { role: org?.type === "law_firm" ? "lawyer" : "employer", viaOrg: true };
  }
  const [counsel] = await db
    .select({ role: schema.caseOrgs.role })
    .from(schema.caseOrgs)
    .innerJoin(schema.memberships, eq(schema.memberships.orgId, schema.caseOrgs.orgId))
    .where(and(eq(schema.caseOrgs.caseId, caseId), eq(schema.memberships.userId, userId)));
  return counsel ? { role: counsel.role, viaOrg: true } : null;
}

export async function listCasesFor(userId: string) {
  const db = await getDb();
  const orgs = await userOrgs(userId);
  const orgIds = orgs.map((o) => o.org.id);
  const memberCaseIds = (await db.select({ id: schema.caseMembers.caseId }).from(schema.caseMembers).where(eq(schema.caseMembers.userId, userId))).map((r) => r.id);
  if (orgIds.length) {
    const counsel = await db.select({ id: schema.caseOrgs.caseId }).from(schema.caseOrgs).where(inArray(schema.caseOrgs.orgId, orgIds));
    memberCaseIds.push(...counsel.map((r) => r.id));
  }
  const where = [] as ReturnType<typeof eq>[];
  if (orgIds.length) where.push(inArray(schema.cases.orgId, orgIds));
  if (memberCaseIds.length) where.push(inArray(schema.cases.id, memberCaseIds));
  if (!where.length) return [];
  const rows = await db.select().from(schema.cases).where(or(...where)).orderBy(desc(schema.cases.updatedAt));
  const ids = rows.map((r) => r.id);
  const ms = ids.length ? await db.select({ caseId: schema.milestones.caseId, status: schema.milestones.status }).from(schema.milestones).where(inArray(schema.milestones.caseId, ids)) : [];
  const docs = ids.length ? await db.select({ caseId: schema.documents.caseId, status: schema.documents.status }).from(schema.documents).where(inArray(schema.documents.caseId, ids)) : [];
  return rows.map((c) => {
    const m = ms.filter((x) => x.caseId === c.id);
    const d = docs.filter((x) => x.caseId === c.id);
    return {
      ...c,
      milestonesDone: m.filter((x) => x.status === "done").length,
      milestonesTotal: m.length,
      docsReady: d.filter((x) => x.status === "uploaded" || x.status === "verified").length,
      docsTotal: d.length,
      docsToReview: d.filter((x) => x.status === "uploaded").length,
    };
  });
}

export async function createCase(userId: string, orgId: string, input: { country: CountryCode; employeeName: string; employeeEmail?: string; nationality?: string; jobTitle?: string; startDate?: string; notes?: string }) {
  const db = await getDb();
  const [m] = await db.select().from(schema.memberships).where(and(eq(schema.memberships.orgId, orgId), eq(schema.memberships.userId, userId)));
  if (!m) throw new Error("forbidden");
  if (!countryByCode(input.country)) throw new Error("unknown_country");
  const id = newId("case_");
  const d = new Date();
  const reference = `EMI-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}-${randomBytes(3).toString("hex").toUpperCase()}`;
  await db.insert(schema.cases).values({
    id,
    orgId,
    reference,
    country: input.country,
    employeeName: input.employeeName.trim().slice(0, 160),
    employeeEmail: input.employeeEmail?.trim().toLowerCase() || null,
    nationality: input.nationality?.trim() || null,
    jobTitle: input.jobTitle?.trim() || null,
    startDate: input.startDate || null,
    notes: input.notes?.trim() || null,
    createdBy: userId,
  });
  await dispatch({ type: "case.created", caseId: id, actorUserId: userId });
  if (input.employeeEmail) await invite(userId, id, input.employeeEmail, "employee", "en");
  return id;
}

export async function getCase(userId: string, caseId: string) {
  const access = await caseAccess(userId, caseId);
  if (!access) return null;
  const db = await getDb();
  const [c] = await db.select().from(schema.cases).where(eq(schema.cases.id, caseId));
  if (!c) return null;
  const [milestones, documents, events, members, invitations, org, comments, counselOrgs] = await Promise.all([
    db.select().from(schema.milestones).where(eq(schema.milestones.caseId, caseId)).orderBy(schema.milestones.position),
    db.select().from(schema.documents).where(eq(schema.documents.caseId, caseId)).orderBy(schema.documents.position, schema.documents.label),
    db.select({ e: schema.events, actorEmail: schema.users.email }).from(schema.events).leftJoin(schema.users, eq(schema.users.id, schema.events.actorUserId)).where(eq(schema.events.caseId, caseId)).orderBy(desc(schema.events.createdAt)).limit(100),
    db.select({ email: schema.users.email, name: schema.users.name, role: schema.caseMembers.role }).from(schema.caseMembers).innerJoin(schema.users, eq(schema.users.id, schema.caseMembers.userId)).where(eq(schema.caseMembers.caseId, caseId)),
    db.select().from(schema.invitations).where(and(eq(schema.invitations.caseId, caseId), isNull(schema.invitations.acceptedAt), gt(schema.invitations.expiresAt, new Date()))),
    db.select().from(schema.organisations).where(eq(schema.organisations.id, c.orgId)).then((r) => r[0]),
    db.select({ c: schema.comments, email: schema.users.email, name: schema.users.name }).from(schema.comments).innerJoin(schema.users, eq(schema.users.id, schema.comments.userId)).where(eq(schema.comments.caseId, caseId)).orderBy(desc(schema.comments.createdAt)).limit(200),
    db.select({ name: schema.organisations.name, role: schema.caseOrgs.role }).from(schema.caseOrgs).innerJoin(schema.organisations, eq(schema.organisations.id, schema.caseOrgs.orgId)).where(eq(schema.caseOrgs.caseId, caseId)),
  ]);
  return { case: c, access, milestones, documents, events, members, invitations, org, comments, counselOrgs, nextActions: nextActions(c, milestones, documents) };
}

export async function setMilestone(userId: string, caseId: string, milestoneId: string, patch: { status?: "todo" | "doing" | "done"; date?: string | null; note?: string | null }) {
  const access = await caseAccess(userId, caseId);
  if (!access || access.role === "employee") throw new Error("forbidden");
  const db = await getDb();
  await db.update(schema.milestones).set(patch).where(and(eq(schema.milestones.id, milestoneId), eq(schema.milestones.caseId, caseId)));
  await db.update(schema.cases).set({ updatedAt: new Date() }).where(eq(schema.cases.id, caseId));
  if (patch.status) await dispatch({ type: "milestone.updated", caseId, actorUserId: userId, milestoneId, status: patch.status });
}

export async function fileCase(userId: string, caseId: string, filedOn: string) {
  const access = await caseAccess(userId, caseId);
  if (!access || access.role === "employee") throw new Error("forbidden");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(filedOn)) throw new Error("invalid_date");
  await dispatch({ type: "case.filed", caseId, actorUserId: userId, filedOn });
}

export async function setStatus(userId: string, caseId: string, status: "draft" | "collecting" | "filed" | "decided" | "closed") {
  const access = await caseAccess(userId, caseId);
  if (!access || access.role === "employee") throw new Error("forbidden");
  const db = await getDb();
  await db.update(schema.cases).set({ status, updatedAt: new Date() }).where(eq(schema.cases.id, caseId));
  await dispatch({ type: "case.status", caseId, actorUserId: userId, status });
}

export async function requestReview(userId: string, caseId: string) {
  const access = await caseAccess(userId, caseId);
  if (!access) throw new Error("forbidden");
  await dispatch({ type: "review.requested", caseId, actorUserId: userId });
}

export async function invite(userId: string, caseId: string, emailRaw: string, role: CaseRole, locale: Locale) {
  const access = await caseAccess(userId, caseId);
  if (!access || access.role === "employee") throw new Error("forbidden");
  const email = emailRaw.trim().toLowerCase();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error("invalid_email");
  const db = await getDb();
  const token = randomBytes(32).toString("base64url");
  await db.insert(schema.invitations).values({ id: newId("inv_"), caseId, email, role, tokenHash: hashToken(token), expiresAt: new Date(Date.now() + 7 * 86_400_000) });
  const link = `${baseUrl()}/${locale}/auth/invite?token=${token}`;
  await dispatch({ type: "member.invited", caseId, actorUserId: userId, email, role, link });
  return link;
}

/** Accept an invitation for the signed-in user. Returns the case id or null. */
export async function acceptInvitation(userId: string, token: string): Promise<string | null> {
  const db = await getDb();
  const [inv] = await db.select().from(schema.invitations).where(and(eq(schema.invitations.tokenHash, hashToken(token)), isNull(schema.invitations.acceptedAt), gt(schema.invitations.expiresAt, new Date())));
  if (!inv) return null;
  await db.insert(schema.caseMembers).values({ caseId: inv.caseId, userId, role: inv.role }).onConflictDoNothing();
  await db.update(schema.invitations).set({ acceptedAt: new Date() }).where(eq(schema.invitations.id, inv.id));
  // A lawyer who belongs to a law firm brings the firm: colleagues see the case too (counsel organisation link).
  if (inv.role === "lawyer") {
    const firms = (await userOrgs(userId)).filter((o) => o.org.type === "law_firm");
    for (const f of firms) await db.insert(schema.caseOrgs).values({ caseId: inv.caseId, orgId: f.org.id, role: "lawyer" }).onConflictDoNothing();
  }
  await db.insert(schema.events).values({ id: newId("evt_"), caseId: inv.caseId, actorUserId: userId, type: "member.joined", payload: { role: inv.role } });
  return inv.caseId;
}

// Documents

export async function requestDocument(userId: string, caseId: string, party: "employer" | "employee", label: string, note?: string) {
  const access = await caseAccess(userId, caseId);
  if (!access || access.role === "employee") throw new Error("forbidden");
  const db = await getDb();
  const id = newId("doc_");
  const [{ n }] = await db.select({ n: count() }).from(schema.documents).where(eq(schema.documents.caseId, caseId));
  await db.insert(schema.documents).values({ id, caseId, party, position: 1000 + n, label: label.trim().slice(0, 200), note: note?.trim() || null });
  await db.insert(schema.events).values({ id: newId("evt_"), caseId, actorUserId: userId, type: "document.requested", payload: { documentId: id, label } });
  return id;
}

export async function beginUpload(userId: string, caseId: string, documentId: string, filename: string, mime: string, size: number) {
  const access = await caseAccess(userId, caseId);
  if (!access) throw new Error("forbidden");
  const { getStorage, ALLOWED_MIME, MAX_UPLOAD_BYTES } = await import("@/lib/storage");
  if (!ALLOWED_MIME.has(mime)) throw new Error("unsupported_type");
  if (size <= 0 || size > MAX_UPLOAD_BYTES) throw new Error("too_large");
  const db = await getDb();
  const [doc] = await db.select().from(schema.documents).where(and(eq(schema.documents.id, documentId), eq(schema.documents.caseId, caseId)));
  if (!doc) throw new Error("not_found");
  if (access.role === "employee" && doc.party !== "employee") throw new Error("forbidden");
  const key = `cases/${caseId}/${documentId}/${Date.now()}-${filename.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80)}`;
  const target = await (await getStorage()).createUploadUrl(key, mime, size);
  return { key, target };
}

export async function completeUpload(userId: string, caseId: string, documentId: string, key: string, filename: string, mime: string, size: number) {
  const access = await caseAccess(userId, caseId);
  if (!access) throw new Error("forbidden");
  if (!key.startsWith(`cases/${caseId}/${documentId}/`)) throw new Error("bad_key");
  const db = await getDb();
  await db
    .update(schema.documents)
    .set({ status: "uploaded", storageKey: key, filename: filename.slice(0, 200), mime, size, uploadedBy: userId, uploadedAt: new Date(), reviewNote: null, reviewedAt: null, reviewedBy: null })
    .where(and(eq(schema.documents.id, documentId), eq(schema.documents.caseId, caseId)));
  await revalidateDocument(caseId, documentId);
  await dispatch({ type: "document.uploaded", caseId, actorUserId: userId, documentId });
}

/** Save document metadata (issuing country, dates, language, authentication) and run the validation rules. */
export async function setDocumentMeta(userId: string, caseId: string, documentId: string, meta: DocMeta) {
  const access = await caseAccess(userId, caseId);
  if (!access) throw new Error("forbidden");
  const db = await getDb();
  const clean: Record<string, string> = {};
  for (const [k, v] of Object.entries(meta)) if (v) clean[k] = String(v).slice(0, 80);
  await db.update(schema.documents).set({ meta: clean }).where(and(eq(schema.documents.id, documentId), eq(schema.documents.caseId, caseId)));
  await revalidateDocument(caseId, documentId);
  await db.insert(schema.events).values({ id: newId("evt_"), caseId, actorUserId: userId, type: "document.details", payload: { documentId } });
}

export async function revalidateDocument(caseId: string, documentId: string) {
  const db = await getDb();
  const [c] = await db.select().from(schema.cases).where(eq(schema.cases.id, caseId));
  const [doc] = await db.select().from(schema.documents).where(eq(schema.documents.id, documentId));
  const country = c && countryByCode(c.country);
  if (!c || !doc || !country) return;
  const docType = classify(doc.label);
  const checks = validateDocument(doc.label, doc.meta as DocMeta, { destination: c.country, intendedStart: c.startDate, acceptedLanguages: languageCodes(country.languages), rules: getCountryRules(c.country) }, !!doc.storageKey, docType);
  await db.update(schema.documents).set({ docType, checks }).where(eq(schema.documents.id, documentId));
}

export async function reviewDocument(userId: string, caseId: string, documentId: string, status: "verified" | "rejected", note?: string) {
  const access = await caseAccess(userId, caseId);
  if (!access || access.role === "employee") throw new Error("forbidden");
  const db = await getDb();
  await db.update(schema.documents).set({ status, reviewNote: note?.trim() || null, reviewedBy: userId, reviewedAt: new Date() }).where(and(eq(schema.documents.id, documentId), eq(schema.documents.caseId, caseId)));
  await dispatch({ type: "document.reviewed", caseId, actorUserId: userId, documentId, status });
}

export async function downloadUrl(userId: string, caseId: string, documentId: string): Promise<string | null> {
  const access = await caseAccess(userId, caseId);
  if (!access) throw new Error("forbidden");
  const db = await getDb();
  const [doc] = await db.select().from(schema.documents).where(and(eq(schema.documents.id, documentId), eq(schema.documents.caseId, caseId)));
  if (!doc?.storageKey) return null;
  await db.insert(schema.events).values({ id: newId("evt_"), caseId, actorUserId: userId, type: "document.downloaded", payload: { documentId } });
  const { getStorage } = await import("@/lib/storage");
  return (await getStorage()).createDownloadUrl(doc.storageKey, doc.filename ?? "document");
}

export async function listNotifications(userId: string) {
  const db = await getDb();
  return db.select().from(schema.notifications).where(eq(schema.notifications.userId, userId)).orderBy(desc(schema.notifications.createdAt)).limit(50);
}

export async function markNotificationsRead(userId: string) {
  const db = await getDb();
  await db.update(schema.notifications).set({ readAt: new Date() }).where(and(eq(schema.notifications.userId, userId), isNull(schema.notifications.readAt)));
}

// Comments

export async function addComment(userId: string, caseId: string, body: string) {
  const access = await caseAccess(userId, caseId);
  if (!access) throw new Error("forbidden");
  const text = body.trim().slice(0, 4000);
  if (!text) return;
  const db = await getDb();
  await db.insert(schema.comments).values({ id: newId("cmt_"), caseId, userId, body: text });
  await db.update(schema.cases).set({ updatedAt: new Date() }).where(eq(schema.cases.id, caseId));
  await dispatch({ type: "comment.added", caseId, actorUserId: userId, excerpt: text.slice(0, 120) });
}

// Next actions: what each party should do now, derived from the state of the case.

export type NextAction = { party: "employer" | "employee" | "lawyer" | "authority"; code: "upload" | "review" | "milestone" | "file" | "details" | "wait"; label?: string; count?: number };

export function nextActions(c: schema.Case, milestones: schema.Milestone[], documents: schema.Document[]): NextAction[] {
  const out: NextAction[] = [];
  if (c.status === "closed") return out;
  for (const party of ["employer", "employee"] as const) {
    const toUpload = documents.filter((d) => d.party === party && (d.status === "requested" || d.status === "rejected"));
    if (toUpload.length) out.push({ party, code: "upload", count: toUpload.length });
    const noDetails = documents.filter((d) => d.party === party && d.status !== "requested" && d.checks.some((x) => x.code === "meta_missing"));
    if (noDetails.length) out.push({ party, code: "details", count: noDetails.length });
  }
  const toReview = documents.filter((d) => d.status === "uploaded");
  if (toReview.length) out.push({ party: "employer", code: "review", count: toReview.length });
  const next = milestones.find((m) => m.status !== "done");
  if (next) out.push({ party: next.actor === "Employee" ? "employee" : next.actor === "Authority" ? "authority" : "employer", code: next.actor === "Authority" ? "wait" : "milestone", label: next.title });
  if (!c.filedOn && documents.length && documents.every((d) => d.status === "verified")) out.push({ party: "employer", code: "file" });
  return out;
}
