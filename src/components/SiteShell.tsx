"use client";

import type { ReactNode } from "react";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 size-[520px] rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute -right-28 top-24 size-[520px] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-[55%] size-[720px] -translate-x-1/2 rounded-full bg-rose-500/5 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-6xl px-4 py-10 md:py-14">{children}</main>

      <footer className="relative border-t border-white/30 bg-white/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl justify-center px-4 py-8 text-sm text-slate-600">
          <p>Trân trọng cảm ơn quý vị đã đến chung vui cùng gia đình.</p>
        </div>
      </footer>
    </div>
  );
}
