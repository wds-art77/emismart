import type { CountryDetails } from "../types";

export const sk: CountryDetails = {
  authorities: [
    "Service de la Police des étrangers (Oddelenie cudzineckej polície Policajného zboru) du ministère de l'Intérieur : réception et décision sur le séjour temporaire, carte de séjour",
    "Office du travail (Úrad práce, sociálnych vecí a rodiny) et son Office central : signalements de postes vacants, confirmation de la possibilité de pourvoir un poste vacant, permis de travail",
    "Ambassade ou consulat de Slovaquie : réception des demandes déposées à l'étranger et visa national lorsqu'il est nécessaire",
    "Ministère du Travail, des Affaires sociales et de la Famille : politique et liste des métiers en pénurie",
  ],
  legalBasis: [
    "Zákon č. 404/2011 Z. z. o pobyte cudzincov (loi sur le séjour des étrangers), § 23 et § 33",
    "Zákon č. 5/2004 Z. z. o službách zamestnanosti (loi sur les services de l'emploi), § 21b et § 22",
    "Zákon č. 145/1995 Z. z. o správnych poplatkoch (loi sur les redevances administratives)",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
  ],
  steps: [
    {
      title: "Signaler le poste vacant à l'Office du travail",
      actor: "Employer",
      detail:
        "L'employeur signale le poste vacant à l'Office du travail, au moyen de ses formulaires électroniques, au moins 20 jours ouvrables avant la demande du travailleur. Pour les métiers en pénurie, le signalement peut être fait sans délai d'attente.",
    },
    {
      title: "Signer le contrat ou la promesse écrite d'emploi",
      actor: "Both",
      detail:
        "Si aucun demandeur d'emploi approprié n'est placé, l'employeur signe un contrat de travail ou une promesse écrite d'emploi sur le formulaire officiel, qui doit constituer une relation de travail (pracovný pomer), avec une confirmation de la rémunération pour l'examen des moyens.",
    },
    {
      title: "Déposer la demande de séjour à l'ambassade",
      actor: "Employee",
      detail:
        "Le travailleur dépose le formulaire de demande en slovaque, en personne, à l'ambassade de Slovaquie ou à la Police des étrangers s'il séjourne légalement en Slovaquie, avec le passeport, des photographies, le contrat ou la promesse, les extraits de casier judiciaire, la preuve de logement et de moyens financiers, le tout apostillé et traduit en slovaque et datant de moins de 90 jours, et paie la redevance administrative.",
    },
    {
      title: "La Police des étrangers obtient la confirmation du poste vacant",
      actor: "Authority",
      detail:
        "La Police des étrangers demande à l'Office du travail la confirmation de la possibilité de pourvoir le poste vacant, que celui-ci renvoie via le système d'information dans les 5 jours ouvrables, et statue dans le délai légal de 60 jours (30 jours pour les métiers en pénurie).",
    },
    {
      title: "Entrée et formalités d'arrivée",
      actor: "Employee",
      detail:
        "Le travailleur entre dans les 180 jours de l'octroi, déclare son arrivée à la Police des étrangers dans les 3 jours ouvrables et retire le document de séjour.",
    },
    {
      title: "Rapport médical et assurance maladie",
      actor: "Employee",
      detail:
        "Dans les 30 jours du retrait du document de séjour, le travailleur remet un rapport médical d'un spécialiste des maladies infectieuses datant de moins de 30 jours, et souscrit une assurance maladie dans les 3 jours ouvrables du retrait.",
    },
  ],
  employerDocs: [
    { label: "Signalement du poste vacant déposé auprès de l'Office du travail au moins 20 jours ouvrables avant la demande" },
    { label: "Contrat de travail ou promesse écrite d'emploi sur le formulaire officiel, constituant une relation de travail" },
    { label: "Confirmation du salaire convenu, utilisée par le travailleur comme preuve de moyens financiers" },
    { label: "Pour les professions réglementées, la qualification reconnue ou la décision de reconnaissance" },
    { label: "Confirmation de l'employeur qu'aucun permis de travail ni confirmation de poste vacant n'est requis, lorsqu'une dispense s'applique" },
    { label: "Notification à la Police des étrangers dans les 3 jours ouvrables en cas de fin de l'emploi" },
  ],
  employeeDocs: [
    { label: "Formulaire de demande de séjour temporaire, rempli et signé en slovaque" },
    { label: "Passeport valide et deux photographies en couleur" },
    { label: "Contrat de travail ou promesse écrite d'emploi" },
    { label: "Extrait de casier judiciaire du pays de nationalité et de tout pays de résidence de plus de 90 jours sur 6 mois consécutifs au cours des 3 dernières années, apostillé et traduit, datant de moins de 90 jours" },
    { label: "Preuve de logement pour le séjour, datant de moins de 90 jours" },
    { label: "Preuve de moyens financiers : confirmation de salaire de l'employeur ou relevé bancaire" },
    { label: "Rapport médical d'un spécialiste des maladies infectieuses dans les 30 jours du retrait de la carte" },
    { label: "Preuve d'assurance maladie dans les 3 jours ouvrables du retrait de la carte" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Pour un emploi hautement qualifié avec un contrat d'au moins un an et une rémunération d'au moins 1,5 fois le salaire moyen régional publié par l'Office statistique ; délivrée pour 3 ans ou pour la durée de l'emploi plus 90 jours." },
    { name: "Voie accélérée pour les métiers en pénurie", summary: "Confirmation de poste vacant sans test du marché du travail et délai de décision de 30 jours pour les professions figurant sur la liste trimestrielle des métiers en pénurie, sous réserve d'un plafond sur la part de ressortissants de pays tiers chez l'employeur." },
    { name: "Permis de travail et séjour temporaire", summary: "Permis de travail de l'Office du travail suivi d'un séjour temporaire, utilisé pour les titulaires d'un regroupement familial et les résidents de longue durée de l'UE au cours de leurs 12 premiers mois." },
    { name: "Transfert intragroupe", summary: "Séjour temporaire aux fins d'emploi pour les cadres et les spécialistes (jusqu'à 3 ans) ou les stagiaires (jusqu'à 1 an) transférés au sein d'un groupe." },
  ],
  watchOuts: [
    "Le calendrier est fixé par le signalement du poste vacant. Si l'employeur a signalé le poste moins de 20 jours ouvrables avant la demande, l'Office du travail ne peut pas délivrer la confirmation et la Police des étrangers doit refuser.",
    "Les documents de casier judiciaire et de logement doivent être apostillés ou surlégalisés, traduits en slovaque et dater de moins de 90 jours au dépôt. Les extraits doivent couvrir l'ensemble du territoire de l'État qui les délivre.",
    "Le dépôt ne confère pas de droit de séjour. Jusqu'à la décision, le travailleur ne peut rester que sous couvert d'un visa valide ou d'un séjour sans visa, et doit entrer dans les 180 jours de l'octroi et remettre le rapport médical dans les 30 jours du retrait de la carte.",
  ],
};
