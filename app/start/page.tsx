import type { Metadata } from "next";
import { Suspense } from "react";
import { Intake } from "./intake";
import { StartShell } from "./shell";

export const metadata: Metadata = {
  title: "Case file",
  description: "Open an Emismart case file and track a work and residence permit application.",
};

export default function StartPage() {
  return (
    <StartShell>
      <Suspense fallback={null}>
        <Intake />
      </Suspense>
    </StartShell>
  );
}
