import type { CountryDetails } from "../types";

export const mt: CountryDetails = {
  authorities: [
    "Identità, Expatriates Unit : réception de la demande, délivrance du permis unique et de la carte de séjour",
    "Jobsplus : test du marché du travail, Declaration of Suitability, licences d'emploi pour le travail de courte durée",
    "Malta Qualifications Recognition Information Centre (MQRIC) : reconnaissance des qualifications",
    "Ambassade ou consulat de Malte : visa d'entrée sur la base de la lettre d'Approval in Principle",
    "Immigration Appeals Board : recours contre les refus de permis unique",
  ],
  legalBasis: [
    "Immigration Act (chapitre 217 des lois de Malte)",
    "Subsidiary Legislation 217.17, Single Application Procedure for a Single Permit as regards Residence and Work and a Common Set of Rights for those Third-Country Workers Legally Residing in Malta Regulations",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
    "Employment and Industrial Relations Act (chapitre 452), qui définit le statut protégé des travailleurs de pays tiers",
  ],
  steps: [
    {
      title: "S'enregistrer auprès de Jobsplus et obtenir l'accès au portail",
      actor: "Employer",
      detail:
        "L'employeur doit être enregistré auprès de Jobsplus et demander l'accès au portail Single Permit (singlepermit.gov.mt) au moyen d'une e-ID personnelle. Identità vérifie l'organisation auprès de Jobsplus, du Malta Business Registry et des autorités fiscales avant d'accorder l'accès.",
    },
    {
      title: "Publier le poste vacant",
      actor: "Employer",
      detail:
        "Publiez l'offre d'emploi auprès de Jobsplus et sur EURES pendant au moins 3 semaines dans les 2 mois précédant la demande, et conservez-en la preuve. Les annonces qui ne respectent pas les normes de Jobsplus entraînent un refus automatique.",
    },
    {
      title: "Soumettre la demande en ligne",
      actor: "Employer",
      detail:
        "L'employeur remplit la demande et télécharge les documents sur le portail, y compris la Declaration of Suitability de Jobsplus. Le travailleur reçoit un lien pour confirmer et valider les données. La soumission finale n'est possible qu'une fois la redevance payée en ligne par l'employeur ou le travailleur.",
    },
    {
      title: "Vérifications des parties prenantes et Approval in Principle",
      actor: "Authority",
      detail:
        "Identità transmet le dossier à Jobsplus pour l'évaluation du marché du travail et à la police pour le contrôle de sécurité. En cas d'approbation, une lettre d'Approval in Principle est délivrée. Elle n'autorise pas le travailleur à commencer à travailler.",
    },
    {
      title: "Visa et entrée",
      actor: "Employee",
      detail:
        "Les travailleurs soumis à visa présentent la lettre d'Approval in Principle à une ambassade ou un consulat de Malte ; pour les membres d'équipage, la lettre doit être utilisée dans les 180 jours. Les demandeurs déjà sur place doivent détenir un visa ou un permis valable encore au moins 6 semaines à la date de la demande.",
    },
    {
      title: "Données biométriques et délivrance de la carte",
      actor: "Employee",
      detail:
        "Après l'arrivée, le travailleur prend rendez-vous auprès d'Identità pour les données biométriques et présente les documents originaux. L'emploi ne peut commencer qu'une fois le permis délivré ; employer le travailleur avant cela est illégal.",
    },
    {
      title: "Déclarer l'engagement auprès de Jobsplus",
      actor: "Employer",
      detail:
        "Une fois le permis unique en main, l'employeur dépose le formulaire d'engagement sur le portail Jobsplus. Les formulaires d'engagement et de fin de contrat doivent être déposés dans les 4 jours ouvrables.",
    },
  ],
  employerDocs: [
    { label: "Demande de permis unique soumise sur le portail Identità par l'employeur vérifié" },
    { label: "Declaration of Suitability de Jobsplus confirmant que le travailleur est apte au poste" },
    { label: "Preuve que le poste vacant a été publié auprès de Jobsplus et sur EURES pendant la période requise" },
    { label: "Contrat de travail signé ou offre d'emploi précisant la rémunération et le poste", note: "Jobsplus peut demander des contrats, des licences, des preuves d'établissement de l'entreprise et des documents de conformité" },
    { label: "Preuve que l'employeur remplit les conditions de Jobsplus, par exemple l'emploi d'au moins un ressortissant maltais, de l'UE ou suisse", note: "Vérifié par Jobsplus sur la base de ses propres registres ; tenez les formulaires d'engagement à jour" },
    { label: "Procuration notariée lorsqu'un représentant dépose au nom d'un employeur établi à l'étranger" },
  ],
  employeeDocs: [
    { label: "Copie certifiée d'un passeport valide" },
    { label: "Photographie au format passeport" },
    { label: "Curriculum vitae" },
    { label: "Qualifications reconnues par le MQRIC, ou récépissé attestant que la reconnaissance a été demandée", note: "Sans qualifications formelles, au moins 3 ans d'expérience pertinente sont attendus" },
    { label: "Inscription auprès de l'ordre professionnel compétent pour les professions réglementées" },
    { label: "Preuve de logement à Malte, par exemple un contrat de bail", note: "Figure sur les listes de contrôle d'Identità ; confirmez la liste actuelle pour la catégorie" },
    { label: "Preuve de dépistage médical ou d'assurance selon les exigences de la liste de contrôle d'Identità" },
    { label: "Visa ou document de séjour valable encore au moins 6 semaines, pour les demandeurs déjà à Malte" },
  ],
  alternativeRoutes: [
    { name: "Key Employee Initiative (KEI)", summary: "Permis unique accéléré pour les postes de direction ou hautement techniques dont le salaire brut dépasse un seuil fixé par Identità. Traitement en environ 5 jours ouvrables une fois le dossier complet ; permis de 1 an renouvelable jusqu'à 3 ans ; une annonce de 2 semaines suffit." },
    { name: "Specialist Employee Initiative (SEI)", summary: "Permis unique plus rapide pour les travailleurs qualifiés titulaires de qualifications de niveau MQF 6, ou d'une certification MQF plus 3 ans d'expérience, au-dessus d'un seuil salarial inférieur à celui de la KEI." },
    { name: "Carte bleue européenne", summary: "Pour les travailleurs hautement qualifiés titulaires d'un diplôme de l'enseignement supérieur et d'un salaire supérieur au seuil de la carte bleue ; traitée par Identità selon une réglementation distincte." },
    { name: "Licence d'emploi pour un travail de moins de 6 mois", summary: "Jobsplus délivre une licence d'emploi, après quoi le travailleur demande un permis de séjour à Identità. Utilisée pour le travail saisonnier et d'autres engagements courts." },
  ],
  watchOuts: [
    "L'offre d'emploi doit respecter les normes de Jobsplus (Jobsplus et EURES, au moins 3 semaines, dans les 2 mois précédant le dépôt). Les annonces non conformes entraînent un refus automatique et la redevance n'est pas remboursée.",
    "Jobsplus applique une Workforce Application Limit par employeur et refuse les demandes des entreprises ayant procédé à des licenciements dans des postes similaires au cours des 12 mois précédents. Une fois la limite atteinte, aucune nouvelle demande n'est acceptée jusqu'au mois suivant.",
    "Les renouvellements et les changements d'employeur, d'adresse ou de passeport doivent être déposés avant l'expiration du document en cours ; les demandes tardives sont rejetées. Un recours contre un refus doit parvenir à l'Immigration Appeals Board dans les 3 jours ouvrables.",
  ],
};
