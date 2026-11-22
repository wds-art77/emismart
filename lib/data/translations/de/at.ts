import type { CountryDetails } from "../types";

export const at: CountryDetails = {
  authorities: [
    "Aufenthaltsbehörde (Niederlassungsbehörde): Bezirkshauptmannschaft oder Magistrat, MA 35 in Wien, die Niederösterreichische Landesregierung in Niederösterreich und die Steiermärkische Landesregierung in Graz",
    "Arbeitsmarktservice (AMS), regionale Geschäftsstelle am Sitz des Arbeitgebers: Punkteprüfung, Gehaltsprüfung und Arbeitsmarktprüfung",
    "Österreichische Vertretungsbehörden im Ausland (Netz des BMEIA): Entgegennahme der Anträge und Erteilung des Visums D",
    "Bundesministerium für Inneres (BMI): Formulare, Arbeitgebererklärung und Aufenthaltsrecht",
  ],
  legalBasis: [
    "Niederlassungs- und Aufenthaltsgesetz (NAG), insbesondere § 41, und die NAG-Durchführungsverordnung",
    "Ausländerbeschäftigungsgesetz (AuslBG), insbesondere §§ 12b und 20d, mit der jährlichen Fachkräfteverordnung, die die Mangelberufe auflistet",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Kategorie wählen und Arbeitgebererklärung unterschreiben",
      actor: "Employer",
      detail:
        "Der Arbeitgeber bestätigt, welche Kategorie der Rot-Weiß-Rot – Karte auf den Arbeitnehmer passt (Mangelberuf, sonstige Schlüsselkraft, Absolvent, besonders Hochqualifizierte), und füllt die Arbeitgebererklärung des BMI aus, in der Stelle, Bruttogehalt und Arbeitsbedingungen angegeben sind.",
    },
    {
      title: "Antrag einreichen",
      actor: "Both",
      detail:
        "Der Arbeitnehmer reicht persönlich bei der österreichischen Vertretung im Ausland ein, oder der Arbeitgeber reicht bei der Aufenthaltsbehörde in Österreich ein. Die Akte enthält die Arbeitgebererklärung, den Pass, ein Foto, Nachweise über Qualifikationen, Berufserfahrung und Sprachkenntnisse sowie die Antragsgebühr.",
    },
    {
      title: "Weiterleitung an das AMS",
      actor: "Authority",
      detail:
        "Die Vertretungs- oder Aufenthaltsbehörde leitet den Antrag an die für den Sitz des Arbeitgebers zuständige regionale Geschäftsstelle des AMS weiter.",
    },
    {
      title: "Prüfung durch das AMS",
      actor: "Authority",
      detail:
        "Das AMS prüft die Punkte, ob die Entlohnung das gesetzliche Minimum der Kategorie erreicht und bei Schlüsselkräften, ob eine gleich qualifizierte vorgemerkte arbeitsuchende Person verfügbar ist. Es meldet das Ergebnis der Aufenthaltsbehörde.",
    },
    {
      title: "Entscheidung und Visumanweisung",
      actor: "Authority",
      detail:
        "Die Aufenthaltsbehörde prüft die allgemeinen Voraussetzungen (Krankenversicherung, kein Einreiseverbot, keine Gefährdung der öffentlichen Ordnung) und entscheidet innerhalb von 8 Wochen. Ist ein Visum erforderlich, weist sie die Vertretungsbehörde an, ein Visum D für die Einreise und die Abholung der Karte zu erteilen.",
    },
    {
      title: "Visum D und Einreise",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer beantragt das Visum D innerhalb von 3 Monaten nach der Mitteilung und reist nach Österreich. Visumfreie Staatsangehörige reisen direkt ein.",
    },
    {
      title: "Karte abholen und Arbeit aufnehmen",
      actor: "Employee",
      detail:
        "Die Karte wird persönlich bei der Aufenthaltsbehörde nach Terminvereinbarung innerhalb von 3 Monaten nach der Einreise abgeholt. Die Arbeit darf aufgenommen werden, sobald die Karte ausgehändigt wurde.",
    },
  ],
  employerDocs: [
    { label: "Arbeitgebererklärung auf dem Formular des BMI zur Bestätigung der Beschäftigungsbedingungen" },
    { label: "Verbindliches Arbeitsplatzangebot oder unterschriebener Arbeitsvertrag mit Angabe des Bruttomonatsgehalts einschließlich Sonderzahlungen" },
    { label: "Nachweis, dass die Entlohnung das gesetzliche Minimum der Kategorie erreicht, oder bei Mangelberufen den kollektivvertraglichen Mindestlohn zuzüglich betriebsüblicher Überzahlung" },
    { label: "Angaben zur Stelle für die Arbeitsmarktprüfung des AMS, wenn die Kategorie eine solche verlangt" },
    { label: "Bestätigung, dass Englisch die vorherrschende Unternehmenssprache ist, wenn dafür Bonuspunkte beansprucht werden" },
  ],
  employeeDocs: [
    { label: "Gültiges Reisedokument" },
    { label: "Passfoto 45 x 35 mm, nicht älter als 6 Monate" },
    { label: "Nachweis einer alle Risiken in Österreich abdeckenden Krankenversicherung" },
    { label: "Strafregisterauszug aus dem Herkunftsstaat oder dem Staat des langjährigen Aufenthalts, idealerweise nicht älter als 3 Monate", note: "Wird von den meisten Behörden im Einzelfall verlangt" },
    { label: "Qualifikationsnachweise: Berufsausbildungszeugnis, Hochschulreifezeugnis oder Abschlussurkunde mit Nachweis des Status der Einrichtung" },
    { label: "Berufserfahrung: Dienstzeugnisse und Arbeitgeberbestätigungen" },
    { label: "Sprachzertifikate auf dem beanspruchten GER-Niveau, nicht älter als 5 Jahre" },
    { label: "Beglaubigte Übersetzungen von Dokumenten, die nicht auf Deutsch oder Englisch verfasst sind, soweit erforderlich mit Apostille oder legalisiert" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Hochschulabschluss von mindestens 3 Jahren oder, für IKT-Fachkräfte, 3 Jahre einschlägige Berufserfahrung, ein Arbeitsplatzangebot von mindestens 6 Monaten und ein Gehalt über der jährlichen Schwelle auf Basis des durchschnittlichen Bruttojahreseinkommens von Vollzeitbeschäftigten. Arbeitsmarktprüfung durch das AMS, kein Punktesystem, gültig 24 Monate." },
    { name: "Rot-Weiß-Rot – Karte für besonders Hochqualifizierte", summary: "Mindestens 70 von 100 Punkten. Ein 6-monatiges Visum zur Arbeitssuche erlaubt die Einreise zur Stellensuche; sobald eine passende Stelle gefunden ist, wird die Karte ohne Arbeitsmarktprüfung beantragt." },
    { name: "Rot-Weiß-Rot – Karte für Fachkräfte in Mangelberufen", summary: "Berufsausbildung in einem Beruf auf der Liste der jährlichen Fachkräfteverordnung, mindestens 55 Punkte und Entlohnung nach dem kollektivvertraglichen Mindestlohn. Keine Arbeitsmarktprüfung." },
    { name: "Aufenthaltsbewilligung ICT", summary: "Führungskräfte, Spezialisten und Trainees, die innerhalb eines Konzerns zu einer österreichischen Niederlassung transferiert werden. Muss immer vom Ausland aus beantragt werden." },
  ],
  watchOuts: [
    "Die 8-Wochen-Frist für die Entscheidung und die 45-Tage-Frist für einen vorläufigen Arbeitsbeginn nach einem Arbeitgeberwechsel laufen nur, solange die Akte vollständig ist. Fehlende Zeugnisse, Übersetzungen oder die Arbeitgebererklärung setzen sie aus.",
    "Die Karte ist an einen Arbeitgeber gebunden. Ein neuer Arbeitgeber bedeutet einen Zweckänderungsantrag, und der Arbeitnehmer darf erst nach 45 Tagen vorläufig beginnen (30 Tage bei Inhabern der Blauen Karte).",
    "Die Einreichung in Österreich während eines visumfreien Aufenthalts verlängert das Aufenthaltsrecht nicht automatisch. Die amtlichen Seiten beschreiben die Bedingungen, unter denen ein rechtzeitiger Antrag es dem Arbeitnehmer erlaubt, die Entscheidung in Österreich abzuwarten; klären Sie dies daher mit der Aufenthaltsbehörde, bevor die visumfreie Zeit endet.",
  ],
};
