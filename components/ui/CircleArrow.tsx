interface CircleArrowProps {
  direction: "left" | "right";
  className?: string;
}

/** Visual only for now; gains Embla wiring in the microinteractions phase. */
export function CircleArrow({ direction, className = "" }: CircleArrowProps) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={direction === "left" ? "rotate-180" : ""}
      >
        <path
          d="M2 8H14M14 8L9 3M14 8L9 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
