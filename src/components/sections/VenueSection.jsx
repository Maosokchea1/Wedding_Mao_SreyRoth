// src/components/sections/VenueSection.jsx
import React from 'react';
import { GoldenBannerButton, OrnateDivider } from '../common/DecorativeSVG';
import { MapPin, ExternalLink } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';

/**
 * VENUE & MAP SECTION (ទីតាំងកម្មវិធី តាមវិដេអូ)
 * Features:
 * - Title "ទីតាំងកម្មវិធី"
 * - Subtitle "ពិធីមង្គលការ និង ពិសារភោជនាហារ"
 * - Detailed Khmer address
 * - Embedded Google Map
 * - Ornate "មើលទីតាំង" button
 */
export default function VenueSection() {
  const { venue } = WEDDING_DATA;

  const handleOpenMap = () => {
    window.open(venue.googleMapsUrl, '_blank');
  };

  return (
    <section id="venue" className="relative py-12 px-4 md:px-8 text-center select-none">
      {/* Title */}
      <h2 className="font-moul text-xl md:text-2xl gold-foil-text mb-1">
        ទីតាំងកម្មវិធី
      </h2>
      <p className="font-moul text-xs md:text-sm text-[#5c2317] mb-2">
        {venue.titleKhmer}
      </p>

      {/* Address */}
      <div className="max-w-md mx-auto mb-4 px-3 flex items-center justify-center gap-1.5 text-xs md:text-sm text-[#4a2118]">
        <MapPin className="w-4 h-4 text-[#8c3a38] shrink-0" />
        <span className="font-kantumruy">{venue.addressKhmer}</span>
      </div>

      <OrnateDivider className="w-44 mx-auto mb-6" />

      {/* Embedded Map Card */}
      <div className="max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-[0_8px_25px_rgba(90,30,20,0.25)] bg-[#fffdfa] p-1.5">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
          <iframe
            title="Wedding Venue Location Map"
            src={venue.googleMapsEmbed}
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Ornate "មើលទីតាំង" Button */}
      <div className="mt-5">
        <GoldenBannerButton onClick={handleOpenMap} variant="gold">
          <span>មើលទីតាំង</span>
          <ExternalLink className="w-4 h-4 ml-1" />
        </GoldenBannerButton>
      </div>
    </section>
  );
}
