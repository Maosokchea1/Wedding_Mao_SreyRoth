// src/components/common/DecorativeSVG.jsx
import React from 'react';

/**
 * Universal Gold & Stone Gradients and Specular Lighting Filters
 */
export const SvgGoldDefs = () => (
  <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
    <defs>
      {/* Royal Gold Foil Gradient */}
      <linearGradient id="gold-foil-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#bf953f" />
        <stop offset="25%" stopColor="#fcf6ba" />
        <stop offset="50%" stopColor="#b38728" />
        <stop offset="75%" stopColor="#fbf5b7" />
        <stop offset="100%" stopColor="#aa771c" />
      </linearGradient>

      {/* Radiant Gold Sheen */}
      <linearGradient id="gold-sheen-grad" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#d4af37" />
        <stop offset="35%" stopColor="#fff9d2" />
        <stop offset="65%" stopColor="#b8860b" />
        <stop offset="100%" stopColor="#e5c158" />
      </linearGradient>

      {/* Warm Rose Sandstone Accent */}
      <linearGradient id="sandstone-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d99879" />
        <stop offset="30%" stopColor="#fbe2d5" />
        <stop offset="60%" stopColor="#c57f62" />
        <stop offset="85%" stopColor="#f7d0be" />
        <stop offset="100%" stopColor="#aa6245" />
      </linearGradient>

      {/* SVG Specular Lighting for Monogram Seal */}
      <filter id="seal-specular" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2.2" result="blur" />
        <feSpecularLighting
          in="blur"
          surfaceScale="3.2"
          specularConstant="1.25"
          specularExponent="22"
          lightingColor="#fff9e6"
          result="specOut"
        >
          <fePointLight x="-45" y="-65" z="170" />
        </feSpecularLighting>
        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specIn" />
        <feComposite in="SourceGraphic" in2="specIn" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
      </filter>

      {/* Deboss Shadow Filter */}
      <filter id="deboss-filter">
        <feOffset dx="0" dy="1" />
        <feGaussianBlur stdDeviation="1" result="offset-blur" />
        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
        <feFlood floodColor="#3a1c22" floodOpacity="0.55" result="color" />
        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
      </filter>
    </defs>
  </svg>
);

/**
 * KBACH KHMER ROYAL TEMPLE CREST (ក្បាច់ហោជាង និងផ្កាចន្ទន៍ខ្មែរ)
 */
export const FanCrest = ({ className = "w-16 h-12 text-[#d4af37]" }) => (
  <svg
    viewBox="0 0 120 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M60 2 C61.5 7, 63 12, 60 18 C57 12, 58.5 7, 60 2 Z"
      fill="url(#gold-sheen-grad)"
    />
    <circle cx="60" cy="3" r="2" fill="#fffdf0" />
    <circle cx="60" cy="19" r="2.5" fill="url(#sandstone-grad)" />

    <path
      d="M60 18 C52 14, 38 10, 26 18 C14 26, 22 36, 32 32 C42 28, 48 24, 60 28 C72 24, 78 28, 88 32 C98 36, 106 26, 94 18 C82 10, 68 14, 60 18 Z"
      fill="url(#gold-foil-grad)"
    />

    <path
      d="M26 18 C20 14, 12 18, 14 24 C16 30, 24 28, 22 22"
      stroke="url(#gold-sheen-grad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M94 18 C100 14, 108 18, 106 24 C104 30, 96 28, 98 22"
      stroke="url(#gold-sheen-grad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />

    <g transform="translate(60, 42)">
      <rect x="-6" y="-6" width="12" height="12" transform="rotate(45)" fill="url(#gold-sheen-grad)" />
      <circle cx="0" cy="0" r="2.5" fill="#fffdf5" />
      <path d="M0 -7 C-4 -12, 4 -12, 0 -7 Z" fill="url(#sandstone-grad)" />
      <path d="M0 7 C-4 12, 4 12, 0 7 Z" fill="url(#sandstone-grad)" />
      <path d="M-7 0 C-12 -4, -12 4, -7 0 Z" fill="url(#sandstone-grad)" />
      <path d="M7 0 C12 -4, 12 4, 7 0 Z" fill="url(#sandstone-grad)" />
    </g>

    <path
      d="M30 48 C42 42, 52 46, 60 54 C68 46, 78 42, 90 48 C80 56, 70 54, 60 62 C50 54, 40 56, 30 48 Z"
      fill="url(#gold-foil-grad)"
      opacity="0.9"
    />
    <circle cx="60" cy="64" r="2" fill="url(#gold-sheen-grad)" />
  </svg>
);

/**
 * KHMER ROYAL TITLE ORNAMENT (ក្បាច់មាសលើក្រោមចំណងជើង "សិរីសួស្តី អាពាហ៍ពិពាហ៍")
 * Exactly as displayed in the video header.
 */
export const KhmerGoldHeader = ({ text = "សិរីសួស្តី អាពាហ៍ពិពាហ៍", className = "" }) => (
  <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
    {/* Upper Kbach Flourish */}
    <svg viewBox="0 0 240 32" className="w-52 md:w-64 h-6 text-[#d4af37]" fill="none">
      <path
        d="M20 16 C50 16 70 8 100 8 C112 8 116 3 120 1 C124 3 128 8 140 8 C170 8 190 16 220 16"
        stroke="url(#gold-sheen-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="120" cy="3" r="2.5" fill="url(#gold-sheen-grad)" />
      <path
        d="M60 16 C80 16 95 12 110 12 M130 12 C145 12 160 16 180 16"
        stroke="url(#gold-foil-grad)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="16" r="2" fill="url(#gold-foil-grad)" />
      <circle cx="220" cy="16" r="2" fill="url(#gold-foil-grad)" />
    </svg>

    {/* Golden Khmer Calligraphy with shadow */}
    <h1 className="font-moul text-2xl md:text-3xl gold-foil-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] px-2">
      {text}
    </h1>

    {/* Lower Kbach Flourish with Lotus Emblem */}
    <svg viewBox="0 0 240 32" className="w-52 md:w-64 h-6 text-[#d4af37] -mt-1" fill="none">
      <path
        d="M20 12 C50 12 70 20 100 20 C112 20 116 25 120 27 C124 25 128 20 140 20 C170 20 190 12 220 12"
        stroke="url(#gold-sheen-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="120" cy="27" r="2.5" fill="url(#gold-sheen-grad)" />
      <path
        d="M110 20 C115 15 125 15 130 20"
        stroke="url(#gold-foil-grad)"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="12" r="2" fill="url(#gold-foil-grad)" />
      <circle cx="220" cy="12" r="2" fill="url(#gold-foil-grad)" />
    </svg>
  </div>
);

/**
 * GOLDEN RIBBON BANNER BUTTON (ប៊ូតុងបន្ទះមាសក្បាច់ខ្មែរ)
 * Used in video for "ភ្ញៀវកិត្តិយសទាំងអស់", "កត់ត្រាថ្ងៃកម្មវិធី", "មើលទីតាំង", "ផ្ញើ"
 */
export const GoldenBannerButton = ({
  children,
  onClick,
  className = "",
  variant = "gold", // "gold" | "parchment"
  type = "button"
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-3 group cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 select-none ${className}`}
    >
      {/* Background Graphic SVG */}
      <svg
        viewBox="0 0 320 64"
        className="absolute inset-0 w-full h-full drop-shadow-[0_4px_12px_rgba(100,40,30,0.3)] pointer-events-none"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Banner Fill (Parchment Ivory with Gold Border) */}
        <path
          d="M20 8 H300 L316 32 L300 56 H20 L4 32 L20 8 Z"
          fill={variant === "gold" ? "url(#gold-sheen-grad)" : "#fffcf7"}
          stroke="url(#gold-foil-grad)"
          strokeWidth="2.5"
        />
        {/* Inner Gold Inset Line */}
        <path
          d="M24 14 H296 L308 32 L296 50 H24 L12 32 L24 14 Z"
          fill="none"
          stroke="url(#gold-foil-grad)"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.8"
        />
        {/* Left & Right Decorative Notch Beads */}
        <circle cx="16" cy="32" r="3" fill="#8c3a38" />
        <circle cx="304" cy="32" r="3" fill="#8c3a38" />
      </svg>

      {/* Button Content */}
      <span className="relative z-10 font-kantumruy font-bold text-sm md:text-base text-[#4a1b18] tracking-wide flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

/**
 * KBACH CHAN ORNATE DIVIDER (របាំងក្បាច់ផ្កាចន្ទន៍ខ្មែរ)
 */
export const OrnateDivider = ({ className = "w-full max-w-xs h-6 my-4" }) => (
  <svg
    viewBox="0 0 320 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10 14 H110 C120 14, 130 9, 138 5 C136 12, 130 18, 120 20 H110"
      stroke="url(#gold-foil-grad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="20" cy="14" r="2" fill="url(#sandstone-grad)" />
    <circle cx="65" cy="14" r="2" fill="url(#gold-foil-grad)" />

    <path
      d="M310 14 H210 C200 14, 190 9, 182 5 C184 12, 190 18, 200 20 H210"
      stroke="url(#gold-foil-grad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="300" cy="14" r="2" fill="url(#sandstone-grad)" />
    <circle cx="255" cy="14" r="2" fill="url(#gold-foil-grad)" />

    <g transform="translate(160, 14)">
      <path d="M0 -9 L3 -3 L9 0 L3 3 L0 9 L-3 3 L-9 0 L-3 -3 Z" fill="url(#gold-sheen-grad)" />
      <circle cx="0" cy="0" r="3.5" fill="#fffef5" stroke="url(#sandstone-grad)" strokeWidth="1" />
      <circle cx="0" cy="0" r="1.5" fill="#c57f62" />
    </g>

    <circle cx="142" cy="14" r="2.5" fill="url(#gold-foil-grad)" />
    <circle cx="178" cy="14" r="2.5" fill="url(#gold-foil-grad)" />
  </svg>
);

/**
 * TRADITIONAL CEREMONY ICONS
 */
export const CeremonyIcon = ({ type = "bowl", className = "w-6 h-6 text-[#9e6d15]" }) => {
  switch (type) {
    case "bowl":
      // Traditional Tiered Betel/Fruit Presentation Bowl (ជើងពានមង្គល)
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M4 12 C4 20 10 22 16 22 C22 22 28 20 28 12 H4 Z" fill="url(#gold-sheen-grad)" />
          <path d="M12 22 L10 28 H22 L20 22" stroke="url(#gold-foil-grad)" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 12 C7 8 16 5 16 5 C16 5 25 8 25 12" stroke="url(#gold-sheen-grad)" strokeWidth="2" />
          <circle cx="16" cy="5" r="2" fill="url(#gold-sheen-grad)" />
        </svg>
      );
    case "scissors":
      // Scissors & Comb for Hair-cutting ceremony (កន្ត្រៃ និងស្និត)
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <circle cx="9" cy="23" r="4" stroke="url(#gold-sheen-grad)" strokeWidth="2" />
          <circle cx="23" cy="23" r="4" stroke="url(#gold-sheen-grad)" strokeWidth="2" />
          <line x1="12" y1="20" x2="24" y2="7" stroke="url(#gold-sheen-grad)" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="20" x2="8" y2="7" stroke="url(#gold-sheen-grad)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "couple":
    case "knot":
      // Wedding Rings / Tying the Knot
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <circle cx="12" cy="16" r="7" stroke="url(#gold-sheen-grad)" strokeWidth="2.5" />
          <circle cx="20" cy="16" r="7" stroke="url(#gold-foil-grad)" strokeWidth="2.5" />
          <path d="M14 9 L18 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "food":
      // Feast cutlery
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M9 6 V15 C9 17 11 18 13 18 V26" stroke="url(#gold-sheen-grad)" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 6 V14" stroke="url(#gold-sheen-grad)" strokeWidth="1.5" />
          <path d="M21 6 C21 6 23 10 23 15 C23 17 21 18 19 18 V26" stroke="url(#gold-sheen-grad)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "champagne":
    default:
      // Clinking celebratory glasses
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M8 8 L14 16 V24 M11 24 H17" stroke="url(#gold-sheen-grad)" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 8 L18 16 V24 M15 24 H21" stroke="url(#gold-foil-grad)" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="8" x2="16" y2="8" stroke="url(#gold-sheen-grad)" strokeWidth="2" />
          <line x1="16" y1="8" x2="24" y2="8" stroke="url(#gold-foil-grad)" strokeWidth="2" />
        </svg>
      );
  }
};

/**
 * ANIMATED WHITE BUTTERFLY (មេអំបៅពណ៌សហោះក្នុងវិដេអូ)
 */
export const FloatingButterfly = ({ className = "", style = {} }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] pointer-events-none select-none ${className}`}
    style={{
      width: '26px',
      height: '26px',
      maxWidth: '26px',
      maxHeight: '26px',
      pointerEvents: 'none',
      ...style
    }}
    aria-hidden="true"
  >
    <path
      d="M20 18 C16 10, 7 6, 2 10 C-2 15, 3 24, 16 22 L20 18 Z"
      fill="#ffffff"
      fillOpacity="0.95"
    />
    <path
      d="M20 22 C15 24, 8 28, 7 33 C6 37, 12 38, 18 28 L20 22 Z"
      fill="#fff8f0"
      fillOpacity="0.9"
    />
    <path
      d="M20 18 C24 10, 33 6, 38 10 C42 15, 37 24, 24 22 L20 18 Z"
      fill="#ffffff"
      fillOpacity="0.95"
    />
    <path
      d="M20 22 C25 24, 32 28, 33 33 C34 37, 28 38, 22 28 L20 22 Z"
      fill="#fff8f0"
      fillOpacity="0.9"
    />
    <circle cx="20" cy="20" r="1.5" fill="#f5d382" />
  </svg>
);
