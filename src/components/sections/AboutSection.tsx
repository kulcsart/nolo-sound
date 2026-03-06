import Image from "next/image";
import OwnersRow from "../OwnersRow";
import { about } from "@/lib/content";
import AnimatedSection from "../animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../animations/StaggerChildren";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-nearblack px-6 py-[120px] md:px-16"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-32 lg:flex-row lg:items-center lg:justify-center">
        {/* Text column — The Vision */}
        <AnimatedSection variant="slide-right" className="flex max-w-[446px] flex-col">
          <StaggerContainer staggerDelay={0.12} className="flex flex-col gap-10">
            {/* Label */}
            <StaggerItem>
              <span className="font-[family-name:var(--font-body)] text-[length:var(--text-label)] tracking-[0.125em] text-gold">
                {about.sectionLabel}
              </span>
            </StaggerItem>

            {/* Heading */}
            <StaggerItem>
              <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h2)] text-sand">
                {about.heading}
              </h2>
            </StaggerItem>

            {/* Divider */}
            <StaggerItem>
              <div
                className="h-1 w-20"
                style={{
                  background:
                    "linear-gradient(to right, transparent, #d4a574 58%, transparent)",
                }}
              />
            </StaggerItem>

            {/* Paragraphs */}
            {about.paragraphs.map((text, i) => (
              <StaggerItem key={i}>
                <p className="font-[family-name:var(--font-body)] text-[length:var(--text-body)] leading-[1.4] text-cream">
                  {text}
                </p>
              </StaggerItem>
            ))}

            {/* Owners */}
            <StaggerItem>
              <OwnersRow />
            </StaggerItem>
          </StaggerContainer>
        </AnimatedSection>

        {/* Image column */}
        <AnimatedSection variant="slide-left" delay={0.2} className="relative h-[660px] w-full max-w-[528px] max-lg:mx-auto">
          {/* Studio image */}
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/studio.jpg"
              alt="Nolo Sound studio"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 528px"
            />
          </div>

          {/* Quote overlay */}
          <AnimatedSection
            variant="scale-in"
            delay={0.6}
            className="absolute -bottom-5 -left-5 z-10 flex w-[185px] items-center justify-center rounded-xl p-5"
            as="div"
          >
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background:
                  "linear-gradient(155deg, #4a3526 0%, #7a5c38 50%, #b8935a 100%)",
              }}
            />
            <p className="relative font-[family-name:var(--font-heading)] text-[length:var(--text-quote)] leading-[1.37] text-ivory whitespace-pre-line">
              {about.quote}
            </p>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
}
