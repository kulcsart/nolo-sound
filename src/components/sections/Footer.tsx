import Image from "next/image";
import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="w-full border-t border-espresso bg-nearblack px-6 py-16 md:px-16 lg:px-[120px]">
      <div className="mx-auto flex w-full flex-col gap-12 lg:px-10">
        {/* Top row */}
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between">
          {/* Logo + description */}
          <div className="flex flex-col gap-4">
            <div className="relative h-24 w-[156px]">
              <Image
                src="/images/nolo-sound-logo.png"
                alt="Nolo Sound"
                fill
                className="object-contain"
              />
            </div>
            <p className="max-w-[255px] whitespace-pre-line font-[family-name:var(--font-heading)] text-[length:var(--text-h3)] leading-[1.4] text-ivory">
              {footer.tagline}
            </p>
            <p className="max-w-[255px] font-[family-name:var(--font-body)] text-[length:var(--text-date)] leading-[1.5] text-bronze">
              {footer.description}
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-12">
            {footer.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span className="font-[family-name:var(--font-body)] text-[length:var(--text-date)] font-semibold tracking-wider text-gold">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-cream transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, #d4a574 58%, transparent)",
          }}
        />

        {/* Bottom row */}
        <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-muddywaters-10 pt-8 md:flex-row">
          <span className="font-[family-name:var(--font-body)] text-[length:var(--text-date)] text-warmtan">
            {footer.copyright}
          </span>
          <div className="flex items-center gap-4">
            {footer.bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-body)] text-[length:var(--text-date)] text-warmtan transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
