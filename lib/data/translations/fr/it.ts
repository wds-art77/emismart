import type { CountryDetails } from "../types";

export const it: CountryDetails = {
  authorities: [
    "Sportello Unico per l'Immigrazione (SUI) de la Prefettura de la province du lieu de travail : nulla osta et contrat de séjour",
    "Ministero dell'Interno, Dipartimento per le Libertà Civili e l'Immigrazione : portail ALI et procédure du Decreto Flussi",
    "Ministero del Lavoro e delle Politiche Sociali : répartition des quotas entre les bureaux territoriaux",
    "Ambassade ou consulat d'Italie : visa d'entrée pour travail salarié",
    "Questura (Polizia di Stato) : délivrance et renouvellement du permesso di soggiorno",
  ],
  legalBasis: [
    "Decreto Legislativo 25 luglio 1998, n. 286, Testo Unico sull'immigrazione (articles 3, 5, 21, 22, 24-bis et 27)",
    "D.P.R. 31 agosto 1999, n. 394, règlement d'application",
    "D.P.C.M. 2 ottobre 2025 sur les flux d'entrée pour 2026 à 2028 et circulaires interministérielles d'application",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
  ],
  steps: [
    {
      title: "Vérifier le quota et la catégorie",
      actor: "Employer",
      detail:
        "L'employeur confirme que le secteur et la nationalité du travailleur relèvent des quotas et des dates du Decreto Flussi en vigueur, ou que l'emploi appartient à une catégorie hors quota (article 27, carte bleue européenne, cadres dirigeants, chercheurs, infirmiers, artistes).",
    },
    {
      title: "Vérifier l'indisponibilité auprès du centro per l'impiego",
      actor: "Employer",
      detail:
        "L'employeur demande au centre pour l'emploi local si un travailleur déjà présent en Italie est disponible. L'absence de réponse dans les 8 jours vaut résultat négatif, et la vérification est documentée dans le dossier.",
    },
    {
      title: "Déposer la demande de nulla osta sur le portail ALI",
      actor: "Employer",
      detail:
        "Le jour du click day, l'employeur, ou une association ou un consultant du travail agissant pour lui, soumet la demande nominative (formulaire B2020 pour le travail non saisonnier) avec la proposition de contrat de séjour, la preuve du logement, l'engagement de payer les frais de retour, l'asseverazione au titre de l'article 24-bis et un domicile numérique. Les demandes sont traitées dans l'ordre de soumission jusqu'à épuisement du quota.",
    },
    {
      title: "Nulla osta délivré et transmis au consulat",
      actor: "Authority",
      detail:
        "Le Sportello Unico vérifie le dossier et l'avis de la Questura et délivre le nulla osta dans les 60 jours de l'imputation de la demande sur le quota. Le nulla osta est transmis par voie électronique au consulat et est valable 6 mois.",
    },
    {
      title: "Visa d'entrée",
      actor: "Employee",
      detail:
        "Le travailleur demande le visa d'entrée pour travail salarié au consulat d'Italie de son pays de résidence pendant la validité du nulla osta et se rend en Italie.",
    },
    {
      title: "Contrat de séjour et demande de permis de séjour",
      actor: "Both",
      detail:
        "Dans les 8 jours ouvrables suivant l'entrée, le travailleur demande le permesso di soggiorno et, dans le délai fixé par le Testo Unico (actuellement 15 jours à compter de l'entrée), l'employeur et le travailleur signent le contratto di soggiorno, transmis par voie électronique au Sportello Unico. Le nulla osta permet de travailler pendant l'examen du permis.",
    },
    {
      title: "Empreintes digitales et retrait de la carte",
      actor: "Employee",
      detail:
        "Le travailleur se présente au rendez-vous de la Questura pour les empreintes digitales et retire le permis de séjour électronique, puis s'inscrit auprès de la commune et de l'administration fiscale selon les besoins.",
    },
  ],
  employerDocs: [
    { label: "Demande nominative de nulla osta sur le portail ALI (formulaire B2020 pour le travail salarié non saisonnier)" },
    { label: "Proposition de contrat de séjour (contratto di soggiorno) comprenant l'engagement de payer les frais de retour du travailleur" },
    { label: "Documentation d'un logement adéquat pour le travailleur, signée numériquement" },
    { label: "Asseverazione d'un consultant du travail ou d'une association patronale au titre de l'article 24-bis(2) confirmant la capacité de l'employeur et les conditions du contrat", note: "Non requise lorsque la demande est déposée par une association ou un consultant ayant signé un protocole avec le ministère." },
    { label: "Résultat de la vérification d'indisponibilité auprès du centro per l'impiego" },
    { label: "Domicile numérique (PEC) enregistré dans INI-PEC ou INAD, et accès SPID ou CIE pour le portail" },
  ],
  employeeDocs: [
    { label: "Passeport ou document de voyage en cours de validité" },
    { label: "Copie du nulla osta délivré par le Sportello Unico" },
    { label: "Formulaire de demande de visa d'entrée et photographies d'identité pour le consulat" },
    { label: "Contrat de séjour signé (contratto di soggiorno)" },
    { label: "Kit postal de demande du permesso di soggiorno avec le timbre fiscal et les reçus de paiement" },
    { label: "Preuve des qualifications lorsque la profession est réglementée" },
    { label: "Codice fiscale (numéro fiscal) et justificatif de domicile après l'arrivée" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne (Carta blu UE)", summary: "Travailleurs hautement qualifiés titulaires d'un diplôme ou d'une expérience professionnelle reconnue et d'un salaire supérieur au seuil ; demande déposée par l'employeur auprès du Sportello Unico hors quota au titre de l'article 27-quater du Testo Unico." },
    { name: "Catégories hors quota (article 27)", summary: "Cadres dirigeants et personnel hautement spécialisé, professeurs d'université, chercheurs, infirmiers, artistes, travailleurs transférés au sein d'un groupe et autres catégories listées peuvent être demandés toute l'année sans quota." },
    { name: "Procédure simplifiée par protocole (article 24-bis)", summary: "Les associations patronales ayant signé un protocole avec le ministère du Travail ou de l'Intérieur remplacent le nulla osta par une communication de la proposition de contrat de séjour, vérifiée par la Questura." },
    { name: "Visa de nomade numérique et de travailleur à distance", summary: "Permis de séjour pour les travailleurs à distance hautement qualifiés employés à l'étranger, avec ses propres conditions de revenus et d'assurance." },
  ],
  watchOuts: [
    "Les quotas s'épuisent en quelques minutes lors des click days. Une demande déposée après l'épuisement du quota reste pendante et peut ne jamais être traitée, de sorte que le préremplissage sur le portail ALI pendant la fenêtre de préparation est essentiel.",
    "Le nulla osta expire après 6 mois. Si le consulat n'a pas délivré le visa et que le travailleur n'est pas entré en Italie d'ici là, toute la procédure doit recommencer lors d'une nouvelle session de quota.",
    "Des décrets récents ont ajouté des contrôles antifraude : les employeurs doivent confirmer leur intérêt après la délivrance du nulla osta dans un bref délai, faute de quoi l'autorisation est annulée. Confirmez le délai en vigueur dans la dernière circulaire.",
  ],
};
