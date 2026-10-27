'use client';

import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = totalScroll / windowHeight;
      setProgress(Number(scrollPercent));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 h-[3px] z-[60] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#012a50] via-[#028698] to-[#34841b] transition-[width] duration-75 ease-out shadow-xs"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};
