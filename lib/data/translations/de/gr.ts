import type { CountryDetails } from "../types";

export const gr: CountryDetails = {
  authorities: [
    "Direktion für Ausländer und Migration der zuständigen Dezentralen Verwaltung (Αποκεντρωμένη Διοίκηση): Genehmigung der Einladung des Arbeitgebers",
    "Ministerium für Migration und Asyl (Υπουργείο Μετανάστευσης και Ασύλου): elektronische Plattform und Aufenthaltserlaubnisse",
    "Griechische Botschaft oder griechisches Konsulat (Außenministerium): nationales Visum zur Beschäftigung",
    "Ministerium für Arbeit und soziale Sicherheit, mit dem Wirtschafts- und Sozialrat und der öffentlichen Arbeitsverwaltung (DYPA): Stellungnahme zur jährlichen Höchstzahl der Stellen",
    "e-EFKA: Anmeldung zur Sozial- und Krankenversicherung",
  ],
  legalBasis: [
    "Gesetz 5038/2023, Migrationskodex (Κώδικας Μετανάστευσης), insbesondere Artikel 13, 26, 27 und 61, in der geänderten Fassung, unter anderem durch Gesetz 5275/2026",
    "Gemeinsamer Ministerialbeschluss 7/95931/2024 (Regierungsanzeiger B 1807) über die Nachweisdokumente für Visa und Aufenthaltserlaubnisse",
    "Rundschreiben des Ministeriums für Migration und Asyl zur Anwendung des Gesetzes 5038/2023 und zur elektronischen Einreichung von Arbeitgeberanträgen",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Verfügbare Stellen und Vertragsbedingungen prüfen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber vergewissert sich, dass Fachrichtung und Region vom geltenden Akt über die Höchstzahl der Stellen erfasst sind, und bereitet einen Vollzeitarbeitsvertrag von mindestens 1 Jahr mit einer Vergütung vor, die mindestens dem Monatsverdienst einer ungelernten Arbeitskraft entspricht.",
    },
    {
      title: "Antrag auf Beschäftigungsgenehmigung (metaklisi) stellen",
      actor: "Employer",
      detail:
        "Über die elektronischen Dienste des Ministeriums reicht der Arbeitgeber den Antrag mit Angabe der Zahl der Stellen, der Daten und Staatsangehörigkeit des Arbeitnehmers, der Fachrichtung und des Beschäftigungszeitraums ein, lädt den Vertrag, die Passkopie und die Steuerunterlagen hoch und zahlt die Gebühr je Arbeitnehmer.",
    },
    {
      title: "Genehmigung durch die Dezentrale Verwaltung",
      actor: "Authority",
      detail:
        "Die Direktion für Ausländer und Migration prüft, ob die Akte vollständig ist, der Arbeitgeber die Einkommensschwellen erfüllt und die Stellen nicht ausgeschöpft sind, und erlässt dann den Genehmigungsakt, der zusammen mit dem unterzeichneten Vertrag per E-Mail an das zuständige griechische Konsulat übermittelt wird.",
    },
    {
      title: "Nationales Visum beim Konsulat",
      actor: "Employee",
      detail:
        "Das Konsulat lädt den Arbeitnehmer ein, der persönlich erscheint, um den Arbeitsvertrag zu unterzeichnen, und das nationale Visum zur Beschäftigung erhält, vorbehaltlich der allgemeinen Visumregeln und einer Prüfung des Führungszeugnisses.",
    },
    {
      title: "Online-Antrag auf die Aufenthaltserlaubnis E.4",
      actor: "Employee",
      detail:
        "Nach der Einreise und vor Ablauf des Visums stellt der Arbeitnehmer den Antrag auf der Plattform des Ministeriums mit Pass- und Visumkopie, Vertrag, Einstellungsmeldung, Nachweis des Antrags auf eine vollständige Krankenversicherung und einem Lichtbild und zahlt die Gebühr für die Erlaubnis. Eine Einreichungsbescheinigung wird ausgestellt.",
    },
    {
      title: "Biometrie, Entscheidung und Karte",
      actor: "Authority",
      detail:
        "Die Behörde prüft den Antrag, nimmt Fingerabdrücke ab und stellt die elektronische Aufenthaltserlaubnis oder eine begründete Ablehnung aus, die innerhalb von 2 Monaten mit einem Verwaltungsrechtsbehelf angefochten werden kann.",
    },
  ],
  employerDocs: [
    { label: "Elektronischer Antrag auf Beschäftigungsgenehmigung mit TAXISnet-Zugangsdaten oder über einen bevollmächtigten Anwalt" },
    { label: "Arbeitsvertrag von mindestens 1 Jahr, Vollzeit, mit einer Vergütung mindestens in Höhe des Monatsverdienstes einer ungelernten Arbeitskraft" },
    { label: "Kopie der Passseiten des Arbeitnehmers mit Identitätsangaben und Lichtbild" },
    { label: "Steuerliche Unbedenklichkeitsbescheinigung oder Steuererklärung, die die Fähigkeit des Arbeitgebers zur Zahlung des vertraglichen Gehalts belegt", note: "Die Einkommensschwellen je Arbeitnehmer unterscheiden sich für Privatpersonen, Einzelunternehmer und Gesellschaften; für den Agrarsektor gilt eine eigene Regel." },
    { label: "Nachweis, dass die Fachrichtung des Arbeitnehmers mit der Geschäftstätigkeit des Arbeitgebers zusammenhängt, soweit erforderlich" },
    { label: "Nachweis der Zahlung der Genehmigungsgebühr für jeden eingeladenen Arbeitnehmer" },
  ],
  employeeDocs: [
    { label: "Gültiger, von Griechenland anerkannter Reisepass und Kopie des nationalen Visums (Typ D)" },
    { label: "Beim Konsulat unterzeichneter Arbeitsvertrag" },
    { label: "Führungszeugnis für die Visumphase, wie vom Außenministerium festgelegt" },
    { label: "Einstellungsmeldung des Arbeitgebers (αναγγελία πρόσληψης) im System ERGANI" },
    { label: "Bescheinigung, dass ein Antrag auf vollständige Krankenversicherung beim zuständigen Versicherungsträger gestellt wurde" },
    { label: "Aktuelles Farblichtbild in gedruckter und digitaler Form nach Passvorgaben" },
    { label: "Nachweis der Zahlung der Gebühr für die Aufenthaltserlaubnis und der Gebühr für den Kartendruck" },
    { label: "Mobiltelefonnummer und E-Mail-Adresse für die elektronische Plattform" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU (Typ E.1)", summary: "Hochqualifizierte Beschäftigung mit einem Vertrag von mindestens 6 Monaten und einem Gehalt über der Schwelle; die Arbeitgebergenehmigung nach Artikel 27 wird online beantragt, und anerkannte Arbeitgeber profitieren von einer Entscheidung innerhalb von 30 Tagen." },
    { name: "Konzerninterner Transfer (Typ E.2)", summary: "Führungskräfte, Spezialisten und Trainees, die innerhalb eines Konzerns versetzt werden, mit Genehmigung der Entsendung durch das Ministerium." },
    { name: "Saisonarbeit (Typ E.5 und E.6)", summary: "Arbeitgebereinladung für Saisonarbeit in Landwirtschaft oder Tourismus für bis zu 9 Monate innerhalb von 12 Monaten, unter demselben Quotenakt." },
    { name: "Erlaubnis für digitale Nomaden", summary: "Aufenthalt für Fernarbeitende, die bei Unternehmen außerhalb Griechenlands beschäftigt sind, mit im Migrationskodex festgelegten Einkommensbedingungen." },
  ],
  watchOuts: [
    "Die Genehmigung hängt davon ab, dass im geltenden Akt des Ministerrats Stellen für Fachrichtung und Region verfügbar sind. Sind die Stellen ausgeschöpft, wird der Antrag unabhängig von der Qualität der Akte nicht genehmigt.",
    "Die Einkommensschwellen des Arbeitgebers werden je eingeladenem Arbeitnehmer geprüft. Gesellschaften und Privatpersonen mit niedrigem erklärtem Einkommen werden abgelehnt, und die Gebühr wird nicht erstattet.",
    "Das Verfahren wurde 2026 nach Änderungen des Migrationskodex als in Überarbeitung gekennzeichnet. Prüfen Sie vor der Antragstellung die aktuellen Formulare und Dokumente auf der Plattform des Ministeriums.",
  ],
};
