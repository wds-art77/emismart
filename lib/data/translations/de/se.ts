import type { CountryDetails } from "../types";

export const se: CountryDetails = {
  authorities: [
    "Migrationsverket (Schwedische Migrationsbehörde): Entscheidung über die Arbeits- und Aufenthaltserlaubnis, Aufenthaltskarte",
    "Gewerkschaft der Branche: Stellungnahme zu den Beschäftigungsbedingungen, bevor der Antrag vervollständigt wird",
    "Schwedische Botschaften und Generalkonsulate: Passvorlage, Gespräche, Biometrie und Abholung der Karte",
    "Arbetsförmedlingen (Schwedische Arbeitsvermittlung): Platsbanken, der übliche Kanal für die 10-tägige Stellenausschreibung",
    "Skatteverket (Schwedische Steuerbehörde): Meldung im Bevölkerungsregister und Personennummer bei Aufenthalten von einem Jahr oder länger",
  ],
  legalBasis: [
    "Utlänningslagen (2005:716), Kapitel 6 über Arbeitserlaubnisse, einschließlich der Gehaltsanforderung in Kapitel 6 § 2",
    "Utlänningsförordningen (2006:97), einschließlich Kapitel 5 § 6 über die von der vollen Gehaltsanforderung ausgenommenen Berufe und der Regeln zur Bearbeitungszeit",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Stelle ausschreiben",
      actor: "Employer",
      detail:
        "Die Stelle wird mindestens 10 Tage ausgeschrieben, etwa auf Platsbanken, damit sich Kandidaten in Schweden und der EU/dem EWR bewerben können. Migrationsverket kann Nachweise verlangen.",
    },
    {
      title: "Arbeitsvertrag unterzeichnen und Versicherungen abschließen",
      actor: "Both",
      detail:
        "Der Vertrag muss vor der Antragstellung von beiden Parteien unterzeichnet sein. Der Arbeitgeber prüft, dass Gehalt und Bedingungen die Schwelle und den Tarifvertrag erfüllen, und schließt die erforderlichen Versicherungen ab.",
    },
    {
      title: "Fall im E-Service eröffnen und Gewerkschaft konsultieren",
      actor: "Employer",
      detail:
        "Der Arbeitgeber gibt die Daten des Arbeitnehmers und die Beschäftigungsbedingungen im Arbeitgeber-E-Service ein und übermittelt sie dann der zuständigen Gewerkschaft, die Stellung nehmen kann. Vollständige Angaben in dieser Phase ermöglichen es Migrationsverket, den Fall vorrangig zu behandeln.",
    },
    {
      title: "Antrag vervollständigen und Gebühr zahlen",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer erhält einen Link per E-Mail, prüft, ob die Bedingungen dem Vertrag entsprechen, fügt Passkopien und etwaige Versicherungsunterlagen bei, wählt die Botschaft oder das Konsulat für die Passprüfung aus und zahlt die Gebühr per Karte. Der Antrag wird erst registriert, wenn dieser Teil eingereicht ist.",
    },
    {
      title: "Passprüfung und Biometrie",
      actor: "Employee",
      detail:
        "Die meisten Antragsteller verifizieren ihren Pass über die App von Migrationsverket. Andere werden in die Botschaft geladen, um den Pass vorzulegen, ein Gespräch zu führen oder Fingerabdrücke und ein Foto für die Aufenthaltskarte abzugeben, wenn für die Einreise nach Schweden ein Visum erforderlich ist.",
    },
    {
      title: "Prüfung und Entscheidung",
      actor: "Authority",
      detail:
        "Migrationsverket kann sofort ablehnen, wenn die Voraussetzungen eindeutig nicht erfüllt sind; andernfalls prüft es die Akte, fordert bei Bedarf weitere Angaben an und entscheidet. Der Arbeitgeber wird per Post benachrichtigt, der Arbeitnehmer per E-Mail oder Brief. Der Arbeitnehmer sollte vor der Entscheidung nicht nach Schweden reisen.",
    },
    {
      title: "Aufenthaltskarte, Ankunft und Registrierung",
      actor: "Employee",
      detail:
        "Die Karte wird bei der Botschaft abgeholt oder an die schwedische Adresse gesandt und ist bei der Einreise zusammen mit dem Pass vorzuzeigen. Die Arbeit muss innerhalb von 4 Monaten nach dem ersten Gültigkeitstag der Erlaubnis beginnen. Aufenthalte von einem Jahr oder länger werden bei Skatteverket registriert, um eine Personennummer zu erhalten.",
    },
  ],
  employerDocs: [
    { label: "Im Arbeitgeber-E-Service eingegebene Beschäftigungsangaben: Identität des Arbeitnehmers, Position, Gehalt, Arbeitszeit und Dauer" },
    { label: "Vor der Antragstellung von beiden Parteien unterzeichneter Arbeitsvertrag" },
    { label: "Stellungnahme der Gewerkschaft oder Nachweis, dass die Gewerkschaft Gelegenheit zur Stellungnahme hatte" },
    { label: "Nachweis, dass die Stelle mindestens 10 Tage in Schweden und der EU/dem EWR ausgeschrieben war" },
    { label: "Bestätigung einer ab Beschäftigungsbeginn bestehenden Kranken-, Lebens-, Arbeitsunfall- und Betriebsrentenversicherung" },
    { label: "Für Branchen mit erhöhten Anforderungen (Reinigung, Gastgewerbe, Bau, Handel, Landwirtschaft, Werkstätten, Personalüberlassung): Nachweis der Fähigkeit, das Gehalt für mindestens 3 Monate zu zahlen", note: "Nicht erforderlich für kommunale, regionale oder staatliche Arbeitgeber" },
  ],
  employeeDocs: [
    { label: "Kopien der Passseiten mit Identität, Gültigkeit und etwaigen Erlaubnissen" },
    { label: "Kopie des unterzeichneten Arbeitsvertrags" },
    { label: "Umfassende Krankenversicherung für den gesamten Aufenthalt bei einer Beschäftigung von höchstens einem Jahr" },
    { label: "Vollmacht (Formular 107011), wenn ein Vertreter den Antrag einreicht" },
    { label: "Für begleitende Familienangehörige: Nachweis der Verwandtschaft, Geburtsurkunden der Kinder und Nachweis der Unterhaltsanforderung" },
    { label: "Beglaubigte Übersetzungen ins Schwedische oder Englische, mit Kopien der Originale" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU (EU-blåkort)", summary: "Hochschulbildung von mindestens 180 Credits oder 5 Jahre einschlägige Erfahrung, ein Vertrag von mindestens 6 Monaten und ein Gehalt von mindestens dem 1,25-Fachen des schwedischen Durchschnittsgehalts, jährlich von Migrationsverket festgelegt. Gilt zwischen 9 Monaten und 4 Jahren." },
    { name: "Schnellspur für Hochqualifizierte", summary: "Führungs- und akademische Berufe (SSYK-Gruppen 1 bis 3) außerhalb der Branchen mit erhöhten Anforderungen erhalten bei vollständigem Antrag eine Entscheidung innerhalb von 30 Tagen." },
    { name: "ICT-Erlaubnis", summary: "Führungskräfte, Spezialisten und Trainees, die innerhalb eines Konzerns versetzt werden, bearbeitet in der Kategorie der Hochqualifizierten." },
    { name: "Antrag aus Schweden heraus nach dem Besuch eines Arbeitgebers", summary: "Ein Besucher, der zu einem Treffen mit einem Arbeitgeber in einem Beruf mit hoher Nachfrage gekommen ist, kann unter Umständen den Antrag stellen, ohne Schweden zu verlassen. Die Bedingungen sind streng; prüfen Sie die Seite von Migrationsverket für diese Gruppe." },
  ],
  watchOuts: [
    "Unvollständige Akten verdoppeln die Wartezeit ungefähr. Alle Angaben des Arbeitgebers müssen dem unterzeichneten Vertrag entsprechen, und der Arbeitnehmer muss alle Unterlagen auf einmal beifügen.",
    "Die Gehaltsschwelle wird anhand des zum Zeitpunkt der Entscheidung geltenden Mediangehalts geprüft, sodass ein Angebot am Minimum zu niedrig ausfallen kann, wenn die Schwelle während der Bearbeitung steigt.",
    "Die Erlaubnis gilt nur für den Arbeitgeber und die Aufgaben. Eine Änderung von einem der beiden ohne neuen Antrag oder ein Arbeitsbeginn später als 4 Monate kann zum Widerruf führen.",
  ],
};
