import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { isDatabaseConfigured } from "@/lib/db";
import { pageMeta } from "@/lib/seo";
import { LoginForm } from "./form";
import { Container, Eyebrow, H1, Lead, Section } from "@/components/ui";
import { dicts, isLocale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export const generateMetadata = (p: { params: Promise<{ locale: string }> }) =>
  pageMeta(p.params, "/login", (d) => ({ title: d.app.signIn, description: d.app.loginLead }));

export default async function LoginPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ next?: string; error?: string }> }) {
  const { locale: l } = await params;
  const locale = isLocale(l) ? l : "en";
  const d = dicts[locale];
  const { next, error } = await searchParams;
  if (!isDatabaseConfigured()) {
    return (
      <Section>
        <Container className="max-w-xl">
          <Eyebrow>{d.app.signIn}</Eyebrow>
          <H1>{d.app.loginTitle}</H1>
          <Lead>{d.app.notConfigured}</Lead>
        </Container>
      </Section>
    );
  }
  if (await getSessionUser()) redirect(next && next.startsWith("/") ? next : `/${locale}/app`);
  return (
    <Section>
      <Container className="max-w-xl">
        <Eyebrow>{d.app.signIn}</Eyebrow>
        <H1>{d.app.loginTitle}</H1>
        <Lead>{d.app.loginLead}</Lead>
        {error === "link" && <p className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">{d.app.linkError}</p>}
        {error === "invite" && <p className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">{d.app.inviteError}</p>}
        <div className="mt-8">
          <LoginForm locale={locale} next={next} labels={{ email: d.app.email, send: d.app.sendLink, sent: d.app.linkSent, dev: d.app.devLink }} />
        </div>
      </Container>
    </Section>
  );
}
