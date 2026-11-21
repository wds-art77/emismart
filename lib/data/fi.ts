import type { Country } from "../types";

export const fi: Country =
  {
    code: "fi",
    region: "Nordics",
    singlePermitDirective: true,
    name: "Finland",
    flag: "🇫🇮",
    languages: ["Finnish", "Swedish"],
    permitName: "Residence permit for an employed person (TTOL)",
    localName: "Työntekijän oleskelulupa",
    tagline: "One application in Enter Finland, assessed in full by the Finnish Immigration Service since the TE Office partial decision was abolished in 2025.",
    overview:
      "The residence permit for an employed person is the Finnish single permit for non-EU workers who are not covered by a job-specific permit such as the specialist permit, the EU Blue Card or the seasonal work permit. The worker applies online in the Enter Finland service and the employer attaches the terms of employment through Enter Finland for Employers. Since 1 January 2025 the Finnish Immigration Service (Migri) carries out the whole assessment, including the labour availability test that the Employment and Economic Development Offices (TE Offices) used to make as a separate partial decision. The permit is granted for one or more professional fields rather than for one employer.",
    whoFilesShort: "Worker, employer attaches terms",
    whoApplies:
      "The worker applies, normally from abroad through Enter Finland, and then proves identity and gives fingerprints at a Finnish mission. The employer cannot apply on the worker's behalf but must enter the terms of employment in Enter Finland for Employers, or on the paper form TEM 0.54, before processing can start.",
    authorities: [
      "Finnish Immigration Service (Maahanmuuttovirasto, Migri): decision on residence and work, including the labour availability assessment",
      "Ministry of Economic Affairs and Employment and the regional Economic Development Centres (elinvoimakeskukset): national shortage sectors and regional work permit policies",
      "Finnish embassies and consulates: identity check, fingerprints and D visa",
      "Digital and Population Data Services Agency (local register authority): registration of residence after arrival",
    ],
    legalBasis: [
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Ulkomaalaislaki (Aliens Act 301/2004), chapter 5 on work-based residence permits",
      "Government decree setting the euro-denominated salary threshold for the employed person's permit, as provided for in the Aliens Act",
    ],
    decisionPeriod:
      "The Aliens Act requires a decision on a residence permit application within 4 months of submission, extendable by up to 3 months where documents were missing or for another special reason. The recast directive requires a decision within 90 days of a complete application. Migri publishes current average processing times, which have been well below the statutory maximum; the clock only starts once identity has been proven and the employer's terms of employment have been attached.",
    validity:
      "The first permit is normally a temporary (B) permit for one year, tied to one or more professional fields. Extensions follow if the conditions are still met; after two years of continuous residence a continuous (A) permit can be granted for up to four years. Confirm the current validity rules on the Migri page.",
    labourMarketTest:
      "Yes, as a labour availability assessment made by Migri. If the occupation is listed in the national shortage sectors or the regional work permit policy of the Economic Development Centre, no assessment is needed. Otherwise the employer must show that it tried to recruit in Finland and the EU/EEA, normally by posting the job on Job Market Finland (Työmarkkinatori) for at least two weeks, and submit an availability report explaining why applicants were unsuitable. Permits are usually refused in fields where the Labour Force Barometer shows an oversupply. Pay must comply with the collective agreement and reach the salary threshold set by government decree.",
    steps: [
      {
        title: "Check the route and the work permit policy",
        actor: "Employer",
        detail:
          "Confirm that the job is not covered by a job-specific permit (specialist, EU Blue Card, researcher, seasonal work). Check whether the occupation is in the national shortage list or the regional work permit policy, which removes the availability assessment.",
      },
      {
        title: "Recruit on the EU/EEA market if an assessment is needed",
        actor: "Employer",
        detail:
          "Post the vacancy on Job Market Finland for at least two weeks and keep evidence of applicants and why they were unsuitable. This must be completed before the worker files the application.",
      },
      {
        title: "Sign the contract and submit the terms of employment",
        actor: "Employer",
        detail:
          "Enter the terms of employment in Enter Finland for Employers, or complete form TEM 0.54 for a paper application, and attach the employer certificates. Processing cannot begin without this information.",
      },
      {
        title: "File the application and prove identity",
        actor: "Employee",
        detail:
          "Apply in Enter Finland, pay the fee and, within three months, visit a Finnish embassy or consulate (or an external service provider) to prove identity and give fingerprints. A paper application can instead be lodged at the mission.",
      },
      {
        title: "Assessment and decision by Migri",
        actor: "Authority",
        detail:
          "Migri checks labour availability, the terms of employment and the salary threshold, the employer's compliance with its statutory obligations and the general grounds for refusal, then issues one decision naming the professional field or fields covered.",
      },
      {
        title: "Entry, residence permit card and registration",
        actor: "Employee",
        detail:
          "After a positive decision the worker can use a D visa, valid 100 days, to travel before the card arrives. On arrival the worker registers residence with the local register authority if staying more than a year. The employer notifies Migri of the start of employment and of any early termination.",
      },
    ],
    employerDocs: [
      { label: "Terms of employment entered in Enter Finland for Employers or on form TEM 0.54", note: "Required before processing starts." },
      { label: "Availability report with evidence of the Job Market Finland posting and the recruitment outcome", note: "Only where the occupation is outside the shortage list or regional policy." },
      { label: "Certificate of taxes paid or tax debt certificate, no more than three months old" },
      { label: "Insurance certificates for pension (TyEL), accident, group life and unemployment insurance, no more than three months old" },
      { label: "Report on the number of employees and the share of full-time and part-time staff" },
      { label: "Signed employment contract showing pay in line with the collective agreement and the salary threshold" },
    ],
    employeeDocs: [
      { label: "Valid passport, presented at the mission, with colour copies of the data page and all pages with entries" },
      { label: "Passport photograph meeting Finnish police guidelines, or a photo retrieval code" },
      { label: "Proof of legal stay in the country where the application is lodged" },
      { label: "Employment contract or binding offer" },
      { label: "Diplomas or certificates where the job requires a qualification or right to practise" },
      { label: "Salmonella certificate for food handling jobs; tuberculosis certificate for work with children below school age" },
      { label: "Proof of fee payment" },
    ],
    alternativeRoutes: [
      { name: "Residence permit for a specialist", summary: "For higher-education graduates and IT specialists in expert roles. No availability assessment, first permit for two years, and a fast-track service with a two-week processing target." },
      { name: "EU Blue Card", summary: "Highly qualified workers with a higher-education degree and a salary above the Blue Card threshold; EU mobility advantages." },
      { name: "Seasonal work", summary: "Seasonal work visa for up to three months or a seasonal work residence permit for up to nine months; availability assessment applies to permits of six to nine months." },
      { name: "Permit for graduates and researchers to look for work", summary: "Holders of a Finnish degree or research permit may obtain a job-seeking permit of up to two years, applied for within five years of the previous permit." },
    ],
    watchOuts: [
      "The application is not processed until the worker has proven identity at a Finnish mission and the employer has attached the terms of employment; both steps are often delayed.",
      "The permit is limited to the professional fields named in the decision. Work in another field requires a new permit application; the availability assessment is waived only if the worker has already worked at least nine months on the permit.",
      "Applications in fields with an oversupply of labour in the regional work permit policy are usually refused even with a job offer, and the employer must have met its tax and insurance obligations.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Finland", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-finland_en" },
      { label: "Job Market Finland (KEHA Centre): international recruitment process", url: "https://tyomarkkinatori.fi/en/employers-and-entrepreneurs/information-on-being-an-employer-or-entrepreneur/international-recruitment/international-recruitment-process" },
      { label: "InfoFinland: work in Finland (non-EU citizens)", url: "https://infofinland.fi/moving-to-finland/non-eu-citizens/work-in-finland" },
      { label: "Finlex: Ulkomaalaislaki 301/2004 (consolidated)", url: "https://www.finlex.fi/fi/lainsaadanto/2004/301" },
    ],
  };
