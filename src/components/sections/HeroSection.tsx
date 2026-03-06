import Image from "next/image";
import Nav from "./Nav";
import { hero } from "@/lib/content";
import ParallaxHero from "../animations/ParallaxHero";
import AnimatedSection from "../animations/AnimatedSection";
import TextReveal, { RevealLine } from "../animations/TextReveal";
import DividerReveal from "../animations/DividerReveal";

export default function HeroSection() {
  return (
    <ParallaxHero
      className="flex w-full flex-col items-center"
      style={{
        background:
          "radial-gradient(ellipse at 47% 23%, #7a5c38 0%, #2e1f14 38%, #0c0804 88%)",
      }}
    >
      <div
        className="flex w-full flex-col"
        style={{ minHeight: "100dvh" }}
      >
        <Nav />

        {/* Teaser content */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 pb-16">
          {/* Logo disc */}
          <AnimatedSection variant="scale-in" delay={0.2} duration={0.8}>
            <div className="relative h-[164px] w-[156px]">
              <Image
                src="/images/nolo-sound-logo-disc.png"
                alt="Nolo Sound disc logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Headline */}
          <TextReveal delay={0.4} className="flex flex-col items-center gap-1">
            <RevealLine>
              <h1 className="font-[family-name:var(--font-heading)] text-[length:var(--text-hero)] text-cream">
                {hero.headline.line1}
              </h1>
            </RevealLine>
            <RevealLine>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="font-[family-name:var(--font-heading)] text-[length:var(--text-hero)] font-light italic text-gold">
                  {hero.headline.line2_italic}
                </span>
                <span className="font-[family-name:var(--font-heading)] text-[length:var(--text-hero)] text-cream">
                  {hero.headline.line2_normal}
                </span>
                <span className="font-[family-name:var(--font-heading)] text-[length:var(--text-hero)] font-medium text-goldshimmer">
                  {hero.headline.line2_bold}
                </span>
              </div>
            </RevealLine>
          </TextReveal>

          {/* Divider */}
          <DividerReveal
            delay={0.9}
            className="h-px w-[216px]"
            style={{
              background:
                "linear-gradient(to right, transparent, #d4a574 58%, transparent)",
            }}
          />

          {/* Tagline */}
          <AnimatedSection variant="fade-up" delay={1.1} duration={0.7}>
            <div className="flex flex-col items-center gap-1">
              {hero.tagline.map((line) => (
                <p
                  key={line}
                  className="text-center font-[family-name:var(--font-body)] text-[length:var(--text-subtitle)] font-medium tracking-[0.125em] leading-[1.92] text-cream"
                >
                  {line}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Scroll indicator */}
          <AnimatedSection variant="fade-in" delay={1.4} duration={0.8}>
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="font-[family-name:var(--font-body)] text-[length:var(--text-small)] tracking-[0.125em] text-ivory">
                {hero.scrollLabel}
              </span>
              <div
                className="h-10 w-px animate-scroll-bounce"
                style={{
                  background: "linear-gradient(to bottom, #d4a574, #1d1a11)",
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </ParallaxHero>
  );
}
