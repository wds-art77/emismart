import { boolean, index, integer, jsonb, pgEnum, pgTable, primaryKey, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

// Emismart production data model. Postgres, managed with Drizzle.
// Personal data lives here; see DEPLOYMENT.md for the GDPR notes (EU hosting, retention, DPA).

export const orgType = pgEnum("org_type", ["employer", "law_firm"]);
export const orgRole = pgEnum("org_role", ["admin", "member"]);
export const caseRole = pgEnum("case_role", ["employer", "employee", "lawyer"]);
export const caseStatus = pgEnum("case_status", ["draft", "collecting", "filed", "decided", "closed"]);
export const milestoneStatus = pgEnum("milestone_status", ["todo", "doing", "done"]);
export const docStatus = pgEnum("doc_status", ["requested", "uploaded", "verified", "rejected"]);
export const party = pgEnum("party", ["employer", "employee"]);

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name"),
  locale: text("locale").notNull().default("en"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [uniqueIndex("users_email_idx").on(t.email)]);

export const organisations = pgTable("organisations", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  type: orgType("type").notNull().default("employer"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const memberships = pgTable("memberships", {
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  orgId: text("org_id").notNull().references(() => organisations.id, { onDelete: "cascade" }),
  role: orgRole("role").notNull().default("member"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [primaryKey({ columns: [t.userId, t.orgId] })]);

export const magicLinks = pgTable("magic_links", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  tokenHash: text("token_hash").notNull(),
  redirect: text("redirect"),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  usedAt: timestamp("used_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("magic_links_hash_idx").on(t.tokenHash)]);

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  tokenHash: text("token_hash").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("sessions_hash_idx").on(t.tokenHash)]);

export const cases = pgTable("cases", {
  id: text("id").primaryKey(),
  orgId: text("org_id").notNull().references(() => organisations.id, { onDelete: "cascade" }),
  reference: text("reference").notNull(),
  country: text("country").notNull(),
  route: text("route").notNull().default("single-permit"),
  status: caseStatus("status").notNull().default("draft"),
  employeeName: text("employee_name").notNull(),
  employeeEmail: text("employee_email"),
  nationality: text("nationality"),
  jobTitle: text("job_title"),
  startDate: text("start_date"),
  filedOn: text("filed_on"),
  decisionDue: text("decision_due"),
  notes: text("notes"),
  reviewRequestedAt: timestamp("review_requested_at", { withTimezone: true }),
  createdBy: text("created_by").references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("cases_org_idx").on(t.orgId), uniqueIndex("cases_reference_idx").on(t.reference)]);

export const caseMembers = pgTable("case_members", {
  caseId: text("case_id").notNull().references(() => cases.id, { onDelete: "cascade" }),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  role: caseRole("role").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [primaryKey({ columns: [t.caseId, t.userId] })]);

export const invitations = pgTable("invitations", {
  id: text("id").primaryKey(),
  caseId: text("case_id").notNull().references(() => cases.id, { onDelete: "cascade" }),
  email: text("email").notNull(),
  role: caseRole("role").notNull(),
  tokenHash: text("token_hash").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  acceptedAt: timestamp("accepted_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("invitations_hash_idx").on(t.tokenHash)]);

export const milestones = pgTable("milestones", {
  id: text("id").primaryKey(),
  caseId: text("case_id").notNull().references(() => cases.id, { onDelete: "cascade" }),
  position: integer("position").notNull(),
  title: text("title").notNull(),
  actor: text("actor").notNull(),
  status: milestoneStatus("status").notNull().default("todo"),
  date: text("date"),
  note: text("note"),
}, (t) => [index("milestones_case_idx").on(t.caseId)]);

export const documents = pgTable("documents", {
  id: text("id").primaryKey(),
  caseId: text("case_id").notNull().references(() => cases.id, { onDelete: "cascade" }),
  party: party("party").notNull(),
  label: text("label").notNull(),
  note: text("note"),
  required: boolean("required").notNull().default(true),
  status: docStatus("status").notNull().default("requested"),
  storageKey: text("storage_key"),
  filename: text("filename"),
  mime: text("mime"),
  size: integer("size"),
  docType: text("doc_type"),
  meta: jsonb("meta").$type<Record<string, string>>().notNull().default({}),
  checks: jsonb("checks").$type<{ code: string; level: string; params?: Record<string, string | number> }[]>().notNull().default([]),
  uploadedBy: text("uploaded_by").references(() => users.id),
  uploadedAt: timestamp("uploaded_at", { withTimezone: true }),
  reviewedBy: text("reviewed_by").references(() => users.id),
  reviewedAt: timestamp("reviewed_at", { withTimezone: true }),
  reviewNote: text("review_note"),
}, (t) => [index("documents_case_idx").on(t.caseId)]);

export const comments = pgTable("comments", {
  id: text("id").primaryKey(),
  caseId: text("case_id").notNull().references(() => cases.id, { onDelete: "cascade" }),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  body: text("body").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("comments_case_idx").on(t.caseId)]);

export const caseOrgs = pgTable("case_orgs", {
  caseId: text("case_id").notNull().references(() => cases.id, { onDelete: "cascade" }),
  orgId: text("org_id").notNull().references(() => organisations.id, { onDelete: "cascade" }),
  role: caseRole("role").notNull().default("lawyer"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [primaryKey({ columns: [t.caseId, t.orgId] })]);

export const events = pgTable("events", {
  id: text("id").primaryKey(),
  caseId: text("case_id").references(() => cases.id, { onDelete: "cascade" }),
  actorUserId: text("actor_user_id").references(() => users.id),
  type: text("type").notNull(),
  payload: jsonb("payload").$type<Record<string, unknown>>().notNull().default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("events_case_idx").on(t.caseId)]);

export const notifications = pgTable("notifications", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  caseId: text("case_id").references(() => cases.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  title: text("title").notNull(),
  body: text("body").notNull(),
  emailSentAt: timestamp("email_sent_at", { withTimezone: true }),
  readAt: timestamp("read_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("notifications_user_idx").on(t.userId)]);

export type User = typeof users.$inferSelect;
export type Organisation = typeof organisations.$inferSelect;
export type Case = typeof cases.$inferSelect;
export type Milestone = typeof milestones.$inferSelect;
export type Document = typeof documents.$inferSelect;
export type Event = typeof events.$inferSelect;
export type Comment = typeof comments.$inferSelect;
export type Notification = typeof notifications.$inferSelect;
