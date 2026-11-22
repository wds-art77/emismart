// Unit tests for the rules engine and the eligibility ruleset. Run: npm test
import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
// Transpile TypeScript on the fly without a build step.
const ts = require("typescript");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const origLoad = Module._extensions[".ts"];
Module._extensions[".ts"] = (m, filename) => {
  const src = fs.readFileSync(filename, "utf8");
  const out = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  m._compile(out, filename);
};
const { evaluateRules, test: testCond } = require(path.resolve("lib/rules/engine.ts"));
const { evaluateEligibility, eligibilityRules } = require(path.resolve("lib/rules/eligibility.ts"));

test("condition operators", () => {
  const f = { a: 5, s: "abc", e: "" };
  assert.equal(testCond({ fact: "a", op: "gte", value: 5 }, f), true);
  assert.equal(testCond({ fact: "a", op: "lt", value: 5 }, f), false);
  assert.equal(testCond({ fact: "s", op: "matches", value: "^a" }, f), true);
  assert.equal(testCond({ fact: "e", op: "missing" }, f), true);
  assert.equal(testCond({ not: { fact: "a", op: "in", value: [1, 2] } }, f), true);
  assert.equal(testCond({ any: [{ fact: "a", op: "eq", value: 1 }, { fact: "s", op: "eq", value: "abc" }] }, f), true);
});

test("priority order and stop", () => {
  const rules = [
    { id: "low", priority: 1, when: { fact: "x", op: "truthy" }, then: "low" },
    { id: "high", priority: 10, when: { fact: "x", op: "truthy" }, then: "high", stop: true },
  ];
  const r = evaluateRules(rules, { x: 1 });
  assert.deepEqual(r.outcomes, ["high"]);
  assert.equal(r.stoppedBy, "high");
});

test("EU citizen needs no permit", () => {
  const r = evaluateEligibility({ nationality: "eu" });
  assert.equal(r.routeId, "free-movement");
  assert.deepEqual(r.fired, ["eu-free-movement"]);
});

test("no offer in Germany gives the opportunity card, elsewhere offer-first", () => {
  assert.equal(evaluateEligibility({ nationality: "third", country: "de", offer: "no" }).routeId, "opportunity-card");
  assert.equal(evaluateEligibility({ nationality: "third", country: "be", offer: "no" }).routeId, "none");
});

test("degree plus high salary gives the highly qualified route with documents", () => {
  const r = evaluateEligibility({ nationality: "third", country: "nl", offer: "yes", qualification: "degree", salary: "high", shortage: "no" });
  assert.equal(r.routeId, "highly-qualified");
  assert.equal(r.labourMarketTest, "exempt");
  assert.ok(r.requiredDocuments.employee.length > 3);
  assert.equal(r.country.deadline.days, 90);
});

test("single permit: shortage removes the test, unknowns lower confidence, in-country flags review", () => {
  const base = { nationality: "third", country: "fr", offer: "yes", qualification: "vocational", salary: "standard", contract: "cdi" };
  assert.equal(evaluateEligibility({ ...base, shortage: "yes" }).labourMarketTest, "exempt");
  assert.equal(evaluateEligibility({ ...base, shortage: "no" }).labourMarketTest, "required");
  const u = evaluateEligibility({ ...base, shortage: "unknown", salary: "unknown" });
  assert.equal(u.confidence, "low");
  assert.ok(u.fired.includes("lower-confidence-unknown-salary"));
  assert.equal(evaluateEligibility({ ...base, shortage: "no", location: "inside" }).reviewRecommended, true);
});

test("Germany without qualification is blocked and flagged", () => {
  const r = evaluateEligibility({ nationality: "third", country: "de", offer: "yes", qualification: "none", salary: "standard", shortage: "no" });
  assert.equal(r.routeId, "skilled-worker-blocked");
  assert.equal(r.reviewRecommended, true);
});

test("every rule id is unique", () => {
  const ids = eligibilityRules.map((r) => r.id);
  assert.equal(new Set(ids).size, ids.length);
});
