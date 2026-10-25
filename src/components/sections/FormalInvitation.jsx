// src/components/sections/FormalInvitation.jsx
import React from 'react';
import { KhmerGoldHeader, GoldenBannerButton } from '../common/DecorativeSVG';
import { WEDDING_DATA } from '../../data/wedding';

/**
 * FORMAL INVITATION SECTION (លិខិតអញ្ជើញជាផ្លូវការ តាមវិដេអូ)
 * Features:
 * - Golden header "សិរីសួស្តី អាពាហ៍ពិពាហ៍"
 * - 2-column parents' names
 * - Ceremonial invitation statement
 * - Center golden monogram crest
 * - Groom & Bride names
 * - Khmer lunar & solar wedding date
 * - Ornate "កត់ត្រាថ្ងៃកម្មវិធី" calendar button
 */
export default function FormalInvitation() {
  const { groom, bride, event, venue } = WEDDING_DATA;

  const handleAddToCalendar = () => {
    // Generate Google Calendar link
    const title = encodeURIComponent(`មង្គលការ ${groom.khmerName} & ${bride.khmerName}`);
    const details = encodeURIComponent(`សូមគោរពអញ្ជើញចូលរួមពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ នៅ ${venue.nameKhmer} - ${venue.addressKhmer}`);
    const location = encodeURIComponent(venue.addressKhmer);
    // 2026-03-11T06:00:00 to 2026-03-11T21:00:00 (Cambodia time +07 = UTC 20260310T230000Z)
    const dates = "20260310T230000Z/20260311T140000Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="invitation" className="relative py-10 px-4 md:px-8 text-center select-none">
      {/* Top Royal Calligraphy Header */}
      <KhmerGoldHeader text="សិរីសួស្តី អាពាហ៍ពិពាហ៍" className="mb-6" />

      {/* Parents' Names Grid (2 Columns) */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6 text-xs md:text-sm">
        {/* Groom's Parents */}
        <div className="space-y-1 text-[#5c2317]">
          <p className="font-kantumruy font-bold">{groom.parents.father}</p>
          <p className="font-kantumruy font-bold">{groom.parents.mother}</p>
        </div>

        {/* Bride's Parents */}
        <div className="space-y-1 text-[#5c2317]">
          <p className="font-kantumruy font-bold">{bride.parents.father}</p>
          <p className="font-kantumruy font-bold">{bride.parents.mother}</p>
        </div>
      </div>

      {/* Formal Royal Khmer Invitation Blessing Text */}
      <div className="max-w-md mx-auto space-y-3 mb-6 px-2">
        <p className="font-moul text-sm md:text-base gold-foil-text">
          យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ
        </p>
        <p className="font-kantumruy text-xs md:text-sm text-[#4a2118] leading-relaxed text-justify md:text-center">
          សម្តេច ទ្រង់ ឯកឧត្តម លោកអ្នកឧកញ៉ា អ្នកឧកញ៉ា ឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និងប្រិយមិត្ត សព្វកាលទាំងអស់ ចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្តី ជ័យមង្គល ក្នុងពិធីសិរីសួស្តីអាពាហ៍ពិពាហ៍កូនប្រុស កូនស្រីរបស់យើងខ្ញុំ
        </p>
      </div>

      {/* Center Golden Monogram Seal */}
      <div className="relative w-20 h-20 mx-auto my-6">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_12px_rgba(212,175,55,0.6)]">
          <circle cx="50" cy="50" r="46" stroke="url(#gold-sheen-grad)" strokeWidth="3" fill="none" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="40" fill="#fffdf9" stroke="url(#gold-foil-grad)" strokeWidth="1.8" />
          <text
            x="50"
            y="63"
            textAnchor="middle"
            fontFamily="Moul"
            fontSize="36"
            fill="url(#gold-sheen-grad)"
          >
            ៥
          </text>
        </svg>
      </div>

      {/* Groom & Bride Names (2 Columns) */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
        {/* Groom */}
        <div className="space-y-1">
          <p className="font-kantumruy text-xs text-[#7a3a2e]">កូនប្រុសនាម</p>
          <p className="font-moul text-base md:text-lg gold-foil-text">{groom.khmerName}</p>
        </div>

        {/* Bride */}
        <div className="space-y-1">
          <p className="font-kantumruy text-xs text-[#7a3a2e]">កូនស្រីនាម</p>
          <p className="font-moul text-base md:text-lg gold-foil-text">{bride.khmerName}</p>
        </div>
      </div>

      {/* Event Date & Location Description */}
      <div className="max-w-md mx-auto mb-6 px-2 space-y-2">
        <p className="font-kantumruy text-xs md:text-sm text-[#4a2118] leading-relaxed">
          ដែលនឹងប្រព្រឹត្តទៅនៅ {event.dayNameKm} {event.lunarDateKm} {event.solarDateKm} {event.timeKm} នៅ{venue.nameKhmer} ស្ថិតនៅ {venue.addressKhmer} ដោយមេត្រីភាព។
        </p>
        <p className="font-moul text-xs md:text-sm text-[#7a3a2e]">
          សូមអរគុណ!
        </p>
      </div>

      {/* Ornate Add to Calendar Button */}
      <div className="mt-4">
        <GoldenBannerButton onClick={handleAddToCalendar} variant="gold">
          <span>កត់ត្រាថ្ងៃកម្មវិធី</span>
          <span className="text-sm">📅</span>
        </GoldenBannerButton>
      </div>
    </section>
  );
}
