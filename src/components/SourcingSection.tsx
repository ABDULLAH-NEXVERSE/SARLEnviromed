'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Route, SearchCheck } from 'lucide-react';
import { ContentTranslation } from '@/types/content';
import { getGearPath } from '@/utils/geometry';
import { EASE, VIEWPORT, fadeUp, stagger } from './motion/primitives';

const POINT_ICONS = [ClipboardList, SearchCheck, Route];

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
    <section className="sourcing" id="sourcing">
      <div className="wrap">
        <motion.div
          className="sourcing-box"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger(0.1, 0.1)}
        >
          <svg
            className="deco spin"
            viewBox="-300 -300 600 600"
            aria-hidden="true"
          >
            <path d={sourcingGearPath} fill="#fff" fillRule="evenodd" />
          </svg>
          <div>
            <motion.div className="k" variants={fadeUp}>{t.src_k}</motion.div>
            <motion.h2 variants={fadeUp}>{t.src_h}</motion.h2>
            <motion.p variants={fadeUp}>{t.src_p}</motion.p>
          </div>
          <motion.a
            className="btn btn-light"
            href="#contact"
            onClick={onSelectLocalSourcing}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
            }}
          >
            {t.src_b}
          </motion.a>

          <ol className="src-pts">
            {t.src_pts.map((pt, i) => {
              const Icon = POINT_ICONS[i] ?? ClipboardList;
              return (
                <motion.li key={i} variants={fadeUp}>
                  <span className="src-pt-icon" aria-hidden="true">
                    <Icon strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3>
                      <span className="src-pt-n">{String(i + 1).padStart(2, '0')}</span>
                      {pt.t}
                    </h3>
                    <p>{pt.p}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </motion.div>
      </div>
    </section>
  );
};
