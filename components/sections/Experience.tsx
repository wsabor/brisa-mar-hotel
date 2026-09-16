import type { ExperienceContent } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Experience({ eyebrow, title, paragraph, linkLabel, linkHref }: ExperienceContent) {
  return (
    <section id="experiencia" className="relative flex min-h-[80vh] items-end bg-ink px-6 py-16 md:px-12">
      <div className="max-w-md rounded-2xl bg-ink/70 p-8 text-surface backdrop-blur">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 text-sm text-surface/80">{paragraph}</p>
        <a href={linkHref} className="mt-6 inline-block text-sm font-medium text-accent">
          {linkLabel} &rarr;
        </a>
      </div>
    </section>
  );
}
