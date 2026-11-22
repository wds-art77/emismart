import type { CountryDetails } from "../types";

export const be: CountryDetails = {
  authorities: [
    "Flandern: Departement Werk en Sociale Economie, über die Plattform Working in Belgium",
    "Wallonien: Service public de Wallonie, Emploi",
    "Region Brüssel-Hauptstadt: Bruxelles Economie et Emploi",
    "Deutschsprachige Gemeinschaft: Ministerium der Deutschsprachigen Gemeinschaft",
    "Föderal: Ausländeramt (Office des étrangers / Dienst Vreemdelingenzaken) für die Aufenthaltsentscheidung",
  ],
  legalBasis: [
    "Richtlinie 2011/98/EU (Richtlinie über die kombinierte Erlaubnis), neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Zusammenarbeitsabkommen vom 2. Februar 2018 zwischen dem Föderalstaat, den Regionen und den Gemeinschaften",
    "Gesetz vom 15. Dezember 1980 über die Einreise ins Staatsgebiet, den Aufenthalt, die Niederlassung und das Entfernen von Ausländern",
    "Regionale Dekrete und Erlasse über die Beschäftigung ausländischer Arbeitnehmer",
  ],
  steps: [
    {
      title: "Zuständige Region bestimmen",
      actor: "Employer",
      detail:
        "Die Region, in der der Arbeitnehmer hauptsächlich arbeiten wird, bestimmt, welche Behörde die Akte erhält. Flandern, Wallonien, Brüssel und die Deutschsprachige Gemeinschaft betreiben jeweils ihre eigene Plattform und ihre eigenen Kategorienlisten.",
    },
    {
      title: "Gemeinsame Akte zusammenstellen",
      actor: "Both",
      detail:
        "Der Arbeitgeber sammelt seine eigenen Formulare und die persönlichen Dokumente des Arbeitnehmers. Alles wird zusammen in einer einzigen elektronischen Einreichung übermittelt.",
    },
    {
      title: "Bei der Region einreichen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber oder der bevollmächtigte Vertreter reicht den Antrag online ein. Die Region prüft die Zulässigkeit und bestätigt, dass die Akte vollständig ist.",
    },
    {
      title: "Parallele Prüfung",
      actor: "Authority",
      detail:
        "Die Region prüft den Arbeitsteil. Das Ausländeramt prüft den Aufenthaltsteil (Pass, Strafregister, ärztliches Attest, öffentliche Ordnung). Beide müssen zustimmen.",
    },
    {
      title: "Entscheidung und Anlage 46",
      actor: "Authority",
      detail:
        "Bei einer positiven Entscheidung erhält der Arbeitnehmer die Anlage 46. Befindet er sich im Ausland, erhält er damit ein Visum D bei der belgischen Botschaft oder dem Konsulat.",
    },
    {
      title: "Ankunft und Anmeldung",
      actor: "Employee",
      detail:
        "Innerhalb von 8 Tagen nach der Ankunft meldet sich der Arbeitnehmer bei der Gemeinde (commune / gemeente) an, die die elektronische Karte der kombinierten Erlaubnis (Karte A) ausstellt.",
    },
  ],
  employerDocs: [
    { label: "Regionales Antragsformular, vom Arbeitgeber unterschrieben" },
    { label: "Unterschriebener Arbeitsvertrag, der dem belgischen Recht entspricht" },
    { label: "Nachweis der Unternehmensregistrierung (KBO/BCE-Nummer)" },
    { label: "Nachweis, dass das Gehalt die geltende regionale Schwelle erreicht", note: "Relevant für die Kategorien Hochqualifizierte und Führungskräfte." },
    { label: "Vollmacht, wenn ein Vertreter im Namen des Arbeitgebers einreicht" },
  ],
  employeeDocs: [
    { label: "Gültiger Pass, vollständige Kopie aller Seiten" },
    { label: "Ärztliches Attest eines von der belgischen Botschaft anerkannten Arztes", note: "Erforderlich, wenn sich der Arbeitnehmer im Ausland befindet." },
    { label: "Strafregisterauszug, legalisiert oder mit Apostille, mit beglaubigter Übersetzung", note: "Für Arbeitnehmer ab 18 Jahren." },
    { label: "Diplome oder Qualifikationsnachweise, legalisiert, mit Übersetzung", note: "Erforderlich für Hochqualifizierte, Forscher und ähnliche Kategorien." },
    { label: "Nachweis der Zahlung der föderalen Gebühr (redevance) an das Ausländeramt" },
    { label: "Passfotos nach ICAO-Standard" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Für Hochschulabsolventen mit einem Vertrag von mindestens 1 Jahr über der Gehaltsschwelle der Blauen Karte. Wird über denselben Kanal wie die kombinierte Erlaubnis eingereicht." },
    { name: "Unternehmensinterner Transfer (ICT)", summary: "Für Führungskräfte, Spezialisten und Trainees, die von einer Nicht-EU-Einheit desselben Konzerns entsandt werden." },
    { name: "Berufskarte", summary: "Für selbstständige Tätigkeit. Gesondertes regionales Verfahren, keine kombinierte Erlaubnis." },
  ],
  watchOuts: [
    "Jede Region wendet ihre eigenen Gehaltsschwellen und Mangelberufslisten an. Eine für Flandern vorbereitete Akte ist nicht automatisch für Brüssel gültig.",
    "Die 4-Monats-Frist beginnt erst, wenn die Region die Akte für zulässig erklärt. Unvollständige Akten lassen das Verfahren von neuem beginnen.",
    "Ein Arbeitgeberwechsel erfordert einen neuen Antrag auf eine kombinierte Erlaubnis durch den neuen Arbeitgeber.",
  ],
};
