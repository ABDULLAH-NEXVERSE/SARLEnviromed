'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentTranslation } from '@/types/content';
import {
  EASE,
  VIEWPORT,
  Reveal,
  RevealLines,
  fadeUp,
  stagger,
} from './motion/primitives';
import {
  ContainerIllustration,
  ModularIllustration,
  TrailerIllustration,
  FertIllustration,
  WorksIllustration,
  SourcingIllustration,
} from './ActivityIllustrations';

interface ActivitiesSectionProps {
  t: ContentTranslation;
  activeIndex: number;
  onActiveChange: (index: number) => void;
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
  activeIndex: cur,
  onActiveChange: setCur,
  onSelectActivityForQuote,
}) => {
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const currentAct = t.acts[cur] || t.acts[0];

  // On narrow screens the tabs become a horizontal strip; keep the active one in view
  // when it is selected from elsewhere (e.g. the supply overview cards).
  const tablistRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const list = tablistRef.current;
    const tab = list?.querySelector<HTMLElement>(`#tab-${cur}`);
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    const left = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
    list.scrollTo({ left, behavior: 'smooth' });
  }, [cur]);

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
      case 5:
        return <SourcingIllustration />;
      default:
        return <ContainerIllustration />;
    }
  };

  const lines = t.act_h.split('\n');
  const hasPhoto = PHOTOS[cur] && !imgError[cur];

  return (
    <section className="activities" id="activities">
      <div className="wrap">
        <div className="sec-head">
          <RevealLines
            lines={[lines[0] || 'Practical answers', lines[1] || 'to every requirement.']}
          />
          <Reveal delay={0.2}>
            <p>{t.act_p}</p>
          </Reveal>
        </div>

        <div className="tabs-layout">
          {/* Tab List */}
          <motion.div
            ref={tablistRef}
            className="tablist"
            role="tablist"
            aria-orientation="vertical"
            id="tablist"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={stagger(0.08, 0.1)}
          >
            {t.acts.map((act, i) => {
              const isSelected = i === cur;
              return (
                <motion.button
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
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
                  {isSelected && (
                    <motion.span
                      layoutId="tab-active"
                      className="tab-active"
                      aria-hidden="true"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="tt">{act.t}</span>
                    <span className="ts">{act.s}</span>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Signature panel with iconic lens corner */}
          <motion.div
            className="panel-stage"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={cur}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="panel"
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
                  <div className="panel-label">{t.lbl_supply}</div>
                  <h3>{currentAct.t}</h3>
                  <p className="desc">{currentAct.d}</p>

                  <div className="panel-specs">
                    <div>
                      <div className="panel-label">{t.lbl_options}</div>
                      <motion.ul
                        className="checks"
                        initial="hidden"
                        animate="visible"
                        variants={stagger(0.07, 0.15)}
                      >
                        {currentAct.l.map((req, idx) => (
                          <motion.li
                            key={idx}
                            variants={{
                              hidden: { opacity: 0, y: 8 },
                              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
                            }}
                          >
                            {CHECK_SVG}
                            <span>{req}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                    <div>
                      <div className="panel-label">{t.lbl_scope}</div>
                      <p className="panel-scope">{currentAct.scope}</p>
                    </div>
                  </div>

                  <div className="panel-quote">
                    <div>
                      <div className="panel-label">{t.lbl_quote}</div>
                      <p>{currentAct.quote}</p>
                    </div>
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
