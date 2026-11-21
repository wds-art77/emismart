// Emismart country data layer.
// Content is indicative and summarises publicly available official guidance.
// Each entry carries the official sources it was drawn from. Always confirm
// current rules, fees and thresholds on the official pages before filing.

import type { Country, CountryCode, Region } from "./types";
import { be } from "./data/be";
import { nl } from "./data/nl";
import { fr } from "./data/fr";
import { de } from "./data/de";
import { lu } from "./data/lu";

export type { Country, CountryCode, Region, Step, Doc, Route } from "./types";
export { euRecast } from "./recast";

export const countries: Country[] = [be, nl, fr, de, lu].sort((a, b) => a.name.localeCompare(b.name));

export const regions: Region[] = ["Western Europe", "Nordics", "Southern Europe", "Central and Eastern Europe", "Baltics"];

export const countriesByRegion = (region: Region): Country[] => countries.filter((c) => c.region === region);

export const countryByCode = (code: string): Country | undefined =>
  countries.find((c) => c.code === code);
