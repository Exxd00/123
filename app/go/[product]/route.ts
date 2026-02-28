import { NextRequest, NextResponse } from "next/server";
import { affiliateDestinations } from "@/lib/links";

export const runtime = "edge";

export function GET(req: NextRequest, { params }: { params: { product: string } }) {
  const product = params.product;
  const url = affiliateDestinations[product];

  if (!url) {
    const fallback = new URL("/compare", req.url);
    return NextResponse.redirect(fallback, 302);
  }

  const destination = new URL(url);
  // Optionally forward UTM params to affiliate URL
  const utm = new URL(req.url).searchParams;
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content"
  ]) {
    const v = utm.get(key);
    if (v) destination.searchParams.set(key, v);
  }

  const res = NextResponse.redirect(destination, 302);
  // Prevent caching to keep tracking flexible
  res.headers.set("Cache-Control", "no-store");
  return res;
}
