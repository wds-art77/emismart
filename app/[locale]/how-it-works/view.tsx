"use client";

import { Button, Card, Container, Eyebrow, H1, H2, Lead, Section } from "@/components/ui";
import { Disclaimer } from "@/components/disclaimer";
import { useT, useCountryName, useCountries } from "@/components/locale";

export function HowItWorksView() {
  const d = useT();
  const cn = useCountryName();
  const countries = useCountries();
  const h = d.howItWorks;
  return (
    <>
      <Section>
        <Container>
          <Eyebrow>{h.eyebrow}</Eyebrow>
          <H1>{h.title}</H1>
          <Lead>{h.lead}</Lead>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {h.phases.map((p) => (
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
          <Eyebrow>{h.compareEyebrow}</Eyebrow>
          <H2>{h.compareTitle}</H2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-navy-900/10 bg-white">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-navy-50 text-xs uppercase tracking-wider text-navy-800/70">
                <tr>
                  <th className="px-4 py-3">{h.thCountry}</th>
                  <th className="px-4 py-3">{h.thPermit}</th>
                  <th className="px-4 py-3">{h.thDirective}</th>
                  <th className="px-4 py-3">{h.thWho}</th>
                  <th className="px-4 py-3">{h.thLmt}</th>
                  <th className="px-4 py-3">{h.thDecision}</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c) => (
                  <tr key={c.code} className="border-t border-navy-900/10 align-top">
                    <td className="whitespace-nowrap px-4 py-3 font-medium">{c.flag} {cn(c)}</td>
                    <td className="px-4 py-3 text-navy-800/85">{c.localName}</td>
                    <td className="px-4 py-3 text-navy-800/85">{c.singlePermitDirective ? d.common.singlePermit : d.common.nationalScheme}</td>
                    <td className="px-4 py-3 text-navy-800/85">{c.whoFilesShort}</td>
                    <td className="px-4 py-3 text-navy-800/85">{c.labourMarketTest.split(":")[0].split(".")[0]}.</td>
                    <td className="px-4 py-3 text-navy-800/85">{c.decisionPeriod.split(".")[0]}.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <Button href="/countries" variant="secondary">{h.cta}</Button>
          </div>
          <Disclaimer />
        </Container>
      </Section>
    </>
  );
}
