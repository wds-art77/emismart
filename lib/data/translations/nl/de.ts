import type { CountryDetails } from "../types";

export const de: CountryDetails = {
  authorities: [
    "Duitse ambassades en consulaten: nationaal visum (D-visum)",
    "Ausländerbehörde: verblijfsvergunning en voorafgaande goedkeuring in de versnelde procedure",
    "Bundesagentur für Arbeit (BA), ZAV: goedkeuring van de arbeidsvoorwaarden",
    "Erkenningsinstanties: gelijkwaardigheid van buitenlandse kwalificaties (Anerkennung)",
  ],
  legalBasis: [
    "Aufenthaltsgesetz (AufenthG), met name §§ 18, 18a, 18b, 18g, 19c, 20a en 81a",
    "Beschäftigungsverordnung (BeschV)",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233; Richtlijn (EU) 2021/1883 voor de Europese blauwe kaart",
  ],
  steps: [
    {
      title: "Erkenning van de kwalificatie",
      actor: "Employee",
      detail:
        "Beroepskwalificaties vereisen een erkenningsbeslissing; academische graden worden gecontroleerd in de anabin-databank of via ZAB. IT-specialisten met ervaring en werknemers met 2 jaar ervaring plus een door de staat erkend diploma kunnen alternatieve routes zonder volledige erkenning gebruiken.",
    },
    {
      title: "Werkgeversverklaring over de arbeidsverhouding",
      actor: "Employer",
      detail:
        "De werkgever vult de Erklärung zum Beschäftigungsverhältnis voor de BA in met loon, arbeidsuren en functieomschrijving.",
    },
    {
      title: "Optioneel: versnelde procedure",
      actor: "Employer",
      detail:
        "De werkgever sluit een overeenkomst met de Ausländerbehörde, die de erkenning en de goedkeuring van de BA coördineert en een voorafgaande goedkeuring (Vorabzustimmung) voor het visum afgeeft.",
    },
    {
      title: "Visumaanvraag bij de ambassade",
      actor: "Employee",
      detail:
        "De werknemer maakt een afspraak, dient het contract, de kwalificatiedocumenten en, indien beschikbaar, de voorafgaande goedkeuring in, en ontvangt een nationaal visum voor de binnenkomst.",
    },
    {
      title: "Registratie en verblijfsvergunning",
      actor: "Employee",
      detail:
        "Na aankomst registreert de werknemer zijn adres (Anmeldung) en vraagt hij bij de Ausländerbehörde de elektronische verblijfsvergunning aan, waarop de toegestane tewerkstelling is vermeld.",
    },
  ],
  employerDocs: [
    { label: "Erklärung zum Beschäftigungsverhältnis (BA-formulier), ingevuld en ondertekend" },
    { label: "Ondertekende arbeidsovereenkomst of bindend jobaanbod" },
    { label: "Functieomschrijving waaruit blijkt dat de functie de kwalificatie vereist" },
    { label: "Overeenkomst voor de versnelde procedure met de Ausländerbehörde en betaling van de bijbehorende vergoeding", note: "Alleen bij de versnelde procedure." },
    { label: "Bewijs van het loonniveau voor de drempels van de blauwe kaart of voor ervaren werknemers, waar relevant" },
  ],
  employeeDocs: [
    { label: "Geldig paspoort" },
    { label: "Erkenningsbesluit of anabin-/ZAB-verklaring van vergelijkbaarheid voor de kwalificatie" },
    { label: "Diploma's en certificaten met beëdigde vertalingen" },
    { label: "Curriculum vitae en bewijs van beroepservaring" },
    { label: "Bewijs van ziektekostenverzekering die de periode vanaf de binnenkomst dekt" },
    { label: "Biometrische foto's en ingevuld formulier voor het nationale visum (VIDEX)" },
    { label: "Beroepsvergunning wanneer het beroep gereglementeerd is", note: "Gezondheidszorgberoepen, onderwijs, recht en andere." },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart (§ 18g)", summary: "Universitair afgestudeerden met een loon boven de drempel van de blauwe kaart, verlaagde drempel voor knelpuntberoepen en pas afgestudeerden. Vestiging na 21 tot 27 maanden." },
    { name: "Kansenkaart (Chancenkarte, § 20a)", summary: "Op punten gebaseerde vergunning om tot 1 jaar naar Duitsland te komen om werk te zoeken." },
    { name: "IT-specialisten (§ 19c (2) met § 6 BeschV)", summary: "Op ervaring gebaseerde route voor IT-professionals zonder formeel diploma." },
    { name: "Ervaren professionals (§ 6 BeschV)", summary: "2 jaar ervaring plus een door de staat erkende kwalificatie, met een loonondergrens en zonder Duitse erkenning." },
  ],
  watchOuts: [
    "De erkenning van de kwalificatie is de belangrijkste oorzaak van vertraging. Start haar indien mogelijk voordat het jobaanbod wordt ondertekend.",
    "De beschikbaarheid van afspraken bij de ambassade verschilt sterk per land. De versnelde procedure garandeert een afspraak binnen 3 weken.",
    "Gereglementeerde beroepen vereisen de beroepsvergunning voordat de verblijfsvergunning kan worden verleend.",
  ],
};
