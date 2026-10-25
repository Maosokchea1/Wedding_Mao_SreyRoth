// src/components/envelope/AncientDoorScreen.jsx
import React, { useState, useEffect } from 'react';
import { KhmerGoldHeader, FloatingButterfly } from '../common/DecorativeSVG';
import { Play, ChevronDown } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';

/**
 * AUTHENTIC KHMER TEMPLE DOORS & CARVINGS (ក្បាច់ខ្មែរចម្លាក់សសរប្រាសាទ & ទ្វារឈើបុរាណ)
 * - Authentic ancient Angkor / Banteay Srei sandstone carved pillars (100% clean, zero watermark)
 * - Authentic antique carved wooden temple doors that slide open left & right
 * - Couple's real wedding photos
 * - Zero third-party audio
 */
export default function AncientDoorScreen({ onOpenComplete, onStartMusic }) {
  // Stages:
  // 0: Initial Cover screen with traditional photo & "បើកសំបុត្រ" button
  // 1: Carved wooden door appears with glowing lock (0.4s)
  // 2: Double doors sliding open (0.4s - 1.5s)
  // 3: Revealed card with floating butterflies
  // 4: Exiting / fading out to main invitation
  const [stage, setStage] = useState(0);

  const handleOpenClick = () => {
    if (stage > 0) return;

    // Start wedding music
    if (onStartMusic) {
      try {
        onStartMusic();
      } catch (e) {
        console.warn('Music play on open error:', e);
      }
    }

    // Step 1: Show carved wooden door
    setStage(1);

    // Step 2: Doors start sliding open after 400ms
    setTimeout(() => {
      setStage(2);
    }, 400);

    // Step 3: Card and butterflies visible
    setTimeout(() => {
      setStage(3);
    }, 1300);
  };

  const handleEnterMain = () => {
    if (stage === 4) return;
    setStage(4);
    setTimeout(() => {
      if (onOpenComplete) onOpenComplete();
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 600);
  };

  // Auto-transition to main site after 2.6 seconds on stage 3
  useEffect(() => {
    if (stage === 3) {
      const timer = setTimeout(() => {
        handleEnterMain();
      }, 2600);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  if (stage === 4) return null;

  return (
    <div
      onClick={stage === 0 ? handleOpenClick : (stage >= 2 ? handleEnterMain : undefined)}
      className={`fixed inset-0 z-40 flex items-center justify-center bg-[#180a06] overflow-hidden transition-all duration-700 select-none cursor-pointer ${
        stage === 4 ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Centered Mobile Container */}
      <div className="relative w-full max-w-[480px] h-full flex flex-col justify-between overflow-hidden shadow-2xl bg-[#180a06]">
        
        {/* Left Stone Temple Pillar (ក្បាច់ខ្មែរចម្លាក់សសរប្រាសាទ) */}
        <div
          className="absolute top-0 bottom-0 left-0 w-9 sm:w-12 md:w-14 z-40 pointer-events-none shadow-[4px_0_14px_rgba(0,0,0,0.65)]"
          style={{
            backgroundImage: `url('/theme-video/pillar_left.jpg')`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat-y'
          }}
        />

        {/* Right Stone Temple Pillar (ក្បាច់ខ្មែរចម្លាក់សសរប្រាសាទ - គ្មាន Watermark) */}
        <div
          className="absolute top-0 bottom-0 right-0 w-9 sm:w-12 md:w-14 z-40 pointer-events-none shadow-[-4px_0_14px_rgba(0,0,0,0.65)]"
          style={{
            backgroundImage: `url('/theme-video/pillar_right.jpg')`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat-y'
          }}
        />

        {/* STAGE 0: Initial Cover Screen */}
        <div
          className={`absolute inset-0 z-10 flex flex-col justify-between py-6 px-10 transition-opacity duration-700 ${
            stage >= 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Couple's Real Angkor Wat Photo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/couple-photos/photo1.jpg')`,
              filter: 'brightness(0.92)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

          {/* Top Golden Title */}
          <div className="relative z-10 pt-4">
            <KhmerGoldHeader text="សិរីសួស្តី អាពាហ៍ពិពាហ៍" />
          </div>

          {/* Bottom Call to Action Section */}
          <div className="relative z-10 flex flex-col items-center text-center pb-8 space-y-3">
            <p className="font-moul text-sm md:text-base text-[#fff9df] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              សូមគោរពអញ្ជើញ
            </p>

            {/* Golden Plaque: "ភ្ញៀវកិត្តិយសទាំងអស់" */}
            <div className="relative px-8 py-2">
              <svg
                viewBox="0 0 280 48"
                className="absolute inset-0 w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
                preserveAspectRatio="none"
              >
                <path
                  d="M16 6 H264 L276 24 L264 42 H16 L4 24 L16 6 Z"
                  fill="#fffdf9"
                  stroke="url(#gold-sheen-grad)"
                  strokeWidth="2"
                />
                <circle cx="12" cy="24" r="2.5" fill="#8c3a38" />
                <circle cx="268" cy="24" r="2.5" fill="#8c3a38" />
              </svg>
              <span className="relative z-10 font-kantumruy font-bold text-sm md:text-base text-[#5c2317]">
                ភ្ញៀវកិត្តិយសទាំងអស់
              </span>
            </div>

            {/* "បើកសំបុត្រ" (Open Invitation Button) */}
            <div className="mt-2 flex flex-col items-center group">
              <span className="font-kantumruy font-bold text-xs md:text-sm text-[#fffdf5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-1 group-hover:text-[#f7d877] transition-colors">
                បើកសំបុត្រ
              </span>
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#9e6d15] via-[#f7d877] to-[#deb849] p-0.5 shadow-[0_0_20px_rgba(247,216,119,0.8)] group-hover:scale-110 transition-transform">
                <span className="absolute -inset-1.5 rounded-full border border-[#f7d877]/80 animate-ping opacity-75" />
                <div className="w-full h-full rounded-full bg-[#3d1810] flex items-center justify-center">
                  <Play className="w-5 h-5 text-[#f7d877] fill-[#f7d877] ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STAGES 1 & 2: Authentic Carved Wooden Temple Doors (ក្បាច់ចម្លាក់ទ្វារឈើបុរាណ) */}
        {stage >= 1 && (
          <div className="absolute inset-0 z-20 overflow-hidden perspective-doors pointer-events-none">
            {/* Top Green Climbing Leaves Trim */}
            <div className="absolute top-0 left-0 right-0 h-12 z-30 pointer-events-none flex justify-between px-4 pt-1">
              <span className="text-2xl drop-shadow-md">🌿</span>
              <span className="text-xl drop-shadow-md">🍃</span>
              <span className="text-2xl drop-shadow-md">🌿</span>
            </div>

            {/* Left Door Leaf (ក្បាច់ឆ្លាក់ឈើបុរាណស្លាបឆ្វេង) */}
            <div
              className={`absolute top-0 bottom-0 left-0 w-1/2 z-20 bg-cover bg-right shadow-[10px_0_30px_rgba(0,0,0,0.85)] ${
                stage >= 2 ? 'door-open-left' : ''
              }`}
              style={{ backgroundImage: `url('/theme-video/door_left.jpg')` }}
            />

            {/* Right Door Leaf (ក្បាច់ឆ្លាក់ឈើបុរាណស្លាបស្តាំ) */}
            <div
              className={`absolute top-0 bottom-0 right-0 w-1/2 z-20 bg-cover bg-left shadow-[-10px_0_30px_rgba(0,0,0,0.85)] ${
                stage >= 2 ? 'door-open-right' : ''
              }`}
              style={{ backgroundImage: `url('/theme-video/door_right.jpg')` }}
            />

            {/* Center Golden Glowing Handle / Latch */}
            {stage === 1 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <div className="w-16 h-16 border-2 border-[#f7d877] rounded shadow-[0_0_25px_rgba(247,216,119,0.95)] animate-pulse" />
              </div>
            )}
          </div>
        )}

        {/* STAGE 3: Revealed Inner Wedding Card & Floating Butterflies */}
        <div
          className={`absolute inset-0 z-15 flex flex-col items-center justify-center p-4 text-center transition-all duration-1000 ${
            stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
          style={{
            backgroundColor: '#fbf1ec',
            backgroundImage: `radial-gradient(circle at 50% 50%, #fff7f2 0%, #fbf1ec 100%)`
          }}
        >
          {/* Floating White Butterflies */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
            <div className="absolute left-[18%] top-[70%] animate-flutter-1">
              <FloatingButterfly />
            </div>
            <div className="absolute right-[20%] top-[60%] animate-flutter-2">
              <FloatingButterfly />
            </div>
            <div className="absolute left-[42%] top-[80%] animate-flutter-3">
              <FloatingButterfly />
            </div>
          </div>

          {/* Inner Card Frame */}
          <div className="relative w-full max-w-[310px] rounded-2xl p-4 flex flex-col items-center border-2 border-[#d4af37]/80 shadow-[0_15px_40px_rgba(70,20,15,0.35)] bg-gradient-to-b from-[#fffefc] to-[#fbf1ec]">
            
            {/* Top Monogram Seal */}
            <div className="relative w-12 h-12 mb-1.5">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)]">
                <circle cx="50" cy="50" r="44" stroke="url(#gold-sheen-grad)" strokeWidth="3" fill="none" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="38" fill="#fffaf2" stroke="url(#gold-foil-grad)" strokeWidth="1.5" />
                <text
                  x="50"
                  y="62"
                  textAnchor="middle"
                  fontFamily="Moul"
                  fontSize="32"
                  fill="url(#gold-sheen-grad)"
                >
                  ៥
                </text>
              </svg>
            </div>

            {/* Couple's Romantic Real Photo */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border-2 border-[#d4af37] shadow-[0_8px_25px_rgba(212,175,55,0.45)]">
              <img
                src="/couple-photos/photo2.jpg"
                alt="Couple"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1 left-1 text-sm">🌿</span>
              <span className="absolute top-1 right-1 text-sm">🌿</span>
            </div>

            {/* Invitation Words Under Card */}
            <div className="mt-2.5 space-y-0.5">
              <p className="font-moul text-xs md:text-sm gold-foil-text">
                សូមអញ្ជើញចូលរួម
              </p>
              <p className="font-moul text-sm md:text-base text-[#5c2317]">
                អាពាហ៍ពិពាហ៍
              </p>
              <p className="font-kantumruy font-bold text-xs text-[#8c3a38]">
                ថ្ងៃរៀបការ | {WEDDING_DATA.groom.shortKhmer} & {WEDDING_DATA.bride.shortKhmer} | {WEDDING_DATA.event.dayKm}/០៣/២៦
              </p>
            </div>

            {/* Interactive "ចុចកន្លែងណាក៏បានដើម្បីចូល" Indicator */}
            <div className="mt-3 inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d877] to-[#d4af37] text-[#4a1b18] font-kantumruy font-bold text-xs shadow-md animate-bounce">
              <span>ចុចកន្លែងណាក៏បានដើម្បីចូល</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
