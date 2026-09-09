import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

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
  primary:
    "bg-indigo-700 text-white hover:bg-indigo-800 shadow-md shadow-indigo-900/15",
  secondary:
    "border-2 border-slate-300 bg-white text-slate-950 hover:border-slate-400 hover:bg-slate-50",
  ghost: "text-slate-700 hover:text-slate-950 hover:bg-slate-100",
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
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-150",
    variants[variant],
    className,
  );

  if (external || newTab) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(newTab
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
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
