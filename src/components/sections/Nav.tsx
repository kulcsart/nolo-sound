"use client";

import Image from "next/image";
import { nav } from "@/lib/content";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between px-6 py-6 md:px-16 lg:px-[138px]">
      {/* Logo */}
      <a href="#" className="relative block h-16 w-[156px] shrink-0">
        <Image
          src="/images/nolo-sound-logo.png"
          alt="Nolo Sound"
          fill
          className="object-contain"
          priority
        />
      </a>

      {/* Desktop links */}
      <div className="hidden items-center gap-10 md:flex">
        {nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link-hover font-[family-name:var(--font-body)] text-[length:var(--text-subtitle)] tracking-wider text-ivory transition-colors hover:text-gold"
          >
            {link.label}
          </a>
        ))}

        {/* Language switcher */}
        <div className="flex items-center gap-2 opacity-80">
          {nav.languages.map((lang, i) => (
            <span key={lang} className="flex items-center gap-2">
              {i > 0 && (
                <span className="font-[family-name:var(--font-body)] text-[length:var(--text-subtitle)] text-ivory">
                  /
                </span>
              )}
              <span
                className={`font-[family-name:var(--font-body)] text-[length:var(--text-subtitle)] tracking-wider ${
                  i === 0 ? "text-ivory" : "text-bronze"
                } cursor-pointer transition-colors hover:text-gold`}
              >
                {lang}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        className="text-ivory md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-50 flex flex-col items-center gap-8 bg-nearblack/95 pt-12 backdrop-blur-sm md:hidden">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-[family-name:var(--font-heading)] text-[length:var(--text-h3)] text-ivory transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
