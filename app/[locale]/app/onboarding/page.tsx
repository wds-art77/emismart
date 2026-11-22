import { requireUser } from "@/lib/auth";
import { dicts, isLocale } from "@/lib/i18n";
import { createOrgAction } from "../actions";

export const dynamic = "force-dynamic";

export default async function OnboardingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  const locale = isLocale(l) ? l : "en";
  const d = dicts[locale];
  await requireUser(locale, `/${locale}/app/onboarding`);
  const input = "mt-1 w-full rounded-xl border border-navy-900/20 px-4 py-3 text-sm focus:border-navy-900 focus:outline-none";
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-semibold">{d.app.onboardingTitle}</h1>
      <p className="mt-3 text-navy-800/80">{d.app.onboardingLead}</p>
      <form action={createOrgAction} className="mt-8 space-y-5 rounded-2xl border border-navy-900/10 bg-white p-6">
        <input type="hidden" name="locale" value={locale} />
        <div>
          <label htmlFor="name" className="block text-sm font-medium">{d.app.orgName}</label>
          <input id="name" name="name" required className={input} />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium">{d.app.orgType}</label>
          <select id="type" name="type" className={input}>
            <option value="employer">{d.app.orgEmployer}</option>
            <option value="law_firm">{d.app.orgLawFirm}</option>
          </select>
        </div>
        <button className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800">{d.app.create}</button>
      </form>
    </div>
  );
}
