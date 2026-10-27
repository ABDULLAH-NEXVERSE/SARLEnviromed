'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ContentTranslation } from '@/types/content';
import { getGearPath, getTimelineWavePath } from '@/utils/geometry';

interface ApproachSectionProps {
  t: ContentTranslation;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ t }) => {
  // Gear geometry for step nodes: cx=56, cy=56, ro=54, rb=47, hole=41, teeth=18
  const stepGearPath = getGearPath(56, 56, 54, 47, 41, 18);
  const wavePath = getTimelineWavePath(1200, 112, 26, 56);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const nodeRotation = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const waveDrawProgress = useTransform(scrollYProgress, [0.1, 0.6], [0.3, 1]);

  const headlineLines = t.app_h.split('\n');

  return (
    <section ref={sectionRef} className="approach" id="approach">
      <div className="wrap">
        <div className="sec-head">
          <h2>
            <span className="ln">{headlineLines[0] || 'A clear project,'}</span>
            <span className="ln">{headlineLines[1] || 'at every stage.'}</span>
          </h2>
          <p>{t.app_p}</p>
        </div>

        <div className="steps" id="steps">
          <svg
            className="wavebg"
            id="wavebg"
            viewBox="0 0 1200 112"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              id="stepwave2"
              d={wavePath}
              fill="none"
              stroke="#d9edf0"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              transform="translate(0 12)"
              style={{ pathLength: waveDrawProgress }}
            />
            <motion.path
              id="stepwave"
              d={wavePath}
              fill="none"
              stroke="#028698"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              style={{ pathLength: waveDrawProgress }}
            />
          </svg>

          {/* Step 1 */}
          <div className="step">
            <motion.div style={{ rotate: nodeRotation }} className="node">
              <svg viewBox="0 0 112 112" aria-hidden="true">
                <circle cx="56" cy="56" r="46" fill="#fff" />
                <path d={stepGearPath} fill="#012a50" fillRule="evenodd" />
              </svg>
              <b>1</b>
            </motion.div>
            <h3>{t.s1_t}</h3>
            <p>{t.s1_p}</p>
          </div>

          {/* Step 2 */}
          <div className="step">
            <motion.div style={{ rotate: nodeRotation }} className="node">
              <svg viewBox="0 0 112 112" aria-hidden="true">
                <circle cx="56" cy="56" r="46" fill="#fff" />
                <path d={stepGearPath} fill="#028698" fillRule="evenodd" />
              </svg>
              <b>2</b>
            </motion.div>
            <h3>{t.s2_t}</h3>
            <p>{t.s2_p}</p>
          </div>

          {/* Step 3 */}
          <div className="step">
            <motion.div style={{ rotate: nodeRotation }} className="node">
              <svg viewBox="0 0 112 112" aria-hidden="true">
                <circle cx="56" cy="56" r="46" fill="#fff" />
                <path d={stepGearPath} fill="#34841b" fillRule="evenodd" />
              </svg>
              <b>3</b>
            </motion.div>
            <h3>{t.s3_t}</h3>
            <p>{t.s3_p}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
