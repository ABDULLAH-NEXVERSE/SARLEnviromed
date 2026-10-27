'use client';

import React from 'react';
import Image from 'next/image';
import { ContentTranslation } from '@/types/content';
import { getGearPath } from '@/utils/geometry';
import { MapPin, Target, Network, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  t: ContentTranslation;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  const supplierGearPath = getGearPath(0, 0, 17, 13, 5, 10);
  const headlineLines = t.about_h.split('\n');

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#012b53] text-white relative overflow-hidden scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#028698]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#34841b]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="wrap relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Mission & Key Value Pillars */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#8fd3dd] text-xs font-bold uppercase tracking-wider mb-5 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#34841b]" />
            <span>Our Foundation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
            <span className="ln text-white">{headlineLines[0] || 'Proximity.'}</span>
            <span className="ln text-[#8fd3dd]">{headlineLines[1] || 'Clarity.'}</span>
            <span className="ln text-[#a3e496]">{headlineLines[2] || 'Coordination.'}</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#dbe9f2] leading-relaxed font-normal">
            {t.about_p}
          </p>

          <ul className="mt-8 sm:mt-10 grid gap-4 border-t border-[rgba(2,134,152,0.4)] pt-6">
            {/* Value Pillar 1 */}
            <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#028698] transition-colors">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-[#012a50] grid place-items-center flex-none shadow-sm">
                <Target className="w-6 h-6 text-[#028698]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {t.kp1_t}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-[#c7dceb]">
                  {t.kp1_p}
                </p>
              </div>
            </li>

            {/* Value Pillar 2 */}
            <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#028698] transition-colors">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-[#012a50] grid place-items-center flex-none shadow-sm">
                <Network className="w-6 h-6 text-[#34841b]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {t.kp2_t}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-[#c7dceb]">
                  {t.kp2_p}
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column: 3D Interactive Coordination Hub */}
        <div className="bg-white border-2 border-[#012a50] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-[10px_10px_0_#028698] rtl:shadow-[-10px_10px_0_#028698] text-[#2a4560] card-3d">
          <div className="font-bold text-xs sm:text-sm text-[#026a79] uppercase tracking-wider">
            {t.hub_k}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#012a50] mt-1.5 leading-snug">
            {t.hub_t}
          </h3>

          <div className="relative mt-6 aspect-[520/430] w-full">
            <svg
              viewBox="0 0 520 430"
              role="img"
              aria-label="One contact connecting suppliers, documents and delivery"
              className="w-full h-full"
            >
              {/* Outer pulsing dashed radar circle */}
              <circle
                cx="260"
                cy="215"
                r="135"
                fill="none"
                stroke="#d9edf0"
                strokeWidth="3"
                strokeDasharray="4 8"
                strokeLinecap="round"
                className="animate-pulse"
              />

              {/* Connecting laser lines from center hub */}
              <g stroke="#028698" strokeWidth="3" strokeLinecap="round">
                <line x1="260" y1="215" x2="260" y2="112" />
                <line x1="260" y1="215" x2="349" y2="266" />
                <line x1="260" y1="215" x2="171" y2="266" />
              </g>

              {/* Node 1: Suppliers */}
              <circle cx="260" cy="80" r="32" fill="#fff" stroke="#012a50" strokeWidth="3" />
              <g transform="translate(260 80)">
                <path d={supplierGearPath} fill="#028698" fillRule="evenodd" />
              </g>
              <text x="260" y="34" className="font-sans font-bold fill-[#012a50] text-[17px] text-anchor-middle text-center">
                {t.hub_n1}
              </text>

              {/* Node 2: Documents */}
              <circle cx="377" cy="282" r="32" fill="#fff" stroke="#012a50" strokeWidth="3" />
              <g transform="translate(377 282)" fill="none" stroke="#012a50" strokeWidth="2.6" strokeLinecap="round">
                <rect x="-11" y="-14" width="22" height="28" rx="3" />
                <path d="M-5 -5H5M-5 1H5M-5 7H1" stroke="#028698" />
              </g>
              <text x="377" y="341" className="font-sans font-bold fill-[#012a50] text-[17px] text-anchor-middle text-center">
                {t.hub_n2}
              </text>

              {/* Node 3: Delivery */}
              <circle cx="143" cy="282" r="32" fill="#fff" stroke="#012a50" strokeWidth="3" />
              <g transform="translate(143 282)">
                <rect x="-16" y="-9" width="32" height="18" fill="#34841b" rx="2" />
                <path d="M-9 -9V9M-3 -9V9M3 -9V9M9 -9V9" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
                <path d="M-16 13H16" stroke="#012a50" strokeWidth="2.6" strokeLinecap="round" />
              </g>
              <text x="143" y="341" className="font-sans font-bold fill-[#012a50] text-[17px] text-anchor-middle text-center">
                {t.hub_n3}
              </text>

              {/* Center Hub: SARL Enviromed Emblem */}
              <circle cx="260" cy="215" r="64" fill="#fff" stroke="#012a50" strokeWidth="3.5" className="drop-shadow-md" />
              
              {/* Using authentic symbol from logos folder */}
              <image
                href="/logos/enviromed-symbol.png"
                x="204"
                y="159"
                width="112"
                height="112"
                clipPath="url(#hubClip)"
              />
              <defs>
                <clipPath id="hubClip">
                  <circle cx="260" cy="215" r="54" />
                </clipPath>
              </defs>

              {/* Location Pin Badge: Dar El Beida, Alger */}
              <g transform="translate(260 392)">
                <path
                  d="M0 14C-9 4-14-2-14-9a14 14 0 0 1 28 0c0 7-5 13-14 23Z"
                  transform="translate(-86 -14) scale(0.9)"
                  fill="#34841b"
                />
                <circle cx="-86" cy="-15" r="4" fill="#fff" />
                <text x="-62" y="-8" className="font-sans font-bold fill-[#012a50] text-[16px] text-anchor-start">
                  Dar El Beida, Alger
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
