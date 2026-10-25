// src/App.js
import React, { useState } from 'react';
import { SvgGoldDefs } from './components/common/DecorativeSVG';
import AncientDoorScreen from './components/envelope/AncientDoorScreen';
import FormalInvitation from './components/sections/FormalInvitation';
import ProgrammeSection from './components/sections/ProgrammeSection';
import VenueSection from './components/sections/VenueSection';
import PhotoGallery from './components/sections/PhotoGallery';
import CountdownSection from './components/sections/CountdownSection';
import DigitalAngPao from './components/sections/DigitalAngPao';
import RsvpForm from './components/sections/RsvpForm';
import ThankYouSection from './components/sections/ThankYouSection';
import BottomNavDock from './components/common/BottomNavDock';
import { useBackgroundAudio } from './hooks/useBackgroundAudio';
import { Volume2, VolumeX } from 'lucide-react';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const { isPlaying, playAudio, toggleAudio } = useBackgroundAudio();

  const handleDoorOpened = () => {
    setIsOpened(true);
  };

  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <div className="min-h-screen bg-[#1c0b06] text-[#4a2118] flex justify-center selection:bg-[#d4af37]/30 selection:text-[#5c2317] overflow-x-hidden">
      {/* Universal Gold Foil Gradients & Specular SVG Filters */}
      <SvgGoldDefs />

      {/* Floating Audio Control Button */}
      <div className="fixed top-4 right-4 sm:right-auto sm:left-1/2 sm:translate-x-[185px] z-50">
        <button
          type="button"
          onClick={toggleAudio}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#d4af37] flex items-center justify-center text-[#9e6d15] hover:scale-110 active:scale-95 transition-all shadow-lg cursor-pointer"
          aria-label="Toggle audio"
          title={isPlaying ? "បិទសំឡេង" : "បើកសំឡេង"}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-[#9e6d15] animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>

      {/* 1. ANCIENT KHMER TEMPLE DOORS OPENING EXPERIENCE */}
      {!isOpened && (
        <AncientDoorScreen
          onOpenComplete={handleDoorOpened}
          onStartMusic={playAudio}
        />
      )}

      {/* 2. MAIN WEDDING INVITATION WEBSITE (Shown when door is opened) */}
      <div
        className={`relative w-full max-w-[480px] min-h-screen bg-[#fbf1ec] shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-opacity duration-1000 ${
          isOpened ? 'opacity-100' : 'opacity-0 pointer-events-none h-0 overflow-hidden'
        }`}
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 20%, #ffffff 0%, #fbf1ec 100%)`
        }}
      >
        {/* Left Stone Temple Pillar (ក្បាច់ខ្មែរចម្លាក់សសរប្រាសាទបុរាណ) */}
        <div
          className="fixed top-0 bottom-0 left-1/2 -translate-x-[240px] w-9 sm:w-12 md:w-14 z-30 pointer-events-none shadow-[4px_0_14px_rgba(0,0,0,0.45)] hidden sm:block"
          style={{
            backgroundImage: `url('${publicUrl}/theme-video/pillar_left.jpg')`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat-y'
          }}
        />
        {/* Mobile Left Pillar */}
        <div
          className="fixed top-0 bottom-0 left-0 w-8 z-30 pointer-events-none shadow-[4px_0_12px_rgba(0,0,0,0.45)] sm:hidden"
          style={{
            backgroundImage: `url('${publicUrl}/theme-video/pillar_left.jpg')`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat-y'
          }}
        />

        {/* Right Stone Temple Pillar (ក្បាច់ខ្មែរចម្លាក់សសរប្រាសាទបុរាណ - គ្មាន Watermark) */}
        <div
          className="fixed top-0 bottom-0 right-1/2 translate-x-[240px] w-9 sm:w-12 md:w-14 z-30 pointer-events-none shadow-[-4px_0_14px_rgba(0,0,0,0.45)] hidden sm:block"
          style={{
            backgroundImage: `url('${publicUrl}/theme-video/pillar_right.jpg')`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat-y'
          }}
        />
        {/* Mobile Right Pillar */}
        <div
          className="fixed top-0 bottom-0 right-0 w-8 z-30 pointer-events-none shadow-[-4px_0_12px_rgba(0,0,0,0.45)] sm:hidden"
          style={{
            backgroundImage: `url('${publicUrl}/theme-video/pillar_right.jpg')`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat-y'
          }}
        />

        {/* Main Content Area */}
        <main className="relative z-10 px-4 sm:px-6 pt-6 pb-20">
          {/* Section 1: Formal Invitation */}
          <FormalInvitation />

          {/* Section 2: Programme / Timeline */}
          <ProgrammeSection />

          {/* Section 3: Venue & Map */}
          <VenueSection />

          {/* Section 4: Photo Gallery */}
          <PhotoGallery />

          {/* Section 5: Countdown */}
          <CountdownSection />

          {/* Section 6: Digital Ang Pao / QR Code */}
          <DigitalAngPao />

          {/* Section 7: RSVP Form */}
          <RsvpForm />

          {/* Section 8: Footer */}
          <ThankYouSection />
        </main>

        {/* 3. Floating Bottom Navigation Dock */}
        <BottomNavDock />
      </div>
    </div>
  );
}
