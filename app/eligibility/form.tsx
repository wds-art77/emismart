"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { countries, type CountryCode } from "@/lib/countries";
import { emptyAnswers, evaluate, type Answers } from "@/lib/eligibility";
import { Pill } from "@/components/ui";

type Q = {
  key: keyof Answers;
  label: string;
  help?: string;
  options: { value: string; label: string }[];
  skipIf?: (a: Answers) => boolean;
};

const questions: Q[] = [
  {
    key: "nationality",
    label: "What is your nationality?",
    options: [
      { value: "eu", label: "EU, EEA or Swiss citizen" },
      { value: "third", label: "Citizen of another country" },
    ],
  },
  {
    key: "country",
    label: "Where will you work?",
    options: countries.map((c) => ({ value: c.code, label: `${c.flag} ${c.name}` })),
    skipIf: (a) => a.nationality === "eu",
  },
  {
    key: "offer",
    label: "Do you have a job offer or signed contract from an employer in that country?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "Not yet" },
    ],
    skipIf: (a) => a.nationality === "eu",
  },
  {
    key: "location",
    label: "Where are you now?",
    options: [
      { value: "abroad", label: "Outside the destination country" },
      { value: "inside", label: "Already in the destination country" },
    ],
    skipIf: (a) => a.nationality === "eu" || a.offer === "no",
  },
  {
    key: "contract",
    label: "What type of contract?",
    options: [
      { value: "cdi", label: "Open-ended (CDI)" },
      { value: "cdd", label: "Fixed-term (CDD)" },
    ],
    skipIf: (a) => a.nationality === "eu" || a.offer === "no",
  },
  {
    key: "qualification",
    label: "What is your highest relevant qualification?",
    options: [
      { value: "degree", label: "University degree (bachelor or higher)" },
      { value: "vocational", label: "Vocational or professional qualification" },
      { value: "experience", label: "Mainly professional experience, no formal diploma" },
      { value: "none", label: "None of the above" },
    ],
    skipIf: (a) => a.nationality === "eu" || a.offer === "no",
  },
  {
    key: "salary",
    label: "How does the gross salary compare with the national highly qualified threshold?",
    help: "Thresholds differ by country and year. Choose 'above' only if the employer has confirmed it.",
    options: [
      { value: "high", label: "Above the highly qualified or Blue Card threshold" },
      { value: "standard", label: "Market salary, below that threshold" },
      { value: "unknown", label: "I do not know" },
    ],
    skipIf: (a) => a.nationality === "eu" || a.offer === "no",
  },
  {
    key: "shortage",
    label: "Is the occupation on a national or regional shortage list?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "unknown", label: "I do not know" },
    ],
    skipIf: (a) => a.nationality === "eu" || a.offer === "no",
  },
];

export function EligibilityForm() {
  const params = useSearchParams();
  const preset = params.get("country") as CountryCode | null;
  const [answers, setAnswers] = useState<Answers>({
    ...emptyAnswers,
    country: preset && countries.some((c) => c.code === preset) ? preset : "",
  });
  const [done, setDone] = useState(false);

  const visible = useMemo(() => questions.filter((q) => !q.skipIf?.(answers)), [answers]);
  const current = visible.find((q) => !answers[q.key]);
  const progress = Math.round(((visible.length - (current ? visible.indexOf(current) : visible.length) - 0) / visible.length) * 100);

  if (done || !current) {
    const result = evaluate(answers);
    const tone = result.confidence === "high" ? "green" : result.confidence === "medium" ? "navy" : "gold";
    return (
      <div className="rounded-3xl border border-navy-900/10 bg-sand-50 p-8">
        <div className="flex flex-wrap items-center gap-3">
          <Pill tone={tone}>Confidence: {result.confidence}</Pill>
          {result.reviewRecommended && <Pill tone="gold">Lawyer review recommended</Pill>}
        </div>
        <h2 className="mt-4 text-3xl font-semibold">{result.headline}</h2>
        <p className="mt-2 text-lg text-navy-800/85">{result.route}</p>
        <p className="mt-4 leading-relaxed text-navy-900">{result.summary}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Next steps</h3>
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
            <h3 className="font-semibold">Alternatives to consider</h3>
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
              <Link href={`/start?country=${answers.country}`} className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800">
                Open a case file
              </Link>
              <Link href={`/checklist?country=${answers.country}`} className="rounded-full border border-navy-900/20 bg-white px-6 py-3 text-sm font-semibold text-navy-900 hover:border-navy-900/50">
                Document checklist
              </Link>
              <Link href={`/countries/${answers.country}`} className="rounded-full px-6 py-3 text-sm font-semibold text-navy-900 underline-offset-4 hover:underline">
                Read the country guide
              </Link>
            </>
          )}
          <button
            onClick={() => {
              setAnswers({ ...emptyAnswers });
              setDone(false);
            }}
            className="rounded-full px-6 py-3 text-sm font-semibold text-navy-800/70 hover:text-navy-900"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  const index = visible.indexOf(current);
  return (
    <div className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between text-xs text-navy-800/60">
        <span>
          Question {index + 1} of {visible.length}
        </span>
        <span>{progress}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-100">
        <div className="h-full bg-navy-900 transition-all" style={{ width: `${progress}%` }} />
      </div>
      <h2 className="mt-8 text-2xl font-semibold">{current.label}</h2>
      {current.help && <p className="mt-2 text-sm text-navy-800/70">{current.help}</p>}
      {current.key === "country" ? (
        <div className="mt-6">
          <label htmlFor="country-select" className="sr-only">Destination country</label>
          <select
            id="country-select"
            defaultValue=""
            onChange={(e) => e.target.value && setAnswers({ ...answers, country: e.target.value as CountryCode })}
            className="w-full rounded-xl border border-navy-900/20 bg-white px-4 py-4 text-sm font-medium focus:border-navy-900 focus:outline-none"
          >
            <option value="" disabled>
              Choose one of the 27 EU member states
            </option>
            {current.options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
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
          Back
        </button>
      )}
    </div>
  );
}
