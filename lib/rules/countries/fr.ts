import type { CountryRules } from "../country-rules";

// France. Thresholds for the 'talent' cards are multiples of the salaire brut moyen annuel de référence
// set by arrêté (21 August 2025: 39,582 EUR). The décret n° 2026-1001 of 26 October 2026 applies part of
// Directive (EU) 2024/1233 from 30 October 2026.

const SP_TALENT = {
  label: "Service-Public: Carte de séjour pluriannuelle talent (dont talent - carte bleue européenne)",
  url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16922",
};
const SP_SMIC = {
  label: "Service-Public: Smic (salaire minimum de croissance), montants",
  url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2300",
};
const SP_AUTORISATION = {
  label: "Service-Public: Autorisation de travail d'un salarié étranger en France",
  url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2734",
};
const SP_RF = {
  label: "Service-Public: Regroupement familial",
  url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11166",
};
const SP_DECRET_2026_1001 = {
  label: "Service-Public actualité A19128 (6 novembre 2026): nouvelles règles sur le droit au travail et au séjour des étrangers, décret n° 2026-1001 du 26 octobre 2026",
  url: "https://www.service-public.gouv.fr/particuliers/actualites/A19128",
};

export const fr: CountryRules = {
  code: "fr",
  salary: {
    blueCard: [
      {
        value: {
          amount: 59373,
          currency: "EUR",
          period: "year",
          gross: true,
          note: "Carte talent - carte bleue européenne: at least 1.5 times the salaire brut moyen annuel de référence (39,582 EUR, arrêté du 21 août 2025, JORF 31 août 2025). Contract of at least 6 months.",
        },
        validFrom: "2025-09-01",
        source: SP_TALENT,
        lastVerified: "2026-11-23",
        note: "Legifrance text: arrêté du 21 août 2025 (JORFTEXT000052158119), in force since 1 September 2025 per Legifrance; Legifrance itself could not be opened from this environment (HTTP 403), the figure is taken from the Service-Public page.",
      },
    ],
    blueCardReduced: null,
    highlyQualified: [
      {
        value: {
          amount: 39582,
          currency: "EUR",
          period: "year",
          gross: true,
          note: "Carte talent - salarié qualifié: contract of more than 3 months with gross annual pay of at least the salaire brut moyen annuel de référence (1 x 39,582 EUR), for holders of a French master's level diploma or a Conférence des grandes écoles level 1 diploma.",
        },
        validFrom: "2025-09-01",
        source: { label: "Service-Public: Talent card, multi-year residence card (English version)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16922?lang=en" },
        lastVerified: "2026-11-24",
      },
    ],
    minimumWage: [
      {
        value: {
          amount: 1867.02,
          currency: "EUR",
          period: "month",
          gross: true,
          note: "SMIC brut mensuel for 35 hours per week; 12.31 EUR per hour; 22,404.20 EUR per year (arrêté du 22 mai 2026). The autorisation de travail requires pay of at least the SMIC or the higher collective agreement minimum.",
        },
        validFrom: "2026-06-01",
        source: SP_SMIC,
        lastVerified: "2026-11-23",
        note: "Service-Public page verified 1 June 2026 cites the arrêté du 22 mai 2026; the 1 June 2026 application date comes from the arrêté (JORF 24 mai 2026). Next statutory revaluation on 1 January 2027.",
      },
    ],
  },
  shortage: {
    list: {
      value: [
        {
          name: "Liste des métiers et zones géographiques caractérisés par des difficultés de recrutement (métiers en tension), arrêté du 21 mai 2025, par région",
          scope: "regional",
          url: "https://www.immigration.interieur.gouv.fr/limmigration-en-france/sejour-des-etrangers/liste-des-metiers-en-tension-pour-travailleurs-etrangers",
        },
      ],
      validFrom: "2025-05-23",
      source: SP_AUTORISATION,
      lastVerified: "2026-11-23",
      note: "National arrêté listing occupations region by region (CESEDA L. 414-13); separate arrêtés of June 2026 for Guadeloupe, Guyane, Martinique and La Réunion. The ministry list page itself returned HTTP 403; the effect is taken from the Service-Public page.",
    },
    exemptsLabourMarketTest: true,
    note: "For a listed occupation in the relevant region the situation de l'emploi is not opposable and the employer does not have to advertise the vacancy for 3 weeks before applying (Service-Public F2734).",
  },
  family: {
    waitingPeriodMonths: {
      value: 18,
      validFrom: "2025-01-01",
      source: SP_RF,
      lastVerified: "2026-11-23",
      note: "Regroupement familial: the sponsor must have resided in France for at least 18 months with a residence permit of at least 1 year, a carte de résident, a long-stay visa or a récépissé. Algerian nationals: 1 year. Not applicable to talent card holders (famille accompagnante).",
    },
    blueCardImmediate: true,
    decisionDays: {
      value: 180,
      validFrom: "2025-01-01",
      source: SP_RF,
      lastVerified: "2026-11-23",
      note: "The préfet must notify the decision within 6 months of the complete file being lodged with the OFII; silence is an implicit refusal.",
    },
    conditions: {
      value:
        "Resources: average gross monthly income over the last 12 months of at least the SMIC (1,867.02 EUR for a family of 2 or 3 persons, 2,053.72 EUR for 4 or 5, 2,240.42 EUR for 6 or more), excluding most social benefits; exempt for AAH or ASI recipients and some persons over 65. Housing: a dwelling considered normal for a comparable family in the same region, minimum 22 m2 (zones A bis and A), 24 m2 (B1 and B2) or 28 m2 (zone C) for 2 persons plus 10 m2 per additional person up to 8.",
      validFrom: "2026-06-01",
      source: SP_RF,
      lastVerified: "2026-11-23",
    },
    source: SP_RF,
  },
  recast: {
    transposition: {
      value: "partial",
      validFrom: "2026-10-30",
      source: SP_DECRET_2026_1001,
      lastVerified: "2026-11-24",
      note: "Décret n° 2026-1001 du 26 octobre 2026 (JORF 29 octobre 2026) applies part of the directive from 30 October 2026: 90-day decision period, 6-month employer-change restriction, maintenance of residence during unemployment, Blue Card adjustments. The Commission had sent France a letter of formal notice on 15 July 2026. Service-Public pages state they are still being updated.",
    },
    decisionDays: {
      value: 90,
      validFrom: "2026-10-30",
      source: SP_DECRET_2026_1001,
      lastVerified: "2026-11-24",
      note: "For most residence permit applications the préfet must decide within 90 days (previously 4 months). The autorisation de travail itself: implicit refusal after 2 months of silence (F2734, being updated).",
    },
    extensionDays: {
      value: 30,
      validFrom: "2026-10-30",
      source: SP_DECRET_2026_1001,
      lastVerified: "2026-11-24",
      note: "The 90-day period may be extended by 30 days for files of particular complexity.",
    },
    changeOfEmployerByNotification: {
      value: false,
      validFrom: "2026-10-30",
      source: SP_DECRET_2026_1001,
      lastVerified: "2026-11-24",
      note: "The period after a first autorisation de travail during which the worker may not change employer is reduced from 12 to 6 months (exception when the employer seriously breached its obligations). A new employer still needs an autorisation de travail where the residence document requires one.",
    },
    unemploymentGraceMonths: {
      value: 3,
      validFrom: "2026-10-30",
      source: SP_DECRET_2026_1001,
      lastVerified: "2026-11-24",
      note: "Holder of a 'travailleur temporaire' card keeps the right to stay after involuntary unemployment, for at most 3 months during the card's validity (6 months where the previous job involved trafficking, forced labour or conditions contrary to human dignity). Blue Card: 6 months to find a new job after a refusal or withdrawal linked to employer breaches, extendable to the remaining unemployment benefit rights.",
    },
    inCountryApplication: null,
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["French"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: SP_TALENT,
  },
  validity: {
    value: {
      initialMonths: 12,
      renewalMonths: 48,
      note: "Carte de séjour 'salarié' (or VLS-TS salarié): 1 year, then a carte pluriannuelle of 4 years on renewal if still employed. Carte talent (including Blue Card): length of the contract up to 4 years; Blue Card contracts under 2 years: contract plus 3 months, up to 2 years.",
    },
    validFrom: "2026-01-01",
    source: {
      label: "Service-Public: Travail d'un étranger en France, carte de séjour salarié / travailleur temporaire",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F15898",
    },
    lastVerified: "2026-11-24",
  },
  reviewNotes: [
    "Legifrance (legifrance.gouv.fr) and the Interior Ministry site (immigration.interieur.gouv.fr) block automated access (HTTP 403), so the arrêté du 21 août 2025 (JORFTEXT000052158119), the arrêté du 22 mai 2026 on the SMIC, the arrêté du 21 mai 2025 on métiers en tension and the décret n° 2026-1001 (JORFTEXT000055023061) were not read in the original; figures and dates come from Service-Public (DILA) pages. Verify the exact texts on Legifrance.",
    "Blue Card threshold validFrom: Legifrance lists the arrêté du 21 août 2025 as in force since 1 September 2025 (published JORF 31 August 2025); some commentators cite 31 August 2025. Previous threshold 53,836.50 EUR (reference 35,891 EUR).",
    "blueCardReduced is null: France has no reduced Blue Card threshold for shortage occupations or recent graduates. Note that the carte talent 'professions médicales et de la pharmacie' has its own threshold (41,386.48 EUR per Service-Public), not recorded.",
    "SMIC: 12.02 EUR per hour from 1 January 2026, raised to 12.31 EUR per hour and 1,867.02 EUR per month from 1 June 2026 (arrêté du 22 mai 2026, JORF 24 mai 2026). The 1 January 2026 monthly amount was not confirmed on an opened page and is not recorded.",
    "Documents: France requires no criminal record extract for work permits or titres de séjour (null). France-Visas states that for a long-stay visa the passport must be valid at least 3 months beyond the visa's expiry, issued less than 10 years ago, with two blank pages, but the france-visas.gouv.fr page returned HTTP 403, so passportValidityBeyondStayMonths is null. Translations: Service-Public refers to a 'traducteur agréé' (court-approved translator); whether a sworn translation is mandatory for every document is not stated.",
    "Recast: service-public F2734 and F15898 state that decision deadlines and implicit decision rules change from 30 October 2026 and that the pages are being updated; the 2-month implicit refusal rule for the autorisation de travail shown on F2734 may be outdated.",
    "In-country application: not confirmed on an opened page. France allows changement de statut for legal residents through the ANEF, but no official page opened states it for the single permit context.",
    "Family: Blue Card and other talent card holders use the 'famille accompagnante' route (carte talent-famille) without regroupement familial, hence blueCardImmediate true; the 18-month residence condition applies to ordinary salarié permit holders.",
  ],
};
