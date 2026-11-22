import { pageMeta } from "@/lib/seo";
import { PricingView } from "./view";

export const generateMetadata = (p: { params: Promise<{ locale: string }> }) =>
  pageMeta(p.params, "/pricing", (d) => ({ title: d.nav.pricing, description: d.pricingPage.title }));

export default function PricingPage() {
  return <PricingView />;
}
