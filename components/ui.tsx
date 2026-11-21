import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "sand" | "navy";
}) {
  const tones = {
    white: "bg-white",
    sand: "bg-sand-50",
    navy: "bg-navy-950 text-white",
  };
  return <section className={`${tones[tone]} py-16 sm:py-20 ${className}`}>{children}</section>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">{children}</p>;
}

export function H1({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h1 className={`text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl ${className}`}>{children}</h1>;
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl ${className}`}>{children}</h2>;
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mt-5 max-w-2xl text-lg leading-relaxed text-navy-800/80 ${className}`}>{children}</p>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500";
  const variants = {
    primary: "bg-navy-900 text-white hover:bg-navy-800",
    secondary: "border border-navy-900/20 bg-white text-navy-900 hover:border-navy-900/50",
    ghost: "text-navy-900 hover:text-navy-700 underline-offset-4 hover:underline",
    gold: "bg-gold-500 text-navy-950 hover:bg-gold-600",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm ${className}`}>{children}</div>
  );
}

export function Pill({ children, tone = "navy" }: { children: ReactNode; tone?: "navy" | "gold" | "green" | "grey" }) {
  const tones = {
    navy: "bg-navy-100 text-navy-900",
    gold: "bg-gold-100 text-gold-600",
    green: "bg-emerald-50 text-emerald-700",
    grey: "bg-slate-100 text-slate-700",
  };
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}

export function Disclaimer() {
  return (
    <p className="mt-10 rounded-xl border border-gold-500/40 bg-gold-100/50 p-4 text-sm leading-relaxed text-navy-900">
      <strong>Indicative information.</strong> Emismart summarises publicly available official guidance to help you
      prepare. It is not legal advice and does not replace the official pages of the competent authorities, which remain
      the only authoritative source for current rules, fees and salary thresholds. Where a case needs legal advice, Emismart
      connects you with a qualified immigration lawyer.
    </p>
  );
}
