import type { Country, CountryCode } from "../../types";
import { countryName, type Locale } from "../../i18n";
import { deadlines, noDeadlineNote, type Deadline } from "../../deadlines";
import { blueCard } from "../../bluecard";
import type { CountryTranslations } from "./types";
import { fr } from "./fr";
import { nl } from "./nl";
import { de } from "./de";
import { permitNames } from "./permits";

const translations: Partial<Record<Locale, CountryTranslations>> = { fr, nl, de };

/** Country with its summary fields and name in the given locale. Steps, documents and routes stay in English. */
export function localizeCountry(c: Country, locale: Locale): Country {
  const t = translations[locale]?.summaries[c.code];
  const name = countryName(c.code, locale, c.name);
  const permitName = locale === "en" ? c.permitName : permitNames[locale][c.code];
  return t ? { ...c, ...t, name, permitName } : { ...c, name, permitName };
}

export function localizedDeadline(code: CountryCode, locale: Locale): Deadline | null {
  const base = deadlines[code];
  if (!base) return null;
  const t = translations[locale]?.deadlines[code];
  return t ? { ...base, label: t.label, note: t.note } : base;
}

export function localizedNoDeadlineNote(code: CountryCode, locale: Locale): string | undefined {
  return translations[locale]?.noDeadlineNotes[code] ?? noDeadlineNote[code];
}

export function localizedBlueCardPoints(locale: Locale): string[] {
  return translations[locale]?.blueCardPoints ?? blueCard.points;
}
