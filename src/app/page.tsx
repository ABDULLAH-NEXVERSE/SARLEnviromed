'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/types/content';
import { I18N } from '@/data/translations';
import { UtilityBar } from '@/components/UtilityBar';
import { SiteHeader } from '@/components/SiteHeader';
import { HeroSection } from '@/components/HeroSection';
import { CategoryBand } from '@/components/CategoryBand';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { SourcingSection } from '@/components/SourcingSection';
import { AboutSection } from '@/components/AboutSection';
import { ApproachSection } from '@/components/ApproachSection';
import { ContactSection } from '@/components/ContactSection';
import { ModernFooter } from '@/components/ModernFooter';

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedActivityIndex, setSelectedActivityIndex] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('lang');
      if (q === 'fr' || q === 'ar' || q === 'en') {
        setLang(q);
      }
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = I18N[lang]?.title || I18N.en.title;
  }, [lang]);

  const t = I18N[lang] || I18N.en;

  const handleSelectActivityForQuote = (idx: number) => {
    setSelectedActivityIndex(idx);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLocalSourcing = () => {
    setSelectedActivityIndex(5);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Utility top bar */}
      <UtilityBar currentLang={lang} onLanguageChange={setLang} t={t} />

      {/* Header with authentic logo asset */}
      <SiteHeader t={t} />

      <main id="top">
        {/* Exact Hero Section from index (3).html (zero distortion, exact SVG cog, wave, leaf, badges) */}
        <HeroSection t={t} />

        {/* Categories band */}
        <CategoryBand t={t} />

        {/* Enhanced 3D Scroll-Animated Activities Section with authentic signature lens panel */}
        <ActivitiesSection
          t={t}
          onSelectActivityForQuote={handleSelectActivityForQuote}
        />

        {/* Enhanced 3D Scroll-Animated Local Sourcing with signature lens shape */}
        <SourcingSection
          t={t}
          onSelectLocalSourcing={handleSelectLocalSourcing}
        />

        {/* Enhanced 3D Scroll-Animated About Section with signature lens Hub diagram and authentic logo symbol */}
        <AboutSection t={t} />

        {/* Enhanced 3D Scroll-Animated Approach Section with 3D cogs and wave timeline */}
        <ApproachSection t={t} />

        {/* Enhanced 3D Scroll-Animated Contact Section with signature lens form */}
        <ContactSection
          t={t}
          selectedActivityIndex={selectedActivityIndex}
          onActivitySelect={setSelectedActivityIndex}
        />
      </main>

      {/* Redesigned Modern Enterprise Footer */}
      <ModernFooter t={t} />
    </>
  );
}
