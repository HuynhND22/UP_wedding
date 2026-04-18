"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { MotionDiv, fadeUp } from "@/components/Motion";
import { Button } from "@/components/Button";
import GlassCard from "@/components/GlassCard";

type Status = "idle" | "sent";

export default function RsvpForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(2);
  const [note, setNote] = useState("");

  const isValid = useMemo(() => {
    if (!name.trim()) return false;
    if (!phone.trim()) return false;
    if (!Number.isFinite(guests) || guests < 1 || guests > 10) return false;
    return true;
  }, [name, phone, guests]);

  return (
    <GlassCard className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 size-64 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 size-72 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <MotionDiv
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative"
      >
        <div className="mb-4">
          <h3 className="font-[var(--font-serif)] text-xl text-slate-900">Xác nhận tham dự</h3>
          <p className="mt-1 text-sm text-slate-600">
            Form này demo UI. Bạn có thể nối API/email/google sheet sau.
          </p>
        </div>

        {status === "sent" ? (
          <div className="rounded-2xl border border-white/50 bg-white/60 p-5">
            <p className="text-sm text-slate-700">
              Đã ghi nhận! Hẹn gặp bạn trong ngày vui.
            </p>
            <div className="mt-4">
              <Button variant="ghost" onClick={() => setStatus("idle")}>
                Gửi thêm một phản hồi
              </Button>
            </div>
          </div>
        ) : (
          <form
            className="grid gap-4 md:grid-cols-2"
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              if (!isValid) return;
              setStatus("sent");
            }}
          >
            <label className="grid gap-2">
              <span className="text-xs font-medium text-slate-700">Họ tên</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 rounded-xl border border-white/60 bg-white/70 px-3 text-sm outline-none focus:ring-2 focus:ring-rose-500/25"
                placeholder="Ví dụ: Minh Anh"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-medium text-slate-700">Số điện thoại</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-11 rounded-xl border border-white/60 bg-white/70 px-3 text-sm outline-none focus:ring-2 focus:ring-rose-500/25"
                placeholder="090..."
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-medium text-slate-700">Số khách</span>
              <input
                type="number"
                min={1}
                max={10}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="h-11 rounded-xl border border-white/60 bg-white/70 px-3 text-sm outline-none focus:ring-2 focus:ring-rose-500/25"
              />
            </label>

            <label className="grid gap-2 md:col-span-2">
              <span className="text-xs font-medium text-slate-700">Lời nhắn</span>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="min-h-24 rounded-xl border border-white/60 bg-white/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rose-500/25"
                placeholder="Gửi một lời chúc ngắn..."
              />
            </label>

            <div className="md:col-span-2 flex items-center justify-between gap-3">
              <p className="text-xs text-slate-500">
                Trạng thái: {isValid ? "Sẵn sàng" : "Thiếu thông tin"}
              </p>
              <Button type="submit" disabled={!isValid}>
                Gửi RSVP
              </Button>
            </div>
          </form>
        )}
      </MotionDiv>
    </GlassCard>
  );
}
