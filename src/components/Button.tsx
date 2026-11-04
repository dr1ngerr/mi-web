import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Use a plain <a> (for WhatsApp, mailto, etc.). Does not open a new tab by itself. */
  external?: boolean;
  /** Only for truly external sites (LinkedIn, GitHub). Opens in a new tab. */
  newTab?: boolean;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-wine text-white hover:bg-wine-dark",
  secondary: "border border-ink/20 bg-card text-ink hover:border-ink/50",
  ghost: "text-ink-soft hover:text-ink hover:bg-paper-deep",
  /** Sobre fondos oscuros */
  light: "bg-paper text-ink hover:bg-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  newTab,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine",
    variants[variant],
    className,
  );

  if (external || newTab) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
