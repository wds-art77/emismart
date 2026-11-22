import type { CountryDetails } from "../types";

export const hr: CountryDetails = {
  authorities: [
    "Ministère de l'Intérieur (MUP), par ses administrations et postes de police : décision sur le permis de séjour et de travail",
    "Service croate de l'emploi (Hrvatski zavod za zapošljavanje, HZZ) : test du marché du travail, avis et liste des métiers en pénurie",
    "Missions diplomatiques et postes consulaires croates : réception des demandes et visa de long séjour D",
    "Tribunaux administratifs de Zagreb, Split, Rijeka et Osijek : contentieux administratif contre les décisions du ministère",
  ],
  legalBasis: [
    "Zakon o strancima (loi sur les étrangers, Journal officiel 133/20, avec ses modifications, dont celles de 2025 et 2026), en particulier les articles 91 à 110",
    "Pravilnik o boravku državljana trećih zemalja u Republici Hrvatskoj (règlement sur le séjour des ressortissants de pays tiers)",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
    "Zakon o upravnim sporovima (loi sur le contentieux administratif) pour le recours juridictionnel",
  ],
  steps: [
    {
      title: "Demander le test du marché du travail au HZZ",
      actor: "Employer",
      detail:
        "Sauf si la profession figure sur la liste des pénuries du HZZ ou si le travailleur relève de l'article 110, l'employeur demande au HZZ ou à son bureau régional de réaliser le test. Le HZZ indique dans les 15 jours si des candidats appropriés sont inscrits.",
    },
    {
      title: "Déposer la demande via la plateforme du HZZ",
      actor: "Employer",
      detail:
        "Dans les 90 jours d'un résultat de test négatif, l'employeur introduit la demande de permis de séjour et de travail pour le travailleur nommé sur la plateforme web du HZZ, avec le contrat et les documents du travailleur. Le HZZ vérifie les conditions relatives à l'employeur et transmet son avis à l'administration de police compétente.",
    },
    {
      title: "Décision de l'administration de police",
      actor: "Authority",
      detail:
        "L'administration ou le poste de police du lieu de résidence prévu du travailleur examine le dossier, réclame les éléments manquants dans les 5 jours ouvrables et doit statuer dans les 90 jours d'une demande complète. L'employeur paie la redevance administrative et retire la décision.",
    },
    {
      title: "Visa D et entrée",
      actor: "Employee",
      detail:
        "Les travailleurs soumis à visa demandent un visa de long séjour D auprès d'une mission diplomatique croate sur la base du permis approuvé. Les ressortissants exemptés de visa peuvent entrer et accomplir les formalités en Croatie.",
    },
    {
      title: "Enregistrer l'adresse et donner les données biométriques",
      actor: "Employee",
      detail:
        "Le travailleur enregistre son adresse auprès de la police dans les 3 jours de l'entrée et donne ses données biométriques, dans les 30 jours de la délivrance du visa lorsqu'un visa était nécessaire, pour recevoir la carte de séjour biométrique.",
    },
    {
      title: "Commencer à travailler et signaler les changements",
      actor: "Both",
      detail:
        "Le travail ne peut commencer qu'une fois le permis délivré et uniquement pour l'employeur et la profession nommés. La fin de l'emploi doit être signalée à la police dans les 15 jours. Un changement d'employeur ou de profession requiert un nouveau test du HZZ, sauf si la profession figure sur la liste des pénuries.",
    },
  ],
  employerDocs: [
    { label: "Demande de test du marché du travail au HZZ et notification du résultat" },
    { label: "Demande de permis de séjour et de travail (Obrazac 2a) ou de carte bleue européenne (Obrazac 4a), complétée et signée" },
    { label: "Contrat de travail signé par l'employeur et le travailleur", note: "Sert de preuve de moyens de subsistance pour le premier permis" },
    { label: "Preuve que l'employeur remplit les conditions de l'avis du HZZ : activité enregistrée, absence de dette fiscale ou de cotisations, au moins un salarié croate ou de l'EEE à temps plein sous contrat à durée indéterminée au cours des 6 derniers mois", note: "Le HZZ peut demander une attestation de régularité fiscale" },
    { label: "Preuve de paiement de la redevance administrative pour le permis et la carte de séjour" },
  ],
  employeeDocs: [
    { label: "Copie d'un document de voyage valide" },
    { label: "Photo en couleur (30 x 35 mm)" },
    { label: "Certificat d'absence de condamnation pénale du pays d'origine ou d'un pays de résidence de plus d'1 an, légalisé", note: "Requis pour le premier permis uniquement" },
    { label: "Preuve de qualification scolaire ou professionnelle" },
    { label: "Reconnaissance de la qualification professionnelle pour les professions réglementées" },
    { label: "Preuve d'assurance maladie", note: "Pas nécessaire pour une première demande sous contrat avec un employeur croate ; requise à la prolongation avec la carte ou le formulaire HZZO" },
    { label: "Six fiches de paie précédant immédiatement la demande, pour les prolongations" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Pour les travailleurs hautement qualifiés titulaires d'un diplôme de l'enseignement supérieur et d'un contrat d'au moins 1 an rémunéré au moins 1,5 fois le salaire annuel brut moyen. Pas de test du marché du travail ni d'avis du HZZ ; valable 2 ans ; la loi fixe un délai de décision de 60 jours." },
    { name: "Catégories de l'article 110 (personnel clé, personnes transférées au sein de leur entreprise, prestataires de services)", summary: "Permis de séjour et de travail sans test du marché du travail ni avis du HZZ, demandé directement auprès de l'administration de police. Comprend les propriétaires d'une société ou d'un artisanat détenant au moins 51 pour cent des parts." },
    { name: "Séjour temporaire des nomades numériques", summary: "Pour les travailleurs à distance employés par ou dirigeant une société non enregistrée en Croatie et ne servant pas d'employeurs croates. Accordé pour 18 mois au plus avec un seuil de ressources mensuel de 2,5 salaires nets moyens ; ce n'est pas un permis de travail." },
    { name: "Certificat d'enregistrement de travail", summary: "Potvrda o prijavi rada pour les missions courtes jusqu'à 90 jours (ou 30 jours par année civile pour certaines catégories) sans permis de séjour et de travail." },
  ],
  watchOuts: [
    "Le résultat du test du marché du travail expire : la demande de permis doit être déposée dans les 90 jours de la notification du HZZ, sinon le test doit être répété. Le HZZ rend des avis négatifs lorsque les candidats proposés n'ont pas été reçus en entretien ou lorsque les conditions relatives à l'employeur, telles que la régularité fiscale ou l'exigence d'un salarié croate, ne sont pas remplies.",
    "Le canal courriel de la police et le dépôt direct sont réservés aux permis qui ne nécessitent ni test ni avis, aux prolongations et aux cas de l'article 110. Y déposer une demande dépendant du HZZ la bloque ; elle doit passer par la plateforme du HZZ.",
    "Le regroupement familial pour les titulaires d'un permis fondé sur l'avis du HZZ est soumis à un délai d'attente d'1 an, et les périodes en tant que travailleur saisonnier, stagiaire, ICT ou prestataire de services ne comptent pas pour la résidence de longue durée.",
  ],
};
