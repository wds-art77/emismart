// Emismart country data layer.
// Content is indicative and summarises publicly available official guidance.
// Each entry carries the official sources it was drawn from. Always confirm
// current rules, fees and thresholds on the official pages before filing.

export type CountryCode = "be" | "nl" | "fr" | "de" | "lu";

export type Step = {
  title: string;
  actor: "Employer" | "Employee" | "Authority" | "Both";
  detail: string;
};

export type Doc = {
  label: string;
  note?: string;
};

export type Route = {
  name: string;
  summary: string;
};

export type Country = {
  code: CountryCode;
  name: string;
  flag: string;
  languages: string[];
  permitName: string;
  localName: string;
  tagline: string;
  overview: string;
  whoApplies: string;
  authorities: string[];
  legalBasis: string[];
  decisionPeriod: string;
  validity: string;
  labourMarketTest: string;
  steps: Step[];
  employerDocs: Doc[];
  employeeDocs: Doc[];
  alternativeRoutes: Route[];
  watchOuts: string[];
  sources: { label: string; url: string }[];
};

export const countries: Country[] = [
  {
    code: "be",
    name: "Belgium",
    flag: "🇧🇪",
    languages: ["French", "Dutch", "German"],
    permitName: "Single permit",
    localName: "Permis unique / Gecombineerde vergunning",
    tagline: "One application, one card: work and residence for stays over 90 days.",
    overview:
      "Since 1 January 2019 Belgium issues a single permit covering both the authorisation to work and the right to reside for employment of more than 90 days. The procedure is shared between the Region (work) and the federal Immigration Office (residence). The employer files; the worker receives a single electronic residence card once both sides approve.",
    whoApplies:
      "The Belgian employer, or a mandated representative such as a law firm, files on behalf of the worker with the competent Region. The worker cannot file alone.",
    authorities: [
      "Flanders: Department of Work and Social Economy (Werk en Sociale Economie), via the Working in Belgium platform",
      "Wallonia: Service public de Wallonie, Emploi",
      "Brussels-Capital: Bruxelles Economie et Emploi",
      "German-speaking Community: Ministerium der Deutschsprachigen Gemeinschaft",
      "Federal: Immigration Office (Office des étrangers / Dienst Vreemdelingenzaken) for the residence decision",
    ],
    legalBasis: [
      "Directive 2011/98/EU (Single Permit Directive), recast by Directive (EU) 2024/1233",
      "Cooperation agreement of 2 February 2018 between the Federal State, the Regions and the Communities",
      "Law of 15 December 1980 on access to the territory, residence, settlement and removal of foreign nationals",
      "Regional decrees and orders on the employment of foreign workers",
    ],
    decisionPeriod:
      "Legal maximum of 4 months from the date the application is declared admissible. The recast Single Permit Directive requires a decision within 90 days of a complete application; Belgium has announced alignment with that deadline.",
    validity:
      "Usually tied to the employment contract, up to 1 year for a first permit in most categories, renewable. Highly skilled workers can obtain up to 3 years in some Regions.",
    labourMarketTest:
      "Required for most ordinary salaried roles unless the worker belongs to an exempt category such as highly skilled workers, executives, researchers, or shortage occupations listed by the Region.",
    steps: [
      {
        title: "Choose the competent Region",
        actor: "Employer",
        detail:
          "The Region where the worker will mainly work determines which authority receives the file. Flanders, Wallonia, Brussels and the German-speaking Community each run their own platform and category lists.",
      },
      {
        title: "Assemble the joint file",
        actor: "Both",
        detail:
          "The employer gathers its own forms and the worker's personal documents. Everything is filed together in a single electronic submission.",
      },
      {
        title: "File with the Region",
        actor: "Employer",
        detail:
          "The employer or mandated representative submits the application online. The Region checks admissibility and confirms the file is complete.",
      },
      {
        title: "Parallel review",
        actor: "Authority",
        detail:
          "The Region assesses the work component. The Immigration Office assesses the residence component (passport, criminal record, medical, public order). Both must approve.",
      },
      {
        title: "Decision and annex 46",
        actor: "Authority",
        detail:
          "On a positive decision the worker receives annex 46. If abroad, the worker uses it to obtain a D visa at the Belgian embassy or consulate.",
      },
      {
        title: "Arrival and registration",
        actor: "Employee",
        detail:
          "Within 8 days of arrival the worker registers with the municipality (commune / gemeente), which issues the electronic single permit card (A card).",
      },
    ],
    employerDocs: [
      { label: "Regional application form, signed by the employer" },
      { label: "Signed employment contract compliant with Belgian law" },
      { label: "Proof of company registration (KBO / BCE number)" },
      { label: "Proof the salary meets the applicable regional threshold", note: "Relevant for highly skilled and executive categories." },
      { label: "Mandate if a representative files on the employer's behalf" },
    ],
    employeeDocs: [
      { label: "Valid passport, full copy of all pages" },
      { label: "Medical certificate from a doctor recognised by the Belgian embassy", note: "Required when the worker is abroad." },
      { label: "Extract from the criminal record, legalised or apostilled, with sworn translation", note: "For workers aged 18 and over." },
      { label: "Diplomas or qualifications, legalised, with translation", note: "Required for highly skilled, researcher and similar categories." },
      { label: "Proof of payment of the federal fee (redevance) to the Immigration Office" },
      { label: "Passport photographs meeting ICAO standards" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "For university graduates with a contract of at least 1 year above the Blue Card salary threshold. Filed through the same single permit channel." },
      { name: "Intra-corporate transfer (ICT)", summary: "For managers, specialists and trainees seconded from a non-EU entity of the same group." },
      { name: "Professional card", summary: "For self-employed activity. Separate regional procedure, not a single permit." },
    ],
    watchOuts: [
      "Each Region applies its own salary thresholds and shortage lists. A file prepared for Flanders is not automatically valid for Brussels.",
      "The 4-month clock only starts once the Region declares the file admissible. Incomplete files restart the process.",
      "A change of employer requires a new single permit application by the new employer.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Belgium", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-belgium_en" },
      { label: "Working in Belgium platform", url: "https://www.working-in-belgium.be" },
      { label: "Immigration Office (IBZ)", url: "https://dofi.ibz.be" },
    ],
  },
  {
    code: "nl",
    name: "Netherlands",
    flag: "🇳🇱",
    languages: ["Dutch"],
    permitName: "Single permit (GVVA)",
    localName: "Gecombineerde vergunning voor verblijf en arbeid",
    tagline: "Residence and work in one decision from the IND, with UWV advising on the labour market.",
    overview:
      "The GVVA is the Dutch single permit for non-EU workers who will stay and work for more than 3 months and who do not fall under a separate scheme such as the highly skilled migrant route. The Immigration and Naturalisation Service (IND) decides and always asks the UWV to advise on the labour market aspects. The permit comes with an additional document stating the employer and working conditions.",
    whoApplies:
      "Normally the employer applies to the IND. The worker may also apply. Recognised sponsors use the faster TEV procedure for the entry visa and residence permit together.",
    authorities: [
      "Immigratie- en Naturalisatiedienst (IND): decision on residence and work",
      "UWV (Uitvoeringsinstituut Werknemersverzekeringen): advice on the labour market test",
      "Dutch embassy or consulate: issue of the MVV entry visa where required",
    ],
    legalBasis: [
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Wet arbeid vreemdelingen (Wav) and Besluit uitvoering Wav",
      "Vreemdelingenwet 2000 and Vreemdelingenbesluit 2000",
    ],
    decisionPeriod:
      "Legal decision period of 90 days once the fee is paid. Since the recast directive took effect in the Netherlands in May 2026, the IND may extend by 30 days for first applications in complex cases; a change of employer during a valid permit has a 45-day decision period.",
    validity:
      "Issued for the duration of the employment contract, with a maximum of 3 years. Renewal is possible. After 5 years of uninterrupted work the worker is free on the labour market.",
    labourMarketTest:
      "Yes, through UWV: the vacancy must have been open to the Dutch and EEA labour market (registered with UWV for at least 5 weeks), recruitment efforts must be documented, and pay must be market-conform and at least the statutory minimum wage. Exemptions exist for specific categories.",
    steps: [
      {
        title: "Check whether a separate scheme applies",
        actor: "Employer",
        detail:
          "Highly skilled migrants (kennismigranten), EU Blue Card holders, intra-corporate transferees and researchers follow their own routes and do not need a GVVA.",
      },
      {
        title: "Register the vacancy with UWV",
        actor: "Employer",
        detail:
          "The vacancy should be reported to UWV and open to the EEA market for at least 5 weeks before the application, with evidence of recruitment efforts.",
      },
      {
        title: "File the GVVA application",
        actor: "Employer",
        detail:
          "The employer submits the application and the worker's documents to the IND, online for recognised sponsors or on paper, and pays the fee.",
      },
      {
        title: "IND seeks UWV advice",
        actor: "Authority",
        detail:
          "UWV reviews the labour market test, wages and working conditions and advises the IND, which issues a single decision on residence and work.",
      },
      {
        title: "MVV collection and entry",
        actor: "Employee",
        detail:
          "If an MVV is required, the worker collects it at the embassy within 3 months of approval and travels to the Netherlands.",
      },
      {
        title: "Residence card and additional document",
        actor: "Employee",
        detail:
          "The worker collects the residence card at an IND desk and receives the additional document naming the employer. Registration with the municipality (BRP) and a TB test may be required depending on nationality.",
      },
    ],
    employerDocs: [
      { label: "GVVA application form signed by the employer" },
      { label: "Signed employment contract with salary at least the statutory minimum and market-conform" },
      { label: "Proof of vacancy registration with UWV and recruitment efforts" },
      { label: "Chamber of Commerce (KVK) extract" },
      { label: "Antecedents certificate and declaration of the employer where requested" },
    ],
    employeeDocs: [
      { label: "Valid passport, copy of all pages with stamps or entries" },
      { label: "Antecedents certificate (antecedentenverklaring) signed by the worker" },
      { label: "Diplomas or proof of qualifications where the job requires them" },
      { label: "Proof of health insurance after arrival" },
      { label: "Passport photograph meeting Dutch requirements" },
      { label: "Legalised and translated civil status documents for accompanying family members" },
    ],
    alternativeRoutes: [
      { name: "Highly skilled migrant (kennismigrant)", summary: "Fast route via a recognised sponsor with a salary above the yearly threshold. No labour market test. Not a GVVA." },
      { name: "EU Blue Card", summary: "Higher salary threshold, university degree, EU mobility advantages." },
      { name: "Intra-corporate transfer", summary: "For managers, specialists and trainees transferred within a group." },
    ],
    watchOuts: [
      "Fees must be paid before the decision period starts. Unpaid fees mean the 90 days have not begun.",
      "The GVVA is employer-specific. A new employer must apply for a new permit or a change notification.",
      "Nationals of some countries must take a tuberculosis test within 3 months of arrival.",
    ],
    sources: [
      { label: "IND: Employing a foreign national", url: "https://ind.nl/en/residence-permits/work/employing-a-foreign-national" },
      { label: "Business.gov.nl: permits for your foreign employees", url: "https://business.gov.nl/coming-to-the-netherlands/information-for-employers/permits-for-your-foreign-employees" },
      { label: "EU Immigration Portal: employed worker, Netherlands", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-netherlands_en" },
    ],
  },
  {
    code: "fr",
    name: "France",
    flag: "🇫🇷",
    languages: ["French"],
    permitName: "Work authorisation and residence permit (salarié / travailleur temporaire)",
    localName: "Autorisation de travail + titre de séjour salarié",
    tagline: "Employer-led online work authorisation, then a long-stay visa that becomes the residence permit.",
    overview:
      "France implements the single permit through a two-stage but linked procedure. The employer requests the work authorisation online on the ANEF platform of the Ministry of the Interior. Once granted, the worker applies for a long-stay visa equivalent to a residence permit (VLS-TS) marked salarié or travailleur temporaire, which is validated online after arrival and serves as the residence and work title.",
    whoApplies:
      "The employer files the work authorisation request online. The worker then files the visa application through France-Visas and validates the VLS-TS after arrival.",
    authorities: [
      "Ministry of the Interior, ANEF platform and the interregional foreign labour platforms (plateformes de main-d'œuvre étrangère)",
      "France Travail: publication of the vacancy for the labour market test",
      "French consulate (France-Visas): long-stay visa",
      "Prefecture: residence permit renewals and in-country changes of status",
    ],
    legalBasis: [
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Code de l'entrée et du séjour des étrangers et du droit d'asile (CESEDA), notably articles L. 421-1 and following and R. 5221-1 and following of the Code du travail",
      "Arrêté of 3 January 2025 on supporting documents and arrêté of 21 May 2025 on the regional lists of shortage occupations",
    ],
    decisionPeriod:
      "The administration aims to decide on the work authorisation within 2 months; silence after 2 months counts as a refusal. Visa processing then follows at the consulate. Under the recast directive the overall decision should fit within 90 days of a complete application.",
    validity:
      "Salarié permit for open-ended contracts (CDI): 1 year on first issue, then multi-year. Travailleur temporaire for fixed-term contracts (CDD): matches the contract, up to 1 year.",
    labourMarketTest:
      "Yes in principle: the vacancy must be published with France Travail for 3 weeks without a suitable candidate, unless the occupation is on the regional shortage list (métiers en tension) or the worker falls under an exempt category.",
    steps: [
      {
        title: "Publish the vacancy",
        actor: "Employer",
        detail:
          "Unless the job is on the shortage list, publish the offer with France Travail for at least 3 weeks and keep proof of unsuccessful recruitment.",
      },
      {
        title: "Request the work authorisation online",
        actor: "Employer",
        detail:
          "File on the ANEF employer portal with the contract, company documents and the worker's identity and qualification documents.",
      },
      {
        title: "Review by the foreign labour platform",
        actor: "Authority",
        detail:
          "The platform checks the labour market test, salary (at least the SMIC or the collective agreement minimum), the employer's compliance record and the match between job and qualifications.",
      },
      {
        title: "Secure work authorisation issued",
        actor: "Authority",
        detail:
          "The employer and the worker receive the authorisation by e-mail. It is valid for the specific job and employer.",
      },
      {
        title: "Apply for the VLS-TS at the consulate",
        actor: "Employee",
        detail:
          "The worker applies on France-Visas with the work authorisation, passport, photographs and supporting documents, then attends the visa appointment.",
      },
      {
        title: "Validate the visa online after arrival",
        actor: "Employee",
        detail:
          "Within 3 months of entry, validate the VLS-TS on the ANEF portal and pay the tax. The validated visa is the residence and work title for its duration.",
      },
    ],
    employerDocs: [
      { label: "Online work authorisation request on ANEF" },
      { label: "Kbis extract or equivalent registration document" },
      { label: "Signed employment contract or promise of employment (CERFA where applicable)" },
      { label: "Proof of publication of the vacancy with France Travail for 3 weeks", note: "Not required for shortage occupations." },
      { label: "Attestation of social contribution compliance (URSSAF)" },
    ],
    employeeDocs: [
      { label: "Valid passport" },
      { label: "Curriculum vitae and diplomas or proof of experience relevant to the role" },
      { label: "Secure work authorisation issued to the employer" },
      { label: "France-Visas application form and ICAO photographs" },
      { label: "Proof of accommodation in France for the visa stage" },
      { label: "Birth certificate and civil status documents, translated, for family applications" },
    ],
    alternativeRoutes: [
      { name: "Passeport talent", summary: "Multi-year permit for highly qualified workers, EU Blue Card, researchers, investors and company founders. No labour market test." },
      { name: "Salarié détaché ICT", summary: "For intra-group transfers of managers and experts." },
      { name: "Changement de statut", summary: "For students or other residents already in France who find qualifying employment." },
    ],
    watchOuts: [
      "The work authorisation is job-specific. A new contract requires a new authorisation.",
      "The employer must check the authenticity of an existing residence title with the prefecture at least 2 working days before hiring.",
      "Regional shortage lists changed in May 2025 and are updated; check the list for the department of employment.",
    ],
    sources: [
      { label: "Service-Public: Autorisation de travail d'un salarié étranger en France", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2734" },
      { label: "Service-Public Pro: Autorisation de travail d'un salarié étranger", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F35480" },
      { label: "ANEF: Administration numérique pour les étrangers en France", url: "https://administration-etrangers-en-france.interieur.gouv.fr" },
      { label: "France-Visas", url: "https://france-visas.gouv.fr" },
    ],
  },
  {
    code: "de",
    name: "Germany",
    flag: "🇩🇪",
    languages: ["German"],
    permitName: "Residence permit for qualified employment",
    localName: "Aufenthaltserlaubnis zur Beschäftigung (§§ 18a, 18b AufenthG)",
    tagline: "The residence permit is the single permit. Employers can accelerate it through the fast-track procedure.",
    overview:
      "Germany does not issue a separate work permit. The residence title itself authorises employment, with the Federal Employment Agency (BA) giving internal approval where required. Since the Skilled Immigration Act reforms of 2023 and 2024, skilled workers with a recognised vocational or academic qualification and a concrete job offer are entitled to a permit. Employers can use the fast-track procedure under § 81a AufenthG to shorten each stage.",
    whoApplies:
      "The worker applies for the visa at the German embassy or consulate and later for the residence permit at the local foreigners authority (Ausländerbehörde). In the fast-track procedure the employer initiates the file with the Ausländerbehörde on the worker's behalf.",
    authorities: [
      "German embassies and consulates: national visa (D visa)",
      "Ausländerbehörde: residence permit and fast-track pre-approval",
      "Bundesagentur für Arbeit (BA), ZAV: approval of employment conditions",
      "Recognition bodies: equivalence of foreign qualifications (Anerkennung)",
    ],
    legalBasis: [
      "Aufenthaltsgesetz (AufenthG), in particular §§ 18, 18a, 18b, 18g, 19c, 20a and 81a",
      "Beschäftigungsverordnung (BeschV)",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233; Directive (EU) 2021/1883 for the EU Blue Card",
    ],
    decisionPeriod:
      "No single statutory deadline for the standard route; visa processing varies by embassy. In the fast-track procedure the BA must respond within 1 week, the embassy must offer an appointment within 3 weeks and should decide within 3 weeks of the complete application.",
    validity:
      "Issued for the duration of the employment contract, generally up to 4 years. A settlement permit is possible after 3 years of qualified employment (sooner for Blue Card holders).",
    labourMarketTest:
      "No priority check for skilled workers under §§ 18a and 18b. The BA still checks that the working conditions are not less favourable than those of comparable German workers.",
    steps: [
      {
        title: "Recognition of the qualification",
        actor: "Employee",
        detail:
          "Vocational qualifications need a recognition decision; academic degrees are checked in the anabin database or through ZAB. IT specialists with experience and workers with 2 years' experience plus a state-recognised degree may use alternative routes without full recognition.",
      },
      {
        title: "Employer declaration of employment",
        actor: "Employer",
        detail:
          "The employer completes the Erklärung zum Beschäftigungsverhältnis for the BA with salary, hours and job description.",
      },
      {
        title: "Optional: fast-track procedure",
        actor: "Employer",
        detail:
          "The employer signs an agreement with the Ausländerbehörde, which coordinates recognition and BA approval and issues a pre-approval (Vorabzustimmung) for the visa.",
      },
      {
        title: "Visa application at the embassy",
        actor: "Employee",
        detail:
          "The worker books an appointment, submits the contract, qualification documents and, where available, the pre-approval, and receives a national visa for entry.",
      },
      {
        title: "Registration and residence permit",
        actor: "Employee",
        detail:
          "After arrival the worker registers the address (Anmeldung) and applies to the Ausländerbehörde for the electronic residence permit, which states the authorised employment.",
      },
    ],
    employerDocs: [
      { label: "Erklärung zum Beschäftigungsverhältnis (BA form) completed and signed" },
      { label: "Signed employment contract or binding job offer" },
      { label: "Job description showing the role requires the qualification" },
      { label: "Fast-track agreement with the Ausländerbehörde and payment of its fee", note: "Fast-track procedure only." },
      { label: "Proof of salary level for Blue Card or senior-worker thresholds where relevant" },
    ],
    employeeDocs: [
      { label: "Valid passport" },
      { label: "Recognition notice or anabin / ZAB statement of comparability for the qualification" },
      { label: "Diplomas and certificates with certified translations" },
      { label: "Curriculum vitae and proof of professional experience" },
      { label: "Proof of health insurance covering the period from entry" },
      { label: "Biometric photographs and completed national visa form (VIDEX)" },
      { label: "Professional licence where the occupation is regulated", note: "Health professions, teaching, law and others." },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card (§ 18g)", summary: "University graduates with a salary above the Blue Card threshold, reduced threshold for shortage occupations and recent graduates. Settlement after 21 to 27 months." },
      { name: "Opportunity card (Chancenkarte, § 20a)", summary: "Points-based permit to come to Germany for up to 1 year to look for work." },
      { name: "IT specialists (§ 19c (2) with § 6 BeschV)", summary: "Experience-based route for IT professionals without a formal degree." },
      { name: "Experienced professionals (§ 6 BeschV)", summary: "2 years' experience plus a state-recognised qualification, with a salary floor and no German recognition required." },
    ],
    watchOuts: [
      "Qualification recognition is the main cause of delay. Start it before the job offer is signed if possible.",
      "Embassy appointment availability differs greatly by country. The fast-track procedure guarantees a slot within 3 weeks.",
      "Regulated professions require the professional licence before the residence permit can be granted.",
    ],
    sources: [
      { label: "Make it in Germany: the Skilled Immigration Act", url: "https://www.make-it-in-germany.com/en/visa-recognition/skilled-immigration-act" },
      { label: "Make it in Germany: work for qualified professionals", url: "https://www.make-it-in-germany.com/en/visa-residence/types/work-qualified-professionals" },
      { label: "Bundesagentur für Arbeit, ZAV", url: "https://www.arbeitsagentur.de/vor-ort/zav/startseite" },
      { label: "Beschäftigungsverordnung (English)", url: "https://www.gesetze-im-internet.de/englisch_beschv/englisch_beschv.html" },
    ],
  },
  {
    code: "lu",
    name: "Luxembourg",
    flag: "🇱🇺",
    languages: ["French", "German", "Luxembourgish"],
    permitName: "Residence permit for salaried workers",
    localName: "Autorisation de séjour travailleur salarié",
    tagline: "ADEM vacancy declaration first, then a temporary authorisation to stay issued by the Immigration Directorate.",
    overview:
      "In Luxembourg the work authorisation is embedded in the residence permit. Since July 2013 there is no separate work permit document. The employer first declares the vacancy to the national employment agency ADEM. The worker then applies from abroad for a temporary authorisation to stay as a salaried worker, enters with a visa where required, and completes the residence permit formalities within 3 months.",
    whoApplies:
      "The worker applies to the Immigration Directorate before entering Luxembourg, with the employer's documents attached. The employer handles the ADEM vacancy declaration and provides the certificate.",
    authorities: [
      "Ministry of Home Affairs, Immigration Directorate (Direction générale de l'immigration)",
      "ADEM (Agence pour le développement de l'emploi): vacancy declaration and certificate",
      "Luxembourg embassy or consulate: D visa",
      "Commune of residence: declaration of arrival",
    ],
    legalBasis: [
      "Loi modifiée du 29 août 2008 sur la libre circulation des personnes et l'immigration",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Code du travail, book VI on employment of foreign workers",
    ],
    decisionPeriod:
      "The Immigration Directorate must decide on the temporary authorisation to stay within 4 months as a legal maximum; typical decisions are faster. The recast directive requires a decision within 90 days of a complete application.",
    validity:
      "First authorisation generally for 1 year, limited to one profession and one sector, renewable for up to 3 years, after which the holder may work in any salaried activity.",
    labourMarketTest:
      "Yes: ADEM checks for 3 weeks whether a suitable candidate is available on the national or EU market. If none, ADEM issues a certificate allowing recruitment of a third-country national. Highly qualified workers still require the vacancy declaration but not the market test.",
    steps: [
      {
        title: "Declare the vacancy to ADEM",
        actor: "Employer",
        detail:
          "The employer declares the post to ADEM. If no suitable candidate is proposed within the statutory period, the employer requests the certificate authorising recruitment of a third-country national.",
      },
      {
        title: "Sign the employment contract",
        actor: "Both",
        detail:
          "The contract must comply with Luxembourg labour law and may state that it takes effect once the authorisation to stay is granted.",
      },
      {
        title: "Apply for the temporary authorisation to stay",
        actor: "Employee",
        detail:
          "The worker files the application with the Immigration Directorate from the country of residence, with the ADEM certificate, contract, passport copy, criminal record extract and CV.",
      },
      {
        title: "Decision and D visa",
        actor: "Authority",
        detail:
          "On approval the Directorate issues the temporary authorisation, valid for 90 days to enter Luxembourg. Nationals subject to visa requirements then apply for a D visa.",
      },
      {
        title: "Arrival formalities",
        actor: "Employee",
        detail:
          "Within 3 working days of arrival the worker declares arrival at the commune, then undergoes the medical examination.",
      },
      {
        title: "Residence permit application",
        actor: "Employee",
        detail:
          "Within 3 months of arrival the worker applies for the residence permit card (titre de séjour) with the Immigration Directorate and pays the fee.",
      },
    ],
    employerDocs: [
      { label: "ADEM vacancy declaration and certificate authorising recruitment of a third-country national" },
      { label: "Signed and dated employment contract compliant with Luxembourg labour law" },
      { label: "Company registration documents (RCS extract)" },
      { label: "Proof of salary meeting the applicable minimum or Blue Card threshold" },
    ],
    employeeDocs: [
      { label: "Application form for a temporary authorisation to stay" },
      { label: "Full copy of a valid passport" },
      { label: "Birth certificate, legalised or apostilled, with translation" },
      { label: "Extract from the criminal record of the country of residence, legalised, with translation" },
      { label: "Curriculum vitae and diplomas or certificates relevant to the job" },
      { label: "Medical certificate and TB test after arrival" },
      { label: "Proof of address in Luxembourg for the residence permit stage" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "Highly qualified workers with a higher-education degree and a salary above the threshold; no labour market test." },
      { name: "Intra-corporate transferee", summary: "Managers, specialists and trainees transferred within a group." },
      { name: "Investor or self-employed authorisation", summary: "Separate procedure with a business establishment permit." },
    ],
    watchOuts: [
      "The temporary authorisation to stay must be obtained before entering Luxembourg; applications filed from inside the country are refused except for specific categories.",
      "Documents in languages other than French, German or English require a certified translation.",
      "The first permit is limited to one sector and profession; a change requires a new authorisation.",
    ],
    sources: [
      { label: "Guichet.lu: working in Luxembourg as a third-country national (more than 3 months)", url: "https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/salarie.html" },
      { label: "Guichet.lu for employers: recruiting a third-country national", url: "https://guichet.public.lu/fr/entreprises/ressources-humaines/recrutement/ressortissant-pays-tiers/plus-3-mois/autorisation.html" },
      { label: "ADEM: employers", url: "https://adem.public.lu/en/employeurs.html" },
    ],
  },
];

export const countryByCode = (code: string): Country | undefined =>
  countries.find((c) => c.code === code);

export const euRecast = {
  title: "Directive (EU) 2024/1233: the recast Single Permit Directive",
  points: [
    "Adopted 24 April 2024, in force 20 May 2024, to be transposed by Member States by 21 May 2026.",
    "Decision on a complete application within 90 days, extendable by 30 days in exceptionally complex cases.",
    "Applications may be filed from within the Member State by third-country nationals who are legally present.",
    "Single permit holders may change employer, subject to a notification procedure and a possible check by the authorities.",
    "Up to 3 months of unemployment are allowed without losing the permit, extended to 6 months after 2 years of holding it.",
    "Strengthened equal treatment and protection against exploitation, with sanctions for employers who abuse the system.",
  ],
  source: {
    label: "EUR-Lex: Directive (EU) 2024/1233",
    url: "https://eur-lex.europa.eu/eli/dir/2024/1233/oj",
  },
};
