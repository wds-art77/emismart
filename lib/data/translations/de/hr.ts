import type { CountryDetails } from "../types";

export const hr: CountryDetails = {
  authorities: [
    "Innenministerium (MUP), über Polizeiverwaltungen und Polizeistationen: Entscheidung über die Aufenthalts- und Arbeitserlaubnis",
    "Kroatisches Arbeitsamt (Hrvatski zavod za zapošljavanje, HZZ): Arbeitsmarktprüfung, Stellungnahme und Mangelberufsliste",
    "Kroatische Auslandsvertretungen und Konsulate: Entgegennahme der Anträge und langfristiges Visum D",
    "Verwaltungsgerichte in Zagreb, Split, Rijeka und Osijek: Verwaltungsstreitverfahren gegen Entscheidungen des Ministeriums",
  ],
  legalBasis: [
    "Zakon o strancima (Ausländergesetz, Amtsblatt 133/20, mit Änderungen einschließlich jener von 2025 und 2026), insbesondere Artikel 91 bis 110",
    "Pravilnik o boravku državljana trećih zemalja u Republici Hrvatskoj (Verordnung über den Aufenthalt von Drittstaatsangehörigen)",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Zakon o upravnim sporovima (Gesetz über Verwaltungsstreitverfahren) für die gerichtliche Überprüfung",
  ],
  steps: [
    {
      title: "Arbeitsmarktprüfung beim HZZ beantragen",
      actor: "Employer",
      detail:
        "Sofern der Beruf nicht auf der HZZ-Mangelberufsliste steht oder der Arbeitnehmer unter Artikel 110 fällt, ersucht der Arbeitgeber das HZZ oder dessen Regionalstelle um die Prüfung. Das HZZ meldet innerhalb von 15 Tagen, ob geeignete Kandidaten registriert sind.",
    },
    {
      title: "Antrag über die HZZ-Plattform stellen",
      actor: "Employer",
      detail:
        "Innerhalb von 90 Tagen nach einem negativen Prüfungsergebnis reicht der Arbeitgeber den Antrag auf Aufenthalts- und Arbeitserlaubnis für den benannten Arbeitnehmer auf der HZZ-Webplattform ein, mit dem Vertrag und den Dokumenten des Arbeitnehmers. Das HZZ prüft die Arbeitgebervoraussetzungen und leitet seine Stellungnahme an die zuständige Polizeiverwaltung weiter.",
    },
    {
      title: "Entscheidung der Polizeiverwaltung",
      actor: "Authority",
      detail:
        "Die Polizeiverwaltung oder -station am beabsichtigten Wohnort des Arbeitnehmers prüft die Akte, fordert fehlende Unterlagen innerhalb von 5 Arbeitstagen an und muss innerhalb von 90 Tagen nach einem vollständigen Antrag entscheiden. Der Arbeitgeber zahlt die Verwaltungsgebühr und holt die Entscheidung ab.",
    },
    {
      title: "Visum D und Einreise",
      actor: "Employee",
      detail:
        "Visumpflichtige Arbeitnehmer beantragen auf Grundlage der erteilten Erlaubnis ein langfristiges Visum D bei einer kroatischen Auslandsvertretung. Visumfreie Staatsangehörige können einreisen und die Formalitäten in Kroatien erledigen.",
    },
    {
      title: "Adresse anmelden und biometrische Daten abgeben",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer meldet die Adresse innerhalb von 3 Tagen nach der Einreise bei der Polizei an und gibt biometrische Daten ab, innerhalb von 30 Tagen nach Ausstellung des Visums, wenn eines erforderlich war, um die biometrische Aufenthaltskarte zu erhalten.",
    },
    {
      title: "Arbeit aufnehmen und Änderungen melden",
      actor: "Both",
      detail:
        "Die Arbeit darf erst nach Ausstellung der Erlaubnis und nur für den benannten Arbeitgeber und Beruf aufgenommen werden. Die Beendigung des Arbeitsverhältnisses muss der Polizei innerhalb von 15 Tagen gemeldet werden. Ein Wechsel des Arbeitgebers oder des Berufs erfordert eine neue HZZ-Prüfung, sofern der Beruf nicht auf der Mangelberufsliste steht.",
    },
  ],
  employerDocs: [
    { label: "Antrag auf Arbeitsmarktprüfung beim HZZ und Mitteilung über das Ergebnis" },
    { label: "Antrag auf Aufenthalts- und Arbeitserlaubnis (Obrazac 2a) oder Blaue Karte EU (Obrazac 4a), ausgefüllt und unterschrieben" },
    { label: "Von Arbeitgeber und Arbeitnehmer unterschriebener Arbeitsvertrag", note: "Dient bei der ersten Erlaubnis als Nachweis der Mittel zum Lebensunterhalt" },
    { label: "Nachweis, dass der Arbeitgeber die Voraussetzungen für die HZZ-Stellungnahme erfüllt: eingetragene Tätigkeit, keine Steuer- oder Beitragsschulden, mindestens ein kroatischer oder EWR-Vollzeitbeschäftigter mit unbefristetem Vertrag in den letzten 6 Monaten", note: "Das HZZ kann eine steuerliche Unbedenklichkeitsbescheinigung verlangen" },
    { label: "Nachweis der Zahlung der Verwaltungsgebühr für die Erlaubnis und die Aufenthaltskarte" },
  ],
  employeeDocs: [
    { label: "Kopie eines gültigen Reisedokuments" },
    { label: "Farbfoto (30 x 35 mm)" },
    { label: "Bescheinigung über das Fehlen strafrechtlicher Verurteilungen aus dem Heimatstaat oder einem Staat mit Aufenthalt von mehr als 1 Jahr, legalisiert", note: "Nur bei der ersten Erlaubnis erforderlich" },
    { label: "Nachweis der schulischen oder beruflichen Qualifikation" },
    { label: "Anerkennung der Berufsqualifikation bei reglementierten Berufen" },
    { label: "Nachweis einer Krankenversicherung", note: "Beim Erstantrag mit Vertrag bei einem kroatischen Arbeitgeber nicht erforderlich; bei der Verlängerung mit der HZZO-Karte oder dem HZZO-Formular erforderlich" },
    { label: "Sechs Gehaltsabrechnungen unmittelbar vor dem Antrag, bei Verlängerungen" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Für hochqualifizierte Arbeitnehmer mit Hochschulbildung und einem Vertrag von mindestens 1 Jahr mit einem Gehalt von mindestens dem 1,5-Fachen des durchschnittlichen Bruttojahresgehalts. Keine Arbeitsmarktprüfung und keine HZZ-Stellungnahme; gültig 2 Jahre; das Gesetz sieht eine Entscheidungsfrist von 60 Tagen vor." },
    { name: "Kategorien nach Artikel 110 (Schlüsselpersonal, unternehmensintern transferierte Arbeitnehmer, Dienstleistungserbringer)", summary: "Aufenthalts- und Arbeitserlaubnis ohne Arbeitsmarktprüfung und ohne HZZ-Stellungnahme, direkt bei der Polizeiverwaltung beantragt. Umfasst Inhaber eines Unternehmens oder Gewerbes mit einem Anteil von mindestens 51 Prozent." },
    { name: "Vorübergehender Aufenthalt digitaler Nomaden", summary: "Für Fernarbeitende, die bei einem nicht in Kroatien registrierten Unternehmen beschäftigt sind oder ein solches führen und nicht für kroatische Arbeitgeber tätig sind. Gewährt für bis zu 18 Monate mit einer monatlichen Mittelschwelle von 2,5 durchschnittlichen Nettogehältern; keine Arbeitserlaubnis." },
    { name: "Bescheinigung über die Arbeitsanmeldung", summary: "Potvrda o prijavi rada für kurze Einsätze von bis zu 90 Tagen (oder 30 Tagen pro Kalenderjahr für einige Kategorien) ohne Aufenthalts- und Arbeitserlaubnis." },
  ],
  watchOuts: [
    "Das Ergebnis der Arbeitsmarktprüfung verfällt: Der Antrag auf die Erlaubnis muss innerhalb von 90 Tagen nach der HZZ-Mitteilung gestellt werden, sonst muss die Prüfung wiederholt werden. Das HZZ gibt negative Stellungnahmen ab, wenn vermittelte Kandidaten nicht zum Gespräch eingeladen wurden oder wenn Arbeitgebervoraussetzungen wie die Steuerehrlichkeit oder das Erfordernis eines kroatischen Beschäftigten nicht erfüllt sind.",
    "Der E-Mail-Kanal der Polizei und die direkte Einreichung sind nur für Erlaubnisse ohne Prüfung oder Stellungnahme, für Verlängerungen und für Fälle nach Artikel 110 vorgesehen. Ein dort eingereichter HZZ-abhängiger Antrag bleibt liegen; er muss über die HZZ-Plattform gehen.",
    "Die Familienzusammenführung für Inhaber einer auf der HZZ-Stellungnahme beruhenden Erlaubnis unterliegt einer Wartefrist von 1 Jahr, und Zeiten als Saisonarbeiter, Trainee, ICT oder Dienstleistungserbringer werden nicht auf den langfristigen Aufenthalt angerechnet.",
  ],
};
