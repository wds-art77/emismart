import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { userOrgs } from "@/lib/cases";
import { countries } from "@/lib/countries";
import { dicts, isLocale, countryName } from "@/lib/i18n";
import { createCaseAction } from "../../actions";

export const dynamic = "force-dynamic";

export default async function NewCasePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  const locale = isLocale(l) ? l : "en";
  const d = dicts[locale];
  const user = await requireUser(locale, `/${locale}/app/cases/new`);
  const orgs = await userOrgs(user.id);
  if (!orgs.length) redirect(`/${locale}/app/onboarding`);
  const input = "mt-1 w-full rounded-xl border border-navy-900/20 px-4 py-3 text-sm focus:border-navy-900 focus:outline-none";
  const label = "block text-sm font-medium";
  const sorted = countries.map((c) => ({ code: c.code, flag: c.flag, name: countryName(c.code, locale, c.name) })).sort((a, b) => a.name.localeCompare(b.name, locale));
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold">{d.app.newCaseTitle}</h1>
      <p className="mt-3 text-navy-800/80">{d.app.newCaseLead}</p>
      <form action={createCaseAction} className="mt-8 grid gap-5 rounded-2xl border border-navy-900/10 bg-white p-6 sm:grid-cols-2">
        <input type="hidden" name="locale" value={locale} />
        <div className="sm:col-span-2">
          <label htmlFor="orgId" className={label}>{d.app.organisation}</label>
          <select id="orgId" name="orgId" className={input}>
            {orgs.map((o) => <option key={o.org.id} value={o.org.id}>{o.org.name}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="country" className={label}>{d.app.country}</label>
          <select id="country" name="country" required className={input} defaultValue="">
            <option value="" disabled>{d.common.chooseCountry}</option>
            {sorted.map((c) => <option key={c.code} value={c.code}>{c.flag} {c.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="employeeName" className={label}>{d.app.employeeName}</label>
          <input id="employeeName" name="employeeName" required className={input} />
        </div>
        <div>
          <label htmlFor="employeeEmail" className={label}>{d.app.employeeEmail}</label>
          <input id="employeeEmail" name="employeeEmail" type="email" className={input} />
        </div>
        <div>
          <label htmlFor="nationality" className={label}>{d.app.nationality}</label>
          <input id="nationality" name="nationality" className={input} />
        </div>
        <div>
          <label htmlFor="jobTitle" className={label}>{d.app.jobTitle}</label>
          <input id="jobTitle" name="jobTitle" className={input} />
        </div>
        <div>
          <label htmlFor="startDate" className={label}>{d.app.startDate}</label>
          <input id="startDate" name="startDate" type="date" className={input} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="notes" className={label}>{d.app.notes}</label>
          <textarea id="notes" name="notes" rows={3} className={input} />
        </div>
        <div className="sm:col-span-2">
          <button className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800">{d.app.create}</button>
        </div>
      </form>
    </div>
  );
}
