import Link from "next/link";
import { offers } from "@/lib/offers";
import { Badge } from "@/components/ui/badge";

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/5">
          <tr>
            <th className="px-4 py-3 font-semibold text-white">Offer</th>
            <th className="px-4 py-3 font-semibold text-white">Best for</th>
            <th className="px-4 py-3 font-semibold text-white">Badge</th>
            <th className="px-4 py-3" />
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {offers.map((o) => (
            <tr key={o.key} className="hover:bg-white/[0.03]">
              <td className="px-4 py-4">
                <div className="font-medium text-white">{o.name}</div>
                <div className="text-xs text-white/60">{o.avgCommission}</div>
              </td>
              <td className="px-4 py-4 text-white/75">
                {o.key === "entry" && "First-time founders who need a roadmap"}
                {o.key === "highTicket" && "Founders who want acceleration + support"}
                {o.key === "upsell" && "Anyone building email as a growth engine"}
                {o.key === "toolkit" && "Founders validating demand before building"}
              </td>
              <td className="px-4 py-4">
                <Badge>{o.badge}</Badge>
              </td>
              <td className="px-4 py-4">
                <Link className="text-gold-200 hover:text-gold-100" href={o.goPath}>
                  View →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
