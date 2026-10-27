'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ContentTranslation } from '@/types/content';

interface SiteHeaderProps {
  t: ContentTranslation;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ t }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <a className="brand" href="#top" aria-label="SARL Enviromed">
          <div className="relative w-[190px] h-[54px]">
            <Image
              src="/logos/enviromed-logo.webp"
              alt="SARL Enviromed"
              fill
              sizes="190px"
              priority
              className="object-contain object-left rtl:object-right"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes('enviromed-logo-480.png')) {
                  target.src = '/logos/enviromed-logo-480.png';
                }
              }}
            />
          </div>
        </a>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={t.menu}
          onClick={() => setOpen(!open)}
        >
          <span></span>
        </button>

        <nav className={`nav ${open ? 'open' : ''}`} id="nav">
          <a
            className="link"
            href="#activities"
            onClick={() => setOpen(false)}
          >
            {t.nav_activities}
          </a>
          <a
            className="link"
            href="#about"
            onClick={() => setOpen(false)}
          >
            {t.nav_about}
          </a>
          <a
            className="link"
            href="#approach"
            onClick={() => setOpen(false)}
          >
            {t.nav_approach}
          </a>
          <a
            className="btn btn-primary"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            {t.cta_quote}
          </a>
        </nav>
      </div>
    </header>
  );
};
