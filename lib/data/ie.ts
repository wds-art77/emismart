import type { Country } from "../types";

export const ie: Country =
  {
    code: "ie",
    region: "Western Europe",
    singlePermitDirective: false,
    name: "Ireland",
    flag: "🇮🇪",
    languages: ["English", "Irish"],
    permitName: "Employment permit (General Employment Permit) followed by an Irish Residence Permit",
    localName: "General Employment Permit",
    tagline: "Two separate steps: an employment permit from the Department of Enterprise, then a visa where required and registration with Immigration Service Delivery.",
    overview:
      "Ireland does not take part in the Single Permit Directive, so work and residence are handled by two different bodies. The Department of Enterprise, Tourism and Employment (DETE) issues employment permits through its online portal; the General Employment Permit is the standard route for any occupation not on the Ineligible Occupations List, and the Critical Skills Employment Permit covers shortage occupations. The permit is not a residence permission: visa-required nationals then apply for a long-stay D visa, and everyone staying more than 90 days registers with Immigration Service Delivery (ISD) of the Department of Justice, Home Affairs and Migration to receive the Irish Residence Permit card.",
    whoFilesShort: "Employer or worker",
    whoApplies:
      "Either the employer or the worker applies for the employment permit through Employment Permits Online; the permit is issued to the worker with a certified copy to the employer. The worker then applies for the D visa at the Irish embassy where required and registers in person with ISD after arrival.",
    authorities: [
      "Department of Enterprise, Tourism and Employment (DETE), Employment Permits Section: Employment Permits Online, decisions and reviews",
      "Immigration Service Delivery (ISD), Department of Justice, Home Affairs and Migration: visas, immigration permission and registration for the Irish Residence Permit",
      "Garda National Immigration Bureau (GNIB): registration at Garda stations outside Dublin",
      "Department of Social Protection, JobsIreland/EURES: advertisement of the vacancy for the Labour Market Needs Test",
      "Irish embassies and consulates: long-stay D visa applications",
    ],
    legalBasis: [
      "Employment Permits Act 2024, in force since 2 September 2024 (Commencement Order S.I. No. 443 of 2024)",
      "Employment Permits Regulations 2024 (S.I. No. 444 of 2024), setting permit types, salary thresholds, the Critical Skills and Ineligible Occupations Lists and the Labour Market Needs Test",
      "Protocol No 21 on the position of Ireland annexed to the EU Treaties: Ireland has not opted into Directive 2011/98/EU or Directive (EU) 2024/1233",
    ],
    decisionPeriod:
      "No statutory decision period and no EU 90-day deadline. DETE processes applications strictly in date order of receipt of a complete application and fee, and publishes the date of the applications currently being processed; in November 2026 this was about 4 weeks behind receipt for General and Critical Skills permits, with reviews taking much longer. Applications must be lodged at least 12 weeks before the proposed start date. Registration for the Irish Residence Permit must take place within 90 days of arrival.",
    validity:
      "A General Employment Permit is first issued for up to 24 months and renewable for up to a further 3 years. After 5 consecutive years on employment permits the worker may obtain a Stamp 4 permission from the Department of Justice and work without a permit. The permit is tied to the employer and occupation, and first-time holders are expected to stay 9 months before moving to a new employer under a new permit.",
    labourMarketTest:
      "Yes, for the General Employment Permit: the vacancy must be advertised for at least 28 consecutive days on JobsIreland/EURES and on one further online platform, stating the job, employer, minimum remuneration, location and hours, and the application must follow within 90 days of first publication. The test is waived for Critical Skills occupations, for remuneration above a higher threshold set in the Regulations, for roles recommended by Enterprise Ireland or IDA Ireland, for certain carers and for workers made redundant from a permit. At least 50 percent of the employer's workforce must be EEA nationals, with waivers for supported start-ups and sole-employee cases.",
    steps: [
      {
        title: "Check eligibility and set up the employer account",
        actor: "Employer",
        detail:
          "The employer confirms that the occupation is not on the Ineligible Occupations List, that the salary meets the threshold in the Regulations and that the 50:50 EEA workforce rule is met. The Employment Permits Online account requires Revenue registration and the CRO number.",
      },
      {
        title: "Run the Labour Market Needs Test",
        actor: "Employer",
        detail:
          "Unless waived, the vacancy is posted on JobsIreland/EURES and a second online platform for 28 consecutive days without amendment. The JobsIreland reference number goes into the application.",
      },
      {
        title: "Sign the contract and apply online",
        actor: "Both",
        detail:
          "The contract must be signed by both parties. The employer or the worker submits the application on Employment Permits Online at least 12 weeks before the start date, attaching the job description, qualifications, immigration history and LMNT evidence, and pays the fee. Incomplete applications left in the system are deleted.",
      },
      {
        title: "Processing in date order",
        actor: "Authority",
        detail:
          "DETE queues the application by date received, may request further information to be returned within 28 days, then grants or refuses. A refusal can be sent for review within 28 days to a more senior official.",
      },
      {
        title: "Permit issued and D visa where required",
        actor: "Employee",
        detail:
          "The permit is issued to the worker and a copy to the employer. Visa-required nationals apply online for a long-stay employment D visa through the Irish embassy, attaching the permit.",
      },
      {
        title: "Arrival and registration for the Irish Residence Permit",
        actor: "Employee",
        detail:
          "At the border the immigration officer grants permission to enter and instructs the worker to register. Within 90 days the worker registers with ISD in Dublin or at the local Garda registration office, pays the registration fee and receives the Irish Residence Permit card by post.",
      },
      {
        title: "Renewal and changes",
        actor: "Both",
        detail:
          "Renewal can be applied for up to 4 months before expiry. The employer must notify DETE of redundancy, departure or changes to terms within the set deadlines, and the immigration permission is renewed separately with ISD before it expires.",
      },
    ],
    employerDocs: [
      { label: "Employer account on Employment Permits Online with Revenue registration and Companies Registration Office number" },
      { label: "Contract of employment signed by both parties" },
      { label: "Full job description with duties, hours, duration, location and remuneration" },
      { label: "Labour Market Needs Test evidence: JobsIreland/EURES reference and copy of the second online advertisement, or the basis for a waiver" },
      { label: "Workforce details showing compliance with the 50:50 EEA rule, or Enterprise Ireland/IDA Ireland support letter for start-ups" },
      { label: "Permit checklist completed before submission" },
    ],
    employeeDocs: [
      { label: "Valid passport" },
      { label: "Evidence of qualifications, skills and experience required for the role" },
      { label: "Details of immigration history and current Irish permission if already in the State" },
      { label: "Copy of the signed employment contract" },
      { label: "Long-stay D visa application with the employment permit, for visa-required nationals" },
      { label: "Original employment permit and passport for registration with ISD" },
      { label: "Payment of the registration fee set by ISD when collecting the Irish Residence Permit", note: "Confirm the current fee on the ISD website" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "Not available: Ireland does not take part in the EU Blue Card Directive. The Critical Skills Employment Permit is the national equivalent." },
      { name: "Critical Skills Employment Permit", summary: "Occupations on the Critical Skills Occupations List or any eligible job above the higher remuneration threshold, with a contract of at least 2 years. No Labour Market Needs Test, immediate family reunification and a Stamp 4 permission after the permit expires." },
      { name: "Intra-Company Transfer Employment Permit", summary: "Senior management, key personnel and trainees transferred from a foreign branch to the Irish entity, with its own processing queue." },
      { name: "Atypical Working Scheme", summary: "Short-term permission from ISD for work of up to 90 days that falls outside the employment permit system." },
    ],
    watchOuts: [
      "The 12-week lead time is a hard rule and the queue runs strictly in date order; an incomplete application goes to the back of the queue or is deleted from the portal.",
      "The JobsIreland advertisement must run 28 days without amendment and the application must be filed within 90 days of first publication, otherwise the Labour Market Needs Test has to be repeated.",
      "An employment permit is not a residence permission. The worker still needs a D visa where required and must register with ISD within 90 days; late registration can affect later long-term residence or citizenship applications.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Ireland", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-ireland_en" },
      { label: "DETE: General Employment Permit", url: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/general-employment-permit/" },
      { label: "DETE: current application processing dates", url: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/current-application-processing-dates/" },
      { label: "Immigration Service Delivery: how to register your immigration permission for the first time", url: "https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-register-your-immigration-permission-for-the-first-time/" },
    ],
  };
