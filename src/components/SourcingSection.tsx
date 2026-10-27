'use client';

import React from 'react';
import { ContentTranslation } from '@/types/content';
import { getGearPath } from '@/utils/geometry';
import { ArrowUpRight, SearchCheck } from 'lucide-react';

interface SourcingSectionProps {
  t: ContentTranslation;
  onSelectLocalSourcing: () => void;
}

export const SourcingSection: React.FC<SourcingSectionProps> = ({
  t,
  onSelectLocalSourcing,
}) => {
  // SVG spur gear for sourcing backdrop: cx=0, cy=0, ro=296, rb=262, hole=226, teeth=24
  const sourcingGearPath = getGearPath(0, 0, 296, 262, 226, 24);

  return (
    <section id="sourcing" className="py-12 sm:py-16 lg:py-24 bg-white relative">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#012a50] via-[#012b53] to-[#028698] text-white p-8 sm:p-12 lg:p-16 shadow-2xl shadow-[#012a50]/20 border border-white/10 card-3d">
          {/* Animated decorative gear SVG in the corner */}
          <svg
            className="absolute -top-24 inset-inline-end-[-80px] w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] opacity-15 pointer-events-none spin"
            viewBox="-300 -300 600 600"
            aria-hidden="true"
          >
            <path d={sourcingGearPath} fill="#fff" fillRule="evenodd" />
          </svg>

          {/* Shimmer gradient highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#a6e0e8] text-xs font-bold uppercase tracking-wider mb-3.5 backdrop-blur-xs border border-white/20">
                <SearchCheck className="w-3.5 h-3.5 text-[#8fd3dd]" />
                <span>{t.src_k}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white max-w-[20em] tracking-tight">
                {t.src_h}
              </h2>
              <p className="mt-3.5 text-base sm:text-lg text-[#e4f1f6] max-w-[36em] leading-relaxed font-normal">
                {t.src_p}
              </p>
            </div>

            <div className="flex-none">
              <a
                href="#contact"
                onClick={onSelectLocalSourcing}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#012a50] font-bold text-base shadow-lg hover:bg-[#eef7f8] hover:scale-105 hover:shadow-xl transition-all duration-200 group"
              >
                <span>{t.src_b}</span>
                <ArrowUpRight className="w-5 h-5 text-[#028698] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
