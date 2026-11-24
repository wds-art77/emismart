import { NextResponse, type NextRequest } from "next/server";
import "@/lib/rules/countries";
import { getCountryRules, listCountryRules } from "@/lib/rules/registry";
import { buildTree, walk } from "@/lib/rules/decision-tree";
import { countryByCode } from "@/lib/countries";

// Machine-readable rules per country: the versioned data, the decision tree, and (with ?facts=) a walk.
// GET /api/rules/countries/be
// GET /api/rules/countries/be?nationality=third&offer=true&shortageOccupation=false&degree=true&grossAnnualSalary=70000
export async function GET(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  if (!countryByCode(code)) return NextResponse.json({ error: "unknown_country", available: listCountryRules().map((r) => r.code) }, { status: 404 });
  const on = req.nextUrl.searchParams.get("on");
  const date = on ? new Date(on) : new Date();
  const { tree, rules, dataGaps } = buildTree(code, date);
  const facts: Record<string, unknown> = {};
  for (const [k, v] of req.nextUrl.searchParams.entries()) {
    if (k === "on") continue;
    facts[k] = v === "true" ? true : v === "false" ? false : /^\d+(\.\d+)?$/.test(v) ? Number(v) : v;
  }
  const result = Object.keys(facts).length ? walk(tree, facts) : undefined;
  return NextResponse.json({ country: code, evaluatedOn: date.toISOString().slice(0, 10), rules: getCountryRules(code), dataGaps, tree, result }, { headers: { "Cache-Control": "no-store" } });
}
