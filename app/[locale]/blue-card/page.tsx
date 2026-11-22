import { pageMeta } from "@/lib/seo";
import { BlueCardView } from "./view";

export const generateMetadata = (p: { params: Promise<{ locale: string }> }) =>
  pageMeta(p.params, "/blue-card", (d) => ({ title: d.blueCard.eyebrow, description: d.blueCard.title }));

export default function BlueCardPage() {
  return <BlueCardView />;
}
