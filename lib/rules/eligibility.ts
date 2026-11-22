import { evaluateRules, type Rule } from "./engine";
import { countries, type CountryCode } from "../countries";
import { deadlines } from "../deadlines";

// Work-permit eligibility ruleset. Facts come from the questionnaire or from an API caller.
// Outcomes reference text keys in the interface dictionaries (lib/i18n) so that the same rule
// renders in every language, and carry structured data for programmatic use.

export type EligibilityFacts = {
  nationality: "eu" | "third";
  country?: CountryCode;
  offer?: "yes" | "no";
  location?: "abroad" | "inside";
  contract?: "cdi" | "cdd";
  qualification?: "degree" | "vocational" | "experience" | "none";
  salary?: "high" | "standard" | "unknown";
  shortage?: "yes" | "no" | "unknown";
};

export type EligibilityOutcome = {
  /** Text key under eligibility.outcomes in the dictionaries. */
  key: "eu" | "chancenkarte" | "offerFirst" | "highSkill" | "deNoQual" | "single";
  routeId: "free-movement" | "opportunity-card" | "none" | "highly-qualified" | "skilled-worker-blocked" | "single-permit";
  confidence: "high" | "medium" | "low";
  reviewRecommended: boolean;
  labourMarketTest?: "exempt" | "required" | "unknown";
};

const third = { fact: "nationality", op: "eq", value: "third" } as const;
const hasOffer = { fact: "offer", op: "eq", value: "yes" } as const;

export const eligibilityRules: Rule<EligibilityOutcome>[] = [
  {
    id: "eu-free-movement",
    description: "EU, EEA and Swiss citizens need no permit.",
    priority: 100,
    when: { fact: "nationality", op: "eq", value: "eu" },
    then: { key: "eu", routeId: "free-movement", confidence: "high", reviewRecommended: false },
    stop: true,
  },
  {
    id: "de-opportunity-card",
    description: "No job offer, destination Germany: points-based Chancenkarte.",
    priority: 90,
    when: { all: [third, { fact: "offer", op: "eq", value: "no" }, { fact: "country", op: "eq", value: "de" }] },
    then: { key: "chancenkarte", routeId: "opportunity-card", confidence: "medium", reviewRecommended: false },
    stop: true,
  },
  {
    id: "offer-first",
    description: "Employer-tied permits cannot start without a job offer.",
    priority: 89,
    when: { all: [third, { fact: "offer", op: "eq", value: "no" }] },
    then: { key: "offerFirst", routeId: "none", confidence: "high", reviewRecommended: false },
    stop: true,
  },
  {
    id: "highly-qualified",
    description: "Degree plus salary above the national highly qualified threshold: Blue Card or national route.",
    priority: 80,
    when: { all: [third, hasOffer, { fact: "qualification", op: "eq", value: "degree" }, { fact: "salary", op: "eq", value: "high" }] },
    then: { key: "highSkill", routeId: "highly-qualified", confidence: "medium", reviewRecommended: false, labourMarketTest: "exempt" },
    stop: true,
  },
  {
    id: "de-no-qualification",
    description: "Germany requires a recognised qualification or substantial experience.",
    priority: 70,
    when: { all: [third, hasOffer, { fact: "country", op: "eq", value: "de" }, { fact: "qualification", op: "eq", value: "none" }] },
    then: { key: "deNoQual", routeId: "skilled-worker-blocked", confidence: "medium", reviewRecommended: true },
    stop: true,
  },
  {
    id: "single-permit-shortage",
    priority: 60,
    when: { all: [third, hasOffer, { fact: "shortage", op: "eq", value: "yes" }] },
    then: { key: "single", routeId: "single-permit", confidence: "medium", reviewRecommended: false, labourMarketTest: "exempt" },
  },
  {
    id: "single-permit-lmt",
    priority: 59,
    when: { all: [third, hasOffer, { fact: "shortage", op: "eq", value: "no" }] },
    then: { key: "single", routeId: "single-permit", confidence: "medium", reviewRecommended: false, labourMarketTest: "required" },
  },
  {
    id: "single-permit-unknown",
    priority: 58,
    when: { all: [third, hasOffer, { fact: "shortage", op: "nin", value: ["yes", "no"] }] },
    then: { key: "single", routeId: "single-permit", confidence: "low", reviewRecommended: false, labourMarketTest: "unknown" },
  },
  {
    id: "lower-confidence-unknown-salary",
    description: "Unknown salary lowers confidence.",
    priority: 50,
    when: { all: [third, hasOffer, { fact: "salary", op: "eq", value: "unknown" }] },
    then: { key: "single", routeId: "single-permit", confidence: "low", reviewRecommended: false },
  },
  {
    id: "review-in-country",
    description: "In-country filing depends on current status; recommend review.",
    priority: 40,
    when: { all: [third, hasOffer, { fact: "location", op: "eq", value: "inside" }] },
    then: { key: "single", routeId: "single-permit", confidence: "medium", reviewRecommended: true },
  },
  {
    id: "review-experience-only",
    description: "Experience without a diploma needs case-by-case assessment.",
    priority: 39,
    when: { all: [third, hasOffer, { fact: "qualification", op: "eq", value: "experience" }] },
    then: { key: "single", routeId: "single-permit", confidence: "medium", reviewRecommended: true },
  },
];

export type EligibilityResult = EligibilityOutcome & {
  fired: string[];
  country?: { code: CountryCode; name: string; permitName: string; singlePermitDirective: boolean; decisionPeriod: string; deadline: { label: string; months?: number; days?: number } | null };
  requiredDocuments?: { employer: string[]; employee: string[] };
};

/** Evaluate the ruleset and merge collected outcomes into one result. */
export function evaluateEligibility(facts: EligibilityFacts): EligibilityResult {
  const ev = evaluateRules(eligibilityRules, facts as Record<string, unknown>);
  const [first, ...rest] = ev.outcomes;
  if (!first) {
    return { key: "offerFirst", routeId: "none", confidence: "low", reviewRecommended: true, fired: [] };
  }
  const merged: EligibilityOutcome = { ...first };
  for (const o of rest) {
    if (o.confidence === "low") merged.confidence = "low";
    if (o.reviewRecommended) merged.reviewRecommended = true;
    if (!merged.labourMarketTest && o.labourMarketTest) merged.labourMarketTest = o.labourMarketTest;
  }
  const c = facts.country ? countries.find((x) => x.code === facts.country) : undefined;
  const result: EligibilityResult = { ...merged, fired: ev.fired };
  if (c) {
    const dl = deadlines[c.code];
    result.country = { code: c.code, name: c.name, permitName: c.permitName, singlePermitDirective: c.singlePermitDirective, decisionPeriod: c.decisionPeriod, deadline: dl ? { label: dl.label, months: dl.months, days: dl.days } : null };
    if (merged.routeId === "single-permit" || merged.routeId === "highly-qualified") {
      result.requiredDocuments = { employer: c.employerDocs.map((d) => d.label), employee: c.employeeDocs.map((d) => d.label) };
    }
  }
  return result;
}
