import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import middlewareAuth from "./utils/middlewareAuth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/profile")) {
    const user = await middlewareAuth(request);
    if (!user) return NextResponse.redirect(new URL(`/signin`, request.url));
  }

  if (
    request.nextUrl.pathname.startsWith("/signin") ||
    request.nextUrl.pathname.startsWith("/signup")
  ) {
    const user = await middlewareAuth(request);
    if (user) return NextResponse.redirect(new URL(`/`, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile/:path*", "/signin", "/signup"],
};
