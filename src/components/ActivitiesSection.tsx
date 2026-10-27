'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ContentTranslation } from '@/types/content';
import {
  ContainerIllustration,
  ModularIllustration,
  TrailerIllustration,
  FertIllustration,
  WorksIllustration,
} from './ActivityIllustrations';

interface ActivitiesSectionProps {
  t: ContentTranslation;
  onSelectActivityForQuote: (index: number) => void;
}

const CHECK_SVG = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#34841b" />
    <path
      d="M7 12.500l3.200 3.200L17 9"
      fill="none"
      stroke="#fff"
      strokeWidth="2.600"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PX = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=640&fit=crop`;

const PHOTOS: Record<number, { src: string; alt: string }> = {
  0: { src: PX(906494), alt: 'Colourful stacked shipping containers in a port' },
  4: { src: PX(14265867), alt: 'Construction site with cranes and rising structure' },
};

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  t,
  onSelectActivityForQuote,
}) => {
  const [cur, setCur] = useState(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  // 3D Parallax & Scroll Animation
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const tiltRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, -4]);
  const panelScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1, 1, 0.98]);

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
  const hasPhoto = PHOTOS[cur] && !imgError[cur];

  return (
    <section ref={sectionRef} className="activities" id="activities">
      <div className="wrap">
        <div className="sec-head">
          <h2>
            <span className="ln">{lines[0] || 'Practical answers'}</span>
            <span className="ln">{lines[1] || 'to every requirement.'}</span>
          </h2>
          <p>{t.act_p}</p>
        </div>

        <div className="tabs-layout">
          {/* Tab List */}
          <div
            className="tablist"
            role="tablist"
            aria-orientation="vertical"
            id="tablist"
          >
            {t.acts.map((act, i) => {
              const isSelected = i === cur;
              return (
                <button
                  key={i}
                  className="tab"
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={isSelected}
                  aria-controls="panel"
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setCur(i)}
                  onKeyDown={(e) => {
                    const n = t.acts.length;
                    let nextIdx = cur;
                    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                      nextIdx = (cur + 1) % n;
                    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                      nextIdx = (cur - 1 + n) % n;
                    } else if (e.key === 'Home') {
                      nextIdx = 0;
                    } else if (e.key === 'End') {
                      nextIdx = n - 1;
                    } else {
                      return;
                    }
                    e.preventDefault();
                    setCur(nextIdx);
                  }}
                >
                  <span className="n">{i + 1}</span>
                  <span>
                    <span className="tt">{act.t}</span>
                    <span className="ts">{act.s}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* 3D Scroll-Animated Signature Panel with iconic lens corner */}
          <motion.div
            style={{
              rotateX: tiltRotateX,
              scale: panelScale,
              transformPerspective: 1200,
            }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={cur}
                initial={{ opacity: 0, y: 12, rotateY: -3 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: -12, rotateY: 3 }}
                transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                className="panel swap"
                id="panel"
                role="tabpanel"
                aria-live="polite"
                aria-labelledby={`tab-${cur}`}
              >
                {/* Media header: Photo or custom SVG artwork */}
                {hasPhoto ? (
                  <div className="panel-art photo">
                    <img
                      src={PHOTOS[cur].src}
                      alt={PHOTOS[cur].alt}
                      loading="lazy"
                      onError={() =>
                        setImgError((prev) => ({ ...prev, [cur]: true }))
                      }
                    />
                  </div>
                ) : (
                  <div className="panel-art">{renderIllustration(cur)}</div>
                )}

                {/* Panel Body */}
                <div className="panel-body">
                  <h3>{currentAct.t}</h3>
                  <p className="desc">{currentAct.d}</p>
                  <ul className="checks">
                    {currentAct.l.map((req, idx) => (
                      <li key={idx}>
                        {CHECK_SVG}
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="actions">
                    <a
                      className="btn btn-primary"
                      href="#contact"
                      onClick={() => onSelectActivityForQuote(cur)}
                    >
                      {t.act_btn}
                    </a>
                  </div>
                  <p className="fine">{t.act_note}</p>
                </div>
              </motion.article>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
