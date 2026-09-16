import type { ContactContent } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Contact({ eyebrow, title, cards }: ContactContent) {
  return (
    <section id="contato" className="bg-surface px-6 py-24 md:px-12">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{title}</h2>
        </div>
        <div className="flex flex-col gap-4">
          {cards.map((card) => (
            <div key={card.label} className="rounded-2xl bg-bg p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">{card.label}</p>
              <p className="mt-2 text-ink">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
