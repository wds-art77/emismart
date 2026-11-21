import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, Disclaimer, Eyebrow, H1, Lead, Section } from "@/components/ui";
import { EligibilityForm } from "./form";

export const metadata: Metadata = {
  title: "Eligibility check",
  description: "Find out which European work permit route fits your situation in a few questions.",
};

export default function EligibilityPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>Eligibility check</Eyebrow>
        <H1>Which route fits your situation?</H1>
        <Lead>
          Eight questions, two minutes. The result tells you whether the single permit, a highly qualified route or
          another path is the realistic option, and what to do next.
        </Lead>
        <div className="mt-10">
          <Suspense fallback={null}>
            <EligibilityForm />
          </Suspense>
        </div>
        <Disclaimer />
      </Container>
    </Section>
  );
}
