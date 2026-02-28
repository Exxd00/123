import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaBlock({
  title = "Get the 30‑Day Launch Plan",
  description = "Instant delivery via email. Practical roadmap + templates.",
  primaryHref = "/free-guide",
  primaryText = "Get the Free Guide",
  secondaryHref = "/compare",
  secondaryText = "Compare Offers"
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryText?: string;
  secondaryHref?: string;
  secondaryText?: string;
}) {
  return (
    <div className="my-10 rounded-2xl border border-[rgba(212,175,55,0.30)] bg-[rgba(255,255,255,0.04)] p-6 shadow-gold">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl text-white">{title}</p>
          <p className="mt-2 text-sm text-white/70">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href={primaryHref}>{primaryText}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={secondaryHref}>{secondaryText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
