import Link from "next/link";
import type { Metadata } from "next";
import { Container, Disclaimer, Eyebrow, H1, Lead, Pill, Section } from "@/components/ui";
import { countriesByRegion, regions } from "@/lib/countries";

export const metadata: Metadata = {
  title: "Countries",
  description: "Single permit and national work permit procedures in all 27 EU member states, country by country.",
};

export default function CountriesPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>Country guides</Eyebrow>
        <H1>Work and residence permits in all 27 EU member states.</H1>
        <Lead>
          Twenty-five member states apply the EU Single Permit Directive. Denmark and Ireland are not bound by it and run
          national schemes, covered here on the same terms. Each guide covers who applies, the competent authorities, the legal basis, the decision period, the labour market
          test, every step and every document, alternative routes and the points that most often cause delay.
        </Lead>
        {regions.map((region) => (
          <div key={region} id={region.toLowerCase().replace(/ /g, "-")} className="mt-14">
            <h2 className="text-2xl font-semibold">{region}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {countriesByRegion(region).map((c) => (
            <Link
              key={c.code}
              href={`/countries/${c.code}`}
              className="group rounded-2xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-navy-900/30 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-3xl">{c.flag}</span>
                <Pill tone={c.singlePermitDirective ? "navy" : "gold"}>{c.singlePermitDirective ? "Single permit" : "National scheme"}</Pill>
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm text-navy-800/70">{c.localName}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-800/85">{c.tagline}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-navy-800/60">Who files</dt>
                  <dd className="mt-1 text-navy-900">{c.whoFilesShort}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-navy-800/60">Decision period</dt>
                  <dd className="mt-1 text-navy-900">{c.decisionPeriod.split(".")[0]}.</dd>
                </div>
              </dl>
              <span className="mt-5 inline-block text-sm font-semibold text-navy-900 group-hover:underline">Open the guide</span>
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
