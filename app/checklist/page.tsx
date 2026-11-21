import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, Disclaimer, Eyebrow, H1, Lead, Section } from "@/components/ui";
import { Checklist } from "./checklist";

export const metadata: Metadata = {
  title: "Document checklist",
  description: "Generate the employer and employee document checklist for a single permit application.",
};

export default function ChecklistPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>Document checklist</Eyebrow>
        <H1>Every document, for each party, ready to print.</H1>
        <Lead>
          Select the country and the party. Tick items off as you collect them; progress is saved in your browser. Use
          the print button to produce a PDF for the employer, the candidate or the consulate appointment.
        </Lead>
        <div className="mt-10">
          <Suspense fallback={null}>
            <Checklist />
          </Suspense>
        </div>
        <Disclaimer />
      </Container>
    </Section>
  );
}
