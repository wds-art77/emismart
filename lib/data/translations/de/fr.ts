import type { CountryDetails } from "../types";

export const fr: CountryDetails = {
  authorities: [
    "Innenministerium, ANEF-Plattform und die interregionalen Plattformen für ausländische Arbeitskräfte (plateformes de main-d'œuvre étrangère)",
    "France Travail: Veröffentlichung der Stelle für die Arbeitsmarktprüfung",
    "Französisches Konsulat (France-Visas): Visum für den langfristigen Aufenthalt",
    "Präfektur: Verlängerung der Aufenthaltstitel und Statuswechsel im Inland",
  ],
  legalBasis: [
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Code de l'entrée et du séjour des étrangers et du droit d'asile (CESEDA), insbesondere Artikel L. 421-1 ff. sowie Artikel R. 5221-1 ff. des Code du travail",
    "Arrêté vom 3. Januar 2025 über die Nachweisdokumente und Arrêté vom 21. Mai 2025 über die regionalen Listen der Engpassberufe",
  ],
  steps: [
    {
      title: "Stelle ausschreiben",
      actor: "Employer",
      detail:
        "Sofern die Stelle nicht auf der Engpassliste steht, schreiben Sie das Angebot mindestens 3 Wochen bei France Travail aus und bewahren Sie den Nachweis der erfolglosen Rekrutierung auf.",
    },
    {
      title: "Arbeitserlaubnis online beantragen",
      actor: "Employer",
      detail:
        "Reichen Sie den Antrag im ANEF-Arbeitgeberportal mit dem Vertrag, den Unternehmensunterlagen sowie den Identitäts- und Qualifikationsnachweisen des Arbeitnehmers ein.",
    },
    {
      title: "Prüfung durch die Plattform für ausländische Arbeitskräfte",
      actor: "Authority",
      detail:
        "Die Plattform prüft die Arbeitsmarktprüfung, das Gehalt (mindestens der SMIC oder das Minimum des Tarifvertrags), die bisherige Regeltreue des Arbeitgebers und die Übereinstimmung zwischen Stelle und Qualifikationen.",
    },
    {
      title: "Gesicherte Arbeitserlaubnis erteilt",
      actor: "Authority",
      detail:
        "Arbeitgeber und Arbeitnehmer erhalten die Erlaubnis per E-Mail. Sie gilt für die konkrete Stelle und den konkreten Arbeitgeber.",
    },
    {
      title: "VLS-TS beim Konsulat beantragen",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer stellt den Antrag auf France-Visas mit der Arbeitserlaubnis, dem Reisepass, Lichtbildern und Nachweisdokumenten und nimmt dann den Visumtermin wahr.",
    },
    {
      title: "Visum nach der Ankunft online validieren",
      actor: "Employee",
      detail:
        "Validieren Sie das VLS-TS innerhalb von 3 Monaten nach der Einreise im ANEF-Portal und zahlen Sie die Abgabe. Das validierte Visum ist für seine Dauer der Aufenthalts- und Arbeitstitel.",
    },
  ],
  employerDocs: [
    { label: "Online-Antrag auf Arbeitserlaubnis auf ANEF" },
    { label: "Kbis-Auszug oder gleichwertiges Registrierungsdokument" },
    { label: "Unterzeichneter Arbeitsvertrag oder Einstellungszusage (CERFA, soweit anwendbar)" },
    { label: "Nachweis der 3-wöchigen Ausschreibung der Stelle bei France Travail", note: "Nicht erforderlich für Engpassberufe." },
    { label: "Bescheinigung über die Erfüllung der Sozialbeitragspflichten (URSSAF)" },
  ],
  employeeDocs: [
    { label: "Gültiger Reisepass" },
    { label: "Lebenslauf und Diplome oder Nachweise einschlägiger Berufserfahrung für die Stelle" },
    { label: "Dem Arbeitgeber erteilte gesicherte Arbeitserlaubnis" },
    { label: "France-Visas-Antragsformular und ICAO-konforme Lichtbilder" },
    { label: "Nachweis einer Unterkunft in Frankreich für die Visumphase" },
    { label: "Geburtsurkunde und Personenstandsurkunden, übersetzt, für Familienanträge" },
  ],
  alternativeRoutes: [
    { name: "Passeport talent", summary: "Mehrjähriger Titel für Hochqualifizierte, Blaue Karte EU, Forscher, Investoren und Unternehmensgründer. Keine Arbeitsmarktprüfung." },
    { name: "Salarié détaché ICT", summary: "Für konzerninterne Versetzungen von Führungskräften und Spezialisten." },
    { name: "Changement de statut", summary: "Für Studierende oder andere bereits in Frankreich ansässige Personen, die eine qualifizierende Beschäftigung finden." },
  ],
  watchOuts: [
    "Die Arbeitserlaubnis ist stellenbezogen. Ein neuer Vertrag erfordert eine neue Erlaubnis.",
    "Der Arbeitgeber muss die Echtheit eines bestehenden Aufenthaltstitels mindestens 2 Arbeitstage vor der Einstellung bei der Präfektur prüfen lassen.",
    "Die regionalen Engpasslisten wurden im Mai 2025 geändert und werden fortlaufend aktualisiert; prüfen Sie die Liste für das Département des Beschäftigungsorts.",
  ],
};
