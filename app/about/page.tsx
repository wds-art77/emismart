import type { Metadata } from "next";
import { AboutView } from "./view";

export const metadata: Metadata = {
  title: "About",
  description: "Why Emismart exists and how it is built.",
};

export default function AboutPage() {
  return <AboutView />;
}
