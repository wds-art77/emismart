import type { Country } from "../types";

export const lu: Country =
  {
    code: "lu",
    region: "Western Europe",
    singlePermitDirective: true,
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
  };
