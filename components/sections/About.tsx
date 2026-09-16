import type { AboutContent } from "@/content/site";
import { Counter } from "@/components/ui/Counter";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function About({ eyebrow, title, paragraph, counters }: AboutContent) {
  return (
    <section id="sobre" className="bg-surface px-6 py-24 md:px-12">
      <div className="mx-auto max-w-3xl rounded-2xl bg-bg p-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{title}</h2>
        <p className="mt-6 text-ink-soft">{paragraph}</p>
        <div className="mt-10 flex gap-10">
          {counters.map((counter) => (
            <Counter key={counter.label} {...counter} />
          ))}
        </div>
      </div>
    </section>
  );
}
