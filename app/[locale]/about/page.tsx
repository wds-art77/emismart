import { pageMeta } from "@/lib/seo";
import { AboutView } from "./view";

export const generateMetadata = (p: { params: Promise<{ locale: string }> }) =>
  pageMeta(p.params, "/about", (d) => ({ title: d.nav.about, description: d.aboutPage.title }));

export default function AboutPage() {
  return <AboutView />;
}
