"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/tracking";
import { useI18n } from "@/components/I18nProvider";
import { LocaleLink } from "@/components/LocaleLink";

const KEY = "blx_cookie_consent_v1";

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const v = window.localStorage.getItem(KEY);
    if (!v) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[92vw] max-w-2xl -translate-x-1/2 rounded-2xl border border-white/10 bg-[#070707]/95 p-4 shadow-gold backdrop-blur">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/75">
          {t("cookie.text")} {" "}
          <LocaleLink className="text-gold-200 hover:text-gold-100" href="/privacy-policy">
            {t("nav.privacy")}
          </LocaleLink>
          .
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => {
              window.localStorage.setItem(KEY, "rejected");
              document.cookie = `NEXT_COOKIE_CONSENT=rejected; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
              setOpen(false);
            }}
          >
            {t("cookie.reject")}
          </Button>
          <Button
            onClick={() => {
              window.localStorage.setItem(KEY, "accepted");
              document.cookie = `NEXT_COOKIE_CONSENT=accepted; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
              track("cta_click", { action: "cookie_accept" });
              setOpen(false);
            }}
          >
            {t("cookie.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
