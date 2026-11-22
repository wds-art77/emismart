import type { CountryDetails } from "../types";

export const si: CountryDetails = {
  authorities: [
    "Upravne enote (Verwaltungseinheiten): nehmen Anträge entgegen, führen das Verfahren und stellen die Erlaubnis aus",
    "Zavod Republike Slovenije za zaposlovanje (ZRSZ, Arbeitsverwaltung Sloweniens): Zustimmung zur kombinierten Erlaubnis und Arbeitsmarktprüfung",
    "Slowenische diplomatische Vertretungen und Konsulate: Anträge aus dem Ausland und Fingerabdrücke",
    "Innenministerium (Aufenthaltsregeln) und das für Arbeit zuständige Ministerium (Beschäftigung von Ausländern)",
    "Verwaltungsgericht: Rechtsbehelfe gegen Entscheidungen der Verwaltungseinheiten",
  ],
  legalBasis: [
    "Zakon o tujcih (ZTuj-2, Ausländergesetz), insbesondere Artikel 33 bis 37",
    "Zakon o zaposlovanju, samozaposlovanju in delu tujcev (ZZSDT, Gesetz über Beschäftigung, Selbstständigkeit und Arbeit von Ausländern)",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Verordnung zur Festlegung der Tätigkeiten und Berufe, in denen Ausländer schneller beschäftigt werden können (Liste für das beschleunigte Verfahren), sowie die Vorschriften über Formulare für Aufenthaltserlaubnisse und die Abnahme von Fingerabdrücken",
  ],
  steps: [
    {
      title: "Optionale Stellenmeldung und Arbeitsmarktprüfung",
      actor: "Employer",
      detail:
        "Der Arbeitgeber kann das Formular PDM-KTD über SPOT oder persönlich bei ZRSZ einreichen. ZRSZ antwortet innerhalb von 5 Arbeitstagen, ob geeignete Kandidaten als arbeitslos registriert sind. Dieser vorherige Schritt senkt das Ablehnungsrisiko.",
    },
    {
      title: "Arbeitsvertrag unterzeichnen und Erklärungen vorbereiten",
      actor: "Both",
      detail:
        "Der vom Arbeitgeber unterzeichnete Vertrag wird dem Antrag beigefügt, zusammen mit den Erklärungen des Arbeitgebers zur Unterkunft und zu betriebsbedingten Kündigungen in den vorangegangenen 6 Monaten.",
    },
    {
      title: "Antrag einreichen",
      actor: "Both",
      detail:
        "Der Arbeitgeber reicht bei einer beliebigen Verwaltungseinheit oder elektronisch über SPOT (eBDP) ein, oder der Arbeitnehmer reicht bei einer slowenischen Vertretung im Ausland oder, bei rechtmäßigem Aufenthalt, bei einer Verwaltungseinheit ein. Die Gebühr wird bei der Einreichung gezahlt, und die Fingerabdrücke werden abgenommen. Antragsteller, die sich rechtmäßig in Slowenien aufhalten, erhalten eine Einreichungsbescheinigung, die bis zur Entscheidung als vorläufige Aufenthaltserlaubnis dient.",
    },
    {
      title: "Verwaltungseinheit holt die ZRSZ-Zustimmung ein",
      actor: "Authority",
      detail:
        "Die Verwaltungseinheit prüft die Aufenthaltsvoraussetzungen (Reisepass, Krankenversicherung, Lebensunterhalt, Strafregister) und ersucht ZRSZ von Amts wegen um Zustimmung. ZRSZ prüft den Arbeitgeber, die Qualifikationen des Arbeitnehmers und den Arbeitsmarkt. Für Berufe des beschleunigten Verfahrens wird der Antrag vorrangig behandelt.",
    },
    {
      title: "Entscheidung und Abholung der Karte",
      actor: "Employee",
      detail:
        "Die Verwaltungseinheit erlässt ihre Entscheidung, und der Arbeitnehmer holt die Karte persönlich ab; dabei erhält er ein Informationsblatt zu Einreisefristen und Rechten. Antragsteller im Ausland reisen mit der Erlaubnis oder, soweit erforderlich, mit einem Visum nach Slowenien ein.",
    },
    {
      title: "Anmeldung zur Pflichtversicherung und Adressmeldung",
      actor: "Employer",
      detail:
        "Innerhalb von 15 Tagen nach Abholung der Karte schließt der Arbeitgeber das Arbeitsverhältnis ab und meldet den Arbeitnehmer zur gesetzlichen Sozialversicherung an (Formular M1); im beschleunigten Verfahren beträgt die Frist 10 Tage ab dem Informationsblatt. Wird diese Frist versäumt, kann die Erlaubnis widerrufen werden. Der Arbeitnehmer meldet seine Adresse bei der Verwaltungseinheit an.",
    },
  ],
  employerDocs: [
    { label: "Antrag auf Erteilung einer kombinierten Erlaubnis, eingereicht bei der Verwaltungseinheit oder über SPOT" },
    { label: "Vom Arbeitgeber unterzeichneter Arbeitsvertrag" },
    { label: "Erklärung des Arbeitgebers, ob eine Unterkunft gestellt wird" },
    { label: "Erklärung des Arbeitgebers zu betriebsbedingten Kündigungen in den vorangegangenen 6 Monaten, gegebenenfalls mit Namen und Daten" },
    { label: "Stellenmeldung PDM-KTD und Mitteilung von ZRSZ zur Arbeitsmarktprüfung, sofern vorab eingereicht" },
    { label: "Nachweis erfüllter Steuerpflichten und einer eingetragenen Tätigkeit", note: "Wird von ZRSZ im Zustimmungsverfahren geprüft" },
  ],
  employeeDocs: [
    { label: "Gültiger Reisepass, mindestens 3 Monate über den geplanten Aufenthalt hinaus gültig" },
    { label: "Passfoto nach der vorgeschriebenen Norm" },
    { label: "Strafregisterauszug des Herkunftslandes", note: "Bei der Verlängerung ist ein neuer, höchstens 3 Monate alter Auszug erforderlich" },
    { label: "Krankenversicherung, die mindestens die Notfallversorgung in Slowenien abdeckt, sofern keine Pflichtversicherung besteht" },
    { label: "Nachweis ausreichender Mittel zum Lebensunterhalt, normalerweise der Arbeitsvertrag" },
    { label: "Nachweis der für die Stelle erforderlichen Ausbildung oder beruflichen Qualifikation" },
    { label: "Fingerabdrücke, abgenommen bei der Vertretung oder der Verwaltungseinheit" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Für Hochschulabsolventen mit einem Vertrag von mindestens 1 Jahr und einem Gehalt von mindestens dem 1,5-Fachen des durchschnittlichen Bruttojahreslohns; wird von der Verwaltungseinheit mit ZRSZ-Zustimmung für 2 Jahre ausgestellt. Der Arbeitgeber muss die Stelle zuvor ausschreiben." },
    { name: "Befristete Aufenthaltserlaubnis für digitale Nomaden", summary: "Eingeführt am 21. November 2025 für Fernarbeitende, die im Ausland beschäftigt oder selbstständig sind, mit Mitteln von mindestens dem Doppelten des durchschnittlichen Nettogehalts. Gilt 1 Jahr, nicht verlängerbar; die Familie kann sofort nachziehen." },
    { name: "Bilaterale Abkommen mit Bosnien und Herzegowina und Serbien", summary: "Arbeitnehmer aus diesen Ländern erhalten eine Arbeitserlaubnis nach dem Abkommen, die als ZRSZ-Zustimmung für die kombinierte Erlaubnis gilt." },
    { name: "Forscher und Hochschulpersonal", summary: "Befristete Aufenthaltserlaubnis für Forschung oder Lehre auf Grundlage einer Aufnahmevereinbarung (Artikel 38 ZTuj-2), eingereicht von der Einrichtung." },
  ],
  watchOuts: [
    "Die meisten Verzögerungen entstehen durch unvollständige Akten; Verwaltungseinheiten haben berichtet, dass nur eine Minderheit der Anträge vollständig eingeht. Die Erklärungen des Arbeitgebers zur Unterkunft und zu betriebsbedingten Kündigungen fehlen häufig.",
    "ZRSZ verweigert die Zustimmung, wenn der Arbeitgeber Steuerschulden hat, nach einer rechtskräftigen Geldbuße von der Beschäftigung von Ausländern ausgeschlossen ist oder geeignete arbeitslose Kandidaten registriert sind. Die vorherige PDM-KTD-Prüfung vermeidet Überraschungen.",
    "Nach Abholung der Karte hat der Arbeitgeber 15 Tage (10 im beschleunigten Verfahren), um den Arbeitnehmer zur Pflichtversicherung anzumelden; wird diese Frist versäumt, kann die Erlaubnis entzogen werden. Die Familienzusammenführung setzt eine für mindestens 1 Jahr erteilte Erlaubnis voraus.",
  ],
};
