"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/tracking";

export function AffiliateButton({
  href,
  label,
  productKey,
  variant = "default"
}: {
  href: string;
  label: string;
  productKey: string;
  variant?: "default" | "outline";
}) {
  return (
    <Button
      asChild
      variant={variant}
      onClick={() => {
        track("affiliate_click", { product: productKey, href });
        track("redirect_go", { product: productKey });
      }}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
