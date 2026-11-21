import type { Metadata } from "next";
import { Suspense } from "react";
import { Checklist } from "./checklist";
import { ChecklistShell } from "./shell";

export const metadata: Metadata = {
  title: "Document checklist",
  description: "Generate the employer and employee document checklist for a work and residence permit application.",
};

export default function ChecklistPage() {
  return (
    <ChecklistShell>
      <Suspense fallback={null}>
        <Checklist />
      </Suspense>
    </ChecklistShell>
  );
}
