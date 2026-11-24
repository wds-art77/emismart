import { current, yearly, type CountryRules } from "./country-rules";
import { countryByCode } from "../countries";

// Builds a country's decision tree from its structured rules. The tree is data: nodes with a question,
// branches with conditions, and leaves with a route. It is rendered on the country rules page and can be
// walked programmatically. Numeric thresholds come from the versioned rules valid on the evaluation date.

export type Branch = { label: string; condition: string; next: Node };
export type Node =
  | { kind: "question"; id: string; question: string; fact: string; branches: Branch[] }
  | { kind: "leaf"; id: string; route: string; summary: string; timeline?: { label: string; days?: number; months?: number }[]; sources?: { label: string; url: string }[] };

export function buildTree(code: string, on = new Date()): { tree: Node; rules: CountryRules | null; dataGaps: string[] } {
  const rules = (globalThis as unknown as { __emismartRules?: Record<string, CountryRules> }).__emismartRules?.[code] ?? null;
  const c = countryByCode(code);
  const gaps: string[] = [];
  const blue = current(rules?.salary.blueCard ?? null, on);
  const blueReduced = current(rules?.salary.blueCardReduced ?? null, on);
  const hq = current(rules?.salary.highlyQualified ?? null, on);
  const decision = current(rules?.recast.decisionDays ?? null, on);
  const extension = current(rules?.recast.extensionDays ?? null, on);
  const family = rules?.family;
  const validity = current(rules?.validity ?? null, on);
  if (!blue) gaps.push("salary.blueCard");
  if (!decision) gaps.push("recast.decisionDays");
  if (!family?.waitingPeriodMonths) gaps.push("family.waitingPeriodMonths");

  const money = (v: ReturnType<typeof current<{ amount: number; currency: string; period: "year" | "month"; gross: true }>>) =>
    v ? `${v.value.amount.toLocaleString("en-GB")} ${v.value.currency} ${v.value.period === "year" ? "per year" : "per month"} (from ${v.validFrom})` : "threshold not yet in structured rules";

  const singlePermitLeaf: Node = {
    kind: "leaf",
    id: "single-permit",
    route: c?.singlePermitDirective ? `${c.permitName} (${c.localName})` : c?.permitName ?? "National work permit",
    summary: c?.whoApplies ?? "",
    timeline: [
      decision ? { label: "Decision on a complete application", days: decision.value } : { label: "Decision period not yet in structured rules" },
      ...(extension ? [{ label: "Possible extension for complex cases", days: extension.value }] : []),
      ...(validity?.value.initialMonths ? [{ label: "Initial permit validity", months: validity.value.initialMonths }] : []),
      ...(family?.waitingPeriodMonths ? [{ label: "Family reunification: waiting period", months: family.waitingPeriodMonths.value }] : []),
      ...(family?.decisionDays ? [{ label: "Family reunification: decision period", days: family.decisionDays.value }] : []),
    ],
    sources: [decision?.source, validity?.source, family?.source].filter(Boolean) as { label: string; url: string }[],
  };

  const blueLeaf: Node = {
    kind: "leaf",
    id: "blue-card",
    route: "EU Blue Card",
    summary: `Salary at or above ${money(blue)}${blueReduced ? `; reduced threshold ${money(blueReduced)} for shortage occupations or recent graduates` : ""}. ${family?.blueCardImmediate ? "Family may join immediately." : ""}`,
    timeline: [{ label: "Decision (Directive (EU) 2021/1883)", days: 90 }, ...(validity?.value.initialMonths ? [{ label: "Initial permit validity", months: validity.value.initialMonths }] : [])],
    sources: [blue?.source].filter(Boolean) as { label: string; url: string }[],
  };

  const hqLeaf: Node | null = hq
    ? { kind: "leaf", id: "highly-qualified", route: "National highly qualified route", summary: `Salary at or above ${money(hq)}. ${hq.note ?? ""}`, sources: [hq.source] }
    : null;

  const salaryNode: Node = {
    kind: "question",
    id: "salary",
    question: "Gross annual salary compared with the thresholds",
    fact: "grossAnnualSalary",
    branches: [
      { label: `At or above the Blue Card threshold${blue ? ` (${yearly(blue.value).toLocaleString("en-GB")} ${blue.value.currency} per year)` : ""}`, condition: blue ? `grossAnnualSalary >= ${yearly(blue.value)}` : "threshold unknown", next: blueLeaf },
      ...(hqLeaf && hq ? [{ label: `At or above the national highly qualified threshold (${yearly(hq.value).toLocaleString("en-GB")} ${hq.value.currency} per year)`, condition: `grossAnnualSalary >= ${yearly(hq.value)}`, next: hqLeaf }] : []),
      { label: "Below the thresholds", condition: "otherwise", next: singlePermitLeaf },
    ],
  };

  const degreeNode: Node = {
    kind: "question",
    id: "degree",
    question: "Higher education degree of at least 3 years (or, for ICT specialists, 3 years of relevant experience)?",
    fact: "degree",
    branches: [
      { label: "Yes", condition: "degree == true", next: salaryNode },
      { label: "No", condition: "degree == false", next: hqLeaf && hq ? { kind: "question", id: "salary-hq", question: "Gross annual salary compared with the national highly qualified threshold", fact: "grossAnnualSalary", branches: [{ label: "At or above", condition: `grossAnnualSalary >= ${yearly(hq.value)}`, next: hqLeaf }, { label: "Below", condition: "otherwise", next: singlePermitLeaf }] } : singlePermitLeaf },
    ],
  };

  const shortageNode: Node = {
    kind: "question",
    id: "shortage",
    question: rules?.shortage.list ? `Is the occupation on the shortage list (${rules.shortage.list.value.map((l) => l.name).join(", ")})?` : "Is the occupation on a national or regional shortage list?",
    fact: "shortageOccupation",
    branches: [
      { label: rules?.shortage.exemptsLabourMarketTest ? "Yes: no labour market test" : "Yes", condition: "shortageOccupation == true", next: degreeNode },
      { label: rules?.shortage.exemptsLabourMarketTest === false ? "No (list does not affect the test)" : "No: labour market test applies", condition: "shortageOccupation == false", next: degreeNode },
    ],
  };

  const offerNode: Node = {
    kind: "question",
    id: "offer",
    question: "Binding job offer or signed contract from an employer in the country?",
    fact: "offer",
    branches: [
      { label: "Yes", condition: "offer == true", next: shortageNode },
      { label: "No", condition: "offer == false", next: { kind: "leaf", id: "no-offer", route: code === "de" ? "Opportunity Card (Chancenkarte)" : "No employer-tied permit available yet", summary: code === "de" ? "Points-based permit to look for work for up to one year." : "Secure a job offer first; job-seeker or digital nomad permits may exist, see the country guide." } },
    ],
  };

  const root: Node = {
    kind: "question",
    id: "nationality",
    question: "Nationality",
    fact: "nationality",
    branches: [
      { label: "EU, EEA or Swiss", condition: "nationality == eu", next: { kind: "leaf", id: "free-movement", route: "Free movement", summary: "No permit; register with the municipality after arrival." } },
      { label: "Third country", condition: "nationality == third", next: offerNode },
    ],
  };
  return { tree: root, rules, dataGaps: gaps };
}

/** Walk the tree with facts; returns the path of node ids and the leaf reached, or the first unanswered question. */
export function walk(tree: Node, facts: Record<string, unknown>): { path: string[]; leaf?: Extract<Node, { kind: "leaf" }>; pending?: Extract<Node, { kind: "question" }> } {
  const path: string[] = [];
  let node = tree;
  for (let i = 0; i < 20; i++) {
    path.push(node.id);
    if (node.kind === "leaf") return { path, leaf: node };
    const v = facts[node.fact];
    if (v === undefined || v === null || v === "") return { path, pending: node };
    const branch = node.branches.find((b) => matches(b.condition, v)) ?? node.branches[node.branches.length - 1];
    node = branch.next;
  }
  return { path };
}

function matches(condition: string, v: unknown): boolean {
  if (condition === "otherwise" || condition === "threshold unknown") return false;
  const m = condition.match(/^(\w+) (==|>=) (.+)$/);
  if (!m) return false;
  const [, , op, raw] = m;
  if (op === ">=") return typeof v === "number" && v >= Number(raw);
  const rhs = raw === "true" ? true : raw === "false" ? false : raw;
  return v === rhs || String(v) === String(rhs);
}
