// src/components/sections/PhotoGallery.jsx
import React, { useState } from 'react';
import { OrnateDivider } from '../common/DecorativeSVG';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';

/**
 * PHOTO GALLERY & LIGHTBOX SECTION (វិចិត្រសាល តាមវិដេអូ)
 * Features:
 * - Title "វិចិត្រសាល"
 * - Featured top portrait photo with arched golden border
 * - 2-column thumbnail grid
 * - Interactive Lightbox modal with:
 *   - Close button (X)
 *   - Prev / Next navigation arrows
 *   - Photo index indicator "1 / 12"
 */
export default function PhotoGallery() {
  const { gallery } = WEDDING_DATA;
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);

  const openLightbox = (index) => {
    setActivePhotoIdx(index);
  };

  const closeLightbox = () => {
    setActivePhotoIdx(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev + 1) % gallery.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section id="gallery" className="relative py-12 px-4 md:px-8 select-none">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="font-moul text-xl md:text-2xl gold-foil-text mb-1">
          វិចិត្រសាល
        </h2>
        <OrnateDivider className="w-44 mx-auto" />
      </div>

      <div className="max-w-md mx-auto space-y-4">
        {/* Featured Main Photo (Top Arched Frame) */}
        {gallery.length > 0 && (
          <div
            onClick={() => openLightbox(0)}
            className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#d4af37] shadow-[0_10px_30px_rgba(90,30,20,0.3)] cursor-pointer group bg-[#fbf1ec]"
          >
            <img
              src={gallery[0].url}
              alt={gallery[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Corner Decorative Vines */}
            <span className="absolute top-2 left-2 text-base">🌿</span>
            <span className="absolute top-2 right-2 text-base">🌿</span>
          </div>
        )}

        {/* 2-Column Grid for Remaining Photos */}
        <div className="grid grid-cols-2 gap-3">
          {gallery.slice(1).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx + 1)}
              className="relative aspect-square rounded-2xl overflow-hidden border border-[#d4af37]/60 shadow-[0_4px_14px_rgba(90,30,20,0.2)] cursor-pointer group bg-[#fbf1ec]"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL (ដូចក្នុងវិដេអូ 00:36) */}
      {activePhotoIdx !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
        >
          {/* Close Button (X) */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white hover:bg-white/40 transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation: Prev Arrow */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white hover:bg-white/40 transition-colors z-20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation: Next Arrow */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white hover:bg-white/40 transition-colors z-20"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-sm md:max-w-md max-h-[80vh] flex flex-col items-center"
          >
            <img
              src={gallery[activePhotoIdx].url}
              alt={gallery[activePhotoIdx].title}
              className="max-w-full max-h-[72vh] object-contain rounded-2xl border-2 border-[#d4af37]/80 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
            />

            {/* Photo Counter (e.g. "1 / 12") */}
            <p className="mt-3 font-cormorant text-base md:text-lg text-white/90 tracking-widest font-semibold">
              {activePhotoIdx + 1} / {gallery.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
