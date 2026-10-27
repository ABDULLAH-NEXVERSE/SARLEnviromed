'use client';

import React from 'react';
import { ContentTranslation } from '@/types/content';
import { getGearPath } from '@/utils/geometry';

interface CategoryBandProps {
  t: ContentTranslation;
}

export const CategoryBand: React.FC<CategoryBandProps> = ({ t }) => {
  // mini gear: cx=0, cy=0, ro=9.5, rb=7.5, hole=3, teeth=8
  const miniGearPath = getGearPath(0, 0, 9.5, 7.5, 3, 8);

  const categories = [
    { key: 'cat1', label: t.cat1, href: '#activities' },
    { key: 'cat2', label: t.cat2, href: '#activities' },
    { key: 'cat3', label: t.cat3, href: '#activities' },
    { key: 'cat4', label: t.cat4, href: '#activities' },
  ];

  return (
    <div className="bg-[#012c53] text-white -mt-px relative z-10 shadow-inner">
      <div className="wrap">
        <ul className="flex items-center justify-between gap-4 sm:gap-8 flex-wrap py-3.5 sm:py-5">
          {categories.map((c) => (
            <li key={c.key} className="flex items-center gap-3 font-display font-semibold text-sm sm:text-base lg:text-lg tracking-wide group transition-transform hover:translate-x-1">
              <svg viewBox="-10 -10 20 20" aria-hidden="true" className="w-5 h-5 flex-none transition-transform duration-500 group-hover:rotate-90">
                <path d={miniGearPath} fill="#028698" fillRule="evenodd" />
              </svg>
              <a href={c.href} className="hover:text-[#8fd3dd] transition-colors">
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
