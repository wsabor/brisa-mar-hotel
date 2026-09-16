import type { BookingContent } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Booking({ title, ctaLabel, whatsappNumber, whatsappMessage }: BookingContent) {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="reserva" className="bg-ink px-6 py-24 text-center text-surface md:px-12">
      <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
      <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-8">
        {ctaLabel}
      </Button>
    </section>
  );
}
