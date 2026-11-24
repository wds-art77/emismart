# Emismart

Emismart simplifies, streamlines and digitalises work migration to Europe. It covers work and residence permit
procedures in all 27 EU member states: the single permit in the 25 states bound by Directive 2011/98/EU and its
2024 recast, and the national schemes of Denmark and Ireland, which are not bound by it.

Launch depth is deepest for Belgium, the Netherlands, France, Germany and Luxembourg.

| Region | Countries |
| --- | --- |
| Western Europe | Austria, Belgium, France, Germany, Ireland, Luxembourg, Netherlands |
| Nordics | Denmark, Finland, Sweden |
| Southern Europe | Cyprus, Greece, Italy, Malta, Portugal, Spain |
| Central and Eastern Europe | Bulgaria, Croatia, Czechia, Hungary, Poland, Romania, Slovakia, Slovenia |
| Baltics | Estonia, Latvia, Lithuania |

Each country lives in its own file under `lib/data/<code>.ts` and carries the official sources it was drawn from.
Points that could not be confirmed on an official page are flagged in the text itself ("confirm on the official page").

## What is in this version

- Landing page, employer page, pricing structure, about and legal pages.
- Country guides for all 27 member states generated from a single data layer (`lib/countries.ts`, `lib/data/*.ts`): who applies, authorities, legal basis,
  decision period, validity, labour market test, step-by-step procedure, employer and employee documents, alternative
  routes, watch-outs and official sources.
- Eligibility check (`/eligibility`): eight-question questionnaire with a rules engine (`lib/eligibility.ts`) that
  points to the single permit, a highly qualified route, the German Opportunity Card or a job-offer-first message.
- Document checklist (`/checklist`): per country and per party, with progress saved in the browser and print to PDF.
- Case tracker (`/start`): intake, then milestones per country step with status, dates and notes, an indicative
  statutory decision deadline computed from the filing date (`lib/deadlines.ts`), document progress linked to the
  checklists, and JSON export/import so employer and employee can exchange the file. Stored locally in the browser.
- Summary of the recast Single Permit Directive (EU) 2024/1233 on the home page.
- Interface in English, French, Dutch and German (`lib/i18n/*.ts`) on locale-prefixed routes (`/en`, `/fr`, `/nl`,
  `/de`), server-rendered, with localized titles, canonical and hreflang links and a four-language sitemap. A middleware
  redirects bare URLs to the visitor's saved choice (cookie) or browser language. The English dictionary defines the
  type, so the compiler guarantees the other three are complete. All 27 country guides are fully translated as well:
  the summary layer, permit names, deadline notes and Blue Card points (`lib/data/translations/*.ts`) and the detailed
  sections, one file per country and language (`lib/data/translations/{fr,nl,de}/<code>.ts`). The translations keep the
  exact number and order of steps and documents, which the tracker relies on.
- EU Blue Card page (`/blue-card`): the common rules of Directive (EU) 2021/1883 and each country's positioning of the
  Blue Card, drawn from the country data.
- "Request lawyer review" in the tracker: builds a summary of the case and opens the mail client; the recipient address
  is set with `NEXT_PUBLIC_REVIEW_EMAIL` (see `.env.example`).
- Sitemap and robots routes, print styles, responsive layout.

All legal content is indicative, summarises publicly available official guidance and links to its sources. It is not
legal advice. Fees and salary thresholds are deliberately not hard-coded because they change yearly.

## Case management backend

Employer dashboard, secure document management, automated workflows and a reusable rules engine are built in:

- `lib/db`: Postgres schema (Drizzle), embedded Postgres for development, managed Postgres in production.
- `lib/auth`: passwordless sign-in by e-mail link, server-side sessions.
- `lib/cases`: case service with access control (organisation members and case members with roles).
- `lib/storage`: direct-to-bucket uploads and downloads through signed URLs; local file store for development.
- `lib/workflows`: event handlers (milestone and document generation, deadlines, notifications, escalation) and the
  daily reminder job.
- `lib/rules`: declarative rules engine with the eligibility ruleset (`/api/rules/evaluate`), plus structured
  country rules for all 27 member states (`lib/rules/countries/<code>.ts`): salary thresholds, shortage lists,
  family reunification, Directive (EU) 2024/1233 timelines and document requirements, every figure versioned with
  its validity date, official source and last-verified date. Decision trees are generated from this data
  (`/countries/<code>/rules`, `/api/rules/countries/<code>`). Unknown figures are null, never estimated.
- `lib/documents`: document types, legalisation regimes (EU public documents regulation, Hague apostille, consular
  legalisation) and validation checks (passport validity buffer, criminal record age, apostille, translation).
- `lib/pdf`, `lib/forms`: pre-filled application dossier and audit trail PDFs; registry for official form mappings.
- `app/[locale]/app`: the dashboard (cases, milestones, documents, parties, activity, notifications).

Tests: `npm test` (rules engine), `npm run e2e` (public site), `npm run e2e:app` (dashboard flow). Setup and
environment variables: see `DEPLOYMENT.md`.

## Stack

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Drizzle ORM on Postgres, S3-compatible storage, Resend
for mail. The public tools (eligibility, checklist, local tracker) still work without an account and keep data in the
browser.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build && npm start
```

End-to-end smoke tests (after a build; needs the `playwright` package and a Chromium it can launch):

```bash
npm run e2e
```

## Roadmap to a Boundless-style platform

1. Accounts and roles: employer, employee, lawyer or mandatary, with invitation into a shared case file.
2. Secure document vault hosted in the EU, with legalisation and translation status per document and e-signature.
3. Server-side status tracking with e-mail reminders, building on the local tracker and deadline data.
4. Payments for Emismart services; government fees displayed separately and never marked up.
5. Lawyer review queue for flagged cases, refusals and appeals.
6. Legal review of the translated guides alongside the English originals.
7. Content operations: a review calendar tied to official publications (regional shortage lists, IND fees, French
   arrêtés, German BeschV changes, Luxembourg legislation).
8. Extension to further routes (EU Blue Card, ICT, family reunification, renewals) and to EEA states and Switzerland.
9. Legal review pass on the 22 countries added after the initial five, with particular attention to the items flagged
   as unconfirmed in each file (see "Known gaps" below).

## Structured rules: review status

The 27 rule files were researched from official pages on 23 and 24 November 2026. Coverage at that date: Blue Card
threshold amount found on an official page for 13 countries, statutory minimum wage for 15, transposition status of
the recast directive for 23. Every missing figure is explained in the file's `reviewNotes`, shown on the country's
rules page under "Notes for the legal reviewer". Recurring reasons: the authority publishes a multiplier (for example
1.5 times the average wage) without the resulting amount; the official site refused automated access (Migri, Legifrance,
dofi.ibz.be, e-seimas, RIS); or transposition status rests on press coverage of the Commission's July 2026 infringement
package. These files are the first place for a lawyer's review; a corrected figure is a one-line change with a new
`validFrom`.

## Known gaps flagged during research

- Several official sites could not be opened from the research environment (Migri in Finland, the Lithuanian Migration
  Department, the Cyprus CRMD, AIMA in Portugal, Hungarian OIF factsheets, Polish MOS). Those entries lean on the EU
  Immigration Portal, national legislation and employment agency pages, and say so in the text.
- Validity periods differ between the EU Immigration Portal and current national law for Croatia, Slovakia and
  Slovenia; both figures are given with a note to confirm.
- Romania (OUG 32/2026), Lithuania (2025 quota system) and Hungary (Act XC of 2023) changed their procedures recently;
  the EU Immigration Portal pages are older than the national rules and the files follow the national rules.
- Bulgaria's transposition of the recast directive was still a bill at the time of writing.
