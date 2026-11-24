import type { CountryRules } from "../country-rules";

// Netherlands. The IND publishes the kennismigrant and EU Blue Card salary criteria as gross monthly
// amounts excluding holiday allowance, revised every 1 January. The statutory minimum wage is hourly since
// 2024; the IND publishes a monthly 'normbedrag' for paid employment which is recorded here.

const IND_NORMBEDRAGEN = {
  label: "IND: Inkomenseisen normbedragen (2026)",
  url: "https://ind.nl/nl/inkomenseisen-normbedragen",
};
const IND_NEWSLETTER_MAY_2026 = {
  label: "IND Nieuwsbrief Zakelijk 28 mei 2026: gevolgen van de herziene GVVA-richtlijn 2024/1233",
  url: "https://ind.nl/nl/documenten/07-2026/nieuwsbrief-zakelijk-28-mei-2026.pdf",
};
const IND_BESLISTERMIJNEN = {
  label: "IND: Beslistermijnen (laatst bijgewerkt 1 oktober 2026)",
  url: "https://ind.nl/nl/na-uw-aanvraag/beslistermijnen",
};
const IND_PARTNER = {
  label: "IND: Residence permit for partner",
  url: "https://ind.nl/en/residence-permits/family-and-partner/residence-permit-for-partner",
};

export const nl: CountryRules = {
  code: "nl",
  salary: {
    blueCard: [
      {
        value: {
          amount: 5942,
          currency: "EUR",
          period: "month",
          gross: true,
          note: "Europese blauwe kaart, gross per month excluding 8% holiday allowance (vakantietoeslag). Same amount for first permit, extension and change of employer.",
        },
        validFrom: "2026-01-01",
        validTo: "2026-12-31",
        source: IND_NORMBEDRAGEN,
        lastVerified: "2026-11-23",
        note: "Amounts change every 1 January; the 2027 amounts are expected in the IND newsletter of December 2026.",
      },
    ],
    blueCardReduced: [
      {
        value: {
          amount: 4754,
          currency: "EUR",
          period: "month",
          gross: true,
          note: "Verlaagd salariscriterium Europese blauwe kaart: graduates who apply within 3 years of completing a higher education programme. Gross per month excluding holiday allowance.",
        },
        validFrom: "2026-01-01",
        validTo: "2026-12-31",
        source: IND_NORMBEDRAGEN,
        lastVerified: "2026-11-23",
      },
    ],
    highlyQualified: [
      {
        value: {
          amount: 5942,
          currency: "EUR",
          period: "month",
          gross: true,
          note: "Kennismigrant aged 30 or older. Kennismigrant under 30: 4,357.00 per month (also kept after turning 30 when the employer change happened while under 30). Verlaagd salariscriterium (after zoekjaar hoogopgeleiden, recent graduates, essential start-up personnel): 3,122.00 per month. All gross per month excluding holiday allowance; fixed allowances and a contractual 13th month count, holiday allowance does not.",
        },
        validFrom: "2026-01-01",
        validTo: "2026-12-31",
        source: IND_NORMBEDRAGEN,
        lastVerified: "2026-11-23",
        note: "Kennismigrantenregeling (highly skilled migrant). The amount applicable is the one valid on the application date. The salary must also be market-conform.",
      },
    ],
    minimumWage: [
      {
        value: {
          amount: 2294.4,
          currency: "EUR",
          period: "month",
          gross: true,
          note: "IND normbedrag for 'arbeid in loondienst, algemeen' (gross sv-loon per month, excluding holiday allowance; 2,477.95 including). Equals the statutory minimum wage reference used by the IND.",
        },
        validFrom: "2026-01-01",
        validTo: "2026-06-30",
        source: IND_NORMBEDRAGEN,
        lastVerified: "2026-11-23",
      },
      {
        value: {
          amount: 2337,
          currency: "EUR",
          period: "month",
          gross: true,
          note: "IND normbedrag for 'arbeid in loondienst, algemeen' (gross sv-loon per month, excluding holiday allowance; 2,523.96 including). Statutory minimum wage itself is hourly: 14.71 per hour from 1 January 2026 and 14.99 per hour from 1 July 2026 for age 21 and over (rijksoverheid.nl); no fixed monthly minimum exists since 2024.",
        },
        validFrom: "2026-07-01",
        validTo: "2026-12-31",
        source: IND_NORMBEDRAGEN,
        lastVerified: "2026-11-23",
        note: "Hourly statutory rate source: https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026 (opened 2026-11-23). Not converted; the IND monthly norm is recorded as published.",
      },
    ],
  },
  shortage: {
    list: null,
    exemptsLabourMarketTest: null,
    note: "The Netherlands has no official shortage occupation list for work permits. The GVVA (single permit) for ordinary paid employment requires a UWV labour market test; the kennismigrant and EU Blue Card routes are exempt from it by design.",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2026-01-01",
      source: IND_PARTNER,
      lastVerified: "2026-11-24",
      note: "A sponsor with a valid Dutch residence permit may apply at once. Only a sponsor who is subject to the civic integration obligation must have lived in the Netherlands for at least 1 year with a valid permit (not applicable to labour migrants such as kennismigranten).",
    },
    blueCardImmediate: true,
    decisionDays: {
      value: 90,
      validFrom: "2026-01-01",
      source: IND_PARTNER,
      lastVerified: "2026-11-24",
      note: "Statutory period 90 days; the IND may extend it, in general by several weeks up to a maximum of 6 months. 9 months only for family of asylum permit holders.",
    },
    conditions: {
      value:
        "Sponsor and partner both aged 21 or over (18 if already married before living outside the Netherlands), registered at the same address, and the sponsor must have independent, sustainable and sufficient income of at least the IND normbedrag for a couple (2,337.00 gross per month excluding holiday allowance from 1 July to 31 December 2026). No separate housing requirement; the partner must pass the civic integration exam abroad before the MVV application unless exempt.",
      validFrom: "2026-07-01",
      source: IND_PARTNER,
      lastVerified: "2026-11-24",
    },
    source: IND_PARTNER,
  },
  recast: {
    transposition: {
      value: "pending",
      validFrom: "2026-06-03",
      source: {
        label: "Eerste Kamer: brief van de minister van Buitenlandse Zaken over de stand van de implementatie van EU-richtlijnen (10 november 2026), Kamerstukken 21 109",
        url: "https://www.eerstekamer.nl/behandeling/20261110/brief_van_de_minister_van_bz_over/document3/f=/vn2kcga113ji.pdf",
      },
      lastVerified: "2026-11-23",
      note: "Implementatiewet GVVA-richtlijn 2024 (Kamerstukken 36958) submitted to the Tweede Kamer on 3 June 2026; nota naar aanleiding van het verslag sent 30 October 2026. Not yet adopted. The IND applies the directive's periods administratively since 22 May 2026 (newsletter of 28 May 2026). The Commission sent a letter of formal notice on 15 July 2026.",
    },
    decisionDays: {
      value: 90,
      validFrom: "2026-05-22",
      source: IND_BESLISTERMIJNEN,
      lastVerified: "2026-11-24",
      note: "90 days for arbeid in loondienst and arbeid als kennismigrant. Recognised sponsors: target of 2 weeks in practice. Change of employer or of residence purpose within the validity of the permit: 45 days, extendable by 15 days; 30 days for EU Blue Card holders.",
    },
    extensionDays: {
      value: 30,
      validFrom: "2026-05-22",
      source: IND_NEWSLETTER_MAY_2026,
      lastVerified: "2026-11-24",
      note: "From 22 May 2026 the IND may extend the statutory period for a first work-related application by 30 days with reasons (for example additional research).",
    },
    changeOfEmployerByNotification: {
      value: false,
      validFrom: "2026-05-22",
      source: IND_NEWSLETTER_MAY_2026,
      lastVerified: "2026-11-24",
      note: "A change of employer is an application assessed by the IND within 45 days (15-day extension possible; 30 days for Blue Card). If no decision is taken in time the holder may work for the new employer by operation of law for the remaining validity.",
    },
    unemploymentGraceMonths: {
      value: 3,
      validFrom: "2026-05-22",
      source: IND_NEWSLETTER_MAY_2026,
      lastVerified: "2026-11-24",
      note: "Search period of 3 months; 6 months when the permit has been held for 2 years or more or in case of labour exploitation, never longer than the permit's validity.",
    },
    inCountryApplication: {
      value: true,
      validFrom: "2026-05-22",
      source: IND_NEWSLETTER_MAY_2026,
      lastVerified: "2026-11-24",
      note: "Holders of a residence permit may apply in-country for a change of employer or of residence purpose to a work-related purpose (45-day period). First applicants from MVV-required countries apply through the TEV procedure (sponsor applies in the Netherlands, MVV issued abroad).",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["Dutch", "English", "French", "German"],
    swornTranslationRequired: true,
    criminalRecordMaxAgeMonths: null,
    source: {
      label: "IND application form 7527 (2026): rules on language, sworn translation and legalisation of foreign documents",
      url: "https://ind.nl/en/forms/7527.pdf",
    },
  },
  validity: {
    value: {
      initialMonths: 60,
      renewalMonths: null,
      note: "Kennismigrant permit: same period as the contract, maximum 5 years; renewal follows the new contract. EU Blue Card and GVVA validity were not confirmed on an opened IND page.",
    },
    validFrom: "2026-01-01",
    source: {
      label: "IND: Residence permit for work as a highly skilled migrant",
      url: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant",
    },
    lastVerified: "2026-11-23",
  },
  reviewNotes: [
    "Kennismigrant 2026 thresholds confirmed on the IND normbedragen page: 5,942.00 (30 and over), 4,357.00 (under 30), 3,122.00 (verlaagd salariscriterium), EU Blue Card 5,942.00 and reduced Blue Card 4,754.00, all gross per month excluding holiday allowance. The engine field highlyQualified holds the 30-and-over figure; the under-30 and reduced figures are in its note because the type holds one amount per entry.",
    "Minimum wage: the statutory minimum is hourly (14.71 from 1 January 2026, 14.99 from 1 July 2026, age 21 and over) and the government publishes no fixed monthly amount since 2024. The monthly figures recorded are the IND normbedragen for paid employment, which the IND uses as the minimum wage reference for residence permits. If a strict statutory monthly figure is required, set this field to null.",
    "Decision periods: the IND applies the recast directive since 22 May 2026 without the implementing act being in force (Implementatiewet GVVA-richtlijn 2024, Kamerstukken 36958). Re-check once the act is adopted; the IND beslistermijnen page was last updated 1 October 2026.",
    "Passport: the IND requires the passport to be valid for at least 6 months when the MVV sticker is placed; no 'beyond the stay' rule is published, so passportValidityBeyondStayMonths is null.",
    "Criminal record: the Netherlands does not require a criminal record extract for work-related permits; the applicant signs an antecedentenverklaring instead, so criminalRecordMaxAgeMonths is null.",
    "EU Blue Card validity (up to 4 years under the directive) and GVVA validity (up to 3 years) were not confirmed on an opened IND page; the IND Blue Card page URL returned 404.",
    "2027 normbedragen are published by the IND in December; the entries above carry validTo 2026-12-31 and must be extended or replaced.",
  ],
};
