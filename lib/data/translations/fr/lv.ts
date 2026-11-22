import type { CountryDetails } from "../types";

export const lv: CountryDetails = {
  authorities: [
    "Office de la citoyenneté et des affaires migratoires (Pilsonības un migrācijas lietu pārvalde, OCMA/PMLP) : approbation des invitations et décisions sur les permis de séjour",
    "Agence nationale pour l'emploi (Nodarbinātības valsts aģentūra, NVA) : enregistrement des postes vacants et avis sur le recrutement d'un ressortissant de pays tiers",
    "Ambassades et consulats de Lettonie : réception des demandes de permis de séjour depuis l'étranger",
    "Service national des recettes (VID) : enregistrement du contribuable après l'arrivée",
  ],
  legalBasis: [
    "Imigrācijas likums (loi sur l'immigration), en particulier l'article 9 sur le droit à l'emploi, l'article 23 sur les permis de séjour temporaires et l'article 33 sur les délais de décision",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
    "Règlements du Conseil des ministres sur les permis de séjour et sur la redevance d'État pour l'examen des documents de visa et de permis de séjour (règlement no 731)",
  ],
  steps: [
    {
      title: "Enregistrer le poste vacant auprès de la NVA",
      actor: "Employer",
      detail:
        "Publier le poste vacant sur le portail de la NVA avec les motifs du poste et le nombre de postes. Le laisser ouvert pendant au moins 10 jours ouvrables, évaluer les candidats proposés par la NVA et rendre compte des résultats via le portail.",
    },
    {
      title: "Obtenir l'avis de la NVA",
      actor: "Authority",
      detail:
        "La NVA émet un avis sur le recrutement d'un ressortissant de pays tiers, en général dans les 10 jours ouvrables suivant la publication. Un avis positif est accessible à l'OCMA par voie électronique ; un refus peut faire l'objet d'un recours auprès du directeur de la NVA.",
    },
    {
      title: "Demander l'approbation de l'invitation à l'OCMA",
      actor: "Employer",
      detail:
        "Dans le mois suivant l'avis, soumettre la demande d'invitation par voie électronique avec le contrat de travail ou son projet, les documents de formation ou d'expérience du travailleur et toute licence, chaque fichier signé électroniquement, et payer la redevance d'État. L'OCMA statue dans les 5 jours ouvrables, ou 10 si une vérification supplémentaire est nécessaire.",
    },
    {
      title: "Demander le permis de séjour",
      actor: "Employee",
      detail:
        "Avec l'invitation approuvée, déposer le formulaire de demande, la copie du passeport, la photographie, l'extrait de casier judiciaire et la preuve de la redevance d'État dans une mission lettone à l'étranger, ou les envoyer à l'OCMA en cas de séjour légal en Lettonie. La redevance dépend de la vitesse d'examen choisie.",
    },
    {
      title: "Décision de l'OCMA",
      actor: "Authority",
      detail:
        "L'OCMA examine le dossier dans les 30 jours (10 ou 5 jours ouvrables pour les redevances plus élevées) et, en cas de décision positive, délivre le permis de séjour avec le droit à l'emploi pour l'employeur et le poste nommés.",
    },
    {
      title: "Formalités d'arrivée et carte",
      actor: "Employee",
      detail:
        "Déclarer le lieu de résidence, fournir un rapport de radiologue sur une radiographie thoracique réalisée en Lettonie et présenter une assurance maladie couvrant le séjour, puis retirer la carte de permis de séjour. S'enregistrer comme contribuable auprès du Service national des recettes. L'employeur doit notifier à l'OCMA les changements de rémunération, de temps de travail ou de lieu de travail dans les trois jours ouvrables.",
    },
  ],
  employerDocs: [
    { label: "Demande d'invitation soumise par voie électronique avec une signature électronique sécurisée, avec explications en letton" },
    { label: "Contrat de travail ou projet de contrat", note: "Également requis pour les permis ultérieurs et l'enregistrement annuel." },
    { label: "Document de formation (copie légalisée) ou preuve de trois ans d'expérience dans la profession ; certificat de reconnaissance pour les professions réglementées" },
    { label: "Copie du permis ou de la licence lorsque le travail en exige un" },
    { label: "Avis de la NVA sur le poste vacant", note: "Transmis à l'OCMA par voie électronique ; l'employeur n'a pas à le joindre." },
    { label: "Preuve du paiement de la redevance d'État pour l'invitation et le droit à l'emploi" },
  ],
  employeeDocs: [
    { label: "Formulaire de demande de permis de séjour" },
    { label: "Copie intégrale d'un document de voyage valide reconnu en Lettonie" },
    { label: "Photographie" },
    { label: "Extrait de casier judiciaire du pays de nationalité ou de résidence", note: "Pour les demandeurs de plus de 14 ans y ayant vécu plus de 12 mois ; non requis des citoyens de pays exemptés de visa." },
    { label: "Preuve de moyens de subsistance, normalement le salaire du contrat atteignant le seuil applicable" },
    { label: "Preuve du paiement de la redevance d'État" },
    { label: "Après l'arrivée : rapport de radiologue sur une radiographie réalisée en Lettonie et assurance maladie couvrant le séjour" },
    { label: "Pour les membres de la famille : preuve du lien de parenté et, pour un enfant voyageant avec un seul parent, consentement notarié de l'autre parent" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Diplôme de l'enseignement supérieur ou cinq ans d'expérience et rémunération de 1,5 fois la moyenne nationale (1,2 fois pour les professions en pénurie listées). Pas d'enregistrement de poste auprès de la NVA, invitation décidée en 10 jours ouvrables, carte pour deux ans au plus." },
    { name: "Transfert intragroupe", summary: "Cadres, spécialistes et stagiaires transférés au sein d'un groupe après au moins six mois chez l'employeur étranger, sur lettre de la société d'envoi." },
    { name: "Fondateur de start-up", summary: "Permis de séjour distinct pour les fondateurs de start-up innovantes, traité par l'OCMA selon ses propres critères." },
    { name: "Travail de courte durée sous visa", summary: "Pour un emploi de 90 jours au plus, l'employeur demande une invitation et le travailleur obtient un visa mentionnant le droit de travailler ; le poste vacant doit toujours être enregistré auprès de la NVA." },
  ],
  watchOuts: [
    "Tous les documents doivent être déposés en une seule fois. Si l'OCMA constate des lacunes, le dossier complet doit être redéposé, et la redevance n'est pas remboursée si l'invitation est refusée ou retirée.",
    "Le droit de travailler ne couvre que l'employeur et la profession nommés dans l'invitation. Un changement de poste chez le même employeur exige une nouvelle invitation, et un changement d'employeur exige de nouveaux droits à l'emploi.",
    "Les seuils de subsistance et de salaire sont révisés chaque printemps à partir des statistiques de l'année précédente, et l'enregistrement du poste et l'avis deviennent caducs si l'invitation n'est pas déposée dans le mois.",
  ],
};
