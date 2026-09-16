export function Eyebrow({ children }: { children: string }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  );
}
