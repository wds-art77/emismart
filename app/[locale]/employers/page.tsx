import { pageMeta } from "@/lib/seo";
import { EmployersView } from "./view";

export const generateMetadata = (p: { params: Promise<{ locale: string }> }) =>
  pageMeta(p.params, "/employers", (d) => ({ title: d.footer.employers, description: d.employersPage.title }));

export default function EmployersPage() {
  return <EmployersView />;
}
