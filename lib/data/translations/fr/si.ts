import type { CountryDetails } from "../types";

export const si: CountryDetails = {
  authorities: [
    "Upravne enote (unités administratives) : réception des demandes, conduite de la procédure et délivrance du permis",
    "Zavod Republike Slovenije za zaposlovanje (ZRSZ, Service de l'emploi de Slovénie) : consentement au permis unique et vérification du marché du travail",
    "Missions diplomatiques et postes consulaires slovènes : demandes depuis l'étranger et empreintes digitales",
    "Ministère de l'Intérieur (règles de séjour) et ministère chargé du travail (emploi des étrangers)",
    "Tribunal administratif : recours contre les décisions des unités administratives",
  ],
  legalBasis: [
    "Zakon o tujcih (ZTuj-2, loi sur les étrangers), en particulier les articles 33 à 37",
    "Zakon o zaposlovanju, samozaposlovanju in delu tujcev (ZZSDT, loi sur l'emploi, le travail indépendant et le travail des étrangers)",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
    "Décret déterminant les activités et professions dans lesquelles les étrangers peuvent être employés plus rapidement (liste de la procédure accélérée), et règles sur les formulaires de permis de séjour et le relevé des empreintes digitales",
  ],
  steps: [
    {
      title: "Avis de poste vacant facultatif et vérification du marché du travail",
      actor: "Employer",
      detail:
        "L'employeur peut déposer le formulaire PDM-KTD auprès du ZRSZ via SPOT ou en personne. Le ZRSZ répond dans les 5 jours ouvrables en indiquant si des candidats appropriés sont inscrits comme demandeurs d'emploi. Cette démarche préalable réduit le risque de refus.",
    },
    {
      title: "Signer le contrat de travail et préparer les déclarations",
      actor: "Both",
      detail:
        "Le contrat signé par l'employeur est joint à la demande, avec les déclarations de l'employeur sur le logement et sur les licenciements pour motif économique au cours des 6 mois précédents.",
    },
    {
      title: "Déposer la demande",
      actor: "Both",
      detail:
        "L'employeur dépose dans toute unité administrative ou par voie électronique via SPOT (eBDP), ou le travailleur dépose auprès d'une mission slovène à l'étranger ou, s'il est légalement présent, dans une unité administrative. La redevance est payée au dépôt et les empreintes digitales sont relevées. Les demandeurs légalement présents en Slovénie reçoivent un certificat de dépôt qui vaut permis de séjour temporaire jusqu'à la décision.",
    },
    {
      title: "L'unité administrative obtient le consentement du ZRSZ",
      actor: "Authority",
      detail:
        "L'unité administrative vérifie les conditions de séjour (passeport, assurance maladie, moyens de subsistance, casier judiciaire) et demande d'office le consentement du ZRSZ. Le ZRSZ vérifie l'employeur, les qualifications du travailleur et le marché du travail. Pour les professions de la procédure accélérée, la demande est traitée en priorité.",
    },
    {
      title: "Décision et retrait de la carte",
      actor: "Employee",
      detail:
        "L'unité administrative rend sa décision et le travailleur retire la carte en personne, en recevant une fiche d'information sur les délais d'entrée et les droits. Les demandeurs à l'étranger entrent en Slovénie avec le permis ou un visa lorsqu'il est requis.",
    },
    {
      title: "Inscription à l'assurance obligatoire et déclaration d'adresse",
      actor: "Employer",
      detail:
        "Dans les 15 jours du retrait de la carte, l'employeur conclut l'emploi et inscrit le travailleur à l'assurance sociale obligatoire (formulaire M1) ; dans la procédure accélérée, le délai est de 10 jours à compter de la fiche d'information. Le permis peut être révoqué si ce délai n'est pas respecté. Le travailleur déclare son adresse à l'unité administrative.",
    },
  ],
  employerDocs: [
    { label: "Demande de délivrance d'un permis unique, déposée à l'unité administrative ou via SPOT" },
    { label: "Contrat de travail signé par l'employeur" },
    { label: "Déclaration de l'employeur indiquant si un logement est fourni" },
    { label: "Déclaration de l'employeur sur les licenciements pour motif économique au cours des 6 mois précédents, avec noms et dates le cas échéant" },
    { label: "Avis de poste vacant PDM-KTD et avis de vérification du marché du travail du ZRSZ, lorsqu'ils ont été déposés au préalable" },
    { label: "Preuve du règlement des obligations fiscales et de l'activité enregistrée", note: "Vérifiée par le ZRSZ dans la procédure de consentement" },
  ],
  employeeDocs: [
    { label: "Passeport valide, valable au moins 3 mois au-delà du séjour prévu" },
    { label: "Photographie personnelle conforme à la norme prescrite" },
    { label: "Extrait de casier judiciaire du pays d'origine", note: "Un nouvel extrait datant de moins de 3 mois est nécessaire à la prolongation" },
    { label: "Assurance maladie couvrant au moins les soins d'urgence en Slovénie, sauf affiliation obligatoire" },
    { label: "Preuve de moyens de subsistance suffisants, normalement le contrat de travail" },
    { label: "Preuve de la formation ou de la qualification professionnelle requise pour le poste" },
    { label: "Empreintes digitales, relevées à la mission ou à l'unité administrative" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Pour les diplômés universitaires avec un contrat d'au moins 1 an rémunéré au moins 1,5 fois le salaire brut annuel moyen ; délivrée par l'unité administrative pour 2 ans avec le consentement du ZRSZ. L'employeur doit d'abord publier le poste vacant." },
    { name: "Permis de séjour temporaire pour nomades numériques", summary: "Introduit le 21 novembre 2025 pour les travailleurs à distance salariés ou indépendants à l'étranger, disposant de moyens d'au moins deux fois le salaire net moyen. Valable 1 an, non prolongeable ; la famille peut rejoindre immédiatement." },
    { name: "Accords bilatéraux avec la Bosnie-Herzégovine et la Serbie", summary: "Les travailleurs de ces pays obtiennent un permis de travail au titre de l'accord, qui vaut consentement du ZRSZ pour le permis unique." },
    { name: "Chercheurs et personnel de l'enseignement supérieur", summary: "Permis de séjour temporaire pour la recherche ou l'enseignement dans le cadre d'une convention d'accueil (article 38 ZTuj-2), déposé par l'institution." },
  ],
  watchOuts: [
    "La plupart des retards proviennent de dossiers incomplets ; les unités administratives ont indiqué que seule une minorité des demandes arrivent complètes. Les déclarations de l'employeur sur le logement et sur les licenciements pour motif économique manquent souvent.",
    "Le ZRSZ refuse son consentement lorsque l'employeur a des impôts impayés, est interdit d'employer des étrangers à la suite d'une amende définitive, ou lorsque des candidats sans emploi appropriés sont inscrits. Déposer d'abord la vérification PDM-KTD évite les surprises.",
    "Après le retrait de la carte, l'employeur dispose de 15 jours (10 dans la procédure accélérée) pour inscrire le travailleur à l'assurance obligatoire ; le permis peut être retiré si ce délai n'est pas respecté. Le regroupement familial exige un permis délivré pour au moins 1 an.",
  ],
};
