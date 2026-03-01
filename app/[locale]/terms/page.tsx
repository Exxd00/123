import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for BizLaunch Xeer."
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-serif text-4xl tracking-tight text-white">Terms of Use</h1>
      <p className="mt-4 text-white/70">
        This is a template. Replace bracketed fields and consult counsel if needed.
      </p>

      <div className="prose prose-invert prose-lux mt-8 max-w-none">
        <h2>Use of the site</h2>
        <p>
          By accessing this site, you agree to use it for lawful purposes and not to violate
          any applicable laws.
        </p>

        <h2>No guarantees</h2>
        <p>
          We provide educational content. We do not guarantee results, income, or business outcomes.
        </p>

        <h2>Affiliate relationships</h2>
        <p>
          Some links are affiliate links. We may earn a commission if you purchase through them.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, we are not liable for any damages arising from
          your use of this site.
        </p>

        <h2>Contact</h2>
        <p>Questions? Email [YOUR EMAIL].</p>
      </div>
    </section>
  );
}
