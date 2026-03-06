"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxHeroProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
}

export default function ParallaxHero({
  children,
  className,
  style,
  speed = 0.3,
}: ParallaxHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !bgRef.current) return;

      // Parallax: background moves slower than scroll
      gsap.to(bgRef.current, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={`relative overflow-hidden ${className ?? ""}`}>
      {/* Parallax background layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[15%] h-[130%] w-full"
        style={style}
      />
      {/* Content layer */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
