'use client';

import React from 'react';
import { ContentTranslation } from '@/types/content';
import { getGearPath } from '@/utils/geometry';

interface CategoryBandProps {
  t: ContentTranslation;
}

export const CategoryBand: React.FC<CategoryBandProps> = ({ t }) => {
  // Mini gear: cx=0, cy=0, ro=9.5, rb=7.5, hole=3, teeth=8
  const miniGearPath = getGearPath(0, 0, 9.5, 7.5, 3, 8);

  return (
    <div className="band">
      <div className="wrap">
        <ul>
          <li>
            <svg viewBox="-10 -10 20 20" aria-hidden="true">
              <path d={miniGearPath} fill="#028698" fillRule="evenodd" />
            </svg>
            <span>{t.cat1}</span>
          </li>
          <li>
            <svg viewBox="-10 -10 20 20" aria-hidden="true">
              <path d={miniGearPath} fill="#028698" fillRule="evenodd" />
            </svg>
            <span>{t.cat2}</span>
          </li>
          <li>
            <svg viewBox="-10 -10 20 20" aria-hidden="true">
              <path d={miniGearPath} fill="#028698" fillRule="evenodd" />
            </svg>
            <span>{t.cat3}</span>
          </li>
          <li>
            <svg viewBox="-10 -10 20 20" aria-hidden="true">
              <path d={miniGearPath} fill="#028698" fillRule="evenodd" />
            </svg>
            <span>{t.cat4}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
