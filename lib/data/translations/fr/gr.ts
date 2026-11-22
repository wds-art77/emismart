import type { CountryDetails } from "../types";

export const gr: CountryDetails = {
  authorities: [
    "Direction des étrangers et de la migration de l'Administration décentralisée compétente (Αποκεντρωμένη Διοίκηση) : approbation de l'invitation de l'employeur",
    "Ministère de la Migration et de l'Asile (Υπουργείο Μετανάστευσης και Ασύλου) : plateforme électronique et permis de séjour",
    "Ambassade ou consulat de Grèce (ministère des Affaires étrangères) : visa national pour l'emploi",
    "Ministère du Travail et de la Sécurité sociale, avec le Conseil économique et social et le Service public de l'emploi (DYPA) : avis sur le nombre maximal annuel de postes",
    "e-EFKA : affiliation à la sécurité sociale et à l'assurance maladie",
  ],
  legalBasis: [
    "Loi 5038/2023, Code des migrations (Κώδικας Μετανάστευσης), en particulier les articles 13, 26, 27 et 61, tels que modifiés, notamment par la loi 5275/2026",
    "Décision ministérielle conjointe 7/95931/2024 (Journal officiel B 1807) fixant les pièces justificatives pour les visas et les permis de séjour",
    "Circulaires du ministère de la Migration et de l'Asile sur l'application de la loi 5038/2023 et sur le dépôt électronique des demandes des employeurs",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
  ],
  steps: [
    {
      title: "Vérifier les postes disponibles et les conditions du contrat",
      actor: "Employer",
      detail:
        "L'employeur confirme que la spécialité et la région sont couvertes par l'acte en vigueur sur le nombre maximal de postes et prépare un contrat de travail à temps plein d'au moins 1 an avec une rémunération au moins égale aux revenus mensuels d'un travailleur non qualifié.",
    },
    {
      title: "Déposer la demande d'approbation d'emploi (metaklisi)",
      actor: "Employer",
      detail:
        "Via les services électroniques du ministère, l'employeur soumet la demande en indiquant le nombre de postes, les coordonnées et la nationalité du travailleur, la spécialité et la période d'emploi, télécharge le contrat, la copie du passeport et les documents fiscaux, et paie la redevance par travailleur.",
    },
    {
      title: "Approbation par l'Administration décentralisée",
      actor: "Authority",
      detail:
        "La Direction des étrangers et de la migration vérifie que le dossier est complet, que l'employeur respecte les seuils de revenus et que les postes ne sont pas épuisés, puis rend l'acte d'approbation, envoyé par courriel avec le contrat signé au consulat grec compétent.",
    },
    {
      title: "Visa national au consulat",
      actor: "Employee",
      detail:
        "Le consulat convoque le travailleur, qui se présente en personne pour signer le contrat de travail et reçoit le visa national pour l'emploi, sous réserve des règles générales en matière de visas et d'une vérification du casier judiciaire.",
    },
    {
      title: "Demande en ligne du permis de séjour E.4",
      actor: "Employee",
      detail:
        "Après l'entrée et avant l'expiration du visa, le travailleur dépose sa demande sur la plateforme du ministère avec la copie du passeport et du visa, le contrat, la déclaration d'embauche, la preuve de la demande d'assurance maladie complète et une photographie, et paie la redevance du permis. Un certificat de dépôt est délivré.",
    },
    {
      title: "Biométrie, décision et carte",
      actor: "Authority",
      detail:
        "Le service examine la demande, relève les empreintes digitales et délivre le permis de séjour électronique ou un rejet motivé, qui peut être contesté par un recours administratif dans les 2 mois.",
    },
  ],
  employerDocs: [
    { label: "Demande électronique d'approbation d'emploi avec les identifiants TAXISnet ou par un avocat mandaté" },
    { label: "Contrat de travail d'au moins 1 an, à temps plein, avec une rémunération au moins égale aux revenus mensuels d'un travailleur non qualifié" },
    { label: "Copie des pages du passeport du travailleur comportant les données d'identité et la photographie" },
    { label: "Attestation fiscale ou déclaration de revenus montrant la capacité de l'employeur à payer le salaire contractuel", note: "Les seuils de revenus par travailleur diffèrent pour les particuliers, les indépendants et les sociétés ; le secteur agricole a sa propre règle." },
    { label: "Preuve que la spécialité du travailleur est en rapport avec l'activité de l'employeur, lorsque c'est requis" },
    { label: "Preuve du paiement de la redevance d'approbation pour chaque travailleur invité" },
  ],
  employeeDocs: [
    { label: "Passeport en cours de validité reconnu par la Grèce et copie du visa national (type D)" },
    { label: "Contrat de travail signé au consulat" },
    { label: "Extrait de casier judiciaire pour l'étape du visa, selon les règles du ministère des Affaires étrangères" },
    { label: "Déclaration d'embauche de l'employeur (αναγγελία πρόσληψης) dans le système ERGANI" },
    { label: "Certificat attestant qu'une demande d'assurance maladie complète a été déposée auprès de l'organisme d'assurance compétent" },
    { label: "Photographie couleur récente, imprimée et au format numérique, aux normes passeport" },
    { label: "Preuve du paiement de la redevance du permis de séjour et des frais d'impression de la carte" },
    { label: "Numéro de téléphone mobile et adresse électronique pour la plateforme électronique" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne (type E.1)", summary: "Emploi hautement qualifié avec un contrat d'au moins 6 mois et un salaire supérieur au seuil ; l'approbation de l'employeur au titre de l'article 27 est déposée en ligne et les employeurs reconnus bénéficient d'une décision en 30 jours." },
    { name: "Transfert intragroupe (type E.2)", summary: "Cadres, spécialistes et stagiaires transférés au sein d'un groupe, avec approbation du détachement par le ministère." },
    { name: "Travail saisonnier (types E.5 et E.6)", summary: "Invitation de l'employeur pour un travail saisonnier dans l'agriculture ou le tourisme jusqu'à 9 mois sur 12, sous le même acte de quota." },
    { name: "Permis de nomade numérique", summary: "Séjour pour les travailleurs à distance employés par des entreprises établies hors de Grèce, avec des conditions de revenus fixées par le Code des migrations." },
  ],
  watchOuts: [
    "L'approbation dépend de la disponibilité de postes pour la spécialité et la région dans l'acte en vigueur du Conseil des ministres. Lorsque les postes sont épuisés, la demande n'est pas approuvée, quelle que soit la qualité du dossier.",
    "Les seuils de revenus de l'employeur sont vérifiés par travailleur invité. Les sociétés et les particuliers ayant un revenu déclaré faible sont refusés, et la redevance n'est pas remboursée.",
    "La procédure a été signalée comme en cours de révision en 2026 à la suite de modifications du Code des migrations. Vérifiez les formulaires et documents en vigueur sur la plateforme du ministère avant de déposer.",
  ],
};
