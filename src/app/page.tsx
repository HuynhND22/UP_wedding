import DoorHero from "@/components/DoorHero";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";

const EVENT_DATE = new Date(2026, 4, 10);
const EVENT_DAY = EVENT_DATE.getDate();
const EVENT_MONTH = EVENT_DATE.getMonth();
const EVENT_YEAR = EVENT_DATE.getFullYear();
const LUNAR_START_DAY = 15; // 01/05/2026 DL = 15/03 AL (VN)
const LUNAR_START_MONTH = 3;
const weekdayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
const monthNames = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];

const firstDayOfMonth = new Date(EVENT_YEAR, EVENT_MONTH, 1).getDay();
const daysInMonth = new Date(EVENT_YEAR, EVENT_MONTH + 1, 0).getDate();
const calendarCells = Array.from({ length: firstDayOfMonth + daysInMonth }, (_, i) =>
  i < firstDayOfMonth ? null : i - firstDayOfMonth + 1
);

const getLunarDate = (solarDay: number) => {
  const offset = solarDay - 1;
  const lunarRawDay = LUNAR_START_DAY + offset;
  if (lunarRawDay <= 30) {
    return { day: lunarRawDay, month: LUNAR_START_MONTH };
  }
  return { day: lunarRawDay - 30, month: LUNAR_START_MONTH + 1 };
};

const EVENT_LUNAR = (() => {
  const lunar = getLunarDate(EVENT_DAY);
  return `${lunar.day}/${lunar.month}`;
})();

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.2440828548747!2d108.37193697579428!3d15.631985550993535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169e78b41a487af%3A0x405ed9bffa5141ff!2zTmjDoCBow6BuZyB0aeG7h2MgY8aw4bubaSBUaOG6o28gWeG6v24!5e0!3m2!1sen!2s!4v1776527266047!5m2!1sen!2s";
const MAP_OPEN =
  "https://www.google.com/maps/place/Nh%C3%A0+h%C3%A0ng+ti%E1%BB%87c+c%C6%B0%E1%BB%9Bi+Th%E1%BA%A3o+Y%E1%BA%BFn/";

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <DoorHero />

      <section id="event-info" className="space-y-4">
        <SectionTitle
          eyebrow="Lịch tổ chức"
          title="Thông tin ngày lễ"
          desc="Mời bạn dành thời gian tham dự và chung vui cùng gia đình hai bên."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard className="space-y-2">
            <h3 className="font-[var(--font-serif)] text-2xl text-slate-900">Lễ thành hôn</h3>
            <p className="text-lg font-semibold text-slate-800">9:00 - Chủ nhật</p>
            <p className="text-lg font-semibold text-slate-900">10/05/2026</p>
            <p className="text-sm text-slate-600">(Nhằm ngày 24 tháng 3 năm Bính Ngọ)</p>
          </GlassCard>

          <GlassCard className="space-y-2">
            <h3 className="font-[var(--font-serif)] text-2xl text-slate-900">Tiệc mừng thành hôn</h3>
            <p className="text-lg font-semibold text-slate-800">10:30 - Chủ nhật</p>
            <p className="text-lg font-semibold text-slate-900">10/05/2026</p>
            <p className="text-sm text-slate-600">(Nhằm ngày 24 tháng 3 năm Bính Ngọ)</p>
          </GlassCard>
        </div>
      </section>

      <section className="space-y-4">
        <SectionTitle
          eyebrow="Wedding calendar"
          title={`Lịch ${monthNames[EVENT_MONTH]} ${EVENT_YEAR}`}
          desc="Đừng quên đến ngày để tham dự lễ nhé."
        />
        <GlassCard>
          <div className="grid grid-cols-7 gap-y-2 text-center">
            {weekdayNames.map((day) => (
              <div key={day} className="py-2 text-sm font-bold uppercase tracking-wide text-slate-600 md:text-base">
                {day}
              </div>
            ))}
            {calendarCells.map((day, idx) => {
              const isEventDay = day === EVENT_DAY;
              return (
                <div
                  key={`${day ?? "blank"}-${idx}`}
                  className={
                    "relative px-2 py-3 text-sm " +
                    (day
                      ? isEventDay
                        ? "font-bold text-rose-700"
                        : "text-slate-700"
                      : "text-transparent")
                  }
                >
                  {day ? (
                    <div className="mx-auto flex w-full max-w-[72px] flex-col items-center">
                      <span className={isEventDay ? "text-lg font-bold md:text-xl" : "text-base font-semibold md:text-lg"}>
                        {day}
                      </span>
                      <span
                        className={
                          "mt-1 text-[11px] leading-tight md:text-sm " +
                          (isEventDay ? "font-semibold text-slate-600" : "font-medium text-slate-500")
                        }
                      >
                        {(() => {
                          const lunar = getLunarDate(day);
                          return `${lunar.day}/${lunar.month}`;
                        })()}
                      </span>
                      {isEventDay ? (
                        <>
                          <svg
                            viewBox="0 0 120 120"
                            aria-hidden="true"
                            className="pointer-events-none absolute -top-1 left-1/2 h-[88px] w-[88px] -translate-x-1/2 text-rose-400 md:-top-2 md:h-[102px] md:w-[102px]"
                          >
                            <path
                              d="M60 103 C45 88,17 71,17 45 C17 30,28 20,41 20 C50 20,57 25,60 33 C63 25,70 20,79 20 C92 20,103 30,103 45 C103 71,75 88,60 103 Z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeDasharray="2 3"
                            />
                          </svg>
                        </>
                      ) : null}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </GlassCard>
      </section>

      <section id="location-info" className="space-y-4">
        <SectionTitle
          eyebrow="Địa điểm tổ chức"
          title="Nơi diễn ra buổi lễ"
          desc="Bạn có thể bấm mở Google Maps để đi đường nhanh trên điện thoại."
        />
        <GlassCard className="overflow-hidden p-0">
          <div className="grid gap-0 md:grid-cols-[1.1fr_.9fr]">
            <iframe
              title="Google Map"
              src={MAP_URL}
              className="h-[360px] w-full md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-6">
              <div className="text-xs font-medium text-slate-500">Địa chỉ</div>
              <div className="mt-1 text-2xl text-slate-900">Nhà hàng Thảo Yến</div>
              <p className="mt-2 text-sm text-slate-600">
                Vui lòng đến sớm 15-20 phút để ổn định chỗ ngồi và chuẩn bị cho nghi thức chính.
              </p>
              <a
                href={MAP_OPEN}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-rose-600"
              >
                Mở Google Maps
              </a>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
