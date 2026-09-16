import type { HeroContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Hero({ logoLine1, logoLine2, navLinks, ctaLabel, ctaHref, eyebrow, title }: HeroContent) {
  return (
    <section className="relative flex min-h-screen flex-col justify-between bg-ink px-6 py-6 text-surface md:px-12">
      <nav className="flex items-center justify-between">
        <span className="font-display text-lg leading-tight">
          {logoLine1}
          <br />
          {logoLine2}
        </span>
        <div className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <Button variant="outline" href={ctaHref}>
            {ctaLabel}
          </Button>
        </div>
      </nav>
      <div className="max-w-2xl pb-12">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-5xl leading-tight md:text-7xl">{title}</h1>
      </div>
    </section>
  );
}
