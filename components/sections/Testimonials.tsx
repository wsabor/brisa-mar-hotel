import type { TestimonialsContent } from "@/content/site";
import { Carousel } from "@/components/ui/Carousel";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Testimonials({ eyebrow, title, testimonials }: TestimonialsContent) {
  return (
    <section className="bg-bg px-6 py-24 md:px-12">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{title}</h2>
      <div className="mt-10">
        <Carousel>
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="w-80 shrink-0 snap-start rounded-2xl bg-surface p-6"
            >
              <p className="font-display text-xl text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-ink-soft">
                {testimonial.author} &mdash; {testimonial.role}
              </footer>
            </blockquote>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
