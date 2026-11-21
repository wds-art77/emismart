import type { Metadata } from "next";
import { CountriesView } from "./view";

export const metadata: Metadata = {
  title: "Countries",
  description: "Single permit and national work permit procedures in all 27 EU member states, country by country.",
};

export default function CountriesPage() {
  return <CountriesView />;
}
