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
  type, so the compiler guarantees the other three are complete. Country guide content stays in English pending legal
  review; a note says so in the other languages.
- Sitemap and robots routes, print styles, responsive layout.

All legal content is indicative, summarises publicly available official guidance and links to its sources. It is not
legal advice. Fees and salary thresholds are deliberately not hard-coded because they change yearly.

## Stack

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4. No backend yet; the interactive tools use local storage
only, so no personal data leaves the browser.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build && npm start
```

## Roadmap to a Boundless-style platform

1. Accounts and roles: employer, employee, lawyer or mandatary, with invitation into a shared case file.
2. Secure document vault hosted in the EU, with legalisation and translation status per document and e-signature.
3. Server-side status tracking with e-mail reminders, building on the local tracker and deadline data.
4. Payments for Emismart services; government fees displayed separately and never marked up.
5. Lawyer review queue for flagged cases, refusals and appeals.
6. Translation of the country guides after legal review of each one.
7. Content operations: a review calendar tied to official publications (regional shortage lists, IND fees, French
   arrêtés, German BeschV changes, Luxembourg legislation).
8. Extension to further routes (EU Blue Card, ICT, family reunification, renewals) and to EEA states and Switzerland.
9. Legal review pass on the 22 countries added after the initial five, with particular attention to the items flagged
   as unconfirmed in each file (see "Known gaps" below).

## Known gaps flagged during research

- Several official sites could not be opened from the research environment (Migri in Finland, the Lithuanian Migration
  Department, the Cyprus CRMD, AIMA in Portugal, Hungarian OIF factsheets, Polish MOS). Those entries lean on the EU
  Immigration Portal, national legislation and employment agency pages, and say so in the text.
- Validity periods differ between the EU Immigration Portal and current national law for Croatia, Slovakia and
  Slovenia; both figures are given with a note to confirm.
- Romania (OUG 32/2026), Lithuania (2025 quota system) and Hungary (Act XC of 2023) changed their procedures recently;
  the EU Immigration Portal pages are older than the national rules and the files follow the national rules.
- Bulgaria's transposition of the recast directive was still a bill at the time of writing.
