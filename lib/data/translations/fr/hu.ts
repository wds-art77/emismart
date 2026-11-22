import type { CountryDetails } from "../types";

export const hu: CountryDetails = {
  authorities: [
    "Direction générale nationale de la police des étrangers (Országos Idegenrendészeti Főigazgatóság, OIF) et ses directions régionales : décision et délivrance de la carte",
    "Office gouvernemental de comitat (kormányhivatal) en tant qu'autorité de l'emploi : avis contraignant sur l'emploi, y compris le test du marché du travail le cas échéant",
    "Ambassades et consulats de Hongrie : réception des demandes à l'étranger et délivrance du visa pour le retrait du permis de séjour",
    "Enter Hungary (enterhungary.gov.hu) : plateforme de dépôt électronique pour les demandeurs et les employeurs",
  ],
  legalBasis: [
    "2023. évi XC. törvény a harmadik országbeli állampolgárok beutazására és tartózkodására vonatkozó általános szabályokról (loi XC de 2023), en particulier les §§ 28, 30 à 31, 36, 168, 173 et 242",
    "Décret gouvernemental 35/2024 (II. 29.) portant exécution de la loi XC de 2023, et décrets fixant les nationalités éligibles et les professions exclues",
    "Décret gouvernemental 445/2013 (XI. 28.) sur les activités dispensées de permis de travail",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
  ],
  steps: [
    {
      title: "Vérifier le type de permis et les règles de nationalité applicables",
      actor: "Employer",
      detail:
        "L'employeur confirme que la nationalité du travailleur figure sur la liste fixée par décret gouvernemental pour les permis d'emploi, que la profession n'est pas exclue, si la Carte hongroise ou le permis de travailleur invité convient mieux, et qu'il remplit toute exigence d'enregistrement.",
    },
    {
      title: "Signer un accord préliminaire ou un contrat de travail",
      actor: "Both",
      detail:
        "Un accord préliminaire visant à établir une relation de travail, ou un contrat signé, est requis pour la demande, avec toute qualification exigée par l'emploi.",
    },
    {
      title: "Soumettre une demande de main-d'œuvre et déposer la demande",
      actor: "Employer",
      detail:
        "L'employeur peut déposer une demande de main-d'œuvre auprès du service public de l'emploi. La demande est ensuite déposée soit par le travailleur au consulat, soit par l'employeur via Enter Hungary avec le consentement écrit du travailleur, la redevance étant payée au dépôt.",
    },
    {
      title: "Avis de l'autorité de l'emploi et décision",
      actor: "Authority",
      detail:
        "La direction régionale recueille l'avis contraignant de l'office gouvernemental de comitat sur l'emploi, qui comprend le test du marché du travail sauf dispense, et statue sur le séjour et le travail dans un seul permis combiné.",
    },
    {
      title: "Visa et entrée",
      actor: "Employee",
      detail:
        "Si le travailleur a déposé sa demande depuis l'étranger, le consulat délivre un visa pour le retrait du permis de séjour. Le travailleur entre en Hongrie et doit obtenir le permis à la direction régionale avant l'expiration du visa.",
    },
    {
      title: "Retirer le permis de séjour et déclarer l'adresse",
      actor: "Employee",
      detail:
        "Le travailleur fournit ses données biométriques si elles n'ont pas déjà été relevées, retire la carte de séjour à la direction régionale et déclare son logement en Hongrie. L'assurance maladie découle automatiquement de l'emploi déclaré.",
    },
  ],
  employerDocs: [
    { label: "Accord préliminaire visant à établir une relation de travail, ou contrat de travail signé" },
    { label: "Consentement écrit du travailleur lorsque l'employeur dépose via Enter Hungary" },
    { label: "Demande de main-d'œuvre auprès du service public de l'emploi, lorsque le test du marché du travail s'applique" },
    { label: "Preuve de l'enregistrement comme employeur préférentiel ou agence de travail temporaire qualifiée, pour le permis de travailleur invité" },
    { label: "Immatriculation de la société et accès de l'employeur au portail d'entreprise Enter Hungary" },
  ],
  employeeDocs: [
    { label: "Formulaire de demande, sur papier au consulat ou électronique dans Enter Hungary" },
    { label: "Document de voyage valable au moins 3 mois au-delà du séjour envisagé" },
    { label: "Preuve d'un logement adéquat en Hongrie" },
    { label: "Preuve de ressources suffisantes, normalement le contrat de travail ou l'accord préliminaire" },
    { label: "Qualification certifiée avec traduction lorsque l'emploi en exige une" },
    { label: "Preuve d'assurance maladie, satisfaite par l'emploi déclaré" },
    { label: "Photographie d'identité et données biométriques" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Pour les travailleurs hautement qualifiés titulaires d'un diplôme de l'enseignement supérieur et d'un salaire supérieur au seuil national ; déposée par les mêmes canaux, avec des droits de mobilité dans l'UE." },
    { name: "Carte hongroise (Magyar Kártya)", summary: "Pour les titulaires d'une qualification de l'enseignement supérieur en emploi ou dirigeant une société, et pour des catégories listées telles que les sportifs professionnels et les artistes du spectacle. Valable jusqu'à 3 ans et prolongeable de 3 ans à la fois, sans le plafond de 3 ans." },
    { name: "Permis de séjour de travailleur invité (vendégmunkás-tartózkodási engedély)", summary: "Pour les emplois peu qualifiés auprès d'un employeur préférentiel enregistré ou d'une agence de travail temporaire qualifiée, limité aux nationalités et professions fixées par décret. Jusqu'à 2 ans plus 1 an, 3 ans au total." },
    { name: "Carte nationale (Nemzeti Kártya)", summary: "Pour les ressortissants de pays listés par décret gouvernemental qui occupent un emploi ou dirigent une société en Hongrie. Délivrée pour 2 ans au plus et prolongeable de 3 ans au plus à la fois." },
  ],
  watchOuts: [
    "L'éligibilité repose sur des listes. Les listes de nationalités et de professions exclues changent par décret, et le plafond annuel des permis d'emploi et de travailleur invité peut fermer la voie ; vérifiez les décrets en vigueur avant de recruter.",
    "Le permis d'emploi comporte un plafond strict de 3 ans. Un travailleur qui souhaite rester plus longtemps doit passer à temps à la Carte hongroise, à la carte bleue ou à un autre statut, et le type de permis ne peut pas être changé en Hongrie pendant sa validité sauf dans les cas prévus par la loi.",
    "La perte d'emploi ou un changement d'employeur exige une nouvelle demande dans un bref délai (le portail européen sur l'immigration indique 5 jours), et les prolongations doivent être déposées avant l'expiration via Enter Hungary (le portail européen sur l'immigration indique au moins 30 jours avant).",
  ],
};
