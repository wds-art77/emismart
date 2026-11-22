import type { CountryDetails } from "../types";

export const se: CountryDetails = {
  authorities: [
    "Migrationsverket (Agence suédoise des migrations) : décision sur le permis de travail et de séjour, carte de permis de séjour",
    "Syndicat du secteur : avis sur les conditions d'emploi avant que la demande ne soit complétée",
    "Ambassades et consulats généraux de Suède : présentation du passeport, entretiens, données biométriques et retrait de la carte",
    "Arbetsförmedlingen (Service public suédois de l'emploi) : Platsbanken, le canal habituel pour la publication du poste pendant 10 jours",
    "Skatteverket (Agence suédoise des impôts) : inscription au registre de la population et numéro d'identité personnel pour les séjours d'un an ou plus",
  ],
  legalBasis: [
    "Utlänningslagen (2005:716), chapitre 6 sur les permis de travail, y compris l'exigence salariale du chapitre 6, article 2",
    "Utlänningsförordningen (2006:97), y compris le chapitre 5, article 6 sur les professions exemptées de l'exigence salariale complète et les règles sur les délais de traitement",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
  ],
  steps: [
    {
      title: "Publier le poste vacant",
      actor: "Employer",
      detail:
        "Le poste est publié pendant au moins 10 jours, par exemple sur Platsbanken, afin que les candidats de Suède et de l'UE/EEE puissent postuler. Migrationsverket peut en demander la preuve.",
    },
    {
      title: "Signer le contrat de travail et souscrire les assurances",
      actor: "Both",
      detail:
        "Le contrat doit être signé par les deux parties avant le dépôt de la demande. L'employeur vérifie que le salaire et les conditions respectent le seuil et la convention collective, et souscrit les polices d'assurance requises.",
    },
    {
      title: "Ouvrir le dossier dans le service en ligne et consulter le syndicat",
      actor: "Employer",
      detail:
        "L'employeur saisit les données du travailleur et les conditions d'emploi dans le service en ligne des employeurs, puis les envoie au syndicat concerné, qui peut donner son avis. Des informations complètes à ce stade sont ce qui permet à Migrationsverket de traiter le dossier en priorité.",
    },
    {
      title: "Compléter la demande et payer la redevance",
      actor: "Employee",
      detail:
        "Le travailleur reçoit un lien par courriel, vérifie que les conditions correspondent au contrat, joint les copies du passeport et les éventuels documents d'assurance, choisit l'ambassade ou le consulat pour le contrôle du passeport et paie la redevance par carte. La demande n'est enregistrée qu'une fois cette partie soumise.",
    },
    {
      title: "Contrôle du passeport et données biométriques",
      actor: "Employee",
      detail:
        "La plupart des demandeurs font vérifier leur passeport via l'application de Migrationsverket. Les autres sont convoqués à l'ambassade pour présenter le passeport, passer un entretien ou donner leurs empreintes digitales et une photo pour la carte de permis de séjour si un visa est nécessaire pour entrer en Suède.",
    },
    {
      title: "Examen et décision",
      actor: "Authority",
      detail:
        "Migrationsverket peut refuser immédiatement si les conditions ne sont manifestement pas remplies ; sinon, il examine le dossier, demande des informations complémentaires si nécessaire et statue. L'employeur est informé par courrier et le travailleur par courriel ou par lettre. Le travailleur ne doit pas se rendre en Suède avant la décision.",
    },
    {
      title: "Carte de permis de séjour, arrivée et inscription",
      actor: "Employee",
      detail:
        "La carte est retirée à l'ambassade ou envoyée à l'adresse suédoise et doit être présentée avec le passeport à l'entrée. Le travail doit commencer dans les 4 mois du premier jour du permis. Les séjours d'un an ou plus sont enregistrés auprès de Skatteverket pour obtenir un numéro d'identité personnel.",
    },
  ],
  employerDocs: [
    { label: "Données d'emploi saisies dans le service en ligne des employeurs : identité du travailleur, poste, salaire, horaires de travail et durée" },
    { label: "Contrat de travail signé par les deux parties avant la demande" },
    { label: "Avis du syndicat, ou preuve que le syndicat a eu la possibilité de donner son avis" },
    { label: "Preuve que le poste vacant a été publié pendant au moins 10 jours en Suède et dans l'UE/EEE" },
    { label: "Confirmation des assurances maladie, vie, accidents du travail et pension professionnelle en place dès le début de l'emploi" },
    { label: "Pour les secteurs soumis à des exigences renforcées (nettoyage, hôtellerie-restauration, construction, commerce, agriculture, ateliers, intérim) : preuve de la capacité à payer le salaire pendant au moins 3 mois", note: "Non requis pour les employeurs communaux, régionaux ou étatiques" },
  ],
  employeeDocs: [
    { label: "Copies des pages du passeport indiquant l'identité, la validité et les éventuels permis" },
    { label: "Copie du contrat de travail signé" },
    { label: "Assurance maladie complète valable pour toute la durée du séjour, pour un emploi d'un an ou moins" },
    { label: "Procuration (formulaire 107011) lorsqu'un représentant dépose la demande" },
    { label: "Pour la famille accompagnante : preuve du lien de parenté, actes de naissance des enfants et preuve du respect de l'exigence de ressources" },
    { label: "Traductions certifiées en suédois ou en anglais, avec copies des originaux" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne (EU-blåkort)", summary: "Enseignement supérieur d'au moins 180 crédits ou 5 ans d'expérience pertinente, contrat d'au moins 6 mois et salaire d'au moins 1,25 fois le salaire moyen suédois, fixé chaque année par Migrationsverket. Valable entre 9 mois et 4 ans." },
    { name: "Voie rapide pour les travailleurs hautement qualifiés", summary: "Les professions de direction et de niveau universitaire (groupes SSYK 1 à 3) hors secteurs à exigences renforcées reçoivent une décision dans les 30 jours lorsque la demande est complète." },
    { name: "Permis ICT", summary: "Cadres, spécialistes et stagiaires transférés au sein d'un groupe, traités dans la catégorie des travailleurs hautement qualifiés." },
    { name: "Demande depuis la Suède après la visite d'un employeur", summary: "Un visiteur venu rencontrer un employeur dans une profession très demandée peut parfois déposer sa demande sans quitter la Suède. Les conditions sont strictes ; confirmez sur la page de Migrationsverket consacrée à ce groupe." },
  ],
  watchOuts: [
    "Les dossiers incomplets doublent à peu près le délai d'attente. Tout ce que l'employeur saisit doit correspondre au contrat signé, et le travailleur doit joindre tous les documents en une seule fois.",
    "Le seuil salarial est vérifié par rapport au salaire médian en vigueur au moment de la décision, de sorte qu'une offre au minimum peut devenir insuffisante si le seuil augmente pendant le traitement.",
    "Le permis est propre à l'employeur et aux fonctions. Changer l'un ou l'autre sans nouvelle demande, ou ne pas commencer à travailler dans les 4 mois, peut entraîner une révocation.",
  ],
};
