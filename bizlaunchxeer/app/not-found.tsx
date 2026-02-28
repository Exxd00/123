import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-serif text-5xl tracking-tight text-white">404</h1>
      <p className="mt-4 text-white/70">That page doesn’t exist. Let’s get you back on track.</p>
      <div className="mt-8 flex gap-3">
        <Button asChild><Link href="/">Home</Link></Button>
        <Button asChild variant="outline"><Link href="/blog">Blog</Link></Button>
      </div>
    </section>
  );
}
