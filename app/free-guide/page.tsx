import type { Metadata } from "next";
import { ConvertKitForm } from "@/components/ConvertKitForm";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Free Guide",
  description: "Download: Launch Your Profitable Business in 30 Days (PDF)."
};

export default function FreeGuidePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold-200">LEAD MAGNET</p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight text-white md:text-5xl">
            Launch Your Profitable Business in 30 Days
          </h1>
          <p className="mt-4 text-white/70">
            A practical, founder-grade PDF that turns ideas into a validated offer—without hype.
          </p>
          <div className="mt-6 grid gap-4">
            {["Market selection & positioning", "Validation checklist + scripts", "Offer ladder framework", "Email funnel blueprint"].map((x) => (
              <div key={x} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold-600" aria-hidden />
                <p className="text-sm text-white/80">{x}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <ConvertKitForm
            title="Send the PDF to your inbox"
            subtitle="Double opt‑in enabled. Confirm once and you’ll receive the download automatically."
            buttonText="Get the PDF"
          />
          <div className="mt-6 grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-white">What happens next</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 text-sm text-white/75">
                  <li>1) Enter your email and submit.</li>
                  <li>2) Confirm your subscription (double opt‑in).</li>
                  <li>3) Receive the PDF instantly.</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
