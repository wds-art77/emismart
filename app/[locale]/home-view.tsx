"use client";

import { Link } from "@/components/link";
import { Button, Card, Container, Eyebrow, H1, H2, Lead, Pill, Section } from "@/components/ui";
import { Disclaimer } from "@/components/disclaimer";
import { useT } from "@/components/locale";
import { countries, countriesByRegion, euRecast, regions } from "@/lib/countries";

export function HomeView() {
  const d = useT();
  const h = d.home;
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white pt-20 sm:pt-28">
        <Container className="relative">
          <Eyebrow>{h.eyebrow}</Eyebrow>
          <H1 className="mt-4 max-w-3xl">{h.title}</H1>
          <Lead>{h.lead}</Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/eligibility">{h.cta1}</Button>
            <Button href="/countries" variant="secondary">{h.cta2}</Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {regions.map((region) => (
              <div key={region} className="rounded-2xl border border-navy-900/10 bg-white p-4">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-navy-800/60">{d.common.regions[region]}</h2>
                <ul className="mt-3 space-y-1.5">
                  {countriesByRegion(region).map((c) => (
                    <li key={c.code}>
                      <Link href={`/countries/${c.code}`} className="flex items-center gap-2 text-sm font-medium hover:text-navy-700 hover:underline">
                        <span>{c.flag}</span>
                        <span>{c.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>{h.whyEyebrow}</Eyebrow>
          <H2>{h.whyTitle}</H2>
          <Lead>{h.whyLead}</Lead>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {h.pillars.map((p) => (
              <Card key={p.title}>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/80">{p.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow>{h.glanceEyebrow}</Eyebrow>
              <H2>{h.glanceTitle}</H2>
              <Lead>{h.glanceLead}</Lead>
              <div className="mt-6">
                <Button href="/how-it-works" variant="secondary">{h.glanceCta}</Button>
              </div>
            </div>
            <div className="max-h-[560px] overflow-auto rounded-2xl border border-navy-900/10 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="sticky top-0 bg-navy-50 text-xs uppercase tracking-wider text-navy-800/70">
                  <tr>
                    <th className="px-4 py-3">{h.thCountry}</th>
                    <th className="px-4 py-3">{h.thFiles}</th>
                    <th className="px-4 py-3">{h.thDecision}</th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((c) => (
                    <tr key={c.code} className="border-t border-navy-900/10 align-top">
                      <td className="px-4 py-3 font-medium">
                        <Link href={`/countries/${c.code}`} className="hover:underline">{c.flag} {c.name}</Link>
                      </td>
                      <td className="px-4 py-3 text-navy-800/80">{c.whoFilesShort}</td>
                      <td className="px-4 py-3 text-navy-800/80">{c.decisionPeriod.split(".")[0]}.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="navy">
        <Container>
          <Eyebrow>{h.recastEyebrow}</Eyebrow>
          <H2 className="text-white">{h.recastTitle}</H2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {h.recastPoints.map((p) => (
              <li key={p} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-white/85">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                {p}
              </li>
            ))}
          </ul>
          <a href={euRecast.source.url} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm text-gold-500 underline-offset-4 hover:underline">
            {h.recastSource}
          </a>
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <Pill tone="gold">{h.ctaPill}</Pill>
          <H2 className="mx-auto max-w-2xl">{h.ctaTitle}</H2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/eligibility">{d.nav.checkEligibility}</Button>
            <Button href="/start" variant="gold">{h.ctaStart}</Button>
          </div>
          <Disclaimer />
        </Container>
      </Section>
    </>
  );
}
