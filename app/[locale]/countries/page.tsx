import { pageMeta } from "@/lib/seo";
import { CountriesView } from "./view";

export const generateMetadata = (p: { params: Promise<{ locale: string }> }) =>
  pageMeta(p.params, "/countries", (d) => ({ title: d.nav.countries, description: d.countries.title }));

export default function CountriesPage() {
  return <CountriesView />;
}
