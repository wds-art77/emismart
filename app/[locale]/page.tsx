import { pageMeta } from "@/lib/seo";
import { HomeView } from "./home-view";

export const generateMetadata = (p: { params: Promise<{ locale: string }> }) =>
  pageMeta(p.params, "", (d) => ({ title: d.home.eyebrow, description: d.home.title }));

export default function HomePage() {
  return <HomeView />;
}
