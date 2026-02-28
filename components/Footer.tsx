import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div className="space-y-2">
          <p className="font-serif text-lg">
            BizLaunch <span className="text-gold-200">Xeer</span>
          </p>
          <p className="text-sm text-white/60">
            Premium guidance and curated tools for business & entrepreneurship.
          </p>
          <p className="text-xs text-white/45">© {new Date().getFullYear()} BizLaunch Xeer</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <Link className="text-white/70 hover:text-gold-100" href="/blog">Blog</Link>
          <Link className="text-white/70 hover:text-gold-100" href="/reviews">Reviews</Link>
          <Link className="text-white/70 hover:text-gold-100" href="/compare">Compare</Link>
          <Link className="text-white/70 hover:text-gold-100" href="/free-guide">Free Guide</Link>
          <Link className="text-white/70 hover:text-gold-100" href="/about">About</Link>
          <Link className="text-white/70 hover:text-gold-100" href="/disclaimer">Disclaimer</Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-white/70">Legal</p>
          <div className="flex flex-col gap-2">
            <Link className="text-white/70 hover:text-gold-100" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="text-white/70 hover:text-gold-100" href="/terms">Terms</Link>
            <Link className="text-white/70 hover:text-gold-100" href="/disclaimer">
              Affiliate Disclosure
            </Link>
          </div>
          <p className="text-xs text-white/45">
            We may earn commissions through affiliate links. We never make income
            guarantees.
          </p>
        </div>
      </div>
    </footer>
  );
}
