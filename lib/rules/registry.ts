import type { CountryCode } from "../types";
import type { CountryRules } from "./country-rules";

// Registry of structured country rules. Files are added under lib/rules/countries/<code>.ts as they are
// researched and reviewed; a country without a file simply has no structured rules yet (null).
const g = globalThis as unknown as { __emismartRules?: Partial<Record<CountryCode, CountryRules>> };
g.__emismartRules ??= {};

export function registerRules(r: CountryRules) {
  g.__emismartRules![r.code] = r;
}
export function getCountryRules(code: string): CountryRules | null {
  return g.__emismartRules![code as CountryCode] ?? null;
}
export function listCountryRules(): CountryRules[] {
  return Object.values(g.__emismartRules!) as CountryRules[];
}
