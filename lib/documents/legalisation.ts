// Which authentication a foreign public document needs in an EU member state.
// Three regimes:
//  - "eu": public documents issued in another EU member state are exempt from apostille and legalisation under
//    Regulation (EU) 2016/1191 (civil status, absence of a criminal record and similar documents; a multilingual
//    standard form can replace translation for some of them). Diplomas are not covered by the regulation.
//  - "apostille": the issuing state is a party to the Hague Apostille Convention of 5 October 1961.
//  - "legalisation": full consular legalisation chain.
// The list of Convention parties must be checked against the HCCH status table at the URL below; "lastVerified"
// records when that was last done. A state not in the list is reported as "unknown", never assumed.

export const sources = {
  euRegulation: { label: "Regulation (EU) 2016/1191 on public documents", url: "https://eur-lex.europa.eu/eli/reg/2016/1191/oj" },
  hcch: { label: "HCCH status table, Apostille Convention", url: "https://www.hcch.net/en/instruments/conventions/status-table/?cid=41" },
  lastVerified: "2026-11-23",
};

export const euMembers = new Set("AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE".split(" "));

// Hague Apostille Convention contracting parties (ISO alpha-2), as known to the authors; verify against the HCCH table.
export const apostilleParties = new Set(
  (
    "AL AD AR AM AU AT AZ BS BH BB BY BE BZ BO BA BW BR BN BG BI CV CA CL CN CO CK CR HR CY CZ DK DM DO EC SV EE SZ FJ FI FR GE DE GR GD GT GY HN HK HU IS IN ID IE IL IT JM JP KZ KR XK KG LV LS LR LI LT LU MO MW MY MT MH MU MX MD MC MN ME MA NA NL NZ NI MK NO OM PK PW PA PY PE PH PL PT RO RU RW KN LC VC WS SM ST SA SN RS SC SG SK SI ZA ES SR SE CH TJ TO TT TN TR UA GB US UY UZ VU VE VN"
  ).split(" "),
);

export type Regime = "eu" | "apostille" | "legalisation" | "unknown" | "same_country";

export function legalisationRegime(issuingCountry: string | undefined, destination: string): { regime: Regime; explanation: string } {
  if (!issuingCountry) return { regime: "unknown", explanation: "Issuing country not recorded." };
  const iss = issuingCountry.toUpperCase();
  const dest = destination.toUpperCase();
  if (iss === dest) return { regime: "same_country", explanation: "Issued in the destination country: no authentication needed." };
  if (euMembers.has(iss) && euMembers.has(dest)) return { regime: "eu", explanation: "Issued in another EU member state: exempt from apostille and legalisation for public documents covered by Regulation (EU) 2016/1191 (not diplomas)." };
  if (apostilleParties.has(iss)) return { regime: "apostille", explanation: "Issuing state is party to the Hague Apostille Convention: an apostille from its competent authority replaces legalisation." };
  if (/^[A-Z]{2}$/.test(iss)) return { regime: "unknown", explanation: "Issuing state not found in the Apostille Convention list: consular legalisation is likely; confirm with the HCCH status table." };
  return { regime: "unknown", explanation: "Issuing country not recognised." };
}
