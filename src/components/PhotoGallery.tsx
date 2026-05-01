"use client";

import { MotionDiv, fadeUp } from "@/components/Motion";
import SectionTitle from "@/components/SectionTitle";
import { useState } from "react";

type PhotoItem = {
  id: string;
  title: string;
  url: string;
  fallbackUrl?: string;
};

function GalleryImage({ photo, idx }: { photo: PhotoItem; idx: number }) {
  const [src, setSrc] = useState(photo.url);
  const [usedFallback, setUsedFallback] = useState(false);

  return (
    <img
      src={src}
      alt={photo.title || `Ảnh cưới ${idx + 1}`}
      loading="lazy"
      onError={() => {
        if (!usedFallback && photo.fallbackUrl) {
          setSrc(photo.fallbackUrl);
          setUsedFallback(true);
        }
      }}
      className="h-auto w-full bg-slate-100 object-contain transition-transform duration-700 group-hover:scale-[1.03]"
    />
  );
}

export default function PhotoGallery({ photos }: { photos: PhotoItem[] }) {
  if (!photos.length) return null;

  return (
    <section id="photo-gallery" className="space-y-4">
      <SectionTitle
        eyebrow="Khoảnh khắc của chúng mình"
        title="Album ảnh cưới"
        desc="Cảm ơn bạn đã ghé xem những khoảnh khắc đẹp trong hành trình của tụi mình."
      />
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, idx) => (
          <MotionDiv
            key={photo.id || `${photo.url}-${idx}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ delay: idx * 0.08, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/50 bg-white/60 shadow-soft backdrop-blur"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
            <GalleryImage photo={photo} idx={idx} />
            {photo.title ? (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                <p className="text-sm font-medium text-white drop-shadow-md">{photo.title}</p>
              </div>
            ) : null}
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
