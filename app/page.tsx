import Link from "next/link";
import { Button, Card, Container, Disclaimer, Eyebrow, H1, H2, Lead, Pill, Section } from "@/components/ui";
import { countries, countriesByRegion, euRecast, regions } from "@/lib/countries";

const pillars = [
  {
    title: "Guided eligibility",
    body: "Answer a short questionnaire and see which route fits: single permit, EU Blue Card, national fast tracks, or a change of status.",
  },
  {
    title: "One file for both sides",
    body: "Employer and employee complete their parts in the same case file. Nothing is lost between HR, the candidate and the lawyer.",
  },
  {
    title: "Country-specific checklists",
    body: "Every required document, with legalisation and translation notes, for the Region, the IND, ANEF, the Ausländerbehörde or the Immigration Directorate.",
  },
  {
    title: "Human review when it matters",
    body: "Flag a case for review by a qualified immigration lawyer before filing. Routine files stay fast; complex files get judgment.",
  },
  {
    title: "Status in plain language",
    body: "Track admissibility, labour market tests, visa stages and card collection, with deadlines translated into dates on your calendar.",
  },
  {
    title: "Built for the 2026 rules",
    body: "The recast Single Permit Directive fixes a 90-day decision deadline and eases employer changes. Emismart is structured around it.",
  },
];

export default function HomePage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white pt-20 sm:pt-28">
        <Container className="relative">
          <Eyebrow>Work migration to Europe, digitalised</Eyebrow>
          <H1 className="mt-4 max-w-3xl">
            The simplest way to obtain a work and residence permit in any of the 27 EU member states.
          </H1>
          <Lead>
            Emismart turns twenty-seven national procedures into one guided, multilingual case file shared by employer,
            employee and counsel. Think of it as the European answer to the digital immigration platforms that already
            exist for the United States.
          </Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/eligibility">Check your eligibility</Button>
            <Button href="/countries" variant="secondary">
              Compare the five countries
            </Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
            {regions.map((region) => (
              <div key={region} className="rounded-2xl border border-navy-900/10 bg-white p-4">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-navy-800/60">{region}</h2>
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
          <Eyebrow>Why Emismart</Eyebrow>
          <H2>Twenty-seven countries, twenty-seven procedures, one experience.</H2>
          <Lead>
            Twenty-five member states implement the EU Single Permit Directive, each in its own way. Denmark and Ireland
            run national schemes outside it. Emismart absorbs that complexity so that the people involved only see the
            steps that concern them.
          </Lead>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
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
              <Eyebrow>At a glance</Eyebrow>
              <H2>Who files, who decides, how long it takes.</H2>
              <Lead>
                The permit is employer-led in some countries, two-stage in others, and embedded in the residence title
                elsewhere. The table shows who files and the official standard decision period for every member state.
              </Lead>
              <div className="mt-6">
                <Button href="/how-it-works" variant="secondary">
                  See the full process
                </Button>
              </div>
            </div>
            <div className="max-h-[560px] overflow-auto rounded-2xl border border-navy-900/10 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="sticky top-0 bg-navy-50 text-xs uppercase tracking-wider text-navy-800/70">
                  <tr>
                    <th className="px-4 py-3">Country</th>
                    <th className="px-4 py-3">Files</th>
                    <th className="px-4 py-3">Standard decision period</th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((c) => (
                    <tr key={c.code} className="border-t border-navy-900/10 align-top">
                      <td className="px-4 py-3 font-medium">
                        {c.flag} {c.name}
                      </td>
                      <td className="px-4 py-3 text-navy-800/80">{c.whoApplies.split(".")[0]}.</td>
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
          <Eyebrow>Regulatory horizon</Eyebrow>
          <H2 className="text-white">{euRecast.title}</H2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {euRecast.points.map((p) => (
              <li key={p} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-white/85">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                {p}
              </li>
            ))}
          </ul>
          <a href={euRecast.source.url} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm text-gold-500 underline-offset-4 hover:underline">
            {euRecast.source.label}
          </a>
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <Pill tone="gold">Free to start</Pill>
          <H2 className="mx-auto max-w-2xl">Begin with the eligibility check. Open a case file when you are ready.</H2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/eligibility">Check eligibility</Button>
            <Button href="/start" variant="gold">
              Start a case file
            </Button>
          </div>
          <Disclaimer />
        </Container>
      </Section>
    </>
  );
}
