import type { CountryDetails } from "../types";

export const pl: CountryDetails = {
  authorities: [
    "Voïvode (wojewoda) et office de voïvodie (urząd wojewódzki) du lieu de résidence du travailleur : décision sur le permis unique et sur les permis de travail",
    "Office des étrangers (Urząd do Spraw Cudzoziemców, UdSC) : gère le portail MOS et connaît des recours contre les décisions du voïvode",
    "Starosta et office du travail de powiat (powiatowy urząd pracy) : listes par powiat des professions pour lesquelles les permis sont refusés, et enregistrement des déclarations de confier un travail à un étranger (oświadczenie o powierzeniu wykonywania pracy)",
    "Consulat de Pologne : visa national (type D) pour les travailleurs entrant depuis l'étranger sur la base d'un permis de travail",
  ],
  legalBasis: [
    "Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (loi sur les étrangers), en particulier les dispositions sur le permis de séjour temporaire et de travail",
    "Ustawa z dnia 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom na terytorium Rzeczypospolitej Polskiej, en vigueur depuis le 1er juin 2025",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
  ],
  steps: [
    {
      title: "Vérifier si un permis de travail et un visa sont d'abord nécessaires",
      actor: "Employer",
      detail:
        "Un travailleur qui se trouve à l'étranger ne peut pas déposer la demande de permis unique. L'employeur obtient un permis de travail du voïvode via praca.gov.pl ou, pour les ressortissants d'Ukraine, de Biélorussie, de Russie, de Géorgie, de Moldavie et d'Arménie, enregistre une déclaration de confier un travail auprès de l'office du travail de powiat. Le travailleur demande ensuite un visa national au consulat de Pologne.",
    },
    {
      title: "Entrer en Pologne et signer le contrat",
      actor: "Both",
      detail:
        "Le travailleur entre avec le visa national ou sur une autre base légale et peut commencer à travailler sur la base du permis de travail ou de la déclaration. Un contrat de travail, un contrat de mandat ou un contrat d'ouvrage est signé avec une rémunération au moins égale au minimum légal.",
    },
    {
      title: "L'employeur remplit l'annexe 1 dans MOS",
      actor: "Employer",
      detail:
        "Le travailleur commence la demande dans MOS et saisit l'adresse électronique de l'employeur. L'employeur reçoit un lien, remplit l'annexe 1 avec le poste (selon la liste officielle du GUS), le temps de travail, la rémunération et le type de contrat, et la signe avec un profil de confiance ou une signature qualifiée. Le lien est valable 30 jours.",
    },
    {
      title: "Le travailleur soumet la demande et paie le droit de timbre",
      actor: "Employee",
      detail:
        "Le travailleur soumet la demande par voie électronique via MOS au plus tard le dernier jour de son séjour légal, avec une copie du passeport, des photographies, la preuve du paiement du droit de timbre et les pièces justificatives telles qu'une assurance maladie lorsque le type de contrat ne donne pas de couverture légale.",
    },
    {
      title: "Empreintes digitales et vérification à l'office de voïvodie",
      actor: "Authority",
      detail:
        "L'office de voïvodie vérifie la demande, convoque le travailleur pour relever ses empreintes digitales et un spécimen de signature, et demande les documents manquants dans un délai fixé. Un document manquant constitue un vice de forme et la demande est laissée sans examen s'il n'est pas fourni à temps.",
    },
    {
      title: "Décision et carte de séjour",
      actor: "Authority",
      detail:
        "Le voïvode rend la décision. En cas d'approbation, le travailleur paie la redevance de la carte et retire la carte de séjour portant la mention de l'accès au marché du travail. Un refus peut faire l'objet d'un recours auprès du chef de l'Office des étrangers dans les 14 jours.",
    },
  ],
  employerDocs: [
    { label: "Annexe 1 à la demande, remplie et signée par voie électronique dans MOS par une personne habilitée à représenter l'employeur" },
    { label: "Contrat de travail, de mandat ou d'ouvrage indiquant une rémunération au moins égale au salaire minimum légal" },
    { label: "Permis de travail ou déclaration de confier un travail enregistrée, lorsque le travailleur est entré en Pologne sur cette base" },
    { label: "Déclaration sur le casier judiciaire et les antécédents de conformité de l'employeur, telle que requise dans l'annexe 1" },
    { label: "Procuration transmise au travailleur en dehors du système si l'employeur agit par un représentant", note: "Les employeurs ne peuvent pas joindre eux-mêmes de documents à l'annexe 1." },
  ],
  employeeDocs: [
    { label: "Demande de permis de séjour temporaire remplie dans MOS" },
    { label: "Copie d'un document de voyage valide, original présenté lors du relevé des empreintes digitales" },
    { label: "Photographies récentes conformes aux exigences officielles" },
    { label: "Preuve du paiement du droit de timbre" },
    { label: "Preuve d'assurance maladie lorsque le contrat ne donne pas de couverture légale" },
    { label: "Diplômes ou qualifications pour les professions réglementées" },
    { label: "Certificat de l'employeur précédent lorsque le travailleur change d'employeur" },
    { label: "Traductions jurées en polonais de tout document en langue étrangère" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Permis de séjour temporaire pour un travail dans une profession exigeant des qualifications élevées, avec un diplôme de l'enseignement supérieur ou une expérience qualifiante et un salaire supérieur à un seuil fixé chaque année. Également déposée via MOS." },
    { name: "Permis de travail et visa national", summary: "L'employeur obtient un permis de travail du voïvode via praca.gov.pl et le travailleur entre avec un visa national. Utilisé avant le permis unique ou à sa place pour les séjours plus courts." },
    { name: "Déclaration de confier un travail", summary: "Pour les ressortissants d'Ukraine, de Biélorussie, de Russie, de Géorgie, de Moldavie et d'Arménie, enregistrée auprès de l'office du travail de powiat et valable jusqu'à 24 mois, sans permis de travail." },
    { name: "Permis de transfert intragroupe", summary: "Permis de séjour temporaire distinct pour les cadres, les spécialistes et les stagiaires transférés au sein d'un groupe, encore déposé sur papier." },
  ],
  watchOuts: [
    "La demande ne peut être déposée que pendant le séjour légal du travailleur en Pologne. Une entrée avec un visa de tourisme, d'études ou de traitement médical bloque entièrement la procédure, et les documents de séjour d'un autre État Schengen entraînent un refus d'ouvrir la procédure.",
    "Rien n'avance tant que l'annexe 1 n'est pas signée. Le lien de l'employeur expire après 30 jours, le formulaire ne peut pas être enregistré en cours de saisie, et chaque représentant conjoint doit signer séparément.",
    "Le permis est lié à l'employeur, au poste, à la rémunération, au temps de travail et au type de contrat. Un changement d'employeur ou de ces conditions exige un nouveau permis ou une décision de modification ; seul un changement de nom, de forme juridique ou de siège de l'employeur en est dispensé.",
  ],
};
