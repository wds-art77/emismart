import { classify, docTypeFields, legalisationSensitive, type DocMeta, type DocType } from "./types";
import { legalisationRegime } from "./legalisation";
import { current, type CountryRules } from "../rules/country-rules";

// Document validation: deterministic checks run whenever a document or its metadata changes.
// Each check returns a level and a message key (translated in the interface dictionaries) with parameters.

export type CheckLevel = "pass" | "warn" | "fail" | "info";
export type Check = { code: string; level: CheckLevel; params?: Record<string, string | number> };

export type CaseContext = {
  destination: string; // ISO alpha-2 of the destination country
  intendedStart?: string | null; // ISO date
  acceptedLanguages: string[]; // ISO 639-1 codes
  rules?: CountryRules | null;
  today?: Date;
};

const monthsBetween = (a: Date, b: Date) => (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + (b.getDate() >= a.getDate() ? 0 : -1);
const addMonths = (d: Date, m: number) => { const x = new Date(d); x.setMonth(x.getMonth() + m); return x; };

const langNames: Record<string, string[]> = { French: ["fr"], Dutch: ["nl"], German: ["de"], English: ["en"], Luxembourgish: ["lb"], Spanish: ["es"], Portuguese: ["pt"], Italian: ["it"], Greek: ["el"], Maltese: ["mt"], Polish: ["pl"], Czech: ["cs"], Slovak: ["sk"], Hungarian: ["hu"], Slovenian: ["sl"], Croatian: ["hr"], Romanian: ["ro"], Bulgarian: ["bg"], Estonian: ["et"], Latvian: ["lv"], Lithuanian: ["lt"], Danish: ["da"], Swedish: ["sv"], Finnish: ["fi"], Irish: ["ga"] };
export const languageCodes = (names: string[]) => names.flatMap((n) => langNames[n] ?? []);

export function validateDocument(label: string, meta: DocMeta, ctx: CaseContext, uploaded: boolean, docType?: DocType): Check[] {
  const type = docType ?? classify(label);
  const today = ctx.today ?? new Date();
  const checks: Check[] = [];
  const need = docTypeFields[type];

  if (!uploaded) {
    checks.push({ code: "missing", level: "info" });
    return checks;
  }

  const missing = need.filter((f) => !meta[f]);
  if (missing.length) checks.push({ code: "meta_missing", level: "warn", params: { fields: missing.join(", ") } });

  // Expiry and validity buffers
  if (type === "passport" && meta.expiryDate) {
    const exp = new Date(meta.expiryDate);
    const buffer = current(ctx.rules?.documents.passportValidityBeyondStayMonths ?? null, today)?.value ?? null;
    const start = ctx.intendedStart ? new Date(ctx.intendedStart) : today;
    const validity = current(ctx.rules?.validity ?? null, today)?.value.initialMonths ?? 12;
    const required = addMonths(start, validity + (buffer ?? 0));
    if (exp <= today) checks.push({ code: "passport_expired", level: "fail", params: { expiry: meta.expiryDate } });
    else if (exp < required) checks.push({ code: "passport_short", level: buffer === null ? "warn" : "fail", params: { expiry: meta.expiryDate, required: required.toISOString().slice(0, 10), months: validity + (buffer ?? 0) } });
    else checks.push({ code: "passport_ok", level: "pass", params: { expiry: meta.expiryDate } });
    if (buffer === null) checks.push({ code: "passport_buffer_unknown", level: "info" });
  }
  if (type === "insurance" && meta.expiryDate && new Date(meta.expiryDate) <= today) checks.push({ code: "expired", level: "fail", params: { expiry: meta.expiryDate } });

  // Criminal record freshness
  if (type === "criminal_record" && meta.issueDate) {
    const age = monthsBetween(new Date(meta.issueDate), today);
    const max = current(ctx.rules?.documents.criminalRecordMaxAgeMonths ?? null, today)?.value ?? null;
    if (max !== null && age > max) checks.push({ code: "record_too_old", level: "fail", params: { age, max } });
    else if (max === null && age > 6) checks.push({ code: "record_age_check", level: "warn", params: { age } });
    else checks.push({ code: "record_fresh", level: "pass", params: { age } });
  }

  // Apostille or legalisation
  if (legalisationSensitive.includes(type)) {
    const { regime } = legalisationRegime(meta.issuingCountry, ctx.destination);
    const done = meta.legalised;
    if (regime === "same_country" || regime === "eu") {
      if (regime === "eu" && type === "diploma" && (!done || done === "none")) checks.push({ code: "diploma_eu_check", level: "warn" });
      else checks.push({ code: "legalisation_not_needed", level: "pass", params: { regime } });
    } else if (regime === "apostille") {
      checks.push(done === "apostille" || done === "legalisation" ? { code: "apostille_done", level: "pass" } : { code: "apostille_needed", level: "fail" });
    } else if (regime === "legalisation") {
      checks.push(done === "legalisation" ? { code: "legalisation_done", level: "pass" } : { code: "legalisation_needed", level: "fail" });
    } else {
      checks.push({ code: "legalisation_unknown", level: "warn" });
    }
  }

  // Translation
  if (meta.language && need.includes("language")) {
    const accepted = ctx.acceptedLanguages.map((l) => l.toLowerCase());
    if (accepted.includes(meta.language.toLowerCase())) checks.push({ code: "language_ok", level: "pass", params: { language: meta.language } });
    else {
      const sworn = ctx.rules?.documents.swornTranslationRequired ?? null;
      const ok = meta.translated === "sworn" || (meta.translated === "certified" && sworn !== true);
      checks.push(ok ? { code: "translation_done", level: "pass" } : { code: sworn ? "translation_sworn_needed" : "translation_needed", level: "fail", params: { language: meta.language, accepted: accepted.join(", ") } });
    }
  }

  if (checks.length === 1 && checks[0].code === "meta_missing") return checks;
  if (!checks.length) checks.push({ code: "no_rules", level: "info" });
  return checks;
}

export function summarise(checks: Check[]): CheckLevel {
  if (checks.some((c) => c.level === "fail")) return "fail";
  if (checks.some((c) => c.level === "warn")) return "warn";
  if (checks.some((c) => c.level === "pass")) return "pass";
  return "info";
}
