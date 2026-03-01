import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  isLocale,
  pickLocaleFromAcceptLanguage,
} from "./lib/i18n";

const LOCALE_COOKIE = "NEXT_LOCALE";

function hasLocale(pathname: string): boolean {
  const seg = pathname.split("/")[1];
  return isLocale(seg);
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Ignore Next internals and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/go") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (hasLocale(pathname)) {
    // Persist locale cookie (so root layout can set lang/dir)
    const res = NextResponse.next();
    const locale = pathname.split("/")[1] || DEFAULT_LOCALE;
    res.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  }

  const cookieLocale = req.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookieLocale)
    ? cookieLocale
    : pickLocaleFromAcceptLanguage(req.headers.get("accept-language"));

  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  url.search = search;

  const res = NextResponse.redirect(url);
  res.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}

export const config = {
  matcher: [
    "/((?!_next|api|go|robots\.txt|sitemap\.xml|.*\\..*).*)",
  ],
};
