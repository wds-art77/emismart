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

## 3. The case management backend

The backend is built in and provider-neutral. It needs four things in production, all set as environment variables
in Vercel (Project, Settings, Environment Variables). Without `DATABASE_URL` the public site works and the dashboard
shows a "not configured" message, so nothing breaks before you are ready.

| Variable | What it is | Where to get it |
| --- | --- | --- |
| `AUTH_SECRET` | Signs sessions and upload links. | `openssl rand -base64 32` |
| `DATABASE_URL` | Postgres connection string. | Supabase (Project, Settings, Database, connection string, "Transaction" pooler) or Neon, region Frankfurt. |
| `S3_BUCKET`, `S3_ENDPOINT`, `S3_REGION`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY` | Private document bucket. | Supabase Storage (Project, Settings, Storage, S3 access keys; endpoint `https://<ref>.storage.supabase.co/storage/v1/s3`, region `eu-central-1`), or Cloudflare R2 with EU jurisdiction, or AWS S3 eu-central-1. Create the bucket **private**. |
| `RESEND_API_KEY`, `MAIL_FROM` | Transactional mail: sign-in links, invitations, notifications. | resend.com, EU region; add the SPF and DKIM records Resend shows to the emismart.com DNS at GoDaddy, then use `Emismart <noreply@emismart.com>`. |
| `CRON_SECRET` | Protects the daily reminder job (`vercel.json` schedules it at 07:00 UTC). | `openssl rand -base64 32`; Vercel sends it automatically. |
| `REVIEW_EMAIL` | Receives escalations when a case has no lawyer member. | `weds@desaeger.be` |
| `NEXT_PUBLIC_APP_URL` | Public URL used in e-mail links. | `https://www.emismart.com` |

Recommended order: Supabase project (database + storage in one account, EU region, signs a GDPR data processing
agreement), then Resend, then set the variables and redeploy. The database schema is created automatically on first
use from `lib/db/migrations`.

### What the backend does

- **Sign-in** by e-mail link, no passwords. Sessions are stored server-side and expire after 30 days.
- **Organisations and roles.** An employer or law firm owns case files. On a case, members are employer, employee or
  lawyer. Employees see only their own case and can upload only their own documents. Access checks are enforced in
  the service layer (`lib/cases.ts`), not in the pages.
- **Case files** with milestones generated from the country guide, document requests generated for both parties,
  filing date and statutory decision deadline, lawyer review request, status, and a full audit log of who did what.
- **Documents** are uploaded straight from the browser to the private bucket through a signed URL valid 10 minutes,
  downloaded through a signed URL valid 2 minutes, limited to PDF and images up to 25 MB, with a review workflow
  (requested, uploaded, verified, sent back). Every download is logged. Server-side encryption is the bucket's job:
  enable it on the bucket (Supabase and R2 encrypt at rest by default).
- **Workflows** (`lib/workflows`): events trigger handlers, for example creating a case generates milestones and
  document requests, recording the filing date computes the deadline and notifies the parties, uploads notify the
  reviewers, a review request escalates to the lawyer or to `REVIEW_EMAIL`. A daily cron sends deadline reminders.
- **Rules engine** (`lib/rules`): a declarative, explainable evaluator. The eligibility questionnaire runs on it, and it
  is exposed at `POST /api/rules/evaluate` for other systems (HR tools, intake forms). `GET /api/rules/evaluate` lists
  the rules. Unit tests: `npm test`.

### Local development

`npm run dev` works with no configuration: an embedded Postgres under `.data/pglite` and files under `.data/uploads`.
Sign-in links are shown on screen instead of being mailed. `npm run e2e:app` runs the whole dashboard flow against a
production build.

### Still to do before real case files

- Virus scanning of uploads (for example a ClamAV service or the bucket provider's scanning) and optional
  client-side encryption for the most sensitive documents.
- Retention: a job that deletes documents a fixed period after a case closes, and the privacy notice that states it.
- Rate limiting on the sign-in endpoint and two-factor sign-in for law firm accounts.
- Multi-organisation collaboration (a law firm working on an employer's case through its own organisation rather than
  as an invited member).

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
