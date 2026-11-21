import type { Country } from "../types";

export const dk: Country =
  {
    code: "dk",
    region: "Nordics",
    singlePermitDirective: false,
    name: "Denmark",
    flag: "🇩🇰",
    languages: ["Danish"],
    permitName: "Residence and work permit (Pay Limit Scheme and other SIRI schemes)",
    localName: "Opholds- og arbejdstilladelse (Beløbsordningen)",
    tagline: "National schemes run by SIRI: Pay Limit, Positive Lists and Fast-track, with no EU single permit rules and decisions normally within a month.",
    overview:
      "Denmark does not take part in EU legal migration directives, so the Single Permit Directive and its 2024 recast do not apply. Non-EU workers instead use one of the national work schemes administered by the Danish Agency for International Recruitment and Integration (SIRI). The most used is the Pay Limit Scheme, open to any job with a salary above a limit adjusted every 1 January, regardless of occupation. The Positive Lists cover shortage occupations for higher education and skilled work, and the Fast-track Scheme lets SIRI-certified companies obtain permits quickly, including a quick job start. Each scheme produces one residence and work permit tied to the job and employer.",
    whoApplies:
      "The application is made online to SIRI and has two parts: in form AR1 the employer completes the first part and the worker the second, using the same email address, while in form AR6 the employer applies alone with a power of attorney from the worker. Either party can create the case order ID and pay the fee. Under Fast-track the certified employer normally files with power of attorney. The worker must record biometrics within 14 days of submission.",
    authorities: [
      "Styrelsen for International Rekruttering og Integration (SIRI): decision on all work schemes, certification of Fast-track companies, Citizen Centre for biometrics",
      "Danish diplomatic missions and visa application centres abroad: recording of biometrics",
      "Regional Employment Councils (Regionale Arbejdsmarkedsråd): assessment of whether salary and terms meet Danish standards, and additions to the Positive Lists",
      "Danish Patient Safety Authority and other authorisation bodies: authorisation for regulated professions before a permit can be granted",
    ],
    legalBasis: [
      "Udlændingeloven (Danish Aliens Act), section 9 a, which lists the work schemes including the Positive Lists, the Pay Limit Scheme and the Fast-track Scheme",
      "Protocol No 22 on the position of Denmark annexed to the EU Treaties, under which Directive 2011/98/EU and Directive (EU) 2024/1233 do not bind Denmark",
      "Annual adjustment of the pay limit amounts on 1 January and half-yearly updates of the Positive Lists",
    ],
    decisionPeriod:
      "No EU deadline applies. SIRI publishes normal processing times measured from submission to decision: 1 month for the Pay Limit Scheme, the Positive List for people with a higher education and the Fast-track pay limit, researcher and educational tracks, rising to 3 months (2 months for Fast-track) if further information is requested. The Supplementary Pay Limit Scheme takes 2 months, up to 5. A Fast-track quick job start decision normally takes about 10 days, and a provisional work permit can be issued at SIRI's Citizen Centre for applicants already legally in Denmark.",
    validity:
      "For employment of 4 years or more the permit is normally issued for 4 years and can be extended; for shorter contracts it covers the employment period. Pay Limit, Positive List (higher education) and most Fast-track permits come with an automatic 6-month job-seeking period if the job ends. Supplementary Pay Limit permits run up to 5 years, and the Fast-track short-term track up to 90 days without extension. A permit cannot run beyond 3 months before the passport expires.",
    labourMarketTest:
      "None under the Pay Limit Scheme, the Positive Lists or the main Fast-track tracks. Instead, salary and terms (holiday, notice periods) must match Danish standards for the field, which SIRI can ask a Regional Employment Council to assess, and only cash salary, pension contributions and holiday allowance count towards the pay limit. The Supplementary Pay Limit Scheme adds a 2-week posting on Jobnet and EURES and a condition on the national unemployment rate.",
    steps: [
      {
        title: "Choose the scheme and check pay and terms",
        actor: "Employer",
        detail:
          "The employer checks whether the salary exceeds the current pay limit, whether the job title is on a Positive List, or whether the company is Fast-track certified. Hours must be at least 30 per week under the Pay Limit Scheme and full time under Fast-track, and the job must not be covered by a labour dispute.",
      },
      {
        title: "Create a case order ID and pay the fee",
        actor: "Both",
        detail:
          "Either the employer or the worker creates the case order ID on nyidanmark.dk and pays the processing fee. The receipt must be attached to the application. Commuters who will not live in Denmark need neither.",
      },
      {
        title: "Complete the online application",
        actor: "Both",
        detail:
          "In AR1 the employer fills in the company and job part and the worker the personal part, signing with MitID or a sworn declaration. In AR6 the employer applies with power of attorney. The contract or job offer, passport copies and education documents are attached.",
      },
      {
        title: "Record biometrics within 14 days",
        actor: "Employee",
        detail:
          "The worker has facial image and fingerprints recorded at a Danish mission or application centre abroad, or at a SIRI branch by appointment if legally in Denmark. Missing the deadline leads to rejection.",
      },
      {
        title: "SIRI assessment",
        actor: "Authority",
        detail:
          "SIRI checks the salary components, the Danish standard of the terms, any required authorisation and the genuineness of the employment. It may request further documents or consult a Regional Employment Council, which extends the processing time.",
      },
      {
        title: "Decision and residence card",
        actor: "Authority",
        detail:
          "The decision is sent to the applicant and, where relevant, the employer. The residence card is posted to the worker's CPR-registered address in Denmark, so the name must be on the letterbox.",
      },
      {
        title: "Arrival, CPR registration and Danish bank account",
        actor: "Employee",
        detail:
          "The worker registers a Danish address in the CPR register and opens a Danish bank account in their own name within 180 days of the permit or of entry. Salary must be paid into that account. Any change of job, even within the company, must be reported to SIRI.",
      },
    ],
    employerDocs: [
      { label: "Employment contract or job offer stating salary, terms of employment and a job description" },
      { label: "Documentation of any salary components not stated in the contract, such as pension or guaranteed supplements" },
      { label: "Power of attorney from the worker where the employer applies alone (AR6)" },
      { label: "For newly established companies: business plan and budget or general ledger balance; for companies being set up: set-up plan and overview of major costs" },
      { label: "Hospitality and food-service employers: the additional SIRI document checklist for the sector" },
      { label: "Fast-track applications: the company's SIRI certification and, for the educational track, a description of the training purpose" },
    ],
    employeeDocs: [
      { label: "Receipt for the processing fee with the case order ID" },
      { label: "Copy of all passport pages, including blank pages and covers" },
      { label: "Documentation of relevant education and work experience; for the Positive Lists, proof of the required level of higher education or skilled training" },
      { label: "Danish authorisation where the profession requires it, such as from the Danish Patient Safety Authority" },
      { label: "Proof of legal stay in Denmark if applying from inside the country" },
      { label: "Curriculum vitae where relevant" },
      { label: "Translations of documents not in Danish, English, Norwegian or Swedish" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "Not available: Denmark does not take part in the EU Blue Card scheme. The Pay Limit Scheme and the Fast-track pay limit track serve highly paid workers instead." },
      { name: "Positive List for people with a higher education and Positive List for skilled work", summary: "Shortage occupations listed by DISCO code with the required education, updated on 1 January and 1 July, with regional additions. No salary limit beyond Danish standards; 4-year permits." },
      { name: "Fast-track Scheme", summary: "For SIRI-certified companies. Five tracks (pay limit, supplementary pay limit, short-term, researcher, educational), quick job start and permission to work both in Denmark and abroad." },
      { name: "Supplementary Pay Limit Scheme", summary: "A lower pay limit for jobs posted on Jobnet and EURES for 2 weeks, available while national unemployment stays below a set rate. Permits up to 5 years but no job-seeking period." },
    ],
    watchOuts: [
      "Biometrics must be recorded within 14 days of submission and the AR1 applicant must sign up with the exact email address the employer entered; both are common reasons for rejection or restarts.",
      "Only guaranteed cash salary, pension contributions and holiday allowance count towards the pay limit. Housing, car, phone and other benefits in kind do not, and holiday allowance paid out the following year does not count for the earning year.",
      "The permit is tied to the job. A new position, even in the same company, needs a new application, and salary must go into a Danish bank account within 180 days or the permit is at risk.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Denmark", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-denmark_en" },
      { label: "New to Denmark (SIRI): Pay Limit Scheme", url: "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Pay-Limit-Scheme" },
      { label: "New to Denmark (SIRI): Fast-track Scheme", url: "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Fast-track" },
      { label: "New to Denmark (SIRI): case processing times", url: "https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Case-processing-times-in-SIRI" },
    ],
  };
