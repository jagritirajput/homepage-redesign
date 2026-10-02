import React from 'react';
import { Star } from 'lucide-react';

export default function TrustTicker() {
  const platforms = [
    { name: 'Clutch', rating: '4.9/5', label: 'Top Digital Agency', color: '#FF3D2E' },
    { name: 'Trustpilot', rating: '4.8/5', label: 'Excellent Review', color: '#00B67A' },
    { name: 'GoodFirms', rating: '4.9/5', label: 'Top Performer', color: '#1B609A' },
    { name: 'DesignRush', rating: '5.0/5', label: 'Agency of Choice', color: '#00A3E0' },
    { name: 'Glassdoor', rating: '4.7/5', label: 'Top Work Culture', color: '#0CAA41' },
    { name: 'Google Reviews', rating: '4.9/5', label: '500+ Verified Reviews', color: '#4285F4' },
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <div className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-[#008BB9] font-bold">
          <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
          <span>Recognized & Highly Rated Across Leading Platforms</span>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="w-full overflow-hidden relative">
        {/* Left/Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-left flex items-center space-x-8 sm:space-x-12">
          {/* Double array for seamless loop */}
          {[...platforms, ...platforms].map((platform, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 px-5 py-2.5 rounded-lg bg-white border border-slate-200 shadow-sm hover:border-[#008BB9]/50 transition-all duration-200 shrink-0"
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: platform.color }}></div>
              <div>
                <div className="flex items-center space-x-1 font-bold text-slate-800 text-sm">
                  <span>{platform.name}</span>
                  <span className="text-xs text-[#D97706] flex items-center ml-1 font-semibold">
                    ★ {platform.rating}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-medium">{platform.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
