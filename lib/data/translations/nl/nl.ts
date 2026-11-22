import type { CountryDetails } from "../types";

export const nl: CountryDetails = {
  authorities: [
    "Immigratie- en Naturalisatiedienst (IND): beslissing over verblijf en werk",
    "UWV (Uitvoeringsinstituut Werknemersverzekeringen): advies over de arbeidsmarkttoets",
    "Nederlandse ambassade of consulaat: afgifte van het MVV-inreisvisum waar vereist",
  ],
  legalBasis: [
    "Richtlijn 2011/98/EU, herzien bij Richtlijn (EU) 2024/1233",
    "Wet arbeid vreemdelingen (Wav) en Besluit uitvoering Wav",
    "Vreemdelingenwet 2000 en Vreemdelingenbesluit 2000",
  ],
  steps: [
    {
      title: "Nagaan of een afzonderlijke regeling van toepassing is",
      actor: "Employer",
      detail:
        "Kennismigranten, houders van een Europese blauwe kaart, binnen een onderneming overgeplaatste personen en onderzoekers volgen hun eigen routes en hebben geen GVVA nodig.",
    },
    {
      title: "De vacature registreren bij het UWV",
      actor: "Employer",
      detail:
        "De vacature moet bij het UWV worden gemeld en ten minste 5 weken vóór de aanvraag openstaan voor de EER-arbeidsmarkt, met bewijs van de wervingsinspanningen.",
    },
    {
      title: "De GVVA-aanvraag indienen",
      actor: "Employer",
      detail:
        "De werkgever dient de aanvraag en de documenten van de werknemer in bij de IND, online voor erkende referenten of op papier, en betaalt de vergoeding.",
    },
    {
      title: "De IND vraagt advies aan het UWV",
      actor: "Authority",
      detail:
        "Het UWV beoordeelt de arbeidsmarkttoets, het loon en de arbeidsvoorwaarden en adviseert de IND, die één beslissing over verblijf en werk neemt.",
    },
    {
      title: "Afhalen van de MVV en binnenkomst",
      actor: "Employee",
      detail:
        "Als een MVV vereist is, haalt de werknemer die binnen 3 maanden na de goedkeuring af bij de ambassade en reist hij naar Nederland.",
    },
    {
      title: "Verblijfskaart en aanvullend document",
      actor: "Employee",
      detail:
        "De werknemer haalt de verblijfskaart af aan een IND-loket en ontvangt het aanvullend document waarin de werkgever is vermeld. Inschrijving bij de gemeente (BRP) en een tbc-test kunnen afhankelijk van de nationaliteit vereist zijn.",
    },
  ],
  employerDocs: [
    { label: "GVVA-aanvraagformulier, ondertekend door de werkgever" },
    { label: "Ondertekende arbeidsovereenkomst met een loon dat ten minste het wettelijk minimum bedraagt en marktconform is" },
    { label: "Bewijs van registratie van de vacature bij het UWV en van de wervingsinspanningen" },
    { label: "Uittreksel van de Kamer van Koophandel (KVK)" },
    { label: "Antecedentenverklaring en verklaring van de werkgever waar gevraagd" },
  ],
  employeeDocs: [
    { label: "Geldig paspoort, kopie van alle pagina's met stempels of aantekeningen" },
    { label: "Antecedentenverklaring, ondertekend door de werknemer" },
    { label: "Diploma's of bewijs van kwalificaties waar de functie die vereist" },
    { label: "Bewijs van ziektekostenverzekering na aankomst" },
    { label: "Pasfoto die aan de Nederlandse eisen voldoet" },
    { label: "Gelegaliseerde en vertaalde documenten van de burgerlijke stand voor meereizende gezinsleden" },
  ],
  alternativeRoutes: [
    { name: "Kennismigrant", summary: "Snelle route via een erkend referent met een loon boven de jaarlijkse drempel. Geen arbeidsmarkttoets. Geen GVVA." },
    { name: "Europese blauwe kaart", summary: "Hogere loondrempel, universitair diploma, voordelen voor mobiliteit binnen de EU." },
    { name: "Overplaatsing binnen een onderneming", summary: "Voor leidinggevenden, specialisten en stagiairs die binnen een groep worden overgeplaatst." },
  ],
  watchOuts: [
    "De vergoeding moet betaald zijn voordat de beslistermijn begint te lopen. Bij een onbetaalde vergoeding zijn de 90 dagen niet begonnen.",
    "De GVVA is werkgeverspecifiek. Een nieuwe werkgever moet een nieuwe vergunning aanvragen of een wijziging melden.",
    "Onderdanen van sommige landen moeten binnen 3 maanden na aankomst een tuberculosetest ondergaan.",
  ],
};
