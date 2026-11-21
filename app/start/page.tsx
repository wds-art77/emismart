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
          A case file brings the employer, the employee and, if needed, counsel around one dossier. This preview stores
          the file locally in your browser only; nothing is transmitted. The production version adds secure accounts,
          document upload and status tracking.
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
