export type OfferBadge = "Best Value" | "Editor's Choice" | "Most Popular" | "Specialized";

export type Offer = {
  key: "entry" | "highTicket" | "upsell" | "toolkit";
  name: string;
  badge: OfferBadge;
  avgCommission: string;
  description: string;
  bullets: string[];
  goPath: string; // /go/[product]
};

export const offers: Offer[] = [
  {
    key: "entry",
    name: "Business Launch Starter Course",
    badge: "Best Value",
    avgCommission: "$40 avg commission",
    description:
      "A structured, beginner-friendly launch plan with templates and step-by-step execution.",
    bullets: [
      "30-day launch roadmap",
      "Core business fundamentals",
      "Templates + checklists",
      "Ideal first paid program"
    ],
    goPath: "/go/entry"
  },
  {
    key: "highTicket",
    name: "Advanced Business Accelerator Program",
    badge: "Editor's Choice",
    avgCommission: "$300 avg commission",
    description:
      "High-touch coaching + systems for entrepreneurs who want traction faster and with fewer mistakes.",
    bullets: [
      "Advanced validation",
      "Offer + pricing strategy",
      "Acquisition systems",
      "Scale-ready operations"
    ],
    goPath: "/go/high-ticket"
  },
  {
    key: "upsell",
    name: "ConvertKit (Email Marketing SaaS)",
    badge: "Most Popular",
    avgCommission: "$30–$50 recurring",
    description:
      "Email is your highest-ROI channel. ConvertKit helps you capture leads, automate sequences, and grow.",
    bullets: [
      "Creator-friendly automations",
      "Landing pages + forms",
      "Segmentation",
      "Recurring affiliate commissions"
    ],
    goPath: "/go/convertkit"
  },
  {
    key: "toolkit",
    name: "Business Validation Toolkit",
    badge: "Specialized",
    avgCommission: "$70 commission",
    description:
      "Research, validation, and positioning assets to reduce risk and confirm demand before building.",
    bullets: [
      "Market research templates",
      "Customer interview scripts",
      "Positioning framework",
      "Validation scorecards"
    ],
    goPath: "/go/toolkit"
  }
];

export const offerByKey = Object.fromEntries(offers.map((o) => [o.key, o])) as Record<
  Offer["key"],
  Offer
>;
