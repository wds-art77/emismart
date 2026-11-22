import type { CountryDetails } from "../types";

export const ee: CountryDetails = {
  authorities: [
    "Polizei- und Grenzschutzbehörde (Politsei- ja Piirivalveamet, PPA): Entscheidung über die Aufenthaltserlaubnis und Ausstellung der Aufenthaltskarte",
    "Estnische Arbeitslosenversicherungskasse (Eesti Töötukassa): Genehmigung, die Stelle mit einem ausländischen Staatsangehörigen zu besetzen",
    "Estnische Botschaften und Konsulate: Entgegennahme der Anträge, Biometrie und Visa D",
    "Innenministerium: Einwanderungspolitik und die durch Regierungsverordnung festgelegte Jahresquote",
  ],
  legalBasis: [
    "Välismaalaste seadus (Ausländergesetz, in der englischen Übersetzung Foreign Nationals Act), insbesondere §§ 176 bis 181 zur Aufenthaltserlaubnis zur Beschäftigung und §§ 113 bis 115 zur Einwanderungsquote",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Verordnung der Regierung der Republik zur Festlegung der jährlichen Einwanderungsquote",
  ],
  steps: [
    {
      title: "Ausnahmen, Gehaltskriterium und Quote prüfen",
      actor: "Employer",
      detail:
        "Prüfen Sie, ob die Stelle in eine Kategorie fällt, die von der Töötukassa-Genehmigung, dem Gehaltskriterium oder der Einwanderungsquote befreit ist, und ob das angebotene Gehalt das zuletzt von Statistics Estonia veröffentlichte estnische Durchschnittsbruttogehalt erreicht.",
    },
    {
      title: "Töötukassa-Genehmigung einholen",
      actor: "Employer",
      detail:
        "Stellen Sie den Antrag bei der regionalen Töötukassa-Stelle für den eingetragenen Sitz des Unternehmens, per digital signierter E-Mail oder auf Papier. Die Kasse entscheidet innerhalb von sieben Arbeitstagen, und die Genehmigung gilt sechs Monate.",
    },
    {
      title: "Arbeitgebereinladung bei der PPA einreichen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber oder sein bevollmächtigter Vertreter sendet die unterschriebene Einladung zusammen mit der Töötukassa-Genehmigung per E-Mail oder Post an die PPA, bevor oder wenn der Arbeitnehmer den Antrag stellt.",
    },
    {
      title: "Antrag mit Biometrie einreichen",
      actor: "Employee",
      detail:
        "Vereinbaren Sie einen Termin und stellen Sie den Antrag persönlich bei einer estnischen Botschaft oder einem Konsulat oder, bei rechtmäßigem Aufenthalt in Estland, in einer PPA-Servicestelle. Fingerabdrücke werden abgenommen, sofern sie nicht in den letzten sechs Jahren abgegeben wurden. Zahlen Sie die staatliche Gebühr.",
    },
    {
      title: "Prüfung und Entscheidung",
      actor: "Authority",
      detail:
        "Die PPA prüft die Voraussetzungen, die Zuverlässigkeit des Arbeitgebers und die Quote, kann zusätzliche Nachweise anfordern und entscheidet innerhalb von 90 Tagen nach Annahme eines vollständigen Antrags. Die Aufenthaltskarte folgt innerhalb von 30 Tagen.",
    },
    {
      title: "Ankunft, Abholung der Karte und Anmeldung des Wohnsitzes",
      actor: "Employee",
      detail:
        "Holen Sie die Aufenthaltskarte bei der im Antrag genannten Vertretung oder Servicestelle ab. Melden Sie den Wohnsitz innerhalb eines Monats nach der Ankunft im Bevölkerungsregister an. Der Arbeitgeber muss Änderungen der Beschäftigungsbedingungen und das Ende des Vertrags melden.",
    },
  ],
  employerDocs: [
    { label: "Genehmigung der estnischen Arbeitslosenversicherungskasse, die Stelle mit einem ausländischen Staatsangehörigen zu besetzen", note: "Sofern die Stelle nicht nach § 181 des Ausländergesetzes befreit ist." },
    { label: "Arbeitgebereinladung, vom Arbeitgeber oder seinem bevollmächtigten Vertreter unterschrieben und an die PPA gesandt" },
    { label: "Arbeitsvertrag oder verbindliches Angebot mit einem Gehalt von mindestens dem estnischen Durchschnittsbruttogehalt" },
    { label: "Nachweis, dass der Arbeitnehmer die Qualifikations- und Kompetenzanforderungen der Stelle erfüllt" },
    { label: "Eintragung des Arbeitgebers im estnischen Handelsregister und Fehlen von Steuerrückständen" },
  ],
  employeeDocs: [
    { label: "Antragsformular für eine befristete Aufenthaltserlaubnis und das Formular zu nahen Verwandten und Familienangehörigen" },
    { label: "Gültiges Identitätsdokument (Pass)" },
    { label: "Ein digitales Farbfoto" },
    { label: "Dokumente über legales Einkommen in den sechs Monaten vor dem Antrag" },
    { label: "Strafregisterbescheinigung aus jedem Staat mit Aufenthalt von mindestens drei Monaten in den letzten drei Jahren, ausgestellt in den letzten sechs Monaten", note: "Erforderlich ab 14 Jahren." },
    { label: "Nachweis der Zahlung der staatlichen Gebühr" },
    { label: "Krankenversicherungsvertrag, soweit das Ausländergesetz ihn für den Inhaber der Erlaubnis verlangt" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Hochschulabschluss oder fünf Jahre Berufserfahrung, ein Vertrag von mindestens einem Jahr und ein Gehalt vom 1,5-Fachen des Durchschnittsgehalts (1,24-Fachen für gelistete Berufe). Die Töötukassa-Genehmigung ist in der Regel weiterhin erforderlich, mit Ausnahmen." },
    { name: "Spitzenfachkraft", summary: "Gehalt von mindestens dem 1,5-Fachen des estnischen Durchschnittsbruttogehalts; befreit von der Töötukassa-Genehmigung und von der Einwanderungsquote." },
    { name: "Start-up-Beschäftigter", summary: "Beschäftigung bei einem vom Expertenausschuss anerkannten Start-up; befreit vom Gehaltskriterium, der Töötukassa-Genehmigung und der Quote." },
    { name: "Registrierung kurzfristiger Beschäftigung", summary: "Der Arbeitgeber registriert Arbeit von bis zu 365 Tagen innerhalb von 455 Tagen bei der PPA; keine Aufenthaltserlaubnis, keine Quote und keine Töötukassa-Genehmigung, aber das Gehaltskriterium gilt." },
  ],
  watchOuts: [
    "Die Einwanderungsquote von 0,1 Prozent der Bevölkerung ist im Laufe des Jahres oft ausgeschöpft; Anträge außerhalb der befreiten Kategorien werden abgelehnt, sobald sie erreicht ist.",
    "Die Töötukassa-Genehmigung verfällt sechs Monate nach ihrer Erteilung und gilt für eine bestimmte Stelle; eine andere Stelle oder ein verspäteter Antrag bedeutet einen Neubeginn.",
    "Die Erlaubnis ist an den Arbeitgeber gebunden. Seit dem 22. Mai 2026 muss ein neuer Arbeitgeber den Beschäftigungswechsel bei der PPA registrieren, bevor der Arbeitnehmer beginnt, und Arbeitslosigkeit wird nur drei Monate lang toleriert (sechs Monate nach zwei Jahren mit der Erlaubnis).",
  ],
};
