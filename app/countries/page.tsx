import Link from "next/link";
import type { Metadata } from "next";
import { Container, Disclaimer, Eyebrow, H1, Lead, Pill, Section } from "@/components/ui";
import { countries } from "@/lib/countries";

export const metadata: Metadata = {
  title: "Countries",
  description: "Single permit procedures in Belgium, the Netherlands, France, Germany and Luxembourg compared.",
};

export default function CountriesPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>Country guides</Eyebrow>
        <H1>Single permit procedures, country by country.</H1>
        <Lead>
          Each guide covers who applies, the competent authorities, the legal basis, the decision period, the labour market
          test, every step and every document, alternative routes and the points that most often cause delay.
        </Lead>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {countries.map((c) => (
            <Link
              key={c.code}
              href={`/countries/${c.code}`}
              className="group rounded-2xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-navy-900/30 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{c.flag}</span>
                <Pill>{c.permitName}</Pill>
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{c.name}</h2>
              <p className="mt-1 text-sm text-navy-800/70">{c.localName}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-800/85">{c.tagline}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <dt className="font-semibold uppercase tracking-wider text-navy-800/60">Who files</dt>
                  <dd className="mt-1 text-navy-900">{c.whoApplies.split(".")[0]}.</dd>
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
        <Disclaimer />
      </Container>
    </Section>
  );
}
