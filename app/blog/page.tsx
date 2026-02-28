import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Business Blog",
  description: "Execution-first business and entrepreneurship playbooks."
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-4xl tracking-tight text-white">Blog</h1>
      <p className="mt-3 max-w-2xl text-white/70">
        Value-first guides on launching, validating, and scaling modern businesses.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {sorted.map((p) => (
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
    </section>
  );
}
