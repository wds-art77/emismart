import type { CountryDetails } from "../types";

export const ie: CountryDetails = {
  authorities: [
    "Department of Enterprise, Tourism and Employment (DETE), Employment Permits Section: Employment Permits Online, Entscheidungen und Überprüfungen",
    "Immigration Service Delivery (ISD), Department of Justice, Home Affairs and Migration: Visa, Aufenthaltsgenehmigung und Registrierung für die Irish Residence Permit",
    "Garda National Immigration Bureau (GNIB): Registrierung bei Garda-Dienststellen außerhalb Dublins",
    "Department of Social Protection, JobsIreland/EURES: Ausschreibung der Stelle für den Labour Market Needs Test",
    "Irische Botschaften und Konsulate: Anträge auf das Visum D für den langfristigen Aufenthalt",
  ],
  legalBasis: [
    "Employment Permits Act 2024, in Kraft seit dem 2. September 2024 (Commencement Order S.I. No. 443 of 2024)",
    "Employment Permits Regulations 2024 (S.I. No. 444 of 2024), die die Erlaubnisarten, die Gehaltsschwellen, die Critical Skills und Ineligible Occupations Lists und den Labour Market Needs Test festlegen",
    "Protokoll Nr. 21 über die Position Irlands im Anhang der EU-Verträge: Irland hat sich weder für die Richtlinie 2011/98/EU noch für die Richtlinie (EU) 2024/1233 entschieden",
  ],
  steps: [
    {
      title: "Voraussetzungen prüfen und Arbeitgeberkonto einrichten",
      actor: "Employer",
      detail:
        "Der Arbeitgeber vergewissert sich, dass der Beruf nicht auf der Ineligible Occupations List steht, dass das Gehalt die Schwelle der Regulations erreicht und dass die 50:50-EWR-Belegschaftsregel erfüllt ist. Das Konto bei Employment Permits Online erfordert die Registrierung bei Revenue und die CRO-Nummer.",
    },
    {
      title: "Labour Market Needs Test durchführen",
      actor: "Employer",
      detail:
        "Sofern nicht befreit, wird die Stelle 28 aufeinanderfolgende Tage ohne Änderung auf JobsIreland/EURES und einer zweiten Online-Plattform ausgeschrieben. Die JobsIreland-Referenznummer wird in den Antrag aufgenommen.",
    },
    {
      title: "Vertrag unterzeichnen und online beantragen",
      actor: "Both",
      detail:
        "Der Vertrag muss von beiden Parteien unterzeichnet sein. Der Arbeitgeber oder der Arbeitnehmer reicht den Antrag mindestens 12 Wochen vor dem Beschäftigungsbeginn bei Employment Permits Online ein, fügt Stellenbeschreibung, Qualifikationen, Einwanderungshistorie und LMNT-Nachweise bei und zahlt die Gebühr. Unvollständige Anträge, die im System verbleiben, werden gelöscht.",
    },
    {
      title: "Bearbeitung in Eingangsreihenfolge",
      actor: "Authority",
      detail:
        "DETE reiht den Antrag nach Eingangsdatum ein, kann weitere Informationen anfordern, die innerhalb von 28 Tagen zurückzusenden sind, und erteilt die Erlaubnis oder lehnt ab. Eine Ablehnung kann innerhalb von 28 Tagen einem höherrangigen Beamten zur Überprüfung vorgelegt werden.",
    },
    {
      title: "Erlaubnis erteilt und Visum D, soweit erforderlich",
      actor: "Employee",
      detail:
        "Die Erlaubnis wird dem Arbeitnehmer ausgestellt, eine Kopie geht an den Arbeitgeber. Visumpflichtige Staatsangehörige beantragen online über die irische Botschaft ein Beschäftigungsvisum D für den langfristigen Aufenthalt und fügen die Erlaubnis bei.",
    },
    {
      title: "Ankunft und Registrierung für die Irish Residence Permit",
      actor: "Employee",
      detail:
        "An der Grenze erteilt der Einwanderungsbeamte die Einreiseerlaubnis und weist den Arbeitnehmer an, sich zu registrieren. Innerhalb von 90 Tagen registriert sich der Arbeitnehmer bei ISD in Dublin oder bei der örtlichen Garda-Registrierungsstelle, zahlt die Registrierungsgebühr und erhält die Karte Irish Residence Permit per Post.",
    },
    {
      title: "Verlängerung und Änderungen",
      actor: "Both",
      detail:
        "Die Verlängerung kann bis zu 4 Monate vor Ablauf beantragt werden. Der Arbeitgeber muss DETE innerhalb der festgelegten Fristen über Entlassung, Ausscheiden oder Änderungen der Bedingungen informieren, und die Aufenthaltsgenehmigung wird gesondert bei ISD vor ihrem Ablauf verlängert.",
    },
  ],
  employerDocs: [
    { label: "Arbeitgeberkonto bei Employment Permits Online mit Revenue-Registrierung und Nummer des Companies Registration Office" },
    { label: "Von beiden Parteien unterzeichneter Arbeitsvertrag" },
    { label: "Vollständige Stellenbeschreibung mit Aufgaben, Arbeitszeit, Dauer, Ort und Vergütung" },
    { label: "Nachweise zum Labour Market Needs Test: JobsIreland/EURES-Referenz und Kopie der zweiten Online-Anzeige oder die Grundlage für eine Befreiung" },
    { label: "Belegschaftsangaben zum Nachweis der Einhaltung der 50:50-EWR-Regel oder Unterstützungsschreiben von Enterprise Ireland/IDA Ireland für Start-ups" },
    { label: "Vor der Einreichung ausgefüllte Erlaubnis-Checkliste" },
  ],
  employeeDocs: [
    { label: "Gültiger Reisepass" },
    { label: "Nachweise der für die Stelle erforderlichen Qualifikationen, Fähigkeiten und Erfahrung" },
    { label: "Angaben zur Einwanderungshistorie und zur aktuellen irischen Aufenthaltsgenehmigung, falls bereits im Staat" },
    { label: "Kopie des unterzeichneten Arbeitsvertrags" },
    { label: "Antrag auf das Visum D für den langfristigen Aufenthalt mit der Beschäftigungserlaubnis, für visumpflichtige Staatsangehörige" },
    { label: "Original der Beschäftigungserlaubnis und Reisepass für die Registrierung bei ISD" },
    { label: "Zahlung der von ISD festgelegten Registrierungsgebühr bei Abholung der Irish Residence Permit", note: "Bestätigen Sie die aktuelle Gebühr auf der ISD-Website" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Nicht verfügbar: Irland nimmt nicht an der Richtlinie über die Blaue Karte EU teil. Die Critical Skills Employment Permit ist das nationale Gegenstück." },
    { name: "Critical Skills Employment Permit", summary: "Berufe auf der Critical Skills Occupations List oder jede zulässige Stelle über der höheren Vergütungsschwelle, mit einem Vertrag von mindestens 2 Jahren. Kein Labour Market Needs Test, sofortiger Familiennachzug und eine Stamp-4-Genehmigung nach Ablauf der Erlaubnis." },
    { name: "Intra-Company Transfer Employment Permit", summary: "Leitende Führungskräfte, Schlüsselpersonal und Trainees, die von einer ausländischen Niederlassung zur irischen Einheit versetzt werden, mit eigener Bearbeitungswarteschlange." },
    { name: "Atypical Working Scheme", summary: "Kurzfristige Genehmigung von ISD für Arbeit von bis zu 90 Tagen, die außerhalb des Systems der Beschäftigungserlaubnisse liegt." },
  ],
  watchOuts: [
    "Die Vorlaufzeit von 12 Wochen ist eine feste Regel, und die Warteschlange läuft strikt nach Eingangsdatum; ein unvollständiger Antrag rückt ans Ende der Warteschlange oder wird aus dem Portal gelöscht.",
    "Die JobsIreland-Anzeige muss 28 Tage ohne Änderung laufen, und der Antrag muss innerhalb von 90 Tagen nach der Erstveröffentlichung gestellt werden, sonst muss der Labour Market Needs Test wiederholt werden.",
    "Eine Beschäftigungserlaubnis ist keine Aufenthaltsgenehmigung. Der Arbeitnehmer benötigt gegebenenfalls weiterhin ein Visum D und muss sich innerhalb von 90 Tagen bei ISD registrieren; eine verspätete Registrierung kann spätere Anträge auf Daueraufenthalt oder Staatsbürgerschaft beeinträchtigen.",
  ],
};
