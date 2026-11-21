import type { Country } from "../types";

export const hr: Country =
  {
    code: "hr",
    region: "Central and Eastern Europe",
    singlePermitDirective: true,
    name: "Croatia",
    flag: "🇭🇷",
    languages: ["Croatian"],
    permitName: "Stay and work permit",
    localName: "Dozvola za boravak i rad",
    tagline: "Labour market test and opinion from the Croatian Employment Service, then a single permit decided by the police administration of the Ministry of the Interior.",
    overview:
      "The dozvola za boravak i rad is Croatia's single permit allowing a non-EU national to stay and work for a named employer in a named occupation. The Ministry of the Interior decides through its police administrations and police stations. For most jobs the employer must first ask the Croatian Employment Service (HZZ) to run a labour market test and then apply through the HZZ online platform, which forwards its opinion to the police. Occupations on the HZZ shortage list skip the test but still need the HZZ opinion, and categories listed in Article 110 of the Aliens Act, such as EU Blue Card holders, key personnel and intra-corporate transferees, need neither.",
    whoFilesShort: "Employer, via HZZ platform",
    whoApplies:
      "For permits that require a labour market test or an HZZ opinion, the employer applies through the HZZ web platform. For permits that need neither, the worker or the employer applies at the competent police administration or station, in person or by e-mail with the prescribed form. Workers who need a visa apply at a Croatian diplomatic mission; visa-exempt nationals may apply at the police in Croatia. Extensions are filed by the worker or employer at the police station for the worker's place of residence.",
    authorities: [
      "Ministry of the Interior (MUP), through police administrations and police stations: decision on the stay and work permit",
      "Croatian Employment Service (Hrvatski zavod za zapošljavanje, HZZ): labour market test, opinion and shortage occupation list",
      "Croatian diplomatic missions and consular offices: receipt of applications and long-stay visa D",
      "Administrative courts in Zagreb, Split, Rijeka and Osijek: administrative disputes against Ministry decisions",
    ],
    legalBasis: [
      "Zakon o strancima (Aliens Act, Official Gazette 133/20, with amendments including those of 2025 and 2026), in particular Articles 91 to 110",
      "Pravilnik o boravku državljana trećih zemalja u Republici Hrvatskoj (Ordinance on the stay of third-country nationals)",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Zakon o upravnim sporovima (Act on Administrative Disputes) for court review",
    ],
    decisionPeriod:
      "Under Article 91 of the Aliens Act the Ministry must decide no later than 90 days from the submission of a complete application, extendable by 30 days in complex cases (not for seasonal permits). Before that, HZZ must notify the employer of the labour market test result within 15 days of the request. The police station tells the applicant within 5 working days if the file needs completing. The 90-day period matches the recast directive.",
    validity:
      "Issued for the time needed to complete the job or the duration of the employment contract. The consolidated Aliens Act as amended in 2025 allows permits based on the HZZ opinion for up to 3 years; the EU Immigration Portal still describes a maximum of 1 year, so confirm the current maximum on the Ministry of the Interior page. Renewal must be requested at least 30 days before expiry, and the worker may stay and keep working for the same employer while a timely renewal is pending. Work is limited to the employer and occupation named in the permit.",
    labourMarketTest:
      "Yes, as a rule. The employer asks HZZ to run the test before applying; HZZ checks the unemployment register for Croatian and EEA candidates and reports within 15 days. If no suitable worker is found, the employer may apply within 90 days of the notice. HZZ also gives an opinion on the employer, which is granted only if the employer carries out a registered economic activity, has no tax or social contribution debt, has employed at least one Croatian, EEA or Swiss national full time on an indefinite contract in the last 6 months, and has no final convictions in labour and social insurance matters. No test is needed for shortage occupations on the list adopted by the HZZ Managing Board, for extensions with the same employer and occupation, for seasonal work of up to 90 days in agriculture, forestry, hospitality and tourism, or for Article 110 categories.",
    steps: [
      {
        title: "Request the labour market test from HZZ",
        actor: "Employer",
        detail:
          "Unless the occupation is on the HZZ shortage list or the worker falls under Article 110, the employer asks HZZ or its regional office to run the test. HZZ reports within 15 days whether suitable candidates are registered.",
      },
      {
        title: "Apply through the HZZ platform",
        actor: "Employer",
        detail:
          "Within 90 days of a negative test result the employer submits the stay and work permit application for the named worker on the HZZ web platform, with the contract and the worker's documents. HZZ checks the employer conditions and forwards its opinion to the competent police administration.",
      },
      {
        title: "Police administration decides",
        actor: "Authority",
        detail:
          "The police administration or station for the worker's intended residence examines the file, asks for any missing items within 5 working days, and must decide within 90 days of a complete application. The employer pays the administrative fee and collects the decision.",
      },
      {
        title: "Visa D and entry",
        actor: "Employee",
        detail:
          "Workers who need a visa apply for a long-stay visa D at a Croatian diplomatic mission on the basis of the approved permit. Visa-exempt nationals may enter and complete the formalities in Croatia.",
      },
      {
        title: "Register the address and give biometrics",
        actor: "Employee",
        detail:
          "The worker registers the address with the police within 3 days of entry and gives biometric data, within 30 days of the visa being issued where one was needed, to receive the biometric residence card.",
      },
      {
        title: "Start work and report changes",
        actor: "Both",
        detail:
          "Work may only start once the permit is issued and only for the named employer and occupation. Termination of employment must be reported to the police within 15 days. A change of employer or occupation requires a new HZZ test unless the occupation is on the shortage list.",
      },
    ],
    employerDocs: [
      { label: "HZZ labour market test request and the notice of the result" },
      { label: "Application for a stay and work permit (Obrazac 2a) or EU Blue Card (Obrazac 4a), completed and signed" },
      { label: "Employment contract signed by employer and worker", note: "Serves as proof of means of support for the first permit" },
      { label: "Evidence that the employer meets the HZZ opinion conditions: registered activity, no tax or contribution debt, at least one Croatian or EEA full-time employee on an indefinite contract in the last 6 months", note: "HZZ may ask for a tax clearance certificate" },
      { label: "Proof of payment of the administrative fee for the permit and the residence card" },
    ],
    employeeDocs: [
      { label: "Copy of a valid travel document" },
      { label: "Colour photograph (30 x 35 mm)" },
      { label: "Certificate of no criminal conviction from the home country or a country of residence of more than 1 year, legalised", note: "Required for the first permit only" },
      { label: "Proof of educational or vocational qualification" },
      { label: "Recognition of professional qualification for regulated professions" },
      { label: "Proof of health insurance", note: "Not needed with a first application under a contract with a Croatian employer; required at extension with the HZZO card or form" },
      { label: "Six payslips immediately before the application, for extensions" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "For highly qualified workers with higher education and a contract of at least 1 year paying at least 1.5 times the average gross annual salary. No labour market test or HZZ opinion; valid 2 years; the Act sets a 60-day decision period." },
      { name: "Article 110 categories (key personnel, intra-corporate transferees, service providers)", summary: "Stay and work permit without labour market test or HZZ opinion, applied for directly at the police administration. Includes owners of a company or craft with at least a 51 percent stake." },
      { name: "Temporary stay of digital nomads", summary: "For remote workers employed by or running a company not registered in Croatia and not serving Croatian employers. Granted for up to 18 months with a monthly means threshold of 2.5 average net salaries; not a work permit." },
      { name: "Work registration certificate", summary: "Potvrda o prijavi rada for short assignments of up to 90 days (or 30 days per calendar year for some categories) without a stay and work permit." },
    ],
    watchOuts: [
      "The labour market test result expires: the permit application must be filed within 90 days of the HZZ notice, otherwise the test must be repeated. HZZ issues negative opinions when referred candidates were not interviewed or when employer conditions such as tax compliance or the Croatian-employee requirement are not met.",
      "The police e-mail channel and direct filing are only for permits that need no test or opinion, extensions and Article 110 cases. Filing an HZZ-dependent application there stalls it; it must go through the HZZ platform.",
      "Family reunification for holders of a permit based on the HZZ opinion is subject to a 1-year waiting period, and periods as seasonal worker, trainee, ICT or service provider do not count towards long-term residence.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Croatia", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-croatia_en" },
      { label: "Gov.hr: work of foreign nationals", url: "https://gov.hr/en/rad-stranaca/1214" },
      { label: "Ministry of the Interior: stay and work permits", url: "https://mup.gov.hr/radne-dozvole/286764" },
      { label: "Zakon o strancima, consolidated text", url: "https://www.zakon.hr/z/142/Zakon-o-strancima" },
    ],
  };
