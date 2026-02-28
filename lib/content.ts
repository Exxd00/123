export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  category: "Launch" | "Models" | "Validation" | "Email" | "Mindset" | "Scaling";
  readingTime: string;
  content: string; // markdown
  faqs?: { q: string; a: string }[];
  featured?: boolean;
};

export type Review = {
  slug: string;
  title: string;
  description: string;
  date: string;
  productKey: "entry" | "highTicket" | "upsell" | "toolkit";
  rating: number; // 1-5
  pros: string[];
  cons: string[];
  whoItsFor: string[];
  content: string; // markdown
  faqs: { q: string; a: string }[];
};

export const posts: Post[] = [
  {
    slug: "how-to-start-a-profitable-business-2026",
    title: "How to Start a Profitable Business in 2026",
    description:
      "A modern, practical blueprint for choosing a market, validating demand, launching lean, and scaling responsibly.",
    date: "2026-01-10",
    category: "Launch",
    readingTime: "11 min",
    featured: true,
    content: `## The 2026 launch reality\n\nMarkets move fast. The founders who win in 2026 don’t just *build*—they validate, position, and distribute with intent.\n\n### What a “profitable” business means\nProfitability isn’t vibes. It’s **reliable demand + a repeatable way to acquire customers + healthy unit economics**.\n\n## Step 1: Pick a painful, specific problem\nAvoid broad markets. Look for a clear, expensive pain with a known buyer.\n\n## Step 2: Validate demand before you build\nRun 10–20 customer conversations, then test with a landing page and an offer.\n\n## Step 3: Craft a simple offer\nKeep the first offer tight: outcome, timeframe, price, and proof.\n\n## Step 4: Build the smallest viable system\nStart with: landing page → email capture → simple delivery.\n\n## Step 5: Get distribution early\nEmail is your best asset. Build it from day one.\n\n## Best next action\nIf you want a guided plan (templates included), start here: **/free-guide**.\n\n### FAQs\n\n#### How much money do I need to start?\nEnough for a lean test: domain, landing page, and small experiments. Start small and prove demand first.\n\n#### What if I’m not an expert?\nYou don’t need celebrity status. You need a specific problem, clear messaging, and consistent execution.`
  },
  {
    slug: "best-online-business-models-for-beginners",
    title: "Best Online Business Models for Beginners",
    description: "A practical comparison of beginner-friendly online models—what to pick and what to avoid.",
    date: "2026-01-14",
    category: "Models",
    readingTime: "9 min",
    featured: true,
    content: `## The best model is the one you can ship\n\nBeginners don’t need complexity. You need **speed to first customer**.\n\n## Quick comparison\n\n| Model | Speed to revenue | Complexity | Best for |\n|---|---:|---:|---|\n| Freelance / service | Fast | Low | Skill-based founders |\n| Productized service | Medium | Medium | Repeatable delivery |\n| Digital products | Medium | Medium | Audience + expertise |\n| Affiliate content | Slow → fast | Medium | Writers + SEO |\n| SaaS | Slow | High | Technical teams |\n\n## Recommendations\n\n### 1) Service → product ladder\nStart with a service to learn the market, then turn it into templates, coaching, or software.\n\n### 2) Affiliate + email list\nIf you like writing, affiliate content becomes powerful when paired with an email funnel.\n\n## CTA\nWant the step-by-step plan? Get the free guide: **/free-guide**.`
  },
  {
    slug: "7-side-hustles-that-can-scale-to-6-figures",
    title: "7 Side Hustles That Can Scale to 6 Figures",
    description:
      "Not every side hustle scales. Here are seven that can—plus the systems that make the difference.",
    date: "2026-01-20",
    category: "Models",
    readingTime: "10 min",
    content: `## The scaling test\n\nA side hustle scales when delivery isn’t 1:1 forever.\n\n## 7 scalable paths\n\n### 1) Productized services\n### 2) Niche content + affiliate\n### 3) Workshops → cohort\n### 4) Templates + SOP packs\n### 5) Micro-agency with specialists\n### 6) Paid communities\n### 7) B2B lead-gen systems\n\n## The lever that changes everything\nEmail. It compounds.\n\n> If you’re building a list, we recommend ConvertKit for simple automations.\n\n**Next step:** Get the 30‑day plan at **/free-guide**.`
  },
  {
    slug: "best-email-marketing-tools-for-startups",
    title: "Best Email Marketing Tools for Startups",
    description: "A founder-friendly guide to choosing the right email platform without overpaying or overbuilding.",
    date: "2026-01-25",
    category: "Email",
    readingTime: "8 min",
    content: `## Email is your highest-ROI channel\n\nStartups need simple: forms, automations, segmentation, and deliverability.\n\n## Comparison\n\n| Tool | Best for | Notes |\n|---|---|---|\n| ConvertKit | creators + startups | fast setup + automations |\n| Mailchimp | general marketing | can get complex quickly |\n| ActiveCampaign | advanced automation | powerful, heavier setup |\n\n## Our pick\nConvertKit is the fastest path to a working funnel.\n\n**See the full review:** /review/convertkit` ,
    faqs: [
      { q: "Do I need email if I run ads?", a: "Yes. Email turns paid traffic into an owned asset." },
      { q: "What matters most early?", a: "Deliverability + a simple welcome sequence." }
    ]
  },
  {
    slug: "convertkit-review",
    title: "ConvertKit Review (2026): Worth It for Entrepreneurs?",
    description: "A practical, founder-focused review—pros, cons, pricing perspective, and who should use it.",
    date: "2026-02-01",
    category: "Email",
    readingTime: "12 min",
    content: `## Our take\n\nConvertKit is a strong choice if you want **speed, clarity, and reliable automations** without enterprise complexity.\n\n## What ConvertKit does well\n- Forms + landing pages\n- Automations for welcome + nurture\n- Tag-based segmentation\n\n## Where it’s not ideal\n- You need extremely complex CRM-style pipelines\n\n## Recommended starter funnel\n1) Lead magnet\n2) 6-email sequence\n3) Soft pitch → high ticket\n\n**Try ConvertKit:** /go/convertkit`
  },
  {
    slug: "best-business-courses-for-entrepreneurs",
    title: "Best Business Courses for Entrepreneurs",
    description: "A curated list of business courses that prioritize execution, not motivation.",
    date: "2026-02-05",
    category: "Launch",
    readingTime: "9 min",
    content: `## How we evaluate courses\n\nWe look for: structure, templates, real execution, and clear outcomes.\n\n## Top picks\n\n### Best value: Business Launch Starter Course\nGreat for first-time founders who need a plan.\n\n### Editor’s choice: Advanced Business Accelerator\nBest for founders who want speed with support.\n\n**Compare options:** /compare`
  },
  {
    slug: "how-to-validate-a-business-idea",
    title: "How to Validate a Business Idea",
    description: "A no-fluff validation process: market research, interviews, landing page tests, and pre-sales.",
    date: "2026-02-08",
    category: "Validation",
    readingTime: "10 min",
    featured: true,
    content: `## Validation prevents expensive mistakes\n\nMost founders fail because they skip proof.\n\n## A simple validation framework\n\n### 1) Define the buyer\n### 2) Interview for pain + urgency\n### 3) Build a one-page offer\n### 4) Run a test (content or small ads)\n### 5) Pre-sell if possible\n\n## Tools that help\nThe Business Validation Toolkit is a solid shortcut for templates and scripts.\n\n**See it here:** /go/toolkit`
  },
  {
    slug: "business-plan-template-guide",
    title: "Business Plan Template Guide",
    description: "A modern business plan for 2026: lean, measurable, and built for execution.",
    date: "2026-02-12",
    category: "Launch",
    readingTime: "7 min",
    content: `## A business plan should drive action\n\nForget 40-page documents. Use a plan that improves decisions weekly.\n\n## The 1-page template\n- Customer\n- Problem\n- Solution\n- Differentiation\n- Pricing\n- Acquisition channels\n- Costs\n- Metrics\n\n## CTA\nWant the fill-in template and weekly execution checklist? Get the free guide: /free-guide`
  },
  {
    slug: "passive-income-myths-and-truth",
    title: "Passive Income Myths (And Truth)",
    description: "What ‘passive’ really means, how it’s built, and the traps that waste years.",
    date: "2026-02-16",
    category: "Mindset",
    readingTime: "8 min",
    content: `## The myth\n\nMost ‘passive income’ claims ignore the work required to build assets.\n\n## The truth\n\nPassive is **front-loaded effort + durable distribution**.\n\n## Practical path\n\nBuild an email list, publish consistently, and recommend tools you genuinely use.\n\n**Start with the launch plan:** /free-guide`
  },
  {
    slug: "scaling-from-1k-to-10k-per-month",
    title: "Scaling From $1K to $10K/Month",
    description: "The systems shift that matters: positioning, offers, distribution, and operational discipline.",
    date: "2026-02-20",
    category: "Scaling",
    readingTime: "12 min",
    content: `## What changes at $10K/month\n\nYou can’t ‘hustle’ your way there forever. You need systems.\n\n## The four levers\n\n### 1) Positioning\n### 2) Offer ladder\n### 3) Distribution (email + content + partnerships)\n### 4) Operations\n\n## Our recommended ladder\n\nEntry offer → email sequence → high ticket.\n\n**See the recommended path:** /compare`
  }
];

export const reviews: Review[] = [
  {
    slug: "business-launch-starter-course",
    title: "Business Launch Starter Course Review",
    description:
      "A structured, beginner-friendly launch curriculum. Ideal if you want a clear 30-day roadmap.",
    date: "2026-02-02",
    productKey: "entry",
    rating: 4.6,
    pros: ["Clear roadmap", "Templates included", "Good for beginners"],
    cons: ["Not for advanced scaling", "Requires consistent execution"],
    whoItsFor: ["First-time founders", "Side-hustlers", "Builders who want structure"],
    content: `## Summary\n\nIf you want a practical launch plan with templates, this is a strong “first paid” program.\n\n## What you get\n- 30-day roadmap\n- Checklists + templates\n- Launch fundamentals\n\n## Our recommendation\nStart here if you’re overwhelmed and want a step-by-step path.\n\n**Access the course:** /go/entry`,
    faqs: [
      { q: "Is it beginner friendly?", a: "Yes—designed for first launches." },
      { q: "How fast can I see results?", a: "With consistent execution, you can validate and launch within 30 days." }
    ]
  },
  {
    slug: "advanced-business-accelerator-program",
    title: "Advanced Business Accelerator Program Review",
    description:
      "High-touch coaching + systems. Best for founders who already have momentum and want to accelerate.",
    date: "2026-02-03",
    productKey: "highTicket",
    rating: 4.8,
    pros: ["High-touch support", "Systems + accountability", "Strong strategic depth"],
    cons: ["Higher price point", "Not necessary for absolute beginners"],
    whoItsFor: ["Founders with early traction", "Service businesses", "Operators who want systems"],
    content: `## Summary\n\nIf your biggest bottleneck is speed and clarity, this is the best “shortcut”—with support.\n\n## What you get\n- Advanced validation\n- Offer + pricing strategy\n- Acquisition playbooks\n\n**Apply / learn more:** /go/high-ticket`,
    faqs: [
      { q: "Do I need traction first?", a: "Ideally yes—at least a clear niche and an offer." },
      { q: "Is it worth it?", a: "Worth depends on your execution pace; coaching helps when speed matters." }
    ]
  },
  {
    slug: "convertkit",
    title: "ConvertKit Review (Founder Edition)",
    description:
      "A clean, creator-friendly email platform for capturing leads and running automation sequences.",
    date: "2026-02-04",
    productKey: "upsell",
    rating: 4.7,
    pros: ["Fast setup", "Great automations", "Strong segmentation"],
    cons: ["Not a full CRM", "Some features gated by plan"],
    whoItsFor: ["Affiliate sites", "Creators", "Startups building email"],
    content: `## Summary\n\nConvertKit is our “Most Popular” recommendation for building your list and automating funnels without complexity.\n\n## Best use\nLead magnet → 6-email sequence → product ladder.\n\n**Try ConvertKit:** /go/convertkit`,
    faqs: [
      { q: "Can I use it for affiliate funnels?", a: "Yes—forms, sequences, and segmentation are ideal." },
      { q: "Does it support double opt-in?", a: "Yes—enable it in your form settings." }
    ]
  },
  {
    slug: "business-validation-toolkit",
    title: "Business Validation Toolkit Review",
    description:
      "Templates and scripts to validate demand before building. Great for reducing risk and clarifying positioning.",
    date: "2026-02-06",
    productKey: "toolkit",
    rating: 4.5,
    pros: ["Excellent templates", "Clear process", "Saves time"],
    cons: ["You still need to do interviews", "Not a full course"],
    whoItsFor: ["Idea-stage founders", "Operators entering a new niche", "Anyone validating"],
    content: `## Summary\n\nA specialized toolkit that helps you move faster and avoid building the wrong thing.\n\n## Best use\nCustomer interviews + landing-page tests + pre-sell scripts.\n\n**Get the toolkit:** /go/toolkit`,
    faqs: [
      { q: "Is it beginner friendly?", a: "Yes—it’s template-driven." },
      { q: "Will it guarantee a winning idea?", a: "No—validation reduces risk, but outcomes depend on execution." }
    ]
  }
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getReview(slug: string) {
  return reviews.find((r) => r.slug === slug);
}
