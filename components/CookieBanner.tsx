"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/tracking";

const KEY = "blx_cookie_consent_v1";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const v = window.localStorage.getItem(KEY);
    if (!v) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[92vw] max-w-2xl -translate-x-1/2 rounded-2xl border border-white/10 bg-[#070707]/95 p-4 shadow-gold backdrop-blur">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/75">
          We use cookies for analytics and to improve your experience. By
          continuing, you agree to our{' '}
          <a className="text-gold-200 hover:text-gold-100" href="/privacy-policy">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => {
              window.localStorage.setItem(KEY, "rejected");
              setOpen(false);
            }}
          >
            Reject
          </Button>
          <Button
            onClick={() => {
              window.localStorage.setItem(KEY, "accepted");
              track("cta_click", { action: "cookie_accept" });
              setOpen(false);
            }}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
