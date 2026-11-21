import type { Metadata } from "next";
import { EmployersView } from "./view";

export const metadata: Metadata = {
  title: "For employers",
  description: "Emismart for HR teams and employers hiring non-EU talent anywhere in the European Union.",
};

export default function EmployersPage() {
  return <EmployersView />;
}
