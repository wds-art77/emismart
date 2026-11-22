import type { CountryDetails } from "../types";

export const ie: CountryDetails = {
  authorities: [
    "Department of Enterprise, Tourism and Employment (DETE), Employment Permits Section : Employment Permits Online, décisions et réexamens",
    "Immigration Service Delivery (ISD), Department of Justice, Home Affairs and Migration : visas, autorisation de séjour et enregistrement pour l'Irish Residence Permit",
    "Garda National Immigration Bureau (GNIB) : enregistrement dans les postes de la Garda hors de Dublin",
    "Department of Social Protection, JobsIreland/EURES : publication de l'offre pour le Labour Market Needs Test",
    "Ambassades et consulats d'Irlande : demandes de visa D de long séjour",
  ],
  legalBasis: [
    "Employment Permits Act 2024, en vigueur depuis le 2 septembre 2024 (Commencement Order S.I. No. 443 of 2024)",
    "Employment Permits Regulations 2024 (S.I. No. 444 of 2024), fixant les types de permis, les seuils salariaux, les listes Critical Skills et Ineligible Occupations et le Labour Market Needs Test",
    "Protocole no 21 sur la position de l'Irlande annexé aux traités de l'UE : l'Irlande n'a pas opté pour la directive 2011/98/UE ni pour la directive (UE) 2024/1233",
  ],
  steps: [
    {
      title: "Vérifier l'éligibilité et créer le compte employeur",
      actor: "Employer",
      detail:
        "L'employeur confirme que la profession ne figure pas sur l'Ineligible Occupations List, que le salaire atteint le seuil fixé par le règlement et que la règle 50:50 de main-d'œuvre EEE est respectée. Le compte Employment Permits Online exige l'enregistrement auprès du Revenue et le numéro CRO.",
    },
    {
      title: "Réaliser le Labour Market Needs Test",
      actor: "Employer",
      detail:
        "Sauf dispense, l'offre est publiée sur JobsIreland/EURES et sur une seconde plateforme en ligne pendant 28 jours consécutifs sans modification. Le numéro de référence JobsIreland est reporté dans la demande.",
    },
    {
      title: "Signer le contrat et déposer la demande en ligne",
      actor: "Both",
      detail:
        "Le contrat doit être signé par les deux parties. L'employeur ou le travailleur dépose la demande sur Employment Permits Online au moins 12 semaines avant la date de début, en joignant la description du poste, les qualifications, l'historique migratoire et les preuves du LMNT, et paie la redevance. Les demandes incomplètes laissées dans le système sont supprimées.",
    },
    {
      title: "Traitement dans l'ordre de réception",
      actor: "Authority",
      detail:
        "Le DETE classe la demande par date de réception, peut demander des informations complémentaires à fournir dans les 28 jours, puis accorde ou refuse. Un refus peut être soumis à réexamen dans les 28 jours auprès d'un fonctionnaire de rang supérieur.",
    },
    {
      title: "Permis délivré et visa D le cas échéant",
      actor: "Employee",
      detail:
        "Le permis est délivré au travailleur et une copie à l'employeur. Les ressortissants soumis à visa demandent en ligne un visa D de long séjour pour emploi auprès de l'ambassade d'Irlande, en joignant le permis.",
    },
    {
      title: "Arrivée et enregistrement pour l'Irish Residence Permit",
      actor: "Employee",
      detail:
        "À la frontière, l'agent d'immigration accorde l'autorisation d'entrée et enjoint au travailleur de s'enregistrer. Dans les 90 jours, le travailleur s'enregistre auprès de l'ISD à Dublin ou au bureau d'enregistrement local de la Garda, paie la redevance d'enregistrement et reçoit la carte Irish Residence Permit par la poste.",
    },
    {
      title: "Renouvellement et changements",
      actor: "Both",
      detail:
        "Le renouvellement peut être demandé jusqu'à 4 mois avant l'expiration. L'employeur doit notifier au DETE tout licenciement, départ ou changement des conditions dans les délais fixés, et l'autorisation de séjour est renouvelée séparément auprès de l'ISD avant son expiration.",
    },
  ],
  employerDocs: [
    { label: "Compte employeur sur Employment Permits Online avec enregistrement auprès du Revenue et numéro du Companies Registration Office" },
    { label: "Contrat de travail signé par les deux parties" },
    { label: "Description complète du poste avec les tâches, les horaires, la durée, le lieu et la rémunération" },
    { label: "Preuves du Labour Market Needs Test : référence JobsIreland/EURES et copie de la seconde annonce en ligne, ou fondement de la dispense" },
    { label: "Données sur l'effectif montrant le respect de la règle 50:50 EEE, ou lettre de soutien d'Enterprise Ireland/IDA Ireland pour les start-up" },
    { label: "Liste de contrôle du permis complétée avant le dépôt" },
  ],
  employeeDocs: [
    { label: "Passeport en cours de validité" },
    { label: "Preuves des qualifications, compétences et expérience requises pour le poste" },
    { label: "Détails de l'historique migratoire et de l'autorisation irlandaise en cours si la personne se trouve déjà dans l'État" },
    { label: "Copie du contrat de travail signé" },
    { label: "Demande de visa D de long séjour avec le permis d'emploi, pour les ressortissants soumis à visa" },
    { label: "Permis d'emploi original et passeport pour l'enregistrement auprès de l'ISD" },
    { label: "Paiement de la redevance d'enregistrement fixée par l'ISD lors du retrait de l'Irish Residence Permit", note: "Confirmez la redevance en vigueur sur le site de l'ISD" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Non disponible : l'Irlande ne participe pas à la directive sur la carte bleue européenne. Le Critical Skills Employment Permit est l'équivalent national." },
    { name: "Critical Skills Employment Permit", summary: "Professions figurant sur la Critical Skills Occupations List ou tout emploi éligible au-dessus du seuil de rémunération supérieur, avec un contrat d'au moins 2 ans. Pas de Labour Market Needs Test, regroupement familial immédiat et autorisation Stamp 4 à l'expiration du permis." },
    { name: "Intra-Company Transfer Employment Permit", summary: "Cadres dirigeants, personnel clé et stagiaires transférés d'une filiale étrangère vers l'entité irlandaise, avec sa propre file de traitement." },
    { name: "Atypical Working Scheme", summary: "Autorisation de courte durée de l'ISD pour un travail de 90 jours au plus qui ne relève pas du système des permis d'emploi." },
  ],
  watchOuts: [
    "Le délai de 12 semaines est une règle stricte et la file est traitée strictement dans l'ordre de réception ; une demande incomplète repart en fin de file ou est supprimée du portail.",
    "L'annonce JobsIreland doit courir 28 jours sans modification et la demande doit être déposée dans les 90 jours de la première publication, faute de quoi le Labour Market Needs Test doit être recommencé.",
    "Un permis d'emploi n'est pas une autorisation de séjour. Le travailleur a toujours besoin d'un visa D le cas échéant et doit s'enregistrer auprès de l'ISD dans les 90 jours ; un enregistrement tardif peut nuire aux demandes ultérieures de séjour de longue durée ou de naturalisation.",
  ],
};
