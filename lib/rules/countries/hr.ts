import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const NN_MIN_WAGE = {
  label: "Narodne novine 132/2025: Regulation on the minimum wage for 2026",
  url: "https://narodne-novine.nn.hr/clanci/sluzbeni/2025_10_132_1931.html",
};
const NN_55_2026 = {
  label: "Narodne novine 55/2026: Act amending the Aliens Act",
  url: "https://narodne-novine.nn.hr/clanci/sluzbeni/2026_05_55_692.html",
};
const MUP_WORK = {
  label: "Ministry of the Interior: stay and work permits",
  url: "https://mup.gov.hr/radne-dozvole/286764",
};
const EU_PORTAL_WORKER = {
  label: "EU Immigration Portal: employed worker, Croatia",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-croatia_en",
};
const EU_PORTAL_BLUE_CARD = {
  label: "EU Immigration Portal: EU Blue Card, Croatia",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-croatia_en",
};
const EU_PORTAL_FAMILY = {
  label: "EU Immigration Portal: family member, Croatia",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/family-member-croatia_en",
};

export const hr: CountryRules = {
  code: "hr",
  salary: {
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: [
      {
        value: { amount: 1050, currency: "EUR", period: "month", gross: true },
        validFrom: "2026-01-01",
        validTo: "2026-12-31",
        source: NN_MIN_WAGE,
        lastVerified: V,
        note: "Government regulation of 24 October 2025 under Article 6 of the Minimum Wage Act.",
      },
    ],
  },
  shortage: {
    list: {
      value: [
        {
          name: "Odluka Upravnog vijeća HZZ-a o deficitarnim zanimanjima (HZZ Management Board decision on shortage occupations), adopted annually; linked from the Ministry of the Interior page",
          scope: "national",
          url: "https://mup.gov.hr/radne-dozvole/286764",
        },
      ],
      validFrom: "2026-06-04",
      source: MUP_WORK,
      lastVerified: V,
      note: "Since the 2026 amendment the shortage status is applied per police administration area (Article 91(5) of the Aliens Act).",
    },
    exemptsLabourMarketTest: true,
    note: "For shortage occupations no labour market test is run, but the positive HZZ opinion on the employer is still required. Article 110 categories, including the EU Blue Card, need neither.",
  },
  family: {
    waitingPeriodMonths: {
      value: 12,
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
      note: "Holder of a one-year stay and work permit under Article 97 must have resided lawfully for at least 1 year. Seasonal workers, posted workers and service providers cannot sponsor.",
    },
    blueCardImmediate: null,
    decisionDays: null,
    conditions: {
      value:
        "Proof of sufficient means of support and health insurance; first applications need a legalised certificate of no criminal conviction from the home country or any country of residence over 1 year. The family permit is granted for 1 year or until the sponsor's permit expires.",
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
    },
    source: EU_PORTAL_FAMILY,
  },
  recast: {
    transposition: {
      value: "transposed",
      validFrom: "2026-06-04",
      source: NN_55_2026,
      lastVerified: V,
      note: "The amending Act (NN 55/2026, in force 4 June 2026) adds Directive (EU) 2024/1233 to the list of transposed directives in Article 2 of the Aliens Act.",
    },
    decisionDays: {
      value: 90,
      validFrom: "2026-06-04",
      source: NN_55_2026,
      lastVerified: V,
      note: "Article 91(8): decision as soon as possible and at the latest 90 days from a complete application, the period including the labour market test.",
    },
    extensionDays: {
      value: 30,
      validFrom: "2026-06-04",
      source: NN_55_2026,
      lastVerified: V,
      note: "Article 91(9): extension by 30 days in exceptional and justified circumstances linked to the complexity of the application, not for seasonal permits.",
    },
    changeOfEmployerByNotification: {
      value: true,
      validFrom: "2026-06-04",
      source: NN_55_2026,
      lastVerified: V,
      note: "New Article 103.d introduces a notification of change of employer (obavijest o promjeni poslodavca) filed with the police administration; the Ministry page still describes a labour market test and HZZ opinion for non-shortage occupations after 6 months with the first employer.",
    },
    unemploymentGraceMonths: {
      value: 3,
      validFrom: "2026-06-04",
      source: NN_55_2026,
      lastVerified: V,
      note: "Up to 3 months if the permit has been held less than 2 years, 6 months if longer, extended by 3 months in cases of exploitative working conditions.",
    },
    inCountryApplication: null,
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: [],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: EU_PORTAL_WORKER,
  },
  validity: {
    value: { initialMonths: null, renewalMonths: null, note: "Issued for the time needed for the job or the contract term; the EU Immigration Portal states up to 1 year unless otherwise regulated, while the Act as amended in 2025 allows HZZ-opinion permits for up to 3 years. Blue Card up to 48 months since 15 March 2025." },
    validFrom: "2025-04-01",
    source: EU_PORTAL_WORKER,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card threshold: the rule is 1.5 times the average gross annual salary in Croatia; no current amount is published officially. The EU Immigration Portal still shows the 2023 figure (24 845,64 EUR per year, 2 070,47 EUR per month), too old to record. The DZS average wage notice (NN 21/2026) could not be read.",
    "Shortage list: the HZZ decision itself is linked as a PDF from the Ministry of the Interior page; the direct HZZ URL was not retrieved.",
    "Family reunification: no decision period and no fixed means amount are stated on official pages; whether Blue Card holders may bring family at once is not stated on the pages opened (the Directive requires it).",
    "Stay and work permit validity conflicts between the EU Immigration Portal (1 year) and the Aliens Act as amended in 2025 (up to 3 years); confirm on the Ministry page.",
    "Change of employer by notification is read from the new Article 103.d of the amending Act; the full procedure and its scope (all occupations or shortage only) should be confirmed in the consolidated text.",
  ],
};
