'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContentTranslation } from '@/types/content';
import { getGearPath, getTimelineWavePath } from '@/utils/geometry';
import { EASE, VIEWPORT, Reveal, RevealLines, stagger } from './motion/primitives';

interface ApproachSectionProps {
  t: ContentTranslation;
}

const STEP_COLORS = ['#012a50', '#028698', '#34841b'];

const stepVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

// The timeline wave draws itself in as the steps arrive.
const waveVariants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 1.4, ease: EASE } },
};

export const ApproachSection: React.FC<ApproachSectionProps> = ({ t }) => {
  // Gear geometry for step nodes: cx=56, cy=56, ro=54, rb=47, hole=41, teeth=18
  const stepGearPath = getGearPath(56, 56, 54, 47, 41, 18);
  const wavePath = getTimelineWavePath(1200, 112, 26, 56);

  const headlineLines = t.app_h.split('\n');
  const steps = [
    { title: t.s1_t, body: t.s1_p },
    { title: t.s2_t, body: t.s2_p },
    { title: t.s3_t, body: t.s3_p },
  ];

  return (
    <section className="approach" id="approach">
      <div className="wrap">
        <div className="sec-head">
          <RevealLines
            lines={[headlineLines[0] || 'A clear project,', headlineLines[1] || 'at every stage.']}
          />
          <Reveal delay={0.2}>
            <p>{t.app_p}</p>
          </Reveal>
        </div>

        <motion.div
          className="steps"
          id="steps"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger(0.18, 0.1)}
        >
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
              variants={waveVariants}
            />
            <motion.path
              id="stepwave"
              d={wavePath}
              fill="none"
              stroke="#028698"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              variants={waveVariants}
            />
          </svg>

          {steps.map((step, i) => (
            <motion.div key={i} className="step" variants={stepVariants} whileHover={{ y: -6 }}>
              <div className="node">
                <svg viewBox="0 0 112 112" aria-hidden="true">
                  <circle cx="56" cy="56" r="46" fill="#fff" />
                  <path d={stepGearPath} fill={STEP_COLORS[i]} fillRule="evenodd" />
                </svg>
                <b>{i + 1}</b>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
