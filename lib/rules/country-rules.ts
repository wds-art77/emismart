import type { CountryCode } from "../types";

// Machine-readable immigration rules per country. Every figure is versioned: it carries the date
// from which it applies, the official source it was read from, and the date it was last verified.
// When a law changes, a new Versioned entry is added with its own validFrom; the engine picks the
// entry valid on the date of evaluation. Unknown values are null, never guessed.

export type Source = { label: string; url: string };

export type Money = { amount: number; currency: string; period: "year" | "month"; gross: true; note?: string };

export type Versioned<T> = {
  value: T;
  validFrom: string; // ISO date
  validTo?: string; // ISO date, absent while current
  source: Source;
  lastVerified: string; // ISO date
  note?: string;
};

export type SalaryRules = {
  /** EU Blue Card threshold (Directive (EU) 2021/1883 transposition). */
  blueCard: Versioned<Money>[] | null;
  /** Reduced Blue Card threshold for shortage occupations or recent graduates, where the country applies one. */
  blueCardReduced: Versioned<Money>[] | null;
  /** National highly qualified or highly skilled route threshold, where distinct from the Blue Card. */
  highlyQualified: Versioned<Money>[] | null;
  /** Statutory minimum wage reference, or null where there is none (collective agreements). */
  minimumWage: Versioned<Money>[] | null;
};

export type ShortageRules = {
  /** Official list of shortage occupations (national or regional), if any. */
  list: Versioned<{ name: string; scope: "national" | "regional"; url: string }[]> | null;
  /** Whether listing removes the labour market test for the single permit. */
  exemptsLabourMarketTest: boolean | null;
  note?: string;
};

export type FamilyRules = {
  /** Waiting period before the sponsor may apply for family reunification, in months (0 if none). */
  waitingPeriodMonths: Versioned<number> | null;
  /** Whether Blue Card holders may bring family immediately (Directive (EU) 2021/1883 art. 17). */
  blueCardImmediate: boolean | null;
  /** Statutory decision period for family reunification, in days (Directive 2003/86/EC: 9 months max). */
  decisionDays: Versioned<number> | null;
  /** Income and housing conditions, described. */
  conditions: Versioned<string> | null;
  source: Source | null;
};

export type RecastRules = {
  /** Transposition status of Directive (EU) 2024/1233 on the lastVerified date. */
  transposition: Versioned<"transposed" | "pending" | "partial" | "not_applicable"> | null;
  /** Statutory decision period on the single permit, in days, as applied nationally. */
  decisionDays: Versioned<number> | null;
  /** Possible extension in days for complex cases. */
  extensionDays: Versioned<number> | null;
  /** Whether a permit holder may change employer with a notification (rather than a new permit). */
  changeOfEmployerByNotification: Versioned<boolean> | null;
  /** Months of unemployment tolerated before the permit may be withdrawn. */
  unemploymentGraceMonths: Versioned<number> | null;
  /** Whether a legally present third-country national may apply from inside the country. */
  inCountryApplication: Versioned<boolean> | null;
};

export type DocumentRules = {
  /** Required passport validity beyond the intended stay or permit, in months. */
  passportValidityBeyondStayMonths: Versioned<number> | null;
  /** Languages accepted for supporting documents. */
  acceptedLanguages: string[];
  /** Whether translations must be sworn (court-certified) rather than merely certified. */
  swornTranslationRequired: boolean | null;
  /** Maximum age of a criminal record extract at filing, in months. */
  criminalRecordMaxAgeMonths: Versioned<number> | null;
  source: Source | null;
};

export type CountryRules = {
  code: CountryCode;
  salary: SalaryRules;
  shortage: ShortageRules;
  family: FamilyRules;
  recast: RecastRules;
  documents: DocumentRules;
  /** Permit validity: initial and renewal, in months. */
  validity: Versioned<{ initialMonths: number | null; renewalMonths: number | null; note?: string }> | null;
  /** Open questions or caveats for the legal reviewer. */
  reviewNotes: string[];
};

/** Pick the entry valid on a date (default today). Accepts a single entry or a history. */
export function current<T>(entries: Versioned<T>[] | Versioned<T> | null, on = new Date()): Versioned<T> | null {
  if (!entries) return null;
  const list = Array.isArray(entries) ? entries : [entries];
  const d = on.toISOString().slice(0, 10);
  const valid = list.filter((e) => e.validFrom <= d && (!e.validTo || e.validTo >= d));
  return valid.sort((a, b) => (a.validFrom < b.validFrom ? 1 : -1))[0] ?? null;
}

export function yearly(m: Money): number {
  return m.period === "year" ? m.amount : m.amount * 12;
}
