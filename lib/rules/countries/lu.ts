import type { CountryRules } from "../country-rules";

// Luxembourg. The EU Blue Card threshold equals the average gross annual salary fixed each year by
// ministerial regulation (règlement ministériel du 23 février 2026: 65,652 EUR). The single permit recast
// bill (projet de loi 8586) was adopted by the Chamber on 14 October 2026 but publication was not found.

const LEGILUX_RMIN_2026 = {
  label: "Legilux, Mémorial A n° 91 du 27 février 2026: Règlement ministériel du 23 février 2026 fixant le salaire annuel brut moyen (travailleur hautement qualifié)",
  url: "https://data.legilux.public.lu/filestore/eli/etat/leg/rmin/2026/02/23/a91/jo/fr/pdfa/eli-etat-leg-rmin-2026-02-23-a91-jo-fr-pdfa.pdf",
};
const GUICHET_CBE = {
  label: "Guichet.lu: Visa D pour un titre de séjour travailleur hautement qualifié (carte bleue européenne), dernière modification 01.10.2026",
  url: "https://guichet.public.lu/fr/citoyens/immigration/vivre/non-luxembourg/immigration/pays-tiers/hautement-qualifie/salarie-hautement-qualifie.html",
};
const GUICHET_SALARIE = {
  label: "Guichet.lu: Visa D pour un titre de séjour travailleur salarié, dernière modification 01.10.2026",
  url: "https://guichet.public.lu/fr/citoyens/immigration/vivre/non-luxembourg/immigration/pays-tiers/salarie/salarie-pays-tiers.html",
};
const GUICHET_RF_NOTE = {
  label: "Guichet.lu, Direction générale de l'immigration: note explicative, autorisation de séjour du membre de famille d'un ressortissant de pays tiers (articles 68 à 77 de la loi du 29 août 2008)",
  url: "https://guichet.public.lu/dam-assets/catalogue-formulaires/immigration/document/tiers/regroupement-familial/autorisation-sejour-note-regroupement-familial/regroupement-familial-tiers-note-fr.pdf",
};
const CHD_CRO_68 = {
  label: "Chambre des Députés, Compte rendu officiel n° 68 (séance publique du 14 octobre 2026): vote du projet de loi 8586 transposant la directive (UE) 2024/1233",
  url: "https://www.chd.lu/sites/default/files/2026-11/cro_68_2023-2028.pdf",
};

export const lu: CountryRules = {
  code: "lu",
  salary: {
    blueCard: [
      {
        value: {
          amount: 65652,
          currency: "EUR",
          period: "year",
          gross: true,
          note: "Average gross annual salary for 2024 determined by STATEC (règlement ministériel du 23 février 2026) and applied as the minimum for the carte bleue européenne; contract of at least 6 months. Previously 63,408 EUR.",
        },
        validFrom: "2026-03-03",
        source: LEGILUX_RMIN_2026,
        lastVerified: "2026-11-24",
        note: "The regulation was published on 27 February 2026 and fixes no entry-into-force date; 3 March 2026 is the ordinary entry into force (fourth day after publication) and is the date reported by Luxembourg practitioners. Guichet.lu pages updated 01.10.2026 show 65,652 EUR as the current amount.",
      },
    ],
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: [
      {
        value: {
          amount: 2771.33,
          currency: "EUR",
          period: "month",
          gross: true,
          note: "Salaire social minimum, worker aged 18 or over, non-qualified (100%), index 992.24; 16.0192 EUR per hour. Qualified worker (120%): 3,325.59 EUR per month.",
        },
        validFrom: "2026-06-01",
        source: {
          label: "Gouvernement luxembourgeois: Paramètres sociaux valables au 1er juin 2026 (PDF)",
          url: "https://gouvernement.lu/dam-assets/images-documents/actualites/2026/06-juin/04-parametres-sociaux/paramtres-sociaux-juin-2026.pdf",
        },
        lastVerified: "2026-11-24",
        note: "Changes with each index tranche (2.5%) and with the biennial adjustment on 1 January.",
      },
    ],
  },
  shortage: {
    list: {
      value: [
        {
          name: "ADEM: Liste des métiers très en pénurie 2026 (année de référence 2025), article L. 622-4 (5) du Code du travail",
          scope: "national",
          url: "https://adem.public.lu/content/dam/adem/fr/publications/adem/metiers-penurie.pdf",
        },
      ],
      validFrom: "2026-03-31",
      source: {
        label: "Guichet.lu actualité 31.03.2026: Recrutement accéléré hors Union européenne, nouvelle liste des métiers très en pénurie",
        url: "https://guichet.public.lu/fr/entreprises/actualites/2026/mars/31-metiers-penurie.html",
      },
      lastVerified: "2026-11-23",
      note: "Published in the Journal officiel and on adem.public.lu; revised each first quarter. 20 occupations in 2026 (22 in 2025).",
    },
    exemptsLabourMarketTest: false,
    note: "Listing does not remove the labour market test: the employer must still declare the vacancy and obtain the ADEM certificate, but for listed occupations the certificate is issued within 5 working days instead of after the 3-week search period.",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2024-03-14",
      source: GUICHET_RF_NOTE,
      lastVerified: "2026-11-24",
      note: "No prior residence period for spouse, registered partner and minor children; the sponsor must hold a residence permit valid for at least 1 year and have a well-founded prospect of long-term residence. Parents and dependent adult children only after 12 months of residence with prior ministerial approval.",
    },
    blueCardImmediate: true,
    decisionDays: null,
    conditions: {
      value:
        "Stable, regular and sufficient resources assessed by reference to the salaire social minimum for non-qualified workers (2,771.33 EUR per month from 1 June 2026), with a prospective assessment over the year following the application and account taken of the 6 months before it; appropriate housing in Luxembourg (lease or deed stating the floor area); health insurance for the sponsor and family. Documents not in French, German or English need a translation by a sworn translator.",
      validFrom: "2026-06-01",
      source: GUICHET_RF_NOTE,
      lastVerified: "2026-11-24",
    },
    source: GUICHET_RF_NOTE,
  },
  recast: {
    transposition: {
      value: "pending",
      validFrom: "2026-10-14",
      source: CHD_CRO_68,
      lastVerified: "2026-11-24",
      note: "Projet de loi 8586 (deposited 21 July 2025, Conseil d'Etat opinion 2 December 2025, committee report 16 September 2026) adopted in public session on 14 October 2026 with dispensation from the second constitutional vote. Publication in the Journal officiel not found on the verification date; Guichet.lu pages (01.10.2026) still mark the new employer-change and unemployment rules as awaiting entry into force. Commission letter of formal notice sent 15 July 2026.",
    },
    decisionDays: null,
    extensionDays: null,
    changeOfEmployerByNotification: null,
    unemploymentGraceMonths: null,
    inCountryApplication: {
      value: false,
      validFrom: "2026-10-01",
      source: GUICHET_SALARIE,
      lastVerified: "2026-11-24",
      note: "The authorisation to stay must be applied for and granted before entering Luxembourg; an application lodged on the territory is inadmissible, except for holders of an existing Luxembourg residence permit and other listed exceptions.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["French", "German", "English"],
    swornTranslationRequired: true,
    criminalRecordMaxAgeMonths: {
      value: 3,
      validFrom: "2026-10-01",
      source: GUICHET_CBE,
      lastVerified: "2026-11-24",
      note: "Extract from the criminal record of the current country of residence dated less than 3 months, or a sworn affidavit where an extract cannot be obtained.",
    },
    source: GUICHET_SALARIE,
  },
  validity: {
    value: {
      initialMonths: 24,
      renewalMonths: null,
      note: "Guichet.lu (01.10.2026): the first residence permit for a salaried worker is issued for a maximum of 2 years. EU Blue Card: 4 years, or the contract duration plus 3 months when the contract is shorter than 4 years, at first issue and renewal.",
    },
    validFrom: "2026-10-01",
    source: GUICHET_SALARIE,
    lastVerified: "2026-11-24",
  },
  reviewNotes: [
    "Blue Card threshold: the règlement ministériel du 23 février 2026 fixes the 2024 average gross annual salary at 65,652 EUR without stating an application date; validFrom 2026-03-03 relies on the ordinary entry-into-force rule and should be confirmed. One Guichet.lu page shows 65,562 EUR, a typo.",
    "blueCardReduced: the règlement grand-ducal du 26 septembre 2008 provides a lower threshold for certain shortage professions, but no opened official page states the current reduced amount, so the field is null.",
    "highlyQualified is null: the EU Blue Card is Luxembourg's highly qualified route; no distinct national threshold.",
    "Validity: Guichet.lu now states a first salaried-worker permit of up to 2 years; the Chamber debate on bill 8586 describes the first permit being issued for two instead of one year as a change introduced by that bill, so confirm whether the 2-year validity is already in force or anticipates the new law. Renewal length not stated on the pages opened (previously 3 years).",
    "Decision period: the current legal period for a salaried-worker authorisation (4 months per earlier Guichet.lu text) was not confirmed on an opened page; the Blue Card page states 3 months with silence meaning refusal. Bill 8586 introduces 90 days plus 30 days for complex files. recast.decisionDays is null until the law is published.",
    "Change of employer: current rule on Guichet.lu (salaried worker) is no change in the first 6 months, then prior notification with a 30-day objection period for the Direction générale de l'immigration; Blue Card holders notify changes of employer with a 30-day objection period. Guichet.lu flags these as awaiting entry into force of bill 8586, so changeOfEmployerByNotification and unemploymentGraceMonths (3 months, 6 months after 2 years per the bill) are null.",
    "Family reunification decision period: not stated in the note explicative or on the pages opened (Directive 2003/86/EC maximum 9 months); null.",
    "Criminal record extract: 'moins de 3 mois' on the Blue Card page, 'récent' in the salaried-worker note; 3 months recorded.",
    "Shortage list: the ADEM list of 20 occupations (2026) accelerates the ADEM certificate (5 working days) but does not waive the vacancy declaration; the ADEM shortage list also differs from the Forem/Actiris-type lists used in Belgium.",
    "Minimum wage figures also appear on itm.public.lu; the next index tranche or the 1 January 2027 adjustment will change them.",
  ],
};
