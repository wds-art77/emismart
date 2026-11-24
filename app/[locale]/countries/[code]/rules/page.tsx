import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/lib/rules/countries";
import { buildTree, type Node } from "@/lib/rules/decision-tree";
import { current, type Versioned } from "@/lib/rules/country-rules";
import { countries, countryByCode } from "@/lib/countries";
import { countryName, dicts, isLocale } from "@/lib/i18n";
import { Container, Eyebrow, H1, Lead, Pill, Section } from "@/components/ui";
import { Disclaimer } from "@/components/disclaimer";
import { Link } from "@/components/link";
import { alternates } from "@/lib/seo";

export function generateStaticParams() {
  return countries.map((c) => ({ code: c.code }));
}

export async function generateMetadata({ params }: { params: Promise<{ code: string; locale: string }> }): Promise<Metadata> {
  const { code, locale } = await params;
  const c = countryByCode(code);
  if (!c) return {};
  const d = dicts[isLocale(locale) ? locale : "en"];
  return { title: `${countryName(code, isLocale(locale) ? locale : "en", c.name)}: ${d.rulesPage.title}`, description: d.rulesPage.lead, alternates: alternates(`/countries/${code}/rules`) };
}

function TreeView({ node, depth = 0 }: { node: Node; depth?: number }) {
  if (node.kind === "leaf") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm">
        <p className="font-semibold">{node.route}</p>
        {node.summary && <p className="mt-1 text-navy-800/80">{node.summary}</p>}
        {node.timeline && node.timeline.length > 0 && (
          <ul className="mt-2 space-y-0.5 text-xs text-navy-800/80">
            {node.timeline.map((t, i) => <li key={i}>{t.label}{t.days ? `: ${t.days} days` : t.months ? `: ${t.months} months` : ""}</li>)}
          </ul>
        )}
      </div>
    );
  }
  return (
    <div className={depth ? "border-l-2 border-navy-900/15 pl-4" : ""}>
      <p className="text-sm font-semibold">{node.question} <span className="font-mono text-xs text-navy-800/50">[{node.fact}]</span></p>
      <ul className="mt-2 space-y-3">
        {node.branches.map((b) => (
          <li key={b.label}>
            <p className="text-xs text-navy-800/70"><span className="font-medium text-navy-900">{b.label}</span> <span className="font-mono">{b.condition}</span></p>
            <div className="mt-1"><TreeView node={b.next} depth={depth + 1} /></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Row({ label, v, format }: { label: string; v: Versioned<unknown> | Versioned<unknown>[] | null | undefined; format: (x: unknown) => string }) {
  const cur = current(v ?? null);
  return (
    <tr className="border-t border-navy-900/10 align-top">
      <td className="px-3 py-2 font-medium">{label}</td>
      <td className="px-3 py-2">{cur ? format(cur.value) : <span className="text-navy-800/50">—</span>}</td>
      <td className="px-3 py-2 text-xs text-navy-800/70">{cur ? `${cur.validFrom}${cur.validTo ? ` to ${cur.validTo}` : ""}` : ""}</td>
      <td className="px-3 py-2 text-xs">{cur ? <a href={cur.source.url} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">{cur.source.label}</a> : ""}{cur?.note ? <span className="block text-navy-800/60">{cur.note}</span> : null}</td>
      <td className="px-3 py-2 text-xs text-navy-800/70">{cur?.lastVerified ?? ""}</td>
    </tr>
  );
}

export default async function RulesPage({ params }: { params: Promise<{ code: string; locale: string }> }) {
  const { code, locale: l } = await params;
  const locale = isLocale(l) ? l : "en";
  const d = dicts[locale];
  const c = countryByCode(code);
  if (!c) notFound();
  const { tree, rules, dataGaps } = buildTree(code);
  const money = (x: unknown) => { const m = x as { amount: number; currency: string; period: string }; return `${m.amount.toLocaleString(locale)} ${m.currency} / ${m.period}`; };
  const str = (x: unknown) => String(x);
  const bool = (x: unknown) => (x ? d.eligibility.q.yes : d.eligibility.q.no);
  const headers = [d.rulesPage.thRule, d.rulesPage.thValue, d.rulesPage.thValid, d.rulesPage.thSource, d.rulesPage.thVerified];
  const table = (rows: React.ReactNode) => (
    <div className="mt-3 overflow-x-auto rounded-2xl border border-navy-900/10 bg-white">
      <table className="w-full min-w-[800px] text-left text-sm"><thead className="bg-navy-50 text-xs uppercase tracking-wider text-navy-800/70"><tr>{headers.map((h) => <th key={h} className="px-3 py-2">{h}</th>)}</tr></thead><tbody>{rows}</tbody></table>
    </div>
  );
  return (
    <Section>
      <Container>
        <Link href={`/countries/${code}`} className="text-sm text-navy-800/70 hover:text-navy-900">{c.flag} {countryName(code, locale, c.name)}</Link>
        <Eyebrow>{d.rulesPage.eyebrow}</Eyebrow>
        <H1>{countryName(code, locale, c.name)}: {d.rulesPage.title}</H1>
        <Lead>{d.rulesPage.lead}</Lead>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill tone={rules ? "green" : "gold"}>{rules ? d.rulesPage.structured : d.rulesPage.notYet}</Pill>
          {dataGaps.length > 0 && <Pill tone="grey">{d.rulesPage.gaps}: {dataGaps.join(", ")}</Pill>}
          <a href={`/api/rules/countries/${code}`} className="rounded-full border border-navy-900/20 px-3 py-1 text-xs font-semibold">{d.rulesPage.api}</a>
        </div>

        <h2 className="mt-10 text-2xl font-semibold">{d.rulesPage.treeTitle}</h2>
        <div className="mt-4 rounded-2xl border border-navy-900/10 bg-white p-5"><TreeView node={tree} /></div>

        {rules && (
          <>
            <h2 className="mt-10 text-2xl font-semibold">{d.rulesPage.salaryTitle}</h2>
            {table(<>
              <Row label="EU Blue Card" v={rules.salary.blueCard} format={money} />
              <Row label={d.rulesPage.blueCardReduced} v={rules.salary.blueCardReduced} format={money} />
              <Row label={d.rulesPage.highlyQualified} v={rules.salary.highlyQualified} format={money} />
              <Row label={d.rulesPage.minimumWage} v={rules.salary.minimumWage} format={money} />
            </>)}
            <h2 className="mt-10 text-2xl font-semibold">{d.rulesPage.shortageTitle}</h2>
            {table(<>
              <Row label={d.rulesPage.shortageList} v={rules.shortage.list} format={(x) => (x as { name: string; url: string }[]).map((e) => e.name).join("; ")} />
              <tr className="border-t border-navy-900/10"><td className="px-3 py-2 font-medium">{d.rulesPage.exempts}</td><td className="px-3 py-2" colSpan={4}>{rules.shortage.exemptsLabourMarketTest === null ? "—" : bool(rules.shortage.exemptsLabourMarketTest)}{rules.shortage.note ? ` · ${rules.shortage.note}` : ""}</td></tr>
            </>)}
            <h2 className="mt-10 text-2xl font-semibold">{d.rulesPage.familyTitle}</h2>
            {table(<>
              <Row label={d.rulesPage.waiting} v={rules.family.waitingPeriodMonths} format={(x) => `${x} ${d.rulesPage.months}`} />
              <Row label={d.rulesPage.familyDecision} v={rules.family.decisionDays} format={(x) => `${x} ${d.rulesPage.days}`} />
              <Row label={d.rulesPage.conditions} v={rules.family.conditions} format={str} />
              <tr className="border-t border-navy-900/10"><td className="px-3 py-2 font-medium">{d.rulesPage.blueImmediate}</td><td className="px-3 py-2" colSpan={4}>{rules.family.blueCardImmediate === null ? "—" : bool(rules.family.blueCardImmediate)}</td></tr>
            </>)}
            <h2 className="mt-10 text-2xl font-semibold">{d.rulesPage.recastTitle}</h2>
            {table(<>
              <Row label={d.rulesPage.transposition} v={rules.recast.transposition} format={str} />
              <Row label={d.rulesPage.decisionDays} v={rules.recast.decisionDays} format={(x) => `${x} ${d.rulesPage.days}`} />
              <Row label={d.rulesPage.extensionDays} v={rules.recast.extensionDays} format={(x) => `${x} ${d.rulesPage.days}`} />
              <Row label={d.rulesPage.changeEmployer} v={rules.recast.changeOfEmployerByNotification} format={bool} />
              <Row label={d.rulesPage.unemployment} v={rules.recast.unemploymentGraceMonths} format={(x) => `${x} ${d.rulesPage.months}`} />
              <Row label={d.rulesPage.inCountry} v={rules.recast.inCountryApplication} format={bool} />
            </>)}
            <h2 className="mt-10 text-2xl font-semibold">{d.rulesPage.documentsTitle}</h2>
            {table(<>
              <Row label={d.rulesPage.passportBuffer} v={rules.documents.passportValidityBeyondStayMonths} format={(x) => `${x} ${d.rulesPage.months}`} />
              <Row label={d.rulesPage.recordAge} v={rules.documents.criminalRecordMaxAgeMonths} format={(x) => `${x} ${d.rulesPage.months}`} />
              <tr className="border-t border-navy-900/10"><td className="px-3 py-2 font-medium">{d.rulesPage.languages}</td><td className="px-3 py-2" colSpan={4}>{rules.documents.acceptedLanguages.join(", ")}{rules.documents.swornTranslationRequired === null ? "" : ` · ${d.rulesPage.sworn}: ${bool(rules.documents.swornTranslationRequired)}`}</td></tr>
              <Row label={d.rulesPage.validity} v={rules.validity} format={(x) => { const v = x as { initialMonths: number | null; renewalMonths: number | null }; return `${v.initialMonths ?? "—"} / ${v.renewalMonths ?? "—"} ${d.rulesPage.months}`; }} />
            </>)}
            {rules.reviewNotes.length > 0 && (
              <div className="mt-8 rounded-2xl border border-gold-500/40 bg-gold-100/40 p-5">
                <h3 className="font-semibold">{d.rulesPage.reviewNotes}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{rules.reviewNotes.map((n, i) => <li key={i}>{n}</li>)}</ul>
              </div>
            )}
          </>
        )}
        <Disclaimer />
      </Container>
    </Section>
  );
}
