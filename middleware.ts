import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  // Eğer token yoksa giriş sayfasına yönlendir
  if (
    !token &&
    req.nextUrl.pathname !== "/" &&
    req.nextUrl.pathname !== "/logout"
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Eğer token varsa ve kullanıcı giriş sayfasında ise dashboard sayfasına yönlendir
  if (token && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (req.nextUrl.pathname === "/logout") {
    const response = NextResponse.redirect(new URL("/", req.url));
    response.cookies.delete("token");
    return response;
  }

  return NextResponse.next();
}

// Middleware'in hangi yolları dinleyeceğini belirleyin
export const config = {
  matcher: ["/", "/logout", "/dashboard/:path*"],
};