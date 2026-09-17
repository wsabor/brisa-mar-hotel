import type { TestimonialsContent } from "@/content/site";
import { Carousel } from "@/components/ui/Carousel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials({ eyebrow, title, testimonials }: TestimonialsContent) {
  return (
    <section className="bg-bg px-6 py-24 md:px-12">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{title}</h2>
      </Reveal>
      <div className="mt-10">
        <Carousel>
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 0.08} className="w-80 shrink-0">
              <blockquote className="rounded-2xl bg-surface p-6 transition-shadow duration-300 hover:shadow-lg">
                <p className="font-display text-xl text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="mt-4 text-sm text-ink-soft">
                  {testimonial.author} &mdash; {testimonial.role}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
