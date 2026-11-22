import type { CountryDetails } from "../types";

export const fi: CountryDetails = {
  authorities: [
    "Finnisches Einwanderungsamt (Maahanmuuttovirasto, Migri): Entscheidung über Aufenthalt und Arbeit, einschließlich der Arbeitskräfteverfügbarkeitsprüfung",
    "Ministerium für Wirtschaft und Beschäftigung und die regionalen Zentren für Wirtschaftsentwicklung (elinvoimakeskukset): nationale Mangelsektoren und regionale Arbeitserlaubnispolitik",
    "Finnische Botschaften und Konsulate: Identitätsprüfung, Fingerabdrücke und Visum D",
    "Behörde für Digitalisierung und Bevölkerungsdaten (örtliche Registerbehörde): Anmeldung des Wohnsitzes nach der Ankunft",
  ],
  legalBasis: [
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Ulkomaalaislaki (Ausländergesetz 301/2004), Kapitel 5 über arbeitsbezogene Aufenthaltserlaubnisse",
    "Regierungsverordnung zur Festlegung der in Euro ausgedrückten Gehaltsschwelle für die Aufenthaltserlaubnis für Arbeitnehmer, wie im Ausländergesetz vorgesehen",
  ],
  steps: [
    {
      title: "Weg und Arbeitserlaubnispolitik prüfen",
      actor: "Employer",
      detail:
        "Prüfen Sie, dass die Stelle nicht unter eine stellenbezogene Erlaubnis fällt (Spezialist, Blaue Karte EU, Forscher, Saisonarbeit). Prüfen Sie, ob der Beruf auf der nationalen Mangelberufsliste oder in der regionalen Arbeitserlaubnispolitik steht, was die Verfügbarkeitsprüfung entfallen lässt.",
    },
    {
      title: "Auf dem EU/EWR-Markt rekrutieren, wenn eine Prüfung erforderlich ist",
      actor: "Employer",
      detail:
        "Schreiben Sie die Stelle für mindestens zwei Wochen auf Job Market Finland aus und bewahren Sie Nachweise über die Bewerber und die Gründe für ihre Ungeeignetheit auf. Dies muss abgeschlossen sein, bevor der Arbeitnehmer den Antrag stellt.",
    },
    {
      title: "Vertrag unterschreiben und Beschäftigungsbedingungen übermitteln",
      actor: "Employer",
      detail:
        "Tragen Sie die Beschäftigungsbedingungen in Enter Finland for Employers ein oder füllen Sie das Formular TEM 0.54 für einen Papierantrag aus und fügen Sie die Arbeitgeberbescheinigungen bei. Ohne diese Angaben kann die Bearbeitung nicht beginnen.",
    },
    {
      title: "Antrag stellen und Identität nachweisen",
      actor: "Employee",
      detail:
        "Stellen Sie den Antrag in Enter Finland, zahlen Sie die Gebühr und suchen Sie innerhalb von drei Monaten eine finnische Botschaft oder ein Konsulat (oder einen externen Dienstleister) auf, um die Identität nachzuweisen und Fingerabdrücke abzugeben. Ein Papierantrag kann stattdessen bei der Vertretung eingereicht werden.",
    },
    {
      title: "Prüfung und Entscheidung durch Migri",
      actor: "Authority",
      detail:
        "Migri prüft die Arbeitskräfteverfügbarkeit, die Beschäftigungsbedingungen und die Gehaltsschwelle, die Erfüllung der gesetzlichen Pflichten des Arbeitgebers und die allgemeinen Ablehnungsgründe und erlässt dann eine Entscheidung, die das oder die erfassten Berufsfelder benennt.",
    },
    {
      title: "Einreise, Aufenthaltskarte und Anmeldung",
      actor: "Employee",
      detail:
        "Nach einer positiven Entscheidung kann der Arbeitnehmer mit einem 100 Tage gültigen Visum D reisen, bevor die Karte eintrifft. Bei der Ankunft meldet der Arbeitnehmer den Wohnsitz bei der örtlichen Registerbehörde an, wenn der Aufenthalt länger als ein Jahr dauert. Der Arbeitgeber meldet Migri den Beginn der Beschäftigung und jede vorzeitige Beendigung.",
    },
  ],
  employerDocs: [
    { label: "Beschäftigungsbedingungen, eingetragen in Enter Finland for Employers oder auf dem Formular TEM 0.54", note: "Erforderlich, bevor die Bearbeitung beginnt." },
    { label: "Verfügbarkeitsbericht mit Nachweis der Ausschreibung auf Job Market Finland und des Rekrutierungsergebnisses", note: "Nur wenn der Beruf außerhalb der Mangelberufsliste oder der regionalen Politik liegt." },
    { label: "Bescheinigung über gezahlte Steuern oder Steuerschuldenbescheinigung, nicht älter als drei Monate" },
    { label: "Versicherungsbescheinigungen für Rentenversicherung (TyEL), Unfall-, Gruppenlebens- und Arbeitslosenversicherung, nicht älter als drei Monate" },
    { label: "Bericht über die Zahl der Beschäftigten und den Anteil von Vollzeit- und Teilzeitkräften" },
    { label: "Unterschriebener Arbeitsvertrag mit einem Gehalt, das dem Tarifvertrag entspricht und die Gehaltsschwelle erreicht" },
  ],
  employeeDocs: [
    { label: "Gültiger Pass, vorgelegt bei der Vertretung, mit Farbkopien der Datenseite und aller Seiten mit Einträgen" },
    { label: "Passfoto nach den Richtlinien der finnischen Polizei oder ein Fotoabrufcode" },
    { label: "Nachweis des rechtmäßigen Aufenthalts im Staat, in dem der Antrag gestellt wird" },
    { label: "Arbeitsvertrag oder verbindliches Angebot" },
    { label: "Diplome oder Zeugnisse, soweit die Stelle eine Qualifikation oder Berufsausübungsberechtigung erfordert" },
    { label: "Salmonellenbescheinigung für Tätigkeiten im Umgang mit Lebensmitteln; Tuberkulosebescheinigung für die Arbeit mit Kindern unter dem Schulalter" },
    { label: "Nachweis der Gebührenzahlung" },
  ],
  alternativeRoutes: [
    { name: "Aufenthaltserlaubnis für Spezialisten", summary: "Für Hochschulabsolventen und IT-Spezialisten in Expertenfunktionen. Keine Verfügbarkeitsprüfung, erste Erlaubnis für zwei Jahre und ein Fast-track-Dienst mit einem Bearbeitungsziel von zwei Wochen." },
    { name: "Blaue Karte EU", summary: "Hochqualifizierte Arbeitnehmer mit Hochschulabschluss und einem Gehalt über der Schwelle der Blauen Karte; Mobilitätsvorteile in der EU." },
    { name: "Saisonarbeit", summary: "Saisonarbeitsvisum für bis zu drei Monate oder Aufenthaltserlaubnis für Saisonarbeit für bis zu neun Monate; die Verfügbarkeitsprüfung gilt für Erlaubnisse von sechs bis neun Monaten." },
    { name: "Erlaubnis zur Arbeitssuche für Absolventen und Forscher", summary: "Inhaber eines finnischen Abschlusses oder einer Forschererlaubnis können eine Erlaubnis zur Arbeitssuche von bis zu zwei Jahren erhalten, zu beantragen innerhalb von fünf Jahren nach der vorherigen Erlaubnis." },
  ],
  watchOuts: [
    "Der Antrag wird erst bearbeitet, wenn der Arbeitnehmer seine Identität bei einer finnischen Vertretung nachgewiesen und der Arbeitgeber die Beschäftigungsbedingungen beigefügt hat; beide Schritte verzögern sich häufig.",
    "Die Erlaubnis ist auf die in der Entscheidung genannten Berufsfelder beschränkt. Arbeit in einem anderen Feld erfordert einen neuen Antrag auf Erlaubnis; die Verfügbarkeitsprüfung entfällt nur, wenn der Arbeitnehmer bereits mindestens neun Monate mit der Erlaubnis gearbeitet hat.",
    "Anträge in Bereichen mit einem Arbeitskräfteüberangebot nach der regionalen Arbeitserlaubnispolitik werden auch mit Stellenangebot in der Regel abgelehnt, und der Arbeitgeber muss seine Steuer- und Versicherungspflichten erfüllt haben.",
  ],
};
