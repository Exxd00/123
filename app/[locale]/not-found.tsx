"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/I18nProvider";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-serif text-5xl tracking-tight text-white">404</h1>
      <p className="mt-4 text-white/70">{t("common.notFound")}</p>
      <div className="mt-8 flex gap-3">
        <Button asChild><LocaleLink href="/">{t("common.backHome")}</LocaleLink></Button>
        <Button asChild variant="outline"><LocaleLink href="/blog">{t("nav.blog")}</LocaleLink></Button>
      </div>
    </section>
  );
}
