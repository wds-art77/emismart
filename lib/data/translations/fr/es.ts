import type { CountryDetails } from "../types";

export const es: CountryDetails = {
  authorities: [
    "Oficina de Extranjería de la province du lieu de travail (Ministerio de Inclusión, Seguridad Social y Migraciones) : décision sur l'autorisation",
    "Servicio Público de Empleo Estatal (SEPE) et services publics régionaux de l'emploi : catalogue des métiers en pénurie et gestion des postes vacants",
    "Ambassade ou consulat d'Espagne (Ministerio de Asuntos Exteriores, Unión Europea y Cooperación) : visa de séjour et de travail",
    "Tesorería General de la Seguridad Social : inscription du travailleur, qui active l'autorisation",
    "Policía Nacional ou Oficina de Extranjería : délivrance de la TIE",
  ],
  legalBasis: [
    "Ley Orgánica 4/2000, de 11 de enero, sobre derechos y libertades de los extranjeros en España y su integración social (articles 36 à 40)",
    "Reglamento de Extranjería approuvé par le Real Decreto 1155/2024, de 19 de noviembre (articles 72 à 81), en vigueur depuis le 20 mai 2025",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
  ],
  steps: [
    {
      title: "Vérifier la situation nationale de l'emploi",
      actor: "Employer",
      detail:
        "L'employeur vérifie si la profession figure dans le catalogue actuel des métiers en pénurie de la région, si une dispense au titre de l'article 40 de la Ley Orgánica 4/2000 s'applique, ou si un poste vacant doit d'abord être enregistré auprès du service public de l'emploi pour obtenir le certificat d'insuffisance de candidats.",
    },
    {
      title: "Signer le contrat de travail",
      actor: "Both",
      detail:
        "Le contrat est signé par l'employeur et le travailleur sur le modèle officiel, avec des conditions conformes à la convention collective applicable et une date de début conditionnée à la prise d'effet de l'autorisation. La rémunération à temps partiel doit tout de même atteindre le salaire minimum à temps plein sur l'année.",
    },
    {
      title: "Déposer la demande à l'Oficina de Extranjería",
      actor: "Employer",
      detail:
        "L'employeur dépose le formulaire officiel avec le contrat, la preuve de moyens économiques, la copie du passeport du travailleur, la preuve des qualifications et, le cas échéant, le certificat du service de l'emploi, à l'Oficina de Extranjería de la province du lieu de travail. Les dossiers incomplets disposent de 10 jours pour être complétés.",
    },
    {
      title: "Décision et transmission au consulat",
      actor: "Authority",
      detail:
        "L'office vérifie les rapports fiscaux, de Sécurité sociale, de casier judiciaire et de police et statue dans les 3 mois. Une décision favorable est enregistrée dans le système afin que le consulat du lieu de résidence du travailleur puisse la consulter.",
    },
    {
      title: "Demander le visa de séjour et de travail",
      actor: "Employee",
      detail:
        "Dans le mois suivant la notification à l'employeur, le travailleur dépose sa demande en personne au consulat avec le passeport, l'autorisation, le contrat visé, un extrait de casier judiciaire et un certificat médical. Le consulat statue dans un délai de 1 mois et le travailleur retire le visa en personne.",
    },
    {
      title: "Entrer en Espagne et s'inscrire à la Sécurité sociale",
      actor: "Both",
      detail:
        "Le travailleur entre en Espagne avec le visa. L'autorisation ne prend effet qu'une fois que l'employeur a inscrit le travailleur à la Sécurité sociale, ce qui doit intervenir dans les 3 mois de l'entrée légale.",
    },
    {
      title: "Demander la TIE",
      actor: "Employee",
      detail:
        "Dans le mois suivant l'inscription à la Sécurité sociale, le travailleur demande en personne la carte d'identité d'étranger (tarjeta de identidad de extranjero) à l'Oficina de Extranjería ou au commissariat de police.",
    },
  ],
  employerDocs: [
    { label: "Formulaire officiel de demande d'autorisation initiale de séjour et de travail" },
    { label: "Numéro d'identification fiscale et, pour les sociétés, l'acte public prouvant le pouvoir de représentation du signataire" },
    { label: "Copie du contrat de travail sur le modèle officiel, signé par les deux parties" },
    { label: "Preuve de moyens économiques, matériels ou personnels pour mener le projet d'entreprise et respecter les obligations du contrat", note: "Les particuliers présentent aussi la déclaration de revenus de l'année précédente ou autorisent une vérification des données." },
    { label: "Certificat du service public de l'emploi attestant l'insuffisance de candidats, ou preuve que la profession figure dans le catalogue des métiers en pénurie ou est dispensée" },
    { label: "Preuve d'être à jour des obligations fiscales et de Sécurité sociale, généralement vérifiée par l'office" },
  ],
  employeeDocs: [
    { label: "Copie intégrale d'un passeport ou d'un document de voyage valide" },
    { label: "Preuve de formation et, lorsque la profession est réglementée, la qualification professionnelle légalement requise" },
    { label: "Formulaire de demande de visa national signé par le travailleur" },
    { label: "Extrait de casier judiciaire de chaque pays de résidence au cours des 5 dernières années, légalisé ou apostillé, avec traduction jurée en espagnol" },
    { label: "Certificat médical délivré au cours des 3 derniers mois confirmant l'absence de maladie ayant de graves répercussions sur la santé publique" },
    { label: "Photographie d'identité récente" },
    { label: "Preuve de résidence légale dans la circonscription consulaire où le visa est demandé" },
    { label: "Paiement de la redevance de visa et, plus tard, des redevances de séjour et de travail (modelo 790)", note: "La redevance de l'autorisation initiale de séjour est payée par le travailleur et celle de l'autorisation de travail par l'employeur ; les montants changent chaque année." },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne (Tarjeta azul-UE)", summary: "Travailleurs hautement qualifiés titulaires d'un diplôme de l'enseignement supérieur ou d'une expérience équivalente et d'un salaire supérieur au seuil fixé par décret. Régie par le Reglamento au titre de la directive (UE) 2021/1883, sans test de la situation nationale de l'emploi." },
    { name: "Professionnel hautement qualifié et TIC au titre de la Ley 14/2013", summary: "Autorisations de séjour accélérées traitées par l'Unidad de Grandes Empresas y Colectivos Estratégicos pour le personnel hautement qualifié, les personnes transférées au sein d'un groupe, les chercheurs et les investisseurs, avec des délais de décision plus courts." },
    { name: "Visa de recherche d'emploi", summary: "Visa pour chercher un emploi en Espagne, après quoi l'accès à l'autorisation de travail salarié suit les règles spécifiques du Reglamento pour les titulaires de visa." },
    { name: "Gestion collective des embauches dans le pays d'origine (GECCO)", summary: "Arrêté ministériel annuel permettant aux employeurs de recruter des groupes de travailleurs à l'étranger, souvent pour le travail saisonnier, par une procédure simplifiée." },
  ],
  watchOuts: [
    "Le silence vaut refus : si l'Oficina de Extranjería n'a pas notifié de décision dans les 3 mois, la demande est réputée rejetée et la seule voie possible est un recours ou un nouveau dépôt.",
    "L'autorisation n'a aucun effet tant que le travailleur n'est pas inscrit à la Sécurité sociale dans les 3 mois de l'entrée. Manquer ce délai annule toute la procédure.",
    "L'autorisation initiale est liée à une communauté autonome et à une profession. Un changement d'employeur n'est possible qu'après 3 mois dans la même profession, ou plus tôt en cas de manquement grave de l'employeur.",
  ],
};
