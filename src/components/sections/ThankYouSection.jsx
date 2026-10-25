// src/components/sections/ThankYouSection.jsx
import React from 'react';
import { FanCrest } from '../common/DecorativeSVG';

/**
 * FOOTER & CREDITS SECTION (បង្កើតដោយ តាមវិដេអូ 00:59)
 */
export default function ThankYouSection() {
  return (
    <footer className="relative py-12 px-4 pb-24 text-center select-none">
      <div className="max-w-md mx-auto flex flex-col items-center space-y-2">
        <p className="font-kantumruy text-xs text-[#7a3a2e]">
          បង្កើតដោយ
        </p>

        {/* Khmer Royal Emblem */}
        <div className="my-1">
          <FanCrest className="w-16 h-10 text-[#d4af37]" />
        </div>

        <p className="font-moul text-sm md:text-base gold-foil-text">
          លិខិតអញ្ជើញអាពាហ៍ពិពាហ៍ឌីជីថល
        </p>

        <p className="font-kantumruy text-[11px] text-[#7a3a2e]/70 max-w-xs leading-relaxed">
          សូមគោរពអរគុណយ៉ាងជ្រាលជ្រៅចំពោះវត្តមានដ៏ឧត្តុង្គឧត្តម និងការប្រសិទ្ធពរជ័យរបស់សម្តេច ទ្រង់ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី និងប្រិយមិត្តទាំងអស់។
        </p>
      </div>
    </footer>
  );
}
