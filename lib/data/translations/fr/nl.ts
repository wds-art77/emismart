import type { CountryDetails } from "../types";

export const nl: CountryDetails = {
  authorities: [
    "Immigratie- en Naturalisatiedienst (IND) : décision sur le séjour et le travail",
    "UWV (Uitvoeringsinstituut Werknemersverzekeringen) : avis sur le test du marché du travail",
    "Ambassade ou consulat des Pays-Bas : délivrance du visa d'entrée MVV lorsqu'il est requis",
  ],
  legalBasis: [
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
    "Wet arbeid vreemdelingen (Wav) et Besluit uitvoering Wav",
    "Vreemdelingenwet 2000 et Vreemdelingenbesluit 2000",
  ],
  steps: [
    {
      title: "Vérifier si un régime distinct s'applique",
      actor: "Employer",
      detail:
        "Les migrants hautement qualifiés (kennismigranten), les titulaires d'une carte bleue européenne, les personnes transférées au sein de leur groupe et les chercheurs suivent leurs propres voies et n'ont pas besoin d'une GVVA.",
    },
    {
      title: "Enregistrer le poste vacant auprès de l'UWV",
      actor: "Employer",
      detail:
        "Le poste vacant doit être déclaré à l'UWV et ouvert au marché de l'EEE pendant au moins 5 semaines avant la demande, avec la preuve des efforts de recrutement.",
    },
    {
      title: "Déposer la demande de GVVA",
      actor: "Employer",
      detail:
        "L'employeur soumet la demande et les documents du travailleur à l'IND, en ligne pour les répondants reconnus ou sur papier, et paie la redevance.",
    },
    {
      title: "L'IND demande l'avis de l'UWV",
      actor: "Authority",
      detail:
        "L'UWV examine le test du marché du travail, les salaires et les conditions de travail et rend un avis à l'IND, qui prend une décision unique sur le séjour et le travail.",
    },
    {
      title: "Retrait du MVV et entrée",
      actor: "Employee",
      detail:
        "Si un MVV est requis, le travailleur le retire à l'ambassade dans les 3 mois de l'approbation et se rend aux Pays-Bas.",
    },
    {
      title: "Carte de séjour et document complémentaire",
      actor: "Employee",
      detail:
        "Le travailleur retire la carte de séjour à un guichet de l'IND et reçoit le document complémentaire désignant l'employeur. L'inscription auprès de la commune (BRP) et un test de tuberculose peuvent être requis selon la nationalité.",
    },
  ],
  employerDocs: [
    { label: "Formulaire de demande de GVVA signé par l'employeur" },
    { label: "Contrat de travail signé avec un salaire au moins égal au minimum légal et conforme au marché" },
    { label: "Preuve de l'enregistrement du poste vacant auprès de l'UWV et des efforts de recrutement" },
    { label: "Extrait de la Chambre de commerce (KVK)" },
    { label: "Certificat d'antécédents et déclaration de l'employeur lorsqu'ils sont demandés" },
  ],
  employeeDocs: [
    { label: "Passeport valide, copie de toutes les pages comportant des cachets ou des mentions" },
    { label: "Certificat d'antécédents (antecedentenverklaring) signé par le travailleur" },
    { label: "Diplômes ou preuves de qualifications lorsque l'emploi les exige" },
    { label: "Preuve d'assurance maladie après l'arrivée" },
    { label: "Photographie d'identité conforme aux exigences néerlandaises" },
    { label: "Documents d'état civil légalisés et traduits pour les membres de la famille accompagnants" },
  ],
  alternativeRoutes: [
    { name: "Migrant hautement qualifié (kennismigrant)", summary: "Voie rapide via un répondant reconnu avec un salaire supérieur au seuil annuel. Pas de test du marché du travail. Ce n'est pas une GVVA." },
    { name: "Carte bleue européenne", summary: "Seuil salarial plus élevé, diplôme universitaire, avantages de mobilité dans l'UE." },
    { name: "Transfert intragroupe", summary: "Pour les cadres, les spécialistes et les stagiaires transférés au sein d'un groupe." },
  ],
  watchOuts: [
    "Les redevances doivent être payées avant que le délai de décision ne commence. Tant qu'elles ne sont pas payées, les 90 jours n'ont pas commencé à courir.",
    "La GVVA est propre à l'employeur. Un nouvel employeur doit demander un nouveau permis ou déposer une notification de changement.",
    "Les ressortissants de certains pays doivent passer un test de tuberculose dans les 3 mois de l'arrivée.",
  ],
};
