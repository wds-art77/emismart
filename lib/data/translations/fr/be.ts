import type { CountryDetails } from "../types";

export const be: CountryDetails = {
  authorities: [
    "Flandre : Département Travail et Économie sociale (Werk en Sociale Economie), via la plateforme Working in Belgium",
    "Wallonie : Service public de Wallonie, Emploi",
    "Bruxelles-Capitale : Bruxelles Economie et Emploi",
    "Communauté germanophone : Ministerium der Deutschsprachigen Gemeinschaft",
    "Fédéral : Office des étrangers (Dienst Vreemdelingenzaken) pour la décision de séjour",
  ],
  legalBasis: [
    "Directive 2011/98/UE (directive sur le permis unique), refondue par la directive (UE) 2024/1233",
    "Accord de coopération du 2 février 2018 entre l'État fédéral, les Régions et les Communautés",
    "Loi du 15 décembre 1980 sur l'accès au territoire, le séjour, l'établissement et l'éloignement des étrangers",
    "Décrets et arrêtés régionaux relatifs à l'occupation des travailleurs étrangers",
  ],
  steps: [
    {
      title: "Choisir la Région compétente",
      actor: "Employer",
      detail:
        "La Région où le travailleur travaillera principalement détermine l'autorité qui reçoit le dossier. La Flandre, la Wallonie, Bruxelles et la Communauté germanophone gèrent chacune leur propre plateforme et leurs propres listes de catégories.",
    },
    {
      title: "Constituer le dossier conjoint",
      actor: "Both",
      detail:
        "L'employeur rassemble ses propres formulaires et les documents personnels du travailleur. L'ensemble est introduit en une seule soumission électronique.",
    },
    {
      title: "Introduire la demande auprès de la Région",
      actor: "Employer",
      detail:
        "L'employeur ou le mandataire introduit la demande en ligne. La Région vérifie la recevabilité et confirme que le dossier est complet.",
    },
    {
      title: "Examen parallèle",
      actor: "Authority",
      detail:
        "La Région évalue le volet travail. L'Office des étrangers évalue le volet séjour (passeport, casier judiciaire, certificat médical, ordre public). Les deux doivent approuver.",
    },
    {
      title: "Décision et annexe 46",
      actor: "Authority",
      detail:
        "En cas de décision positive, le travailleur reçoit l'annexe 46. S'il est à l'étranger, il l'utilise pour obtenir un visa D auprès de l'ambassade ou du consulat de Belgique.",
    },
    {
      title: "Arrivée et inscription",
      actor: "Employee",
      detail:
        "Dans les 8 jours de son arrivée, le travailleur s'inscrit auprès de la commune (commune / gemeente), qui délivre la carte électronique de permis unique (carte A).",
    },
  ],
  employerDocs: [
    { label: "Formulaire régional de demande, signé par l'employeur" },
    { label: "Contrat de travail signé, conforme au droit belge" },
    { label: "Preuve de l'inscription de l'entreprise (numéro BCE / KBO)" },
    { label: "Preuve que le salaire atteint le seuil régional applicable", note: "Pertinent pour les catégories hautement qualifiées et de cadres dirigeants." },
    { label: "Mandat si un mandataire introduit la demande au nom de l'employeur" },
  ],
  employeeDocs: [
    { label: "Passeport valide, copie intégrale de toutes les pages" },
    { label: "Certificat médical d'un médecin agréé par l'ambassade de Belgique", note: "Requis lorsque le travailleur est à l'étranger." },
    { label: "Extrait de casier judiciaire, légalisé ou apostillé, avec traduction jurée", note: "Pour les travailleurs âgés de 18 ans et plus." },
    { label: "Diplômes ou qualifications, légalisés, avec traduction", note: "Requis pour les catégories hautement qualifiées, chercheurs et assimilées." },
    { label: "Preuve de paiement de la redevance fédérale à l'Office des étrangers" },
    { label: "Photos d'identité conformes aux normes OACI" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Pour les diplômés universitaires disposant d'un contrat d'au moins 1 an au-dessus du seuil salarial de la carte bleue. Introduite par le même canal du permis unique." },
    { name: "Transfert intragroupe (ICT)", summary: "Pour les cadres, spécialistes et stagiaires détachés depuis une entité non européenne du même groupe." },
    { name: "Carte professionnelle", summary: "Pour une activité indépendante. Procédure régionale distincte, qui n'est pas un permis unique." },
  ],
  watchOuts: [
    "Chaque Région applique ses propres seuils salariaux et listes de pénurie. Un dossier préparé pour la Flandre n'est pas automatiquement valable pour Bruxelles.",
    "Le délai de 4 mois ne commence à courir qu'une fois que la Région déclare le dossier recevable. Les dossiers incomplets font recommencer la procédure.",
    "Un changement d'employeur requiert une nouvelle demande de permis unique par le nouvel employeur.",
  ],
};
