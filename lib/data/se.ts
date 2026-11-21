import type { Country } from "../types";

export const se: Country =
  {
    code: "se",
    region: "Nordics",
    singlePermitDirective: true,
    name: "Sweden",
    flag: "🇸🇪",
    languages: ["Swedish"],
    permitName: "Work permit (with residence permit)",
    localName: "Arbetstillstånd",
    tagline: "The employer starts the application online and consults the union; the worker completes it and Migrationsverket decides on work and residence together.",
    overview:
      "A non-EU national who will work in Sweden for more than 3 months needs a work permit, which is granted together with a residence permit as one decision by the Swedish Migration Agency (Migrationsverket). There is no separate labour market test, but the vacancy must have been advertised in Sweden and the EU, the terms must match Swedish collective agreements or industry practice, the relevant trade union must have had the chance to comment, and the salary must reach a level set as a share of the Swedish median salary. The procedure is fully digital: the employer opens the case in the e-service, the worker finishes it from abroad and presents the passport at an embassy or through a digital check.",
    whoFilesShort: "Employer starts, worker completes",
    whoApplies:
      "The employer initiates the application in Migrationsverket's e-service by entering the job details and sending them to the trade union for comment. The worker then receives a link, completes the personal part, attaches documents and pays the fee. First applications are normally made from outside Sweden; applying from inside Sweden is only possible for specific groups such as former students, certain visiting job applicants and holders changing employer.",
    authorities: [
      "Migrationsverket (Swedish Migration Agency): decision on the work and residence permit, residence permit card",
      "Trade union for the sector: statement on the terms of employment before the application is completed",
      "Swedish embassies and consulates-general: passport presentation, interviews, biometrics and card collection",
      "Arbetsförmedlingen (Swedish Public Employment Service): Platsbanken, the usual channel for the 10-day vacancy advertisement",
      "Skatteverket (Swedish Tax Agency): population registration and personal identity number for stays of a year or more",
    ],
    legalBasis: [
      "Utlänningslagen (2005:716), chapter 6 on work permits, including the salary requirement in chapter 6 section 2",
      "Utlänningsförordningen (2006:97), including chapter 5 section 6 on occupations exempt from the full salary requirement and the rules on processing time",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
    ],
    decisionPeriod:
      "Swedish rules give Migrationsverket 4 months to decide on a work permit application; after 4 months (90 days for an EU Blue Card) the applicant may file a written request to conclude the case, once only. Published waiting times show that 75 percent of complete applications for highly qualified workers are decided within 1 month and other complete applications within 4 months, while incomplete files take up to 9 months. The recast directive requires a decision within 90 days of a complete application, so confirm on the official page whether the national period has been shortened.",
    validity:
      "Granted for the period of employment and at most 2 years at a time, never beyond the passport's validity. Extensions are possible, and a permanent residence permit can be applied for after 4 years of work permits within a 7-year period. The permit is valid only for the employer and profession stated in the application; a new employer or new duties require a new application, which can be filed from inside Sweden.",
    labourMarketTest:
      "No individual test, but three conditions replace it: the vacancy must have been advertised for at least 10 days so that residents of Sweden, the EU/EEA and Switzerland could apply; the terms must be at least equal to Swedish collective agreements or practice in the industry, and the union must have been given the chance to comment; and the monthly salary must reach the threshold set as 90 percent of the median salary published by Statistics Sweden (75 percent for occupations exempted by government regulation). The employer must also hold health, life, occupational injury and occupational pension insurance for the worker from the first day.",
    steps: [
      {
        title: "Advertise the vacancy",
        actor: "Employer",
        detail:
          "The post is advertised for at least 10 days, for example on Platsbanken, so that candidates in Sweden and the EU/EEA can apply. Migrationsverket may ask for evidence.",
      },
      {
        title: "Sign the employment contract and arrange insurance",
        actor: "Both",
        detail:
          "The contract must be signed by both parties before the application is made. The employer checks that salary and terms meet the threshold and the collective agreement, and takes out the required insurance policies.",
      },
      {
        title: "Open the case in the e-service and consult the union",
        actor: "Employer",
        detail:
          "The employer enters the worker's details and the terms of employment in the employer e-service, then sends them to the relevant trade union, which can comment. Complete information at this stage is what allows Migrationsverket to prioritise the case.",
      },
      {
        title: "Complete the application and pay the fee",
        actor: "Employee",
        detail:
          "The worker receives an email link, checks that the terms match the contract, attaches passport copies and any insurance documents, selects the embassy or consulate for the passport check and pays the fee by card. The application is only registered once this part is submitted.",
      },
      {
        title: "Passport check and biometrics",
        actor: "Employee",
        detail:
          "Most applicants verify their passport through Migrationsverket's app. Others are called to the embassy to present the passport, attend an interview or give fingerprints and a photo for the residence permit card if a visa is needed to enter Sweden.",
      },
      {
        title: "Examination and decision",
        actor: "Authority",
        detail:
          "Migrationsverket may refuse at once if the requirements are clearly not met, otherwise it examines the file, requests further information where needed and decides. The employer is notified by post and the worker by email or letter. The worker should not travel to Sweden before the decision.",
      },
      {
        title: "Residence permit card, arrival and registration",
        actor: "Employee",
        detail:
          "The card is collected at the embassy or sent to the Swedish address and must be shown with the passport on entry. Work must start within 4 months of the permit's first day. Stays of a year or more are registered with Skatteverket to obtain a personal identity number.",
      },
    ],
    employerDocs: [
      { label: "Employment details entered in the employer e-service: worker's identity, position, salary, working hours and duration" },
      { label: "Employment contract signed by both parties before the application" },
      { label: "Trade union statement, or evidence that the union was given the opportunity to comment" },
      { label: "Evidence that the vacancy was advertised for at least 10 days in Sweden and the EU/EEA" },
      { label: "Confirmation of health, life, occupational injury and occupational pension insurance in place from the start of employment" },
      { label: "For industries with higher requirements (cleaning, hospitality, construction, trade, agriculture, workshops, staffing): proof of the ability to pay the salary for at least 3 months", note: "Not required for municipal, regional or state employers" },
    ],
    employeeDocs: [
      { label: "Copies of the passport pages showing identity, validity and any permits" },
      { label: "Copy of the signed employment contract" },
      { label: "Comprehensive health insurance valid for the whole stay, for employment of one year or less" },
      { label: "Power of attorney (form 107011) where a representative files" },
      { label: "For accompanying family: proof of relationship, children's birth records and evidence of the maintenance requirement" },
      { label: "Certified translations into Swedish or English, with copies of the originals" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card (EU-blåkort)", summary: "Higher education of at least 180 credits or 5 years of relevant experience, a contract of at least 6 months and a salary of at least 1.25 times the average Swedish salary, set yearly by Migrationsverket. Valid between 9 months and 4 years." },
      { name: "Highly qualified worker fast lane", summary: "Managerial and graduate-level occupations (SSYK groups 1 to 3) outside the higher-requirement industries receive a decision within 30 days when the application is complete." },
      { name: "ICT permit", summary: "Managers, specialists and trainees transferred within a group, processed in the highly qualified category." },
      { name: "Application from inside Sweden after visiting an employer", summary: "A visitor who has come to meet an employer in an occupation with high demand may be able to apply without leaving Sweden. Conditions are strict; confirm on Migrationsverket's page for this group." },
    ],
    watchOuts: [
      "Incomplete files roughly double the waiting time. Everything the employer enters must match the signed contract, and the worker must attach all documents at once.",
      "The salary threshold is checked against the median salary in force at the time of decision, so an offer at the minimum can fall short if the threshold rises during processing.",
      "The permit is specific to the employer and the duties. Changing either without a new application, or failing to start work within 4 months, can lead to revocation.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Sweden", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-sweden_en" },
      { label: "Migrationsverket: work permit for employees (requirements, fees, waiting times)", url: "https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/employees.html" },
      { label: "Migrationsverket: step-by-step process for employers", url: "https://www.migrationsverket.se/en/lankade-moduler-engelska/processkartor/arbetsgivare/arbetsgivare-4-en.html" },
      { label: "Migrationsverket: important to know while waiting for a decision", url: "https://www.migrationsverket.se/en/you-are-waiting-for-a-decision/work/you-have-applied-for-the-first-time/flikar/important-to-know.html" },
    ],
  };
