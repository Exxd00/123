import type { Metadata } from "next";
import Link from "next/link";
import { LocaleLink } from "@/components/LocaleLink";
import { Button } from "@/components/ui/button";
import { offerByKey } from "@/lib/offers";
import { ThankYouTracker } from "@/components/ThankYouTracker";

export const metadata: Metadata = {
  title: "Thank You",
  description: "You’re in. Confirm your subscription and get the PDF."
};

export default function ThankYouPage() {
  const entry = offerByKey.entry;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <ThankYouTracker />
      <div className="mx-auto max-w-2xl rounded-2xl border border-[rgba(212,175,55,0.30)] bg-white/5 p-8 shadow-gold">
        <h1 className="font-serif text-4xl tracking-tight text-white">Check your inbox</h1>
        <p className="mt-4 text-white/70">
          Please confirm your subscription (double opt‑in). Once confirmed, the PDF will be delivered automatically.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
          <p className="text-sm font-semibold text-white">Recommended next step (soft upsell)</p>
          <p className="mt-2 text-sm text-white/70">
            If you want the complete step‑by‑step course with templates, the <span className="text-white">{entry.name}</span> is our Best Value pick.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href={entry.goPath}>See Best Value Course</Link>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/blog">Read the Blog</LocaleLink>
            </Button>
          </div>
        </div>

        <p className="mt-6 text-xs text-white/50">
          If you don’t see the email, check Promotions/Spam and whitelist our sender.
        </p>
      </div>
    </section>
  );
}
