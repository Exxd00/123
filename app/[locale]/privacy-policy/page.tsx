import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for BizLaunch Xeer."
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-serif text-4xl tracking-tight text-white">Privacy Policy</h1>
      <p className="mt-4 text-white/70">
        This is a US-based template. Replace bracketed fields and consult counsel if needed.
      </p>

      <div className="prose prose-invert prose-lux mt-8 max-w-none">
        <h2>Information we collect</h2>
        <p>
          We collect information you provide (such as email address) when you subscribe, and
          limited analytics data via cookies.
        </p>

        <h2>How we use information</h2>
        <ul>
          <li>Deliver the requested lead magnet and emails</li>
          <li>Improve site performance and content relevance</li>
          <li>Measure advertising and affiliate performance</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We use cookies for analytics and marketing measurement. You can reject non-essential
          cookies via the cookie banner.
        </p>

        <h2>Third parties</h2>
        <p>
          We use ConvertKit for email delivery. We may also use analytics and advertising
          platforms (Google Analytics, Meta Pixel, Google Ads).
        </p>

        <h2>Your rights</h2>
        <p>
          You may unsubscribe at any time. If you have questions, contact us at [YOUR EMAIL].
        </p>

        <h2>Updates</h2>
        <p>We may update this policy from time to time.</p>
      </div>
    </section>
  );
}
