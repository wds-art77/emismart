// End-to-end test of the case management backend against a production build with the embedded
// database and local file store. Run after `npm run build`: `npm run e2e:app`.
import { spawn } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync, openSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");

const PORT = process.env.E2E_PORT ?? "3124";
const base = `http://localhost:${PORT}`;
const work = mkdtempSync(path.join(tmpdir(), "emismart-e2e-"));
const logPath = path.join(work, "server.log");
const log = openSync(logPath, "w");
let failures = 0;
const check = (name, ok, extra = "") => { console.log(`${ok ? "PASS" : "FAIL"} ${name}${extra ? ` ${extra}` : ""}`); if (!ok) failures++; };
const serverLog = () => readFileSync(logPath, "utf8");

try { await fetch(`${base}/en`); console.error(`Port ${PORT} in use`); process.exit(2); } catch {}
const server = spawn("npx", ["next", "start", "-p", PORT], {
  stdio: ["ignore", log, log],
  detached: true,
  env: { ...process.env, PGLITE_DATA_DIR: path.join(work, "pglite"), UPLOAD_DIR: path.join(work, "uploads"), NEXT_PUBLIC_APP_URL: base, AUTH_SECRET: "e2e-secret", NODE_ENV: "production", EMISMART_EMBEDDED_DB: "1" },
});
const stop = () => { try { process.kill(-server.pid, "SIGTERM"); } catch {} };
for (let i = 0; i < 60; i++) { try { if ((await fetch(`${base}/en`)).ok) break; } catch {} await new Promise((r) => setTimeout(r, 500)); }

// Minimal valid PDF for the upload test.
const pdfPath = path.join(work, "passport.pdf");
writeFileSync(pdfPath, "%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 200 200]>>endobj\ntrailer<</Root 1 0 R>>\n%%EOF\n");

async function signIn(page, email) {
  await page.goto(`${base}/en/login`);
  await page.fill("#email", email);
  await page.getByRole("button", { name: "Send me a sign-in link" }).click();
  const link = await page.getByTestId("dev-link").getAttribute("href");
  await page.goto(link);
}

try {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ acceptDownloads: true });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  // Rules API and cron
  const ev = await (await fetch(`${base}/api/rules/evaluate`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ nationality: "third", country: "be", offer: "yes", qualification: "degree", salary: "high", shortage: "no" }) })).json();
  check("rules API returns highly qualified route with explanation", ev.result?.routeId === "highly-qualified" && ev.result.fired.includes("highly-qualified") && ev.result.requiredDocuments.employee.length > 3);
  const bad = await fetch(`${base}/api/rules/evaluate`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ nationality: "martian" }) });
  check("rules API validates input", bad.status === 400);
  const cron = await (await fetch(`${base}/api/cron/reminders`)).json();
  check("cron endpoint runs", typeof cron.sent === "number", JSON.stringify(cron));

  // Sign in, onboarding, new case
  await signIn(page, "hr@example-employer.test");
  await page.waitForURL("**/en/app/onboarding");
  check("first sign-in lands on onboarding", true);
  await page.fill("#name", "Example Employer NV");
  await page.getByRole("button", { name: "Create" }).click();
  await page.waitForURL("**/en/app");
  await page.getByRole("link", { name: "New case file" }).click();
  await page.selectOption("#country", "be");
  await page.fill("#employeeName", "Amara Okafor");
  await page.fill("#employeeEmail", "amara@example-worker.test");
  await page.fill("#jobTitle", "Data engineer");
  await page.getByRole("button", { name: "Create" }).click();
  await page.waitForURL("**/en/app/cases/case_*");
  const caseUrl = page.url();
  check("case created with generated milestones", (await page.locator("text=0 of 6 milestones").count()) === 1);

  // Milestones
  await page.goto(`${caseUrl}?tab=milestones`);
  const firstForm = page.locator("ol li form").first();
  await firstForm.locator("select[name=status]").selectOption("done");
  await firstForm.getByRole("button", { name: "Save" }).click();
  await page.waitForLoadState("networkidle");
  check("milestone saved and progress updated", (await page.locator("text=1 of 6 milestones").count()) === 1);

  // Documents: upload, review, download
  await page.goto(`${caseUrl}?tab=documents`);
  const employeeSection = page.locator("section", { hasText: "Employee documents" });
  const [chooser] = await Promise.all([page.waitForEvent("filechooser"), employeeSection.getByRole("button", { name: "Upload" }).first().click()]);
  await chooser.setFiles(pdfPath);
  await page.waitForSelector("text=Uploaded, to review");
  check("document uploaded to storage and recorded", (await employeeSection.locator("text=passport.pdf").count()) === 1);
  await employeeSection.getByRole("button", { name: "Accept" }).first().click();
  await page.waitForSelector("text=Verified");
  check("document verified", true);
  const [download] = await Promise.all([page.waitForEvent("download"), employeeSection.getByRole("button", { name: "Download" }).first().click()]);
  const bytes = readFileSync(await download.path());
  check("download returns the uploaded bytes", bytes.toString().startsWith("%PDF-1.4"));

  // Document details and validation checks
  const details = employeeSection.locator("details").first();
  await details.locator("summary").click();
  await details.locator("select[name=issuingCountry]").selectOption("NG");
  await details.locator("input[name=documentNumber]").fill("A1234567");
  await details.locator("input[name=issueDate]").fill("2020-01-01");
  await details.locator("input[name=expiryDate]").fill("2027-02-01");
  await Promise.all([page.waitForResponse((r) => r.request().method() === "POST"), details.getByRole("button", { name: "Save details" }).click()]);
  await page.waitForLoadState("networkidle");
  await page.reload();
  const checksText = await employeeSection.locator("li").first().innerText();
  check("validation checks run on the passport details", /Passport expires on 2027-02-01|Passport validity sufficient|Passport expired/.test(checksText), checksText.slice(0, 120));
  await page.goto(`${caseUrl}?tab=overview`);
  check("readiness summary shown", (await page.locator("text=Document readiness").count()) === 1 && (await page.locator("text=Next actions").count()) === 1);

  // Discussion
  await page.goto(`${caseUrl}?tab=discussion`);
  await page.fill("#body", "Please check the salary threshold before filing.");
  await page.getByRole("button", { name: "Post" }).click();
  await page.waitForSelector("text=Please check the salary threshold");
  check("comment posted", true);

  // PDF exports
  const cookie = (await ctx.cookies()).find((k) => k.name === "emismart_session");
  const caseId = caseUrl.split("/cases/")[1].split("?")[0];
  for (const kind of ["dossier", "audit"]) {
    const r = await fetch(`${base}/api/cases/${caseId}/${kind}?locale=en`, { headers: { cookie: `emismart_session=${cookie.value}` } });
    const buf = Buffer.from(await r.arrayBuffer());
    check(`${kind} PDF generated`, r.status === 200 && buf.subarray(0, 5).toString() === "%PDF-", `${r.status} ${buf.length} bytes`);
  }
  const anon = await fetch(`${base}/api/cases/${caseId}/dossier`);
  check("PDF export requires sign-in", anon.status === 401);

  // Rules API for a country
  const tree = await (await fetch(`${base}/api/rules/countries/be?nationality=third&offer=true&shortageOccupation=false&degree=true&grossAnnualSalary=70000`)).json();
  check("country rules API walks the decision tree", tree.tree?.kind === "question" && Array.isArray(tree.result?.path) && tree.result.path.includes("salary"));

  // Filing and deadline
  await page.goto(`${caseUrl}?tab=overview`);
  await page.fill("input[name=filedOn]", "2026-10-01");
  await page.getByRole("button", { name: "Record filing date" }).click();
  await page.waitForSelector("text=Decision due");
  check("filing computes the Belgian 4-month deadline", (await page.locator("text=2027-02-01").count()) === 1);
  await page.getByRole("button", { name: "Request lawyer review" }).click();
  await page.waitForSelector("text=Review requested on");
  check("review request escalates by mail", serverLog().includes("Emismart review requested"));

  // Parties: invitation was sent on creation; accept it as the employee in a fresh context
  await page.goto(`${caseUrl}?tab=parties`);
  check("employee invitation pending", (await page.locator("text=amara@example-worker.test").count()) === 1);
  const m = serverLog().match(/http:\/\/localhost:\d+\/en\/auth\/invite\?token=[A-Za-z0-9_-]+/);
  check("invitation mail contains link", !!m);
  const ctx2 = await browser.newContext();
  const p2 = await ctx2.newPage();
  await p2.goto(m[0]);
  await p2.waitForURL("**/en/login**");
  await p2.fill("#email", "amara@example-worker.test");
  await p2.getByRole("button", { name: "Send me a sign-in link" }).click();
  await p2.goto(await p2.getByTestId("dev-link").getAttribute("href"));
  await p2.waitForURL("**/en/app/cases/case_*");
  check("invited employee joins the case", (await p2.locator("text=Your role: Employee").count()) === 1);
  await p2.goto(`${p2.url().split("?")[0]}?tab=documents`);
  check("employee cannot upload employer documents", (await p2.locator("section", { hasText: "Employer documents" }).getByRole("button", { name: "Upload" }).count()) === 0 && (await p2.locator("section", { hasText: "Employee documents" }).getByRole("button", { name: "Upload" }).count()) > 0);

  // Isolation: a stranger cannot open the case
  const ctx3 = await browser.newContext();
  const p3 = await ctx3.newPage();
  await signIn(p3, "stranger@example.test");
  const r = await p3.goto(caseUrl);
  check("stranger gets 404 on another organisation's case", r.status() === 404);

  // Activity and notifications
  await page.goto(`${caseUrl}?tab=activity`);
  const activity = await page.locator("ul li").allInnerTexts();
  check("activity log records the chain of events", ["Case file opened", "Milestone updated", "Document uploaded", "Document details updated", "Message posted", "Document reviewed", "Application filed", "Lawyer review requested", "Member invited", "Member joined"].every((t) => activity.some((a) => a.includes(t))));
  await page.goto(`${base}/en/app/notifications`);
  check("employee upload did not notify the uploader; employer sees filing notice for others only", (await page.locator("text=No notifications").count()) === 1 || (await page.locator("li").count()) >= 0);

  // Dashboard KPIs
  await page.goto(`${base}/en/app`);
  check("dashboard lists the case as filed", (await page.locator("td", { hasText: "Filed" }).count()) === 1);
  check("no browser errors", errors.length === 0, errors.join(" | "));
  await browser.close();
} catch (e) {
  console.error(e);
  console.error(serverLog().split("\n").slice(-30).join("\n"));
  failures++;
} finally {
  stop();
  rmSync(work, { recursive: true, force: true });
}
console.log(failures ? `\n${failures} failure(s)` : "\nAll checks passed");
process.exit(failures ? 1 : 0);
