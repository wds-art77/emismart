import type { Country } from "../types";

export const cy: Country =
  {
    code: "cy",
    region: "Southern Europe",
    singlePermitDirective: true,
    name: "Cyprus",
    flag: "🇨🇾",
    languages: ["Greek", "Turkish"],
    permitName: "Temporary residence and employment permit",
    localName: "Άδεια προσωρινής διαμονής και απασχόλησης",
    tagline: "Department of Labour approval and a stamped contract first, then an entry permit and residence and employment permit from the Civil Registry and Migration Department.",
    overview:
      "Cyprus runs a two-stage system. The Department of Labour of the Ministry of Labour and Social Insurance checks, through its District Labour Offices, that no Cypriot or EU worker is available and that the job falls within the sectors and criteria approved by the Council of Ministers. Once the Department stamps the employment contract, the employer applies to the Civil Registry and Migration Department (CRMD) of the Ministry of Interior for an entry permit. After arrival the worker is registered and receives a temporary residence and employment permit, which is the single permit for the purposes of the directive.",
    whoFilesShort: "Employer",
    whoApplies:
      "The employer starts the process by posting the vacancy with the District Labour Office and then applies for the Department of Labour approval. The employer also lodges the entry and residence permit application with the CRMD or through the District Aliens and Immigration Units of the Police. The worker completes the registration and biometrics in Cyprus after arrival.",
    authorities: [
      "Department of Labour, Ministry of Labour and Social Insurance, and its District Labour Offices: labour market check, approval and stamping of the contract",
      "Civil Registry and Migration Department (CRMD), Ministry of Interior: entry permit and temporary residence and employment permit",
      "District Aliens and Immigration Units of the Cyprus Police: receipt of applications and immigration control",
      "Cypriot diplomatic missions: visas for nationals who need one",
      "Administrative Court: appeals against CRMD decisions",
    ],
    legalBasis: [
      "Aliens and Immigration Law (Cap. 105) and the Aliens and Immigration Regulations of 1972 (Reg. 242/72), as amended",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Criteria for the employment of third-country nationals agreed between the social partners and approved by the Council of Ministers (decision of 6 December 1991, as updated by later Council of Ministers decisions)",
    ],
    decisionPeriod:
      "No statutory decision period for the residence and employment permit is published on the official pages opened for this guide; the Department of Labour stage and the CRMD stage each take their own time and practitioners report several months in total. The recast directive requires a decision within 90 days of a complete application. Confirm current processing times with the CRMD.",
    validity:
      "The permit is issued for the period of the stamped contract and is tied to one employer. According to the EU Immigration Portal the total stay for employment purposes is capped at 4 years, with no cap for farming and agriculture, domestic work, specialty cooks and chefs, priests and tourist representatives. The worker may change employer up to 3 times within the same sector and occupation, with a release from the former employer and Department of Labour approval; after that the permit is not renewed unless the worker leaves Cyprus for at least 2 years.",
    labourMarketTest:
      "Yes. The basic precondition is the absence of prospects to meet the employer's needs from the local labour force (Cypriot or EU citizens), established by an investigation of the Department of Labour after the vacancy is registered with the District Labour Office. Approval is also limited to the sectors and occupations where employment of third-country nationals is permitted under the current labour migration policy, and the terms of employment must be the same as for Cypriots. Some categories, such as staff of companies of foreign interest registered with the Business Facilitation Unit and EU Blue Card holders, follow separate rules.",
    steps: [
      {
        title: "Register the vacancy with the District Labour Office",
        actor: "Employer",
        detail:
          "The employer files the vacancy with the District Labour Office of the Department of Labour. The office checks the criteria and tries to fill the post from the local and EU labour market.",
      },
      {
        title: "Apply for Department of Labour approval",
        actor: "Employer",
        detail:
          "If the vacancy remains unfilled, the employer applies to employ a named non-EU national. The Department assesses the request against the approved criteria and the permitted sectors.",
      },
      {
        title: "Contract signed and stamped",
        actor: "Both",
        detail:
          "After a positive answer the employment contract on the prescribed model is signed by employer and worker and stamped by the Department of Labour. The original and stamped copies are needed for the migration stage.",
      },
      {
        title: "Entry permit application to the CRMD",
        actor: "Employer",
        detail:
          "The employer applies for the entry and residence permit with the CRMD or through the District Aliens and Immigration Units of the Police, attaching the stamped contract, a bank guarantee covering possible repatriation costs, the worker's passport, criminal record certificate and medical certificates.",
      },
      {
        title: "Entry permit and travel",
        actor: "Authority",
        detail:
          "The CRMD issues the entry permit. Nationals who need a visa obtain it from a Cypriot diplomatic mission before travelling.",
      },
      {
        title: "Registration and permit issue after arrival",
        actor: "Employee",
        detail:
          "After arrival the worker attends the CRMD or the district immigration unit to be registered in the Aliens Register, complete medical examinations and biometrics, and receive the temporary residence and employment permit.",
      },
    ],
    employerDocs: [
      { label: "Vacancy registration and application to the District Labour Office" },
      { label: "Employment contract on the Department of Labour model, signed and stamped, with stamped copies" },
      { label: "Department of Labour approval allowing the employer to employ third-country nationals" },
      { label: "Original bank guarantee to cover possible repatriation costs", note: "The CRMD checklists set the required duration of the guarantee" },
      { label: "Proof of suitable accommodation provided or arranged for the worker" },
      { label: "Employer's liability insurance and declaration of the worker's mailing address, where the CRMD form requires them" },
    ],
    employeeDocs: [
      { label: "Valid passport" },
      { label: "Certificate of criminal record from the country of origin or residence" },
      { label: "Medical examination certificates, including blood tests and chest X-ray, as listed on the CRMD checklist" },
      { label: "Health insurance covering the stay" },
      { label: "Passport photographs" },
      { label: "Qualifications or experience evidence where the Department of Labour criteria require them" },
      { label: "Official translations and certification of all foreign documents", note: "The CRMD requires documents to be officially translated and duly certified" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "Introduced by a 2024 amendment to the Aliens and Immigration Law, with applications accepted since 2025 for highly qualified workers in specified sectors with a salary above the national threshold. The Department of Labour checks the contract before the CRMD application. Confirm the current scope on the CRMD page." },
      { name: "Companies of foreign interest (Business Facilitation Unit)", summary: "Eligible foreign-owned companies registered with the Business Facilitation Unit can employ third-country executives and key staff above set salary levels through the CRMD without the standard Department of Labour procedure. Permits are issued for up to 2 years and are renewable." },
      { name: "Intra-corporate transfer", summary: "Managers, specialists and trainees transferred within a group under the ICT rules, handled by the CRMD central offices." },
      { name: "Digital nomad visa", summary: "A capped scheme for remote workers employed abroad who do not work for Cypriot employers. Confirm current availability on the CRMD page." },
    ],
    watchOuts: [
      "Nothing moves until the Department of Labour has approved the request and stamped the contract. Vacancies outside the permitted sectors or occupations are refused at this stage.",
      "The entry permit file needs a bank guarantee for repatriation, medical certificates and officially translated, certified documents. Missing or uncertified translations are a common reason for delay.",
      "The permit is tied to the employer and sector. Employer changes are limited to 3 and each needs a release agreement and Department of Labour approval; after the third change the permit is not renewed.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Cyprus", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-cyprus_en" },
      { label: "Department of Labour: employment of non-EU citizens, general information", url: "https://www.mlsi.gov.cy/mlsi/dl/dl.nsf/page5a_en/page5a_en" },
      { label: "Department of Labour: criteria for employment", url: "https://www.mlsi.gov.cy/mlsi/dl/dl.nsf/page5b_en/page5b_en?OpenDocument" },
      { label: "EU Immigration Portal: who does what, Cyprus", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/who-does-what/cyprus_en" },
    ],
  };
