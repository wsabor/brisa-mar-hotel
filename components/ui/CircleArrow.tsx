interface CircleArrowProps {
  direction: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function CircleArrow({ direction, onClick, disabled, className = "" }: CircleArrowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Anterior" : "Próximo"}
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink outline-none transition-colors hover:border-ink/40 hover:bg-ink hover:text-surface focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark disabled:pointer-events-none disabled:opacity-30 ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
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
    </button>
  );
}
