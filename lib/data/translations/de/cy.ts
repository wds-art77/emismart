import type { CountryDetails } from "../types";

export const cy: CountryDetails = {
  authorities: [
    "Department of Labour des Ministeriums für Arbeit und Sozialversicherung und seine District Labour Offices: Arbeitsmarktprüfung, Genehmigung und Abstempelung des Vertrags",
    "Civil Registry and Migration Department (CRMD), Innenministerium: Einreiseerlaubnis sowie befristete Aufenthalts- und Beschäftigungserlaubnis",
    "District Aliens and Immigration Units der zyprischen Polizei: Entgegennahme der Anträge und Einwanderungskontrolle",
    "Zyprische Auslandsvertretungen: Visa für visumpflichtige Staatsangehörige",
    "Verwaltungsgericht: Rechtsbehelfe gegen Entscheidungen des CRMD",
  ],
  legalBasis: [
    "Aliens and Immigration Law (Cap. 105) (Ausländer- und Einwanderungsgesetz) und die Aliens and Immigration Regulations von 1972 (Reg. 242/72), in der geänderten Fassung",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Kriterien für die Beschäftigung von Drittstaatsangehörigen, zwischen den Sozialpartnern vereinbart und vom Ministerrat genehmigt (Beschluss vom 6. Dezember 1991, aktualisiert durch spätere Beschlüsse des Ministerrats)",
  ],
  steps: [
    {
      title: "Stelle beim District Labour Office melden",
      actor: "Employer",
      detail:
        "Der Arbeitgeber meldet die Stelle beim District Labour Office des Department of Labour. Das Büro prüft die Kriterien und versucht, die Stelle vom lokalen und EU-Arbeitsmarkt zu besetzen.",
    },
    {
      title: "Genehmigung des Department of Labour beantragen",
      actor: "Employer",
      detail:
        "Bleibt die Stelle unbesetzt, beantragt der Arbeitgeber die Beschäftigung eines namentlich benannten Nicht-EU-Staatsangehörigen. Das Department prüft den Antrag anhand der genehmigten Kriterien und der zugelassenen Sektoren.",
    },
    {
      title: "Vertrag unterschreiben und abstempeln lassen",
      actor: "Both",
      detail:
        "Nach einer positiven Antwort wird der Arbeitsvertrag nach dem vorgeschriebenen Muster von Arbeitgeber und Arbeitnehmer unterschrieben und vom Department of Labour abgestempelt. Das Original und die abgestempelten Kopien werden für die Migrationsstufe benötigt.",
    },
    {
      title: "Antrag auf Einreiseerlaubnis beim CRMD",
      actor: "Employer",
      detail:
        "Der Arbeitgeber beantragt die Einreise- und Aufenthaltserlaubnis beim CRMD oder über die District Aliens and Immigration Units der Polizei und fügt den abgestempelten Vertrag, eine Bankgarantie zur Deckung möglicher Rückführungskosten, den Pass des Arbeitnehmers, die Strafregisterbescheinigung und die ärztlichen Bescheinigungen bei.",
    },
    {
      title: "Einreiseerlaubnis und Reise",
      actor: "Authority",
      detail:
        "Das CRMD stellt die Einreiseerlaubnis aus. Visumpflichtige Staatsangehörige holen das Visum vor der Reise bei einer zyprischen Auslandsvertretung ein.",
    },
    {
      title: "Registrierung und Ausstellung der Erlaubnis nach der Ankunft",
      actor: "Employee",
      detail:
        "Nach der Ankunft erscheint der Arbeitnehmer beim CRMD oder der Einwanderungsstelle des Bezirks, um in das Ausländerregister eingetragen zu werden, die ärztlichen Untersuchungen und die Biometrie abzuschließen und die befristete Aufenthalts- und Beschäftigungserlaubnis zu erhalten.",
    },
  ],
  employerDocs: [
    { label: "Stellenmeldung und Antrag beim District Labour Office" },
    { label: "Arbeitsvertrag nach dem Muster des Department of Labour, unterschrieben und abgestempelt, mit abgestempelten Kopien" },
    { label: "Genehmigung des Department of Labour, die dem Arbeitgeber die Beschäftigung von Drittstaatsangehörigen erlaubt" },
    { label: "Original der Bankgarantie zur Deckung möglicher Rückführungskosten", note: "Die Checklisten des CRMD legen die erforderliche Laufzeit der Garantie fest" },
    { label: "Nachweis einer geeigneten Unterkunft, die dem Arbeitnehmer bereitgestellt oder vermittelt wird" },
    { label: "Arbeitgeberhaftpflichtversicherung und Erklärung zur Postanschrift des Arbeitnehmers, soweit das CRMD-Formular sie verlangt" },
  ],
  employeeDocs: [
    { label: "Gültiger Pass" },
    { label: "Strafregisterbescheinigung aus dem Herkunfts- oder Aufenthaltsstaat" },
    { label: "Bescheinigungen über ärztliche Untersuchungen, einschließlich Bluttests und Röntgenaufnahme des Brustkorbs, wie in der CRMD-Checkliste aufgeführt" },
    { label: "Krankenversicherung für die Dauer des Aufenthalts" },
    { label: "Passfotos" },
    { label: "Nachweise über Qualifikationen oder Berufserfahrung, soweit die Kriterien des Department of Labour sie verlangen" },
    { label: "Amtliche Übersetzungen und Beglaubigung aller ausländischen Dokumente", note: "Das CRMD verlangt, dass Dokumente amtlich übersetzt und ordnungsgemäß beglaubigt sind" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Eingeführt durch eine Änderung des Aliens and Immigration Law von 2024, mit Antragsannahme seit 2025 für hochqualifizierte Arbeitnehmer in bestimmten Sektoren mit einem Gehalt über der nationalen Schwelle. Das Department of Labour prüft den Vertrag vor dem Antrag beim CRMD. Bestätigen Sie den aktuellen Anwendungsbereich auf der CRMD-Seite." },
    { name: "Unternehmen mit ausländischer Beteiligung (Business Facilitation Unit)", summary: "Berechtigte Unternehmen in ausländischem Eigentum, die bei der Business Facilitation Unit registriert sind, können Führungskräfte und Schlüsselpersonal aus Drittstaaten oberhalb festgelegter Gehaltsstufen über das CRMD beschäftigen, ohne das Standardverfahren des Department of Labour. Die Erlaubnisse werden für bis zu 2 Jahre ausgestellt und sind verlängerbar." },
    { name: "Unternehmensinterner Transfer", summary: "Führungskräfte, Spezialisten und Trainees, die innerhalb eines Konzerns nach den ICT-Regeln transferiert werden, bearbeitet von der Zentrale des CRMD." },
    { name: "Visum für digitale Nomaden", summary: "Eine kontingentierte Regelung für Fernarbeitende, die im Ausland beschäftigt sind und nicht für zyprische Arbeitgeber tätig sind. Bestätigen Sie die aktuelle Verfügbarkeit auf der CRMD-Seite." },
  ],
  watchOuts: [
    "Nichts kommt in Gang, bevor das Department of Labour den Antrag genehmigt und den Vertrag abgestempelt hat. Stellen außerhalb der zugelassenen Sektoren oder Berufe werden in dieser Stufe abgelehnt.",
    "Die Akte für die Einreiseerlaubnis benötigt eine Bankgarantie für die Rückführung, ärztliche Bescheinigungen und amtlich übersetzte, beglaubigte Dokumente. Fehlende oder nicht beglaubigte Übersetzungen sind ein häufiger Grund für Verzögerungen.",
    "Die Erlaubnis ist an den Arbeitgeber und den Sektor gebunden. Arbeitgeberwechsel sind auf 3 begrenzt, und jeder benötigt eine Freigabevereinbarung und die Genehmigung des Department of Labour; nach dem dritten Wechsel wird die Erlaubnis nicht verlängert.",
  ],
};
