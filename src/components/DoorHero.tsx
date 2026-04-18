"use client";

import { useRef, useEffect, useState } from "react";

/* ── Adjust these to align the couple photos ── */
const PHOTO_OFFSET_X = 0; // px — shift both photos left(-) or right(+)
const PHOTO_GAP = -170; // px — desktop distance between photos; negative = overlap
const PHOTO_MAX_OVERLAP_VW = 30; // mobile/tablet cap for overlap (in vw)

export default function DoorHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const photoSpacing =
    PHOTO_GAP < 0
      ? `max(${PHOTO_GAP}px, -${PHOTO_MAX_OVERLAP_VW}vw)`
      : `${PHOTO_GAP}px`;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        // Open when user has scrolled ~40% of the section height
        const progress = -rect.top / rect.height;
        setIsOpen(progress > 0.05);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`door-hero relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-[200svh] -mt-10 md:-mt-14${isOpen ? " is-open" : ""}`}
    >
      {/* ── Sticky visual layer ── */}
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(252_252_253)] via-[rgb(249_250_252)] to-[rgb(245_246_250)]" />

        {/* ── Invitation card (behind flaps) ── */}
        <div
          className="door-card absolute inset-0 z-[1] flex items-center justify-center p-6 md:p-10"
        >
          <div className="w-full max-w-lg rounded-2xl border border-gold-200/60 bg-gradient-to-br from-white to-amber-50 p-6 shadow-soft md:p-8">
            <div className="mx-auto mb-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

            <div className="text-center text-xs font-medium tracking-[0.2em] uppercase text-gold-700">
              Thiệp mời
            </div>

            <h2 className="font-dancing mt-4 text-center text-3xl tracking-tight text-slate-900 md:text-4xl">
              Văn Phúc <span className="text-rose-400">&</span> Thảo Uyên
            </h2>

            <div className="mx-auto mt-3 flex items-center justify-center gap-3 text-sm text-slate-500">
              <span className="h-[1px] w-6 bg-gold-300" />
              10 · 05 · 2026
              <span className="h-[1px] w-6 bg-gold-300" />
            </div>

            <p className="mt-4 text-center text-sm leading-relaxed text-slate-600">
              Trân trọng kính mời quý vị đến dự buổi tiệc chung vui cùng gia đình chúng tôi.
            </p>

            {/* ── Couple photos — slide in from sides ── */}
            <div className="mt-5 flex justify-center" style={{ transform: `translateX(${PHOTO_OFFSET_X}px)` }}>
              <div className="door-photo-left w-1/2 overflow-hidden rounded-lg">
                <img
                  src="/photos/chuRe.png"
                  alt="Cô dâu"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div
                className="door-photo-right w-1/2 overflow-hidden rounded-lg"
                style={{ marginLeft: photoSpacing }}
              >
                <img
                  src="/photos/CoDau.png"
                  alt="Chú rể"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="mx-auto mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          </div>
        </div>

        {/* ── Envelope flaps (single animated container) ── */}
        <div className="door-flaps absolute inset-0 z-[2] grid grid-cols-2">
          {/* Left flap — Cô dâu */}
          <div className="door-flap-left relative h-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100/60">
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <div className="mx-auto mb-6 h-[1px] w-20 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

              <div className="text-xs font-medium tracking-[0.25em] uppercase text-rose-400">
                Nhà trai
              </div>

              <h2 className="font-dancing mt-3 text-3xl tracking-tight text-slate-800 md:text-5xl">
                <span className="whitespace-nowrap">Trần Văn</span>
                <br className="md:hidden" />
                <span className="whitespace-nowrap"> Phúc</span>
              </h2>

              <div className="mx-auto mt-4 h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Ông Trần Văn C<br />Và bà Lê Thị D
              </p>
            </div>
          </div>

          {/* Right flap — Chú rể */}
          <div className="door-flap-right relative h-full overflow-hidden bg-gradient-to-bl from-amber-50 via-white to-amber-100/60">
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <div className="mx-auto mb-6 h-[1px] w-20 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

              <div className="text-xs font-medium tracking-[0.25em] uppercase text-gold-600">
                Nhà gái
              </div>

              <h2 className="font-dancing mt-3 text-3xl tracking-tight text-slate-800 md:text-5xl">
                <span className="whitespace-nowrap">Ngô Thị Thảo</span>
                <br className="md:hidden" />
                <span className="whitespace-nowrap"> Uyên</span>
              </h2>

              <div className="mx-auto mt-4 h-[1px] w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Ông Ngô Văn A<br />Và bà Trần Thị B
              </p>
            </div>
          </div>
        </div>

        {/* ── Title overlay (top) ── */}
        <div className="door-title-top absolute inset-x-0 top-0 z-[3] flex justify-center pt-6 md:pt-10">
          <div className="text-center">
            <h1
              className="font-viceroy mt-4 text-4xl tracking-tight text-slate-800 md:text-6xl"
            >
              Thư mời cưới
            </h1>
          </div>
        </div>

        {/* ── Title overlay ── */}
        <div className="door-title absolute inset-0 z-[3] flex items-end justify-center pb-10 md:pb-14">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-soft">
              <span className="relative inline-flex size-2">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-gold-500/60" />
                <span className="relative inline-flex size-2 rounded-full bg-gold-500" />
              </span>
              <span>10/05/2026 — Save the date</span>
            </div>

            <h1 className="mt-4 font-[var(--font-serif)] text-4xl tracking-tight text-slate-800 md:text-6xl">
              <span className="text-rose-400">LỄ THÀNH HÔN</span>
            </h1>

            <div className="mt-6 flex justify-center gap-3">
              <a
                href="#event-info"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 shadow-soft"
              >
                Xem thời gian
              </a>
              <a
                href="#location-info"
                className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700"
              >
                Xem địa điểm
              </a>
            </div>

            <div className="mt-8 text-xs font-medium text-slate-400">
              ↓ Mở thiệp
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
