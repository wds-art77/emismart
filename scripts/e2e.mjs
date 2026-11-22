// End-to-end smoke tests. Run after `npm run build`: `npm run e2e`.
// Uses the Playwright library directly (no test runner dependency): `npm i -D playwright` if it is not installed.
import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

// Resolved through require so a globally installed Playwright (NODE_PATH) also works.
const { chromium } = createRequire(import.meta.url)("playwright");

const PORT = process.env.E2E_PORT ?? "3123";
const base = `http://localhost:${PORT}`;
const codes = "at be bg hr cy cz dk ee fi fr de gr hu ie it lv lt lu mt nl pl pt ro sk si es se".split(" ");
let failures = 0;
const check = (name, ok, extra = "") => {
  console.log(`${ok ? "PASS" : "FAIL"} ${name}${extra ? ` ${extra}` : ""}`);
  if (!ok) failures++;
};

// Refuse to run against a stale server left on the port by an earlier run.
try {
  await fetch(`${base}/en`);
  console.error(`Port ${PORT} is already in use; stop that server first.`);
  process.exit(2);
} catch {}

const server = spawn("npx", ["next", "start", "-p", PORT], { stdio: "ignore", detached: true });
const stopServer = () => {
  try {
    process.kill(-server.pid, "SIGTERM");
  } catch {}
};
const waitFor = async () => {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`${base}/en`);
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("server did not start");
};

try {
  await waitFor();

  // Redirects and SSR
  const root = await fetch(`${base}/`, { redirect: "manual" });
  check("root redirects to a locale", root.status === 307 && /\/en$/.test(root.headers.get("location") ?? ""));
  const fr = await fetch(`${base}/countries/be`, { redirect: "manual", headers: { "accept-language": "fr-BE,fr;q=0.9" } });
  check("accept-language picks French", (fr.headers.get("location") ?? "").endsWith("/fr/countries/be"));
  const html = await (await fetch(`${base}/fr/countries/be`)).text();
  check("French page is server-rendered", html.includes('<html lang="fr"') && html.includes("Générer la liste de documents"));
  check("hreflang alternates present", html.includes('hrefLang="de"') && html.includes('hrefLang="x-default"'));
  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
  check("sitemap lists all locales", (sitemap.match(/<loc>/g) ?? []).length >= 4 * (11 + codes.length));

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));

  // Every country page in every locale renders with steps
  for (const l of ["en", "fr", "nl", "de"]) {
    let ok = true;
    for (const c of codes) {
      const r = await page.goto(`${base}/${l}/countries/${c}`);
      const steps = await page.locator("ol li").count();
      if (!r || r.status() !== 200 || steps < 5) ok = false;
    }
    check(`all 27 country guides render in ${l}`, ok);
  }

  // Eligibility flow in German, with country preset
  await page.goto(`${base}/de/eligibility?country=pl`);
  await page.getByRole("button", { name: "Staatsangehöriger eines anderen Landes" }).click();
  await page.getByRole("button", { name: "Ja" }).click();
  await page.getByRole("button", { name: "Außerhalb des Ziellandes" }).click();
  await page.getByRole("button", { name: "Unbefristet" }).click();
  await page.getByRole("button", { name: "Berufs- oder Fachqualifikation" }).click();
  await page.getByRole("button", { name: "Marktübliches Gehalt, unter dieser Schwelle" }).click();
  await page.getByRole("button", { name: "Nein", exact: true }).click();
  check("eligibility result in German", /voraussichtlich in Betracht/.test(await page.locator("h2").first().innerText()));

  // Checklist persistence
  await page.goto(`${base}/en/checklist?country=ee`);
  await page.getByRole("checkbox").first().check();
  await page.reload();
  check("checklist tick persists", await page.getByRole("checkbox").first().isChecked());

  // Tracker: create, deadline, milestone, export, import
  const ctx = await browser.newContext({ acceptDownloads: true });
  const p2 = await ctx.newPage();
  await p2.goto(`${base}/en/start?country=nl`);
  await p2.getByRole("button", { name: /^employer$/i }).click();
  await p2.getByRole("button", { name: "Continue" }).click();
  await p2.fill("#employerName", "Test BV");
  await p2.fill("#employeeName", "Test Person");
  await p2.getByRole("button", { name: "Continue" }).click();
  await p2.fill("#jobTitle", "Engineer");
  await p2.getByRole("button", { name: "Save and open the tracker" }).click();
  await p2.fill("#filedOn", "2026-10-01");
  check("deadline computed", (await p2.locator("text=Decision due by").count()) === 1);
  await p2.getByRole("button", { name: "Milestones" }).click();
  await p2.getByLabel(/^Status of /).first().selectOption("done");
  const pct = await p2.locator("p.text-3xl").innerText();
  check("milestone progress updates", pct !== "0%", pct);
  const [download] = await Promise.all([p2.waitForEvent("download"), p2.getByRole("button", { name: "Export case file" }).click()]);
  const json = JSON.parse(readFileSync(await download.path(), "utf8"));
  check("export contains milestones", json.country === "nl" && Object.keys(json.milestones).length === 1);
  const ctx2 = await browser.newContext();
  const p3 = await ctx2.newPage();
  await p3.goto(`${base}/fr/start`);
  await p3.setInputFiles("input[type=file]", await download.path());
  await p3.waitForSelector("text=Délai de décision");
  check("import restores file in French", (await p3.locator("p.text-3xl").innerText()) === pct);

  // Language switcher keeps the path
  await page.goto(`${base}/en/blue-card`);
  await page.getByLabel("Language").first().selectOption("nl");
  await page.waitForURL("**/nl/blue-card");
  check("switcher keeps path", page.url().endsWith("/nl/blue-card"));

  check("no browser errors", errors.length === 0, errors.join(" | "));
  await browser.close();
} catch (e) {
  console.error(e);
  failures++;
} finally {
  stopServer();
}
console.log(failures ? `\n${failures} failure(s)` : "\nAll checks passed");
process.exit(failures ? 1 : 0);
