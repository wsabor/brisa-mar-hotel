import type { ExperienceContent } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Experience({ eyebrow, title, paragraph, linkLabel, linkHref }: ExperienceContent) {
  return (
    <section id="experiencia" className="relative flex min-h-[85vh] items-end overflow-hidden px-6 py-16 md:px-12">
      <PlaceholderImage tone="dark" className="absolute inset-0" />
      <div className="relative z-10 max-w-md rounded-2xl border border-surface/10 bg-ink/50 p-8 text-surface backdrop-blur-md">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 text-sm text-surface/80">{paragraph}</p>
        <a href={linkHref} className="mt-6 inline-block text-sm font-medium text-accent hover:text-accent-dark">
          {linkLabel} &rarr;
        </a>
      </div>
    </section>
  );
}
