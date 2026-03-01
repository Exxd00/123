"use client";

import Link, { type LinkProps } from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import type { Locale } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n";

function prefixLocale(locale: Locale, href: string): string {
  // External URLs
  if (/^https?:\/\//i.test(href)) return href;
  // Already prefixed
  if (href === `/${locale}` || href.startsWith(`/${locale}/`)) return href;
  // Root
  if (href === "/") return `/${locale}`;
  return `/${locale}${href.startsWith("/") ? "" : "/"}${href}`;
}

export function LocaleLink({ href, ...rest }: LinkProps & { children: React.ReactNode }) {
  const params = useParams();
  const raw = (params as any)?.locale as string | undefined;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const h = typeof href === "string" ? prefixLocale(locale, href) : href;
  return <Link href={h} {...rest} />;
}

export function localePath(locale: Locale, href: string): string {
  return prefixLocale(locale, href);
}
