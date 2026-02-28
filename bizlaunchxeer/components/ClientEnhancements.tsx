"use client";

import { usePathname } from "next/navigation";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { StickyCtaBar } from "@/components/StickyCtaBar";

export function ClientEnhancements() {
  const pathname = usePathname() || "/";
  const enable = pathname.startsWith("/blog/") || pathname.startsWith("/review/");

  if (!enable) return null;

  return (
    <>
      <ExitIntentPopup />
      <StickyCtaBar />
    </>
  );
}
