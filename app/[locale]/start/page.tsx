import { pageMeta } from "@/lib/seo";
import { Suspense } from "react";
import { Intake } from "./intake";
import { StartShell } from "./shell";

export const generateMetadata = (p: { params: Promise<{ locale: string }> }) =>
  pageMeta(p.params, "/start", (d) => ({ title: d.footer.start, description: d.tracker.lead }));

export default function StartPage() {
  return (
    <StartShell>
      <Suspense fallback={null}>
        <Intake />
      </Suspense>
    </StartShell>
  );
}
