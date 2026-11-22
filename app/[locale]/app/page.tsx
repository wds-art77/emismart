import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { listCasesFor, userOrgs } from "@/lib/cases";
import { dicts, fmt, isLocale, countryName } from "@/lib/i18n";
import { countryByCode } from "@/lib/countries";
import { Link } from "@/components/link";
import { Pill } from "@/components/ui";

export const dynamic = "force-dynamic";

const statusTone = { draft: "grey", collecting: "navy", filed: "gold", decided: "green", closed: "grey" } as const;

export default async function DashboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  const locale = isLocale(l) ? l : "en";
  const d = dicts[locale];
  const user = await requireUser(locale, `/${locale}/app`);
  const [orgs, rows] = await Promise.all([userOrgs(user.id), listCasesFor(user.id)]);
  if (!orgs.length && !rows.length) redirect(`/${locale}/app/onboarding`);
  const horizon = new Date(Date.now() + 14 * 86_400_000).toISOString().slice(0, 10);
  const kpis = [
    [d.app.kpiOpen, rows.filter((c) => c.status !== "closed").length],
    [d.app.kpiFiled, rows.filter((c) => c.status === "filed").length],
    [d.app.kpiToReview, rows.reduce((n, c) => n + c.docsToReview, 0)],
    [d.app.kpiDue, rows.filter((c) => c.decisionDue && c.decisionDue <= horizon && c.status === "filed").length],
  ] as const;
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">{d.app.cases}</h1>
          {orgs[0] && <p className="mt-1 text-sm text-navy-800/70">{orgs.map((o) => o.org.name).join(", ")}</p>}
        </div>
        {orgs.length > 0 && (
          <Link href="/app/cases/new" className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800">{d.app.newCase}</Link>
        )}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-navy-900/10 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-800/60">{label}</p>
            <p className="mt-2 text-3xl font-semibold">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-navy-900/10 bg-white">
        {rows.length === 0 ? (
          <p className="p-6 text-sm text-navy-800/70">{d.app.noCases}</p>
        ) : (
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="bg-navy-50 text-xs uppercase tracking-wider text-navy-800/70">
              <tr>
                <th className="px-4 py-3">{d.app.colReference}</th>
                <th className="px-4 py-3">{d.app.colEmployee}</th>
                <th className="px-4 py-3">{d.app.colCountry}</th>
                <th className="px-4 py-3">{d.app.colStatus}</th>
                <th className="px-4 py-3">{d.app.colProgress}</th>
                <th className="px-4 py-3">{d.app.colDocuments}</th>
                <th className="px-4 py-3">{d.app.colDue}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((c) => {
                const country = countryByCode(c.country);
                return (
                  <tr key={c.id} className="border-t border-navy-900/10 hover:bg-navy-50/50">
                    <td className="px-4 py-3 font-medium"><Link href={`/app/cases/${c.id}`} className="hover:underline">{c.reference}</Link></td>
                    <td className="px-4 py-3">{c.employeeName}<span className="block text-xs text-navy-800/60">{c.jobTitle ?? ""}</span></td>
                    <td className="px-4 py-3">{country?.flag} {countryName(c.country, locale, country?.name ?? c.country)}</td>
                    <td className="px-4 py-3"><Pill tone={statusTone[c.status]}>{d.app.status[c.status]}</Pill></td>
                    <td className="px-4 py-3">
                      <div className="h-1.5 w-28 overflow-hidden rounded-full bg-navy-100"><div className="h-full bg-navy-900" style={{ width: `${c.milestonesTotal ? Math.round((c.milestonesDone / c.milestonesTotal) * 100) : 0}%` }} /></div>
                      <span className="text-xs text-navy-800/60">{fmt(d.app.progress, { done: c.milestonesDone, total: c.milestonesTotal })}</span>
                    </td>
                    <td className="px-4 py-3">
                      {fmt(d.app.docsReady, { ready: c.docsReady, total: c.docsTotal })}
                      {c.docsToReview > 0 && <Pill tone="gold">{c.docsToReview}</Pill>}
                    </td>
                    <td className="px-4 py-3">{c.decisionDue ?? "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
