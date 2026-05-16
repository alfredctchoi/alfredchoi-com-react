"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageCrossfadeProps {
  images: { src: string; alt: string; label?: string }[];
  interval?: number;
  width: number;
  height: number;
  className?: string;
}

export default function ImageCrossfade({
  images,
  interval = 3000,
  width,
  height,
  className = "",
}: ImageCrossfadeProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`relative ${className}`}>
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={width}
          height={height}
          className={`w-full h-auto rounded-sm transition-opacity duration-1000 ease-in-out ${i === 0 ? "relative" : "absolute inset-0"}`}
          style={{ opacity: i === active ? 1 : 0 }}
          unoptimized
        />
      ))}
      {images[active]?.label && (
        <span className="absolute top-3 left-3 font-mono text-[11px] tracking-[0.06em] uppercase font-medium bg-fg/80 text-bg px-2.5 py-1 rounded-sm transition-opacity duration-500">
          {images[active].label}
        </span>
      )}
    </div>
  );
}
