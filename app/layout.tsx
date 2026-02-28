import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
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
  return (
    <html lang="en" className="dark">
      <body className={`${fontSans.variable} ${fontSerif.variable} font-sans`}>
        <Analytics />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
        <ClientEnhancements />
      </body>
    </html>
  );
}
