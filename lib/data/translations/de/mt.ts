import type { CountryDetails } from "../types";

export const mt: CountryDetails = {
  authorities: [
    "Identità, Expatriates Unit: nimmt den Antrag entgegen, stellt die kombinierte Erlaubnis und die Aufenthaltskarte aus",
    "Jobsplus: Arbeitsmarktprüfung, Declaration of Suitability, Beschäftigungslizenzen für kurzfristige Arbeit",
    "Malta Qualifications Recognition Information Centre (MQRIC): Anerkennung von Qualifikationen",
    "Maltesische Botschaft oder Konsulat: Einreisevisum auf Grundlage des Approval-in-Principle-Schreibens",
    "Immigration Appeals Board: Rechtsbehelfe gegen die Ablehnung einer kombinierten Erlaubnis",
  ],
  legalBasis: [
    "Immigration Act (Kapitel 217 der Gesetze Maltas)",
    "Subsidiary Legislation 217.17, Single Application Procedure for a Single Permit as regards Residence and Work and a Common Set of Rights for those Third-Country Workers Legally Residing in Malta Regulations (Verordnung über das einheitliche Antragsverfahren für eine kombinierte Erlaubnis zum Aufenthalt und zur Arbeit und ein gemeinsames Bündel von Rechten für rechtmäßig in Malta ansässige Drittstaatsarbeitnehmer)",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Employment and Industrial Relations Act (Kapitel 452), der den geschützten Status von Drittstaatsarbeitnehmern festlegt",
  ],
  steps: [
    {
      title: "Registrierung bei Jobsplus und Portalzugang beantragen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber muss bei Jobsplus registriert sein und mit einer persönlichen e-ID Zugang zum Single Permit Portal (singlepermit.gov.mt) beantragen. Identità prüft die Organisation anhand der Daten von Jobsplus, des Malta Business Registry und der Steuerbehörden, bevor der Zugang gewährt wird.",
    },
    {
      title: "Stelle ausschreiben",
      actor: "Employer",
      detail:
        "Die Stellenanzeige ist innerhalb der 2 Monate vor der Antragstellung für mindestens 3 Wochen bei Jobsplus und auf EURES zu schalten; die Nachweise sind aufzubewahren. Anzeigen, die den Jobsplus-Standards nicht entsprechen, führen zur automatischen Ablehnung.",
    },
    {
      title: "Online-Antrag einreichen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber füllt den Antrag aus und lädt die Unterlagen auf dem Portal hoch, einschließlich der Jobsplus Declaration of Suitability. Der Arbeitnehmer erhält einen Link, um die Daten zu bestätigen und zu validieren. Die endgültige Einreichung ist erst möglich, wenn die Gebühr online vom Arbeitgeber oder vom Arbeitnehmer bezahlt wurde.",
    },
    {
      title: "Prüfung durch die Beteiligten und Approval in Principle",
      actor: "Authority",
      detail:
        "Identità leitet die Akte an Jobsplus zur Arbeitsmarktbeurteilung und an die Polizei zur Sicherheitsprüfung weiter. Bei Genehmigung wird ein Approval-in-Principle-Schreiben ausgestellt. Es erlaubt dem Arbeitnehmer nicht, die Arbeit aufzunehmen.",
    },
    {
      title: "Visum und Einreise",
      actor: "Employee",
      detail:
        "Visumpflichtige Arbeitnehmer legen das Approval-in-Principle-Schreiben bei einer maltesischen Botschaft oder einem Konsulat vor; für Besatzungsmitglieder muss das Schreiben innerhalb von 180 Tagen verwendet werden. Antragsteller im Inland müssen am Tag der Antragstellung ein noch mindestens 6 Wochen gültiges Visum oder eine entsprechende Erlaubnis besitzen.",
    },
    {
      title: "Biometrie und Kartenausgabe",
      actor: "Employee",
      detail:
        "Nach der Ankunft bucht der Arbeitnehmer einen Biometrietermin bei Identità und legt die Originaldokumente vor. Die Beschäftigung darf erst beginnen, wenn die Erlaubnis ausgestellt ist; eine Beschäftigung davor ist rechtswidrig.",
    },
    {
      title: "Beschäftigung bei Jobsplus anmelden",
      actor: "Employer",
      detail:
        "Sobald die kombinierte Erlaubnis vorliegt, reicht der Arbeitgeber das Anmeldeformular (engagement form) über das Jobsplus-Portal ein. Anmelde- und Beendigungsformulare sind innerhalb von 4 Arbeitstagen einzureichen.",
    },
  ],
  employerDocs: [
    { label: "Antrag auf kombinierte Erlaubnis, vom geprüften Arbeitgeber über das Identità-Portal eingereicht" },
    { label: "Jobsplus Declaration of Suitability, die die Eignung des Arbeitnehmers für die Position bestätigt" },
    { label: "Nachweis, dass die Stelle für den vorgeschriebenen Zeitraum bei Jobsplus und auf EURES ausgeschrieben war" },
    { label: "Unterzeichneter Arbeitsvertrag oder Stellenangebot mit Angaben zu Vergütung und Position", note: "Jobsplus kann Verträge, Lizenzen, Nachweise über die Geschäftsniederlassung und Compliance-Unterlagen verlangen" },
    { label: "Nachweis, dass der Arbeitgeber die Jobsplus-Bedingungen erfüllt, etwa die Beschäftigung mindestens eines maltesischen, EU- oder Schweizer Staatsangehörigen", note: "Wird von Jobsplus anhand der eigenen Register geprüft; Anmeldeformulare aktuell halten" },
    { label: "Notariell beglaubigte Vollmacht, wenn ein Vertreter im Namen eines Arbeitgebers im Ausland einreicht" },
  ],
  employeeDocs: [
    { label: "Beglaubigte Kopie eines gültigen Reisepasses" },
    { label: "Passfoto" },
    { label: "Lebenslauf" },
    { label: "Von MQRIC anerkannte Qualifikationen oder eine Quittung über die beantragte Anerkennung", note: "Ohne formale Qualifikationen werden mindestens 3 Jahre einschlägige Erfahrung erwartet" },
    { label: "Registrierung bei der zuständigen Berufskammer für reglementierte Berufe" },
    { label: "Nachweis einer Unterkunft in Malta, etwa ein Mietvertrag", note: "In den Identità-Checklisten aufgeführt; die aktuelle Checkliste für die Kategorie prüfen" },
    { label: "Nachweis einer Gesundheitsuntersuchung oder Versicherung gemäß der Identità-Checkliste" },
    { label: "Visum oder Aufenthaltsdokument, das noch mindestens 6 Wochen gültig ist, für Antragsteller, die sich bereits in Malta aufhalten" },
  ],
  alternativeRoutes: [
    { name: "Key Employee Initiative (KEI)", summary: "Beschleunigte kombinierte Erlaubnis für Führungs- oder hochtechnische Positionen mit einem Bruttogehalt über einer von Identità festgelegten Schwelle. Bearbeitung in etwa 5 Arbeitstagen nach Vollständigkeit; 1-Jahres-Erlaubnis, verlängerbar bis zu 3 Jahre; eine 2-wöchige Stellenanzeige genügt." },
    { name: "Specialist Employee Initiative (SEI)", summary: "Schnellere kombinierte Erlaubnis für Fachkräfte mit Qualifikationen auf MQF-Niveau 6 oder einer MQF-Zertifizierung plus 3 Jahren Erfahrung, oberhalb einer niedrigeren Gehaltsschwelle als bei der KEI." },
    { name: "Blaue Karte EU", summary: "Für hochqualifizierte Arbeitnehmer mit einem Hochschulabschluss und einem Gehalt über der Blue-Card-Schwelle; wird von Identità nach gesonderten Vorschriften bearbeitet." },
    { name: "Beschäftigungslizenz für Arbeit unter 6 Monaten", summary: "Jobsplus stellt eine Beschäftigungslizenz aus, danach beantragt der Arbeitnehmer bei Identità eine Aufenthaltserlaubnis. Wird für Saisonarbeit und andere kurze Beschäftigungen genutzt." },
  ],
  watchOuts: [
    "Die Stellenanzeige muss den Jobsplus-Standards entsprechen (Jobsplus und EURES, mindestens 3 Wochen, innerhalb der 2 Monate vor der Einreichung). Nicht konforme Anzeigen führen zur automatischen Ablehnung, und die Gebühr wird nicht erstattet.",
    "Jobsplus wendet je Arbeitgeber ein Workforce Application Limit an und lehnt Anträge von Unternehmen ab, die in den vorangegangenen 12 Monaten in ähnlichen Funktionen Entlassungen vorgenommen haben. Ist das Limit erreicht, werden bis zum folgenden Monat keine weiteren Anträge angenommen.",
    "Verlängerungen sowie Änderungen des Arbeitgebers, der Adresse oder des Reisepasses müssen vor Ablauf des aktuellen Dokuments beantragt werden; verspätete Anträge werden abgelehnt. Ein Rechtsbehelf gegen eine Ablehnung muss innerhalb von 3 Arbeitstagen beim Immigration Appeals Board eingehen.",
  ],
};
