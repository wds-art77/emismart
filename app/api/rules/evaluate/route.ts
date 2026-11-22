import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { evaluateEligibility, eligibilityRules } from "@/lib/rules/eligibility";

// Public rules API. POST facts, receive the route, confidence, explanation (fired rule ids),
// the country's decision deadline and the required documents.
// Example: curl -X POST /api/rules/evaluate -H 'content-type: application/json' \
//   -d '{"nationality":"third","country":"be","offer":"yes","qualification":"degree","salary":"high"}'

const Facts = z.object({
  nationality: z.enum(["eu", "third"]),
  country: z.string().length(2).optional(),
  offer: z.enum(["yes", "no"]).optional(),
  location: z.enum(["abroad", "inside"]).optional(),
  contract: z.enum(["cdi", "cdd"]).optional(),
  qualification: z.enum(["degree", "vocational", "experience", "none"]).optional(),
  salary: z.enum(["high", "standard", "unknown"]).optional(),
  shortage: z.enum(["yes", "no", "unknown"]).optional(),
});

export async function POST(req: NextRequest) {
  const parsed = Facts.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid_facts", issues: parsed.error.issues }, { status: 400 });
  const result = evaluateEligibility(parsed.data as Parameters<typeof evaluateEligibility>[0]);
  return NextResponse.json({ result, rulesVersion: "2026-11", rulesCount: eligibilityRules.length }, { headers: { "Cache-Control": "no-store" } });
}

export async function GET() {
  return NextResponse.json({ rules: eligibilityRules.map((r) => ({ id: r.id, description: r.description, priority: r.priority, stop: !!r.stop, when: r.when })) });
}
