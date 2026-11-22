import { pageMeta } from "@/lib/seo";
import { Suspense } from "react";
import { Checklist } from "./checklist";
import { ChecklistShell } from "./shell";

export const generateMetadata = (p: { params: Promise<{ locale: string }> }) =>
  pageMeta(p.params, "/checklist", (d) => ({ title: d.footer.checklist, description: d.checklist.lead }));

export default function ChecklistPage() {
  return (
    <ChecklistShell>
      <Suspense fallback={null}>
        <Checklist />
      </Suspense>
    </ChecklistShell>
  );
}
