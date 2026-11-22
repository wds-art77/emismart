import { requireUser } from "@/lib/auth";
import { listNotifications } from "@/lib/cases";
import { dicts, isLocale } from "@/lib/i18n";
import { Link } from "@/components/link";
import { markReadAction } from "../actions";

export const dynamic = "force-dynamic";

export default async function NotificationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  const locale = isLocale(l) ? l : "en";
  const d = dicts[locale];
  const user = await requireUser(locale, `/${locale}/app/notifications`);
  const rows = await listNotifications(user.id);
  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">{d.app.notifications}</h1>
        <form action={markReadAction}>
          <input type="hidden" name="locale" value={locale} />
          <button className="text-sm font-medium text-navy-900 underline-offset-4 hover:underline">{d.app.markRead}</button>
        </form>
      </div>
      <ul className="mt-6 space-y-3">
        {rows.length === 0 && <li className="text-sm text-navy-800/70">{d.app.noNotifications}</li>}
        {rows.map((n) => (
          <li key={n.id} className={`rounded-2xl border p-4 ${n.readAt ? "border-navy-900/10 bg-white" : "border-gold-500/40 bg-gold-100/30"}`}>
            <div className="flex items-start justify-between gap-3">
              <p className="font-medium">{n.title}</p>
              <span className="text-xs text-navy-800/60">{new Date(n.createdAt).toLocaleString(locale)}</span>
            </div>
            <p className="mt-1 text-sm text-navy-800/85">{n.body}</p>
            {n.caseId && <Link href={`/app/cases/${n.caseId}`} className="mt-2 inline-block text-sm font-semibold text-navy-900 underline-offset-4 hover:underline">{d.app.open}</Link>}
          </li>
        ))}
      </ul>
    </div>
  );
}
