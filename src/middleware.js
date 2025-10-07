// middleware.ts
import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(req) {
  const session = await auth();

  // If accessing /Dashboard but not logged in → redirect to /login
  if (req.nextUrl.pathname.startsWith("/Dashboard")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else if (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/signup") {
    // If accessing /login or /signup but already logged in → redirect to /Dashboard
    if (session) {
      return NextResponse.redirect(new URL("/Dashboard", req.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware to these routes
export const config = {
  matcher: ["/Dashboard/:path*", "/login", "/signup"],
};
