"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { countries, type CountryCode } from "@/lib/countries";
import { emptyAnswers, evaluate, type Answers } from "@/lib/eligibility";
import { fmt } from "@/lib/i18n";
import { Pill } from "@/components/ui";
import { useT } from "@/components/locale";

type Q = {
  key: keyof Answers;
  label: string;
  help?: string;
  options: { value: string; label: string }[];
  skipIf?: (a: Answers) => boolean;
};

export function EligibilityForm() {
  const d = useT();
  const q = d.eligibility.q;
  const r = d.eligibility.result;
  const params = useSearchParams();
  const preset = params.get("country") as CountryCode | null;
  const [answers, setAnswers] = useState<Answers>({
    ...emptyAnswers,
    country: preset && countries.some((c) => c.code === preset) ? preset : "",
  });
  const [done, setDone] = useState(false);

  const questions: Q[] = useMemo(() => {
    const afterOffer = (a: Answers) => a.nationality === "eu" || a.offer === "no";
    return [
      { key: "nationality", label: q.nationality, options: [{ value: "eu", label: q.nationalityEu }, { value: "third", label: q.nationalityThird }] },
      { key: "country", label: q.country, options: countries.map((c) => ({ value: c.code, label: `${c.flag} ${c.name}` })), skipIf: (a) => a.nationality === "eu" },
      { key: "offer", label: q.offer, options: [{ value: "yes", label: q.yes }, { value: "no", label: q.notYet }], skipIf: (a) => a.nationality === "eu" },
      { key: "location", label: q.location, options: [{ value: "abroad", label: q.abroad }, { value: "inside", label: q.inside }], skipIf: afterOffer },
      { key: "contract", label: q.contract, options: [{ value: "cdi", label: q.cdi }, { value: "cdd", label: q.cdd }], skipIf: afterOffer },
      { key: "qualification", label: q.qualification, options: [{ value: "degree", label: q.degree }, { value: "vocational", label: q.vocational }, { value: "experience", label: q.experience }, { value: "none", label: q.none }], skipIf: afterOffer },
      { key: "salary", label: q.salary, help: q.salaryHelp, options: [{ value: "high", label: q.salaryHigh }, { value: "standard", label: q.salaryStandard }, { value: "unknown", label: q.unknown }], skipIf: afterOffer },
      { key: "shortage", label: q.shortage, options: [{ value: "yes", label: q.yes }, { value: "no", label: q.no }, { value: "unknown", label: q.unknown }], skipIf: afterOffer },
    ];
  }, [q]);

  const visible = useMemo(() => questions.filter((qq) => !qq.skipIf?.(answers)), [answers, questions]);
  const current = visible.find((qq) => !answers[qq.key]);
  const index = current ? visible.indexOf(current) : visible.length;
  const progress = Math.round((index / visible.length) * 100);

  if (done || !current) {
    const result = evaluate(answers, d.eligibility.outcomes);
    const tone = result.confidence === "high" ? "green" : result.confidence === "medium" ? "navy" : "gold";
    return (
      <div className="rounded-3xl border border-navy-900/10 bg-sand-50 p-8">
        <div className="flex flex-wrap items-center gap-3">
          <Pill tone={tone}>{fmt(r.confidence, { level: r[result.confidence] })}</Pill>
          {result.reviewRecommended && <Pill tone="gold">{r.review}</Pill>}
        </div>
        <h2 className="mt-4 text-3xl font-semibold">{result.headline}</h2>
        <p className="mt-2 text-lg text-navy-800/85">{result.route}</p>
        <p className="mt-4 leading-relaxed text-navy-900">{result.summary}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">{r.nextSteps}</h3>
            <ol className="mt-3 space-y-2 text-sm leading-relaxed">
              {result.nextSteps.map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span className="font-semibold text-gold-600">{i + 1}.</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-semibold">{r.alternatives}</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {result.alternatives.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-900" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {answers.country && (
            <>
              <Link href={`/start?country=${answers.country}`} className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800">{r.openCase}</Link>
              <Link href={`/checklist?country=${answers.country}`} className="rounded-full border border-navy-900/20 bg-white px-6 py-3 text-sm font-semibold text-navy-900 hover:border-navy-900/50">{r.checklist}</Link>
              <Link href={`/countries/${answers.country}`} className="rounded-full px-6 py-3 text-sm font-semibold text-navy-900 underline-offset-4 hover:underline">{r.guide}</Link>
            </>
          )}
          <button
            onClick={() => {
              setAnswers({ ...emptyAnswers });
              setDone(false);
            }}
            className="rounded-full px-6 py-3 text-sm font-semibold text-navy-800/70 hover:text-navy-900"
          >
            {r.startOver}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between text-xs text-navy-800/60">
        <span>{fmt(d.eligibility.questionOf, { n: index + 1, total: visible.length })}</span>
        <span>{progress}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-100">
        <div className="h-full bg-navy-900 transition-all" style={{ width: `${progress}%` }} />
      </div>
      <h2 className="mt-8 text-2xl font-semibold">{current.label}</h2>
      {current.help && <p className="mt-2 text-sm text-navy-800/70">{current.help}</p>}
      {current.key === "country" ? (
        <div className="mt-6">
          <label htmlFor="country-select" className="sr-only">{q.country}</label>
          <select
            id="country-select"
            defaultValue=""
            onChange={(e) => e.target.value && setAnswers({ ...answers, country: e.target.value as CountryCode })}
            className="w-full rounded-xl border border-navy-900/20 bg-white px-4 py-4 text-sm font-medium focus:border-navy-900 focus:outline-none"
          >
            <option value="" disabled>{d.common.chooseCountry}</option>
            {current.options.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      ) : (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {current.options.map((o) => (
            <button
              key={o.value}
              onClick={() => setAnswers({ ...answers, [current.key]: o.value })}
              className="rounded-xl border border-navy-900/15 px-5 py-4 text-left text-sm font-medium transition hover:border-navy-900 hover:bg-navy-50"
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
      {index > 0 && (
        <button
          onClick={() => {
            const prev = visible[index - 1];
            setAnswers({ ...answers, [prev.key]: "" });
          }}
          className="mt-6 text-sm text-navy-800/70 hover:text-navy-900"
        >
          {d.common.back}
        </button>
      )}
    </div>
  );
}
