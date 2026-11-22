"use client";

import { Link } from "@/components/link";
import { Button, Card, Container, Eyebrow, H1, Lead, Pill, Section } from "@/components/ui";
import { Disclaimer } from "@/components/disclaimer";
import { useLocale, useT, useCountryName } from "@/components/locale";
import { fmt } from "@/lib/i18n";
import type { Country } from "@/lib/types";

const actorTone: Record<string, "navy" | "gold" | "green" | "grey"> = {
  Employer: "navy",
  Employee: "gold",
  Authority: "grey",
  Both: "green",
};

export function CountryGuide({ c, partial = false }: { c: Country; partial?: boolean }) {
  const d = useT();
  const cn = useCountryName();
  const { locale } = useLocale();
  const g = d.guide;
  const actorLabel = (a: string) =>
    a === "Employer" ? d.common.employer : a === "Employee" ? d.common.employee : a === "Authority" ? d.common.authority : d.common.both;

  return (
    <>
      <Section className="bg-gradient-to-b from-navy-50 to-white">
        <Container>
          <Link href="/countries" className="text-sm text-navy-800/70 hover:text-navy-900">{g.allCountries}</Link>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-5xl">{c.flag}</span>
            <div>
              <Eyebrow>{c.permitName}</Eyebrow>
              <H1 className="mt-1">{cn(c)}</H1>
            </div>
          </div>
          <p className="mt-3 text-lg text-navy-800/70">{c.localName}</p>
          {locale !== "en" && partial && (
            <p className="mt-4 inline-block rounded-lg bg-navy-100 px-3 py-2 text-xs text-navy-900">{g.contentNote}</p>
          )}
          <Lead>{c.overview}</Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`/checklist?country=${c.code}`}>{g.checklistCta}</Button>
            <Button href={`/eligibility?country=${c.code}`} variant="secondary">{fmt(g.eligibilityCta, { country: cn(c) })}</Button>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              [g.whoApplies, c.whoApplies],
              [g.decisionPeriod, c.decisionPeriod],
              [g.validity, c.validity],
              [g.labourMarketTest, c.labourMarketTest],
            ].map(([k, v]) => (
              <Card key={k}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-800/60">{k}</h3>
                <p className="mt-2 text-sm leading-relaxed">{v}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <Eyebrow>{g.procedure}</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold">{g.stepByStep}</h2>
          <ol className="mt-10 space-y-6">
            {c.steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-serif text-lg font-semibold text-white">{i + 1}</div>
                <div className="flex-1 rounded-2xl border border-navy-900/10 bg-white p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <Pill tone={actorTone[s.actor]}>{actorLabel(s.actor)}</Pill>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/85">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>{g.documents}</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold">{g.documentsTitle}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {([["employer", c.employerDocs], ["employee", c.employeeDocs]] as const).map(([party, docs]) => (
              <div key={party}>
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <Pill tone={party === "employer" ? "navy" : "gold"}>{party === "employer" ? d.common.employer : d.common.employee}</Pill>
                </h3>
                <ul className="mt-4 space-y-3">
                  {docs.map((doc) => (
                    <li key={doc.label} className="rounded-xl border border-navy-900/10 p-4 text-sm">
                      <span className="font-medium">{doc.label}</span>
                      {doc.note && <p className="mt-1 text-navy-800/70">{doc.note}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>{g.altEyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold">{g.altTitle}</h2>
            <ul className="mt-6 space-y-4">
              {c.alternativeRoutes.map((r) => (
                <li key={r.name} className="rounded-2xl border border-navy-900/10 bg-white p-5">
                  <h3 className="font-semibold">{r.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-800/85">{r.summary}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>{g.watchEyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold">{g.watchTitle}</h2>
            <ul className="mt-6 space-y-4">
              {c.watchOuts.map((w) => (
                <li key={w} className="flex gap-3 rounded-2xl border border-gold-500/40 bg-gold-100/40 p-5 text-sm leading-relaxed">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-600" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>{g.authorities}</Eyebrow>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-navy-800/85">
                {c.authorities.map((a) => (
                  <li key={a} className="border-l-2 border-navy-900/20 pl-3">{a}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Eyebrow>{g.legalBasis}</Eyebrow>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-navy-800/85">
                {c.legalBasis.map((a) => (
                  <li key={a} className="border-l-2 border-navy-900/20 pl-3">{a}</li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>{g.sources}</Eyebrow>
              <ul className="mt-4 space-y-2 text-sm">
                {c.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noreferrer" className="text-navy-900 underline-offset-4 hover:underline">{s.label}</a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-navy-800/60">{fmt(g.languages, { languages: c.languages.join(", ") })}</p>
            </div>
          </div>
          <Disclaimer />
        </Container>
      </Section>
    </>
  );
}
