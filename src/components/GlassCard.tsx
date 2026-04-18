import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function GlassCard({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/50 bg-white/55 p-5 shadow-soft backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
