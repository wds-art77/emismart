"use client";

import { Link } from "@/components/link";
import { Container, Eyebrow, H1, Lead, Pill, Section } from "@/components/ui";
import { Disclaimer } from "@/components/disclaimer";
import { useT, useCountryName } from "@/components/locale";
import { useCountries } from "@/components/countries";
import { regions } from "@/lib/countries";

export function CountriesView() {
  const d = useT();
  const cn = useCountryName();
  const countries = useCountries();
  const countriesByRegion = (r: string) => countries.filter((c) => c.region === r);
  return (
    <Section>
      <Container>
        <Eyebrow>{d.countries.eyebrow}</Eyebrow>
        <H1>{d.countries.title}</H1>
        <Lead>{d.countries.lead}</Lead>
        {regions.map((region) => (
          <div key={region} id={region.toLowerCase().replace(/ /g, "-")} className="mt-14">
            <h2 className="text-2xl font-semibold">{d.common.regions[region]}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {countriesByRegion(region).map((c) => (
                <Link
                  key={c.code}
                  href={`/countries/${c.code}`}
                  className="group rounded-2xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-navy-900/30 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-3xl">{c.flag}</span>
                    <Pill tone={c.singlePermitDirective ? "navy" : "gold"}>{c.singlePermitDirective ? d.common.singlePermit : d.common.nationalScheme}</Pill>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{cn(c)}</h3>
                  <p className="mt-1 text-sm text-navy-800/70">{c.localName}</p>
                  <p className="mt-3 text-sm leading-relaxed text-navy-800/85">{c.tagline}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <dt className="font-semibold uppercase tracking-wider text-navy-800/60">{d.countries.whoFiles}</dt>
                      <dd className="mt-1 text-navy-900">{c.whoFilesShort}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold uppercase tracking-wider text-navy-800/60">{d.countries.decisionPeriod}</dt>
                      <dd className="mt-1 text-navy-900">{c.decisionPeriod.split(".")[0]}.</dd>
                    </div>
                  </dl>
                  <span className="mt-5 inline-block text-sm font-semibold text-navy-900 group-hover:underline">{d.common.openGuide}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <Disclaimer />
      </Container>
    </Section>
  );
}
