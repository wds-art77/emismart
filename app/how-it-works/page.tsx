import type { Metadata } from "next";
import { Button, Card, Container, Disclaimer, Eyebrow, H1, H2, Lead, Section } from "@/components/ui";
import { countries } from "@/lib/countries";

export const metadata: Metadata = {
  title: "How it works",
  description: "How Emismart guides a single permit application from eligibility to card collection.",
};

const phases = [
  {
    title: "1. Eligibility",
    body: "A short questionnaire identifies the realistic route: single permit, EU Blue Card, national highly qualified scheme or something else. Edge cases are flagged for lawyer review before anyone spends money.",
  },
  {
    title: "2. Case file",
    body: "Employer and employee each receive their own tasks in a shared file. The employer handles the labour market test, contract and company documents. The employee handles identity, qualifications, criminal record and medical documents.",
  },
  {
    title: "3. Document preparation",
    body: "Country checklists specify legalisation, apostille and sworn translation requirements. Documents are checked for completeness against what the Region, IND, ANEF, Ausländerbehörde or Immigration Directorate expects.",
  },
  {
    title: "4. Filing",
    body: "Where the authority runs a portal, the filing party submits with a complete, pre-validated dossier. Where a lawyer or mandatary must file, Emismart hands over a ready package.",
  },
  {
    title: "5. Tracking",
    body: "Admissibility, labour market advice, decision, visa and card collection are tracked as milestones, with statutory deadlines converted to dates and reminders.",
  },
  {
    title: "6. Arrival and beyond",
    body: "Municipal registration, medical checks, card collection, family reunification and renewals follow from the same file, so nothing is rebuilt from scratch a year later.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Section>
        <Container>
          <Eyebrow>How it works</Eyebrow>
          <H1>From first question to residence card, in one guided flow.</H1>
          <Lead>
            The single permit involves at least three parties and often two authorities. Emismart organises the work so
            that each party only sees what concerns them, while the whole dossier remains coherent.
          </Lead>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {phases.map((p) => (
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
          <Eyebrow>Comparison</Eyebrow>
          <H2>Where the five countries differ</H2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-navy-900/10 bg-white">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead className="bg-navy-50 text-xs uppercase tracking-wider text-navy-800/70">
                <tr>
                  <th className="px-4 py-3">Country</th>
                  <th className="px-4 py-3">Permit</th>
                  <th className="px-4 py-3">Who applies</th>
                  <th className="px-4 py-3">Labour market test</th>
                  <th className="px-4 py-3">Decision period</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c) => (
                  <tr key={c.code} className="border-t border-navy-900/10 align-top">
                    <td className="px-4 py-3 font-medium whitespace-nowrap">
                      {c.flag} {c.name}
                    </td>
                    <td className="px-4 py-3 text-navy-800/85">{c.localName}</td>
                    <td className="px-4 py-3 text-navy-800/85">{c.whoApplies.split(".")[0]}.</td>
                    <td className="px-4 py-3 text-navy-800/85">{c.labourMarketTest.split(":")[0].split(".")[0]}.</td>
                    <td className="px-4 py-3 text-navy-800/85">{c.decisionPeriod.split(".")[0]}.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <Button href="/countries" variant="secondary">
              Read the detailed guides
            </Button>
          </div>
          <Disclaimer />
        </Container>
      </Section>
    </>
  );
}
