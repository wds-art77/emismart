import type { CountryDetails } from "../types";

export const lt: CountryDetails = {
  authorities: [
    "Département des migrations auprès du ministère de l'Intérieur (Migracijos departamentas) : lettres de médiation, décisions sur les permis de séjour, MIGRIS",
    "Service de l'emploi auprès du ministère de la Sécurité sociale et du Travail (Užimtumo tarnyba) : permis de travail, listes de métiers en pénurie et décisions sur le marché du travail lorsqu'elles restent requises",
    "Ambassades et consulats de Lituanie et leurs prestataires de services externes : données biométriques et visas nationaux pour les demandeurs à l'étranger",
    "Inspection nationale du travail (VDI) : notifications des employeurs et contrôle des règles sur l'emploi des étrangers",
  ],
  legalBasis: [
    "Įstatymas dėl užsieniečių teisinės padėties (loi sur le statut juridique des étrangers, no IX-2206), telle que modifiée avec effet au 1er juillet 2024, au 1er janvier 2025 et au 22 mai 2026",
    "Directive 2011/98/UE, refondue par la directive (UE) 2024/1233",
    "Arrêté annuel du ministre de la Sécurité sociale et du Travail approuvant le quota d'étrangers arrivant pour travailler",
  ],
  steps: [
    {
      title: "Vérifier la voie, le quota et les conditions relatives à l'employeur",
      actor: "Employer",
      detail:
        "Confirmer si le quota a encore de la place ou si l'exemption liée au salaire ou à la liste de pénurie s'applique, que le contrat sera à temps plein pour au moins six mois, et que la société n'a pas d'amende récente pour travail illégal ou non déclaré, qui interdit l'embauche d'étrangers pendant un an.",
    },
    {
      title: "Soumettre la lettre de médiation dans MIGRIS",
      actor: "Employer",
      detail:
        "Déposer la lettre de médiation électronique, payer la redevance et indiquer la qualification et l'expérience du travailleur ou l'engagement de payer au moins le salaire mensuel brut moyen. MIGRIS attribue un numéro pour la demande du travailleur.",
    },
    {
      title: "Déposer la demande de permis de séjour",
      actor: "Employee",
      detail:
        "Compléter la demande dans MIGRIS, saisir le numéro de la lettre de médiation, télécharger les documents, payer la redevance d'État (plus élevée pour la procédure urgente) et prendre rendez-vous.",
    },
    {
      title: "Données biométriques et originaux",
      actor: "Employee",
      detail:
        "Se présenter au bureau du Département des migrations, ou dans une mission lituanienne ou chez un prestataire de services externe à l'étranger, pour donner les empreintes digitales et l'image faciale et présenter les documents originaux. Les demandeurs à l'étranger soumis à visa peuvent demander un visa national pour entrer une fois la décision positive.",
    },
    {
      title: "Examen et décision",
      actor: "Authority",
      detail:
        "Le Département des migrations vérifie le quota, l'employeur, les documents du travailleur et tout motif de sécurité, et statue dans le délai légal (4 mois ou 2 mois en procédure urgente selon le portail européen sur l'immigration).",
    },
    {
      title: "Retrait, déclaration de résidence et notifications",
      actor: "Both",
      detail:
        "Le travailleur retire la carte, déclare son lieu de résidence et signale les changements ultérieurs dans les 10 jours ouvrables. L'employeur notifie le début de l'emploi et doit signaler la fin du contrat ; un travailleur qui perd son emploi dispose de trois mois (six après deux ans sous permis) pour trouver un nouvel employeur.",
    },
  ],
  employerDocs: [
    { label: "Lettre de médiation soumise dans MIGRIS avec preuve de la redevance" },
    { label: "Contrat de travail ou engagement ferme pour un travail à temps plein d'au moins six mois", note: "Indique le salaire mensuel brut convenu." },
    { label: "Preuve de la qualification du travailleur et d'au moins un an d'expérience pertinente au cours des trois dernières années, ou engagement de payer au moins le salaire mensuel brut moyen national" },
    { label: "Données d'immatriculation de la société et déclaration sur les amendes pour infractions aux règles d'emploi ou d'immigration" },
    { label: "Permis de travail ou décision du Service de l'emploi lorsque la voie l'exige encore (travail saisonnier, visa national)" },
  ],
  employeeDocs: [
    { label: "Demande complétée dans MIGRIS" },
    { label: "Passeport en cours de validité" },
    { label: "Photographie conforme aux exigences du Département des migrations" },
    { label: "Numéro de la lettre de médiation délivré à l'employeur" },
    { label: "Extraits de casier judiciaire des États de résidence des deux dernières années", note: "Premier permis uniquement." },
    { label: "Preuve de ressources suffisantes ou de revenus réguliers et d'un logement en Lituanie" },
    { label: "Assurance maladie couvrant le séjour jusqu'à la prise en charge par la couverture lituanienne" },
    { label: "Diplôme ou autre preuve de qualification lorsque l'employeur se fonde sur la qualification du travailleur" },
  ],
  alternativeRoutes: [
    { name: "Carte bleue européenne", summary: "Diplôme de l'enseignement supérieur ou cinq ans d'expérience et rémunération d'au moins 1,5 fois le salaire brut moyen ; hors quota, permis de trois ans, décision dans les 2 mois ou 1 mois en urgence, et pas de décision du Service de l'emploi lorsque la rémunération atteint trois fois la moyenne ou que l'emploi figure sur la liste de pénurie." },
    { name: "Transfert intragroupe", summary: "Cadres, spécialistes et employés stagiaires transférés au sein d'un groupe selon les règles ICT de la même loi." },
    { name: "Visa national avec permis de travail", summary: "Pour le travail saisonnier et d'autres missions courtes d'un an au plus, le Service de l'emploi délivre un permis de travail et le travailleur entre avec un visa national, qui ne peut pas être renouvelé." },
    { name: "Diplômés d'établissements lituaniens", summary: "Les travailleurs ayant achevé des études en Lituanie au cours des cinq dernières années sont hors quota et dispensés de la condition d'expérience préalable." },
  ],
  watchOuts: [
    "Le quota annuel peut s'épuiser bien avant la fin de l'année ; en octobre 2025, le Département des migrations a cessé d'accepter de nouvelles demandes, ne laissant que les exceptions liées au salaire plus élevé et à la liste de pénurie.",
    "Depuis le 1er novembre 2026, les demandeurs séjournant en Lituanie avec un visa Schengen ou le visa national d'un autre pays doivent déposer leur demande depuis l'étranger, et la liste des prestataires de services externes acceptant les demandes fondées sur le travail a été réduite.",
    "Le dossier de l'employeur compte : une amende pour travail illégal ou non déclaré ou des manquements répétés aux obligations de notification bloquent les nouveaux permis pendant un an, et le non-respect de la condition de contrat à temps plein de six mois entraîne un refus ou un retrait.",
  ],
};
