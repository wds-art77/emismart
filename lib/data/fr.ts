import type { Country } from "../types";

export const fr: Country =
  {
    code: "fr",
    region: "Western Europe",
    singlePermitDirective: true,
    name: "France",
    flag: "🇫🇷",
    languages: ["French"],
    permitName: "Work authorisation and residence permit (salarié / travailleur temporaire)",
    localName: "Autorisation de travail + titre de séjour salarié",
    tagline: "Employer-led online work authorisation, then a long-stay visa that becomes the residence permit.",
    overview:
      "France implements the single permit through a two-stage but linked procedure. The employer requests the work authorisation online on the ANEF platform of the Ministry of the Interior. Once granted, the worker applies for a long-stay visa equivalent to a residence permit (VLS-TS) marked salarié or travailleur temporaire, which is validated online after arrival and serves as the residence and work title.",
    whoFilesShort: "Employer, then worker",
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
  };
