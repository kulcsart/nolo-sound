import { Instagram, Facebook } from "lucide-react";
import NewsCard from "../NewsCard";
import { newsFeed } from "@/lib/content";
import AnimatedSection from "../animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../animations/StaggerChildren";

export default function NewsFeedSection() {
  return (
    <section
      id="news"
      className="w-full bg-copper px-6 py-[100px] md:px-16 lg:px-[120px]"
    >
      <div className="mx-auto flex w-full flex-col gap-12">
        {/* Header row */}
        <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <AnimatedSection variant="fade-up">
            <div className="flex flex-col gap-8">
              {/* Section label */}
              <span className="font-[family-name:var(--font-body)] text-[length:var(--text-label)] tracking-wider text-ivory">
                {newsFeed.sectionLabel}
              </span>
              {/* Heading */}
              <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h2)] text-ivory">
                {newsFeed.sectionTitle}
              </h2>
            </div>
          </AnimatedSection>

          {/* Social icons */}
          <AnimatedSection variant="fade-in" delay={0.3}>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center border border-cream text-cream transition-all duration-300 hover:scale-110 hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center border border-cream text-cream transition-all duration-300 hover:scale-110 hover:border-gold hover:text-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* News cards row */}
        <StaggerContainer
          staggerDelay={0.15}
          className="flex w-full gap-6 overflow-x-auto pb-4 max-md:snap-x max-md:snap-mandatory lg:justify-center"
        >
          {newsFeed.fallbackItems.map((item) => (
            <StaggerItem key={item.title} className="max-md:snap-start">
              <NewsCard
                date={item.date}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
