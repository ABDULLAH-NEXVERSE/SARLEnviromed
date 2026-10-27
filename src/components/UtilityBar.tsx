'use client';

import React from 'react';
import { Language, ContentTranslation } from '@/types/content';
import { Mail, Globe2 } from 'lucide-react';

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
    <div className="bg-[#eef7f8] border-b border-[rgba(1,42,80,0.08)] text-[0.875rem] text-[#012a50] transition-colors">
      <div className="wrap flex items-center justify-between gap-4 py-2 flex-wrap min-h-[42px]">
        {/* Tagline with brand leaf emblem */}
        <div className="flex items-center gap-2 font-semibold">
          <svg className="w-4 h-4 flex-none" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M20 4C11 4 5 9 5 16c0 1.2.2 2.2.5 3 .8-5 4.500-8.500 9.500-10.500-4 3-6.500 6.500-7 11C16 19 20 13 20 4Z"
              fill="#34841b"
            />
          </svg>
          <span className="tracking-wide text-xs md:text-sm">{t.tagline}</span>
        </div>

        {/* Right side contact & language switch */}
        <div className="flex items-center gap-4 sm:gap-6 ms-auto">
          <a
            href="mailto:contact@enviromed-dz.com"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs md:text-sm font-medium hover:text-[#028698] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#028698]" />
            <span>contact@enviromed-dz.com</span>
          </a>

          {/* Language selector pill */}
          <div
            className="flex items-center gap-1 bg-white border border-[rgba(1,42,80,0.18)] rounded-full p-0.5 shadow-xs"
            role="group"
            aria-label="Language Selector"
          >
            <Globe2 className="w-3 h-3 text-[#028698] ml-2 rtl:ml-0 rtl:mr-2 flex-none" />
            {(['fr', 'en', 'ar'] as const).map((l) => {
              const isActive = currentLang === l;
              const label = l === 'fr' ? 'FR' : l === 'en' ? 'EN' : 'العربية';
              return (
                <button
                  key={l}
                  type="button"
                  onClick={() => onLanguageChange(l)}
                  aria-pressed={isActive}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#012a50] text-white shadow-xs scale-102'
                      : 'text-[#012a50] hover:bg-[#eef7f8] hover:text-[#028698]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
