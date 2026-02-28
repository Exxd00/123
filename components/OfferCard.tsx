import Link from "next/link";
import { Offer } from "@/lib/offers";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function OfferCard({ offer, featured = false }: { offer: Offer; featured?: boolean }) {
  return (
    <Card className={featured ? "border-[rgba(212,175,55,0.45)] shadow-gold" : ""}>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-white">{offer.name}</CardTitle>
          <Badge variant={featured ? "solid" : "default"}>{offer.badge}</Badge>
        </div>
        <p className="mt-2 text-sm text-white/70">{offer.description}</p>
        <p className="mt-3 text-xs font-semibold text-gold-200">{offer.avgCommission}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-white/80">
          {offer.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={offer.goPath}>See Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
