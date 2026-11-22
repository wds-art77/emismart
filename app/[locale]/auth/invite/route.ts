import { NextResponse, type NextRequest } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { acceptInvitation } from "@/lib/cases";

// Invitation link: sign in first (the login redirects back here), then join the case.
export async function GET(req: NextRequest, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const token = req.nextUrl.searchParams.get("token") ?? "";
  const url = req.nextUrl.clone();
  const user = await getSessionUser();
  if (!user) {
    url.pathname = `/${locale}/login`;
    url.search = `?next=${encodeURIComponent(`/${locale}/auth/invite?token=${token}`)}`;
    return NextResponse.redirect(url);
  }
  const caseId = await acceptInvitation(user.id, token);
  url.search = "";
  url.pathname = caseId ? `/${locale}/app/cases/${caseId}` : `/${locale}/app`;
  if (!caseId) url.searchParams.set("error", "invite");
  return NextResponse.redirect(url);
}
