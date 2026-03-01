import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { ConsentGate } from "@/components/ConsentGate";
import { I18nProvider } from "@/components/I18nProvider";
import { LOCALES, getDir, isLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : ("en" as Locale);
  if (!isLocale(params.locale)) notFound();

  const dir = getDir(locale);

  return (
    <I18nProvider locale={locale} dir={dir}>
      <ConsentGate />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <CookieBanner />
    </I18nProvider>
  );
}
