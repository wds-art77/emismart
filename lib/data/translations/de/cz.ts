import type { CountryDetails } from "../types";

export const cz: CountryDetails = {
  authorities: [
    "Innenministerium, Abteilung für Asyl- und Migrationspolitik (Ministerstvo vnitra, OAMP): Entscheidung, Biometrie, Kartenausstellung, Änderungsmeldungen",
    "Tschechische Botschaften und Konsulate: Entgegennahme der Anträge im Ausland und Erteilung des Visums D/VR zur Abholung der Karte",
    "Arbeitsamt der Tschechischen Republik (Úřad práce ČR) und Ministerium für Arbeit und Soziales: Stellenmeldung, Zentralregister der freien Stellen für Inhaber einer Arbeitnehmerkarte, verbindliche Stellungnahmen und Arbeitserlaubnisse",
  ],
  legalBasis: [
    "Zákon č. 326/1999 Sb., o pobytu cizinců na území České republiky (Gesetz über den Aufenthalt von Ausländern), in der Fassung des Gesetzes Nr. 101/2014 Slg. zur Umsetzung der Richtlinie über die kombinierte Erlaubnis",
    "Zákon č. 435/2004 Sb., o zaměstnanosti (Beschäftigungsgesetz), zur Stellenmeldung und zum Zentralregister",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Stelle melden und der Aufnahme in das Zentralregister zustimmen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber meldet die freie Stelle dem regionalen Arbeitsamt und stimmt ihrer Aufnahme in das Zentralregister der freien Stellen zu, die mit Inhabern einer Arbeitnehmerkarte besetzt werden können. Nach der Veröffentlichungsfrist erhält die Stelle eine Kennnummer, die der Arbeitnehmer für den Antrag benötigt.",
    },
    {
      title: "Vertrag unterschreiben und Qualifikationsnachweise zusammenstellen",
      actor: "Both",
      detail:
        "Die Parteien unterschreiben einen Arbeitsvertrag, eine Vereinbarung über Arbeitstätigkeit oder einen Vorvertrag. Verlangt die Stelle oder der Arbeitgeber eine Qualifikation, beschafft der Arbeitnehmer das Diplom oder Zeugnis mit beglaubigter tschechischer Übersetzung.",
    },
    {
      title: "Termin buchen und persönlich bei der Botschaft einreichen",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer bucht einen Termin bei der tschechischen Botschaft (einige Botschaften arbeiten mit Kontingenten oder Registrierungssystemen), reicht den Antrag persönlich mit der Stellennummer, dem Pass, einem Foto, dem Unterkunftsnachweis, dem Vertrag, dem Strafregisterauszug und weiteren Dokumenten ein, die nicht älter als 180 Tage sind, und zahlt die Konsulargebühr.",
    },
    {
      title: "Entscheidung des Innenministeriums",
      actor: "Authority",
      detail:
        "Die Botschaft leitet die Akte an das Ministerium weiter, das das Arbeitsamt um eine verbindliche Stellungnahme ersuchen kann und innerhalb von 60 oder 90 Tagen entscheidet. Eine Ablehnung kann angefochten werden, indem innerhalb von 15 Tagen beim Ministerium eine Neubewertung beantragt wird.",
    },
    {
      title: "Visum D/VR, Reisekrankenversicherung und Einreise",
      actor: "Employee",
      detail:
        "Bei Genehmigung erteilt die Botschaft ein Visum D/VR zur Abholung der Karte. Der Arbeitnehmer muss eine Reisekrankenversicherung für den Zeitraum bis zum Beginn der gesetzlichen Krankenversicherung vorweisen und reist dann nach Tschechien.",
    },
    {
      title: "Biometrie, Überbrückungsbescheinigung und Abholung der Karte",
      actor: "Employee",
      detail:
        "Innerhalb von 30 Tagen nach der Einreise mit dem Visum D/VR (3 Arbeitstage bei visumfreier Einreise mit biometrischem Pass) meldet sich der Arbeitnehmer bei einer Dienststelle des Ministeriums, gibt biometrische Daten ab und erhält eine Bescheinigung über die Erfüllung der Voraussetzungen, die den Arbeitsbeginn erlaubt. Die Karte wird innerhalb von 60 Tagen abgeholt, mit der Bestätigung des Arbeitgebers, dass die Arbeit begonnen hat.",
    },
  ],
  employerDocs: [
    { label: "Beim Arbeitsamt gemeldete Stelle und Zustimmung zur Aufnahme in das Zentralregister, mit Angabe der Kennnummer der Stelle" },
    { label: "Arbeitsvertrag, Vereinbarung über Arbeitstätigkeit oder Vorvertrag, der dem Arbeitsgesetzbuch und den Mindestlohnregeln entspricht" },
    { label: "Bestätigung, dass die Stelle keine Qualifikation erfordert oder dass die Qualifikation des Arbeitnehmers anerkannt wird, soweit relevant" },
    { label: "Bei Leiharbeit ein Dokument mit Angabe des Arbeitnehmers, der Art und des Orts der Arbeit sowie des Entleihers" },
    { label: "Bestätigung, dass der Arbeitnehmer die Arbeit aufgenommen hat, erforderlich bei der Abholung der Karte" },
  ],
  employeeDocs: [
    { label: "Antragsformular für eine langfristige Aufenthaltserlaubnis (Arbeitnehmerkarte) mit der Stellennummer" },
    { label: "Gültiges Reisedokument, Original" },
    { label: "Foto des aktuellen Erscheinungsbilds" },
    { label: "Nachweis einer Unterkunft in Tschechien" },
    { label: "Strafregisterauszug aus dem Staat der Staatsangehörigkeit und aus Staaten mit Aufenthalt von mehr als 6 Monaten in den letzten 3 Jahren" },
    { label: "Nachweis der beruflichen Qualifikation, soweit die Stelle sie erfordert, mit beglaubigter tschechischer Übersetzung" },
    { label: "Ärztliches Gutachten auf Verlangen", note: "Anlagen dürfen nicht älter als 180 Tage sein, mit Ausnahme des Passes und des Fotos." },
    { label: "Reisekrankenversicherung vor Erteilung des Visums D/VR" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Für hochqualifizierte Arbeitnehmer mit Hochschulabschluss und einem Gehalt über der jährlich veröffentlichten Schwelle, für Stellen im gesonderten Register für die Blaue Karte." },
    { name: "Karte für unternehmensintern transferierte Arbeitnehmer", summary: "Für Führungskräfte, Spezialisten und Trainees, die innerhalb eines Konzerns transferiert werden, außerhalb des Registers für die Arbeitnehmerkarte." },
    { name: "Von der Regierung genehmigte Programme der Wirtschaftsmigration", summary: "Programme wie Key and Research Staff und Highly Qualified Employee verschaffen Zugang zu Botschaftsterminen, erlauben dem Arbeitgeber die Einreichung mit Vollmacht und lassen Arbeitgeberbestätigungen einige Dokumente ersetzen." },
    { name: "Nicht-duale Arbeitnehmerkarte", summary: "Nur Aufenthalt, für Arbeitnehmer mit freiem Arbeitsmarktzugang oder einer gesonderten Arbeitserlaubnis des Arbeitsamtes." },
  ],
  watchOuts: [
    "Botschaftstermine sind der Engpass. Mehrere Botschaften arbeiten mit Kontingenten oder Registrierungssystemen, und Termine werden abgesagt oder verschoben; der Antrag kann nicht per Post oder online eingereicht werden, und eine falsche Botschaft bedeutet Zurückweisung.",
    "Jede Anlage außer Pass und Foto verfällt nach 180 Tagen und muss auf Tschechisch vorliegen oder eine beglaubigte Übersetzung tragen; ein veralteter Strafregisterauszug oder eine nicht registrierte Stelle stoppt die Akte.",
    "Die Karte ist an die registrierte Stelle gebunden. Ein Wechsel des Arbeitgebers oder der Position muss dem Ministerium im Voraus gemeldet werden, normalerweise erst nach 6 Monaten beim ersten Arbeitgeber und mindestens 30 Tage vor dem Beginn, und nach dem Ende der Beschäftigung hat der Arbeitnehmer eine begrenzte Frist (derzeit 90 Tage nach dem Portal des Ministeriums), um eine neue Stelle zu melden, sonst erlischt die Karte.",
  ],
};
