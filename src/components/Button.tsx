import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  variant?: "primary" | "ghost";
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/40 disabled:opacity-50",
        variant === "primary"
          ? "bg-slate-900 text-white shadow-soft hover:shadow-glow"
          : "bg-white/40 text-slate-700 hover:bg-white/70",
        className
      )}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/40",
        variant === "primary"
          ? "bg-slate-900 text-white shadow-soft hover:shadow-glow"
          : "bg-white/40 text-slate-700 hover:bg-white/70",
        className
      )}
    >
      {children}
    </Link>
  );
}
