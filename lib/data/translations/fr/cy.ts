import type { CountryDetails } from "../types";

export const cy: CountryDetails = {
  authorities: [
    "Département du travail, ministère du Travail et des Assurances sociales, et ses bureaux de district du travail : vérification du marché du travail, approbation et visa du contrat",
    "Département de l'état civil et de la migration (CRMD), ministère de l'Intérieur : permis d'entrée et permis temporaire de séjour et d'emploi",
    "Unités de district des étrangers et de l'immigration de la police chypriote : réception des demandes et contrôle de l'immigration",
    "Missions diplomatiques chypriotes : visas pour les ressortissants qui en ont besoin",
    "Tribunal administratif : recours contre les décisions du CRMD",
  ],
  legalBasis: [
    "Aliens and Immigration Law (Cap. 105) (loi sur les étrangers et l'immigration) et Aliens and Immigration Regulations de 1972 (Reg. 242/72), tels que modifiés",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
    "Critères pour l'emploi de ressortissants de pays tiers convenus entre les partenaires sociaux et approuvés par le Conseil des ministres (décision du 6 décembre 1991, mise à jour par des décisions ultérieures du Conseil des ministres)",
  ],
  steps: [
    {
      title: "Enregistrer le poste vacant auprès du bureau de district du travail",
      actor: "Employer",
      detail:
        "L'employeur déclare le poste vacant au bureau de district du travail du Département du travail. Le bureau vérifie les critères et tente de pourvoir le poste sur le marché du travail local et de l'UE.",
    },
    {
      title: "Demander l'approbation du Département du travail",
      actor: "Employer",
      detail:
        "Si le poste reste vacant, l'employeur demande à employer un ressortissant non européen nommé. Le Département évalue la demande au regard des critères approuvés et des secteurs autorisés.",
    },
    {
      title: "Contrat signé et visé",
      actor: "Both",
      detail:
        "Après une réponse positive, le contrat de travail sur le modèle prescrit est signé par l'employeur et le travailleur et visé par le Département du travail. L'original et les copies visées sont nécessaires pour l'étape migratoire.",
    },
    {
      title: "Demande de permis d'entrée au CRMD",
      actor: "Employer",
      detail:
        "L'employeur demande le permis d'entrée et de séjour auprès du CRMD ou par l'intermédiaire des unités de district des étrangers et de l'immigration de la police, en joignant le contrat visé, une garantie bancaire couvrant les frais éventuels de rapatriement, le passeport du travailleur, le certificat de casier judiciaire et les certificats médicaux.",
    },
    {
      title: "Permis d'entrée et voyage",
      actor: "Authority",
      detail:
        "Le CRMD délivre le permis d'entrée. Les ressortissants soumis à visa l'obtiennent auprès d'une mission diplomatique chypriote avant de voyager.",
    },
    {
      title: "Enregistrement et délivrance du permis après l'arrivée",
      actor: "Employee",
      detail:
        "Après l'arrivée, le travailleur se présente au CRMD ou à l'unité de district de l'immigration pour être inscrit au registre des étrangers, passer les examens médicaux et la prise de données biométriques, et recevoir le permis temporaire de séjour et d'emploi.",
    },
  ],
  employerDocs: [
    { label: "Enregistrement du poste vacant et demande auprès du bureau de district du travail" },
    { label: "Contrat de travail sur le modèle du Département du travail, signé et visé, avec copies visées" },
    { label: "Approbation du Département du travail autorisant l'employeur à employer des ressortissants de pays tiers" },
    { label: "Garantie bancaire originale couvrant les frais éventuels de rapatriement", note: "Les listes de contrôle du CRMD fixent la durée requise de la garantie" },
    { label: "Preuve d'un logement approprié fourni ou organisé pour le travailleur" },
    { label: "Assurance responsabilité de l'employeur et déclaration de l'adresse postale du travailleur, lorsque le formulaire du CRMD les exige" },
  ],
  employeeDocs: [
    { label: "Passeport valide" },
    { label: "Certificat de casier judiciaire du pays d'origine ou de résidence" },
    { label: "Certificats d'examens médicaux, y compris analyses de sang et radiographie du thorax, selon la liste de contrôle du CRMD" },
    { label: "Assurance maladie couvrant le séjour" },
    { label: "Photos d'identité" },
    { label: "Preuves de qualifications ou d'expérience lorsque les critères du Département du travail les exigent" },
    { label: "Traductions officielles et certification de tous les documents étrangers", note: "Le CRMD exige que les documents soient officiellement traduits et dûment certifiés" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Introduite par une modification de 2024 de l'Aliens and Immigration Law, avec des demandes acceptées depuis 2025 pour les travailleurs hautement qualifiés dans des secteurs déterminés avec un salaire supérieur au seuil national. Le Département du travail vérifie le contrat avant la demande au CRMD. Confirmez le champ d'application actuel sur la page du CRMD." },
    { name: "Sociétés d'intérêts étrangers (Business Facilitation Unit)", summary: "Les sociétés à capitaux étrangers éligibles enregistrées auprès de la Business Facilitation Unit peuvent employer des cadres dirigeants et du personnel clé de pays tiers au-dessus de niveaux de salaire fixés, via le CRMD, sans la procédure standard du Département du travail. Les permis sont délivrés pour 2 ans au plus et sont renouvelables." },
    { name: "Transfert intragroupe", summary: "Cadres, spécialistes et stagiaires transférés au sein d'un groupe selon les règles ICT, traités par les bureaux centraux du CRMD." },
    { name: "Visa de nomade numérique", summary: "Un régime plafonné pour les travailleurs à distance employés à l'étranger qui ne travaillent pas pour des employeurs chypriotes. Confirmez la disponibilité actuelle sur la page du CRMD." },
  ],
  watchOuts: [
    "Rien n'avance tant que le Département du travail n'a pas approuvé la demande et visé le contrat. Les postes vacants hors des secteurs ou professions autorisés sont refusés à ce stade.",
    "Le dossier de permis d'entrée requiert une garantie bancaire pour le rapatriement, des certificats médicaux et des documents officiellement traduits et certifiés. Des traductions manquantes ou non certifiées sont une cause fréquente de retard.",
    "Le permis est lié à l'employeur et au secteur. Les changements d'employeur sont limités à 3 et chacun requiert un accord de libération et l'approbation du Département du travail ; après le troisième changement, le permis n'est pas renouvelé.",
  ],
};
