'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContentTranslation } from '@/types/content';
import { getGearPath } from '@/utils/geometry';
import {
  VIEWPORT,
  Reveal,
  RevealLines,
  fadeUp,
  stagger,
} from './motion/primitives';

interface AboutSectionProps {
  t: ContentTranslation;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  const supplierGearPath = getGearPath(0, 0, 17, 13, 5, 10);
  const headlineLines = t.about_h.split('\n');


  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div>
          <RevealLines
            lines={[
              headlineLines[0] || 'Proximity.',
              headlineLines[1] || 'Clarity.',
              headlineLines[2] || 'Coordination.',
            ]}
          />
          <Reveal delay={0.25}>
            <p className="lede">{t.about_p}</p>
          </Reveal>
          <motion.ul
            className="kps"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={stagger(0.14, 0.2)}
          >
            <motion.li variants={fadeUp}>
              <span className="ic">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="none"
                    stroke="#012a50"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4.500"
                    fill="none"
                    stroke="#028698"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="1.400" fill="#34841b" />
                </svg>
              </span>
              <div>
                <h3>{t.kp1_t}</h3>
                <p>{t.kp1_p}</p>
              </div>
            </motion.li>
            <motion.li variants={fadeUp}>
              <span className="ic">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="6" cy="12" r="3" fill="#028698" />
                  <circle cx="18" cy="6" r="3" fill="#012a50" />
                  <circle cx="18" cy="18" r="3" fill="#34841b" />
                  <path
                    d="M8.500 11L15.500 7.200M8.500 13L15.500 16.800"
                    stroke="#012a50"
                    strokeWidth="1.800"
                  />
                </svg>
              </span>
              <div>
                <h3>{t.kp2_t}</h3>
                <p>{t.kp2_p}</p>
              </div>
            </motion.li>
          </motion.ul>
        </div>

        {/* Signature lens hub */}
        <motion.div
          className="hub"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className="k">{t.hub_k}</div>
          <h3>{t.hub_t}</h3>
          <svg
            viewBox="0 0 520 430"
            role="img"
            aria-label="One contact connecting suppliers, documents and delivery"
          >
            <circle
              cx="260"
              cy="215"
              r="135"
              fill="none"
              stroke="#d9edf0"
              strokeWidth="3"
              strokeDasharray="3 9"
              strokeLinecap="round"
            />
            <g stroke="#028698" strokeWidth="3">
              <line x1="260" y1="215" x2="260" y2="112" />
              <line x1="260" y1="215" x2="349" y2="266" />
              <line x1="260" y1="215" x2="171" y2="266" />
            </g>
            {/* Center hub: using authentic logo symbol from logos folder */}
            <circle
              cx="260"
              cy="215"
              r="64"
              fill="#fff"
              stroke="#012a50"
              strokeWidth="3"
            />
            <defs>
              <clipPath id="hubCircleClip">
                <circle cx="260" cy="215" r="52" />
              </clipPath>
            </defs>
            <image
              href="/logos/enviromed-symbol.png"
              x="204"
              y="159"
              width="112"
              height="112"
              clipPath="url(#hubCircleClip)"
            />
            {/* suppliers */}
            <circle
              cx="260"
              cy="80"
              r="32"
              fill="#fff"
              stroke="#012a50"
              strokeWidth="3"
            />
            <g transform="translate(260 80)">
              <path d={supplierGearPath} fill="#028698" fillRule="evenodd" />
            </g>
            <text x="260" y="34">
              {t.hub_n1}
            </text>
            {/* documents */}
            <circle
              cx="377"
              cy="282"
              r="32"
              fill="#fff"
              stroke="#012a50"
              strokeWidth="3"
            />
            <g
              transform="translate(377 282)"
              fill="none"
              stroke="#012a50"
              strokeWidth="2.600"
              strokeLinecap="round"
            >
              <rect x="-11" y="-14" width="22" height="28" rx="3" />
              <path d="M-5 -5H5M-5 1H5M-5 7H1" stroke="#028698" />
            </g>
            <text x="377" y="341">
              {t.hub_n2}
            </text>
            {/* delivery */}
            <circle
              cx="143"
              cy="282"
              r="32"
              fill="#fff"
              stroke="#012a50"
              strokeWidth="3"
            />
            <g transform="translate(143 282)">
              <rect x="-16" y="-9" width="32" height="18" fill="#34841b" />
              <path
                d="M-9 -9V9M-3 -9V9M3 -9V9M9 -9V9"
                stroke="#fff"
                strokeWidth="1.500"
                opacity=".5"
              />
              <path
                d="M-16 13H16"
                stroke="#012a50"
                strokeWidth="2.600"
                strokeLinecap="round"
              />
            </g>
            <text x="143" y="341">
              {t.hub_n3}
            </text>
            {/* pin */}
            <g transform="translate(260 388)">
              <path
                d="M0 14C-9 4-14-2-14-9a14 14 0 0 1 28 0c0 7-5 13-14 23Z"
                transform="translate(-86 -14) scale(.9)"
                fill="#34841b"
              />
              <circle cx="-86" cy="-15" r="4" fill="#fff" />
              <text
                x="-62"
                y="-9"
                style={{ textAnchor: 'start', fontSize: '16px' }}
              >
                Dar El Beida, Alger
              </text>
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
