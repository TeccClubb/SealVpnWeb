// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("access_token")?.value;

  // If accessing /Dashboard but not logged in → redirect to /login
  if (req.nextUrl.pathname.startsWith("/Dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Optional: Prevent logged-in users from visiting login/signup again
  if (
    (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/signup") &&
    token
  ) {
    return NextResponse.redirect(new URL("/Dashboard", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to these routes
export const config = {
  matcher: ["/Dashboard/:path*", "/login", "/signup"],
};
