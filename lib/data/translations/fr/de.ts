import type { CountryDetails } from "../types";

export const de: CountryDetails = {
  authorities: [
    "Ambassades et consulats d'Allemagne : visa national (visa D)",
    "Ausländerbehörde : titre de séjour et préapprobation dans la procédure accélérée",
    "Bundesagentur für Arbeit (BA), ZAV : approbation des conditions d'emploi",
    "Organismes de reconnaissance : équivalence des qualifications étrangères (Anerkennung)",
  ],
  legalBasis: [
    "Aufenthaltsgesetz (AufenthG), en particulier les §§ 18, 18a, 18b, 18g, 19c, 20a et 81a",
    "Beschäftigungsverordnung (BeschV)",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233 ; directive (UE) 2021/1883 pour la carte bleue européenne",
  ],
  steps: [
    {
      title: "Reconnaissance de la qualification",
      actor: "Employee",
      detail:
        "Les qualifications professionnelles nécessitent une décision de reconnaissance ; les diplômes universitaires sont vérifiés dans la base de données anabin ou par la ZAB. Les spécialistes en informatique expérimentés et les travailleurs ayant 2 ans d'expérience et un diplôme reconnu par l'État peuvent recourir à des voies alternatives sans reconnaissance complète.",
    },
    {
      title: "Déclaration de l'employeur sur la relation de travail",
      actor: "Employer",
      detail:
        "L'employeur remplit l'Erklärung zum Beschäftigungsverhältnis destinée à la BA, avec le salaire, les horaires et la description du poste.",
    },
    {
      title: "Facultatif : procédure accélérée",
      actor: "Employer",
      detail:
        "L'employeur signe une convention avec l'Ausländerbehörde, qui coordonne la reconnaissance et l'approbation de la BA et délivre une préapprobation (Vorabzustimmung) pour le visa.",
    },
    {
      title: "Demande de visa à l'ambassade",
      actor: "Employee",
      detail:
        "Le travailleur prend rendez-vous, remet le contrat, les documents de qualification et, le cas échéant, la préapprobation, et reçoit un visa national pour l'entrée.",
    },
    {
      title: "Enregistrement et titre de séjour",
      actor: "Employee",
      detail:
        "Après l'arrivée, le travailleur déclare son adresse (Anmeldung) et demande à l'Ausländerbehörde le titre de séjour électronique, qui mentionne l'emploi autorisé.",
    },
  ],
  employerDocs: [
    { label: "Erklärung zum Beschäftigungsverhältnis (formulaire de la BA) complétée et signée" },
    { label: "Contrat de travail signé ou offre d'emploi ferme" },
    { label: "Description du poste montrant que la fonction exige la qualification" },
    { label: "Convention de procédure accélérée avec l'Ausländerbehörde et paiement de sa redevance", note: "Procédure accélérée uniquement." },
    { label: "Preuve du niveau de salaire pour les seuils de la carte bleue ou des travailleurs expérimentés, le cas échéant" },
  ],
  employeeDocs: [
    { label: "Passeport en cours de validité" },
    { label: "Décision de reconnaissance ou attestation de comparabilité anabin / ZAB pour la qualification" },
    { label: "Diplômes et certificats avec traductions certifiées" },
    { label: "Curriculum vitae et preuves d'expérience professionnelle" },
    { label: "Preuve d'une assurance maladie couvrant la période à compter de l'entrée" },
    { label: "Photographies biométriques et formulaire de visa national complété (VIDEX)" },
    { label: "Autorisation d'exercer lorsque la profession est réglementée", note: "Professions de santé, enseignement, droit et autres." },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne (§ 18g)", summary: "Diplômés de l'enseignement supérieur avec un salaire supérieur au seuil de la carte bleue, seuil réduit pour les métiers en pénurie et les jeunes diplômés. Établissement après 21 à 27 mois." },
    { name: "Carte d'opportunité (Chancenkarte, § 20a)", summary: "Titre à points permettant de venir en Allemagne jusqu'à 1 an pour chercher un emploi." },
    { name: "Spécialistes en informatique (§ 19c (2) avec § 6 BeschV)", summary: "Voie fondée sur l'expérience pour les professionnels de l'informatique sans diplôme formel." },
    { name: "Professionnels expérimentés (§ 6 BeschV)", summary: "2 ans d'expérience et une qualification reconnue par l'État, avec un salaire plancher et sans reconnaissance allemande requise." },
  ],
  watchOuts: [
    "La reconnaissance de la qualification est la principale cause de retard. Lancez-la avant la signature de l'offre d'emploi si possible.",
    "La disponibilité des rendez-vous à l'ambassade varie fortement selon le pays. La procédure accélérée garantit un créneau dans les 3 semaines.",
    "Les professions réglementées exigent l'autorisation d'exercer avant que le titre de séjour puisse être accordé.",
  ],
};
