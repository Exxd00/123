import { cn } from "@/lib/utils";

export function Section({
  title,
  eyebrow,
  children,
  className
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-200">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 font-serif text-3xl tracking-tight text-white md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
