import type { CountryDetails } from "../types";

export const lu: CountryDetails = {
  authorities: [
    "Ministère des Affaires intérieures, Direction générale de l'immigration",
    "ADEM (Agence pour le développement de l'emploi) : déclaration du poste vacant et certificat",
    "Ambassade ou consulat du Luxembourg : visa D",
    "Commune de résidence : déclaration d'arrivée",
  ],
  legalBasis: [
    "Loi modifiée du 29 août 2008 sur la libre circulation des personnes et l'immigration",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
    "Code du travail, livre VI sur l'emploi de travailleurs étrangers",
  ],
  steps: [
    {
      title: "Déclarer le poste vacant à l'ADEM",
      actor: "Employer",
      detail:
        "L'employeur déclare le poste à l'ADEM. Si aucun candidat approprié n'est proposé dans le délai légal, l'employeur demande le certificat autorisant le recrutement d'un ressortissant de pays tiers.",
    },
    {
      title: "Signer le contrat de travail",
      actor: "Both",
      detail:
        "Le contrat doit être conforme au droit du travail luxembourgeois et peut prévoir qu'il prend effet une fois l'autorisation de séjour accordée.",
    },
    {
      title: "Demander l'autorisation de séjour temporaire",
      actor: "Employee",
      detail:
        "Le travailleur dépose la demande auprès de la Direction de l'immigration depuis son pays de résidence, avec le certificat de l'ADEM, le contrat, la copie du passeport, l'extrait de casier judiciaire et le CV.",
    },
    {
      title: "Décision et visa D",
      actor: "Authority",
      detail:
        "En cas d'accord, la Direction délivre l'autorisation temporaire, valable 90 jours pour entrer au Luxembourg. Les ressortissants soumis à l'obligation de visa demandent ensuite un visa D.",
    },
    {
      title: "Formalités d'arrivée",
      actor: "Employee",
      detail:
        "Dans les 3 jours ouvrables suivant l'arrivée, le travailleur fait sa déclaration d'arrivée à la commune, puis passe l'examen médical.",
    },
    {
      title: "Demande de titre de séjour",
      actor: "Employee",
      detail:
        "Dans les 3 mois suivant l'arrivée, le travailleur demande la carte de titre de séjour (titre de séjour) auprès de la Direction de l'immigration et paie la taxe.",
    },
  ],
  employerDocs: [
    { label: "Déclaration du poste vacant à l'ADEM et certificat autorisant le recrutement d'un ressortissant de pays tiers" },
    { label: "Contrat de travail signé et daté, conforme au droit du travail luxembourgeois" },
    { label: "Documents d'immatriculation de la société (extrait RCS)" },
    { label: "Preuve d'un salaire atteignant le minimum applicable ou le seuil de la carte bleue" },
  ],
  employeeDocs: [
    { label: "Formulaire de demande d'autorisation de séjour temporaire" },
    { label: "Copie intégrale d'un passeport en cours de validité" },
    { label: "Acte de naissance, légalisé ou apostillé, avec traduction" },
    { label: "Extrait de casier judiciaire du pays de résidence, légalisé, avec traduction" },
    { label: "Curriculum vitae et diplômes ou certificats en rapport avec l'emploi" },
    { label: "Certificat médical et test de dépistage de la tuberculose après l'arrivée" },
    { label: "Justificatif d'adresse au Luxembourg pour l'étape du titre de séjour" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Travailleurs hautement qualifiés titulaires d'un diplôme de l'enseignement supérieur et d'un salaire supérieur au seuil ; pas de test du marché du travail." },
    { name: "Travailleur transféré intragroupe", summary: "Cadres, spécialistes et stagiaires transférés au sein d'un groupe." },
    { name: "Autorisation d'investisseur ou de travailleur indépendant", summary: "Procédure distincte avec une autorisation d'établissement." },
  ],
  watchOuts: [
    "L'autorisation de séjour temporaire doit être obtenue avant l'entrée au Luxembourg ; les demandes déposées depuis le territoire sont refusées sauf pour des catégories spécifiques.",
    "Les documents rédigés dans une langue autre que le français, l'allemand ou l'anglais exigent une traduction certifiée.",
    "Le premier titre est limité à un secteur et à une profession ; un changement exige une nouvelle autorisation.",
  ],
};
