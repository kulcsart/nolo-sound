import { MapPin, Mail, Phone } from "lucide-react";
import ContactForm from "../ContactForm";
import { contact } from "@/lib/content";
import AnimatedSection from "../animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../animations/StaggerChildren";

const iconMap = {
  MapPin,
  Mail,
  Phone,
} as const;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-nearblack px-6 py-[100px] md:px-16 lg:px-[160px]"
    >
      <div className="mx-auto flex w-full flex-col gap-16 lg:flex-row lg:justify-center">
        {/* Info column */}
        <AnimatedSection variant="slide-right" className="flex flex-1 flex-col gap-7">
          <StaggerContainer staggerDelay={0.1}>
            {/* Label */}
            <StaggerItem>
              <span className="font-[family-name:var(--font-body)] text-[length:var(--text-label)] tracking-[0.125em] text-warmtan">
                {contact.sectionLabel}
              </span>
            </StaggerItem>

            {/* Heading */}
            <StaggerItem>
              <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h2)] text-ivory">
                {contact.heading}
              </h2>
            </StaggerItem>

            {/* Description */}
            <StaggerItem>
              <p className="max-w-[522px] font-[family-name:var(--font-body)] text-[length:var(--text-body)] font-medium leading-[1.6] text-cream">
                {contact.description}
              </p>
            </StaggerItem>

            {/* Contact details */}
            <StaggerItem>
              <div className="flex flex-col gap-6 pt-4">
                {contact.details.map((detail) => {
                  const Icon = iconMap[detail.icon];
                  return (
                    <div key={detail.label} className="flex items-center gap-4">
                      <div className="flex h-[50px] w-[50px] items-center justify-center">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-[family-name:var(--font-body)] text-[length:var(--text-date)] font-semibold tracking-wider text-bronze">
                          {detail.label}
                        </span>
                        <span className="font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-cream">
                          {detail.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </AnimatedSection>

        {/* Form column */}
        <AnimatedSection variant="slide-left" delay={0.2} className="w-full max-w-[500px] lg:flex-1">
          <ContactForm />
        </AnimatedSection>
      </div>
    </section>
  );
}
