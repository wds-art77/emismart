import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const HE_2025_49 = {
  label: "Hivatalos Értesítő 2025/49 (30 October 2025): notice of the Minister for National Economy on the minimum wage for EU Blue Card holders in 2026 (PDF)",
  url: "https://magyarkozlony.hu/dokumentumok/c1ce95a43d51902e5df82d7da403b48c75c7dd4c/letoltes",
};
const NJT_MIN_WAGE = {
  label: "Nemzeti Jogszabálytár: Government Decree 426/2025 (XII. 23.) on the minimum wage and guaranteed wage minimum",
  url: "https://njt.jog.gov.hu/jogszabaly/2025-426-20-22",
};
const EU_PORTAL_WORKER = {
  label: "EU Immigration Portal: employed worker, Hungary",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-hungary_en",
};
const EU_PORTAL_BLUE_CARD = {
  label: "EU Immigration Portal: EU Blue Card, Hungary",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-hungary_en",
};
const EU_PORTAL_FAMILY = {
  label: "EU Immigration Portal: family member, Hungary",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/family-member-hungary_en",
};
const PRESS_INFRINGEMENT = {
  label: "The Local (press): Commission letters of formal notice on Directive (EU) 2024/1233, 17 July 2026",
  url: "https://www.thelocal.de/20260717/eu-launches-legal-action-against-17-member-states-over-new-single-permit-rules",
};

export const hu: CountryRules = {
  code: "hu",
  salary: {
    blueCard: [
      {
        value: {
          amount: 1001048,
          currency: "HUF",
          period: "month",
          gross: true,
          note: "Minimum monthly pay under section 3(1) of NGM Decree 44/2011 (XII. 16.) for 2026.",
        },
        validFrom: "2026-01-01",
        validTo: "2026-12-31",
        source: HE_2025_49,
        lastVerified: V,
        note: "Set yearly by ministerial notice; applies to applications decided in 2026.",
      },
    ],
    blueCardReduced: [
      {
        value: {
          amount: 800838,
          currency: "HUF",
          period: "month",
          gross: true,
          note: "Lower minimum under section 3(2) of NGM Decree 44/2011 for the occupations listed in the decree (for example certain health professions).",
        },
        validFrom: "2026-01-01",
        validTo: "2026-12-31",
        source: HE_2025_49,
        lastVerified: V,
      },
    ],
    highlyQualified: null,
    minimumWage: [
      {
        value: { amount: 322800, currency: "HUF", period: "month", gross: true, note: "Guaranteed wage minimum for jobs requiring at least secondary education: 373 200 HUF." },
        validFrom: "2026-01-01",
        source: NJT_MIN_WAGE,
        lastVerified: V,
      },
    ],
  },
  shortage: {
    list: null,
    exemptsLabourMarketTest: null,
    note: "No shortage occupation list found on official pages. Guest worker permits are limited to nationalities and occupations set by government decree; the Blue Card lower threshold applies to occupations listed in NGM Decree 44/2011.",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
      note: "No prior residence period for eligible sponsors. Holders of guest worker, seasonal, investment, White Card, study, traineeship and volunteer permits cannot sponsor; guest self-employed only after 1 year.",
    },
    blueCardImmediate: true,
    decisionDays: null,
    conditions: {
      value:
        "Proof of sufficient financial resources, accommodation and health insurance; no fixed amounts are published. Family permit up to 3 years (4 years for family of Blue Card or Corporate Card holders).",
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
    },
    source: EU_PORTAL_FAMILY,
  },
  recast: {
    transposition: {
      value: "pending",
      validFrom: "2026-05-22",
      source: PRESS_INFRINGEMENT,
      lastVerified: V,
      note: "Hungary is among the 17 Member States sent a letter of formal notice in July 2026 for not communicating transposition.",
    },
    decisionDays: {
      value: 90,
      validFrom: "2025-08-05",
      source: EU_PORTAL_WORKER,
      lastVerified: V,
      note: "Maximum 90 days per the EU Immigration Portal; Act XC of 2023 sets a general 21-day deadline extendable once by 21 days.",
    },
    extensionDays: null,
    changeOfEmployerByNotification: {
      value: false,
      validFrom: "2025-08-05",
      source: EU_PORTAL_WORKER,
      lastVerified: V,
      note: "A change of employment requires a new residence permit application.",
    },
    unemploymentGraceMonths: null,
    inCountryApplication: null,
  },
  documents: {
    passportValidityBeyondStayMonths: {
      value: 3,
      validFrom: "2025-08-05",
      source: EU_PORTAL_WORKER,
      lastVerified: V,
    },
    acceptedLanguages: [],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: EU_PORTAL_WORKER,
  },
  validity: {
    value: { initialMonths: null, renewalMonths: null, note: "Validity differs by permit type; the employment permit carries a 3-year ceiling. Blue Card: 1 to 4 years, renewable by 4 years." },
    validFrom: "2025-04-01",
    source: EU_PORTAL_BLUE_CARD,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card 2026 figures (1 001 048 HUF and 800 838 HUF per month) are read from the official Hivatalos Értesítő PDF. The EU Immigration Portal still shows 2024 figures (773 649 HUF and 618 919 HUF per month).",
    "Hungarian Card: no distinct published salary threshold found; the general rule of 80% of the KSH average wage for the FEOR code is reported by advisers only and is not recorded.",
    "Recast: Hungary's single permit rules (Act XC of 2023) require a new permit within 5 days of job loss and give no unemployment grace period or change of employer by notification; transposition status rests on press coverage of the July 2026 infringement package. OIF pages (oif.gov.hu) returned 403 and could not be checked.",
    "Family decision period, in-country application, accepted document languages, translation and criminal record age could not be confirmed on official pages.",
  ],
};
