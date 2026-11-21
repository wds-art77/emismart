import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Card, Container, Disclaimer, Eyebrow, H1, Lead, Pill, Section } from "@/components/ui";
import { countries, countryByCode } from "@/lib/countries";

type Params = { code: string };

export function generateStaticParams() {
  return countries.map((c) => ({ code: c.code }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { code } = await params;
  const c = countryByCode(code);
  if (!c) return {};
  return {
    title: `${c.name}: ${c.permitName}`,
    description: `${c.localName}. ${c.tagline}`,
  };
}

const actorTone: Record<string, "navy" | "gold" | "green" | "grey"> = {
  Employer: "navy",
  Employee: "gold",
  Authority: "grey",
  Both: "green",
};

export default async function CountryPage({ params }: { params: Promise<Params> }) {
  const { code } = await params;
  const c = countryByCode(code);
  if (!c) notFound();

  return (
    <>
      <Section className="bg-gradient-to-b from-navy-50 to-white">
        <Container>
          <Link href="/countries" className="text-sm text-navy-800/70 hover:text-navy-900">
            All countries
          </Link>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-5xl">{c.flag}</span>
            <div>
              <Eyebrow>{c.permitName}</Eyebrow>
              <H1 className="mt-1">{c.name}</H1>
            </div>
          </div>
          <p className="mt-3 text-lg text-navy-800/70">{c.localName}</p>
          <Lead>{c.overview}</Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`/checklist?country=${c.code}`}>Generate the document checklist</Button>
            <Button href={`/eligibility?country=${c.code}`} variant="secondary">
              Check eligibility for {c.name}
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-800/60">Who applies</h3>
              <p className="mt-2 text-sm leading-relaxed">{c.whoApplies}</p>
            </Card>
            <Card>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-800/60">Decision period</h3>
              <p className="mt-2 text-sm leading-relaxed">{c.decisionPeriod}</p>
            </Card>
            <Card>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-800/60">Validity</h3>
              <p className="mt-2 text-sm leading-relaxed">{c.validity}</p>
            </Card>
            <Card>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-800/60">Labour market test</h3>
              <p className="mt-2 text-sm leading-relaxed">{c.labourMarketTest}</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <Eyebrow>Procedure</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold">Step by step</h2>
          <ol className="mt-10 space-y-6">
            {c.steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-serif text-lg font-semibold text-white">
                  {i + 1}
                </div>
                <div className="flex-1 rounded-2xl border border-navy-900/10 bg-white p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <Pill tone={actorTone[s.actor]}>{s.actor}</Pill>
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
          <Eyebrow>Documents</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold">What each party provides</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Pill>Employer</Pill>
              </h3>
              <ul className="mt-4 space-y-3">
                {c.employerDocs.map((d) => (
                  <li key={d.label} className="rounded-xl border border-navy-900/10 p-4 text-sm">
                    <span className="font-medium">{d.label}</span>
                    {d.note && <p className="mt-1 text-navy-800/70">{d.note}</p>}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Pill tone="gold">Employee</Pill>
              </h3>
              <ul className="mt-4 space-y-3">
                {c.employeeDocs.map((d) => (
                  <li key={d.label} className="rounded-xl border border-navy-900/10 p-4 text-sm">
                    <span className="font-medium">{d.label}</span>
                    {d.note && <p className="mt-1 text-navy-800/70">{d.note}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Alternative routes</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold">When the single permit is not the best fit</h2>
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
            <Eyebrow>Watch outs</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold">Where files usually stall</h2>
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
              <Eyebrow>Authorities</Eyebrow>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-navy-800/85">
                {c.authorities.map((a) => (
                  <li key={a} className="border-l-2 border-navy-900/20 pl-3">{a}</li>
                ))}
              </ul>
              <Eyebrow>
                <span className="mt-8 inline-block">Legal basis</span>
              </Eyebrow>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-navy-800/85">
                {c.legalBasis.map((a) => (
                  <li key={a} className="border-l-2 border-navy-900/20 pl-3">{a}</li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>Official sources</Eyebrow>
              <ul className="mt-4 space-y-2 text-sm">
                {c.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noreferrer" className="text-navy-900 underline-offset-4 hover:underline">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-navy-800/60">Languages of the procedure: {c.languages.join(", ")}.</p>
            </div>
          </div>
          <Disclaimer />
        </Container>
      </Section>
    </>
  );
}
