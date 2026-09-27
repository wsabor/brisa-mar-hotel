import type { CSSProperties, ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. Higher = slower. */
  duration?: number;
  className?: string;
  "aria-label"?: string;
}

/**
 * Infinite horizontal loop. The content is rendered twice and the track slides by
 * half its width, so the end of the second copy lines up with the start of the first.
 * Pauses on hover/focus/touch; with prefers-reduced-motion it becomes a plain
 * horizontal scroll.
 */
export function Marquee({ children, duration = 40, className = "", ...props }: MarqueeProps) {
  return (
    <div
      role="region"
      aria-label={props["aria-label"]}
      className={`group overflow-hidden motion-reduce:overflow-x-auto ${className}`}
    >
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] group-active:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center gap-6 pr-6">{children}</div>
        <div aria-hidden="true" className="flex shrink-0 items-center gap-6 pr-6 motion-reduce:hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
