import type { Metadata } from "next";
import { PricingView } from "./view";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for Emismart case files.",
};

export default function PricingPage() {
  return <PricingView />;
}
