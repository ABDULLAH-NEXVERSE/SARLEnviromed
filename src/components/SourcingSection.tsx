'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ContentTranslation } from '@/types/content';
import { getGearPath } from '@/utils/geometry';

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

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const boxY = useTransform(scrollYProgress, [0, 0.5, 1], [24, 0, -24]);
  const boxScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.98]);

  return (
    <section ref={sectionRef} className="sourcing" id="sourcing">
      <div className="wrap">
        <motion.div
          style={{ y: boxY, scale: boxScale, transformPerspective: 1200 }}
          className="sourcing-box"
        >
          <svg
            className="deco spin"
            viewBox="-300 -300 600 600"
            aria-hidden="true"
          >
            <path d={sourcingGearPath} fill="#fff" fillRule="evenodd" />
          </svg>
          <div>
            <div className="k">{t.src_k}</div>
            <h2>{t.src_h}</h2>
            <p>{t.src_p}</p>
          </div>
          <a
            className="btn btn-light"
            href="#contact"
            onClick={onSelectLocalSourcing}
          >
            {t.src_b}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
