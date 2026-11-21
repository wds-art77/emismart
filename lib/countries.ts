// Emismart country data layer.
// Content is indicative and summarises publicly available official guidance.
// Each entry carries the official sources it was drawn from. Always confirm
// current rules, fees and thresholds on the official pages before filing.

import type { Country, CountryCode, Region } from "./types";
import { at } from "./data/at";
import { be } from "./data/be";
import { bg } from "./data/bg";
import { hr } from "./data/hr";
import { cy } from "./data/cy";
import { cz } from "./data/cz";
import { dk } from "./data/dk";
import { ee } from "./data/ee";
import { fi } from "./data/fi";
import { fr } from "./data/fr";
import { de } from "./data/de";
import { gr } from "./data/gr";
import { hu } from "./data/hu";
import { ie } from "./data/ie";
import { it } from "./data/it";
import { lv } from "./data/lv";
import { lt } from "./data/lt";
import { lu } from "./data/lu";
import { mt } from "./data/mt";
import { nl } from "./data/nl";
import { pl } from "./data/pl";
import { pt } from "./data/pt";
import { ro } from "./data/ro";
import { sk } from "./data/sk";
import { si } from "./data/si";
import { es } from "./data/es";
import { se } from "./data/se";

export type { Country, CountryCode, Region, Step, Doc, Route } from "./types";
export { euRecast } from "./recast";

export const countries: Country[] = [at, be, bg, hr, cy, cz, dk, ee, fi, fr, de, gr, hu, ie, it, lv, lt, lu, mt, nl, pl, pt, ro, sk, si, es, se].sort((a, b) => a.name.localeCompare(b.name));

export const regions: Region[] = ["Western Europe", "Nordics", "Southern Europe", "Central and Eastern Europe", "Baltics"];

export const countriesByRegion = (region: Region): Country[] => countries.filter((c) => c.region === region);

export const countryByCode = (code: string): Country | undefined =>
  countries.find((c) => c.code === code);
