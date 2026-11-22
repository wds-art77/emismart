import type { CountryCode } from "../../types";

/** Translated summary fields of a country guide. Steps, documents, routes and watch-outs stay in English pending legal review. */
export type CountrySummary = {
  tagline: string;
  overview: string;
  whoApplies: string;
  whoFilesShort: string;
  decisionPeriod: string;
  validity: string;
  labourMarketTest: string;
};

export type CountryTranslations = {
  summaries: Record<CountryCode, CountrySummary>;
  /** Translated `label` and `note` of lib/deadlines.ts, null where that file has null. */
  deadlines: Record<CountryCode, { label: string; note: string } | null>;
  /** Translated lib/deadlines.ts noDeadlineNote entries (cy, de, gr, ie, si). */
  noDeadlineNotes: Partial<Record<CountryCode, string>>;
  /** Translated lib/bluecard.ts points, same order and count. */
  blueCardPoints: string[];
};
