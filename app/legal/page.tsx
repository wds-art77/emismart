import type { Metadata } from "next";
import { LegalView } from "./view";

export const metadata: Metadata = {
  title: "Legal and privacy",
  description: "Terms of use, nature of the service and privacy notice for Emismart.",
};

export default function LegalPage() {
  return <LegalView />;
}
