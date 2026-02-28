import Link from "next/link";
import { Section } from "@/components/Section";
import { offers, offerByKey } from "@/lib/offers";
import { OfferCard } from "@/components/OfferCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ConvertKitForm } from "@/components/ConvertKitForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from "@/lib/content";

export default function HomePage() {
  const featured = posts.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* 1. Premium Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black">
        <div className="absolute inset-0 bg-lux-grid opacity-60" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_55%)]" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-200">
              PREMIUM BUSINESS AUTHORITY
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-white md:text-6xl">
              Launch with clarity. Build with proof. Scale with systems.
            </h1>
            <p className="mt-5 text-base text-white/70 md:text-lg">
              We publish execution-first playbooks and curated recommendations for founders—no hype, no fake income claims.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/free-guide">Get the Free 30‑Day Launch Plan</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/compare">See the Recommended Path</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-600" /> Mobile-first
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-600" /> Value-first SEO
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-600" /> Curated tools
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Offer */}
      <Section title="Recommended starting point" eyebrow="BEST VALUE">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <OfferCard offer={offerByKey.entry} featured />
          <Card>
            <CardHeader>
              <CardTitle className="text-white">How we help you win</CardTitle>
              <p className="mt-2 text-sm text-white/70">
                Our model is simple: publish high-quality guides and reviews, capture email, then recommend the best next step.
              </p>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-sm text-white/80">
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-[rgba(212,175,55,0.14)] text-center text-xs font-bold leading-6 text-gold-200">1</span>
                  <span>Start with a proven 30-day roadmap.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-[rgba(212,175,55,0.14)] text-center text-xs font-bold leading-6 text-gold-200">2</span>
                  <span>Build your email list so traffic becomes an asset.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-[rgba(212,175,55,0.14)] text-center text-xs font-bold leading-6 text-gold-200">3</span>
                  <span>Upgrade to acceleration when speed matters.</span>
                </li>
              </ol>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link href="/reviews">Browse Reviews</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 3. Comparison Section */}
      <Section title="Compare the top recommendations" eyebrow="DECISION SUPPORT">
        <ComparisonTable />
      </Section>

      {/* 4. Email Capture Block */}
      <Section title="Get the 30-day launch plan" eyebrow="FREE GUIDE" className="pt-0">
        <ConvertKitForm />
      </Section>

      {/* 5. Authority Section */}
      <Section title="Luxury clarity, founder-grade execution" eyebrow="AUTHORITY">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Proof-first",
              d: "Validate demand before you invest months building."
            },
            {
              t: "Offer ladders",
              d: "Entry → nurture → high ticket. Simple, scalable, ethical."
            },
            {
              t: "Tools that matter",
              d: "We recommend only what improves speed, clarity, and outcomes."
            }
          ].map((x) => (
            <Card key={x.t}>
              <CardHeader>
                <CardTitle className="text-white">{x.t}</CardTitle>
                <p className="mt-2 text-sm text-white/70">{x.d}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* 6. Featured Articles */}
      <Section title="Featured articles" eyebrow="SEO PLAYBOOKS">
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <Card key={p.slug} className="hover:border-[rgba(212,175,55,0.35)]">
              <CardHeader>
                <p className="text-xs font-semibold tracking-[0.2em] text-gold-200">{p.category}</p>
                <CardTitle className="text-white">{p.title}</CardTitle>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>{p.readingTime}</span>
                  <Link className="text-gold-200 hover:text-gold-100" href={`/blog/${p.slug}`}>
                    Read →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* 7. Testimonials style section (educational positioning) */}
      <Section title="What founders value here" eyebrow="EDUCATIONAL POSITIONING">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              q: "It reads like an operator wrote it—clear, structured, and actionable.",
              a: "Positioning-first content"
            },
            {
              q: "Finally, recommendations that explain who it’s for and who should skip.",
              a: "Ethical affiliate reviews"
            },
            {
              q: "The funnel guidance is simple: list-building, nurture, then upgrade when ready.",
              a: "Systemized growth"
            }
          ].map((x) => (
            <Card key={x.a}>
              <CardHeader>
                <p className="text-sm text-white/80">“{x.q}”</p>
                <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-gold-200">{x.a}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* 8. Strong CTA */}
      <section className="border-y border-white/10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_55%)]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl tracking-tight text-white md:text-4xl">
                Build a business that earns trust—and revenue.
              </h2>
              <p className="mt-3 text-white/70">
                Start with a free plan, then follow the recommended ladder when you’re ready.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button asChild size="lg">
                <Link href="/free-guide">Get the Free Guide</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/compare">Compare Offers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* 9. Footer is in layout */}
    </>
  );
}
