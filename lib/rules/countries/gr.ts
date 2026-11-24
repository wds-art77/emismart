import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

// Law 5275/2026 (Government Gazette A' 17, 6 Feb 2026) read on taxheaven.gr, which reproduces the gazette text
// article by article; the parliament and gazette copies could not be opened in this pass. See reviewNotes.
const law5275 = {
  label: "Νόμος 5275/2026 (ΦΕΚ Α' 17/06.02.2026), transposition of Directive (EU) 2024/1233, text on taxheaven.gr",
  url: "https://www.taxheaven.gr/law/5275/2026",
};
const law5275Art5 = { label: "Νόμος 5275/2026, άρθρο 5 (new art. 81A Immigration Code)", url: "https://www.taxheaven.gr/law/5275/2026/arthro/5" };
const law5275Art6 = { label: "Νόμος 5275/2026, άρθρο 6 (replaces art. 82 Immigration Code)", url: "https://www.taxheaven.gr/law/5275/2026/arthro/6" };
const law5275Art21 = { label: "Νόμος 5275/2026, άρθρο 21 (amends art. 61 Immigration Code)", url: "https://www.taxheaven.gr/law/5275/2026/arthro/21" };
const mitosE4 = {
  label: "mitos.gov.gr: Residence permit following approval of an invitation for dependent employment, initial granting (E.4)",
  url: "https://en.mitos.gov.gr/index.php/ΔΔ:Residence_permit_following_approval_of_an_invitation_for_dependent_employment_–_Initial_granting_(‘E.4’)",
};

export const gr: CountryRules = {
  code: "gr",
  salary: {
    // mitos.gov.gr (E.1 permit): the minimum wage for highly qualified employment equals 1.6 times the average
    // gross annual salary in Greece; no euro figure is published on the official page. See reviewNotes.
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: null,
  },
  shortage: {
    list: null,
    exemptsLabourMarketTest: null,
    note: "Greece has no shortage occupation list. Admission volumes for dependent, highly skilled and seasonal work are set by joint ministerial decision (art. 26 Immigration Code, as amended by Law 5275/2026 art. 17).",
  },
  family: {
    waitingPeriodMonths: null,
    blueCardImmediate: null,
    decisionDays: null,
    conditions: null,
    source: null,
  },
  recast: {
    transposition: {
      value: "transposed",
      validFrom: "2026-02-06",
      source: law5275,
      lastVerified: V,
      note: "Law 5275/2026, chapter B (arts. 3 to 8), transposes Directive (EU) 2024/1233 into Law 5038/2023 (Immigration Code). Published 6 Feb 2026.",
    },
    decisionDays: {
      value: 90,
      validFrom: "2026-02-06",
      source: law5275Art5,
      lastVerified: V,
      note: "New art. 81A: decision within 90 days of a complete application; suspended while supplementary documents are requested (up to two months).",
    },
    extensionDays: {
      value: 30,
      validFrom: "2026-02-06",
      source: law5275Art5,
      lastVerified: V,
      note: "New art. 81A: 30-day extension in exceptional, justified cases linked to complexity, notified via the Μετανάστευση platform.",
    },
    changeOfEmployerByNotification: {
      value: true,
      validFrom: "2026-02-06",
      source: law5275Art6,
      lastVerified: V,
      note: "New art. 82(2)-(4): the holder may change employer by notifying the one-stop service, which decides within 45 days (deemed accepted otherwise); the first contract must be completed, up to six months.",
    },
    unemploymentGraceMonths: {
      value: 3,
      validFrom: "2026-02-06",
      source: law5275Art6,
      lastVerified: V,
      note: "New art. 82(5): unemployment up to three months in total is not a ground for withdrawal; six months after two years of holding the permit; three more months where abusive working conditions are found (82(7)).",
    },
    inCountryApplication: {
      value: true,
      validFrom: "2026-02-06",
      source: law5275Art5,
      lastVerified: V,
      note: "New art. 81A covers applicants abroad (art. 26 procedure) and holders of a valid residence permit already in Greece.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["Greek"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: mitosE4,
  },
  validity: {
    value: {
      initialMonths: 36,
      renewalMonths: 60,
      note: "Art. 61(5) Immigration Code as amended by Law 5275/2026 art. 21: E.4 permit valid three years, renewed for five years each time. Blue Card: three years, renewed for three years (art. 34(2) as amended by art. 19).",
    },
    validFrom: "2026-02-06",
    source: law5275Art21,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card threshold: the official E.1 permit page on mitos.gov.gr states the minimum salary for highly qualified employment is 1.6 times the average gross annual salary in Greece but gives no euro amount and names no ministerial decision fixing it. Secondary sources quote 31,918.83 EUR for 2024 and estimate about 33,000 EUR for 2026. Left null until the joint ministerial decision is located.",
    "Minimum wage: ministerial decision 8934/2026 (ΦΕΚ Β' 1759/27.03.2026) sets 920 EUR per month for employees and 41.09 EUR per day for workers from 1 April 2026 (previously 880 EUR). It was read on taxheaven.gr; the ypergasias.gov.gr and gazette pages could not be opened, so the field is null until confirmed on an official page.",
    "Family reunification: art. 84 Law 5038/2023 (per taxheaven.gr snippets, paywalled) requires two years of legal residence and stable income not below the annual net minimum-wage income plus 20% for the spouse and 15% per child, adequate accommodation and full health insurance; the decision period in art. 85 was not readable. The mitos.gov.gr family reunification page returned HTTP 403. All family fields left null.",
    "Recast entries rely on taxheaven.gr's reproduction of Law 5275/2026; the Hellenic Parliament PDF (hellenicparliament.gr/UserFiles/.../13185350.pdf) returned HTTP 403. Verify against ΦΕΚ Α' 17/2026 before relying on the day counts.",
    "Documents: the E.4 page lists a travel document with national visa, a contract of at least one year, recruitment announcement, insurance certificate and photo; no passport validity, criminal record age or translation rule is stated.",
    "Law 5275/2026 art. 2 announces a minimum two-year validity for every residence permit issued; the E.4 and Blue Card durations above come from the specific articles.",
  ],
};
