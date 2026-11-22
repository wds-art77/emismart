import type { CountryDetails } from "../types";

export const bg: CountryDetails = {
  authorities: [
    "Дирекция Миграция, Министерство на вътрешните работи (Direction de la migration, ministère de l'Intérieur) : reçoit le dossier et délivre ou refuse le permis",
    "Агенция по заетостта (Agence pour l'emploi) : avis écrit du directeur exécutif sur l'accès au marché du travail",
    "Държавна агенция Национална сигурност (Agence d'État pour la sécurité nationale) : avis de sécurité sur chaque demande",
    "Ministère des Affaires étrangères, Direction des relations consulaires et ambassades bulgares : visa de type D",
    "Изпълнителна агенция Главна инспекция по труда (Inspection générale du travail) : notification dans les 7 jours du début du travail et contrôle",
  ],
  legalBasis: [
    "Закон за чужденците в Република България (loi sur les étrangers en République de Bulgarie), article 24i, et son règlement d'application (ППЗЧРБ)",
    "Закон за трудовата миграция и трудовата мобилност (loi sur la migration de main-d'œuvre et la mobilité de main-d'œuvre), chapitre deux, et ses règles d'application (ППЗТМТМ)",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
  ],
  steps: [
    {
      title: "Publier le poste vacant et préparer la justification",
      actor: "Employer",
      detail:
        "L'employeur publie le poste vacant dans les médias locaux et nationaux et en ligne, y compris auprès du bureau local de l'emploi, pendant la période fixée par les règles d'application, puis rédige une justification de la nécessité d'engager un ressortissant de pays tiers, en joignant des copies des annonces. L'employeur vérifie aussi que la limite d'effectif de 20 pour cent (ou 35 pour cent) est respectée.",
    },
    {
      title: "Signer le contrat à durée déterminée et déposer le dossier à la Direction de la migration",
      actor: "Employer",
      detail:
        "L'employeur signe un contrat de travail à durée déterminée avec un code de profession NKPD, prenant effet à la date où le travailleur reçoit le document de séjour, puis dépose le formulaire de demande (annexe 3a) avec les documents du travailleur et de l'employeur à la Direction de la migration ou dans une unité Migration régionale. Si des documents manquent, la Direction fixe un délai de 7 jours pour compléter le dossier, après quoi la procédure est clôturée.",
    },
    {
      title: "Avis de l'Agence pour l'emploi et avis de sécurité",
      actor: "Authority",
      detail:
        "Dans les 14 jours du dépôt, la Direction de la migration transmet le dossier par voie électronique à l'Agence pour l'emploi et à l'Agence d'État pour la sécurité nationale. L'Agence pour l'emploi recueille des informations fiscales et de l'inspection du travail sur l'employeur et transmet l'avis écrit de son directeur exécutif dans les 15 jours de la réception du dossier ; l'agence de sécurité dispose de 14 jours.",
    },
    {
      title: "Notification de l'accès au marché du travail",
      actor: "Authority",
      detail:
        "Dans les 3 jours de la réception des avis positifs, la Direction de la migration notifie l'employeur par voie électronique que le travailleur peut recevoir l'accès au marché du travail, avec copie à la Direction des relations consulaires du ministère des Affaires étrangères. L'employeur informe le travailleur.",
    },
    {
      title: "Demande de visa de type D",
      actor: "Employee",
      detail:
        "Dans les 20 jours de la notification, le travailleur doit demander un visa de long séjour de type D auprès de l'ambassade ou du consulat bulgare, en présentant une preuve de logement et, pour un enseignement supérieur étranger, le certificat de reconnaissance du Centre national d'information et de documentation lorsque c'est pertinent. Un refus est signalé à la Direction de la migration.",
    },
    {
      title: "Comparution conjointe dans les 14 jours de l'entrée et délivrance de la carte",
      actor: "Both",
      detail:
        "Dans les 14 jours de l'entrée en Bulgarie avec le visa D, l'employeur ou son représentant et le travailleur se présentent ensemble à la Direction de la migration ou à l'unité régionale avec une copie de la page du visa et une assurance maladie valable au moins 3 mois. La Direction délivre ou refuse le permis dans les 3 jours et la carte de séjour portant la mention permis unique de séjour et de travail suit. Le non-respect du délai de 14 jours clôture la procédure.",
    },
    {
      title: "Obligations après l'arrivée",
      actor: "Employer",
      detail:
        "Le travailleur enregistre son adresse dans le délai légal. L'employeur notifie l'Inspection générale du travail dans les 7 jours du début effectif du travail et doit signaler à la Direction de la migration dans les 3 jours tout changement affectant les critères d'admission ou la fin de l'emploi, qui met fin au droit de séjour.",
    },
  ],
  employerDocs: [
    { label: "Formulaire de demande (annexe 3a du règlement d'application de la loi sur les étrangers) signé par l'employeur, indiquant une adresse électronique" },
    { label: "Justification écrite de la nécessité d'engager un ressortissant de pays tiers, avec copies des annonces de poste vacant dans les médias locaux et nationaux et en ligne" },
    { label: "Déclaration listant les ressortissants de pays tiers déjà employés, avec noms, dates de naissance, nationalité et fondement du séjour" },
    { label: "Déclaration de l'effectif mensuel moyen de salariés bulgares, de l'UE, de l'EEE et suisses au cours des 12 mois précédents" },
    { label: "Déclaration que la rémunération et les conditions de travail ne sont pas moins favorables que pour les citoyens bulgares (modèle de l'Agence pour l'emploi), première demande uniquement" },
    { label: "Copie certifiée du contrat de travail à durée déterminée signé avec code NKPD, prenant effet à la délivrance du document de séjour, plus la description de fonction lorsqu'elle fait partie du contrat" },
  ],
  employeeDocs: [
    { label: "Copie des pages du passeport portant la photo et les données personnelles" },
    { label: "Certificat de casier judiciaire du pays de nationalité ou de résidence habituelle, première demande uniquement" },
    { label: "Preuve d'un logement assuré en Bulgarie" },
    { label: "Documents relatifs à la formation, la spécialité, la qualification et l'expérience professionnelle, légalisés et accompagnés d'une traduction bulgare certifiée, correspondant aux exigences du poste publié" },
    { label: "Certificat du Centre national d'information et de documentation (NACID) reconnaissant l'enseignement supérieur étranger, le cas échéant" },
    { label: "Preuve du droit d'exercer une profession réglementée, ou licence ou permis requis pour la profession, le cas échéant" },
    { label: "Assurance maladie valable en Bulgarie pendant au moins 3 mois, jusqu'à la délivrance du permis, lorsque le travailleur n'est pas couvert par l'assurance maladie bulgare" },
    { label: "Copie de la page du passeport portant le visa de type D, présentée lors de la comparution conjointe après l'entrée" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne (Синя карта на ЕС)", summary: "Travailleurs hautement qualifiés disposant d'une qualification de l'enseignement supérieur d'au moins 3 ans, ou d'une expérience professionnelle admissible, et d'un salaire brut supérieur au seuil fixé par la loi comme multiple du salaire moyen national. L'Agence pour l'emploi rend son avis dans les 10 jours, l'ensemble de la procédure est plafonné à 3 mois et la carte est délivrée pour 5 ans au plus. Pas de test du marché du travail ni de quota d'effectif." },
    { name: "Permis de transfert intragroupe", summary: "Cadres, spécialistes et employés stagiaires transférés au sein d'un groupe d'entreprises, au titre de l'article 33p de la loi sur les étrangers." },
    { name: "Permis de travailleur saisonnier", summary: "Travail saisonnier court jusqu'à 90 jours sur simple enregistrement, ou permis de travailleur saisonnier pour des périodes plus longues, au titre de l'article 24k de la loi sur les étrangers." },
    { name: "Titulaire d'une carte bleue européenne d'un autre État membre", summary: "Après 12 mois dans le premier État membre (6 mois dans un second), le titulaire peut se rendre en Bulgarie et y déposer une demande dans le mois de l'entrée, avec une décision dans les 30 jours." },
  ],
  watchOuts: [
    "La comparution conjointe dans les 14 jours de l'entrée est stricte : si l'employeur et le travailleur ne présentent pas la copie du visa et l'assurance maladie à temps, la Direction de la migration clôture la procédure et le dossier recommence.",
    "Le plafond d'effectif de 20 pour cent (35 pour cent pour les PME) est vérifié sur les 12 mois précédents et bloque l'approbation pour les employeurs comptant beaucoup de personnel de pays tiers, sauf dispense ou décision ministérielle au titre de la loi sur la migration de main-d'œuvre.",
    "Les diplômes étrangers et les casiers judiciaires doivent être légalisés et traduits par un notaire ou la direction consulaire, et l'enseignement supérieur étranger requiert une reconnaissance NACID ; les dossiers incomplets ne disposent que de 7 jours pour être régularisés.",
  ],
};
