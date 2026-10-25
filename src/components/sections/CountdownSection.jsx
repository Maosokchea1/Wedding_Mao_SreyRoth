// src/components/sections/CountdownSection.jsx
import React, { useState, useEffect } from 'react';
import { OrnateDivider } from '../common/DecorativeSVG';
import { WEDDING_DATA } from '../../data/wedding';

/**
 * COUNTDOWN SECTION (រាប់ថយក្រោយ តាមវិដេអូ)
 * Features:
 * - Header "រង់ចាំទទួលស្វាគមន៍វត្តមានដ៏ខ្ពង់ខ្ពស់"
 * - Title "រាប់ថយក្រោយ"
 * - 4 rounded cream cards: Days, Hours, Minutes, Seconds with Khmer numbers
 * - Target wedding date footer
 */
export default function CountdownSection() {
  const { event } = WEDDING_DATA;

  // Convert English numbers to Khmer numerals
  const toKhmerNum = (num) => {
    const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    return String(num).padStart(2, '0').split('').map(d => khmerDigits[d] || d).join('');
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(event.isoDate || event.targetDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [event]);

  const units = [
    { label: 'ថ្ងៃ', value: timeLeft.days },
    { label: 'ម៉ោង', value: timeLeft.hours },
    { label: 'នាទី', value: timeLeft.minutes },
    { label: 'វិនាទី', value: timeLeft.seconds }
  ];

  return (
    <section id="countdown" className="relative py-12 px-4 md:px-8 select-none text-center">
      {/* Outer Card with subtle glow */}
      <div className="max-w-md mx-auto rounded-3xl p-6 border border-[#d4af37]/60 shadow-[0_10px_30px_rgba(90,30,20,0.18)] bg-gradient-to-b from-[#fffefc] to-[#fbf1ec]">
        
        {/* Header Text */}
        <p className="font-kantumruy text-xs md:text-sm text-[#7a3a2e] mb-1">
          រង់ចាំទទួលស្វាគមន៍វត្តមានដ៏ខ្ពង់ខ្ពស់
        </p>

        {/* Title */}
        <h2 className="font-moul text-xl md:text-2xl gold-foil-text mb-2">
          រាប់ថយក្រោយ
        </h2>

        <OrnateDivider className="w-36 mx-auto mb-6" />

        {/* 4 Rounded Cards */}
        <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6">
          {units.map((unit, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-[#d4af37]/50 shadow-[0_4px_12px_rgba(100,40,30,0.1)]"
            >
              <span className="font-moul text-lg md:text-2xl text-[#5c2317] tracking-wider">
                {toKhmerNum(unit.value)}
              </span>
              <span className="font-kantumruy text-[11px] md:text-xs text-[#7a3a2e] mt-1 font-semibold">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Target Wedding Date */}
        <p className="font-kantumruy font-bold text-xs md:text-sm text-[#5c2317]">
          {event.solarDateKm}
        </p>
      </div>
    </section>
  );
}
