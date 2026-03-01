import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getReview, reviews } from "@/lib/content";
import { offerByKey } from "@/lib/offers";
import { renderMarkdown, buildToc } from "@/lib/markdown";
import { AffiliateDisclosureBanner } from "@/components/AffiliateDisclosureBanner";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AffiliateButton } from "@/components/AffiliateLink";
import { CountdownTimer } from "@/components/CountdownTimer";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { LOCALES, type Locale, isLocale } from "@/lib/i18n";
import { localePath } from "@/components/LocaleLink";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => reviews.map((r) => ({ locale, slug: r.slug })));
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
  const review = getReview(params.slug);
  if (!review) return {};
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  return {
    title: review.title,
    description: review.description,
    alternates: { canonical: localePath(locale, `/review/${review.slug}`) },
    openGraph: {
      type: "article",
      title: review.title,
      description: review.description,
      url: localePath(locale, `/review/${review.slug}`)
    }
  };
}

export default function ReviewPage({ params }: { params: { locale: string; slug: string } }) {
  const review = getReview(params.slug);
  if (!review) return notFound();
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";

  const offer = offerByKey[review.productKey];
  const html = renderMarkdown(review.content);
  const toc = buildToc(review.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: offer.name,
    description: review.description,
    brand: { "@type": "Organization", name: "BizLaunch Xeer" },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5"
      },
      author: { "@type": "Organization", name: "BizLaunch Xeer" }
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: review.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-10">
      <SeoJsonLd data={jsonLd} />
      <SeoJsonLd data={jsonLdFaq} />

      <AffiliateDisclosureBanner />

      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_280px]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="solid">{offer.badge}</Badge>
            <span className="text-xs text-white/60">Updated {new Date(review.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
          </div>
          <h1 className="mt-3 font-serif text-4xl tracking-tight text-white md:text-5xl">{review.title}</h1>
          <p className="mt-4 text-white/70">{review.description}</p>

          {/* Sales section with countdown */}
          <div className="mt-7 rounded-2xl border border-[rgba(212,175,55,0.30)] bg-white/5 p-6 shadow-gold">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Our recommendation</p>
                <p className="mt-1 text-sm text-white/70">If it matches your situation, take the next step below.</p>
              </div>
              <CountdownTimer hours={24} />
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <AffiliateButton href={offer.goPath} label="Visit Offer" productKey={offer.key} />
              <AffiliateButton href={localePath(locale, "/free-guide")} label="Get the Free Guide" productKey={offer.key} variant="outline" />
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-white">Pros</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/80">
                  {review.pros.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-600" /> {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-white">Cons</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/80">
                  {review.cons.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40" /> {c}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-white">Who it’s for</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-white/80">
                {review.whoItsFor.map((w) => (
                  <li key={w} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-600" /> {w}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div
            className="prose prose-invert prose-lux mt-10 max-w-none"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-serif text-2xl text-white">FAQs</p>
            <div className="mt-4 space-y-4">
              {review.faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="font-semibold text-white">{f.q}</p>
                  <p className="mt-2 text-sm text-white/70">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="md:pt-2">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">At a glance</p>
              <div className="mt-3 text-sm text-white/70">
                <p>Rating: <span className="text-white">{review.rating.toFixed(1)} / 5</span></p>
                <p className="mt-1">Badge: <span className="text-gold-200">{offer.badge}</span></p>
                <p className="mt-1">Commission: <span className="text-white">{offer.avgCommission}</span></p>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <AffiliateButton href={offer.goPath} label="Visit Offer" productKey={offer.key} />
                <AffiliateButton href="/compare" label="Compare Alternatives" productKey={offer.key} variant="outline" />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Table of contents</p>
              <nav className="mt-3 space-y-2 text-sm">
                {toc.length ? (
                  toc.map((t) => (
                    <a
                      key={t.id}
                      href={`#${t.id}`}
                      className={`block text-white/70 hover:text-gold-100 ${
                        t.depth === 3 ? "pl-3 text-[13px]" : ""
                      }`}
                    >
                      {t.text}
                    </a>
                  ))
                ) : (
                  <p className="text-white/50">No sections</p>
                )}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
