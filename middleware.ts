import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  const isLogin = request.nextUrl.pathname === "/login";

  // Not logged in → block access
  if (!token && !isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Logged in → prevent going back to login
  if (token && isLogin) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
