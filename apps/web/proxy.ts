import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest): NextResponse | undefined {
  const { pathname } = request.nextUrl;

  // ── Rewrite /api/* requests to the NestJS backend ─────
  if (pathname.startsWith("/api/")) {
    const backendUrl = new URL(
      pathname,
      process.env.BACKEND_URL ?? "http://localhost:3001",
    );
    return NextResponse.rewrite(backendUrl);
  }

  return undefined; // pass through to Next.js
}

export const config = {
  matcher: ["/api/:path*"],
};
