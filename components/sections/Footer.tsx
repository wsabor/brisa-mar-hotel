import type { FooterContent } from "@/content/site";

export function Footer({ logoLine1, logoLine2, year }: FooterContent) {
  return (
    <footer className="bg-ink px-6 py-10 text-center text-sm text-surface/70 md:px-12">
      <p className="font-display text-lg text-surface">
        {logoLine1} {logoLine2}
      </p>
      <p className="mt-2">
        &copy; {year} {logoLine1} {logoLine2}
      </p>
    </footer>
  );
}
