# Emismart

Emismart simplifies, streamlines and digitalises work migration to Europe. The first release covers single permit
applications in five countries:

| Country | Permit | Who files |
| --- | --- | --- |
| Belgium | Single permit (permis unique / gecombineerde vergunning) | Employer, with the competent Region |
| Netherlands | GVVA (gecombineerde vergunning voor verblijf en arbeid) | Employer, with the IND |
| France | Work authorisation (ANEF) then VLS-TS salarié or travailleur temporaire | Employer, then employee |
| Germany | Aufenthaltserlaubnis zur Beschäftigung (§§ 18a, 18b AufenthG), fast-track procedure | Employee, employer assists |
| Luxembourg | Autorisation de séjour travailleur salarié | Employee, after the employer's ADEM declaration |

## What is in this version

- Landing page, employer page, pricing structure, about and legal pages.
- Country guides generated from a single data layer (`lib/countries.ts`): who applies, authorities, legal basis,
  decision period, validity, labour market test, step-by-step procedure, employer and employee documents, alternative
  routes, watch-outs and official sources.
- Eligibility check (`/eligibility`): eight-question questionnaire with a rules engine (`lib/eligibility.ts`) that
  points to the single permit, a highly qualified route, the German Opportunity Card or a job-offer-first message.
- Document checklist (`/checklist`): per country and per party, with progress saved in the browser and print to PDF.
- Case file intake (`/start`): multi-step form producing a case reference and summary, stored locally in the browser.
- Summary of the recast Single Permit Directive (EU) 2024/1233 on the home page.
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
3. Status tracking with statutory deadlines (admissibility, 90-day decision period, visa, card collection) and reminders.
4. Payments for Emismart services; government fees displayed separately and never marked up.
5. Lawyer review queue for flagged cases, refusals and appeals.
6. Multilingual interface: English, French, Dutch and German.
7. Content operations: a review calendar tied to official publications (regional shortage lists, IND fees, French
   arrêtés, German BeschV changes, Luxembourg legislation).
8. Extension to further routes (EU Blue Card, ICT, family reunification, renewals) and further countries.
