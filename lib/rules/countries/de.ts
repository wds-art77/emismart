import type { CountryRules } from "../country-rules";

// Germany. Blue Card thresholds are fractions of the pension insurance contribution ceiling and are
// announced each December in the Bundesanzeiger (§ 18g Abs. 7 AufenthG). The statutory minimum wage is
// hourly only, so minimumWage is null (no conversion). The recast single permit directive is partly
// implemented by the MDWG (BGBl. 2026 I Nr. 222).

const BANZ_2026 = {
  label: "Bundesanzeiger BAnz AT 18.12.2025 B3: Bekanntmachung zu § 18g AufenthG über die Mindestgehälter für die Blaue Karte EU für 2026 (BMI, 2. Dezember 2025)",
  url: "https://www.bundesanzeiger.de/pub/publication/REViP4bN6jVdpGxPaiQ/content/REViP4bN6jVdpGxPaiQ/BAnz%20AT%2018.12.2025%20B3.pdf",
};
const BAMF_FAMILY = {
  label: "BAMF: Nachzug zu Drittstaatsangehörigen",
  url: "https://www.bamf.de/DE/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/Familie/NachzugZuDrittstaatlern/nachzug-zu-drittstaatlern-node.html",
};
const BAMF_BLUE_CARD = {
  label: "BAMF: EU Blue Card (Blaue Karte EU)",
  url: "https://www.bamf.de/EN/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/Migrathek/BlaueKarteEU/blauekarteeu-node.html",
};
const BT_DRS_21_7004 = {
  label: "Deutscher Bundestag, Drucksache 21/7004 (8. Juli 2026): Beschlussempfehlung und Bericht des Innenausschusses zum MDWG, Artikel 13 (Umsetzung der Richtlinie (EU) 2024/1233, neuer § 18 Abs. 5 AufenthG)",
  url: "https://dserver.bundestag.de/btd/21/070/2107004.pdf",
};
const BGBL_222 = {
  label: "Bundesgesetzblatt 2026 I Nr. 222 (28.07.2026): Migrationsverwaltungsdigitalisierungsweiterentwicklungsgesetz (MDWG) vom 22. Juli 2026",
  url: "https://www.recht.bund.de/bgbl/1/2026/222/VO.html",
};

export const de: CountryRules = {
  code: "de",
  salary: {
    blueCard: [
      {
        value: {
          amount: 50700,
          currency: "EUR",
          period: "year",
          gross: true,
          note: "§ 18g Abs. 1 Satz 1 AufenthG: 50% of the annual contribution assessment ceiling in the general pension insurance (Beitragsbemessungsgrenze 2026: 101,400 EUR). Contract or binding offer of at least 6 months. No Federal Employment Agency approval needed in the visa procedure at this level.",
        },
        validFrom: "2026-01-01",
        validTo: "2026-12-31",
        source: BANZ_2026,
        lastVerified: "2026-11-23",
        note: "2025 threshold was 48,300 EUR. The 2027 amount follows from the 2027 Beitragsbemessungsgrenze and is announced in the Bundesanzeiger in December 2026.",
      },
    ],
    blueCardReduced: [
      {
        value: {
          amount: 45934.2,
          currency: "EUR",
          period: "year",
          gross: true,
          note: "§ 18g Abs. 1 Satz 2 and Abs. 2 AufenthG: 45.3% of the contribution assessment ceiling. Applies to shortage occupations (Mangelberufe), to graduates whose degree is not older than 3 years, and to IT specialists without a formal degree with at least 3 years of experience.",
        },
        validFrom: "2026-01-01",
        validTo: "2026-12-31",
        source: BANZ_2026,
        lastVerified: "2026-11-23",
      },
    ],
    highlyQualified: null,
    minimumWage: null,
  },
  shortage: {
    list: {
      value: [
        {
          name: "Mangelberufe für die Blaue Karte EU, § 18g Abs. 1 Satz 2 AufenthG (ISCO-08 groups: managers in production and services, STEM professionals, ICT professionals, medical doctors, dentists, pharmacists, veterinarians, nursing and midwifery professionals, teachers)",
          scope: "national",
          url: "https://www.gesetze-im-internet.de/aufenthg_2004/__18g.html",
        },
      ],
      validFrom: "2023-11-18",
      source: BANZ_2026,
      lastVerified: "2026-11-23",
      note: "The list is written into the statute (Fachkräfteeinwanderungsgesetz 2023) and triggers the reduced Blue Card threshold; it is not a labour market test list. The gesetze-im-internet.de page returned HTTP 503 during verification; the group description above is from the research background and should be checked against § 18g.",
    },
    exemptsLabourMarketTest: null,
    note: "Germany has no general shortage list that waives Federal Employment Agency involvement. The priority check (Vorrangprüfung) was abolished for skilled workers in 2020; the Agency's approval (Zustimmung) still checks working conditions, except for Blue Cards at or above the general threshold (50,700 EUR in 2026) where no approval is sought in the visa procedure.",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2024-06-01",
      source: BAMF_FAMILY,
      lastVerified: "2026-11-23",
      note: "The sponsor must already hold a valid residence title; no minimum period of prior residence applies to holders of a work-related residence title.",
    },
    blueCardImmediate: true,
    decisionDays: null,
    conditions: {
      value:
        "Secured livelihood for the whole family and sufficient living space; spouses must normally show basic German (A1) before entry. For family of skilled workers and Blue Card holders the language proof before entry and the living space proof are waived (since 1 June 2024); family already united in another EU state with a Blue Card holder only needs health insurance. Spouses of Blue Card holders may work without restriction.",
      validFrom: "2024-06-01",
      source: BAMF_FAMILY,
      lastVerified: "2026-11-23",
    },
    source: BAMF_FAMILY,
  },
  recast: {
    transposition: {
      value: "partial",
      validFrom: "2026-07-28",
      source: BGBL_222,
      lastVerified: "2026-11-24",
      note: "The MDWG (Bundestag 9 July 2026, promulgated BGBl. 2026 I Nr. 222 of 28 July 2026) implements Article 11(4) and (6) of Directive (EU) 2024/1233 through a new § 18 Abs. 5 AufenthG and an amended § 18 Abs. 4 (Drucksache 21/7004, Artikel 13). No statutory 90-day decision period and no simplified employer change have been enacted; the Commission sent Germany a letter of formal notice on 15 July 2026.",
    },
    decisionDays: null,
    extensionDays: null,
    changeOfEmployerByNotification: {
      value: false,
      validFrom: "2024-06-01",
      source: BAMF_BLUE_CARD,
      lastVerified: "2026-11-24",
      note: "Work-related residence permits (§§ 18a, 18b AufenthG) are issued for a specific employment and a change requires the foreigners authority's permission. Blue Card holders only report a change of employer during the first 12 months; the authority may suspend the change for 30 days and reject it within that period.",
    },
    unemploymentGraceMonths: {
      value: 6,
      validFrom: "2026-07-28",
      source: BT_DRS_21_7004,
      lastVerified: "2026-11-24",
      note: "New § 18 Abs. 5 AufenthG: when employment ends early and is reported, the subsequent shortening of the permit must leave at least 6 months of validity from the end of employment (9 months where there are sufficient grounds to assume particularly exploitative working conditions). Germany does not differentiate between the directive's 3 and 6 months. § 18 Abs. 4: permits for fixed-term employment now run 6 months (previously 3) beyond the contract. Exact entry into force per Artikel 18 MDWG not read; promulgation date used.",
    },
    inCountryApplication: null,
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["German", "English"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: {
      label: "Auswärtiges Amt, Deutsche Botschaft Addis Abeba: Visum für die Aufnahme einer Erwerbstätigkeit (Unterlagen)",
      url: "https://addis-abeba.diplo.de/et-de/service/05-visaeinreise/erwerbstaetigkeit-2441124",
    },
  },
  validity: {
    value: {
      initialMonths: 48,
      renewalMonths: null,
      note: "EU Blue Card: issued for four years as a matter of principle; if the contract is shorter, for the contract period plus three months. Skilled worker permits (§§ 18a, 18b): up to four years; for fixed-term contracts the contract period plus six months since the MDWG (previously plus three months). Renewal length not stated on the pages opened.",
    },
    validFrom: "2026-01-01",
    source: BAMF_BLUE_CARD,
    lastVerified: "2026-11-24",
  },
  reviewNotes: [
    "Minimum wage: Germany's statutory minimum wage is 13.90 EUR per hour from 1 January 2026 (BMAS, https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Mindestlohn/mindestlohn.html, opened 2026-11-23); the Mindestlohnkommission decision provides 14.60 EUR from 1 January 2027 (not shown on the BMAS page opened). No official monthly or yearly amount exists and the brief forbids conversion, so minimumWage is null.",
    "highlyQualified is null: Germany has no national highly qualified threshold distinct from the Blue Card. Note the separate rule for skilled workers aged 45 and over (§ 18 Abs. 2 Nr. 5 AufenthG: 55% of the contribution assessment ceiling, 55,770 EUR in 2026 by calculation) which was not confirmed on an opened official page and is not recorded.",
    "Shortage occupations: § 18g AufenthG on gesetze-im-internet.de returned HTTP 503 on both verification days; the Bundesanzeiger notice confirms the reduced threshold for § 18g Abs. 1 Satz 2 occupations but does not list them. Verify the ISCO groups against the statute.",
    "Family reunification: German law sets no statutory decision period for family visas, so decisionDays is null. Blue Card privileges (no language requirement, unrestricted work for spouses) are confirmed on the BAMF Blue Card page.",
    "Recast: the MDWG promulgation (BGBl. 2026 I Nr. 222, Ausfertigung 22 July 2026, Verkündung 28 July 2026) is confirmed on recht.bund.de, but the entry-into-force article was not readable (PDF blocked); secondary reports say most provisions entered into force on 29 July 2026. The 90-day decision period, the 30-day extension and a simplified employer change are not in German law; they are left null rather than filled from the directive.",
    "In-country application: foreigners legally resident with a residence title may apply at the Ausländerbehörde, and nationals of privileged states may apply after visa-free entry (§ 41 AufenthV), but no official page stating this was opened; null.",
    "Documents: requirements are set by each German mission. The Addis Abeba mission requires a passport valid at least 3 months beyond the planned trip and translations of documents not in German or English by a recognised translator; other missions require 6 to 12 months of passport validity. No uniform federal rule, hence null for passport and sworn translation. Germany does not generally require a criminal record extract for work visas.",
    "Blue Card 2027 thresholds will be announced in the Bundesanzeiger in December 2026 (50% and 45.3% of the 2027 Beitragsbemessungsgrenze).",
  ],
};
