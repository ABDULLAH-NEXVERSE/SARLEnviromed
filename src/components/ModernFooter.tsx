'use client';

import React from 'react';
import Image from 'next/image';
import { ContentTranslation } from '@/types/content';
import {
  ArrowUp,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

interface ModernFooterProps {
  t: ContentTranslation;
}

export const ModernFooter: React.FC<ModernFooterProps> = ({ t }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#001931] text-white overflow-hidden pt-12">
      {/* Top Wave Transition */}
      <svg
        className="w-full h-[clamp(44px,6vw,90px)] -mt-12 block transform rotate-180"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 40 C260 -6 520 80 800 40 C1080 0 1260 30 1440 8 V90 H0Z" fill="#028698" />
        <path d="M0 62 C280 22 540 90 820 62 C1100 34 1270 54 1440 40 V90 H0Z" fill="#001931" />
      </svg>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#028698]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#34841b]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="wrap relative z-10 pt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/95 p-3 rounded-2xl w-fit inline-block shadow-md">
              <div className="relative w-[210px] sm:w-[240px] h-[58px]">
                <Image
                  src="/logos/enviromed-logo.webp"
                  alt="SARL Enviromed"
                  fill
                  sizes="240px"
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

            <p className="text-sm sm:text-base text-[#b9d5e6] leading-relaxed max-w-[34em]">
              SARL Enviromed is a trusted Algerian enterprise dedicated to equipment supply, high-durability modular workspaces, agricultural support, and specialized construction coordination.
            </p>

            {/* Verification & Trust badges */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-[#8fd3dd]">
                <ShieldCheck className="w-4 h-4 text-[#34841b]" />
                <span>Verified Algerian Entity</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-[#8fd3dd]">
                <Building2 className="w-4 h-4 text-[#028698]" />
                <span>Algiers Commercial Hub</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Activities (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight border-b border-white/15 pb-2">
              {t.nav_activities}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#cfe3ee]">
              {t.acts.map((act, i) => (
                <li key={i}>
                  <a
                    href="#activities"
                    className="hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all inline-flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#028698] group-hover:text-[#8fd3dd]" />
                    <span>{act.t}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Card (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight border-b border-white/15 pb-2">
              Contact & Presence
            </h4>
            <div className="space-y-3.5 text-sm">
              {/* Email */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#028698] transition-colors">
                <Mail className="w-4 h-4 text-[#8fd3dd] flex-none mt-0.5" />
                <div>
                  <span className="block text-xs text-[#8fd3dd] font-semibold">Direct Enquiries</span>
                  <a
                    href="mailto:contact@enviromed-dz.com"
                    className="font-medium text-white hover:text-[#8fd3dd] transition-colors"
                  >
                    contact@enviromed-dz.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-[#34841b] flex-none mt-0.5" />
                <div>
                  <span className="block text-xs text-[#34841b] font-semibold">Algeria Operations</span>
                  <p className="text-[#cfe3ee] leading-relaxed">
                    Cité des travailleurs, lot 01, N° 07
                    <br />
                    Dar El Beida, Alger, Algeria
                  </p>
                </div>
              </div>

              {/* Working Hours / Timezone */}
              <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#cfe3ee]">
                <Clock className="w-4 h-4 text-[#028698] flex-none" />
                <span>Operating hours: Sun – Thu · 08:30 – 17:00 (GMT+1)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Back to Top Bar */}
      <div className="border-t border-white/10 bg-[#001326] relative z-10">
        <div className="wrap py-6 flex flex-wrap gap-4 items-center justify-between text-xs sm:text-sm text-[#9ec1d6]">
          <div className="flex items-center gap-2">
            <span>© 2026 SARL Enviromed.</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-[#6492b0]">{t.foot_prop}</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#028698] text-white font-medium transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
            >
              <span>{t.back_top}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
