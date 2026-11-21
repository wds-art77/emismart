"use client";

import { useT } from "./locale";

export function Disclaimer() {
  const d = useT();
  return (
    <p className="mt-10 rounded-xl border border-gold-500/40 bg-gold-100/50 p-4 text-sm leading-relaxed text-navy-900">
      <strong>{d.disclaimer.title}</strong> {d.disclaimer.body}
    </p>
  );
}
