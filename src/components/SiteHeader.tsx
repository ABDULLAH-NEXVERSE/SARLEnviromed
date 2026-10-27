'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ContentTranslation } from '@/types/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface SiteHeaderProps {
  t: ContentTranslation;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ t }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[rgba(1,42,80,0.12)] transition-all">
      <div className="wrap flex items-center justify-between gap-6 min-h-[76px]">
        {/* Brand Logo - Using assets from logos folder as requested */}
        <a
          href="#top"
          className="flex items-center gap-3 py-2 group transition-transform duration-200 hover:scale-101"
          aria-label="SARL Enviromed"
        >
          <div className="relative w-[180px] sm:w-[220px] h-[52px]">
            <Image
              src="/logos/enviromed-logo.webp"
              alt="SARL Enviromed"
              fill
              priority
              sizes="(max-width: 640px) 180px, 220px"
              className="object-contain object-left rtl:object-right"
              onError={(e) => {
                // Graceful fallback to png if webp browser issue occurs
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes('enviromed-logo-480.png')) {
                  target.src = '/logos/enviromed-logo-480.png';
                }
              }}
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          <a
            href="#activities"
            className="text-[1.02rem] font-semibold text-[#012a50] hover:text-[#028698] py-1.5 relative group transition-colors"
          >
            {t.nav_activities}
            <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#028698] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rtl:origin-right duration-250" />
          </a>
          <a
            href="#about"
            className="text-[1.02rem] font-semibold text-[#012a50] hover:text-[#028698] py-1.5 relative group transition-colors"
          >
            {t.nav_about}
            <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#028698] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rtl:origin-right duration-250" />
          </a>
          <a
            href="#approach"
            className="text-[1.02rem] font-semibold text-[#012a50] hover:text-[#028698] py-1.5 relative group transition-colors"
          >
            {t.nav_approach}
            <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#028698] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rtl:origin-right duration-250" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#012a50] text-white font-semibold text-[0.98rem] shadow-sm hover:bg-[#012b53] hover:shadow-md hover:scale-102 transition-all duration-200"
          >
            <span>{t.cta_quote}</span>
            <ArrowUpRight className="w-4 h-4 text-[#8fd3dd] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-11 h-11 rounded-full border-2 border-[#012a50] flex items-center justify-center text-[#012a50] hover:bg-[#eef7f8] transition-colors cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-label={t.menu}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(1,42,80,0.12)] bg-white/98 px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            <a
              href="#activities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-lg font-semibold text-[#012a50] border-b border-[rgba(1,42,80,0.08)] hover:text-[#028698]"
            >
              {t.nav_activities}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-lg font-semibold text-[#012a50] border-b border-[rgba(1,42,80,0.08)] hover:text-[#028698]"
            >
              {t.nav_about}
            </a>
            <a
              href="#approach"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-lg font-semibold text-[#012a50] border-b border-[rgba(1,42,80,0.08)] hover:text-[#028698]"
            >
              {t.nav_approach}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#012a50] text-white font-semibold text-center shadow-md"
            >
              <span>{t.cta_quote}</span>
              <ArrowUpRight className="w-4 h-4 text-[#8fd3dd]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
