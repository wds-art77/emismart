import type { CountryDetails } from "../types";

export const pt: CountryDetails = {
  authorities: [
    "AIMA, Agência para a Integração, Migrações e Asilo : permis de séjour et renouvellements",
    "Ambassades et consulats du Portugal (Ministério dos Negócios Estrangeiros) : visas de résidence",
    "IEFP, Instituto do Emprego e da Formação Profissional : système public d'offres d'emploi",
    "Segurança Social : inscription du travailleur, condition du permis de séjour",
    "ACT, Autoridade para as Condições do Trabalho : inspection du travail",
  ],
  legalBasis: [
    "Lei n.º 23/2007, de 4 de julho (regime jurídico de entrada, permanência, saída e afastamento de estrangeiros), telle que modifiée, articles 52, 58, 59, 75, 77, 82 et 88",
    "Decreto Regulamentar n.º 84/2007, de 5 de novembro, portant exécution de la Lei de Estrangeiros",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
  ],
  steps: [
    {
      title: "Obtenir une offre d'emploi au Portugal",
      actor: "Both",
      detail:
        "L'employeur établit un contrat de travail, une promesse de contrat ou une déclaration d'intérêt individualisée pour l'embauche du travailleur. Pour les professions réglementées, le travailleur doit aussi détenir la qualification reconnue.",
    },
    {
      title: "Demander le visa de résidence au consulat",
      actor: "Employee",
      detail:
        "Le travailleur dépose sa demande en personne au consulat portugais de son pays de résidence avec le contrat, le passeport, l'extrait de casier judiciaire, la preuve de moyens, l'assurance voyage et la preuve de logement. Le visa est décidé dans les 60 jours et est valable 4 mois avec deux entrées.",
    },
    {
      title: "Entrer au Portugal et s'inscrire",
      actor: "Both",
      detail:
        "Le travailleur voyage avec le visa. L'employeur inscrit le travailleur à la Sécurité sociale et le travailleur obtient un numéro fiscal (NIF) et un numéro de Sécurité sociale (NISS), tous deux nécessaires pour la demande de permis.",
    },
    {
      title: "Prendre rendez-vous et se présenter à l'AIMA",
      actor: "Employee",
      detail:
        "Pendant les 4 mois de validité du visa, le travailleur demande un rendez-vous à l'AIMA et soumet la demande de permis de séjour au titre de l'article 88, paragraphe 1, les données biométriques étant relevées lors du rendez-vous.",
    },
    {
      title: "Décision de l'AIMA",
      actor: "Authority",
      detail:
        "L'AIMA vérifie les conditions générales de l'article 77 (visa valide, moyens de subsistance, logement, inscription à la Sécurité sociale, absence de motifs pénaux ou de sécurité) et doit statuer dans les 90 jours, prolongeables de 30 jours.",
    },
    {
      title: "Carte de séjour et renouvellement",
      actor: "Employee",
      detail:
        "La carte de séjour est délivrée pour 2 ans. Le renouvellement pour des périodes de 3 ans est demandé avant l'expiration, avec la preuve de la poursuite de l'emploi ou de moyens suffisants, et est décidé dans les 60 jours.",
    },
  ],
  employerDocs: [
    { label: "Contrat de travail, promesse de contrat de travail ou déclaration d'intérêt individualisée pour l'embauche du travailleur" },
    { label: "Données d'immatriculation de la société et preuve que l'employeur est établi au Portugal" },
    { label: "Preuve de l'inscription du travailleur à la Segurança Social après l'arrivée" },
    { label: "Déclaration sur l'emploi, le salaire et le lieu de travail utilisée pour le dossier de visa", note: "Les consulats peuvent demander une déclaration sur l'honneur de l'employeur." },
  ],
  employeeDocs: [
    { label: "Formulaire de demande de visa national et photographies d'identité récentes" },
    { label: "Passeport valide avec une durée de validité restante suffisante" },
    { label: "Extrait de casier judiciaire du pays de nationalité ou de résidence, légalisé ou apostillé, et autorisation donnée à l'AIMA de consulter le casier judiciaire portugais" },
    { label: "Preuve de moyens de subsistance tels que fixés par arrêté ministériel" },
    { label: "Assurance voyage pour l'étape du visa et preuve de logement au Portugal" },
    { label: "Qualifications ou certificats professionnels lorsque l'emploi les exige" },
    { label: "Numéro fiscal portugais (NIF) et numéro de Sécurité sociale (NISS) pour l'étape AIMA" },
    { label: "Traductions certifiées en portugais ou en anglais des documents rédigés dans d'autres langues" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne (Cartão azul UE)", summary: "Travail hautement qualifié avec un contrat d'au moins 6 mois et un salaire supérieur à un multiple du salaire brut annuel moyen national ; valable 2 ans, renouvelable pour des périodes de 3 ans, avec des droits de mobilité dans l'UE." },
    { name: "Visa de recherche d'emploi (visto para procura de trabalho qualificado)", summary: "Visa de 120 jours, prolongeable de 60 jours, désormais destiné aux personnes ayant des compétences techniques spécialisées à la recherche d'un emploi qualifié. Une fois embauché, le titulaire demande le permis de séjour au Portugal." },
    { name: "Activité hautement qualifiée et Tech Visa", summary: "Visa de résidence et permis pour activité hautement qualifiée, y compris la voie de certification Tech Visa pour les entreprises technologiques, au titre d'articles distincts de la Lei de Estrangeiros." },
    { name: "Transfert intragroupe", summary: "Permis pour les cadres, les spécialistes et les stagiaires transférés au sein d'un groupe au titre de la directive 2014/66/UE." },
  ],
  watchOuts: [
    "Le visa doit être obtenu avant l'arrivée. Depuis la suppression de la voie de la manifestation d'intérêt en 2024, un travailleur entré comme touriste ne peut pas se régulariser par un contrat de travail au Portugal.",
    "Les rendez-vous et les décisions de l'AIMA ont largement dépassé les délais légaux. Le visa n'est valable que 4 mois, le rendez-vous doit donc être demandé dès l'arrivée du travailleur.",
    "Le permis de séjour exige l'inscription à la Sécurité sociale par l'employeur et un numéro fiscal pour le travailleur. Les dossiers bloquent lorsque ces éléments manquent au rendez-vous à l'AIMA.",
  ],
};
