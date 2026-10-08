"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface IconCloudProps {
  images?: string[];
  className?: string;
}

interface TagItem {
  x: number;
  y: number;
  z: number;
  scale: number;
  alpha: number;
  image: string;
}

export function IconCloud({ images = [], className }: IconCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState<TagItem[]>([]);
  const radius = 175; // Sphere radius in px
  const rotationRef = useRef({ rx: 0.002, ry: 0.003, angleX: 0, angleY: 0 });

  useEffect(() => {
    if (!images || images.length === 0) return;

    // Distribute points evenly on a sphere using Fibonacci lattice
    const count = images.length;
    const initialTags: TagItem[] = images.map((image, i) => {
      const phi = Math.acos(-1 + (2 * i + 1) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      return {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        scale: 1,
        alpha: 1,
        image,
      };
    });

    setTags(initialTags);

    let animationFrameId: number;

    const animate = () => {
      const { rx, ry } = rotationRef.current;

      setTags((prev) =>
        prev.map((item) => {
          // Rotate around X
          const cosX = Math.cos(rx);
          const sinX = Math.sin(rx);
          const y1 = item.y * cosX - item.z * sinX;
          const z1 = item.z * cosX + item.y * sinX;

          // Rotate around Y
          const cosY = Math.cos(ry);
          const sinY = Math.sin(ry);
          const x2 = item.x * cosY + z1 * sinY;
          const z2 = z1 * cosY - item.x * sinY;

          // Perspective projection
          const k = 300 / (300 + z2);
          const scale = Math.max(0.4, Math.min(1.2, k));
          const alpha = Math.max(0.2, Math.min(1, (z2 + radius) / (2 * radius) + 0.2));

          return {
            x: x2,
            y: y1,
            z: z2,
            scale,
            alpha,
            image: item.image,
          };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [images]);

  // Mouse interaction to steer rotation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    rotationRef.current.ry = (x / rect.width) * 0.01;
    rotationRef.current.rx = -(y / rect.height) * 0.01;
  };

  const handleMouseLeave = () => {
    rotationRef.current.rx = 0.002;
    rotationRef.current.ry = 0.003;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex size-full min-h-[380px] md:min-h-[440px] items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none",
        className
      )}
    >
      <div className="relative w-[360px] h-[360px] flex items-center justify-center">
        {tags.map((tag, idx) => {
          return (
            <div
              key={idx}
              className="absolute transition-transform duration-75 ease-out flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:scale-125 hover:border-[#c9a227] hover:bg-[#c9a227]/20 transition-all pointer-events-auto"
              style={{
                transform: `translate3d(${tag.x}px, ${tag.y}px, 0px) scale(${tag.scale})`,
                opacity: tag.alpha,
                zIndex: Math.floor(tag.z + radius),
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tag.image}
                alt="tech logo"
                className="w-7 h-7 md:w-8 md:h-8 object-contain filter drop-shadow brightness-110"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IconCloud;
