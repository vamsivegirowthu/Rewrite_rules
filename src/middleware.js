import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.headers.get("authorization");

  // ❌ If no token → block
  if (!token) {
    return new NextResponse("Unauthorized ❌", { status: 401 });
  }

  // ✅ If token exists → allow
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};