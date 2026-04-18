import { cn } from "@/lib/utils";

export default function SectionTitle({
  eyebrow,
  title,
  desc,
  className
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-6", className)}>
      {eyebrow ? (
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 shadow-soft">
          <span className="relative inline-flex size-2">
            <span className="absolute inline-flex size-2 animate-ping rounded-full bg-rose-500/50" />
            <span className="relative inline-flex size-2 rounded-full bg-rose-500" />
          </span>
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="font-[var(--font-serif)] text-2xl tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
      {desc ? <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">{desc}</p> : null}
    </div>
  );
}
