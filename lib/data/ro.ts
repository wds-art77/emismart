import type { Country } from "../types";

export const ro: Country =
  {
    code: "ro",
    region: "Central and Eastern Europe",
    singlePermitDirective: true,
    name: "Romania",
    flag: "🇷🇴",
    languages: ["Romanian"],
    permitName: "Single permit (permis unic) after a D/AM long-stay visa",
    localName: "Cerere unică, viză de lungă ședere pentru angajare în muncă (D/AM1, D/AM2) și permis unic",
    tagline: "Employer-led single application on the WorkinRomania platform, a D/AM visa from the consulate, then the permis unic from IGI after arrival.",
    overview:
      "Romania reorganised labour immigration in 2026. Emergency Ordinance 32/2026, in force since 27 April 2026 and applied in full since 8 August 2026, abolished the separate work permit (aviz de angajare) and replaced it with a single application (cerere unică) filed on the government platform WorkinRomania.gov.ro. A positive decision leads to a long-stay visa for employment of type D/AM1 (highly qualified workers and other special categories) or D/AM2 (permanent, seasonal and cross-border workers in shortage occupations). The visa also certifies the right to work. After entry the worker obtains the permis unic, the single residence and work permit issued by the General Inspectorate for Immigration (IGI). The IGI website still describes the former aviz de angajare; the transitional rules allowed visas to be requested on old permits for 180 days after their issue.",
    whoFilesShort: "Employer, then worker",
    whoApplies:
      "The employer, once registered on the platform, files the single application for D/AM1 workers. For D/AM2 workers the application is filed by an authorised placement agency on the employer's behalf, or directly by an employer that has obtained authorisation. The worker does not file the single application but must attend the Romanian embassy or consulate in person for the visa and later applies to the IGI territorial unit for the permis unic.",
    authorities: [
      "Inspectoratul General pentru Imigrări (IGI): checks admissibility of the single application, decides on the right of residence for work and issues the permis unic",
      "Agenția Națională pentru Ocuparea Forței de Muncă (ANOFM): registers and authorises employers and placement agencies, draws up the shortage occupations list",
      "Ministerul Afacerilor Externe and Romanian diplomatic missions: receive the worker at the consulate and issue the D/AM visa through the eViza system",
      "Ministerul Educației și Cercetării (CNRED): recognition of qualifications for highly qualified workers",
      "Inspecția Muncii: labour inspection and registration of contracts in REGES-ONLINE",
    ],
    legalBasis: [
      "Ordonanța de urgență nr. 32/2026 privind accesul străinilor pe piața muncii din România",
      "Ordonanța de urgență nr. 194/2002 privind regimul străinilor în România, republicată, as amended by OUG 32/2026 (art. 27^1, 27^2, 44 and 56)",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Hotărârea Guvernului nr. 295/2025 privind Registrul general de evidență a salariaților (REGES-ONLINE)",
    ],
    decisionPeriod:
      "Two statutory stages under OUG 194/2002 as amended. IGI and, where relevant, the Ministry of Education check the conditions within 30 days of the single application being filed on the platform. The single application is then decided within at most 30 days from the worker's appearance at the Romanian embassy or consulate, with priority treatment for highly qualified workers. After entry, the application for the permis unic is decided within 30 days, extendable by 15 days for additional checks and, for work permits in complex cases, by a further 30 days with written notice. Employer registration on the platform is decided by ANOFM within 30 working days and authorisation within 15 working days. The recast directive requires a decision on the single permit within 90 days of a complete application.",
    validity:
      "The right of residence for work is extended for the duration of the employment contract, up to 2 years, and the permis unic is issued for that period. Highly qualified workers receive the contract duration plus 3 months, up to 3 years. Seasonal workers receive the contract duration plus 5 days within a maximum of 180 days in any 365-day period. The D/AM visa itself is valid for 90 days for entry.",
    labourMarketTest:
      "Yes, in two forms. For D/AM2 workers the occupation must appear on the shortage occupations list (Lista ocupațiilor deficitare), approved by order of the Minister of Labour and updated every six months, the vacancy must be declared to ANOFM and the visa is issued only within the annual quota (contingent) set by Government decision. For highly qualified D/AM1 workers the employer must show that it tried to fill the post with Romanian, EU, EEA or Swiss citizens or long-term residents and must attach a certificate on available labour from the county employment agency issued no more than 90 days before filing. Nationals of Moldova, Ukraine and Serbia on full-time contracts and the other D/AM1 categories do not go through a market test.",
    steps: [
      {
        title: "Register the employer on WorkinRomania.gov.ro",
        actor: "Employer",
        detail:
          "The employer creates an account on the platform and requests registration in the register of employers of foreign workers (RAS). ANOFM checks tax debts, past sanctions for undeclared work and criminal convictions and decides within 30 working days. Employers wishing to recruit D/AM2 workers without an agency need a separate authorisation with a financial guarantee per worker.",
      },
      {
        title: "Upload the firm job offer and choose the route",
        actor: "Employer",
        detail:
          "The employer uploads a firm job offer stating occupation, duties, salary, working time, contract duration and place of work. Highly qualified workers and other special categories follow the D/AM1 route. Permanent, seasonal and cross-border workers follow the D/AM2 route, which requires an occupation on the shortage list and, unless the employer is authorised, a service contract with an authorised placement agency and a tripartite placement contract with the worker.",
      },
      {
        title: "Sign the employment contract and file the single application",
        actor: "Employer",
        detail:
          "The individual employment contract, in Romanian and in a language the worker understands, is registered in REGES-ONLINE. The employer (D/AM1) or the placement agency or authorised employer (D/AM2) completes the single application on the platform and uploads the worker's documents. IGI, the Ministry of Education and the Ministry of Foreign Affairs check the conditions through the platform.",
      },
      {
        title: "Visa interview and D/AM visa",
        actor: "Employee",
        detail:
          "The worker appears in person at the Romanian embassy or consulate with the original passport and the supporting documents, and biometric data are collected. The single application is decided within 30 days of that appearance. A positive decision leads to the D/AM1 or D/AM2 visa, valid for 90 days for entry, which also certifies the right to work.",
      },
      {
        title: "Entry and start of work",
        actor: "Both",
        detail:
          "The worker enters Romania and starts work under the registered contract. Authorised employers must arrange transport from the point of entry and inform the worker about conditions at least 10 days before arrival. The employer reports to IGI any termination or change of the contract within the legal periods.",
      },
      {
        title: "Apply for the permis unic at IGI",
        actor: "Employee",
        detail:
          "Before the visa expires, the worker books an appointment at the IGI territorial unit of the county of residence and files the application for extension of the right of residence for work, with passport, visa, contract, proof of housing, health insurance and proof of fee payment. IGI decides within 30 days, extendable in complex cases, and issues the permis unic, which also serves as the identity document.",
      },
      {
        title: "Renewal or change of employer",
        actor: "Both",
        detail:
          "Renewal is requested before the permit expires on the basis of a continuing full-time contract. A change of employer by resignation is possible only after at least 6 months of registered work with the first employer, with a new single application for the extension filed by the new employer or agency.",
      },
    ],
    employerDocs: [
      { label: "Registration on WorkinRomania.gov.ro in the register of employers of foreign workers (RAS), plus authorisation and financial guarantee where the employer recruits D/AM2 workers directly" },
      { label: "Firm job offer uploaded to the platform, with occupation, duties, salary, working time, contract duration and place of work" },
      { label: "Individual employment contract registered in REGES-ONLINE, full time, in Romanian and in a language the worker understands, with a salary at least at the national minimum gross wage (at least the average gross earnings for highly qualified workers)" },
      { label: "For highly qualified workers: certificate on available labour from the county employment agency, issued no more than 90 days before filing, and the worker's CV with recognition of studies" },
      { label: "For D/AM2 workers: service contract with an authorised placement agency, tripartite placement contract, organisational chart with filled and vacant posts, and proof that the occupation is on the shortage list" },
      { label: "Notarised declaration on accommodation where the employer provides housing, with rent not exceeding the legal share of net salary" },
    ],
    employeeDocs: [
      { label: "Valid passport, full copy for the platform and the original at the consulate" },
      { label: "Criminal record certificate from the country of origin or residence, translated into Romanian, English or French and legalised" },
      { label: "Travel medical insurance covering the whole visa period, valid across the Member States, with the minimum cover set by law" },
      { label: "Proof of means of subsistence at the level of the national minimum gross wage for 90 days, where required for the category" },
      { label: "CV and diplomas or certificates of qualification, with recognition by the Ministry of Education for highly qualified workers and regulated professions" },
      { label: "Authorisation document required by law for the occupation, where applicable" },
      { label: "For the permis unic: employment contract, proof of legal housing in Romania, proof of health insurance and proof of fee payment" },
      { label: "Passport photographs and biometric data collected at the consulate and at IGI" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card (Cartea albastră a UE)", summary: "Highly qualified workers with a higher education degree or, for regulated professions, comparable experience, employed under a full-time contract of at least 6 months at a salary above the legal threshold. The route goes through the D/AM1 single application and the card is issued by IGI for the contract duration plus 3 months, up to 3 years. Blue Card holders from another Member State may move to Romania after 12 months and apply within one month of entry." },
      { name: "Posted and intra-corporate transferee workers (D/DT)", summary: "Secondments and intra-group transfers follow the long-stay visa for secondment (D/DT) and a residence permit for posting, with simplified rules for transfers from EU, EEA and Swiss entities on the basis of a valid residence permit issued by that state." },
      { name: "Nationals of Moldova, Ukraine and Serbia", summary: "Citizens of these three countries employed full time qualify for the D/AM1 route without a shortage occupation, placement agency or market test." },
      { name: "Working holiday visa (D/VM)", summary: "Available only to nationals of states with which Romania has a bilateral working holiday agreement." },
    ],
    watchOuts: [
      "Nothing can be filed until ANOFM has registered the employer on the platform, which may take up to 30 working days. D/AM2 recruitment also depends on the occupation being on the shortage list and on the annual quota not being exhausted.",
      "The 30-day decision period for the single application runs only from the worker's personal appearance at the consulate, so a late or missing consular appointment stalls the file. The permis unic must then be requested before the 90-day visa expires.",
      "The permit is tied to the employer. A change by resignation is allowed only after 6 months of registered work, and if the contract ends the right of residence lasts no longer than the unemployment benefit or 90 days without benefit.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Romania", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-romania_en" },
      { label: "WorkinRomania.gov.ro: visas and residence (vize și ședere)", url: "https://workinromania.gov.ro/workinro/default/vize-si-sedere" },
      { label: "IGI: text of OUG 32/2026 on access of foreigners to the labour market", url: "https://igi.mai.gov.ro/wp-content/uploads/2026/05/ORDONANTA-DE-URGENTA-nr.-32-din-23-aprilie-2026.pdf" },
      { label: "IGI: obtaining the work permit (aviz de angajare), former procedure", url: "https://igi.mai.gov.ro/obtinerea-avizului/" },
    ],
  };
