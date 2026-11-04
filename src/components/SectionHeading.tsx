import { cn } from "@/lib/utils";

/** Cabecera común de sección: etiqueta, título serif y subtítulo. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase",
          dark ? "text-blush" : "text-wine",
        )}
      >
        <span aria-hidden className={cn("h-px w-6", dark ? "bg-blush" : "bg-wine")} />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 font-display text-3xl leading-[1.1] font-medium tracking-tight sm:text-[2.6rem]",
          dark ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-paper/75" : "text-ink-soft",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
