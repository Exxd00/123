import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="group flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-gold-gradient shadow-gold" aria-hidden />
          <span className="font-serif text-lg tracking-tight">
            BizLaunch <span className="text-gold-200">Xeer</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <Link className="hover:text-gold-100" href="/blog">Blog</Link>
          <Link className="hover:text-gold-100" href="/reviews">Reviews</Link>
          <Link className="hover:text-gold-100" href="/compare">Compare</Link>
          <Link className="hover:text-gold-100" href="/about">About</Link>
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <Link href="/free-guide">Get Free Guide</Link>
        </Button>
        <Button asChild size="sm" className="md:hidden">
          <Link href="/free-guide">Free Guide</Link>
        </Button>
      </div>
    </header>
  );
}
