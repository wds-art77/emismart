import { NextResponse, type NextRequest } from "next/server";
import { verifyMagicLink } from "@/lib/auth";

export async function GET(req: NextRequest, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const token = req.nextUrl.searchParams.get("token") ?? "";
  const result = token ? await verifyMagicLink(token) : { ok: false as const };
  const url = req.nextUrl.clone();
  url.search = "";
  if (!result.ok) {
    url.pathname = `/${locale}/login`;
    url.searchParams.set("error", "link");
    return NextResponse.redirect(url);
  }
  // The stored redirect may carry a query string (invitation links), so build a full URL rather than a pathname.
  return NextResponse.redirect(new URL(result.redirect ?? `/${locale}/app`, req.nextUrl.origin));
}
