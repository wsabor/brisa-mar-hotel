import Image from "next/image";
import type { ExperienceContent } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Experience({
  eyebrow,
  title,
  paragraph,
  linkLabel,
  linkHref,
  image,
}: ExperienceContent) {
  return (
    <section
      id="experiencia"
      className="relative flex min-h-[85vh] items-end overflow-hidden px-6 py-16 md:px-12"
    >
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/20" />
      <Reveal className="relative z-10 max-w-md rounded-2xl border border-surface/10 bg-ink/50 p-8 text-surface backdrop-blur-md">
        <Eyebrow tone="onImage">{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 text-sm text-surface/80">{paragraph}</p>
        <a
          href={linkHref}
          className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark"
        >
          {linkLabel}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </Reveal>
    </section>
  );
}
