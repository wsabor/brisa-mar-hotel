import type { Counter as CounterData } from "@/content/site";

/** Renders the static value for now; gains a GSAP count-up in the microinteractions phase. */
export function Counter({ value, label }: CounterData) {
  return (
    <div>
      <p className="font-display text-4xl text-ink">{value}</p>
      <p className="text-sm text-ink-soft">{label}</p>
    </div>
  );
}
