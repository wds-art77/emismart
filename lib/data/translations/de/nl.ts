import type { CountryDetails } from "../types";

export const nl: CountryDetails = {
  authorities: [
    "Immigratie- en Naturalisatiedienst (IND): Entscheidung über Aufenthalt und Arbeit",
    "UWV (Uitvoeringsinstituut Werknemersverzekeringen): Stellungnahme zur Arbeitsmarktprüfung",
    "Niederländische Botschaft oder Konsulat: Ausstellung des Einreisevisums MVV, soweit erforderlich",
  ],
  legalBasis: [
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Wet arbeid vreemdelingen (Wav) und Besluit uitvoering Wav",
    "Vreemdelingenwet 2000 und Vreemdelingenbesluit 2000",
  ],
  steps: [
    {
      title: "Prüfen, ob eine gesonderte Regelung gilt",
      actor: "Employer",
      detail:
        "Hochqualifizierte Migranten (kennismigranten), Inhaber einer Blauen Karte EU, unternehmensintern transferierte Arbeitnehmer und Forscher folgen eigenen Wegen und benötigen keine GVVA.",
    },
    {
      title: "Stelle beim UWV melden",
      actor: "Employer",
      detail:
        "Die Stelle sollte dem UWV gemeldet werden und vor der Antragstellung mindestens 5 Wochen dem EWR-Arbeitsmarkt offenstehen, mit Nachweisen über die Rekrutierungsbemühungen.",
    },
    {
      title: "GVVA-Antrag einreichen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber reicht den Antrag und die Unterlagen des Arbeitnehmers beim IND ein, online für anerkannte Referenten oder in Papierform, und zahlt die Gebühr.",
    },
    {
      title: "IND holt Stellungnahme des UWV ein",
      actor: "Authority",
      detail:
        "Das UWV prüft die Arbeitsmarktprüfung, die Löhne und die Arbeitsbedingungen und berät den IND, der eine einheitliche Entscheidung über Aufenthalt und Arbeit erlässt.",
    },
    {
      title: "Abholung des MVV und Einreise",
      actor: "Employee",
      detail:
        "Ist ein MVV erforderlich, holt der Arbeitnehmer es innerhalb von 3 Monaten nach der Genehmigung bei der Botschaft ab und reist in die Niederlande.",
    },
    {
      title: "Aufenthaltskarte und Zusatzdokument",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer holt die Aufenthaltskarte an einem IND-Schalter ab und erhält das Zusatzdokument, das den Arbeitgeber nennt. Je nach Staatsangehörigkeit können die Anmeldung bei der Gemeinde (BRP) und ein Tuberkulosetest erforderlich sein.",
    },
  ],
  employerDocs: [
    { label: "Vom Arbeitgeber unterzeichnetes GVVA-Antragsformular" },
    { label: "Unterzeichneter Arbeitsvertrag mit einem Gehalt mindestens in Höhe des gesetzlichen Mindestlohns und marktüblich" },
    { label: "Nachweis der Stellenmeldung beim UWV und der Rekrutierungsbemühungen" },
    { label: "Handelsregisterauszug der Handelskammer (KVK)" },
    { label: "Führungszeugnis und Erklärung des Arbeitgebers, soweit verlangt" },
  ],
  employeeDocs: [
    { label: "Gültiger Reisepass, Kopie aller Seiten mit Stempeln oder Eintragungen" },
    { label: "Vom Arbeitnehmer unterzeichnete Erklärung zum Vorleben (antecedentenverklaring)" },
    { label: "Diplome oder Qualifikationsnachweise, soweit die Stelle sie erfordert" },
    { label: "Nachweis einer Krankenversicherung nach der Ankunft" },
    { label: "Passfoto nach niederländischen Anforderungen" },
    { label: "Legalisierte und übersetzte Personenstandsurkunden für begleitende Familienangehörige" },
  ],
  alternativeRoutes: [
    { name: "Hochqualifizierter Migrant (kennismigrant)", summary: "Schneller Weg über einen anerkannten Referenten mit einem Gehalt über der jährlichen Schwelle. Keine Arbeitsmarktprüfung. Keine GVVA." },
    { name: "Blaue Karte EU", summary: "Höhere Gehaltsschwelle, Hochschulabschluss, Vorteile bei der Mobilität innerhalb der EU." },
    { name: "Unternehmensinterner Transfer", summary: "Für Führungskräfte, Spezialisten und Trainees, die innerhalb eines Konzerns versetzt werden." },
  ],
  watchOuts: [
    "Die Gebühren müssen gezahlt sein, bevor die Entscheidungsfrist beginnt. Bei nicht gezahlten Gebühren haben die 90 Tage nicht begonnen.",
    "Die GVVA ist arbeitgeberspezifisch. Ein neuer Arbeitgeber muss eine neue Erlaubnis beantragen oder eine Änderungsmeldung einreichen.",
    "Staatsangehörige bestimmter Länder müssen innerhalb von 3 Monaten nach der Ankunft einen Tuberkulosetest machen.",
  ],
};
