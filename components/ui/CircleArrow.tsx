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
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40 hover:bg-ink hover:text-surface disabled:pointer-events-none disabled:opacity-30 ${className}`}
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
    </button>
  );
}
