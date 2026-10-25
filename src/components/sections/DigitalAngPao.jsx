// src/components/sections/DigitalAngPao.jsx
import React, { useState } from 'react';
import { Gift, Copy, Check } from 'lucide-react';
import { OrnateDivider } from '../common/DecorativeSVG';
import { WEDDING_DATA } from '../../data/wedding';

/**
 * DIGITAL GIFTS / QR CODE SECTION (ចំណងដៃតាម QR Code តាមវិដេអូ 00:53)
 * Features:
 * - Title "QR Code"
 * - Golden gift box icon
 * - Blessing note
 * - Side-by-side ABA' QR and ACLEDA Bank cards
 * - Copy account number interaction
 */
export default function DigitalAngPao() {
  const { gifts } = WEDDING_DATA;
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (accNumber, idx) => {
    navigator.clipboard.writeText(accNumber.replace(/[\s-]/g, ''));
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2500);
  };

  return (
    <section id="gift" className="relative py-12 px-4 md:px-8 text-center select-none">
      {/* Title */}
      <h2 className="font-moul text-xl md:text-2xl gold-foil-text mb-2">
        QR Code
      </h2>

      {/* Gift Icon */}
      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#fff5eb] border border-[#d4af37] flex items-center justify-center shadow-[0_4px_12px_rgba(212,175,55,0.35)]">
        <Gift className="w-6 h-6 text-[#9e6d15]" />
      </div>

      {/* Blessing Note */}
      <p className="font-kantumruy text-xs md:text-sm text-[#5c2317] max-w-sm mx-auto leading-relaxed mb-1">
        លោកអ្នកក៏អាចធ្វើចំណងដៃតាមរយៈគណនី QR code របស់យើងខ្ញុំ ដើម្បីជូនពរជ័យជូនពួកយើង។
      </p>

      <OrnateDivider className="w-40 mx-auto mb-6" />

      {/* QR Codes Grid */}
      <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {gifts.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-3 rounded-2xl bg-white border border-[#d4af37]/60 shadow-[0_6px_20px_rgba(90,30,20,0.15)] group"
          >
            {/* Bank Name */}
            <p className="font-kantumruy font-bold text-xs text-[#5c2317] mb-2">
              {item.bankName}
            </p>

            {/* QR Code Image */}
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden border border-gray-100 shadow-sm mb-3 bg-[#fdfaf7] flex items-center justify-center p-1">
              <img
                src={item.qrCodeImage}
                alt={item.bankName}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Account Owner Name */}
            <p className="font-kantumruy font-bold text-xs text-[#4a2118] uppercase tracking-wide">
              {item.accountName}
            </p>
            <p className="font-cormorant text-xs text-[#7a3a2e] mb-2 font-medium">
              {item.accountNumber}
            </p>

            {/* Copy Button */}
            <button
              onClick={() => handleCopy(item.accountNumber, idx)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-kantumruy font-semibold bg-[#fbf1ec] text-[#5c2317] border border-[#d4af37]/50 hover:bg-[#d4af37] hover:text-white transition-colors"
            >
              {copiedIdx === idx ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span>ចម្លងរួចរាល់</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>ចម្លងលេខគណនី</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
