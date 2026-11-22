// Emismart rules engine: a small, declarative, dependency-free evaluator.
// Facts are a flat object. Rules have a condition tree and an outcome. Rules are evaluated in
// priority order; the first matching rule marked `stop` ends evaluation, otherwise all matching
// outcomes are collected. Every evaluation returns the ids of the rules that fired, so a result
// can always be explained. The same engine serves the website, the dashboard and the public API.

export type Facts = Record<string, unknown>;

export type Op = "eq" | "ne" | "in" | "nin" | "gt" | "gte" | "lt" | "lte" | "exists" | "missing" | "truthy" | "falsy" | "matches";

export type Condition =
  | { all: Condition[] }
  | { any: Condition[] }
  | { not: Condition }
  | { fact: string; op: Op; value?: unknown };

export type Rule<O> = {
  id: string;
  description?: string;
  priority?: number;
  when: Condition;
  then: O;
  stop?: boolean;
};

export type Evaluation<O> = {
  outcomes: O[];
  fired: string[];
  stoppedBy?: string;
  trace: { id: string; matched: boolean }[];
};

export function test(cond: Condition, facts: Facts): boolean {
  if ("all" in cond) return cond.all.every((c) => test(c, facts));
  if ("any" in cond) return cond.any.some((c) => test(c, facts));
  if ("not" in cond) return !test(cond.not, facts);
  const v = facts[cond.fact];
  switch (cond.op) {
    case "eq":
      return v === cond.value;
    case "ne":
      return v !== cond.value;
    case "in":
      return Array.isArray(cond.value) && cond.value.includes(v);
    case "nin":
      return Array.isArray(cond.value) && !cond.value.includes(v);
    case "gt":
      return typeof v === "number" && typeof cond.value === "number" && v > cond.value;
    case "gte":
      return typeof v === "number" && typeof cond.value === "number" && v >= cond.value;
    case "lt":
      return typeof v === "number" && typeof cond.value === "number" && v < cond.value;
    case "lte":
      return typeof v === "number" && typeof cond.value === "number" && v <= cond.value;
    case "exists":
      return v !== undefined && v !== null && v !== "";
    case "missing":
      return v === undefined || v === null || v === "";
    case "truthy":
      return !!v;
    case "falsy":
      return !v;
    case "matches":
      return typeof v === "string" && typeof cond.value === "string" && new RegExp(cond.value).test(v);
  }
}

export function evaluateRules<O>(rules: Rule<O>[], facts: Facts): Evaluation<O> {
  const ordered = [...rules].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
  const result: Evaluation<O> = { outcomes: [], fired: [], trace: [] };
  for (const rule of ordered) {
    const matched = test(rule.when, facts);
    result.trace.push({ id: rule.id, matched });
    if (!matched) continue;
    result.outcomes.push(rule.then);
    result.fired.push(rule.id);
    if (rule.stop) {
      result.stoppedBy = rule.id;
      break;
    }
  }
  return result;
}

/** Validate a condition tree structurally (for rulesets loaded from JSON). */
export function validateCondition(c: unknown): c is Condition {
  if (!c || typeof c !== "object") return false;
  const o = c as Record<string, unknown>;
  if (Array.isArray(o.all)) return o.all.every(validateCondition);
  if (Array.isArray(o.any)) return o.any.every(validateCondition);
  if (o.not !== undefined) return validateCondition(o.not);
  return typeof o.fact === "string" && typeof o.op === "string";
}
