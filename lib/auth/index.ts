import "server-only";
import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { and, eq, gt, isNull } from "drizzle-orm";
import { getDb, newId, schema } from "@/lib/db";
import { sendMail } from "@/lib/mail";
import { SITE } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

// Passwordless authentication: a one-time e-mail link creates a 30-day session stored in the database.
// The browser holds only a random session token in an httpOnly cookie.

const SESSION_COOKIE = "emismart_session";
const SESSION_DAYS = 30;
const LINK_MINUTES = 15;

export const hashToken = (t: string) => createHash("sha256").update(t).digest("hex");
const secret = () => process.env.AUTH_SECRET ?? "development-secret-change-me";

export function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}
export function verifySignature(payload: string, sig: string): boolean {
  const a = Buffer.from(sign(payload));
  const b = Buffer.from(sig);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function baseUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL ?? (process.env.NODE_ENV === "production" ? SITE : "http://localhost:3000");
}

export async function requestMagicLink(emailRaw: string, locale: Locale, redirectTo?: string) {
  const email = emailRaw.trim().toLowerCase();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return { ok: false as const, error: "invalid_email" };
  const db = await getDb();
  const token = randomBytes(32).toString("base64url");
  await db.insert(schema.magicLinks).values({
    id: newId("ml_"),
    email,
    tokenHash: hashToken(token),
    redirect: redirectTo && redirectTo.startsWith("/") ? redirectTo : null,
    expiresAt: new Date(Date.now() + LINK_MINUTES * 60_000),
  });
  const link = `${baseUrl()}/${locale}/auth/verify?token=${token}`;
  const mail = await sendMail({
    to: email,
    subject: "Your Emismart sign-in link",
    text: `Sign in to Emismart with this link (valid ${LINK_MINUTES} minutes):\n\n${link}\n\nIf you did not request it, ignore this message.`,
  });
  return { ok: true as const, delivered: mail.delivered, devLink: mail.delivered ? undefined : link };
}

export async function verifyMagicLink(token: string): Promise<{ ok: true; redirect: string | null } | { ok: false }> {
  const db = await getDb();
  const [row] = await db
    .select()
    .from(schema.magicLinks)
    .where(and(eq(schema.magicLinks.tokenHash, hashToken(token)), isNull(schema.magicLinks.usedAt), gt(schema.magicLinks.expiresAt, new Date())))
    .limit(1);
  if (!row) return { ok: false };
  await db.update(schema.magicLinks).set({ usedAt: new Date() }).where(eq(schema.magicLinks.id, row.id));
  let [user] = await db.select().from(schema.users).where(eq(schema.users.email, row.email)).limit(1);
  if (!user) {
    [user] = await db.insert(schema.users).values({ id: newId("usr_"), email: row.email }).returning();
  }
  await createSession(user.id);
  return { ok: true, redirect: row.redirect };
}

async function createSession(userId: string) {
  const db = await getDb();
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 86_400_000);
  await db.insert(schema.sessions).values({ id: newId("ses_"), userId, tokenHash: hashToken(token), expiresAt });
  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt,
  });
}

export async function getSessionUser(): Promise<schema.User | null> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const db = await getDb();
  const [row] = await db
    .select({ user: schema.users })
    .from(schema.sessions)
    .innerJoin(schema.users, eq(schema.users.id, schema.sessions.userId))
    .where(and(eq(schema.sessions.tokenHash, hashToken(token)), gt(schema.sessions.expiresAt, new Date())))
    .limit(1);
  return row?.user ?? null;
}

export async function requireUser(locale: Locale, next?: string): Promise<schema.User> {
  const user = await getSessionUser();
  if (!user) redirect(`/${locale}/login${next ? `?next=${encodeURIComponent(next)}` : ""}`);
  return user;
}

export async function signOut() {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (token) {
    const db = await getDb();
    await db.delete(schema.sessions).where(eq(schema.sessions.tokenHash, hashToken(token)));
  }
  jar.delete(SESSION_COOKIE);
}
