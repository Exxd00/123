import type { Metadata } from "next";
import Link from "next/link";
import { reviews } from "@/lib/content";
import { offers, offerByKey } from "@/lib/offers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Premium reviews of business courses, accelerators, and tools."
};

export default function ReviewsIndex() {
  const sorted = [...reviews].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-4xl tracking-tight text-white">Reviews</h1>
      <p className="mt-3 max-w-2xl text-white/70">
        Ethical affiliate reviews with clear “who it’s for” guidance and practical recommendations.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {sorted.map((r) => {
          const offer = offerByKey[r.productKey];
          return (
            <Card key={r.slug} className="hover:border-[rgba(212,175,55,0.35)]">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-white">{r.title}</CardTitle>
                  <Badge>{offer.badge}</Badge>
                </div>
                <p className="mt-2 text-sm text-white/70">{r.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Rating: {r.rating.toFixed(1)} / 5</span>
                  <Link className="text-gold-200 hover:text-gold-100" href={`/review/${r.slug}`}>
                    Read →
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="font-serif text-2xl text-white">Need the fastest path?</p>
        <p className="mt-2 text-sm text-white/70">
          Start with Best Value, then upgrade to Editor’s Choice when you want acceleration.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {offers
            .filter((o) => o.key === "entry" || o.key === "highTicket")
            .map((o) => (
              <Link
                key={o.key}
                href={`/review/${o.key === "entry" ? "business-launch-starter-course" : "advanced-business-accelerator-program"}`}
                className="rounded-2xl border border-white/10 bg-black/40 p-4 hover:border-[rgba(212,175,55,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-white">{o.name}</p>
                  <Badge>{o.badge}</Badge>
                </div>
                <p className="mt-2 text-sm text-white/70">{o.description}</p>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
