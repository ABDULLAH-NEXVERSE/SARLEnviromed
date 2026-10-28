'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

// One easing curve and one cadence across the site keeps motion calm and corporate.
export const EASE = [0.22, 1, 0.36, 1] as const;
export const VIEWPORT = { once: true, amount: 0.2 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const stagger = (step = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: step, delayChildren: delay } },
});

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Fades and lifts its content into place, once, when it enters the viewport. */
export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={VIEWPORT}
    variants={fadeUp}
    transition={{ duration: 0.8, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

interface RevealLinesProps {
  lines: string[];
  as?: 'h2' | 'h3';
  className?: string;
}

/** Headline whose lines slide up from behind a mask, one after another. */
export const RevealLines: React.FC<RevealLinesProps> = ({ lines, as = 'h2', className }) => {
  const Tag = as === 'h3' ? motion.h3 : motion.h2;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={stagger(0.12)}
    >
      {lines.map((line, i) => (
        <span key={i} className="ln ln-mask">
          <motion.span
            className="ln-inner"
            variants={{
              hidden: { y: '105%' },
              visible: { y: '0%', transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
