// src/components/common/KhmerTemplePillars.jsx
import React from 'react';

/**
 * PURE VECTOR ROYAL KHMER TEMPLE PILLARS (សសរប្រាសាទបុរាណខ្មែរ)
 * 100% Clean Vector SVG - Completely free of any third-party TikTok watermarks or ripped images.
 * Designed with authentic Angkorian stone carving motifs:
 * - Upper Lotus Capital (ក្បាលសសរត្របកឈូក)
 * - Shaft with repeated Kbach Phni Tes and lotus rings (ដងសសរឆ្លាក់ក្បាច់)
 * - Lower Carved Pedestal (ជើងទម្រក្បាច់ផ្កាចន្ទន៍)
 */
export const KhmerPillarLeft = ({ className = "" }) => (
  <div className={`h-full flex flex-col justify-between pointer-events-none select-none ${className}`}>
    <svg
      viewBox="0 0 54 800"
      preserveAspectRatio="none"
      className="w-full h-full drop-shadow-[4px_0_12px_rgba(40,15,10,0.45)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pillar Base Color: Sandstone Terracotta Gradient */}
      <defs>
        <linearGradient id="pillar-sandstone-l" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5c261e" />
          <stop offset="35%" stopColor="#964b3b" />
          <stop offset="70%" stopColor="#ba6854" />
          <stop offset="100%" stopColor="#7a3628" />
        </linearGradient>
        <linearGradient id="pillar-gold-trim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="50%" stopColor="#f7d877" />
          <stop offset="100%" stopColor="#aa771c" />
        </linearGradient>
      </defs>

      {/* Main Pillar Shaft */}
      <rect x="6" y="0" width="42" height="800" fill="url(#pillar-sandstone-l)" />

      {/* Outer & Inner Architectural Carving Grooves */}
      <line x1="6" y1="0" x2="6" y2="800" stroke="#3b150f" strokeWidth="2" />
      <line x1="12" y1="0" x2="12" y2="800" stroke="url(#pillar-gold-trim)" strokeWidth="1.2" opacity="0.8" />
      <line x1="18" y1="0" x2="18" y2="800" stroke="#4a1c15" strokeWidth="1" />
      <line x1="36" y1="0" x2="36" y2="800" stroke="#4a1c15" strokeWidth="1" />
      <line x1="42" y1="0" x2="42" y2="800" stroke="url(#pillar-gold-trim)" strokeWidth="1.2" opacity="0.8" />
      <line x1="48" y1="0" x2="48" y2="800" stroke="#3b150f" strokeWidth="2" />

      {/* Repeated Authentic Khmer Lotus Capital Bands (ក្បាច់ត្របកឈូកពុទ្ធសករាជ) */}
      {[40, 140, 240, 340, 440, 540, 640, 740].map((y) => (
        <g key={y} transform={`translate(6, ${y})`}>
          {/* Ornate Molded Ring */}
          <rect x="0" y="0" width="42" height="18" fill="#8c3e30" stroke="url(#pillar-gold-trim)" strokeWidth="1" rx="2" />
          {/* Diamond Lotus Core */}
          <polygon points="21,2 27,9 21,16 15,9" fill="url(#pillar-gold-trim)" />
          <circle cx="21" cy="9" r="2" fill="#fffef5" />
          {/* Flanking Lotus Beads */}
          <circle cx="9" cy="9" r="2" fill="url(#pillar-gold-trim)" />
          <circle cx="33" cy="9" r="2" fill="url(#pillar-gold-trim)" />
          {/* Chevron Relief */}
          <path d="M0,0 L21,5 L42,0 M0,18 L21,13 L42,18" stroke="#3b150f" strokeWidth="1" />
        </g>
      ))}

      {/* Vertical Phni Flame Highlights */}
      <path
        d="M27 0 V800"
        stroke="url(#pillar-gold-trim)"
        strokeWidth="1"
        strokeDasharray="8 12"
        opacity="0.6"
      />
    </svg>
  </div>
);

export const KhmerPillarRight = ({ className = "" }) => (
  <div className={`h-full flex flex-col justify-between pointer-events-none select-none ${className}`}>
    <svg
      viewBox="0 0 54 800"
      preserveAspectRatio="none"
      className="w-full h-full drop-shadow-[-4px_0_12px_rgba(40,15,10,0.45)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pillar-sandstone-r" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#5c261e" />
          <stop offset="35%" stopColor="#964b3b" />
          <stop offset="70%" stopColor="#ba6854" />
          <stop offset="100%" stopColor="#7a3628" />
        </linearGradient>
        <linearGradient id="pillar-gold-trim-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="50%" stopColor="#f7d877" />
          <stop offset="100%" stopColor="#aa771c" />
        </linearGradient>
      </defs>

      {/* Main Pillar Shaft */}
      <rect x="6" y="0" width="42" height="800" fill="url(#pillar-sandstone-r)" />

      {/* Outer & Inner Architectural Carving Grooves */}
      <line x1="6" y1="0" x2="6" y2="800" stroke="#3b150f" strokeWidth="2" />
      <line x1="12" y1="0" x2="12" y2="800" stroke="url(#pillar-gold-trim-r)" strokeWidth="1.2" opacity="0.8" />
      <line x1="18" y1="0" x2="18" y2="800" stroke="#4a1c15" strokeWidth="1" />
      <line x1="36" y1="0" x2="36" y2="800" stroke="#4a1c15" strokeWidth="1" />
      <line x1="42" y1="0" x2="42" y2="800" stroke="url(#pillar-gold-trim-r)" strokeWidth="1.2" opacity="0.8" />
      <line x1="48" y1="0" x2="48" y2="800" stroke="#3b150f" strokeWidth="2" />

      {/* Repeated Authentic Khmer Lotus Capital Bands */}
      {[40, 140, 240, 340, 440, 540, 640, 740].map((y) => (
        <g key={y} transform={`translate(6, ${y})`}>
          <rect x="0" y="0" width="42" height="18" fill="#8c3e30" stroke="url(#pillar-gold-trim-r)" strokeWidth="1" rx="2" />
          <polygon points="21,2 27,9 21,16 15,9" fill="url(#pillar-gold-trim-r)" />
          <circle cx="21" cy="9" r="2" fill="#fffef5" />
          <circle cx="9" cy="9" r="2" fill="url(#pillar-gold-trim-r)" />
          <circle cx="33" cy="9" r="2" fill="url(#pillar-gold-trim-r)" />
          <path d="M0,0 L21,5 L42,0 M0,18 L21,13 L42,18" stroke="#3b150f" strokeWidth="1" />
        </g>
      ))}

      {/* Vertical Phni Flame Highlights */}
      <path
        d="M27 0 V800"
        stroke="url(#pillar-gold-trim-r)"
        strokeWidth="1"
        strokeDasharray="8 12"
        opacity="0.6"
      />
    </svg>
  </div>
);
