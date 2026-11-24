import type { CountryRules } from "../country-rules";

const VERIFIED = "2026-11-24";

const SRC = {
  blueCard: {
    label: "Migration.gv.at: EU Blue Card",
    url: "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/eubluecard/",
  },
  otherKeyWorkers: {
    label: "Migration.gv.at: Red-White-Red Card for other key workers",
    url: "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/other-key-workers/",
  },
  shortageNational: {
    label: "Migration.gv.at: Austria-wide shortage occupations 2026",
    url: "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/austria-wide-shortage-occupations/",
  },
  shortageRegional: {
    label: "Migration.gv.at: regional shortage occupations 2026",
    url: "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/regional-shortage-occupations/",
  },
  family: {
    label: "Migration.gv.at: family reunification",
    url: "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/family-reunification/",
  },
  nagNovelle: {
    label: "Oesterreich.gv.at: NAG amendment BGBl. I Nr. 81/2026 (Directive (EU) 2024/1233)",
    url: "https://www.oesterreich.gv.at/de/Gesetzliche-Neuerungen/Bundesgesetzblatt/NiederlassungsundAufenthaltsgesetz_ua",
  },
  committeeReport: {
    label: "Parliament: committee report 456 d.B. XXVIII. GP on the NAG and AuslBG amendment",
    url: "https://www.parlament.gv.at/dokument/XXVIII/I/456/fname_1752336.pdf",
  },
  documents: {
    label: "Oesterreich.gv.at: Red-White-Red Card for other key workers, first application",
    url: "https://www.oesterreich.gv.at/de/themen/menschen_aus_anderen_staaten/aufenthalt/3/2/2/Seite.120226",
  },
};

export const at: CountryRules = {
  code: "at",
  salary: {
    blueCard: [
      {
        value: {
          amount: 55678,
          currency: "EUR",
          period: "year",
          gross: true,
          note: "Average gross annual income of full-time employees; annual salary plus special payments (13th and 14th month). Adjusted every calendar year.",
        },
        validFrom: "2026-01-01",
        source: SRC.blueCard,
        lastVerified: VERIFIED,
      },
    ],
    blueCardReduced: null,
    highlyQualified: [
      {
        value: {
          amount: 3465,
          currency: "EUR",
          period: "month",
          gross: true,
          note: "Red-White-Red Card for other key workers: statutory minimum gross monthly salary 2026. The very highly qualified category is points based and has no salary threshold.",
        },
        validFrom: "2026-01-01",
        source: SRC.otherKeyWorkers,
        lastVerified: VERIFIED,
      },
    ],
    minimumWage: null,
  },
  shortage: {
    list: {
      value: [
        {
          name: "Fachkräfteverordnung 2026: Austria-wide shortage occupations (64 occupation groups)",
          scope: "national",
          url: SRC.shortageNational.url,
        },
        {
          name: "Fachkräfteverordnung 2026: regional shortage occupations (66 occupation groups, tagged by federal province; none for Vienna)",
          scope: "regional",
          url: SRC.shortageRegional.url,
        },
      ],
      validFrom: "2026-01-01",
      validTo: "2026-12-31",
      source: SRC.shortageNational,
      lastVerified: VERIFIED,
      note: "Lists are issued each year by regulation of the Federal Minister of Labour and Economics and apply for one calendar year. The 2027 regulation is expected for 1 January 2027.",
    },
    exemptsLabourMarketTest: true,
    note: "For the Red-White-Red Card for skilled workers in shortage occupations the AMS checks points, completed training in the listed occupation and adequate pay; no replacement worker procedure applies. Minimum wage: none, collective agreement minimum plus customary overpay applies.",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2026-01-01",
      source: SRC.family,
      lastVerified: VERIFIED,
      note: "Family of Red-White-Red Card and EU Blue Card holders apply for a Red-White-Red Card plus; quota free and no waiting period mentioned.",
    },
    blueCardImmediate: true,
    decisionDays: {
      value: 180,
      validFrom: "2026-01-01",
      source: SRC.family,
      lastVerified: VERIFIED,
      note: "Six months at the latest (NAG). The 2026 NAG amendment adds a general 90-day period for combined permits; whether it covers the Red-White-Red Card plus for family members should be checked in the enacted text.",
    },
    conditions: {
      value:
        "Sponsor needs fixed and regular income at the 2026 reference rate (EUR 1,308.39 single, EUR 2,064.12 couple, plus EUR 201.88 per child), adequate accommodation for the family size and health insurance covering all risks. Family members applying for a Red-White-Red Card plus need A1 German before entry, with exemptions for family of highly qualified workers and Blue Card holders and children under 14.",
      validFrom: "2026-01-01",
      source: SRC.family,
      lastVerified: VERIFIED,
    },
    source: SRC.family,
  },
  recast: {
    transposition: {
      value: "transposed",
      validFrom: "2026-08-07",
      source: SRC.nagNovelle,
      lastVerified: VERIFIED,
      note: "NAG and AuslBG amendment adopted by the Nationalrat on 20 May 2026, published as BGBl. I Nr. 81/2026 on 6 August 2026, in force the day after publication.",
    },
    decisionDays: {
      value: 90,
      validFrom: "2026-08-07",
      source: SRC.nagNovelle,
      lastVerified: VERIFIED,
      note: "New horizontal rule in the NAG: decision in principle within 90 days. The BMI still lists 8 weeks for first applications for the Red-White-Red Card and EU Blue Card.",
    },
    extensionDays: {
      value: 30,
      validFrom: "2026-08-07",
      source: SRC.committeeReport,
      lastVerified: VERIFIED,
      note: "Extension by 30 days where exceptional and sufficiently justified circumstances linked to the complexity of the application exist.",
    },
    changeOfEmployerByNotification: {
      value: true,
      validFrom: "2026-08-07",
      source: SRC.committeeReport,
      lastVerified: VERIFIED,
      note: "Holder notifies the intended change of employer and may start the new activity provisionally at the latest 45 days after the notification. Where the AMS is involved the same rule is in the AuslBG.",
    },
    unemploymentGraceMonths: {
      value: 6,
      validFrom: "2026-08-07",
      source: SRC.committeeReport,
      lastVerified: VERIFIED,
      note: "The combined permit may not be withdrawn for unemployment within the first six months from the start of unemployment; the period is extended under certain conditions.",
    },
    inCountryApplication: {
      value: true,
      validFrom: "2026-01-01",
      source: SRC.blueCard,
      lastVerified: VERIFIED,
      note: "After legal entry and during legal residence the applicant or the employer may file with the competent residence authority in Austria.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["German", "English"],
    swornTranslationRequired: true,
    criminalRecordMaxAgeMonths: null,
    source: SRC.documents,
  },
  validity: {
    value: {
      initialMonths: 24,
      renewalMonths: 12,
      note: "Red-White-Red Card and EU Blue Card are issued for 24 months. Renewal is a Red-White-Red Card plus, normally 12 months, or 36 months once Integration Agreement Module 1 is completed after two years of lawful settlement.",
    },
    validFrom: "2026-01-01",
    source: SRC.otherKeyWorkers,
    lastVerified: VERIFIED,
  },
  reviewNotes: [
    "Fachkräfteverordnung 2026 is BGBl. II Nr. 316/2025 according to secondary sources; the RIS (ris.bka.gv.at) returned HTTP 503 on every attempt, so the regulation text was not opened and the shortage lists are sourced from migration.gv.at.",
    "No statutory minimum wage in Austria; pay follows collective agreements. minimumWage is null for that reason.",
    "Austria applies no reduced EU Blue Card threshold for shortage occupations or recent graduates; blueCardReduced is null.",
    "Passport validity: a valid travel document is required, no minimum validity beyond the stay is published; field left null. Criminal record extract: requested case by case, no maximum age published (practice is about 3 months); field left null.",
    "Decision periods: the BMI page still lists 8 weeks for the Red-White-Red Card and EU Blue Card and six months as default; the NAG amendment of August 2026 introduces 90 days plus 30. The enacted BGBl. I Nr. 81/2026 text was not opened in RIS (503); figures come from oesterreich.gv.at and the parliamentary committee report 456 d.B.",
    "Salary figures for 2027 (Blue Card, other key workers) will be published around 1 January 2027.",
  ],
};
