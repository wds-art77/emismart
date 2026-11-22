import { pageMeta } from "@/lib/seo";
import { HowItWorksView } from "./view";

export const generateMetadata = (p: { params: Promise<{ locale: string }> }) =>
  pageMeta(p.params, "/how-it-works", (d) => ({ title: d.nav.howItWorks, description: d.howItWorks.title }));

export default function HowItWorksPage() {
  return <HowItWorksView />;
}
