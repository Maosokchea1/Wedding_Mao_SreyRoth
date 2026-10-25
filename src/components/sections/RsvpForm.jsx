// src/components/sections/RsvpForm.jsx
import React, { useState } from 'react';
import { GoldenBannerButton, OrnateDivider } from '../common/DecorativeSVG';
import { Heart, Users, MessageSquare, Plus, Minus, CheckCircle } from 'lucide-react';

/**
 * RSVP FORM SECTION (សូមបញ្ជាក់ការចូលរួម តាមវិដេអូ 00:56)
 * Features:
 * - Title "សូមបញ្ជាក់ការចូលរួម"
 * - Attendance status dropdown ("បាទ/ចាស នឹងចូលរួម")
 * - Guest count stepper [- 1 +]
 * - Guest wishes textarea
 * - Ornate "ផ្ញើ" banner button
 * - Thank you note
 */
export default function RsvpForm() {
  const [attending, setAttending] = useState('yes');
  const [guestCount, setGuestCount] = useState(1);
  const [wishes, setWishes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleDecrement = () => {
    if (guestCount > 1) setGuestCount(prev => prev - 1);
  };

  const handleIncrement = () => {
    if (guestCount < 10) setGuestCount(prev => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setWishes('');
    }, 4000);
  };

  return (
    <section id="rsvp" className="relative py-12 px-4 md:px-8 select-none">
      <div className="max-w-md mx-auto text-center">
        {/* Title */}
        <h2 className="font-moul text-xl md:text-2xl gold-foil-text mb-2">
          សូមបញ្ជាក់ការចូលរួម
        </h2>
        <OrnateDivider className="w-40 mx-auto mb-6" />

        {/* Card Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl p-6 bg-white/95 border border-[#d4af37]/60 shadow-[0_10px_30px_rgba(90,30,20,0.15)] text-left space-y-4"
        >
          {/* Field 1: Attendance */}
          <div>
            <label className="flex items-center gap-2 font-kantumruy font-bold text-xs text-[#5c2317] mb-1.5">
              <Heart className="w-4 h-4 text-[#8c3a38]" />
              <span>នឹងចូលរួម</span>
            </label>
            <select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#d4af37]/60 bg-[#fffdfa] font-kantumruy text-xs md:text-sm text-[#4a2118] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            >
              <option value="yes">បាទ/ចាស នឹងចូលរួម</option>
              <option value="no">សោកស្តាយ មិនអាចចូលរួមបាន</option>
            </select>
          </div>

          {/* Field 2: Guest Count Stepper */}
          {attending === 'yes' && (
            <div>
              <label className="flex items-center gap-2 font-kantumruy font-bold text-xs text-[#5c2317] mb-1.5">
                <Users className="w-4 h-4 text-[#8c3a38]" />
                <span>ចំនួនភ្ញៀវ</span>
              </label>
              <div className="flex items-center justify-between px-4 py-2 rounded-xl border border-[#d4af37]/60 bg-[#fffdfa]">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="w-8 h-8 rounded-full border border-[#d4af37]/60 flex items-center justify-center text-[#5c2317] hover:bg-[#d4af37] hover:text-white transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1.5 font-moul text-base text-[#4a2118]">
                  <span>{guestCount}</span>
                  <span className="font-kantumruy text-xs text-[#7a3a2e] font-normal">នាក់</span>
                </div>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="w-8 h-8 rounded-full border border-[#d4af37]/60 flex items-center justify-center text-[#5c2317] hover:bg-[#d4af37] hover:text-white transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Field 3: Guest Wishes */}
          <div>
            <label className="flex items-center gap-2 font-kantumruy font-bold text-xs text-[#5c2317] mb-1.5">
              <MessageSquare className="w-4 h-4 text-[#8c3a38]" />
              <span>សារជូនពរ</span>
            </label>
            <textarea
              rows="3"
              value={wishes}
              onChange={(e) => setWishes(e.target.value)}
              placeholder="សូមសរសេរសារជូនពររបស់អ្នកនៅទីនេះ..."
              className="w-full px-4 py-2.5 rounded-xl border border-[#d4af37]/60 bg-[#fffdfa] font-kantumruy text-xs md:text-sm text-[#4a2118] placeholder-[#7a3a2e]/50 focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 text-center">
            {submitted ? (
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-green-50 text-green-700 text-xs font-kantumruy font-bold border border-green-200">
                <CheckCircle className="w-4 h-4" />
                <span>បានផ្ញើសារជូនពរដោយជោគជ័យ! សូមអរគុណ</span>
              </div>
            ) : (
              <GoldenBannerButton type="submit" variant="gold" className="w-full max-w-[200px]">
                <span>ផ្ញើ</span>
                <span className="text-xs">💌</span>
              </GoldenBannerButton>
            )}
          </div>
        </form>

        {/* Thank You Note */}
        <p className="mt-4 font-kantumruy text-xs text-[#7a3a2e] leading-relaxed">
          វត្តមានរបស់លោកអ្នកជាកិត្តិយសដ៏ខ្ពង់ខ្ពស់បំផុតសម្រាប់យើងខ្ញុំ។
        </p>
      </div>
    </section>
  );
}

