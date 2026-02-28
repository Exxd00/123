# BizLaunch Xeer (BizLaunchxeer.com)

Premium affiliate authority website for the **Business & Entrepreneurship** niche.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- shadcn/ui-style components (minimal set)
- Hosting: Vercel
- Dark mode default (no toggle)

## Quick start
```bash
npm install
cp .env.example .env.local
npm run dev
```

## ConvertKit (Lead Magnet)
1. Create a ConvertKit form
2. Set these env vars:
   - `NEXT_PUBLIC_CONVERTKIT_FORM_ID`
   - `NEXT_PUBLIC_CONVERTKIT_TAG_ID` (optional)
   - `NEXT_PUBLIC_CONVERTKIT_REDIRECT=/thank-you`

Double opt-in is controlled inside ConvertKit.

## Affiliate links
All CTAs point to `/go/[product]`.
Edit destinations in `lib/links.ts`.

## Tracking
Set:
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_FB_PIXEL_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_ID` (optional / typically via GTM)

Tracked events:
- `affiliate_click`
- `email_submit`
- `cta_click`
- `redirect_go`
- `thank_you_visit`

## Content
- Blog posts & reviews live in `lib/content.ts`.
- Add more posts by extending the arrays.

## Performance targets
Optimized for minimal JS, semantic HTML, and fast loading.

## Deploy
Push to GitHub → Import in Vercel → Add env vars → Deploy.
