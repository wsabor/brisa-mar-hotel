import type { AboutContent } from "@/content/site";
import { Counter } from "@/components/ui/Counter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function About({ eyebrow, title, paragraph, counters }: AboutContent) {
  return (
    <section id="sobre" className="relative z-10 bg-surface px-6 pb-24 md:px-12">
      <div className="mx-auto -mt-24 grid max-w-5xl gap-10 rounded-2xl bg-bg p-8 shadow-xl md:-mt-32 md:grid-cols-2 md:p-14">
        <div className="flex flex-col justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{title}</h2>
          <p className="mt-6 text-ink-soft">{paragraph}</p>
          <div className="mt-10 flex gap-10">
            {counters.map((counter) => (
              <Counter key={counter.label} {...counter} />
            ))}
          </div>
        </div>
        <PlaceholderImage tone="warm" className="min-h-64 rounded-xl md:min-h-full" />
      </div>
    </section>
  );
}
