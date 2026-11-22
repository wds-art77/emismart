"use client";

import { useLocaleCode } from "./locale";
import { countries } from "@/lib/countries";
import { localizeCountry } from "@/lib/data/translations";
import type { Country } from "@/lib/types";

// Data-heavy hooks kept apart from the locale provider so that pages which only need the
// dictionary do not ship all country data and translations to the browser.

/** All countries with their summary fields and names in the current locale, sorted by localized name. */
export function useCountries(): Country[] {
  const locale = useLocaleCode();
  return countries.map((c) => localizeCountry(c, locale)).sort((a, b) => a.name.localeCompare(b.name, locale));
}

/** Returns a function localizing one country object. */
export function useLocalizeCountry() {
  const locale = useLocaleCode();
  return (c: Country) => localizeCountry(c, locale);
}
