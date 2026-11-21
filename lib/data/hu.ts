import type { Country } from "../types";

export const hu: Country =
  {
    code: "hu",
    region: "Central and Eastern Europe",
    singlePermitDirective: true,
    name: "Hungary",
    flag: "🇭🇺",
    languages: ["Hungarian"],
    permitName: "Residence permit for the purpose of employment (combined application procedure)",
    localName: "Foglalkoztatási célú tartózkodási engedély (összevont kérelmezési eljárás)",
    tagline: "One application through the consulate or Enter Hungary, with the county government office's opinion replacing a separate work permit.",
    overview:
      "Since Act XC of 2023 took effect in 2024, Hungary issues employment-based residence permits as combined permits: the National Directorate-General for Aliens Policing decides on residence and work together, with the county government office acting as employment authority. The standard route for a non-EU worker is the residence permit for the purpose of employment, limited by law to a total stay of 3 years. The Act also created the guest worker residence permit, restricted to registered preferential employers and qualified temporary-work agencies and to nationalities and occupations fixed by decree, and the Hungarian Card for graduates and other listed skilled categories. The permit is tied to one job with one employer, and an annual ceiling on employment and guest worker permits is set by the labour minister.",
    whoFilesShort: "Worker at consulate, or employer online",
    whoApplies:
      "The worker applies in person at the Hungarian consulate in the country of nationality or habitual residence. With the worker's written consent, the employer may instead file the application electronically through the Enter Hungary platform from its company portal; the Act allows employer filing only electronically, and the worker may still be called to appear in person. Workers who may enter visa-free and hold no residence permit can file in Hungary through Enter Hungary or at a regional directorate.",
    authorities: [
      "National Directorate-General for Aliens Policing (Országos Idegenrendészeti Főigazgatóság, OIF) and its regional directorates: decision and card issue",
      "County government office (kormányhivatal) as employment authority: binding opinion on the employment, including the labour market test where applicable",
      "Hungarian embassies and consulates: receipt of applications abroad and issue of the visa for collecting the residence permit",
      "Enter Hungary (enterhungary.gov.hu): electronic filing platform for applicants and employers",
    ],
    legalBasis: [
      "2023. évi XC. törvény a harmadik országbeli állampolgárok beutazására és tartózkodására vonatkozó általános szabályokról (Act XC of 2023), in particular §§ 28, 30 to 31, 36, 168, 173 and 242",
      "Government Decree 35/2024 (II. 29.) implementing Act XC of 2023, and the decrees listing eligible nationalities and excluded occupations",
      "Government Decree 445/2013 (XI. 28.) on activities exempt from the work permit requirement",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
    ],
    decisionPeriod:
      "The EU Immigration Portal gives a maximum of 90 days for the single permit. Act XC of 2023 sets a general deadline of 21 days for immigration procedures, extendable once by up to 21 days, with the employment authority's opinion due within 15 days; the clock does not run while documents are missing or the applicant is asked to appear. The recast directive requires a decision within 90 days of a complete application. Confirm the current period on the official page before relying on it.",
    validity:
      "Issued for a fixed term of up to 2 years, extendable by up to 1 year at a time, with a cap of 3 years from first issue. The guest worker permit has the same 2 plus 1 structure and 3-year cap. Extensions are filed in Hungary through Enter Hungary before expiry.",
    labourMarketTest:
      "Yes, unless an exemption applies: the county government office checks whether registered Hungarian or EEA jobseekers are available for the post and supports the employment on domestic employment-policy grounds. The employer may submit a workforce request to the state employment service before or during the procedure. The government office does not act as employment authority for guest worker permits, which rely instead on the employer's registered status and the occupation and nationality lists.",
    steps: [
      {
        title: "Check which permit type and nationality rules apply",
        actor: "Employer",
        detail:
          "The employer confirms that the worker's nationality is on the list set by government decree for employment permits, that the occupation is not excluded, whether the Hungarian Card or guest worker permit fits better, and that the employer meets any registration requirement.",
      },
      {
        title: "Sign a preliminary agreement or employment contract",
        actor: "Both",
        detail:
          "A preliminary agreement to establish an employment relationship, or a signed contract, is required for the application, together with any qualification the job demands.",
      },
      {
        title: "Submit a workforce request and file the application",
        actor: "Employer",
        detail:
          "The employer may lodge a workforce request with the state employment service. The application is then filed either by the worker at the consulate or by the employer through Enter Hungary with the worker's written consent, with the fee paid at filing.",
      },
      {
        title: "Employment authority opinion and decision",
        actor: "Authority",
        detail:
          "The regional directorate obtains the county government office's binding opinion on the employment, which includes the labour market test unless exempt, and decides on residence and work in one combined permit.",
      },
      {
        title: "Visa and entry",
        actor: "Employee",
        detail:
          "If the worker applied from abroad, the consulate issues a visa for collecting the residence permit. The worker enters Hungary and must obtain the permit at the regional directorate before the visa expires.",
      },
      {
        title: "Collect the residence permit and register the address",
        actor: "Employee",
        detail:
          "The worker gives biometric data where not already taken, collects the residence card from the regional directorate and reports the Hungarian accommodation. Health insurance follows automatically from registered employment.",
      },
    ],
    employerDocs: [
      { label: "Preliminary agreement to establish an employment relationship, or signed employment contract" },
      { label: "Written consent of the worker where the employer files through Enter Hungary" },
      { label: "Workforce request to the state employment service, where the labour market test applies" },
      { label: "Proof of registration as preferential employer or qualified temporary-work agency, for the guest worker permit" },
      { label: "Company registration and the employer's Enter Hungary company portal access" },
    ],
    employeeDocs: [
      { label: "Application form, on paper at the consulate or electronic in Enter Hungary" },
      { label: "Travel document valid at least 3 months beyond the intended stay" },
      { label: "Proof of adequate accommodation in Hungary" },
      { label: "Proof of sufficient means, normally the employment contract or preliminary agreement" },
      { label: "Certified qualification with translation where the job requires one" },
      { label: "Proof of health insurance, satisfied by registered employment" },
      { label: "Passport photograph and biometric data" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "For highly qualified workers with a higher-education degree and a salary above the national threshold; filed through the same channels, with EU mobility rights." },
      { name: "Hungarian Card (Magyar Kártya)", summary: "For holders of a higher-education qualification in employment or company management, and for listed categories such as professional athletes and performers. Valid up to 3 years and extendable by 3 years at a time, without the 3-year cap." },
      { name: "Guest worker residence permit (vendégmunkás-tartózkodási engedély)", summary: "For lower-skilled work with a registered preferential employer or qualified temporary-work agency, limited to nationalities and occupations set by decree. Up to 2 years plus 1 year, 3 years in total." },
      { name: "National Card (Nemzeti Kártya)", summary: "For nationals of countries listed by government decree who are employed or run a company in Hungary. Issued for up to 2 years and extendable by up to 3 years at a time." },
    ],
    watchOuts: [
      "Eligibility is list-based. Nationality lists and excluded-occupation lists change by decree, and the annual ceiling on employment and guest worker permits can close the route; check the current decrees before recruiting.",
      "The employment permit carries a hard 3-year ceiling. A worker who wants to stay longer must switch to the Hungarian Card, Blue Card or another status in time, and the permit type cannot be changed inside Hungary during its validity except as the Act allows.",
      "Job loss or a change of employer requires a new application within a short deadline (the EU Immigration Portal states 5 days), and extensions must be filed before expiry through Enter Hungary (the EU Immigration Portal states at least 30 days before).",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Hungary", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-hungary_en" },
      { label: "Nemzeti Jogszabálytár: Act XC of 2023 on the general rules for the entry and residence of third-country nationals", url: "https://njt.jog.gov.hu/jogszabaly/2023-90-00-00" },
      { label: "EU Immigration Portal: highly qualified worker, Hungary (Hungarian Card and EU Blue Card)", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/highly-qualified-worker-hungary_en" },
    ],
  };
