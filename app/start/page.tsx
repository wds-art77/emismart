import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, Disclaimer, Eyebrow, H1, Lead, Section } from "@/components/ui";
import { Intake } from "./intake";

export const metadata: Metadata = {
  title: "Start a case file",
  description: "Open an Emismart case file for a single permit application.",
};

export default function StartPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>Case file</Eyebrow>
        <H1>Open your case file.</H1>
        <Lead>
          A case file brings the employer, the employee and, if needed, counsel around one dossier: milestones with
          dates, the statutory decision deadline, and document progress. This preview stores the file in your browser
          only and lets you exchange it as a file; nothing is transmitted. The production version adds secure accounts
          and document upload.
        </Lead>
        <div className="mt-10">
          <Suspense fallback={null}>
            <Intake />
          </Suspense>
        </div>
        <Disclaimer />
      </Container>
    </Section>
  );
}
