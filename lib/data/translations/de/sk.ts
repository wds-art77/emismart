import type { CountryDetails } from "../types";

export const sk: CountryDetails = {
  authorities: [
    "Fremdenpolizeidienststelle (Oddelenie cudzineckej polície Policajného zboru) des Innenministeriums: Entgegennahme und Entscheidung über den befristeten Aufenthalt, Aufenthaltskarte",
    "Arbeitsamt (Úrad práce, sociálnych vecí a rodiny) und sein Zentralamt: Stellenmeldungen, Bestätigung über die Möglichkeit der Stellenbesetzung, Arbeitserlaubnisse",
    "Slowakische Botschaft oder Konsulat: Entgegennahme im Ausland gestellter Anträge und nationales Visum, soweit erforderlich",
    "Ministerium für Arbeit, Soziales und Familie: Grundsatzfragen und die Liste der Mangelberufe",
  ],
  legalBasis: [
    "Zákon č. 404/2011 Z. z. o pobyte cudzincov (Gesetz über den Aufenthalt von Ausländern), § 23 und § 33",
    "Zákon č. 5/2004 Z. z. o službách zamestnanosti (Gesetz über Beschäftigungsdienste), § 21b und § 22",
    "Zákon č. 145/1995 Z. z. o správnych poplatkoch (Gesetz über Verwaltungsgebühren)",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Stelle beim Arbeitsamt melden",
      actor: "Employer",
      detail:
        "Der Arbeitgeber meldet die Stelle über die elektronischen Formulare des Arbeitsamtes mindestens 20 Arbeitstage vor dem Antrag des Arbeitnehmers. Für Mangelberufe kann die Meldung ohne Wartefrist erfolgen.",
    },
    {
      title: "Vertrag oder schriftliche Beschäftigungszusage unterzeichnen",
      actor: "Both",
      detail:
        "Wird kein geeigneter Arbeitsuchender vermittelt, unterzeichnet der Arbeitgeber einen Arbeitsvertrag oder eine schriftliche Beschäftigungszusage auf dem amtlichen Formular; es muss sich um ein Arbeitsverhältnis (pracovný pomer) handeln, mit Gehaltsbestätigung für die Prüfung der Mittel.",
    },
    {
      title: "Aufenthaltsantrag bei der Botschaft einreichen",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer reicht das Antragsformular in slowakischer Sprache persönlich bei der slowakischen Botschaft ein, oder bei der Fremdenpolizei, wenn er sich rechtmäßig in der Slowakei aufhält, mit Reisepass, Fotos, Vertrag oder Zusage, Strafregisterauszügen, Unterkunftsnachweis und Nachweis der finanziellen Mittel, alle mit Apostille und ins Slowakische übersetzt und nicht älter als 90 Tage, und zahlt die Verwaltungsgebühr.",
    },
    {
      title: "Fremdenpolizei holt die Stellenbestätigung ein",
      actor: "Authority",
      detail:
        "Die Fremdenpolizei fordert die Bestätigung über die Möglichkeit der Stellenbesetzung beim Arbeitsamt an, das sie innerhalb von 5 Arbeitstagen über das Informationssystem zurücksendet, und entscheidet innerhalb der gesetzlichen Frist von 60 Tagen (30 Tage für Mangelberufe).",
    },
    {
      title: "Einreise und Formalitäten nach der Ankunft",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer reist innerhalb von 180 Tagen nach der Erteilung ein, meldet die Ankunft innerhalb von 3 Arbeitstagen bei der Fremdenpolizei und holt das Aufenthaltsdokument ab.",
    },
    {
      title: "Ärztliches Gutachten und Krankenversicherung",
      actor: "Employee",
      detail:
        "Innerhalb von 30 Tagen nach Abholung des Aufenthaltsdokuments legt der Arbeitnehmer ein höchstens 30 Tage altes ärztliches Gutachten eines Facharztes für Infektionskrankheiten vor und schließt innerhalb von 3 Arbeitstagen nach der Abholung eine Krankenversicherung ab.",
    },
  ],
  employerDocs: [
    { label: "Stellenmeldung beim Arbeitsamt, eingereicht mindestens 20 Arbeitstage vor dem Antrag" },
    { label: "Arbeitsvertrag oder schriftliche Beschäftigungszusage auf dem amtlichen Formular, als Arbeitsverhältnis" },
    { label: "Bestätigung des vereinbarten Gehalts, vom Arbeitnehmer als Nachweis der finanziellen Mittel verwendet" },
    { label: "Für reglementierte Berufe die anerkannte Qualifikation oder der Anerkennungsbescheid" },
    { label: "Bestätigung des Arbeitgebers, dass keine Arbeitserlaubnis oder Stellenbestätigung erforderlich ist, wenn eine Ausnahme gilt" },
    { label: "Mitteilung an die Fremdenpolizei innerhalb von 3 Arbeitstagen, wenn die Beschäftigung endet" },
  ],
  employeeDocs: [
    { label: "Antragsformular für den befristeten Aufenthalt, auf Slowakisch ausgefüllt und unterzeichnet" },
    { label: "Gültiger Reisepass und zwei Farbfotos" },
    { label: "Arbeitsvertrag oder schriftliche Beschäftigungszusage" },
    { label: "Strafregisterauszug des Staatsangehörigkeitslandes und jedes Landes, in dem sich der Arbeitnehmer in den letzten 3 Jahren länger als 90 Tage innerhalb von 6 aufeinanderfolgenden Monaten aufgehalten hat, mit Apostille und übersetzt, nicht älter als 90 Tage" },
    { label: "Unterkunftsnachweis für den Aufenthalt, nicht älter als 90 Tage" },
    { label: "Nachweis der finanziellen Mittel: Gehaltsbestätigung des Arbeitgebers oder Kontoauszug" },
    { label: "Ärztliches Gutachten eines Facharztes für Infektionskrankheiten innerhalb von 30 Tagen nach Abholung der Karte" },
    { label: "Nachweis einer Krankenversicherung innerhalb von 3 Arbeitstagen nach Abholung der Karte" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Für hochqualifizierte Beschäftigung mit einem Vertrag von mindestens einem Jahr und einem Gehalt von mindestens dem 1,5-Fachen des vom Statistischen Amt veröffentlichten regionalen Durchschnittslohns; wird für 3 Jahre oder die Beschäftigungsdauer plus 90 Tage ausgestellt." },
    { name: "Beschleunigtes Verfahren für Mangelberufe", summary: "Stellenbestätigung ohne Arbeitsmarktprüfung und eine Entscheidungsfrist von 30 Tagen für Berufe auf der vierteljährlichen Mangelliste, vorbehaltlich einer Obergrenze für den Anteil der Drittstaatsangehörigen beim Arbeitgeber." },
    { name: "Arbeitserlaubnis und befristeter Aufenthalt", summary: "Arbeitserlaubnis des Arbeitsamtes mit anschließendem befristetem Aufenthalt, genutzt für Inhaber einer Familienzusammenführung und langfristig Aufenthaltsberechtigte der EU in den ersten 12 Monaten." },
    { name: "Unternehmensinterner Transfer", summary: "Befristeter Aufenthalt zum Zweck der Beschäftigung für Führungskräfte und Spezialisten (bis zu 3 Jahre) oder Trainees (bis zu 1 Jahr), die innerhalb eines Konzerns versetzt werden." },
  ],
  watchOuts: [
    "Den Zeitplan bestimmt die Stellenmeldung. Hat der Arbeitgeber die Stelle weniger als 20 Arbeitstage vor dem Antrag gemeldet, kann das Arbeitsamt die Bestätigung nicht ausstellen, und die Fremdenpolizei muss ablehnen.",
    "Strafregister- und Unterkunftsdokumente müssen mit Apostille versehen oder superlegalisiert, ins Slowakische übersetzt und bei Einreichung nicht älter als 90 Tage sein. Auszüge müssen das gesamte Gebiet des ausstellenden Staates abdecken.",
    "Die Einreichung gewährt kein Aufenthaltsrecht. Bis zur Entscheidung darf der Arbeitnehmer nur mit einem gültigen Visum oder im Rahmen eines visumfreien Aufenthalts bleiben; er muss innerhalb von 180 Tagen nach der Erteilung einreisen und das ärztliche Gutachten innerhalb von 30 Tagen nach Abholung der Karte vorlegen.",
  ],
};
