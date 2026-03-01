"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/I18nProvider";

export function Navbar() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <LocaleLink href="/" className="group flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-gold-gradient shadow-gold" aria-hidden />
          <span className="font-serif text-lg tracking-tight">
            BizLaunch <span className="text-gold-200">Xeer</span>
          </span>
        </LocaleLink>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <LocaleLink className="hover:text-gold-100" href="/blog">{t("nav.blog")}</LocaleLink>
          <LocaleLink className="hover:text-gold-100" href="/reviews">{t("nav.reviews")}</LocaleLink>
          <LocaleLink className="hover:text-gold-100" href="/compare">{t("nav.compare")}</LocaleLink>
          <LocaleLink className="hover:text-gold-100" href="/about">{t("nav.about")}</LocaleLink>
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <LocaleLink href="/free-guide">{t("nav.freeGuide")}</LocaleLink>
        </Button>
        <Button asChild size="sm" className="md:hidden">
          <LocaleLink href="/free-guide">{t("nav.freeGuide")}</LocaleLink>
        </Button>
      </div>
    </header>
  );
}
