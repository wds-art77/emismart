import type { CountryDetails } from "../types";

export const cz: CountryDetails = {
  authorities: [
    "Ministère de l'Intérieur, Département de la politique d'asile et de migration (Ministerstvo vnitra, OAMP) : décision, données biométriques, délivrance de la carte, notifications de changement",
    "Ambassades et consulats tchèques : réception des demandes à l'étranger et délivrance du visa D/VR pour retirer la carte",
    "Office du travail de la République tchèque (Úřad práce ČR) et ministère du Travail et des Affaires sociales : enregistrement des postes vacants, registre central des postes vacants pour les titulaires de la carte d'employé, avis contraignants et permis de travail",
  ],
  legalBasis: [
    "Zákon č. 326/1999 Sb., o pobytu cizinců na území České republiky (loi sur le séjour des ressortissants étrangers), telle que modifiée par la loi n° 101/2014 Coll. transposant la directive sur le permis unique",
    "Zákon č. 435/2004 Sb., o zaměstnanosti (loi sur l'emploi), sur l'enregistrement des postes vacants et le registre central",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
  ],
  steps: [
    {
      title: "Déclarer le poste vacant et consentir à l'inscription au registre central",
      actor: "Employer",
      detail:
        "L'employeur déclare le poste vacant à l'Office régional du travail et consent à son inscription au registre central des postes vacants pouvant être occupés par des titulaires de la carte d'employé. Après la période de publication, le poste reçoit un numéro d'identification dont le travailleur a besoin pour la demande.",
    },
    {
      title: "Signer le contrat et rassembler les preuves de qualification",
      actor: "Both",
      detail:
        "Les parties signent un contrat de travail, un accord d'activité professionnelle ou un accord préliminaire. Si l'emploi ou l'employeur exige une qualification, le travailleur obtient le diplôme ou le certificat avec une traduction tchèque certifiée.",
    },
    {
      title: "Prendre rendez-vous et déposer en personne à l'ambassade",
      actor: "Employee",
      detail:
        "Le travailleur prend rendez-vous à l'ambassade tchèque (certaines ambassades appliquent des quotas ou des systèmes d'inscription), dépose la demande en personne avec le numéro du poste vacant, le passeport, la photo, la preuve de logement, le contrat, l'extrait de casier judiciaire et les autres documents datant de moins de 180 jours, et paie la redevance consulaire.",
    },
    {
      title: "Décision du ministère de l'Intérieur",
      actor: "Authority",
      detail:
        "L'ambassade transmet le dossier au ministère, qui peut demander un avis contraignant à l'Office du travail et statue dans les 60 ou 90 jours. Un refus peut être contesté en demandant au ministère un réexamen dans les 15 jours.",
    },
    {
      title: "Visa D/VR, assurance voyage et entrée",
      actor: "Employee",
      detail:
        "En cas d'approbation, l'ambassade délivre un visa D/VR pour retirer la carte. Le travailleur doit présenter une assurance médicale de voyage couvrant la période jusqu'au début de l'assurance maladie publique, puis se rend en Tchéquie.",
    },
    {
      title: "Données biométriques, certificat provisoire et retrait de la carte",
      actor: "Employee",
      detail:
        "Dans les 30 jours de l'arrivée avec le visa D/VR (3 jours ouvrables en cas d'entrée sans visa avec un passeport biométrique), le travailleur se présente à un bureau du ministère, donne ses données biométriques et reçoit un certificat de conformité aux conditions, qui permet de commencer à travailler. La carte est retirée dans les 60 jours, avec la confirmation de l'employeur que le travail a commencé.",
    },
  ],
  employerDocs: [
    { label: "Poste vacant déclaré à l'Office du travail et consentement à l'inscription au registre central, donnant le numéro d'identification du poste" },
    { label: "Contrat de travail, accord d'activité professionnelle ou accord préliminaire conforme au code du travail et aux règles de salaire minimum" },
    { label: "Confirmation que l'emploi n'exige pas de qualification, ou que la qualification du travailleur est acceptée, le cas échéant" },
    { label: "Pour le travail intérimaire, un document indiquant le travailleur, le type et le lieu de travail et l'entreprise utilisatrice" },
    { label: "Confirmation que le travailleur a commencé à travailler, nécessaire au retrait de la carte" },
  ],
  employeeDocs: [
    { label: "Formulaire de demande de permis de séjour de longue durée (carte d'employé) avec le numéro du poste vacant" },
    { label: "Document de voyage valide, original" },
    { label: "Photo d'apparence actuelle" },
    { label: "Preuve de logement en Tchéquie" },
    { label: "Extrait de casier judiciaire du pays de nationalité et des pays de résidence de plus de 6 mois au cours des 3 dernières années" },
    { label: "Preuve de qualification professionnelle lorsque l'emploi l'exige, avec traduction tchèque certifiée" },
    { label: "Rapport médical sur demande", note: "Les pièces jointes doivent dater de moins de 180 jours, sauf le passeport et la photo." },
    { label: "Assurance médicale de voyage avant la délivrance du visa D/VR" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Pour les travailleurs hautement qualifiés titulaires d'un diplôme de l'enseignement supérieur et d'un salaire supérieur au seuil publié chaque année, pour les postes vacants du registre distinct de la carte bleue." },
    { name: "Carte de personne transférée au sein de son entreprise", summary: "Pour les cadres, spécialistes et stagiaires transférés au sein d'un groupe, en dehors du registre de la carte d'employé." },
    { name: "Programmes de migration économique approuvés par le gouvernement", summary: "Des programmes tels que Key and Research Staff et Highly Qualified Employee donnent accès aux rendez-vous d'ambassade, permettent à l'employeur de déposer par procuration et laissent des confirmations de l'employeur remplacer certains documents." },
    { name: "Carte d'employé non duale", summary: "Séjour uniquement, pour les travailleurs qui ont un libre accès au marché du travail ou détiennent un permis de travail distinct de l'Office du travail." },
  ],
  watchOuts: [
    "Les rendez-vous d'ambassade sont le goulot d'étranglement. Plusieurs ambassades appliquent des quotas ou des systèmes d'inscription et des dates sont annulées ou déplacées ; la demande ne peut pas être déposée par la poste ni en ligne et une mauvaise ambassade entraîne le rejet.",
    "Chaque pièce jointe, sauf le passeport et la photo, expire après 180 jours et doit être en tchèque ou accompagnée d'une traduction certifiée ; un extrait de casier judiciaire périmé ou un poste vacant non enregistré bloque le dossier.",
    "La carte est liée au poste vacant enregistré. Un changement d'employeur ou de poste doit être signalé au ministère à l'avance, normalement seulement après 6 mois chez le premier employeur et au moins 30 jours avant le début, et après la fin de l'emploi le travailleur dispose d'une période limitée (actuellement 90 jours selon le portail du ministère) pour signaler un nouvel emploi, sinon la carte devient caduque.",
  ],
};
