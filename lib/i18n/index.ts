import { en, type Dict } from "./en";
import { fr } from "./fr";
import { nl } from "./nl";
import { de } from "./de";

export type { Dict } from "./en";
export const locales = ["en", "fr", "nl", "de"] as const;
export type Locale = (typeof locales)[number];
export const dicts: Record<Locale, Dict> = { en, fr, nl, de };
export const isLocale = (s: string | null | undefined): s is Locale => !!s && (locales as readonly string[]).includes(s);

/** Replace {placeholders} in a dictionary string. */
export function fmt(s: string, vars?: Record<string, string | number>): string {
  return s.replace(/\{(\w+)\}/g, (_, k: string) => (vars && vars[k] !== undefined ? String(vars[k]) : `{${k}}`));
}

/** Localized country name from the ISO code, falling back to the English name in the data. */
export function countryName(code: string, locale: Locale, fallback: string): string {
  try {
    const region = code === "gr" ? "GR" : code.toUpperCase();
    return new Intl.DisplayNames([locale], { type: "region" }).of(region) ?? fallback;
  } catch {
    return fallback;
  }
}
