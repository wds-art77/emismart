import type { Metadata } from "next";
import { HowItWorksView } from "./view";

export const metadata: Metadata = {
  title: "How it works",
  description: "How Emismart guides a work and residence permit application from eligibility to card collection.",
};

export default function HowItWorksPage() {
  return <HowItWorksView />;
}
