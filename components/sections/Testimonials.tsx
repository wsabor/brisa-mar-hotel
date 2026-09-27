import type { TestimonialsContent } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials({ eyebrow, title, testimonials }: TestimonialsContent) {
  return (
    <section className="bg-bg px-6 py-24 md:px-12">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{title}</h2>
      </Reveal>
      <Reveal className="mt-10">
        <Marquee aria-label="Depoimentos" duration={70} className="-mx-6 py-4 md:-mx-12">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="flex min-h-56 w-80 shrink-0 flex-col justify-between self-stretch rounded-2xl bg-surface p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <p className="font-display text-xl text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-ink-soft">
                {testimonial.author} &mdash; {testimonial.role}
              </footer>
            </blockquote>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
