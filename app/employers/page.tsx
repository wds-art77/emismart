import type { Metadata } from "next";
import { Button, Card, Container, Disclaimer, Eyebrow, H1, H2, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "For employers",
  description: "Emismart for HR teams and employers hiring non-EU talent anywhere in the European Union.",
};

const benefits = [
  {
    title: "One process across twenty-seven countries",
    body: "Hire into Brussels, Amsterdam, Paris, Frankfurt, Warsaw, Madrid or Dublin with the same workflow, adapted automatically to the local procedure.",
  },
  {
    title: "Labour market test guidance",
    body: "Know in advance whether the vacancy must be advertised with the national employment service, for how long, and what evidence to keep.",
  },
  {
    title: "Compliance record",
    body: "Every document, date and submission is logged. Audits by labour inspectorates are answered from the file, not from e-mail archives.",
  },
  {
    title: "Candidate experience",
    body: "The candidate sees a clear list of what to provide and when, in plain language, which reduces drop-off between offer and start date.",
  },
  {
    title: "Counsel on demand",
    body: "Complex files, regulated professions and refusals are escalated to a qualified immigration lawyer within the same case file.",
  },
  {
    title: "Renewals and changes",
    body: "Expiry dates, employer changes and family reunification are tracked so that renewals start on time.",
  },
];

export default function EmployersPage() {
  return (
    <>
      <Section>
        <Container>
          <Eyebrow>For employers</Eyebrow>
          <H1>Hire international talent without becoming an immigration department.</H1>
          <Lead>
            In most member states the employer carries or opens the procedure. In others the employer accelerates it or
            supplies the documents the worker files. Emismart gives HR teams a single, repeatable way to do all of this
            well, in every EU country.
          </Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/start">Open an employer case file</Button>
            <Button href="/pricing" variant="secondary">
              See pricing
            </Button>
          </div>
        </Container>
      </Section>
      <Section tone="sand">
        <Container>
          <H2>What you get</H2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <Card key={b.title}>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/80">{b.body}</p>
              </Card>
            ))}
          </div>
          <Disclaimer />
        </Container>
      </Section>
    </>
  );
}
