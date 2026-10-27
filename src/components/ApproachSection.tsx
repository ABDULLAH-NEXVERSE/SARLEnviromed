'use client';

import React from 'react';
import { ContentTranslation } from '@/types/content';
import { getGearPath, getTimelineWavePath } from '@/utils/geometry';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ApproachSectionProps {
  t: ContentTranslation;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ t }) => {
  // Gear paths for the 3 process nodes: cx=56, cy=56, ro=54, rb=47, hole=41, teeth=18
  const stepGearPath = getGearPath(56, 56, 54, 47, 41, 18);
  const waveTimelinePath = getTimelineWavePath(1200, 112, 26, 56);

  const headlineLines = t.app_h.split('\n');

  const steps = [
    {
      num: 1,
      color: '#012a50',
      title: t.s1_t,
      desc: t.s1_p,
    },
    {
      num: 2,
      color: '#028698',
      title: t.s2_t,
      desc: t.s2_p,
    },
    {
      num: 3,
      color: '#34841b',
      title: t.s3_t,
      desc: t.s3_p,
    },
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#f8fcfd] relative overflow-hidden scroll-mt-24">
      <div className="wrap">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-12 items-end mb-16 lg:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#028698]/10 text-[#026a79] text-xs font-bold uppercase tracking-wider mb-4 border border-[#028698]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#028698]" />
              <span>Structured Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#012a50] leading-tight tracking-tight">
              <span className="ln">{headlineLines[0] || 'A clear project,'}</span>
              <span className="ln text-[#028698]">{headlineLines[1] || 'at every stage.'}</span>
            </h2>
          </div>
          <p className="text-lg text-[#2a4560] leading-relaxed max-w-[32em]">
            {t.app_p}
          </p>
        </div>

        {/* 3-Step Process Flow with Connecting Sine Wave Timeline */}
        <div className="relative">
          {/* Desktop Connecting Wave SVG */}
          <div className="hidden lg:block absolute inset-x-0 top-0 h-[112px] pointer-events-none z-0">
            <svg
              viewBox="0 0 1200 112"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="w-full h-full"
            >
              <path
                d={waveTimelinePath}
                fill="none"
                stroke="#d9edf0"
                strokeWidth="5"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                transform="translate(0, 10)"
              />
              <path
                d={waveTimelinePath}
                fill="none"
                stroke="#028698"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Mobile vertical line */}
          <div className="lg:hidden absolute inset-y-12 inset-inline-start-1/2 -translate-x-1/2 w-[3px] rounded-full bg-gradient-to-b from-[#012a50] via-[#028698] to-[#34841b]" />

          {/* Process Step Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[rgba(1,42,80,0.12)] shadow-sm hover:shadow-xl hover:border-[#028698] transition-all duration-300 text-center flex flex-col items-center card-3d group"
              >
                {/* Node with Cog Ring and Step Number */}
                <div className="relative w-28 h-28 flex items-center justify-center flex-none">
                  <svg
                    viewBox="0 0 112 112"
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full drop-shadow-sm transition-transform duration-700 group-hover:rotate-45"
                  >
                    <circle cx="56" cy="56" r="46" fill="#fff" />
                    <path d={stepGearPath} fill={st.color} fillRule="evenodd" />
                  </svg>
                  <b
                    className="relative font-display text-3xl font-extrabold"
                    style={{ color: st.color }}
                  >
                    {st.num}
                  </b>
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-[#012a50] tracking-tight">
                  {st.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#2a4560] leading-relaxed max-w-[22em]">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
