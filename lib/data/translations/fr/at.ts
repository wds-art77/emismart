import type { CountryDetails } from "../types";

export const at: CountryDetails = {
  authorities: [
    "Autorité de séjour (Niederlassungsbehörde) : administration de district (Bezirkshauptmannschaft) ou magistrat municipal, MA 35 à Vienne, gouvernement provincial de Basse-Autriche en Basse-Autriche et gouvernement provincial de Styrie à Graz",
    "Arbeitsmarktservice (AMS), office régional du siège de l'employeur : vérification des points, vérification du salaire et test du marché du travail",
    "Représentations autrichiennes à l'étranger (réseau du BMEIA) : réception des demandes et délivrance du visa D",
    "Ministère fédéral de l'Intérieur (BMI) : formulaires, déclaration de l'employeur et droit du séjour",
  ],
  legalBasis: [
    "Niederlassungs- und Aufenthaltsgesetz (NAG), en particulier le § 41, et la NAG-Durchführungsverordnung",
    "Ausländerbeschäftigungsgesetz (AuslBG), en particulier les §§ 12b et 20d, avec la Fachkräfteverordnung annuelle listant les métiers en pénurie",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
  ],
  steps: [
    {
      title: "Choisir la catégorie et signer la déclaration de l'employeur",
      actor: "Employer",
      detail:
        "L'employeur confirme quelle catégorie de Rot-Weiß-Rot – Karte correspond au travailleur (métier en pénurie, autre travailleur clé, diplômé, très hautement qualifié) et complète la déclaration de l'employeur du BMI indiquant l'emploi, le salaire brut et les conditions de travail.",
    },
    {
      title: "Déposer la demande",
      actor: "Both",
      detail:
        "Le travailleur dépose en personne auprès de la représentation autrichienne à l'étranger, ou l'employeur dépose auprès de l'autorité de séjour en Autriche. Le dossier comprend la déclaration de l'employeur, le passeport, la photo, les preuves de qualifications, d'expérience et de compétences linguistiques, ainsi que la redevance de demande.",
    },
    {
      title: "Transmission à l'AMS",
      actor: "Authority",
      detail:
        "La représentation ou l'autorité de séjour transmet la demande à l'office régional de l'AMS compétent pour le siège de l'employeur.",
    },
    {
      title: "Évaluation par l'AMS",
      actor: "Authority",
      detail:
        "L'AMS vérifie les points, si la rémunération atteint le minimum légal de la catégorie et, pour les travailleurs clés, si un demandeur d'emploi inscrit de qualification équivalente est disponible. Il communique le résultat à l'autorité de séjour.",
    },
    {
      title: "Décision et instruction de visa",
      actor: "Authority",
      detail:
        "L'autorité de séjour vérifie les conditions générales (assurance maladie, absence d'interdiction d'entrée, absence de risque pour l'ordre public) et statue dans les 8 semaines. Lorsqu'un visa est nécessaire, elle charge la représentation de délivrer un visa D pour l'entrée et le retrait de la carte.",
    },
    {
      title: "Visa D et entrée",
      actor: "Employee",
      detail:
        "Le travailleur demande le visa D dans les 3 mois de la notification et se rend en Autriche. Les ressortissants exemptés de visa entrent directement.",
    },
    {
      title: "Retirer la carte et commencer à travailler",
      actor: "Employee",
      detail:
        "La carte est retirée en personne auprès de l'autorité de séjour, sur rendez-vous, dans les 3 mois de l'entrée. Le travail peut commencer dès réception de la carte.",
    },
  ],
  employerDocs: [
    { label: "Déclaration de l'employeur (Arbeitgebererklärung) sur le formulaire du BMI confirmant les conditions d'emploi" },
    { label: "Offre d'emploi ferme ou contrat de travail signé indiquant le salaire mensuel brut, primes spéciales comprises" },
    { label: "Preuve que la rémunération atteint le minimum légal de la catégorie, ou le minimum de la convention collective majoré du supplément usuel pour les métiers en pénurie" },
    { label: "Description du poste pour le test du marché du travail de l'AMS lorsque la catégorie l'exige" },
    { label: "Confirmation que l'anglais est la langue prédominante de l'entreprise, lorsque des points bonus sont revendiqués" },
  ],
  employeeDocs: [
    { label: "Document de voyage valide" },
    { label: "Photo d'identité 45 x 35 mm, datant de moins de 6 mois" },
    { label: "Preuve d'une assurance maladie couvrant tous les risques en Autriche" },
    { label: "Extrait de casier judiciaire du pays d'origine ou de résidence de longue durée, idéalement datant de moins de 3 mois", note: "Demandé par la plupart des autorités au cas par cas" },
    { label: "Preuves de qualification : certificat de formation professionnelle, certificat d'accès à l'université ou diplôme avec preuve du statut de l'établissement" },
    { label: "Expérience professionnelle : certificats de travail et attestations d'employeurs" },
    { label: "Certificats de langue au niveau CECR revendiqué, datant de moins de 5 ans" },
    { label: "Traductions certifiées des documents qui ne sont pas en allemand ou en anglais, apostillés ou légalisés lorsque c'est requis" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne (Blaue Karte EU)", summary: "Diplôme d'au moins 3 ans ou, pour les professionnels des TIC, 3 ans d'expérience pertinente, offre d'emploi d'au moins 6 mois et salaire supérieur au seuil annuel fondé sur le revenu annuel brut moyen à temps plein. Test du marché du travail de l'AMS, pas de système de points, valable 24 mois." },
    { name: "Rot-Weiß-Rot – Karte pour travailleurs très hautement qualifiés", summary: "Au moins 70 points sur 100. Un visa de recherche d'emploi de 6 mois permet d'entrer pour chercher un emploi ; une fois un emploi correspondant trouvé, la carte est demandée sans test du marché du travail." },
    { name: "Rot-Weiß-Rot – Karte pour travailleurs qualifiés dans les métiers en pénurie", summary: "Formation professionnelle dans un métier figurant sur la liste annuelle de la Fachkräfteverordnung, au moins 55 points et rémunération au minimum de la convention collective. Pas de test du marché du travail." },
    { name: "Autorisation de séjour temporaire ICT (Aufenthaltsbewilligung ICT)", summary: "Cadres, spécialistes et stagiaires transférés au sein d'un groupe vers une entité autrichienne. Doit toujours être demandée depuis l'étranger." },
  ],
  watchOuts: [
    "Le délai de décision de 8 semaines et le délai de 45 jours pour un début provisoire après un changement d'employeur ne courent que lorsque le dossier est complet. Des certificats, traductions ou la déclaration de l'employeur manquants les suspendent.",
    "La carte est liée à un seul employeur. Un nouvel employeur implique une demande de changement d'objet, et le travailleur ne peut commencer à titre provisoire qu'après 45 jours (30 jours pour les titulaires de la carte bleue).",
    "Déposer en Autriche pendant un séjour sans visa ne prolonge pas automatiquement le droit de séjour. Les pages officielles décrivent les conditions dans lesquelles une demande déposée à temps permet au travailleur d'attendre la décision en Autriche ; confirmez-le auprès de l'autorité de séjour avant la fin de la période sans visa.",
  ],
};
