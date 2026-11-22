import type { CountryDetails } from "../types";

export const fr: CountryDetails = {
  authorities: [
    "Ministère de l'Intérieur, plateforme ANEF et plateformes interrégionales de main-d'œuvre étrangère",
    "France Travail : publication de l'offre d'emploi pour le test du marché du travail",
    "Consulat de France (France-Visas) : visa de long séjour",
    "Préfecture : renouvellements des titres de séjour et changements de statut sur le territoire",
  ],
  legalBasis: [
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
    "Code de l'entrée et du séjour des étrangers et du droit d'asile (CESEDA), notamment les articles L. 421-1 et suivants, et articles R. 5221-1 et suivants du Code du travail",
    "Arrêté du 3 janvier 2025 relatif aux pièces justificatives et arrêté du 21 mai 2025 relatif aux listes régionales des métiers en tension",
  ],
  steps: [
    {
      title: "Publier l'offre d'emploi",
      actor: "Employer",
      detail:
        "Sauf si le métier figure sur la liste des métiers en tension, publier l'offre auprès de France Travail pendant au moins 3 semaines et conserver la preuve du recrutement infructueux.",
    },
    {
      title: "Demander l'autorisation de travail en ligne",
      actor: "Employer",
      detail:
        "Déposer la demande sur le portail employeur de l'ANEF avec le contrat, les documents de l'entreprise et les pièces d'identité et de qualification du travailleur.",
    },
    {
      title: "Examen par la plateforme de main-d'œuvre étrangère",
      actor: "Authority",
      detail:
        "La plateforme vérifie le test du marché du travail, le salaire (au moins le SMIC ou le minimum conventionnel), le respect des obligations par l'employeur et l'adéquation entre l'emploi et les qualifications.",
    },
    {
      title: "Délivrance de l'autorisation de travail sécurisée",
      actor: "Authority",
      detail:
        "L'employeur et le travailleur reçoivent l'autorisation par courriel. Elle est valable pour l'emploi et l'employeur concernés.",
    },
    {
      title: "Demander le VLS-TS au consulat",
      actor: "Employee",
      detail:
        "Le travailleur dépose sa demande sur France-Visas avec l'autorisation de travail, le passeport, les photographies et les pièces justificatives, puis se présente au rendez-vous de visa.",
    },
    {
      title: "Valider le visa en ligne après l'arrivée",
      actor: "Employee",
      detail:
        "Dans les 3 mois suivant l'entrée, valider le VLS-TS sur le portail ANEF et acquitter la taxe. Le visa validé vaut titre de séjour et de travail pour sa durée.",
    },
  ],
  employerDocs: [
    { label: "Demande d'autorisation de travail en ligne sur l'ANEF" },
    { label: "Extrait Kbis ou document d'immatriculation équivalent" },
    { label: "Contrat de travail signé ou promesse d'embauche (CERFA le cas échéant)" },
    { label: "Preuve de publication de l'offre auprès de France Travail pendant 3 semaines", note: "Non requise pour les métiers en pénurie." },
    { label: "Attestation de régularité des cotisations sociales (URSSAF)" },
  ],
  employeeDocs: [
    { label: "Passeport en cours de validité" },
    { label: "Curriculum vitae et diplômes ou preuves d'expérience en rapport avec le poste" },
    { label: "Autorisation de travail sécurisée délivrée à l'employeur" },
    { label: "Formulaire de demande France-Visas et photographies aux normes OACI" },
    { label: "Justificatif d'hébergement en France pour l'étape du visa" },
    { label: "Acte de naissance et documents d'état civil, traduits, pour les demandes familiales" },
  ],
  alternativeRoutes: [
    { name: "Passeport talent", summary: "Titre pluriannuel pour les travailleurs hautement qualifiés, la carte bleue européenne, les chercheurs, les investisseurs et les créateurs d'entreprise. Pas de test du marché du travail." },
    { name: "Salarié détaché ICT", summary: "Pour les transferts intragroupe de cadres et d'experts." },
    { name: "Changement de statut", summary: "Pour les étudiants ou autres résidents déjà en France qui trouvent un emploi éligible." },
  ],
  watchOuts: [
    "L'autorisation de travail est propre à l'emploi. Un nouveau contrat exige une nouvelle autorisation.",
    "L'employeur doit vérifier l'authenticité d'un titre de séjour existant auprès de la préfecture au moins 2 jours ouvrables avant l'embauche.",
    "Les listes régionales des métiers en tension ont changé en mai 2025 et sont mises à jour ; consultez la liste du département du lieu d'emploi.",
  ],
};
