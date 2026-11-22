import { NextResponse, type NextRequest } from "next/server";
import { localRead, verifyLocal } from "@/lib/storage";

export async function GET(req: NextRequest) {
  if (process.env.S3_BUCKET) return NextResponse.json({ error: "not_used_with_s3" }, { status: 404 });
  const payload = verifyLocal(req.nextUrl.searchParams.get("token") ?? "");
  if (!payload) return NextResponse.json({ error: "invalid_token" }, { status: 403 });
  try {
    const data = await localRead(String(payload.key));
    return new NextResponse(new Uint8Array(data), {
      headers: { "Content-Disposition": `attachment; filename="${String(payload.filename).replace(/"/g, "")}"`, "Content-Type": "application/octet-stream", "Cache-Control": "private, no-store" },
    });
  } catch {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
}
