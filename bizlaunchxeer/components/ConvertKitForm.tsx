"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/tracking";

export function ConvertKitForm({
  title = "Get the Free 30‑Day Launch Plan",
  subtitle = "Instant delivery via email (double opt‑in enabled).",
  buttonText = "Send me the PDF",
  className = ""
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
}) {
  const formId = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
  const tagId = process.env.NEXT_PUBLIC_CONVERTKIT_TAG_ID;
  const redirectPath = process.env.NEXT_PUBLIC_CONVERTKIT_REDIRECT || "/thank-you";

  const action = useMemo(() => {
    if (!formId) return "";
    return `https://app.convertkit.com/forms/${formId}/subscriptions`;
  }, [formId]);

  const [email, setEmail] = useState("");

  if (!formId) {
    return (
      <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 ${className}`}>
        <p className="font-serif text-xl text-white">ConvertKit not configured</p>
        <p className="mt-2 text-sm text-white/70">
          Set <span className="text-gold-200">NEXT_PUBLIC_CONVERTKIT_FORM_ID</span> in your environment.
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border border-[rgba(212,175,55,0.30)] bg-white/5 p-6 shadow-gold ${className}`}>
      <div className="max-w-xl">
        <p className="font-serif text-2xl tracking-tight text-white">{title}</p>
        <p className="mt-2 text-sm text-white/70">{subtitle}</p>
      </div>

      <form
        className="mt-5 flex flex-col gap-3 sm:flex-row"
        action={action}
        method="post"
        onSubmit={() => {
          track("email_submit", { source: "convertkit_form" });
        }}
      >
        <input type="hidden" name="redirect" value={redirectPath} />
        {tagId ? <input type="hidden" name="tags" value={tagId} /> : null}

        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email_address"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="h-11 w-full rounded-xl border border-white/10 bg-black/60 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-[rgba(212,175,55,0.65)] focus:ring-2 focus:ring-gold-600/30 sm:flex-1"
        />
        <Button type="submit" className="sm:w-auto">
          {buttonText}
        </Button>
      </form>

      <p className="mt-3 text-xs text-white/50">
        By subscribing, you agree to receive emails from BizLaunch Xeer. Unsubscribe anytime.
      </p>
    </div>
  );
}
