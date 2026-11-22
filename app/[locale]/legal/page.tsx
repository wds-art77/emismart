import { pageMeta } from "@/lib/seo";
import { LegalView } from "./view";

export const generateMetadata = (p: { params: Promise<{ locale: string }> }) =>
  pageMeta(p.params, "/legal", (d) => ({ title: d.footer.legal, description: d.legalPage.title }));

export default function LegalPage() {
  return <LegalView />;
}
