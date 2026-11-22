import type { CountryDetails } from "../types";

export const fi: CountryDetails = {
  authorities: [
    "Service finlandais de l'immigration (Maahanmuuttovirasto, Migri) : décision sur le séjour et le travail, y compris l'évaluation de la disponibilité de main-d'œuvre",
    "Ministère des Affaires économiques et de l'Emploi et Centres régionaux de développement économique (elinvoimakeskukset) : secteurs nationaux en pénurie et politiques régionales des permis de travail",
    "Ambassades et consulats finlandais : vérification d'identité, empreintes digitales et visa D",
    "Agence des services numériques et des données démographiques (autorité locale d'enregistrement) : enregistrement de la résidence après l'arrivée",
  ],
  legalBasis: [
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
    "Ulkomaalaislaki (loi sur les étrangers 301/2004), chapitre 5 sur les permis de séjour fondés sur le travail",
    "Décret gouvernemental fixant le seuil salarial en euros pour le permis de personne salariée, comme le prévoit la loi sur les étrangers",
  ],
  steps: [
    {
      title: "Vérifier la voie et la politique des permis de travail",
      actor: "Employer",
      detail:
        "Confirmez que l'emploi ne relève pas d'un permis propre à un emploi (spécialiste, carte bleue européenne, chercheur, travail saisonnier). Vérifiez si la profession figure sur la liste nationale des pénuries ou dans la politique régionale des permis de travail, ce qui supprime l'évaluation de disponibilité.",
    },
    {
      title: "Recruter sur le marché de l'UE/EEE si une évaluation est nécessaire",
      actor: "Employer",
      detail:
        "Publiez l'offre sur Job Market Finland pendant au moins deux semaines et conservez les preuves des candidatures et des raisons pour lesquelles elles ne convenaient pas. Cette étape doit être achevée avant que le travailleur dépose sa demande.",
    },
    {
      title: "Signer le contrat et transmettre les conditions d'emploi",
      actor: "Employer",
      detail:
        "Saisissez les conditions d'emploi dans Enter Finland for Employers, ou complétez le formulaire TEM 0.54 pour une demande papier, et joignez les attestations de l'employeur. Le traitement ne peut pas commencer sans ces informations.",
    },
    {
      title: "Déposer la demande et prouver son identité",
      actor: "Employee",
      detail:
        "Déposez la demande dans Enter Finland, payez la redevance et, dans les trois mois, rendez-vous dans une ambassade ou un consulat finlandais (ou chez un prestataire de services externe) pour prouver votre identité et donner vos empreintes digitales. Une demande papier peut aussi être déposée à la mission.",
    },
    {
      title: "Évaluation et décision de Migri",
      actor: "Authority",
      detail:
        "Migri vérifie la disponibilité de main-d'œuvre, les conditions d'emploi et le seuil salarial, le respect par l'employeur de ses obligations légales et les motifs généraux de refus, puis rend une seule décision nommant le ou les domaines professionnels couverts.",
    },
    {
      title: "Entrée, carte de permis de séjour et enregistrement",
      actor: "Employee",
      detail:
        "Après une décision positive, le travailleur peut utiliser un visa D, valable 100 jours, pour voyager avant l'arrivée de la carte. À l'arrivée, le travailleur enregistre sa résidence auprès de l'autorité locale d'enregistrement s'il séjourne plus d'un an. L'employeur notifie à Migri le début de l'emploi et toute fin anticipée.",
    },
  ],
  employerDocs: [
    { label: "Conditions d'emploi saisies dans Enter Finland for Employers ou sur le formulaire TEM 0.54", note: "Requises avant le début du traitement." },
    { label: "Rapport de disponibilité avec preuve de la publication sur Job Market Finland et du résultat du recrutement", note: "Uniquement lorsque la profession ne figure ni sur la liste des pénuries ni dans la politique régionale." },
    { label: "Attestation d'impôts payés ou attestation de dette fiscale, datant de moins de trois mois" },
    { label: "Attestations d'assurance pension (TyEL), accidents, vie collective et chômage, datant de moins de trois mois" },
    { label: "Rapport sur le nombre de salariés et la part de personnel à temps plein et à temps partiel" },
    { label: "Contrat de travail signé montrant une rémunération conforme à la convention collective et au seuil salarial" },
  ],
  employeeDocs: [
    { label: "Passeport valide, présenté à la mission, avec copies en couleur de la page de données et de toutes les pages comportant des mentions" },
    { label: "Photo d'identité conforme aux directives de la police finlandaise, ou code de récupération de photo" },
    { label: "Preuve de séjour légal dans le pays où la demande est déposée" },
    { label: "Contrat de travail ou offre ferme" },
    { label: "Diplômes ou certificats lorsque l'emploi exige une qualification ou un droit d'exercer" },
    { label: "Certificat salmonelle pour les emplois de manipulation d'aliments ; certificat tuberculose pour le travail avec des enfants d'âge préscolaire" },
    { label: "Preuve de paiement de la redevance" },
  ],
  alternativeRoutes: [
    { name: "Permis de séjour pour spécialiste", summary: "Pour les diplômés de l'enseignement supérieur et les spécialistes informatiques occupant des fonctions d'expert. Pas d'évaluation de disponibilité, premier permis de deux ans et service accéléré avec un objectif de traitement de deux semaines." },
    { name: "Carte bleue européenne", summary: "Travailleurs hautement qualifiés titulaires d'un diplôme de l'enseignement supérieur et d'un salaire supérieur au seuil de la carte bleue ; avantages de mobilité dans l'UE." },
    { name: "Travail saisonnier", summary: "Visa de travail saisonnier jusqu'à trois mois ou permis de séjour pour travail saisonnier jusqu'à neuf mois ; l'évaluation de disponibilité s'applique aux permis de six à neuf mois." },
    { name: "Permis de recherche d'emploi pour diplômés et chercheurs", summary: "Les titulaires d'un diplôme finlandais ou d'un permis de chercheur peuvent obtenir un permis de recherche d'emploi de deux ans au plus, demandé dans les cinq ans du permis précédent." },
  ],
  watchOuts: [
    "La demande n'est pas traitée tant que le travailleur n'a pas prouvé son identité dans une mission finlandaise et que l'employeur n'a pas joint les conditions d'emploi ; ces deux étapes sont souvent retardées.",
    "Le permis est limité aux domaines professionnels nommés dans la décision. Travailler dans un autre domaine requiert une nouvelle demande de permis ; l'évaluation de disponibilité n'est levée que si le travailleur a déjà travaillé au moins neuf mois sous le permis.",
    "Les demandes dans des domaines en offre excédentaire de main-d'œuvre selon la politique régionale des permis de travail sont généralement refusées même avec une offre d'emploi, et l'employeur doit avoir rempli ses obligations fiscales et d'assurance.",
  ],
};
