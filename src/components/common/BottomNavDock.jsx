// src/components/common/BottomNavDock.jsx
import React from 'react';
import { Calendar, MapPin, Image as ImageIcon, Gift } from 'lucide-react';

/**
 * FLOATING BOTTOM NAVIGATION DOCK (របារម៉ឺនុយអណ្តែតខាងក្រោម ដូចក្នុងវិដេអូ)
 * Features 4 sleek icons:
 * 1. Schedule (របៀបវារៈ)
 * 2. Location / Map (ទីតាំង)
 * 3. Photo Gallery (វិចិត្រសាល)
 * 4. Gift & RSVP (ចំណងដៃ & RSVP)
 */
export default function BottomNavDock({ activeSection = "schedule" }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'schedule', label: 'របៀបវារៈ', icon: Calendar },
    { id: 'venue', label: 'ទីតាំង', icon: MapPin },
    { id: 'gallery', label: 'វិចិត្រសាល', icon: ImageIcon },
    { id: 'gift', label: 'ចំណងដៃ', icon: Gift },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 select-none">
      <div className="bottom-dock flex items-center gap-2 px-3.5 py-2 rounded-full shadow-[0_8px_30px_rgba(80,25,20,0.25)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex flex-col items-center justify-center w-11 h-11 rounded-full text-[#6b2c22] hover:text-[#b8860b] hover:bg-[#fff5ee] active:scale-95 transition-all group"
              title={item.label}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5 stroke-[2] group-hover:scale-110 transition-transform text-[#9e6d15]" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

