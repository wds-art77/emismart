import type { Country } from "../types";

export const lt: Country =
  {
    code: "lt",
    region: "Baltics",
    singlePermitDirective: true,
    name: "Lithuania",
    flag: "🇱🇹",
    languages: ["Lithuanian"],
    permitName: "Temporary residence permit on the basis of work",
    localName: "Leidimas laikinai gyventi darbo pagrindu",
    tagline: "Employer's mediation letter in MIGRIS, then a residence permit from the Migration Department, subject to an annual quota.",
    overview:
      "Lithuania grants a temporary residence permit that includes the right to work for the employer named in the application. The employer starts the process by filing a mediation letter (tarpininkavimo raštas) in the MIGRIS e-system of the Migration Department, committing to a full-time contract of at least six months and either a salary of at least the national average gross monthly salary or evidence of the worker's qualification and experience. The worker then applies in MIGRIS and gives biometrics at the Migration Department or at an external service provider abroad. Since 2025 the former Employment Service decision on labour market needs has been replaced for ordinary work permits by an annual quota approved by the Minister of Social Security and Labour; once the quota is used up, permits are granted only for higher-paid or listed shortage occupations. Rules changed again in May and November 2026, so always confirm the current procedure on the Migration Department site.",
    whoFilesShort: "Worker, after employer mediation letter",
    whoApplies:
      "The worker applies online in MIGRIS and attends in person for biometrics, at a Migration Department office if legally in Lithuania or at a Lithuanian mission or external service provider abroad. The employer must first submit the mediation letter in MIGRIS and pay its fee; the letter number is entered in the worker's application. From 1 November 2026 a worker staying in Lithuania on a Schengen visa or another state's national visa can no longer apply in-country for an ordinary work-based permit.",
    authorities: [
      "Migration Department under the Ministry of the Interior (Migracijos departamentas): mediation letters, residence permit decisions, MIGRIS",
      "Employment Service under the Ministry of Social Security and Labour (Užimtumo tarnyba): work permits, shortage occupation lists and labour market decisions where still required",
      "Lithuanian embassies and consulates and their external service providers: biometrics and national visas for applicants abroad",
      "State Labour Inspectorate (VDI): employer notifications and enforcement of the rules on employing foreigners",
    ],
    legalBasis: [
      "Įstatymas dėl užsieniečių teisinės padėties (Law on the Legal Status of Aliens, No. IX-2206), as amended with effect from 1 July 2024, 1 January 2025 and 22 May 2026",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Annual order of the Minister of Social Security and Labour approving the quota for foreigners arriving to work",
    ],
    decisionPeriod:
      "The EU Immigration Portal and EURES state that the Migration Department decides within 4 months, or within 2 months under the urgent procedure for a higher state fee; Lithuanian sources published after the 2023 amendments give shorter periods of one to three months, so confirm the current deadline on the Migration Department page. The recast directive requires a decision within 90 days of a complete application. Highly qualified applications have shorter statutory periods.",
    validity:
      "Up to two years for an ordinary work-based permit, renewable; three years for highly qualified workers. Renewal must be applied for between four and two months before expiry. Since 22 May 2026 a worker who has applied for renewal may stay and keep working for the same employer until the decision.",
    labourMarketTest:
      "Largely replaced by a quota. Until 2024 the employer needed a decision of the Employment Service that the job met the needs of the Lithuanian labour market unless the occupation was on a shortage list. From 2025 that decision is no longer required for an ordinary work-based permit; instead a single annual quota applies to first permits for non-highly-qualified workers, set each year by ministerial order (24,830 for 2025, exhausted in October 2025). Once the quota is full a permit can still be issued if the gross salary is at least 1.2 times the national average, or at least the national average for an occupation on the list of high value-added shortage occupations. A work permit from the Employment Service remains necessary for seasonal workers and some national visa routes.",
    steps: [
      {
        title: "Check the route, the quota and the employer conditions",
        actor: "Employer",
        detail:
          "Confirm whether the quota still has room or whether the salary or shortage-list exemption applies, that the contract will be full-time for at least six months, and that the company has no recent fines for illegal or undeclared work, which bar hiring foreigners for a year.",
      },
      {
        title: "Submit the mediation letter in MIGRIS",
        actor: "Employer",
        detail:
          "File the electronic mediation letter, pay the fee and state the worker's qualification and experience or the commitment to pay at least the average gross monthly salary. MIGRIS assigns a number for the worker's application.",
      },
      {
        title: "File the residence permit application",
        actor: "Employee",
        detail:
          "Complete the application in MIGRIS, enter the mediation letter number, upload the documents, pay the state fee (higher for the urgent procedure) and book an appointment.",
      },
      {
        title: "Biometrics and originals",
        actor: "Employee",
        detail:
          "Attend the Migration Department office, or a Lithuanian mission or external service provider abroad, to give fingerprints and a facial image and show original documents. Applicants abroad who need a visa can request a national visa to enter once the decision is positive.",
      },
      {
        title: "Examination and decision",
        actor: "Authority",
        detail:
          "The Migration Department checks the quota, the employer, the worker's documents and any security grounds, and decides within the statutory period (4 months or 2 months urgent according to the EU Immigration Portal).",
      },
      {
        title: "Collection, residence declaration and notifications",
        actor: "Both",
        detail:
          "The worker collects the card, declares the place of residence and reports later changes within 10 working days. The employer notifies the start of employment and must report termination; a worker who loses the job has three months (six after two years on the permit) to find a new employer.",
      },
    ],
    employerDocs: [
      { label: "Mediation letter submitted in MIGRIS with proof of the fee" },
      { label: "Employment contract or binding undertaking for full-time work of at least six months", note: "Shows the agreed gross monthly salary." },
      { label: "Evidence of the worker's qualification and at least one year of relevant experience in the last three years, or a commitment to pay at least the national average gross monthly salary" },
      { label: "Company registration data and a statement on fines for breaches of employment or immigration rules" },
      { label: "Work permit or Employment Service decision where the route still requires one (seasonal work, national visa)" },
    ],
    employeeDocs: [
      { label: "Application completed in MIGRIS" },
      { label: "Valid passport" },
      { label: "Photograph meeting the Migration Department's requirements" },
      { label: "Mediation letter number issued to the employer" },
      { label: "Criminal record certificates from the states of residence in the last two years", note: "First permit only." },
      { label: "Proof of sufficient funds or regular income and of accommodation in Lithuania" },
      { label: "Health insurance covering the stay until Lithuanian cover applies" },
      { label: "Diploma or other proof of qualification where the employer relies on the worker's qualification" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "Higher-education degree or five years of experience and pay of at least 1.5 times the average gross salary; outside the quota, three-year permit, decision within 2 months or 1 month urgent, and no Employment Service decision where pay reaches three times the average or the job is on the shortage list." },
      { name: "Intra-corporate transfer", summary: "Managers, specialists and trainee employees transferred within a group under the ICT rules of the same law." },
      { name: "National visa with a work permit", summary: "For seasonal work and other short engagements of up to one year the Employment Service issues a work permit and the worker enters on a national visa, which cannot be renewed." },
      { name: "Graduates of Lithuanian institutions", summary: "Workers who completed studies in Lithuania within the last five years are outside the quota and exempt from the prior-experience condition." },
    ],
    watchOuts: [
      "The annual quota can run out well before the year ends; in October 2025 the Migration Department stopped accepting new applications, leaving only the higher-salary and shortage-list exceptions.",
      "From 1 November 2026 applicants staying in Lithuania on a Schengen visa or another country's national visa must apply from abroad, and the list of external service providers accepting work-based applications has been reduced.",
      "The employer's record matters: a fine for illegal or undeclared work or repeated notification breaches blocks new permits for a year, and a lapsed six-month full-time contract condition leads to refusal or revocation.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Lithuania", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-lithuania_en" },
      { label: "EURES: living and working conditions, Lithuania", url: "https://eures.europa.eu/living-and-working/living-and-working-conditions-europe/living-and-working-conditions-lithuania_en" },
      { label: "LRT (Lithuanian national broadcaster): 2025 quota exhausted, Migration Department suspends applications", url: "https://www.lrt.lt/en/news-in-english/19/2715580/lithuania-halts-new-foreign-work-permit-applications-as-quota-nears-limit" },
      { label: "Deloitte Lithuania: changes in the regulation of the employment of foreigners (cross-check)", url: "https://www.deloitte.com/lt/en/services/legal/perspectives/changes-in-the-regulation-of-the-employment-of-foreigners.html" },
    ],
  };
