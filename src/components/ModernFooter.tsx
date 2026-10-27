'use client';

import React from 'react';
import Image from 'next/image';
import { ContentTranslation } from '@/types/content';
import { ArrowUp, Mail, MapPin, Clock, Building2, ChevronRight } from 'lucide-react';

interface ModernFooterProps {
  t: ContentTranslation;
}

export const ModernFooter: React.FC<ModernFooterProps> = ({ t }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="site-footer"
      style={{ backgroundColor: '#012a50', marginTop: 'clamp(32px, 6vw, 64px)' }}
    >
      {/* Wave top transition from index (3).html */}
      <svg
        className="wave-top"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 0H1440V8C1260 30 1080 0 800 40C520 80 260 -6 0 40Z"
          fill="#fff"
        />
        <path
          d="M0 40 C260 -6 520 80 800 40 C1080 0 1260 30 1440 8 V90 H0Z"
          fill="#028698"
        />
        <path
          d="M0 40 C260 -6 520 80 800 40 C1080 0 1260 30 1440 8"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
          transform="translate(0 12)"
        />
        <path
          d="M0 62 C280 22 540 90 820 62 C1100 34 1270 54 1440 40 V90 H0Z"
          fill="#012a50"
          transform="translate(0 8)"
        />
      </svg>

      {/* Main Footer Content */}
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pt-12 pb-14 text-white">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white p-2.5 rounded-2xl w-fit inline-block shadow-md">
              <div className="relative w-[200px] sm:w-[230px] h-[54px]">
                <Image
                  src="/logos/enviromed-logo.webp"
                  alt="SARL Enviromed"
                  fill
                  sizes="230px"
                  className="object-contain"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.src.includes('enviromed-logo-480.png')) {
                      target.src = '/logos/enviromed-logo-480.png';
                    }
                  }}
                />
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#d2e8f5] leading-relaxed max-w-[32em]">
              SARL Enviromed supports industrial, agricultural, and construction projects in Algeria through equipment supply, custom modular workspaces, and turnkey local procurement.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-[#8fd3dd] border border-white/15">
                <Building2 className="w-3.5 h-3.5 text-[#34841b]" />
                <span>Dar El Beida, Alger</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-[#8fd3dd] border border-white/15">
                <span>Algerian Trade Registry</span>
              </span>
            </div>
          </div>

          {/* Quick Links: Activities */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-base font-bold text-white tracking-tight border-b border-white/20 pb-2">
              {t.nav_activities}
            </h4>
            <ul className="space-y-2 text-sm text-[#cfe3ee]">
              {t.acts.map((act, i) => (
                <li key={i}>
                  <a
                    href="#activities"
                    className="hover:text-white hover:underline transition-all inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#028698] group-hover:text-[#8fd3dd]" />
                    <span>{act.t}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Reach */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-base font-bold text-white tracking-tight border-b border-white/20 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-[#cfe3ee]">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#8fd3dd] flex-none mt-1" />
                <div>
                  <span className="block text-xs text-[#8fd3dd] font-semibold">Inquiries</span>
                  <a
                    href="mailto:contact@enviromed-dz.com"
                    className="font-medium text-white hover:underline text-sm sm:text-base"
                  >
                    contact@enviromed-dz.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#34841b] flex-none mt-1" />
                <div>
                  <span className="block text-xs text-[#34841b] font-semibold">Headquarters</span>
                  <p className="leading-snug text-xs sm:text-sm">
                    Cité des travailleurs, lot 01, N° 07
                    <br />
                    Dar El Beida, Alger, ALGERIA
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#b9d5e6] pt-1">
                <Clock className="w-3.5 h-3.5 text-[#028698] flex-none" />
                <span>Operating hours: Sun – Thu · 08:30 – 17:00 (GMT+1)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Back to Top Bar */}
      <div className="foot-bar">
        <div className="wrap">
          <span>© 2026 SARL Enviromed</span>
          <span>{t.foot_prop}</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-white font-semibold text-xs sm:text-sm hover:text-[#8fd3dd] transition-colors cursor-pointer"
          >
            <span>{t.back_top}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
