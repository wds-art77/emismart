"use client";

import { Link } from "@/components/link";
import { Container, Eyebrow, H1, H2, Lead, Pill, Section } from "@/components/ui";
import { Disclaimer } from "@/components/disclaimer";
import { useT, useCountryName, useCountries, useLocale } from "@/components/locale";
import { fmt } from "@/lib/i18n";
import { regions } from "@/lib/countries";
import { blueCard } from "@/lib/bluecard";
import { localizedBlueCardPoints } from "@/lib/data/translations";


export function BlueCardView() {
  const d = useT();
  const cn = useCountryName();
  const { locale } = useLocale();
  const countries = useCountries();
  const countriesByRegion = (r: string) => countries.filter((c) => c.region === r);
  const points = localizedBlueCardPoints(locale);
  const blueRouteOf = (code: string) => {
    const c = countries.find((x) => x.code === code);
    return c?.alternativeRoutes.find((r) => /blue card|blaue karte|carte bleue/i.test(r.name)) ?? c?.alternativeRoutes.find((r) => /blue card|carte bleue/i.test(r.summary));
  };
  const b = d.blueCard;
  return (
    <>
      <Section className="bg-gradient-to-b from-navy-50 to-white">
        <Container>
          <Eyebrow>{b.eyebrow}</Eyebrow>
          <H1>{b.title}</H1>
          <Lead>{b.lead}</Lead>
        </Container>
      </Section>
      <Section tone="navy">
        <Container>
          <H2 className="text-white">{b.directiveTitle}</H2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-white/85">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                {p}
              </li>
            ))}
          </ul>
          <a href={blueCard.source.url} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm text-gold-500 underline-offset-4 hover:underline">{blueCard.source.label}</a>
        </Container>
      </Section>
      <Section>
        <Container>
          <H2>{b.byCountry}</H2>
          {regions.map((region) => (
            <div key={region} className="mt-10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-800/60">{d.common.regions[region]}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {countriesByRegion(region).map((c) => {
                  const r = blueRouteOf(c.code);
                  const takesPart = c.code !== "dk" && c.code !== "ie";
                  return (
                    <div key={c.code} className="rounded-2xl border border-navy-900/10 bg-white p-5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-lg font-semibold">{c.flag} {cn(c)}</p>
                        {!takesPart && <Pill tone="gold">{d.common.nationalScheme}</Pill>}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-navy-800/85">{takesPart ? r?.summary ?? "" : b.notParticipating}</p>
                      <Link href={`/countries/${c.code}`} className="mt-3 inline-block text-sm font-semibold text-navy-900 underline-offset-4 hover:underline">{fmt(b.seeGuide, { country: cn(c) })}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          <Disclaimer />
        </Container>
      </Section>
    </>
  );
}
