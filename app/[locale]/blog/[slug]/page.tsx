import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/content";
import { buildToc, renderMarkdown } from "@/lib/markdown";
import { CtaBlock } from "@/components/CtaBlock";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { LOCALES, type Locale, isLocale } from "@/lib/i18n";
import { LocaleLink, localePath } from "@/components/LocaleLink";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })));
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: localePath(locale, `/blog/${post.slug}`) },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: localePath(locale, `/blog/${post.slug}`)
    }
  };
}

export default function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return notFound();
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";

  const toc = buildToc(post.content);
  const html = renderMarkdown(post.content);

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "BizLaunch Xeer" },
    mainEntityOfPage: { "@type": "WebPage", "@id": localePath(locale, `/blog/${post.slug}`) }
  };

  const faqs = post.faqs;
  const jsonLdFaq =
    faqs && faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a }
          }))
        }
      : null;

  return (
    <article className="mx-auto max-w-6xl px-4 py-10">
      <SeoJsonLd data={jsonLdArticle} />
      {jsonLdFaq ? <SeoJsonLd data={jsonLdFaq} /> : null}

      <div className="grid gap-10 md:grid-cols-[1fr_280px]">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold-200">{post.category}</p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight text-white md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-white/70">{post.description}</p>
          <div className="mt-5 flex items-center gap-4 text-xs text-white/60">
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
          </div>

          <CtaBlock />

          <div
            className="prose prose-invert prose-lux max-w-none"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <CtaBlock
            title="Want the exact funnel we use?"
            description="Lead magnet → 6-email sequence → ethical product ladder."
            primaryHref={localePath(locale, "/compare")}
            primaryText="See the Funnel"
            secondaryHref={localePath(locale, "/reviews")}
            secondaryText="Browse Reviews"
          />

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/70">
            <p>
              Continue: <LocaleLink className="text-gold-200 hover:text-gold-100" href="/reviews">Best tools & programs</LocaleLink>
            </p>
          </div>
        </div>

        <aside className="md:pt-2">
          <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/5 p-5">
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
        </aside>
      </div>
    </article>
  );
}
