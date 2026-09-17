import type { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "solid" | "outline";
}

export function Button({ variant = "solid", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark";
  const variants = {
    solid: "bg-accent text-ink hover:scale-[1.03] hover:shadow-lg",
    outline: "border border-current hover:bg-ink/5",
  };

  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
