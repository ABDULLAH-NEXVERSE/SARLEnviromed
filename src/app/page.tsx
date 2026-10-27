'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/types/content';
import { I18N } from '@/data/translations';
import { ScrollProgress } from '@/components/ScrollProgress';
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

  // Sync document language, dir (RTL/LTR), and title
  useEffect(() => {
    // Check initial query parameter or stored preference
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'fr' || urlLang === 'ar' || urlLang === 'en') {
        setLang(urlLang);
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
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#028698]/20 selection:text-[#012a50]">
      {/* 3D Top Scroll Progress */}
      <ScrollProgress />

      {/* Utility Top Bar */}
      <UtilityBar currentLang={lang} onLanguageChange={setLang} t={t} />

      {/* Header with authentic logo asset */}
      <SiteHeader t={t} />

      {/* Main Content */}
      <main id="top" className="flex-1">
        {/* Hero Section (faithfully preserved exact layout, SVG cog, wave, leaf, 3-color typography, and badges) */}
        <HeroSection t={t} />

        {/* Categories Band */}
        <CategoryBand t={t} />

        {/* Enhanced 3D Animated Activities Section */}
        <ActivitiesSection
          t={t}
          onSelectActivityForQuote={handleSelectActivityForQuote}
        />

        {/* Enhanced 3D Local Sourcing Section */}
        <SourcingSection
          t={t}
          onSelectLocalSourcing={handleSelectLocalSourcing}
        />

        {/* Enhanced 3D About Section with Interactive Coordination Hub */}
        <AboutSection t={t} />

        {/* Enhanced 3D Process Approach Section */}
        <ApproachSection t={t} />

        {/* Enhanced Quotation & Contact Section */}
        <ContactSection
          t={t}
          selectedActivityIndex={selectedActivityIndex}
          onActivitySelect={setSelectedActivityIndex}
        />
      </main>

      {/* Redesigned Ultra-Modern Footer */}
      <ModernFooter t={t} />
    </div>
  );
}
