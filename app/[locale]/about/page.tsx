import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About BizLaunch Xeer."
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-serif text-4xl tracking-tight text-white">About BizLaunch Xeer</h1>
      <p className="mt-4 text-white/70">
        BizLaunch Xeer is a premium authority publication for business & entrepreneurship.
        We focus on execution—validation, offers, distribution, and systems.
      </p>

      <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="font-serif text-2xl text-white">Our principles</h2>
        <ul className="space-y-2 text-sm text-white/75">
          <li>• Value-first content (no hype).</li>
          <li>• No income guarantees or unrealistic claims.</li>
          <li>• Clear “who it’s for” recommendations.</li>
          <li>• Email as an owned asset—built ethically.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border border-[rgba(212,175,55,0.30)] bg-white/5 p-6 shadow-gold">
        <h2 className="font-serif text-2xl text-white">Contact</h2>
        <p className="mt-2 text-sm text-white/70">
          Add your contact email and business address here for compliance and trust.
        </p>
      </div>
    </section>
  );
}
