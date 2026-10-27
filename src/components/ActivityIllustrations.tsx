import React from 'react';

export const ContainerIllustration: React.FC = () => (
  <svg viewBox="0 0 420 300" role="img" aria-label="Stacked shipping containers" className="w-full h-auto max-h-[320px]">
    <defs>
      <pattern id="c1" width="9" height="10" patternUnits="userSpaceOnUse">
        <rect width="2.5" height="10" fill="#000" opacity="0.16" />
      </pattern>
    </defs>
    <circle cx="210" cy="170" r="132" fill="#fff" />
    <rect y="250" width="420" height="50" fill="#d9edf0" />
    <g>
      <rect x="52" y="186" width="156" height="64" fill="#028698" />
      <rect x="52" y="186" width="156" height="64" fill="url(#c1)" />
      <rect x="52" y="186" width="156" height="7" fill="#012a50" opacity="0.4" />
      <rect x="212" y="186" width="156" height="64" fill="#012a50" />
      <rect x="212" y="186" width="156" height="64" fill="url(#c1)" opacity="0.5" />
      <rect x="132" y="122" width="156" height="64" fill="#34841b" />
      <rect x="132" y="122" width="156" height="64" fill="url(#c1)" />
      <rect x="132" y="122" width="156" height="7" fill="#012a50" opacity="0.4" />
    </g>
    <g stroke="#012a50" strokeWidth="3" fill="none">
      <path d="M52 276H208M52 270V282M208 270V282" />
    </g>
    <g fill="#fff" opacity="0.9">
      <rect x="64" y="204" width="3" height="30" />
      <rect x="224" y="204" width="3" height="30" />
      <rect x="144" y="140" width="3" height="30" />
    </g>
  </svg>
);

export const ModularIllustration: React.FC = () => (
  <svg viewBox="0 0 420 300" role="img" aria-label="Interconnected modular container offices" className="w-full h-auto max-h-[320px]">
    <circle cx="210" cy="170" r="132" fill="#fff" />
    <rect y="250" width="420" height="50" fill="#d9edf0" />
    <rect x="60" y="150" width="190" height="100" fill="#fff" stroke="#012a50" strokeWidth="5" />
    <rect x="250" y="150" width="112" height="100" fill="#fff" stroke="#012a50" strokeWidth="5" />
    <rect x="55" y="140" width="312" height="12" fill="#012a50" />
    <rect x="60" y="152" width="190" height="8" fill="#028698" />
    <rect x="250" y="152" width="112" height="8" fill="#34841b" />
    <g fill="#d9edf0" stroke="#012a50" strokeWidth="4">
      <rect x="80" y="178" width="46" height="36" />
      <rect x="138" y="178" width="46" height="36" />
      <rect x="272" y="178" width="46" height="36" />
    </g>
    <g stroke="#012a50" strokeWidth="3">
      <path d="M103 178V214M161 178V214M295 178V214" />
    </g>
    <rect x="200" y="176" width="34" height="74" fill="#028698" stroke="#012a50" strokeWidth="4" />
    <circle cx="226" cy="214" r="3" fill="#fff" />
    <path d="M190 250h54M196 262h42" stroke="#012a50" strokeWidth="5" />
    <rect x="326" y="120" width="30" height="20" fill="#012a50" />
    <path d="M332 130h18" stroke="#8fd3dd" strokeWidth="3" />
    <path d="M340 215v35" stroke="#012a50" strokeWidth="3" />
  </svg>
);

export const TrailerIllustration: React.FC = () => (
  <svg viewBox="0 0 420 300" role="img" aria-label="Tipper trailer with raised body" className="w-full h-auto max-h-[320px]">
    <circle cx="210" cy="170" r="132" fill="#fff" />
    <rect y="250" width="420" height="50" fill="#d9edf0" />
    <g transform="rotate(-17 356 222)">
      <path d="M70 150H356V222H92Z" fill="#028698" />
      <path d="M70 150H356V160H70Z" fill="#012a50" />
      <g stroke="#fff" strokeWidth="3" opacity="0.6">
        <path d="M130 160V218M180 160V218M230 160V218M280 160V218M330 160V218" />
      </g>
    </g>
    <rect x="62" y="222" width="310" height="14" fill="#012a50" />
    <path d="M190 222L168 176" stroke="#012a50" strokeWidth="9" strokeLinecap="round" />
    <path d="M190 222L176 190" stroke="#8fd3dd" strokeWidth="4" strokeLinecap="round" />
    <rect x="50" y="214" width="26" height="22" fill="#012a50" />
    <path d="M110 236V250" stroke="#012a50" strokeWidth="8" />
    <g>
      <circle cx="262" cy="244" r="22" fill="#012a50" />
      <circle cx="262" cy="244" r="9" fill="#fff" />
      <circle cx="312" cy="244" r="22" fill="#012a50" />
      <circle cx="312" cy="244" r="9" fill="#fff" />
      <circle cx="362" cy="244" r="22" fill="#012a50" />
      <circle cx="362" cy="244" r="9" fill="#fff" />
    </g>
  </svg>
);

export const FertIllustration: React.FC = () => (
  <svg viewBox="0 0 420 300" role="img" aria-label="Bags and big bag of fertiliser" className="w-full h-auto max-h-[320px]">
    <circle cx="210" cy="170" r="132" fill="#fff" />
    <rect y="250" width="420" height="50" fill="#d9edf0" />
    <g stroke="#012a50" strokeWidth="4" strokeLinejoin="round">
      <path d="M62 250V168q0-8 8-8h60q8 0 8 8V250Z" fill="#fff" />
      <path d="M150 250V168q0-8 8-8h60q8 0 8 8V250Z" fill="#fff" />
      <path d="M238 250V168q0-8 8-8h60q8 0 8 8V250Z" fill="#fff" />
      <path d="M106 160V72q0-8 8-8h60q8 0 8 8V160Z" fill="#fff" />
      <path d="M194 160V72q0-8 8-8h60q8 0 8 8V160Z" fill="#fff" />
    </g>
    <g fill="#028698">
      <rect x="72" y="190" width="56" height="34" />
      <rect x="160" y="190" width="56" height="34" />
      <rect x="248" y="190" width="56" height="34" />
      <rect x="116" y="86" width="56" height="34" />
      <rect x="204" y="86" width="56" height="34" />
    </g>
    <g fill="#fff" fontFamily="Figtree, sans-serif" fontWeight="800" fontSize="15" textAnchor="middle">
      <text x="100" y="212">NPK</text>
      <text x="188" y="212">NPK</text>
      <text x="276" y="212">NPK</text>
      <text x="144" y="108">NPK</text>
      <text x="232" y="108">NPK</text>
    </g>
    <g fill="#34841b">
      <path d="M80 176c6-8 16-10 24-10-1 9-8 14-24 10Z" />
      <path d="M168 176c6-8 16-10 24-10-1 9-8 14-24 10Z" />
      <path d="M256 176c6-8 16-10 24-10-1 9-8 14-24 10Z" />
    </g>
    <g stroke="#012a50" strokeWidth="4">
      <rect x="328" y="146" width="72" height="104" fill="#e9f4f6" />
      <path d="M332 146q-6-26 4-30M396 146q6-26-4-30M356 146q-2-22 0-26M372 146q2-22 0-26" fill="none" strokeLinecap="round" />
      <path d="M328 190H400" strokeWidth="3" />
    </g>
    <path d="M346 214c8-12 22-14 34-14-1 14-12 22-34 14Z" fill="#34841b" />
  </svg>
);

export const WorksIllustration: React.FC = () => (
  <svg viewBox="0 0 420 300" role="img" aria-label="Building under construction with a tower crane" className="w-full h-auto max-h-[320px]">
    <circle cx="210" cy="170" r="132" fill="#fff" />
    <rect y="250" width="420" height="50" fill="#d9edf0" />
    <g fill="#012a50">
      <rect x="60" y="232" width="236" height="10" />
      <rect x="60" y="188" width="236" height="10" />
      <rect x="60" y="144" width="236" height="10" />
      <rect x="64" y="144" width="10" height="106" />
      <rect x="176" y="144" width="10" height="106" />
      <rect x="282" y="144" width="10" height="106" />
    </g>
    <g fill="#028698">
      <rect x="76" y="200" width="100" height="32" />
      <rect x="186" y="200" width="96" height="32" />
    </g>
    <g stroke="#fff" strokeWidth="2" opacity="0.7">
      <path d="M76 216H176M186 216H282M108 200V232M140 200V232M218 200V232M250 200V232" />
    </g>
    <rect x="76" y="156" width="46" height="32" fill="#34841b" />
    <path d="M60 144H296" stroke="#012a50" strokeWidth="4" />
    <g stroke="#012a50" strokeWidth="5" fill="none">
      <path d="M338 250V58M356 250V58" />
      <path d="M338 240L356 218L338 196L356 174L338 152L356 130L338 108L356 86" strokeWidth="3" />
      <path d="M276 54H410" />
      <path d="M347 22L276 54M347 22L410 54" strokeWidth="3" />
      <path d="M347 22V58" />
    </g>
    <rect x="332" y="40" width="30" height="24" rx="2" fill="#028698" stroke="#012a50" strokeWidth="3" />
    <rect x="396" y="54" width="22" height="26" fill="#012a50" />
    <path d="M300 54V132" stroke="#012a50" strokeWidth="3" />
    <rect x="278" y="132" width="44" height="12" fill="#012a50" />
    <rect x="284" y="120" width="32" height="12" fill="#34841b" />
  </svg>
);
