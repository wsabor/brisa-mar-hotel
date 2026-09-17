import type { ContactContent } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Contact({ eyebrow, title, cards }: ContactContent) {
  return (
    <section id="contato" className="bg-surface px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{title}</h2>
        </Reveal>
        <div className="flex flex-col gap-4">
          {cards.map((card, index) => (
            <Reveal key={card.label} delay={index * 0.08}>
              <div className="rounded-2xl bg-bg p-6 transition-colors duration-300 hover:bg-ink/5">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">{card.label}</p>
                <p className="mt-2 font-display text-lg text-ink">{card.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
