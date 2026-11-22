import type { CountryDetails } from "../types";

export const ro: CountryDetails = {
  authorities: [
    "Inspectoratul General pentru Imigrări (IGI) : vérifie la recevabilité de la demande unique, statue sur le droit de séjour pour travail et délivre le permis unic",
    "Agenția Națională pentru Ocuparea Forței de Muncă (ANOFM) : enregistre et agrée les employeurs et les agences de placement, établit la liste des métiers en pénurie",
    "Ministerul Afacerilor Externe et missions diplomatiques roumaines : reçoivent le travailleur au consulat et délivrent le visa D/AM via le système eViza",
    "Ministerul Educației și Cercetării (CNRED) : reconnaissance des qualifications des travailleurs hautement qualifiés",
    "Inspecția Muncii : inspection du travail et enregistrement des contrats dans REGES-ONLINE",
  ],
  legalBasis: [
    "Ordonanța de urgență nr. 32/2026 privind accesul străinilor pe piața muncii din România",
    "Ordonanța de urgență nr. 194/2002 privind regimul străinilor în România, republicată, telle que modifiée par l'OUG 32/2026 (art. 27^1, 27^2, 44 et 56)",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
    "Hotărârea Guvernului nr. 295/2025 privind Registrul general de evidență a salariaților (REGES-ONLINE)",
  ],
  steps: [
    {
      title: "Enregistrer l'employeur sur WorkinRomania.gov.ro",
      actor: "Employer",
      detail:
        "L'employeur crée un compte sur la plateforme et demande son inscription au registre des employeurs de travailleurs étrangers (RAS). L'ANOFM vérifie les dettes fiscales, les sanctions passées pour travail non déclaré et les condamnations pénales et statue dans les 30 jours ouvrables. Les employeurs souhaitant recruter des travailleurs D/AM2 sans agence ont besoin d'un agrément distinct avec une garantie financière par travailleur.",
    },
    {
      title: "Télécharger l'offre d'emploi ferme et choisir la voie",
      actor: "Employer",
      detail:
        "L'employeur télécharge une offre d'emploi ferme indiquant la profession, les fonctions, le salaire, le temps de travail, la durée du contrat et le lieu de travail. Les travailleurs hautement qualifiés et les autres catégories spéciales suivent la voie D/AM1. Les travailleurs permanents, saisonniers et frontaliers suivent la voie D/AM2, qui exige une profession figurant sur la liste des métiers en pénurie et, sauf si l'employeur est agréé, un contrat de services avec une agence de placement agréée et un contrat de placement tripartite avec le travailleur.",
    },
    {
      title: "Signer le contrat de travail et déposer la demande unique",
      actor: "Employer",
      detail:
        "Le contrat individuel de travail, en roumain et dans une langue que le travailleur comprend, est enregistré dans REGES-ONLINE. L'employeur (D/AM1) ou l'agence de placement ou l'employeur agréé (D/AM2) remplit la demande unique sur la plateforme et télécharge les documents du travailleur. L'IGI, le ministère de l'Éducation et le ministère des Affaires étrangères vérifient les conditions via la plateforme.",
    },
    {
      title: "Entretien de visa et visa D/AM",
      actor: "Employee",
      detail:
        "Le travailleur se présente en personne à l'ambassade ou au consulat de Roumanie avec le passeport original et les pièces justificatives, et les données biométriques sont relevées. La demande unique est décidée dans les 30 jours de cette comparution. Une décision positive conduit au visa D/AM1 ou D/AM2, valable 90 jours pour l'entrée, qui certifie aussi le droit de travailler.",
    },
    {
      title: "Entrée et début du travail",
      actor: "Both",
      detail:
        "Le travailleur entre en Roumanie et commence à travailler dans le cadre du contrat enregistré. Les employeurs agréés doivent organiser le transport depuis le point d'entrée et informer le travailleur des conditions au moins 10 jours avant l'arrivée. L'employeur signale à l'IGI toute fin ou modification du contrat dans les délais légaux.",
    },
    {
      title: "Demander le permis unic à l'IGI",
      actor: "Employee",
      detail:
        "Avant l'expiration du visa, le travailleur prend rendez-vous à l'unité territoriale de l'IGI du département de résidence et dépose la demande de prolongation du droit de séjour pour travail, avec le passeport, le visa, le contrat, la preuve de logement, l'assurance maladie et la preuve du paiement de la redevance. L'IGI statue dans les 30 jours, prolongeables dans les cas complexes, et délivre le permis unic, qui sert aussi de document d'identité.",
    },
    {
      title: "Renouvellement ou changement d'employeur",
      actor: "Both",
      detail:
        "Le renouvellement est demandé avant l'expiration du permis sur la base d'un contrat à temps plein qui se poursuit. Un changement d'employeur par démission n'est possible qu'après au moins 6 mois de travail enregistré chez le premier employeur, avec une nouvelle demande unique de prolongation déposée par le nouvel employeur ou l'agence.",
    },
  ],
  employerDocs: [
    { label: "Inscription sur WorkinRomania.gov.ro au registre des employeurs de travailleurs étrangers (RAS), plus agrément et garantie financière lorsque l'employeur recrute directement des travailleurs D/AM2" },
    { label: "Offre d'emploi ferme téléchargée sur la plateforme, avec la profession, les fonctions, le salaire, le temps de travail, la durée du contrat et le lieu de travail" },
    { label: "Contrat individuel de travail enregistré dans REGES-ONLINE, à temps plein, en roumain et dans une langue que le travailleur comprend, avec un salaire au moins égal au salaire minimum brut national (au moins le salaire brut moyen pour les travailleurs hautement qualifiés)" },
    { label: "Pour les travailleurs hautement qualifiés : certificat sur la main-d'œuvre disponible de l'agence départementale pour l'emploi, délivré au plus 90 jours avant le dépôt, et CV du travailleur avec reconnaissance des études" },
    { label: "Pour les travailleurs D/AM2 : contrat de services avec une agence de placement agréée, contrat de placement tripartite, organigramme avec les postes occupés et vacants, et preuve que la profession figure sur la liste des métiers en pénurie" },
    { label: "Déclaration notariée sur le logement lorsque l'employeur fournit un logement, avec un loyer ne dépassant pas la part légale du salaire net" },
  ],
  employeeDocs: [
    { label: "Passeport valide, copie intégrale pour la plateforme et original au consulat" },
    { label: "Extrait de casier judiciaire du pays d'origine ou de résidence, traduit en roumain, en anglais ou en français et légalisé" },
    { label: "Assurance médicale de voyage couvrant toute la période du visa, valable dans l'ensemble des États membres, avec la couverture minimale fixée par la loi" },
    { label: "Preuve de moyens de subsistance au niveau du salaire minimum brut national pour 90 jours, lorsque la catégorie l'exige" },
    { label: "CV et diplômes ou certificats de qualification, avec reconnaissance par le ministère de l'Éducation pour les travailleurs hautement qualifiés et les professions réglementées" },
    { label: "Document d'autorisation requis par la loi pour la profession, le cas échéant" },
    { label: "Pour le permis unic : contrat de travail, preuve de logement légal en Roumanie, preuve d'assurance maladie et preuve du paiement de la redevance" },
    { label: "Photographies d'identité et données biométriques relevées au consulat et à l'IGI" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne (Cartea albastră a UE)", summary: "Travailleurs hautement qualifiés titulaires d'un diplôme de l'enseignement supérieur ou, pour les professions réglementées, d'une expérience comparable, employés sous contrat à temps plein d'au moins 6 mois avec un salaire supérieur au seuil légal. La voie passe par la demande unique D/AM1 et la carte est délivrée par l'IGI pour la durée du contrat plus 3 mois, jusqu'à 3 ans. Les titulaires d'une carte bleue d'un autre État membre peuvent s'installer en Roumanie après 12 mois et déposer leur demande dans le mois suivant l'entrée." },
    { name: "Travailleurs détachés et transférés au sein d'un groupe (D/DT)", summary: "Les détachements et les transferts intragroupe suivent le visa de long séjour pour détachement (D/DT) et un permis de séjour pour détachement, avec des règles simplifiées pour les transferts depuis des entités de l'UE, de l'EEE et de Suisse sur la base d'un permis de séjour valide délivré par cet État." },
    { name: "Ressortissants de Moldavie, d'Ukraine et de Serbie", summary: "Les citoyens de ces trois pays employés à temps plein relèvent de la voie D/AM1 sans métier en pénurie, agence de placement ni test du marché." },
    { name: "Visa vacances-travail (D/VM)", summary: "Réservé aux ressortissants des États avec lesquels la Roumanie a conclu un accord bilatéral de vacances-travail." },
  ],
  watchOuts: [
    "Rien ne peut être déposé tant que l'ANOFM n'a pas enregistré l'employeur sur la plateforme, ce qui peut prendre jusqu'à 30 jours ouvrables. Le recrutement D/AM2 dépend aussi de l'inscription de la profession sur la liste des métiers en pénurie et du non-épuisement du quota annuel.",
    "Le délai de décision de 30 jours pour la demande unique ne court qu'à partir de la comparution personnelle du travailleur au consulat, de sorte qu'un rendez-vous consulaire tardif ou manquant bloque le dossier. Le permis unic doit ensuite être demandé avant l'expiration du visa de 90 jours.",
    "Le permis est lié à l'employeur. Un changement par démission n'est admis qu'après 6 mois de travail enregistré, et si le contrat prend fin, le droit de séjour ne dure pas plus longtemps que l'allocation de chômage, ou 90 jours sans allocation.",
  ],
};
