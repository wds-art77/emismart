import { pageMeta } from "@/lib/seo";
import { Suspense } from "react";
import { EligibilityForm } from "./form";
import { EligibilityShell } from "./shell";

export const generateMetadata = (p: { params: Promise<{ locale: string }> }) =>
  pageMeta(p.params, "/eligibility", (d) => ({ title: d.footer.eligibility, description: d.eligibility.lead }));

export default function EligibilityPage() {
  return (
    <EligibilityShell>
      <Suspense fallback={null}>
        <EligibilityForm />
      </Suspense>
    </EligibilityShell>
  );
}
