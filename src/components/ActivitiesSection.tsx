'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentTranslation } from '@/types/content';
import {
  ContainerIllustration,
  ModularIllustration,
  TrailerIllustration,
  FertIllustration,
  WorksIllustration,
} from './ActivityIllustrations';
import { CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';

interface ActivitiesSectionProps {
  t: ContentTranslation;
  onSelectActivityForQuote: (index: number) => void;
}

const PX = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=640&fit=crop`;

const PHOTOS: Record<number, { src: string; alt: string }> = {
  0: { src: PX(906494), alt: 'Colourful stacked shipping containers in a port' },
  1: { src: PX(3862130), alt: 'Modern modular architectural office space' },
  2: { src: PX(11125977), alt: 'Heavy duty tipper trailers on site' },
  3: { src: PX(2165688), alt: 'Agricultural supplies and storage' },
  4: { src: PX(14265867), alt: 'Construction site with cranes and rising structure' },
};

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  t,
  onSelectActivityForQuote,
}) => {
  const [cur, setCur] = useState(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const currentAct = t.acts[cur] || t.acts[0];

  const renderIllustration = (index: number) => {
    switch (index) {
      case 0:
        return <ContainerIllustration />;
      case 1:
        return <ModularIllustration />;
      case 2:
        return <TrailerIllustration />;
      case 3:
        return <FertIllustration />;
      case 4:
        return <WorksIllustration />;
      default:
        return <ContainerIllustration />;
    }
  };

  const lines = t.act_h.split('\n');

  return (
    <section id="activities" className="relative py-20 lg:py-28 bg-[#028698] text-white overflow-hidden scroll-mt-24">
      {/* Ambient background 3D depth elements */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-[#026a79]/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#012a50]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="wrap relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-12 items-end mb-12 lg:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#8fd3dd]" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tight">
              <span className="ln">{lines[0] || 'Practical answers'}</span>
              <span className="ln text-[#d6f2f6]">{lines[1] || 'to every requirement.'}</span>
            </h2>
          </div>
          <p className="text-lg text-[#e6f7f9] leading-relaxed max-w-[32em]">
            {t.act_p}
          </p>
        </div>

        {/* 3D Tabs & Interactive Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-14 items-start perspective-container">
          {/* Vertical/Horizontal Tab List */}
          <div
            className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2.5 pb-2 lg:pb-0 scrollbar-none"
            role="tablist"
            aria-orientation="vertical"
          >
            {t.acts.map((act, i) => {
              const isSelected = cur === i;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={isSelected}
                  aria-controls="panel"
                  onClick={() => setCur(i)}
                  className={`relative flex-none lg:flex-initial text-start p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#012a50] text-white border-[#012a50] shadow-xl shadow-[#012a50]/30 -translate-y-0.5'
                      : 'bg-white/10 hover:bg-white/20 text-white border-white/15'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-display font-bold text-xl sm:text-2xl leading-none flex-none transition-colors ${
                        isSelected ? 'text-[#8fd3dd]' : 'text-white/80'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="block font-display font-bold text-base sm:text-lg tracking-tight">
                        {act.t}
                      </span>
                      <span
                        className={`hidden sm:block text-xs sm:text-sm mt-1 transition-colors ${
                          isSelected ? 'text-[#cfe6f3]' : 'text-white/85'
                        }`}
                      >
                        {act.s}
                      </span>
                    </div>
                  </div>

                  {/* Active 3D Indicator Chevron (Desktop) */}
                  {isSelected && (
                    <div className="hidden lg:block absolute inset-inline-end-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-inline-start-[10px] border-inline-start-[#012a50] rtl:border-inline-start-0 rtl:border-inline-end-[10px] rtl:border-inline-end-[#012a50]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* 3D Elevated Display Card */}
          <AnimatePresence mode="wait">
            <motion.article
              key={cur}
              initial={{ opacity: 0, y: 16, rotateX: -2 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -16, rotateX: 2 }}
              transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              id="panel"
              role="tabpanel"
              aria-labelledby={`tab-${cur}`}
              className="bg-white rounded-2xl md:rounded-3xl border-2 border-[#012a50] shadow-2xl shadow-[#012a50]/20 overflow-hidden text-[#2a4560] card-3d"
            >
              {/* Media Container: Photo with fallback to SVG illustration */}
              <div className="bg-[#eef7f8] border-b-2 border-[#012a50] relative overflow-hidden group">
                {PHOTOS[cur] && !imgError[cur] ? (
                  <div className="relative h-[220px] sm:h-[280px] md:h-[320px] w-full overflow-hidden bg-[#012a50]">
                    <img
                      src={PHOTOS[cur].src}
                      alt={PHOTOS[cur].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={() =>
                        setImgError((prev) => ({ ...prev, [cur]: true }))
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#012a50]/70 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-3 inset-inline-start-4 px-3 py-1 rounded-full bg-white/90 text-[#012a50] text-xs font-semibold backdrop-blur-xs flex items-center gap-1.5 shadow-xs">
                      <Layers className="w-3.5 h-3.5 text-[#028698]" />
                      <span>{currentAct.t}</span>
                    </span>
                  </div>
                ) : (
                  <div className="p-4 sm:p-6 flex items-center justify-center">
                    {renderIllustration(cur)}
                  </div>
                )}
              </div>

              {/* Panel Content Body */}
              <div className="p-6 sm:p-8 md:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#012a50] tracking-tight">
                  {currentAct.t}
                </h3>
                <p className="mt-3 text-base sm:text-lg text-[#2a4560] leading-relaxed">
                  {currentAct.d}
                </p>

                {/* Key feature checks with subtle hover glow */}
                <ul className="mt-6 grid gap-3">
                  {currentAct.l.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base font-medium text-[#012a50] bg-[#f2fafb] p-3 rounded-xl border border-[rgba(2,134,152,0.15)] transition-colors hover:border-[#028698] hover:bg-[#eaf6f8]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#34841b] flex-none mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Action button linking to contact */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    onClick={() => onSelectActivityForQuote(cur)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#012a50] text-white font-semibold text-base shadow-sm hover:bg-[#012b53] hover:shadow-md hover:scale-102 transition-all duration-200"
                  >
                    <span>{t.act_btn}</span>
                    <ArrowRight className="w-4 h-4 text-[#8fd3dd]" />
                  </a>
                  <span className="text-xs text-[#2a4560] opacity-75 max-w-[28em]">
                    {t.act_note}
                  </span>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
