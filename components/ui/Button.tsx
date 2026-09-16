import type { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "solid" | "outline";
}

export function Button({ variant = "solid", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const variants = {
    solid: "bg-accent text-surface hover:bg-accent-dark",
    outline: "border border-current hover:bg-ink/5",
  };

  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
