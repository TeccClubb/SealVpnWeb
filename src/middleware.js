// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  const hasUserCookie = req.cookies.get("seel_user");

  // If accessing /Dashboard but not logged in → redirect to /login
  if (req.nextUrl.pathname.startsWith("/Dashboard")) {
    if (!hasUserCookie) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else if (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/signup") {
    // If accessing /login or /signup but already logged in → redirect to /Dashboard
    if (hasUserCookie) {
      return NextResponse.redirect(new URL("/Dashboard", req.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware to these routes
export const config = {
  matcher: ["/Dashboard/:path*", "/login", "/signup"],
};
