import type { CountryDetails } from "../types";

export const dk: CountryDetails = {
  authorities: [
    "Styrelsen for International Rekruttering og Integration (SIRI): Entscheidung über alle Arbeitsregelungen, Zertifizierung von Fast-track-Unternehmen, Citizen Centre für die Biometrie",
    "Dänische Auslandsvertretungen und Visumantragszentren im Ausland: Erfassung der biometrischen Daten",
    "Regionale Beschäftigungsräte (Regionale Arbejdsmarkedsråd): Beurteilung, ob Gehalt und Bedingungen dänischen Standards entsprechen, und Ergänzungen der Positivlisten",
    "Danish Patient Safety Authority und andere Zulassungsstellen: Berufszulassung für reglementierte Berufe, bevor eine Erlaubnis erteilt werden kann",
  ],
  legalBasis: [
    "Udlændingeloven (dänisches Ausländergesetz), § 9 a, der die Arbeitsregelungen einschließlich der Positivlisten, des Pay Limit Scheme und des Fast-track Scheme auflistet",
    "Protokoll Nr. 22 über die Position Dänemarks im Anhang zu den EU-Verträgen, nach dem die Richtlinie 2011/98/EU und die Richtlinie (EU) 2024/1233 Dänemark nicht binden",
    "Jährliche Anpassung der Pay-Limit-Beträge zum 1. Januar und halbjährliche Aktualisierungen der Positivlisten",
  ],
  steps: [
    {
      title: "Regelung wählen und Gehalt und Bedingungen prüfen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber prüft, ob das Gehalt die aktuelle Gehaltsgrenze übersteigt, ob die Stellenbezeichnung auf einer Positivliste steht oder ob das Unternehmen Fast-track-zertifiziert ist. Die Arbeitszeit muss im Pay Limit Scheme mindestens 30 Stunden pro Woche und im Fast-track Vollzeit betragen, und die Stelle darf nicht von einem Arbeitskampf betroffen sein.",
    },
    {
      title: "Fallnummer anlegen und Gebühr zahlen",
      actor: "Both",
      detail:
        "Entweder der Arbeitgeber oder der Arbeitnehmer legt die Fallnummer (case order ID) auf nyidanmark.dk an und zahlt die Bearbeitungsgebühr. Die Quittung muss dem Antrag beigefügt werden. Pendler, die nicht in Dänemark wohnen werden, benötigen weder das eine noch das andere.",
    },
    {
      title: "Online-Antrag ausfüllen",
      actor: "Both",
      detail:
        "Im AR1 füllt der Arbeitgeber den Unternehmens- und Stellenteil und der Arbeitnehmer den persönlichen Teil aus, mit Unterschrift per MitID oder eidesstattlicher Erklärung. Im AR6 reicht der Arbeitgeber mit Vollmacht ein. Der Vertrag oder das Stellenangebot, Passkopien und Ausbildungsnachweise werden beigefügt.",
    },
    {
      title: "Biometrische Daten innerhalb von 14 Tagen erfassen lassen",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer lässt Gesichtsbild und Fingerabdrücke bei einer dänischen Vertretung oder einem Antragszentrum im Ausland erfassen oder, bei rechtmäßigem Aufenthalt in Dänemark, nach Terminvereinbarung bei einer SIRI-Niederlassung. Das Versäumen der Frist führt zur Ablehnung.",
    },
    {
      title: "Prüfung durch SIRI",
      actor: "Authority",
      detail:
        "SIRI prüft die Gehaltsbestandteile, den dänischen Standard der Bedingungen, eine etwa erforderliche Berufszulassung und die Echtheit des Arbeitsverhältnisses. Es kann weitere Dokumente anfordern oder einen regionalen Beschäftigungsrat konsultieren, was die Bearbeitungszeit verlängert.",
    },
    {
      title: "Entscheidung und Aufenthaltskarte",
      actor: "Authority",
      detail:
        "Die Entscheidung wird dem Antragsteller und gegebenenfalls dem Arbeitgeber zugesandt. Die Aufenthaltskarte wird an die im CPR-Register eingetragene Adresse des Arbeitnehmers in Dänemark geschickt, sodass der Name am Briefkasten stehen muss.",
    },
    {
      title: "Ankunft, CPR-Registrierung und dänisches Bankkonto",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer meldet eine dänische Adresse im CPR-Register an und eröffnet innerhalb von 180 Tagen nach der Erlaubnis oder der Einreise ein dänisches Bankkonto auf seinen eigenen Namen. Das Gehalt muss auf dieses Konto gezahlt werden. Jeder Stellenwechsel, auch innerhalb des Unternehmens, muss SIRI gemeldet werden.",
    },
  ],
  employerDocs: [
    { label: "Arbeitsvertrag oder Stellenangebot mit Angabe von Gehalt, Beschäftigungsbedingungen und einer Stellenbeschreibung" },
    { label: "Nachweise über Gehaltsbestandteile, die nicht im Vertrag angegeben sind, etwa Pension oder garantierte Zulagen" },
    { label: "Vollmacht des Arbeitnehmers, wenn der Arbeitgeber allein einreicht (AR6)" },
    { label: "Bei neu gegründeten Unternehmen: Geschäftsplan und Budget oder Hauptbuchsaldo; bei Unternehmen in Gründung: Gründungsplan und Übersicht der wesentlichen Kosten" },
    { label: "Arbeitgeber im Gastgewerbe und in der Gastronomie: die zusätzliche SIRI-Dokumentencheckliste für die Branche" },
    { label: "Fast-track-Anträge: die SIRI-Zertifizierung des Unternehmens und, für die Bildungsschiene, eine Beschreibung des Ausbildungszwecks" },
  ],
  employeeDocs: [
    { label: "Quittung für die Bearbeitungsgebühr mit der Fallnummer (case order ID)" },
    { label: "Kopie aller Passseiten, einschließlich leerer Seiten und Umschlag" },
    { label: "Nachweise über einschlägige Ausbildung und Berufserfahrung; für die Positivlisten Nachweis des erforderlichen Niveaus der Hochschul- oder Berufsausbildung" },
    { label: "Dänische Berufszulassung, soweit der Beruf sie erfordert, etwa von der Danish Patient Safety Authority" },
    { label: "Nachweis des rechtmäßigen Aufenthalts in Dänemark bei Antragstellung aus dem Inland" },
    { label: "Lebenslauf, soweit relevant" },
    { label: "Übersetzungen von Dokumenten, die nicht auf Dänisch, Englisch, Norwegisch oder Schwedisch verfasst sind" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Nicht verfügbar: Dänemark nimmt nicht an der Regelung der Blauen Karte EU teil. Das Pay Limit Scheme und die Fast-track-Schiene Pay Limit dienen stattdessen hoch bezahlten Arbeitnehmern." },
    { name: "Positivliste für Personen mit Hochschulabschluss und Positivliste für Fachkräfte", summary: "Mangelberufe nach DISCO-Code mit der erforderlichen Ausbildung, aktualisiert am 1. Januar und 1. Juli, mit regionalen Ergänzungen. Keine Gehaltsgrenze über die dänischen Standards hinaus; Erlaubnisse für 4 Jahre." },
    { name: "Fast-track Scheme", summary: "Für SIRI-zertifizierte Unternehmen. Fünf Schienen (Pay Limit, Supplementary Pay Limit, Kurzzeit, Forscher, Bildung), schneller Arbeitsbeginn und Erlaubnis, sowohl in Dänemark als auch im Ausland zu arbeiten." },
    { name: "Supplementary Pay Limit Scheme", summary: "Eine niedrigere Gehaltsgrenze für Stellen, die 2 Wochen auf Jobnet und EURES ausgeschrieben wurden, verfügbar solange die nationale Arbeitslosenquote unter einem festgelegten Wert bleibt. Erlaubnisse bis zu 5 Jahre, aber keine Arbeitssuchphase." },
  ],
  watchOuts: [
    "Die biometrischen Daten müssen innerhalb von 14 Tagen nach der Einreichung erfasst werden, und der AR1-Antragsteller muss sich mit genau der E-Mail-Adresse anmelden, die der Arbeitgeber eingetragen hat; beides sind häufige Gründe für Ablehnungen oder Neustarts.",
    "Nur garantierter Barlohn, Pensionsbeiträge und Urlaubsgeld zählen zur Gehaltsgrenze. Wohnung, Auto, Telefon und andere Sachleistungen zählen nicht, und im Folgejahr ausgezahltes Urlaubsgeld zählt nicht für das Verdienstjahr.",
    "Die Erlaubnis ist an die Stelle gebunden. Eine neue Position, auch im selben Unternehmen, erfordert einen neuen Antrag, und das Gehalt muss innerhalb von 180 Tagen auf ein dänisches Bankkonto fließen, sonst ist die Erlaubnis gefährdet.",
  ],
};
