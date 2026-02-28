import type { Metadata } from "next";
import Link from "next/link";
import { offers, offerByKey } from "@/lib/offers";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Section } from "@/components/Section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Compare Offers",
  description: "Compare the best launch courses, accelerators, and tools—mapped to a simple funnel."
};

export default function ComparePage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)]">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="font-serif text-4xl tracking-tight text-white md:text-5xl">Compare & Choose</h1>
          <p className="mt-3 max-w-3xl text-white/70">
            Our recommended funnel: <span className="text-white">Entry offer</span> → <span className="text-white">Email capture</span> → <span className="text-white">6-email sequence</span> → <span className="text-white">High ticket</span>. Built for ethical value and consistent conversions.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild><Link href="/free-guide">Get the Free Guide</Link></Button>
            <Button asChild variant="outline"><Link href="/reviews">Read Reviews</Link></Button>
          </div>
        </div>
      </section>

      <Section title="At-a-glance comparison" eyebrow="TABLE">
        <ComparisonTable />
      </Section>

      <Section title="Recommended funnel map" eyebrow="MODEL">
        <div className="grid gap-6 md:grid-cols-4">
          {[offerByKey.entry, offerByKey.upsell, offerByKey.highTicket, offerByKey.toolkit].map((o, idx) => (
            <Card key={o.key} className="relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gold-gradient" aria-hidden />
              <CardHeader>
                <p className="text-xs font-semibold tracking-[0.2em] text-gold-200">Step {idx + 1}</p>
                <CardTitle className="text-white">{o.name}</CardTitle>
                <p className="mt-2 text-sm text-white/70">{o.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-xs font-semibold text-gold-200">{o.avgCommission}</p>
                <div className="mt-4">
                  <Button asChild className="w-full">
                    <Link href={o.goPath}>View</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="font-serif text-2xl text-white">Blended revenue target</p>
          <p className="mt-2 text-sm text-white/70">
            We design for an ethical blended average around <span className="text-white">$70/customer</span> by pairing a best‑value entry offer with email nurturing and a high‑ticket upgrade.
          </p>
        </div>
      </Section>

      <Section title="All offers" eyebrow="CATALOG">
        <div className="grid gap-6 md:grid-cols-2">
          {offers.map((o) => (
            <Card key={o.key} className="hover:border-[rgba(212,175,55,0.35)]">
              <CardHeader>
                <CardTitle className="text-white">{o.name}</CardTitle>
                <p className="mt-2 text-sm text-white/70">{o.description}</p>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <p className="text-xs font-semibold text-gold-200">{o.badge} • {o.avgCommission}</p>
                <Link className="text-gold-200 hover:text-gold-100" href={o.goPath}>View →</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
