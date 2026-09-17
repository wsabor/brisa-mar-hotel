interface EyebrowProps {
  children: string;
  /** Which kind of background this sits on — picks a shade that clears 4.5:1. */
  tone?: "onLight" | "onDark";
}

export function Eyebrow({ children, tone = "onLight" }: EyebrowProps) {
  const toneClass = tone === "onLight" ? "text-accent-text" : "text-accent";

  return (
    <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${toneClass}`}>
      {children}
    </span>
  );
}
