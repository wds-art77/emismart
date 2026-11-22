import type { CountryDetails } from "../types";

export const pt: CountryDetails = {
  authorities: [
    "AIMA, Agência para a Integração, Migrações e Asilo: Aufenthaltserlaubnisse und Verlängerungen",
    "Portugiesische Botschaften und Konsulate (Ministério dos Negócios Estrangeiros): Aufenthaltsvisa",
    "IEFP, Instituto do Emprego e da Formação Profissional: öffentliches Stellenangebotssystem",
    "Segurança Social: Anmeldung des Arbeitnehmers, eine Voraussetzung für die Aufenthaltserlaubnis",
    "ACT, Autoridade para as Condições do Trabalho: Arbeitsinspektion",
  ],
  legalBasis: [
    "Lei n.º 23/2007, de 4 de julho (regime jurídico de entrada, permanência, saída e afastamento de estrangeiros), in geänderter Fassung, Artikel 52, 58, 59, 75, 77, 82 und 88",
    "Decreto Regulamentar n.º 84/2007, de 5 de novembro, zur Durchführung der Lei de Estrangeiros",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Stellenangebot in Portugal sichern",
      actor: "Both",
      detail:
        "Der Arbeitgeber stellt einen Arbeitsvertrag, eine Vertragszusage oder eine individuelle Interessenserklärung zur Einstellung des Arbeitnehmers aus. Für reglementierte Berufe muss der Arbeitnehmer zusätzlich die anerkannte Qualifikation besitzen.",
    },
    {
      title: "Aufenthaltsvisum beim Konsulat beantragen",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer beantragt das Visum persönlich beim portugiesischen Konsulat des Wohnsitzlandes mit Vertrag, Reisepass, Strafregisterauszug, Nachweis der Mittel, Reiseversicherung und Unterkunftsnachweis. Über das Visum wird innerhalb von 60 Tagen entschieden; es gilt 4 Monate mit zwei Einreisen.",
    },
    {
      title: "Einreise nach Portugal und Anmeldung",
      actor: "Both",
      detail:
        "Der Arbeitnehmer reist mit dem Visum ein. Der Arbeitgeber meldet den Arbeitnehmer bei der Sozialversicherung an, und der Arbeitnehmer erhält eine Steuernummer (NIF) und eine Sozialversicherungsnummer (NISS), die beide für den Antrag auf die Erlaubnis benötigt werden.",
    },
    {
      title: "AIMA-Termin buchen und wahrnehmen",
      actor: "Employee",
      detail:
        "Innerhalb der 4-monatigen Gültigkeit des Visums beantragt der Arbeitnehmer einen Termin bei AIMA und reicht den Antrag auf die Aufenthaltserlaubnis nach Artikel 88(1) ein; die biometrischen Daten werden beim Termin erfasst.",
    },
    {
      title: "Entscheidung von AIMA",
      actor: "Authority",
      detail:
        "AIMA prüft die allgemeinen Voraussetzungen des Artikels 77 (gültiges Visum, Lebensunterhalt, Unterkunft, Anmeldung bei der Sozialversicherung, keine strafrechtlichen oder sicherheitsbezogenen Gründe) und muss innerhalb von 90 Tagen entscheiden, verlängerbar um 30 Tage.",
    },
    {
      title: "Aufenthaltskarte und Verlängerung",
      actor: "Employee",
      detail:
        "Die Aufenthaltskarte wird für 2 Jahre ausgestellt. Die Verlängerung um Zeiträume von 3 Jahren wird vor Ablauf beantragt, mit Nachweis der fortbestehenden Beschäftigung oder ausreichender Mittel, und wird innerhalb von 60 Tagen entschieden.",
    },
  ],
  employerDocs: [
    { label: "Arbeitsvertrag, Arbeitsvertragszusage oder individuelle Interessenserklärung zur Einstellung des Arbeitnehmers" },
    { label: "Angaben zur Unternehmensregistrierung und Nachweis, dass der Arbeitgeber in Portugal niedergelassen ist" },
    { label: "Nachweis der Anmeldung des Arbeitnehmers bei der Segurança Social nach der Ankunft" },
    { label: "Erklärung zu Stelle, Gehalt und Arbeitsort für die Visumakte", note: "Konsulate können eine ehrenwörtliche Erklärung des Arbeitgebers verlangen." },
  ],
  employeeDocs: [
    { label: "Antragsformular für das nationale Visum und aktuelle Passfotos" },
    { label: "Gültiger Reisepass mit ausreichender Restgültigkeit" },
    { label: "Strafregisterauszug des Staatsangehörigkeits- oder Wohnsitzlandes, legalisiert oder mit Apostille, sowie Ermächtigung für AIMA zur Abfrage des portugiesischen Strafregisters" },
    { label: "Nachweis des Lebensunterhalts nach den Vorgaben der Ministerialverordnung" },
    { label: "Reiseversicherung für die Visumphase und Nachweis einer Unterkunft in Portugal" },
    { label: "Qualifikationen oder Berufszertifikate, soweit die Stelle sie erfordert" },
    { label: "Portugiesische Steuernummer (NIF) und Sozialversicherungsnummer (NISS) für die AIMA-Phase" },
    { label: "Beglaubigte Übersetzungen ins Portugiesische oder Englische von Dokumenten in anderen Sprachen" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU (Cartão azul UE)", summary: "Hochqualifizierte Beschäftigung mit einem Vertrag von mindestens 6 Monaten und einem Gehalt über einem Vielfachen des nationalen durchschnittlichen Bruttojahresgehalts; gilt 2 Jahre, verlängerbar um Zeiträume von 3 Jahren, mit Mobilitätsrechten innerhalb der EU." },
    { name: "Visum zur Arbeitssuche (visto para procura de trabalho qualificado)", summary: "Ein Visum für 120 Tage, verlängerbar um 60 Tage, das sich nun an Personen mit spezialisierten technischen Fähigkeiten richtet, die eine qualifizierte Arbeit suchen. Nach der Einstellung beantragt der Inhaber in Portugal die Aufenthaltserlaubnis." },
    { name: "Hochqualifizierte Tätigkeit und Tech Visa", summary: "Aufenthaltsvisum und Aufenthaltserlaubnis für hochqualifizierte Tätigkeiten, einschließlich des Zertifizierungswegs Tech Visa für Technologieunternehmen, nach gesonderten Artikeln der Lei de Estrangeiros." },
    { name: "Unternehmensinterner Transfer", summary: "Erlaubnis für Führungskräfte, Spezialisten und Trainees, die innerhalb eines Konzerns nach der Richtlinie 2014/66/EU versetzt werden." },
  ],
  watchOuts: [
    "Das Visum muss vor der Ankunft eingeholt werden. Seit der Abschaffung des Wegs über die Interessensbekundung (manifestação de interesse) im Jahr 2024 kann ein als Tourist eingereister Arbeitnehmer seinen Status in Portugal nicht mehr über einen Arbeitsvertrag regularisieren.",
    "Termine und Entscheidungen von AIMA haben die gesetzlichen Fristen deutlich überschritten. Das Visum gilt nur 4 Monate, daher sollte der Termin sofort nach der Ankunft des Arbeitnehmers beantragt werden.",
    "Die Aufenthaltserlaubnis setzt die Anmeldung bei der Sozialversicherung durch den Arbeitgeber und eine Steuernummer des Arbeitnehmers voraus. Akten geraten ins Stocken, wenn diese beim AIMA-Termin fehlen.",
  ],
};
