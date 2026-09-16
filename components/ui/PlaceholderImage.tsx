interface PlaceholderImageProps {
  tone?: "warm" | "dark" | "light";
  className?: string;
}

const tones: Record<NonNullable<PlaceholderImageProps["tone"]>, string> = {
  warm: "from-[#f2c9a0] via-[#dd8f66] to-[#b95d3a]",
  dark: "from-[#33413e] via-[#1c2624] to-[#101513]",
  light: "from-[#e6ede9] via-[#eef2f0] to-[#f8faf8]",
};

/** Stands in for a real photo until the AI-generated assets from HANDOFF.md #6 land. */
export function PlaceholderImage({ tone = "warm", className = "" }: PlaceholderImageProps) {
  return <div aria-hidden="true" className={`bg-gradient-to-br ${tones[tone]} ${className}`} />;
}
