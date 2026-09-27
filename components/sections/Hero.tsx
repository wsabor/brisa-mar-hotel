import Image from "next/image";
import type { HeroContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Hero({
  logoLine1,
  logoLine2,
  navLinks,
  ctaLabel,
  ctaHref,
  eyebrow,
  title,
  image,
}: HeroContent) {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 py-6 text-surface md:px-12">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />

      <nav className="relative z-10 flex items-center justify-between">
        <span className="font-display text-lg leading-tight">
          {logoLine1}
          <br />
          {logoLine2}
        </span>
        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-8 text-sm md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button variant="outline" href={ctaHref} className="text-sm">
            {ctaLabel}
          </Button>
        </div>
      </nav>

      <div className="relative z-10 max-w-2xl pb-12">
        <Eyebrow tone="onImage">{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-5xl leading-tight md:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
