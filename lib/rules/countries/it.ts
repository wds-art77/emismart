import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const tuiArt29 = {
  label: "Normattiva: D.Lgs. 286/1998 (Testo Unico immigrazione), art. 29",
  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286~art29",
};
const tuiArt5 = {
  label: "Normattiva: D.Lgs. 286/1998 (Testo Unico immigrazione), art. 5",
  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286~art5",
};
const tuiArt22 = {
  label: "Normattiva: D.Lgs. 286/1998 (Testo Unico immigrazione), art. 22",
  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286~art22",
};
const dlgs83 = {
  label: "Gazzetta Ufficiale: Decreto Legislativo 16 aprile 2026, n. 83 (attuazione direttiva (UE) 2024/1233)",
  url: "https://www.gazzettaufficiale.it/eli/id/2026/05/20/26G00100/sg",
};

export const it: CountryRules = {
  code: "it",
  salary: {
    // Art. 27-quater(5)(c): salary not below the national collective agreement and in any case not below the ISTAT
    // average gross annual salary. No euro figure is published officially. See reviewNotes.
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: null,
  },
  shortage: {
    list: null,
    exemptsLabourMarketTest: null,
    note: "Italy has no shortage occupation list. Entry for employed work is governed by yearly quotas (Decreto Flussi); categories under art. 27 and the Blue Card (art. 27-quater) are outside the quotas.",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2025-10-04",
      source: tuiArt29,
      lastVerified: V,
      note: "No residence period. The sponsor must hold a residence permit valid at least one year (art. 28.1), for work, family, asylum or study.",
    },
    blueCardImmediate: null,
    decisionDays: {
      value: 150,
      validFrom: "2025-10-04",
      source: tuiArt29,
      lastVerified: V,
      note: "Art. 29.8: the nulla osta for family reunification is issued within 150 days of the request.",
    },
    conditions: {
      value:
        "Annual income from lawful sources of at least the annual assegno sociale plus half of that amount per family member (twice the assegno sociale for two or more children under 14), counting income of cohabiting family members. Housing meeting hygiene and health standards and suitable for the household, certified by the municipality (art. 29.3).",
      validFrom: "2025-10-04",
      source: tuiArt29,
      lastVerified: V,
    },
    source: tuiArt29,
  },
  recast: {
    transposition: {
      value: "transposed",
      validFrom: "2026-06-04",
      source: dlgs83,
      lastVerified: V,
      note: "D.Lgs. 83/2026 (GU n. 115, 20 May 2026) amends arts. 4-bis, 5 and 22 of the Testo Unico; in force 4 June 2026.",
    },
    decisionDays: {
      value: 90,
      validFrom: "2026-06-04",
      source: tuiArt5,
      lastVerified: V,
      note: "Art. 5.9: residence permit issued, renewed or converted within 90 days of the application. New art. 5.8.1-bis: the permesso unico is issued by the Questore within 30 days of completion of the application. Nulla osta: 60 days (art. 22.5).",
    },
    extensionDays: null,
    changeOfEmployerByNotification: null,
    unemploymentGraceMonths: {
      value: 12,
      validFrom: "2026-06-04",
      source: tuiArt22,
      lastVerified: V,
      note: "Art. 22.11: loss of employment is not a ground for withdrawal; the worker may register as available for work and keep the permit for not less than one year, or longer while receiving income support.",
    },
    inCountryApplication: null,
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["Italian"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: tuiArt22,
  },
  validity: {
    value: {
      initialMonths: 24,
      renewalMonths: 36,
      note: "Art. 5.3-bis: up to one year for fixed-term and up to two years for open-ended contracts; each renewal up to three years. Blue Card: two years for open-ended contracts (art. 27-quater.11).",
    },
    validFrom: "2026-06-04",
    source: tuiArt5,
    lastVerified: V,
    note: "validFrom is the date of the text read (after D.Lgs. 83/2026); the three-year renewal cap was introduced by DL 145/2024.",
  },
  reviewNotes: [
    "Blue Card threshold: art. 27-quater(5)(c) sets a floor by reference (not below the CCNL pay and not below the ISTAT average gross annual salary). No ministry publishes the euro result; law firms quote about 36,300 EUR for 2026 (about 35,500 EUR earlier). Left null; confirm the ISTAT series used by the Sportello Unico.",
    "No statutory minimum wage in Italy; wages follow national collective agreements (CCNL).",
    "Change of employer: not addressed in the amended art. 22 text read; in practice a new contratto di soggiorno and the employer's comunicazione obbligatoria are needed, not a new permit. Left null pending an official statement.",
    "In-country applications: art. 22 covers workers resident abroad; conversions from study or other permits exist in art. 6. Left null.",
    "Documents: the Testo Unico does not fix passport validity, criminal record age or translation rules for the work permit; consular visa rules (Decreto interministeriale 850/2011) were not opened.",
  ],
};
