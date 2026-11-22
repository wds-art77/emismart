import { and, count, eq, isNull } from "drizzle-orm";
import { requireUser } from "@/lib/auth";
import { getDb, isDatabaseConfigured, schema } from "@/lib/db";
import { dicts, isLocale } from "@/lib/i18n";
import { Container } from "@/components/ui";
import { Link } from "@/components/link";
import { signOutAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function AppLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  const locale = isLocale(l) ? l : "en";
  const d = dicts[locale];
  if (!isDatabaseConfigured()) {
    return (
      <Container className="py-20">
        <p className="rounded-xl border border-gold-500/40 bg-gold-100/50 p-4 text-sm">{d.app.notConfigured}</p>
      </Container>
    );
  }
  const user = await requireUser(locale, `/${locale}/app`);
  const db = await getDb();
  const [{ unread }] = await db.select({ unread: count() }).from(schema.notifications).where(and(eq(schema.notifications.userId, user.id), isNull(schema.notifications.readAt)));
  return (
    <div className="bg-sand-50">
      <div className="border-b border-navy-900/10 bg-white">
        <Container className="flex h-12 items-center justify-between text-sm">
          <div className="flex items-center gap-5">
            <Link href="/app" className="font-semibold text-navy-900">{d.app.dashboard}</Link>
            <Link href="/app/notifications" className="text-navy-900/80 hover:text-navy-900">
              {d.app.notifications}
              {unread > 0 && <span className="ml-1 rounded-full bg-gold-500 px-2 py-0.5 text-xs font-semibold text-navy-950">{unread}</span>}
            </Link>
          </div>
          <form action={signOutAction} className="flex items-center gap-3 text-navy-900/70">
            <input type="hidden" name="locale" value={locale} />
            <span className="hidden sm:inline">{user.email}</span>
            <button className="font-medium hover:text-navy-900">{d.app.signOut}</button>
          </form>
        </Container>
      </div>
      <Container className="py-10">{children}</Container>
    </div>
  );
}
