import type { BookingContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Booking({ title, ctaLabel, whatsappNumber, whatsappMessage }: BookingContent) {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="reserva" className="bg-ink px-6 py-24 text-center text-surface md:px-12">
      <Reveal>
        <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
        <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 rounded-2xl bg-surface/10 p-4 text-left md:flex-row md:items-center md:gap-0 md:divide-x md:divide-surface/15 md:p-2">
          <label className="flex flex-1 flex-col gap-1 px-4 py-2">
            <span className="text-xs uppercase tracking-[0.15em] text-surface/60">Check-in</span>
            <input
              type="date"
              className="rounded bg-transparent text-sm text-surface outline-none [color-scheme:dark] focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            />
          </label>
          <label className="flex flex-1 flex-col gap-1 px-4 py-2">
            <span className="text-xs uppercase tracking-[0.15em] text-surface/60">Check-out</span>
            <input
              type="date"
              className="rounded bg-transparent text-sm text-surface outline-none [color-scheme:dark] focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            />
          </label>
          <Button
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 justify-center md:mt-0 md:ml-2"
          >
            {ctaLabel}
          </Button>
        </form>
      </Reveal>
    </section>
  );
}
