"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { useI18n } from "@/components/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div className="space-y-2">
          <p className="font-serif text-lg">
            BizLaunch <span className="text-gold-200">Xeer</span>
          </p>
          <p className="text-sm text-white/60">
            Premium guidance and curated tools for business & entrepreneurship.
          </p>
          <p className="text-xs text-white/45">© {new Date().getFullYear()} BizLaunch Xeer</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <LocaleLink className="text-white/70 hover:text-gold-100" href="/blog">{t("nav.blog")}</LocaleLink>
          <LocaleLink className="text-white/70 hover:text-gold-100" href="/reviews">{t("nav.reviews")}</LocaleLink>
          <LocaleLink className="text-white/70 hover:text-gold-100" href="/compare">{t("nav.compare")}</LocaleLink>
          <LocaleLink className="text-white/70 hover:text-gold-100" href="/free-guide">{t("nav.freeGuide")}</LocaleLink>
          <LocaleLink className="text-white/70 hover:text-gold-100" href="/about">{t("nav.about")}</LocaleLink>
          <LocaleLink className="text-white/70 hover:text-gold-100" href="/disclaimer">{t("nav.disclaimer")}</LocaleLink>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-white/70">Legal</p>
          <div className="flex flex-col gap-2">
            <LocaleLink className="text-white/70 hover:text-gold-100" href="/privacy-policy">
              {t("nav.privacy")}
            </LocaleLink>
            <LocaleLink className="text-white/70 hover:text-gold-100" href="/terms">{t("nav.terms")}</LocaleLink>
            <LocaleLink className="text-white/70 hover:text-gold-100" href="/disclaimer">
              {t("nav.disclaimer")}
            </LocaleLink>
          </div>
          <p className="text-xs text-white/45">
            We may earn commissions through affiliate links. We never make income
            guarantees.
          </p>
        </div>
      </div>
    </footer>
  );
}
