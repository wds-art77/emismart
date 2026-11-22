import type { CountryDetails } from "../types";

export const ee: CountryDetails = {
  authorities: [
    "Office de la police et des gardes-frontières (Politsei- ja Piirivalveamet, PPA) : décision sur le permis de séjour et délivrance de la carte de séjour",
    "Caisse estonienne d'assurance chômage (Eesti Töötukassa) : autorisation de pourvoir le poste avec un ressortissant étranger",
    "Ambassades et consulats estoniens : réception des demandes, données biométriques et visas D",
    "Ministère de l'Intérieur : politique d'immigration et quota annuel fixé par règlement gouvernemental",
  ],
  legalBasis: [
    "Välismaalaste seadus (loi sur les étrangers, traduite par Foreign Nationals Act), en particulier les articles 176 à 181 sur le permis de séjour pour l'emploi et les articles 113 à 115 sur le quota d'immigration",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
    "Règlement du Gouvernement de la République établissant le quota annuel d'immigration",
  ],
  steps: [
    {
      title: "Vérifier les dispenses, le critère salarial et le quota",
      actor: "Employer",
      detail:
        "Confirmez si l'emploi relève d'une catégorie dispensée de l'autorisation de la Töötukassa, du critère salarial ou du quota d'immigration, et que la rémunération offerte atteint le salaire brut moyen estonien publié en dernier lieu par Statistics Estonia.",
    },
    {
      title: "Obtenir l'autorisation de la Töötukassa",
      actor: "Employer",
      detail:
        "Déposez la demande auprès du bureau régional de la Töötukassa du siège social de l'entreprise, par courriel signé numériquement ou sur papier. La Caisse statue dans les sept jours ouvrables et l'autorisation est valable six mois.",
    },
    {
      title: "Transmettre l'invitation de l'employeur au PPA",
      actor: "Employer",
      detail:
        "L'employeur ou son représentant autorisé envoie l'invitation signée, avec l'autorisation de la Töötukassa, au PPA par courriel ou par la poste avant ou au moment où le travailleur dépose sa demande.",
    },
    {
      title: "Déposer la demande avec les données biométriques",
      actor: "Employee",
      detail:
        "Prenez rendez-vous et déposez en personne dans une ambassade ou un consulat estonien, ou dans un bureau de service du PPA si vous êtes légalement en Estonie. Les empreintes digitales sont prises sauf si elles ont été données au cours des six dernières années. Payez la redevance d'État.",
    },
    {
      title: "Examen et décision",
      actor: "Authority",
      detail:
        "Le PPA vérifie les conditions, la fiabilité de l'employeur et le quota, peut demander des preuves complémentaires et statue dans les 90 jours de l'acceptation d'une demande complète. La carte de séjour suit dans les 30 jours.",
    },
    {
      title: "Arrivée, retrait de la carte et enregistrement de la résidence",
      actor: "Employee",
      detail:
        "Retirez la carte de séjour à la mission ou au bureau de service indiqué dans la demande. Enregistrez le lieu de résidence au registre de la population dans le mois de l'arrivée. L'employeur doit signaler les changements des conditions d'emploi et la fin du contrat.",
    },
  ],
  employerDocs: [
    { label: "Autorisation de la Caisse estonienne d'assurance chômage de pourvoir le poste avec un ressortissant étranger", note: "Sauf si l'emploi est dispensé au titre de l'article 181 de la loi sur les étrangers." },
    { label: "Invitation de l'employeur, signée par l'employeur ou son représentant autorisé et envoyée au PPA" },
    { label: "Contrat de travail ou offre ferme montrant une rémunération au moins égale au salaire brut moyen estonien" },
    { label: "Preuve que le travailleur remplit les exigences de qualification et de compétences du poste" },
    { label: "Inscription de l'employeur au registre du commerce estonien et absence d'arriérés fiscaux" },
  ],
  employeeDocs: [
    { label: "Formulaire de demande de permis de séjour temporaire et formulaire relatif aux proches parents et membres de la famille" },
    { label: "Document d'identité valide (passeport)" },
    { label: "Une photo numérique en couleur" },
    { label: "Documents montrant des revenus légaux pour les six mois précédant la demande" },
    { label: "Certificat de casier judiciaire de chaque pays de résidence d'au moins trois mois au cours des trois dernières années, délivré au cours des six derniers mois", note: "Requis à partir de 14 ans." },
    { label: "Preuve de paiement de la redevance d'État" },
    { label: "Contrat d'assurance maladie lorsque la loi sur les étrangers l'exige pour le titulaire du permis" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Diplôme de l'enseignement supérieur ou cinq ans d'expérience, contrat d'au moins un an et rémunération de 1,5 fois le salaire moyen (1,24 fois pour les professions listées). L'autorisation de la Töötukassa reste généralement nécessaire, avec des dispenses." },
    { name: "Spécialiste de haut niveau", summary: "Rémunération d'au moins 1,5 fois le salaire brut moyen estonien ; dispensé de l'autorisation de la Töötukassa et du quota d'immigration." },
    { name: "Employé de start-up", summary: "Emploi auprès d'une start-up reconnue par le comité d'experts ; dispensé du critère salarial, de l'autorisation de la Töötukassa et du quota." },
    { name: "Enregistrement d'un emploi de courte durée", summary: "L'employeur enregistre auprès du PPA un travail de 365 jours au plus sur 455 jours ; pas de permis de séjour, pas de quota ni d'autorisation de la Töötukassa, mais le critère salarial s'applique." },
  ],
  watchOuts: [
    "Le quota d'immigration de 0,1 pour cent de la population est souvent épuisé en cours d'année ; les demandes hors des catégories dispensées sont refusées une fois qu'il est atteint.",
    "L'autorisation de la Töötukassa expire six mois après sa délivrance et couvre un poste précis ; un poste différent ou une demande tardive oblige à recommencer.",
    "Le permis est lié à l'employeur. Depuis le 22 mai 2026, un nouvel employeur doit enregistrer le changement d'emploi auprès du PPA avant que le travailleur commence, et le chômage n'est toléré que pendant trois mois (six mois après deux ans sous le permis).",
  ],
};
