import type { Country } from "../types";

export const pl: Country =
  {
    code: "pl",
    region: "Central and Eastern Europe",
    singlePermitDirective: true,
    name: "Poland",
    flag: "🇵🇱",
    languages: ["Polish"],
    permitName: "Temporary residence and work permit (single permit)",
    localName: "Zezwolenie na pobyt czasowy i pracę",
    tagline: "Filed by the worker in Poland through the MOS portal, with the employer's Annex 1, and decided by the Voivode.",
    overview:
      "Poland's single permit is the temporary residence and work permit granted by the Voivode (wojewoda) for non-seasonal work that justifies a stay of more than 3 months. It is applied for by the foreign worker while legally present in Poland, so most workers recruited from abroad first enter on a national visa issued on the basis of a separate work permit (zezwolenie na pracę) which the employer obtains from the Voivode through the praca.gov.pl portal. Since 1 June 2025 the Act on the conditions for the admissibility of entrusting work to foreigners has replaced the former labour market test with county lists of occupations for which permits are refused, and work permit applications are filed only electronically. Residence applications are filed through the Office for Foreigners' MOS portal.",
    whoApplies:
      "The foreign worker is the only party to the residence proceedings and files the application personally through the MOS portal, no later than the last day of legal stay in Poland. The employer completes and signs Annex 1 (załącznik nr 1) electronically through a link sent to its email address; the application cannot be submitted until that annex is in place. The employer files any separate work permit application itself through praca.gov.pl.",
    authorities: [
      "Voivode (wojewoda) and the voivodeship office (urząd wojewódzki) of the worker's place of residence: decision on the single permit and on work permits",
      "Office for Foreigners (Urząd do Spraw Cudzoziemców, UdSC): runs the MOS portal and hears appeals against the Voivode's decisions",
      "Starosta and the district labour office (powiatowy urząd pracy): county lists of occupations for which permits are refused, and registration of declarations of entrusting work",
      "Polish consulate: national visa (type D) for workers entering from abroad on a work permit",
    ],
    legalBasis: [
      "Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Act on Foreigners), in particular the provisions on the temporary residence and work permit",
      "Ustawa z dnia 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom na terytorium Rzeczypospolitej Polskiej, in force since 1 June 2025",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
    ],
    decisionPeriod:
      "The EU Immigration Portal states that the procedure should end within 60 days of a complete application. The period runs only once the application is formally complete, the fee is paid and fingerprints have been taken at the voivodeship office. Voivodeship offices process cases in order of receipt and the statutory period is frequently exceeded in practice; confirm the current position with the competent office.",
    validity:
      "Granted for the period needed for the purpose of stay, longer than 3 months and up to 3 years, with the possibility of further permits. The residence card is marked with access to the labour market. The permit is tied to the employer and the main conditions of work stated in it.",
    labourMarketTest:
      "The classic test (information from the starosta on the local labour market) was abolished for new applications from 1 June 2025. In its place, each starosta may publish a list of occupations and types of work for which permits are not issued in the county, for example after collective redundancies. A permit is refused if the job is on such a list. Pay must be at least the statutory minimum wage regardless of working time or contract type, and not lower than that of comparable workers.",
    steps: [
      {
        title: "Check whether a work permit and visa are needed first",
        actor: "Employer",
        detail:
          "A worker who is abroad cannot file for the single permit. The employer obtains a work permit from the Voivode through praca.gov.pl, or for nationals of Ukraine, Belarus, Russia, Georgia, Moldova and Armenia registers a declaration of entrusting work with the district labour office. The worker then applies for a national visa at the Polish consulate.",
      },
      {
        title: "Enter Poland and sign the contract",
        actor: "Both",
        detail:
          "The worker enters on the national visa or another legal basis and may start work on the strength of the work permit or declaration. An employment contract, mandate contract or specific-task contract is signed with pay at least the statutory minimum.",
      },
      {
        title: "Employer completes Annex 1 in MOS",
        actor: "Employer",
        detail:
          "The worker starts the MOS application and enters the employer's email address. The employer receives a link, completes Annex 1 with the position (from the official GUS list), working time, pay and contract type, and signs it with a trusted profile or qualified signature. The link is valid for 30 days.",
      },
      {
        title: "Worker submits the application and pays the stamp duty",
        actor: "Employee",
        detail:
          "The worker submits the application electronically through MOS no later than the last day of legal stay, with a copy of the passport, photographs, proof of payment of the stamp duty and supporting documents such as health insurance where the contract type does not give statutory cover.",
      },
      {
        title: "Fingerprints and verification at the voivodeship office",
        actor: "Authority",
        detail:
          "The voivodeship office checks the application, summons the worker to give fingerprints and a signature sample, and requests missing documents by a set deadline. A stamp is placed in the passport confirming legal stay during the proceedings.",
      },
      {
        title: "Decision and residence card",
        actor: "Authority",
        detail:
          "The Voivode issues the decision. On approval the worker pays the card fee and collects the residence card marked with access to the labour market. A refusal can be appealed to the Head of the Office for Foreigners within 14 days.",
      },
    ],
    employerDocs: [
      { label: "Annex 1 to the application, completed and signed electronically in MOS by a person authorised to represent the employer" },
      { label: "Employment, mandate or specific-task contract stating pay at least the statutory minimum wage" },
      { label: "Work permit or registered declaration of entrusting work, where the worker entered Poland on that basis" },
      { label: "Statement on the employer's criminal record and compliance history, as required in Annex 1" },
      { label: "Power of attorney passed to the worker outside the system if the employer acts through a representative", note: "Employers cannot attach documents to Annex 1 themselves." },
    ],
    employeeDocs: [
      { label: "Application for a temporary residence permit completed in MOS" },
      { label: "Copy of a valid travel document, original shown when fingerprints are taken" },
      { label: "Recent photographs meeting the official requirements" },
      { label: "Proof of payment of the stamp duty" },
      { label: "Proof of health insurance where the contract does not give statutory cover" },
      { label: "Diplomas or qualifications for regulated professions" },
      { label: "Certificate from the previous employer where the worker changes employer" },
      { label: "Polish sworn translations of any foreign-language documents" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "Temporary residence permit for work in a profession requiring high qualifications, with a higher-education degree or qualifying experience and a salary above a threshold set yearly. Also filed through MOS." },
      { name: "Work permit and national visa", summary: "The employer obtains a work permit (type A) from the Voivode through praca.gov.pl and the worker enters on a national visa. Used before the single permit or instead of it for shorter stays." },
      { name: "Declaration of entrusting work", summary: "For nationals of Ukraine, Belarus, Russia, Georgia, Moldova and Armenia, registered with the district labour office and valid for up to 24 months, without a work permit." },
      { name: "Intra-corporate transfer permit", summary: "Separate temporary residence permit for managers, specialists and trainees transferred within a group, still filed on paper." },
    ],
    watchOuts: [
      "The application can only be filed while the worker is legally in Poland. Entry on a tourist, study or medical-treatment visa blocks the proceedings entirely, and residence documents from another Schengen state lead to a refusal to open proceedings.",
      "Nothing moves until Annex 1 is signed. The employer's link expires after 30 days, the form cannot be saved part-way, and each joint representative must sign separately.",
      "The permit is tied to the employer, position, pay, working time and contract type. A change of employer or of these conditions requires a new permit or a change decision; only a change in the employer's name, legal form or seat is exempt.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Poland", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-poland_en" },
      { label: "Podlaski Voivodeship Office: temporary residence and work", url: "https://www.gov.pl/web/uw-podlaski/pobyt-czasowy-i-praca" },
      { label: "Office for Foreigners: Q&A for employers on Annex 1 in MOS", url: "https://www.gov.pl/web/udsc/qa-dla-pracodawcow" },
      { label: "Ministry of Family, Labour and Social Policy: labour market laws in force from 1 June 2025", url: "https://www.gov.pl/web/family/thats-a-given-labour-market-laws-will-come-into-effect-on-1-june-2025" },
    ],
  };
