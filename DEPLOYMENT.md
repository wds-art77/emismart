# Deploying Emismart

## 1. Hosting: Vercel, with the domain staying at GoDaddy

Emismart is a Next.js application with a middleware (locale redirect) and server-rendered pages. GoDaddy's shared
hosting runs PHP and WordPress and cannot run it. The standard setup is:

- **Vercel** runs the site (the company behind Next.js; free Hobby plan for a preview, Pro plan at launch).
  The project is pinned to the Frankfurt region (`vercel.json`, `fra1`) so that server code runs in the EU.
- **GoDaddy** keeps the domain `emismart.com` and only its DNS records change.

### Steps

1. Create a Vercel account at vercel.com and connect GitHub.
2. "Add New Project", import `wds-art77/emismart`. Framework is detected as Next.js; no build settings to change.
   Done on 22 November 2026: the project lives in the Vercel team `emismart`, production at https://emismart.vercel.app.
   The production branch should be `main`; check it under Project, Settings, Git.
3. Environment variables: `NEXT_PUBLIC_REVIEW_EMAIL = weds@desaeger.be` (optional; it is also the default in code).
4. Deploy. Vercel gives a `*.vercel.app` URL within about two minutes.
5. Project > Settings > Domains > add `emismart.com` and `www.emismart.com`.
6. At GoDaddy: My Products > DNS for emismart.com, then:
   - **A record**: name `@`, value `76.76.21.21`, TTL 600.
   - **CNAME record**: name `www`, value `cname.vercel-dns.com`, TTL 600.
   - Remove any existing `A` record for `@` and `CNAME` for `www` that GoDaddy parked there.
   Vercel shows exactly these values on the Domains page; copy them from there if they differ.
7. Wait for DNS propagation (minutes to a few hours). Vercel issues the TLS certificate automatically.

Every push to the connected branch then redeploys automatically; pull requests get preview URLs.

## 2. E-mail

The "request lawyer review" button opens the visitor's mail client addressed to `weds@desaeger.be`. No mail is sent by
the server yet. For transactional mail later (confirmations, reminders), use a provider with EU data centres, for
example Resend or Postmark, sending from a `@emismart.com` address once the domain's SPF and DKIM records are added at
GoDaddy.

## 3. Database and documents: the production backend

The current version stores case files in the browser. For accounts, shared case files and document upload, add:

| Need | Recommendation | Why |
| --- | --- | --- |
| Database | **Supabase** (Postgres, region Frankfurt) or **Neon** (Postgres, region Frankfurt) | Managed Postgres in the EU, free tier for development, both sign a GDPR data processing agreement. Supabase also brings authentication and storage in one account. |
| Authentication | Supabase Auth (e-mail magic link, Microsoft or Google sign-in for employers) | Employers, employees and counsel each get a role on a case file. |
| Document storage | Supabase Storage (Frankfurt), private buckets, signed URLs | Passports, criminal record extracts and medical certificates must never be public. |
| ORM | Prisma or Drizzle | Typed access from Next.js server actions and route handlers. |
| Mail | Resend (EU) | Invitations to a case file, deadline reminders. |

Data model, first version:

- `organisations` (employer or law firm), `users`, `memberships` (role per organisation).
- `cases` (country, permit route, reference, status, filed_on), `case_members` (user, role: employer, employee, lawyer).
- `milestones` (case, step index, status, date, note), `documents` (case, party, label, storage path, uploaded_by,
  legalisation status), `events` (audit log: who did what, when).

GDPR points to settle before the first real case file: a privacy notice, a data processing agreement with each employer
(Emismart as processor for the employer's HR data, controller for its own account data), retention periods (for
example, delete documents 12 months after the case closes), and a record of processing. Special categories of data
(health, criminal records) are processed only because the procedure requires them; this must be stated.

## 4. Costs, indicative

| Item | Development | Launch |
| --- | --- | --- |
| Vercel | Hobby, free | Pro, about 20 USD per month per member |
| Supabase | Free | Pro, about 25 USD per month |
| Resend | Free (3,000 mails per month) | about 20 USD per month |
| Domain | already owned at GoDaddy | renewal only |

## 5. Checklist before going live

- Merge the development branch into `main` and deploy `main`.
- Confirm the review e-mail address and add SPF and DKIM when server mail is introduced.
- Legal review of the 22 country guides added after the first five (see README, "Known gaps").
- Publish prices on the pricing page.
- Add a cookie banner only if analytics or non-essential cookies are introduced; today the only cookie is the language
  preference, which is strictly necessary.
