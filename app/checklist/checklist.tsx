"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { countries, type CountryCode } from "@/lib/countries";
import { Pill } from "@/components/ui";

type Party = "employer" | "employee";

export function Checklist() {
  const params = useSearchParams();
  const preset = params.get("country") as CountryCode | null;
  const [code, setCode] = useState<CountryCode>(preset && countries.some((c) => c.code === preset) ? preset : "be");
  const [party, setParty] = useState<Party>("employee");
  const [ticked, setTicked] = useState<Record<string, boolean>>({});

  const storageKey = `emismart:checklist:${code}:${party}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      setTicked(raw ? JSON.parse(raw) : {});
    } catch {
      setTicked({});
    }
  }, [storageKey]);

  const country = useMemo(() => countries.find((c) => c.code === code)!, [code]);
  const docs = party === "employer" ? country.employerDocs : country.employeeDocs;
  const doneCount = docs.filter((d) => ticked[d.label]).length;

  const toggle = (label: string) => {
    const next = { ...ticked, [label]: !ticked[label] };
    setTicked(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // storage unavailable; keep in memory only
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="no-print space-y-6">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-navy-800/60">Country</h2>
          <div className="mt-3 flex flex-col gap-2">
            {countries.map((c) => (
              <button
                key={c.code}
                onClick={() => setCode(c.code)}
                className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                  c.code === code ? "border-navy-900 bg-navy-900 text-white" : "border-navy-900/15 hover:border-navy-900/40"
                }`}
              >
                {c.flag} {c.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-navy-800/60">Party</h2>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {(["employee", "employer"] as Party[]).map((p) => (
              <button
                key={p}
                onClick={() => setParty(p)}
                className={`rounded-xl border px-4 py-3 text-sm font-medium capitalize transition ${
                  p === party ? "border-navy-900 bg-navy-900 text-white" : "border-navy-900/15 hover:border-navy-900/40"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => window.print()}
          className="w-full rounded-full border border-navy-900/20 px-5 py-3 text-sm font-semibold text-navy-900 hover:border-navy-900/50"
        >
          Print or save as PDF
        </button>
      </aside>

      <div className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-navy-800/70">
              {country.flag} {country.name} · {country.permitName}
            </p>
            <h2 className="mt-1 text-2xl font-semibold capitalize">{party} documents</h2>
          </div>
          <Pill tone={doneCount === docs.length ? "green" : "navy"}>
            {doneCount} of {docs.length} collected
          </Pill>
        </div>
        <ul className="mt-6 divide-y divide-navy-900/10">
          {docs.map((d) => (
            <li key={d.label} className="flex items-start gap-4 py-4">
              <input
                id={d.label}
                type="checkbox"
                checked={!!ticked[d.label]}
                onChange={() => toggle(d.label)}
                className="mt-1 h-5 w-5 accent-navy-900"
              />
              <label htmlFor={d.label} className="flex-1 cursor-pointer">
                <span className={`font-medium ${ticked[d.label] ? "line-through text-navy-800/50" : ""}`}>{d.label}</span>
                {d.note && <p className="mt-1 text-sm text-navy-800/70">{d.note}</p>}
              </label>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-xl bg-sand-50 p-4 text-sm leading-relaxed text-navy-800/85">
          <strong>Legalisation and translation.</strong> Civil status documents, criminal record extracts and diplomas
          issued outside the EU generally need an apostille or legalisation and a sworn translation into one of the
          procedural languages ({country.languages.join(", ")}). Start these first; they take the longest.
        </div>
      </div>
    </div>
  );
}
