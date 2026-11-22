"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requestMagicLink, requireUser, signOut } from "@/lib/auth";
import { isLocale, type Locale } from "@/lib/i18n";
import * as cases from "@/lib/cases";
import type { CountryCode } from "@/lib/countries";

const loc = (fd: FormData): Locale => {
  const l = String(fd.get("locale") ?? "en");
  return isLocale(l) ? l : "en";
};
const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();

export type LoginState = { sent?: boolean; devLink?: string; error?: string };

export async function sendLoginLink(_prev: LoginState, fd: FormData): Promise<LoginState> {
  const r = await requestMagicLink(str(fd, "email"), loc(fd), str(fd, "next") || undefined);
  if (!r.ok) return { error: r.error };
  return { sent: true, devLink: r.devLink };
}

export async function signOutAction(fd: FormData) {
  await signOut();
  redirect(`/${loc(fd)}`);
}

export async function createOrgAction(fd: FormData) {
  const l = loc(fd);
  const user = await requireUser(l);
  const type = str(fd, "type") === "law_firm" ? "law_firm" : "employer";
  const name = str(fd, "name");
  if (!name) return;
  await cases.createOrganisation(user.id, name, type);
  redirect(`/${l}/app`);
}

export async function createCaseAction(fd: FormData) {
  const l = loc(fd);
  const user = await requireUser(l);
  const orgId = str(fd, "orgId");
  const id = await cases.createCase(user.id, orgId, {
    country: str(fd, "country") as CountryCode,
    employeeName: str(fd, "employeeName"),
    employeeEmail: str(fd, "employeeEmail"),
    nationality: str(fd, "nationality"),
    jobTitle: str(fd, "jobTitle"),
    startDate: str(fd, "startDate"),
    notes: str(fd, "notes"),
  });
  redirect(`/${l}/app/cases/${id}`);
}

export async function updateMilestoneAction(fd: FormData) {
  const l = loc(fd);
  const user = await requireUser(l);
  const caseId = str(fd, "caseId");
  const status = str(fd, "status") as "todo" | "doing" | "done";
  await cases.setMilestone(user.id, caseId, str(fd, "milestoneId"), { status, date: str(fd, "date") || null, note: str(fd, "note") || null });
  revalidatePath(`/${l}/app/cases/${caseId}`);
}

export async function fileCaseAction(fd: FormData) {
  const l = loc(fd);
  const user = await requireUser(l);
  const caseId = str(fd, "caseId");
  await cases.fileCase(user.id, caseId, str(fd, "filedOn"));
  revalidatePath(`/${l}/app/cases/${caseId}`);
}

export async function setStatusAction(fd: FormData) {
  const l = loc(fd);
  const user = await requireUser(l);
  const caseId = str(fd, "caseId");
  await cases.setStatus(user.id, caseId, str(fd, "status") as "draft" | "collecting" | "filed" | "decided" | "closed");
  revalidatePath(`/${l}/app/cases/${caseId}`);
}

export async function requestReviewAction(fd: FormData) {
  const l = loc(fd);
  const user = await requireUser(l);
  const caseId = str(fd, "caseId");
  await cases.requestReview(user.id, caseId);
  revalidatePath(`/${l}/app/cases/${caseId}`);
}

export async function inviteAction(fd: FormData) {
  const l = loc(fd);
  const user = await requireUser(l);
  const caseId = str(fd, "caseId");
  const role = str(fd, "role") as cases.CaseRole;
  await cases.invite(user.id, caseId, str(fd, "email"), ["employer", "employee", "lawyer"].includes(role) ? role : "employee", l);
  revalidatePath(`/${l}/app/cases/${caseId}`);
}

export async function requestDocumentAction(fd: FormData) {
  const l = loc(fd);
  const user = await requireUser(l);
  const caseId = str(fd, "caseId");
  await cases.requestDocument(user.id, caseId, str(fd, "party") === "employer" ? "employer" : "employee", str(fd, "label"), str(fd, "note"));
  revalidatePath(`/${l}/app/cases/${caseId}`);
}

export async function reviewDocumentAction(fd: FormData) {
  const l = loc(fd);
  const user = await requireUser(l);
  const caseId = str(fd, "caseId");
  await cases.reviewDocument(user.id, caseId, str(fd, "documentId"), str(fd, "status") === "verified" ? "verified" : "rejected", str(fd, "note"));
  revalidatePath(`/${l}/app/cases/${caseId}`);
}

export async function beginUploadAction(caseId: string, documentId: string, filename: string, mime: string, size: number) {
  const user = await requireUser("en");
  return cases.beginUpload(user.id, caseId, documentId, filename, mime, size);
}

export async function completeUploadAction(locale: string, caseId: string, documentId: string, key: string, filename: string, mime: string, size: number) {
  const user = await requireUser("en");
  await cases.completeUpload(user.id, caseId, documentId, key, filename, mime, size);
  revalidatePath(`/${isLocale(locale) ? locale : "en"}/app/cases/${caseId}`);
}

export async function downloadAction(fd: FormData) {
  const l = loc(fd);
  const user = await requireUser(l);
  const url = await cases.downloadUrl(user.id, str(fd, "caseId"), str(fd, "documentId"));
  if (url) redirect(url);
}

export async function markReadAction(fd: FormData) {
  const l = loc(fd);
  const user = await requireUser(l);
  await cases.markNotificationsRead(user.id);
  revalidatePath(`/${l}/app/notifications`);
}
