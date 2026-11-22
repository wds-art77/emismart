import type { CountryDetails } from "../types";

export const hu: CountryDetails = {
  authorities: [
    "Nationale Generaldirektion für Ausländerpolizei (Országos Idegenrendészeti Főigazgatóság, OIF) und ihre Regionaldirektionen: Entscheidung und Kartenausgabe",
    "Komitatsregierungsamt (kormányhivatal) als Beschäftigungsbehörde: verbindliche Stellungnahme zur Beschäftigung, einschließlich der Arbeitsmarktprüfung, soweit anwendbar",
    "Ungarische Botschaften und Konsulate: Entgegennahme von Anträgen im Ausland und Ausstellung des Visums zur Abholung der Aufenthaltserlaubnis",
    "Enter Hungary (enterhungary.gov.hu): elektronische Antragsplattform für Antragsteller und Arbeitgeber",
  ],
  legalBasis: [
    "2023. évi XC. törvény a harmadik országbeli állampolgárok beutazására és tartózkodására vonatkozó általános szabályokról (Gesetz XC von 2023), insbesondere §§ 28, 30 bis 31, 36, 168, 173 und 242",
    "Regierungsverordnung 35/2024 (II. 29.) zur Durchführung des Gesetzes XC von 2023 sowie die Verordnungen mit den Listen der zugelassenen Staatsangehörigkeiten und der ausgeschlossenen Berufe",
    "Regierungsverordnung 445/2013 (XI. 28.) über von der Arbeitserlaubnispflicht befreite Tätigkeiten",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Prüfen, welche Erlaubnisart und welche Staatsangehörigkeitsregeln gelten",
      actor: "Employer",
      detail:
        "Der Arbeitgeber vergewissert sich, dass die Staatsangehörigkeit des Arbeitnehmers auf der per Regierungsverordnung festgelegten Liste für Beschäftigungserlaubnisse steht, dass der Beruf nicht ausgeschlossen ist, ob die Ungarn-Karte oder die Gastarbeiter-Aufenthaltserlaubnis besser passt und dass der Arbeitgeber etwaige Registrierungsanforderungen erfüllt.",
    },
    {
      title: "Vorvereinbarung oder Arbeitsvertrag unterzeichnen",
      actor: "Both",
      detail:
        "Für den Antrag sind eine Vorvereinbarung über die Begründung eines Arbeitsverhältnisses oder ein unterzeichneter Vertrag erforderlich, zusammen mit jeder Qualifikation, die die Stelle verlangt.",
    },
    {
      title: "Arbeitskräfteanforderung einreichen und Antrag stellen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber kann bei der staatlichen Arbeitsverwaltung eine Arbeitskräfteanforderung einreichen. Der Antrag wird dann entweder vom Arbeitnehmer beim Konsulat oder vom Arbeitgeber über Enter Hungary mit schriftlicher Zustimmung des Arbeitnehmers gestellt; die Gebühr wird bei der Antragstellung gezahlt.",
    },
    {
      title: "Stellungnahme der Beschäftigungsbehörde und Entscheidung",
      actor: "Authority",
      detail:
        "Die Regionaldirektion holt die verbindliche Stellungnahme des Komitatsregierungsamtes zur Beschäftigung ein, die, sofern keine Befreiung gilt, die Arbeitsmarktprüfung umfasst, und entscheidet über Aufenthalt und Arbeit in einer kombinierten Erlaubnis.",
    },
    {
      title: "Visum und Einreise",
      actor: "Employee",
      detail:
        "Hat der Arbeitnehmer aus dem Ausland beantragt, stellt das Konsulat ein Visum zur Abholung der Aufenthaltserlaubnis aus. Der Arbeitnehmer reist nach Ungarn ein und muss die Erlaubnis vor Ablauf des Visums bei der Regionaldirektion erhalten.",
    },
    {
      title: "Aufenthaltserlaubnis abholen und Adresse anmelden",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer gibt biometrische Daten ab, soweit noch nicht erfasst, holt die Aufenthaltskarte bei der Regionaldirektion ab und meldet die ungarische Unterkunft. Die Krankenversicherung ergibt sich automatisch aus der angemeldeten Beschäftigung.",
    },
  ],
  employerDocs: [
    { label: "Vorvereinbarung über die Begründung eines Arbeitsverhältnisses oder unterzeichneter Arbeitsvertrag" },
    { label: "Schriftliche Zustimmung des Arbeitnehmers, wenn der Arbeitgeber über Enter Hungary einreicht" },
    { label: "Arbeitskräfteanforderung an die staatliche Arbeitsverwaltung, wenn die Arbeitsmarktprüfung gilt" },
    { label: "Nachweis der Registrierung als bevorzugter Arbeitgeber oder qualifiziertes Zeitarbeitsunternehmen, für die Gastarbeiter-Aufenthaltserlaubnis" },
    { label: "Handelsregistereintragung und Zugang des Arbeitgebers zum Unternehmensportal von Enter Hungary" },
  ],
  employeeDocs: [
    { label: "Antragsformular, in Papierform beim Konsulat oder elektronisch in Enter Hungary" },
    { label: "Reisedokument, das mindestens 3 Monate über den geplanten Aufenthalt hinaus gültig ist" },
    { label: "Nachweis einer angemessenen Unterkunft in Ungarn" },
    { label: "Nachweis ausreichender Mittel, in der Regel der Arbeitsvertrag oder die Vorvereinbarung" },
    { label: "Beglaubigter Qualifikationsnachweis mit Übersetzung, wenn die Stelle eine Qualifikation verlangt" },
    { label: "Nachweis einer Krankenversicherung, erfüllt durch die angemeldete Beschäftigung" },
    { label: "Passfoto und biometrische Daten" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Für Hochqualifizierte mit Hochschulabschluss und einem Gehalt über der nationalen Schwelle; über dieselben Kanäle beantragt, mit EU-Mobilitätsrechten." },
    { name: "Ungarn-Karte (Magyar Kártya)", summary: "Für Inhaber eines Hochschulabschlusses in Beschäftigung oder Unternehmensleitung sowie für gelistete Kategorien wie Berufssportler und darstellende Künstler. Gültig bis zu 3 Jahre und um jeweils 3 Jahre verlängerbar, ohne die 3-Jahres-Obergrenze." },
    { name: "Gastarbeiter-Aufenthaltserlaubnis (vendégmunkás-tartózkodási engedély)", summary: "Für geringer qualifizierte Arbeit bei einem registrierten bevorzugten Arbeitgeber oder qualifizierten Zeitarbeitsunternehmen, beschränkt auf per Verordnung festgelegte Staatsangehörigkeiten und Berufe. Bis zu 2 Jahre plus 1 Jahr, insgesamt 3 Jahre." },
    { name: "Nationale Karte (Nemzeti Kártya)", summary: "Für Staatsangehörige von per Regierungsverordnung gelisteten Ländern, die in Ungarn beschäftigt sind oder ein Unternehmen führen. Ausgestellt für bis zu 2 Jahre und um jeweils bis zu 3 Jahre verlängerbar." },
  ],
  watchOuts: [
    "Die Berechtigung ist listenbasiert. Staatsangehörigkeitslisten und Listen ausgeschlossener Berufe ändern sich per Verordnung, und die jährliche Obergrenze für Beschäftigungs- und Gastarbeitererlaubnisse kann den Weg schließen; prüfen Sie die aktuellen Verordnungen vor der Rekrutierung.",
    "Die Beschäftigungserlaubnis unterliegt einer festen 3-Jahres-Obergrenze. Ein Arbeitnehmer, der länger bleiben möchte, muss rechtzeitig zur Ungarn-Karte, zur Blauen Karte oder in einen anderen Status wechseln, und die Erlaubnisart kann innerhalb Ungarns während der Gültigkeit nur geändert werden, soweit das Gesetz dies zulässt.",
    "Der Verlust des Arbeitsplatzes oder ein Arbeitgeberwechsel erfordert einen neuen Antrag innerhalb einer kurzen Frist (das EU-Zuwanderungsportal nennt 5 Tage), und Verlängerungen müssen vor Ablauf über Enter Hungary beantragt werden (das EU-Zuwanderungsportal nennt mindestens 30 Tage vorher).",
  ],
};
