"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/tracking";

export function StickyCtaBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShow(y > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-black/85 backdrop-blur transition-transform duration-200 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">
            Free PDF: <span className="text-gold-200">Launch Your Profitable Business in 30 Days</span>
          </p>
          <p className="hidden text-xs text-white/60 sm:block">
            Get the plan + templates. Delivered instantly.
          </p>
        </div>
        <Button
          className="shrink-0"
          onClick={() => {
            track("cta_click", { location: "sticky_bar", action: "free_guide" });
            window.location.href = "/free-guide";
          }}
        >
          Get the Guide
        </Button>
      </div>
    </div>
  );
}
