import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const lei23 = {
  label: "PGD Lisboa: Lei n.º 23/2007 (Lei de Estrangeiros), texto consolidado",
  url: "https://pgdlisboa.pt/leis/lei_print_articulado.php?nid=920&tabela=leis",
};

const lei62 = {
  label: "Diário da República: Lei n.º 62/2026, de 10 de setembro (1.ª série, n.º 176)",
  url: "https://files.diariodarepublica.pt/1s/2026/09/17600/0006000111.pdf",
};

export const pt: CountryRules = {
  code: "pt",
  salary: {
    // Art. 121-B(1)(a) Lei 23/2007: at least 1.5 times the national average gross annual salary (1.2 times for
    // professions designated under art. 61-A(2)). No euro figure is published by AIMA or in the law. See reviewNotes.
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: null,
  },
  shortage: {
    list: null,
    exemptsLabourMarketTest: null,
    note: "Portugal has no official shortage occupation list. Art. 61-A(2) Lei 23/2007 allows a Council of Ministers resolution to designate ISCO 1 and 2 professions in particular need, which lowers the Blue Card threshold to 1.2 times the average salary; no such resolution was found.",
  },
  family: {
    waitingPeriodMonths: {
      value: 24,
      validFrom: "2025-10-22",
      source: lei23,
      lastVerified: V,
      note: "Art. 98.1 as amended by Lei 61/2025: residence permit valid for at least two years. 15 months for a spouse who cohabited at least 18 months before entry (98.2). No waiting period for minors, for the parent of a dependent minor, or for family of highly qualified and Blue Card holders (98.3).",
    },
    blueCardImmediate: true,
    decisionDays: {
      value: 270,
      validFrom: "2025-10-22",
      source: lei23,
      lastVerified: V,
      note: "Art. 105.1: nine months, extendable by an equal period in exceptional cases (105.2).",
    },
    conditions: {
      value:
        "Accommodation, owned or rented, normal for a comparable family in the same region and meeting safety and health standards; sufficient means of subsistence for all family members without recourse to social support, as defined by portaria (art. 101). Family members must then follow Portuguese language and civic integration measures.",
      validFrom: "2025-10-22",
      source: lei23,
      lastVerified: V,
    },
    source: lei23,
  },
  recast: {
    transposition: {
      value: "transposed",
      validFrom: "2026-09-11",
      source: lei62,
      lastVerified: V,
      note: "Lei 62/2026 transposes Directive (EU) 2024/1233 and amends Lei 23/2007; in force the day after publication (10 Sep 2026). Portugal missed the 21 May 2026 deadline.",
    },
    decisionDays: {
      value: 90,
      validFrom: "2026-09-11",
      source: lei62,
      lastVerified: V,
      note: "Art. 82.5 Lei 23/2007 as amended: residence permit decided within 90 days. Renewals within 60 days (82.6).",
    },
    extensionDays: {
      value: 30,
      validFrom: "2026-09-11",
      source: lei62,
      lastVerified: V,
      note: "Art. 82.5: extension of 30 days in exceptional, justified circumstances, notified to the applicant.",
    },
    changeOfEmployerByNotification: {
      value: true,
      validFrom: "2026-09-11",
      source: lei62,
      lastVerified: V,
      note: "Art. 88.8: the holder may change employer by communication to AIMA, without a new title.",
    },
    unemploymentGraceMonths: null,
    inCountryApplication: null,
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["Portuguese"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: lei23,
  },
  validity: {
    value: {
      initialMonths: 24,
      renewalMonths: 36,
      note: "Art. 75.1: temporary residence permit valid two years from issue, renewable for successive three-year periods.",
    },
    validFrom: "2025-10-22",
    source: lei23,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card threshold: art. 121-B(1)(a) Lei 23/2007 (as amended by Lei 53/2023) requires a contract of at least six months with annual pay of at least 1.5 times the national average gross annual salary, or 1.2 times for professions designated under art. 61-A(2). The residence visa route (art. 61-A) alternatively accepts three times the IAS. No authority publishes the resulting euro amount; secondary sources quote roughly 21,000 to 22,000 EUR per year. Left null.",
    "Minimum wage: Decreto-Lei n.º 139/2025, de 29 de dezembro, fixes the RMMG at 920 EUR per month from 1 Jan 2026 (870 EUR in 2025; Madeira 980 EUR by DLR 1/2026/M). The DGERT page (dgert.gov.pt/retribuicao-minima-mensal-garantida-para-2026) and the Diário da República page could not be opened (TLS error and empty response), so the field is null until confirmed.",
    "Unemployment tolerance and in-country applications for single permit holders were not found in the amended articles read (82, 88); Blue Card applicants legally present may apply at AIMA (art. 121-D.1). Left null.",
    "Documents: Lei 23/2007 only requires a valid travel document (arts. 52 and 121-B). Consular practice on criminal record age and certified (not sworn) translations was not confirmed on an official page.",
    "validFrom for Lei 23/2007 entries uses the date of Lei 61/2025 (22 Oct 2025), the last amendment of arts. 75, 98, 101 and 105 before Lei 62/2026; the two and three year durations in art. 75 predate it.",
  ],
};
