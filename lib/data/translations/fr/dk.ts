import type { CountryDetails } from "../types";

export const dk: CountryDetails = {
  authorities: [
    "Styrelsen for International Rekruttering og Integration (SIRI) : décision sur tous les régimes de travail, certification des entreprises Fast-track, Citizen Centre pour les données biométriques",
    "Missions diplomatiques danoises et centres de demande de visa à l'étranger : enregistrement des données biométriques",
    "Conseils régionaux de l'emploi (Regionale Arbejdsmarkedsråd) : évaluation de la conformité du salaire et des conditions aux normes danoises, et ajouts aux listes positives",
    "Autorité danoise de sécurité des patients et autres organismes d'autorisation : autorisation pour les professions réglementées avant qu'un permis puisse être accordé",
  ],
  legalBasis: [
    "Udlændingeloven (loi danoise sur les étrangers), article 9 a, qui énumère les régimes de travail dont les listes positives, le Pay Limit Scheme et le Fast-track Scheme",
    "Protocole n° 22 sur la position du Danemark annexé aux traités de l'UE, en vertu duquel la directive 2011/98/UE et la directive (UE) 2024/1233 ne lient pas le Danemark",
    "Ajustement annuel des montants du plafond salarial au 1er janvier et mises à jour semestrielles des listes positives",
  ],
  steps: [
    {
      title: "Choisir le régime et vérifier le salaire et les conditions",
      actor: "Employer",
      detail:
        "L'employeur vérifie si le salaire dépasse le plafond salarial en vigueur, si l'intitulé du poste figure sur une liste positive, ou si l'entreprise est certifiée Fast-track. L'horaire doit être d'au moins 30 heures par semaine dans le Pay Limit Scheme et à temps plein dans le Fast-track, et l'emploi ne doit pas être visé par un conflit du travail.",
    },
    {
      title: "Créer l'identifiant de dossier et payer la redevance",
      actor: "Both",
      detail:
        "L'employeur ou le travailleur crée l'identifiant de dossier (case order ID) sur nyidanmark.dk et paie la redevance de traitement. Le reçu doit être joint à la demande. Les travailleurs frontaliers qui ne résideront pas au Danemark n'ont besoin ni de l'un ni de l'autre.",
    },
    {
      title: "Compléter la demande en ligne",
      actor: "Both",
      detail:
        "Dans l'AR1, l'employeur remplit la partie relative à l'entreprise et à l'emploi et le travailleur la partie personnelle, en signant avec MitID ou une déclaration sous serment. Dans l'AR6, l'employeur dépose avec procuration. Le contrat ou l'offre d'emploi, les copies du passeport et les documents de formation sont joints.",
    },
    {
      title: "Enregistrer les données biométriques dans les 14 jours",
      actor: "Employee",
      detail:
        "Le travailleur fait enregistrer son image faciale et ses empreintes digitales dans une mission danoise ou un centre de demande à l'étranger, ou dans une antenne du SIRI sur rendez-vous s'il est légalement au Danemark. Le non-respect du délai entraîne le rejet.",
    },
    {
      title: "Évaluation par le SIRI",
      actor: "Authority",
      detail:
        "Le SIRI vérifie les composantes du salaire, la conformité des conditions aux normes danoises, toute autorisation requise et la réalité de l'emploi. Il peut demander des documents complémentaires ou consulter un conseil régional de l'emploi, ce qui allonge le délai de traitement.",
    },
    {
      title: "Décision et carte de séjour",
      actor: "Authority",
      detail:
        "La décision est envoyée au demandeur et, le cas échéant, à l'employeur. La carte de séjour est postée à l'adresse du travailleur enregistrée au CPR au Danemark ; le nom doit donc figurer sur la boîte aux lettres.",
    },
    {
      title: "Arrivée, inscription au CPR et compte bancaire danois",
      actor: "Employee",
      detail:
        "Le travailleur enregistre une adresse danoise au registre CPR et ouvre un compte bancaire danois à son propre nom dans les 180 jours du permis ou de l'entrée. Le salaire doit être versé sur ce compte. Tout changement d'emploi, même au sein de l'entreprise, doit être signalé au SIRI.",
    },
  ],
  employerDocs: [
    { label: "Contrat de travail ou offre d'emploi indiquant le salaire, les conditions d'emploi et une description de fonction" },
    { label: "Justificatifs des composantes du salaire non indiquées dans le contrat, telles que la pension ou les suppléments garantis" },
    { label: "Procuration du travailleur lorsque l'employeur dépose seul (AR6)" },
    { label: "Pour les entreprises nouvellement créées : plan d'affaires et budget ou balance du grand livre ; pour les entreprises en cours de création : plan de création et aperçu des principaux coûts" },
    { label: "Employeurs de l'hôtellerie et de la restauration : la liste de contrôle documentaire supplémentaire du SIRI pour le secteur" },
    { label: "Demandes Fast-track : la certification SIRI de l'entreprise et, pour le volet formation, une description de l'objectif de formation" },
  ],
  employeeDocs: [
    { label: "Reçu de la redevance de traitement avec l'identifiant de dossier" },
    { label: "Copie de toutes les pages du passeport, y compris les pages vierges et les couvertures" },
    { label: "Justificatifs de la formation et de l'expérience professionnelle pertinentes ; pour les listes positives, preuve du niveau requis d'enseignement supérieur ou de formation qualifiée" },
    { label: "Autorisation danoise lorsque la profession l'exige, par exemple de l'Autorité danoise de sécurité des patients" },
    { label: "Preuve de séjour légal au Danemark en cas de demande depuis le pays" },
    { label: "Curriculum vitae le cas échéant" },
    { label: "Traductions des documents qui ne sont pas en danois, anglais, norvégien ou suédois" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Non disponible : le Danemark ne participe pas au régime de la carte bleue européenne. Le Pay Limit Scheme et le volet Fast-track pay limit servent à la place les travailleurs à haut salaire." },
    { name: "Liste positive pour les personnes diplômées de l'enseignement supérieur et liste positive pour le travail qualifié", summary: "Métiers en pénurie listés par code DISCO avec la formation requise, mis à jour les 1er janvier et 1er juillet, avec des ajouts régionaux. Pas de plafond salarial au-delà des normes danoises ; permis de 4 ans." },
    { name: "Fast-track Scheme", summary: "Pour les entreprises certifiées par le SIRI. Cinq volets (pay limit, supplementary pay limit, courte durée, chercheurs, formation), début d'emploi rapide et autorisation de travailler à la fois au Danemark et à l'étranger." },
    { name: "Supplementary Pay Limit Scheme", summary: "Un plafond salarial plus bas pour les emplois publiés sur Jobnet et EURES pendant 2 semaines, disponible tant que le chômage national reste sous un taux fixé. Permis jusqu'à 5 ans mais sans période de recherche d'emploi." },
  ],
  watchOuts: [
    "Les données biométriques doivent être enregistrées dans les 14 jours du dépôt et le demandeur AR1 doit s'inscrire avec exactement l'adresse électronique saisie par l'employeur ; ce sont deux causes fréquentes de rejet ou de recommencement.",
    "Seuls le salaire en espèces garanti, les cotisations de pension et l'indemnité de congés comptent pour le plafond salarial. Le logement, la voiture, le téléphone et les autres avantages en nature n'y comptent pas, et l'indemnité de congés versée l'année suivante ne compte pas pour l'année d'acquisition.",
    "Le permis est lié à l'emploi. Un nouveau poste, même dans la même entreprise, requiert une nouvelle demande, et le salaire doit être versé sur un compte bancaire danois dans les 180 jours, sinon le permis est menacé.",
  ],
};
