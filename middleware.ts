import { NextResponse, type NextRequest } from "next/server";

const locales = ["en", "fr", "nl", "de"] as const;
type Locale = (typeof locales)[number];
const isLocale = (s: string | undefined): s is Locale => !!s && (locales as readonly string[]).includes(s);

function preferred(req: NextRequest): Locale {
  const cookie = req.cookies.get("emismart_locale")?.value;
  if (isLocale(cookie)) return cookie;
  const header = req.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const code = part.trim().slice(0, 2).toLowerCase();
    if (isLocale(code)) return code;
  }
  return "en";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const first = pathname.split("/")[1];
  if (isLocale(first)) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = `/${preferred(req)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|robots.txt|sitemap.xml|favicon.ico|.*\\..*).*)"],
};
