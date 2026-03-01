import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { site } from "@/lib/site";
import { getDir, isLocale, type Locale } from "@/lib/i18n";
import { ClientEnhancements } from "@/components/ClientEnhancements";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || site.url),
  title: {
    default: `${site.name} — Business & Entrepreneurship`,
    template: `%s — ${site.name}`
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: `${site.name} — Business & Entrepreneurship`,
    description: site.description,
    siteName: site.name
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieLocale = cookies().get("NEXT_LOCALE")?.value;
  const locale: Locale = isLocale(cookieLocale) ? cookieLocale : "en";
  const dir = getDir(locale);

  return (
    <html lang={locale} dir={dir} className="dark">
      <body className={`${fontSans.variable} ${fontSerif.variable} font-sans`}>
        {children}
        <ClientEnhancements />
      </body>
    </html>
  );
}
