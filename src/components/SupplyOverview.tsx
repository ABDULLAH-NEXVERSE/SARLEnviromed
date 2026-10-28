'use client';

import React from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Building2, Container, HardHat, PackageSearch, Sprout, Truck } from 'lucide-react';
import { ContentTranslation } from '@/types/content';
import { EASE, VIEWPORT, Reveal, RevealLines, stagger } from './motion/primitives';

interface SupplyOverviewProps {
  t: ContentTranslation;
  onSelectActivity: (index: number) => void;
}

// One icon per activity, in the same order as t.acts.
const ICONS = [Container, Building2, Truck, Sprout, HardHat, PackageSearch];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

interface SupplyCardProps {
  index: number;
  title: string;
  summary: string;
  more: string;
  onSelect: () => void;
}

/** Activity card with a restrained pointer-driven 3D tilt (mouse only). */
const SupplyCard: React.FC<SupplyCardProps> = ({ index, title, summary, more, onSelect }) => {
  const Icon = ICONS[index] ?? PackageSearch;
  const reduceMotion = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 220, damping: 20, mass: 0.4 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), spring);

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduceMotion || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const resetPointer = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.li variants={cardVariants}>
      <motion.a
        href="#activities"
        className="supply-card"
        onClick={onSelect}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
      >
        <span className="supply-card-top">
          <span className="supply-icon" aria-hidden="true">
            <Icon strokeWidth={1.7} />
          </span>
          <span className="supply-num">{String(index + 1).padStart(2, '0')}</span>
        </span>
        <span className="supply-title">{title}</span>
        <span className="supply-summary">{summary}</span>
        <span className="supply-more">
          {more}
          <ArrowRight aria-hidden="true" strokeWidth={2} />
        </span>
      </motion.a>
    </motion.li>
  );
};

export const SupplyOverview: React.FC<SupplyOverviewProps> = ({ t, onSelectActivity }) => {
  const headlineLines = t.sup_h.split('\n');

  return (
    <section className="supply" id="supply" aria-labelledby="supply-title">
      <div className="wrap">
        <div className="supply-head">
          <div>
            <Reveal>
              <div className="supply-kicker">{t.sup_k}</div>
            </Reveal>
            <div id="supply-title">
              <RevealLines lines={headlineLines} />
            </div>
          </div>
          <Reveal delay={0.2}>
            <p>{t.sup_p}</p>
          </Reveal>
        </div>

        <motion.ul
          className="supply-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ ...VIEWPORT, amount: 0.1 }}
          variants={stagger(0.08, 0.1)}
        >
          {t.acts.map((act, i) => (
            <SupplyCard
              key={i}
              index={i}
              title={act.t}
              summary={act.s}
              more={t.sup_more}
              onSelect={() => onSelectActivity(i)}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
