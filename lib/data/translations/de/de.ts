import type { CountryDetails } from "../types";

export const de: CountryDetails = {
  authorities: [
    "Deutsche Botschaften und Konsulate: nationales Visum (Visum D)",
    "Ausländerbehörde: Aufenthaltserlaubnis und Vorabzustimmung im beschleunigten Fachkräfteverfahren",
    "Bundesagentur für Arbeit (BA), ZAV: Zustimmung zu den Beschäftigungsbedingungen",
    "Anerkennungsstellen: Gleichwertigkeit ausländischer Qualifikationen (Anerkennung)",
  ],
  legalBasis: [
    "Aufenthaltsgesetz (AufenthG), insbesondere §§ 18, 18a, 18b, 18g, 19c, 20a und 81a",
    "Beschäftigungsverordnung (BeschV)",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233; Richtlinie (EU) 2021/1883 für die Blaue Karte EU",
  ],
  steps: [
    {
      title: "Anerkennung der Qualifikation",
      actor: "Employee",
      detail:
        "Berufsqualifikationen benötigen einen Anerkennungsbescheid; akademische Abschlüsse werden in der Datenbank anabin oder über die ZAB geprüft. IT-Fachkräfte mit Berufserfahrung sowie Arbeitnehmer mit 2 Jahren Berufserfahrung und einem staatlich anerkannten Abschluss können alternative Wege ohne vollständige Anerkennung nutzen.",
    },
    {
      title: "Erklärung zum Beschäftigungsverhältnis durch den Arbeitgeber",
      actor: "Employer",
      detail:
        "Der Arbeitgeber füllt die Erklärung zum Beschäftigungsverhältnis für die BA mit Gehalt, Arbeitszeit und Stellenbeschreibung aus.",
    },
    {
      title: "Optional: beschleunigtes Fachkräfteverfahren",
      actor: "Employer",
      detail:
        "Der Arbeitgeber schließt eine Vereinbarung mit der Ausländerbehörde, die Anerkennung und BA-Zustimmung koordiniert und eine Vorabzustimmung für das Visum erteilt.",
    },
    {
      title: "Visumantrag bei der Botschaft",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer bucht einen Termin, reicht den Vertrag, die Qualifikationsnachweise und, soweit vorhanden, die Vorabzustimmung ein und erhält ein nationales Visum zur Einreise.",
    },
    {
      title: "Anmeldung und Aufenthaltserlaubnis",
      actor: "Employee",
      detail:
        "Nach der Ankunft meldet der Arbeitnehmer seine Adresse an (Anmeldung) und beantragt bei der Ausländerbehörde den elektronischen Aufenthaltstitel, der die erlaubte Beschäftigung ausweist.",
    },
  ],
  employerDocs: [
    { label: "Erklärung zum Beschäftigungsverhältnis (BA-Formular), ausgefüllt und unterzeichnet" },
    { label: "Unterzeichneter Arbeitsvertrag oder verbindliches Stellenangebot" },
    { label: "Stellenbeschreibung, aus der hervorgeht, dass die Stelle die Qualifikation erfordert" },
    { label: "Vereinbarung über das beschleunigte Fachkräfteverfahren mit der Ausländerbehörde und Zahlung der Gebühr", note: "Nur im beschleunigten Fachkräfteverfahren." },
    { label: "Nachweis der Gehaltshöhe für die Schwellen der Blauen Karte oder für ältere Fachkräfte, soweit relevant" },
  ],
  employeeDocs: [
    { label: "Gültiger Reisepass" },
    { label: "Anerkennungsbescheid oder anabin-/ZAB-Bescheinigung über die Vergleichbarkeit der Qualifikation" },
    { label: "Diplome und Zeugnisse mit beglaubigten Übersetzungen" },
    { label: "Lebenslauf und Nachweise der Berufserfahrung" },
    { label: "Nachweis einer Krankenversicherung ab dem Zeitpunkt der Einreise" },
    { label: "Biometrische Lichtbilder und ausgefülltes Antragsformular für das nationale Visum (VIDEX)" },
    { label: "Berufszulassung, wenn der Beruf reglementiert ist", note: "Gesundheitsberufe, Lehrberufe, Rechtsberufe und andere." },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU (§ 18g)", summary: "Hochschulabsolventen mit einem Gehalt über der Schwelle der Blauen Karte, ermäßigte Schwelle für Engpassberufe und Berufseinsteiger. Niederlassung nach 21 bis 27 Monaten." },
    { name: "Chancenkarte (§ 20a)", summary: "Punktebasierter Titel, um für bis zu 1 Jahr zur Arbeitssuche nach Deutschland zu kommen." },
    { name: "IT-Fachkräfte (§ 19c Abs. 2 mit § 6 BeschV)", summary: "Erfahrungsbasierter Weg für IT-Fachkräfte ohne formalen Abschluss." },
    { name: "Berufserfahrene Fachkräfte (§ 6 BeschV)", summary: "2 Jahre Berufserfahrung und ein staatlich anerkannter Abschluss, mit einer Gehaltsuntergrenze und ohne deutsche Anerkennung." },
  ],
  watchOuts: [
    "Die Anerkennung der Qualifikation ist die Hauptursache für Verzögerungen. Beginnen Sie damit nach Möglichkeit, bevor das Stellenangebot unterzeichnet wird.",
    "Die Verfügbarkeit von Botschaftsterminen unterscheidet sich je nach Land erheblich. Das beschleunigte Fachkräfteverfahren garantiert einen Termin innerhalb von 3 Wochen.",
    "Reglementierte Berufe erfordern die Berufszulassung, bevor die Aufenthaltserlaubnis erteilt werden kann.",
  ],
};
