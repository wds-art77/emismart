import type { Metadata } from "next";
import { Suspense } from "react";
import { EligibilityForm } from "./form";
import { EligibilityShell } from "./shell";

export const metadata: Metadata = {
  title: "Eligibility check",
  description: "Find out which European work permit route fits your situation in a few questions.",
};

export default function EligibilityPage() {
  return (
    <EligibilityShell>
      <Suspense fallback={null}>
        <EligibilityForm />
      </Suspense>
    </EligibilityShell>
  );
}
