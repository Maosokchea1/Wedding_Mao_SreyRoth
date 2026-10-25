// src/components/sections/ProgrammeSection.jsx
import React from 'react';
import { CeremonyIcon, OrnateDivider } from '../common/DecorativeSVG';
import { WEDDING_DATA } from '../../data/wedding';

/**
 * WEDDING PROGRAMME / SCHEDULE TIMELINE (របៀបវារៈកម្មវិធី តាមវិដេអូ)
 * Features:
 * - Center vertical golden timeline
 * - Alternating left & right ceremony items
 * - Traditional Khmer ceremony icons
 * - Full date & lunar calendar subheader
 */
export default function ProgrammeSection() {
  const { programme, event } = WEDDING_DATA;

  return (
    <section id="schedule" className="relative py-12 px-4 md:px-8 select-none">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="font-moul text-xl md:text-2xl gold-foil-text mb-2">
          របៀបវារៈកម្មវិធី
        </h2>
        <p className="font-kantumruy text-xs md:text-sm text-[#7a3a2e] max-w-sm mx-auto leading-relaxed">
          {event.dayNameKm} {event.lunarDateKm}
        </p>
        <p className="font-kantumruy font-bold text-xs md:text-sm text-[#5c2317]">
          {event.solarDateKm}
        </p>
        <OrnateDivider className="w-48 mx-auto mt-2" />
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-md mx-auto">
        {/* Center Vertical Golden Line */}
        <div className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#d4af37]/20 via-[#d4af37] to-[#d4af37]/20 pointer-events-none" />

        {/* Ceremony Items */}
        <div className="space-y-6">
          {programme.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center ${
                  isLeft ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Box (takes roughly 44% of width) */}
                <div
                  className={`w-[44%] ${
                    isLeft ? 'text-right pr-3' : 'text-left pl-3'
                  }`}
                >
                  <p className="font-kantumruy font-bold text-xs md:text-sm text-[#8c3a38]">
                    {item.time}
                  </p>
                  <p className="font-kantumruy font-semibold text-xs text-[#4a2118] leading-snug">
                    {item.titleKm}
                  </p>
                  {item.descKm && (
                    <p className="font-kantumruy text-[10px] md:text-xs text-[#7a3a2e]/80 mt-0.5">
                      {item.descKm}
                    </p>
                  )}
                </div>

                {/* Center Node with Traditional Icon (takes roughly 12% of width) */}
                <div className="w-[12%] flex justify-center z-10">
                  <div className="w-8 h-8 rounded-full bg-[#fffaf5] border-2 border-[#d4af37] flex items-center justify-center shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
                    <CeremonyIcon type={item.icon} className="w-4 h-4 text-[#9e6d15]" />
                  </div>
                </div>

                {/* Empty opposite space to balance the 50/50 split */}
                <div className="w-[44%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
