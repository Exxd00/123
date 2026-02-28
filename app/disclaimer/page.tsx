import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Affiliate and earnings disclaimer for BizLaunch Xeer."
};

export default function DisclaimerPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-serif text-4xl tracking-tight text-white">Disclaimer</h1>
      <p className="mt-4 text-white/70">
        We publish educational content. No income claims. No guarantees.
      </p>

      <div className="prose prose-invert prose-lux mt-8 max-w-none">
        <h2>Affiliate disclosure</h2>
        <p>
          BizLaunch Xeer may earn commissions from affiliate links on this site. This does not
          increase your cost.
        </p>

        <h2>Earnings disclaimer</h2>
        <p>
          Any examples are illustrative and not promises of results. Your outcomes depend on your
          effort, market conditions, and many factors beyond our control.
        </p>

        <h2>Professional advice</h2>
        <p>
          Content is for informational purposes only and does not constitute legal, financial, or
          tax advice.
        </p>
      </div>
    </section>
  );
}
