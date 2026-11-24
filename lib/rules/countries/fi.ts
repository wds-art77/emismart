import type { CountryRules } from "../country-rules";

const VERIFIED = "2026-11-24";

const SRC = {
  euPortalWorker: {
    label: "EU Immigration Portal: employed worker, Finland",
    url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-finland_en",
  },
  euPortalHQ: {
    label: "EU Immigration Portal: highly qualified worker, Finland",
    url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/highly-qualified-worker-finland_en",
  },
  euPortalFamily: {
    label: "EU Immigration Portal: family member, Finland",
    url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/family-member-finland_en",
  },
  tyolupalinjaus: {
    label: "Elinvoimakeskus: alueelliset työlupalinjaukset (regional work permit policies)",
    url: "https://elinvoimakeskus.fi/tyolupalinjaus",
  },
  tyomarkkinatori: {
    label: "Job Market Finland (KEHA Centre): international recruitment process",
    url: "https://tyomarkkinatori.fi/en/employers-and-entrepreneurs/information-on-being-an-employer-or-entrepreneur/international-recruitment/international-recruitment-process",
  },
};

export const fi: CountryRules = {
  code: "fi",
  salary: {
    // Migri (migri.fi) refused every request (HTTP 403), so the 2026 EU Blue Card and specialist
    // thresholds could not be confirmed on an opened official page. See reviewNotes.
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: null,
  },
  shortage: {
    list: {
      value: [
        {
          name: "Alueelliset työlupalinjaukset: regional work permit policies of the Elinvoimakeskus (Etelä-Pohjanmaa, Itä-Suomi, Kaakkois-Suomi, Keski-Suomi, Lappi, Lounais-Suomi, Pohjanmaa, Pohjois-Suomi, Sisä-Suomi, Uusimaa) plus a national policy; Åland sets its own",
          scope: "regional",
          url: SRC.tyolupalinjaus.url,
        },
      ],
      validFrom: VERIFIED,
      source: SRC.tyolupalinjaus,
      lastVerified: VERIFIED,
      note: "Policies list occupations with difficult labour availability and are updated twice a year, in June and December. The individual regional PDFs and their validity dates are not linked from the overview page; validFrom records the date the policies were confirmed in force. The national shortage list had been updated but not yet published on the verification date.",
    },
    exemptsLabourMarketTest: true,
    note: "If the job title is in the applicable policy the employer need not advertise the vacancy for two weeks on Työmarkkinatori (availability assessment). Applies only to the residence permit for an employed person (TTOL) and seasonal work of 6 to 9 months, not to specialists, EU Blue Card or ICT permits. Jobs in fields with an oversupply of labour under the Labour Force Barometer are usually refused. No statutory minimum wage; collective agreements apply.",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2025-04-01",
      source: SRC.euPortalWorker,
      lastVerified: VERIFIED,
      note: "Spouse, registered partner and unmarried minor children may join the worker; no waiting period is stated. Partners in a marriage-like relationship need two years of cohabitation unless they have children together.",
    },
    blueCardImmediate: true,
    decisionDays: null,
    conditions: {
      value:
        "Family members need sufficient means of subsistence; the required amount depends on family size and is set in the Finnish Immigration Service's income table (not opened). Family ties must be documented and may be proved by a State-paid DNA test where evidence is insufficient. Family members have full access to employment and education.",
      validFrom: "2025-04-01",
      source: SRC.euPortalFamily,
      lastVerified: VERIFIED,
    },
    source: SRC.euPortalFamily,
  },
  recast: {
    // Reported by secondary sources as transposed by an Aliens Act amendment (statute 912/2026, HE 80/2026)
    // in force 27 October 2026, following Act 255/2025 (HE 179/2024). Finlex served image placeholders
    // instead of the statute PDFs, so nothing could be confirmed on an official page. See reviewNotes.
    transposition: null,
    decisionDays: null,
    extensionDays: null,
    changeOfEmployerByNotification: null,
    unemploymentGraceMonths: null,
    inCountryApplication: {
      value: true,
      validFrom: "2025-04-01",
      source: SRC.euPortalHQ,
      lastVerified: VERIFIED,
      note: "A first residence permit may be applied for in Finland on paper form MP_1 by a person already legally in the country; otherwise via Enter Finland followed by identification at a Finnish mission.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: [],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: SRC.euPortalWorker,
  },
  validity: {
    value: {
      initialMonths: 12,
      renewalMonths: null,
      note: "Residence permit for an employed person: first fixed-term permit normally one year. Specialist permit (and EU Blue Card route) first permit two years, renewed permit up to four years. Extension length for the employed person permit not stated on the page opened.",
    },
    validFrom: "2025-04-01",
    source: SRC.euPortalWorker,
    lastVerified: VERIFIED,
  },
  reviewNotes: [
    "Migri (migri.fi) returned HTTP 403 for every page requested (EU Blue Card, income requirement, employed person, news). Search snippets of Migri's own pages state EUR 3,937 gross per month for the EU Blue Card and the specialist permit in 2026 (EUR 3,827 in 2025) and EUR 1,600 per month as the general income requirement where no collective agreement applies; these were not confirmed on an opened page, so blueCard and highlyQualified are null. Verify at https://migri.fi/en/eu-blue-card and https://migri.fi/working-in-finland/income-requirement.",
    "No statutory minimum wage in Finland; pay must follow the applicable collective agreement.",
    "Recast Directive (EU) 2024/1233: Act 255/2025 (HE 179/2024, published 27 May 2025) made first amendments; an Aliens Act amendment numbered 912/2026 (HE 80/2026) is reported in force from 27 October 2026 with statutory maximum processing times for work-based permits (secondary sources cite two months standard, three months for complex cases, four months for two-stage cases) and wider employer notification duties. Finlex downloads returned image placeholders and the Finlex HTML pages served only navigation, so all recast fields except in-country application are null. Verify on finlex.fi (912/2026) and migri.fi news.",
    "Family decision period (Aliens Act 69 a §, nine months) and the family income table could not be confirmed on an opened page; decisionDays is null.",
    "Documents: passport validity margin, accepted languages and criminal record rules are not stated on the EU portal pages; Migri pages were blocked. acceptedLanguages is left empty.",
    "Regional work permit policies moved from the ELY centres to the new Elinvoimakeskus organisation in 2026; individual regional PDFs (June and December editions) must be read for the occupation lists and exact validity dates.",
    "EU Immigration Portal pages for Finland are dated 1 April 2025 and predate the 2026 amendments.",
  ],
};
