'use client';

import React from 'react';
import { Language, ContentTranslation } from '@/types/content';

interface UtilityBarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: ContentTranslation;
}

export const UtilityBar: React.FC<UtilityBarProps> = ({
  currentLang,
  onLanguageChange,
  t,
}) => {
  return (
    <div className="utility">
      <div className="wrap">
        <span className="tag">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M20 4C11 4 5 9 5 16c0 1.2.2 2.2.5 3 .8-5 4.500-8.500 9.500-10.500-4 3-6.500 6.500-7 11C16 19 20 13 20 4Z"
              fill="#34841b"
            />
          </svg>
          <span>{t.tagline}</span>
        </span>
        <div className="right">
          <a href="mailto:contact@enviromed-dz.com">contact@enviromed-dz.com</a>
          <div className="langs" role="group" aria-label="Language">
            <button
              type="button"
              data-lang="fr"
              aria-pressed={currentLang === 'fr'}
              onClick={() => onLanguageChange('fr')}
            >
              FR
            </button>
            <button
              type="button"
              data-lang="en"
              aria-pressed={currentLang === 'en'}
              onClick={() => onLanguageChange('en')}
            >
              EN
            </button>
            <button
              type="button"
              data-lang="ar"
              aria-pressed={currentLang === 'ar'}
              lang="ar"
              onClick={() => onLanguageChange('ar')}
            >
              العربية
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
