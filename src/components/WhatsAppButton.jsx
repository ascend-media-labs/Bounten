import React, { useState, useEffect } from 'react';
import { X, PhoneCall } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-show tooltip briefly after 4 seconds to catch eye, then stay quiet
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interactive Tooltip Card with Smooth Spring Fade */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md text-slate-800 text-xs py-3 px-4 rounded-2xl shadow-2xl border border-slate-200/80 animate-in fade-in slide-in-from-right-4 duration-300">
          <a
            href="tel:+919542666644"
            className="flex items-center gap-3 group text-left"
            onClick={() => setHasInteracted(true)}
          >
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600 group-hover:bg-emerald-200 transition-colors">
              <PhoneCall className="w-4 h-4 text-emerald-600" strokeWidth={2.2} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#081C3B] group-hover:text-emerald-700 transition-colors">Need hard water advice?</span>
              <span className="text-slate-500 text-[11px]">Call: {COMPANY_CONFIG.displayWhatsApp}</span>
            </div>
          </a>
          <button
            onClick={() => {
              setShowTooltip(false);
              setHasInteracted(true);
            }}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Circular Phone Call Button with Fluid Radar Wave */}
      <a
        href="tel:+919542666644"
        onClick={() => setHasInteracted(true)}
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-400 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300/60"
        aria-label="Call Bounten Helpline"
        title={`Call Bounten: ${COMPANY_CONFIG.displayWhatsApp}`}
      >
        {/* Outer Pulsing Water Radar Rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-35 animate-water-pulse pointer-events-none"></span>
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-20 animate-ping pointer-events-none"></span>

        {/* Real Phone Call Icon with hover wiggle */}
        <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-xs" strokeWidth={2.4} />

        {/* Active Online Indicator Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full shadow-xs animate-pulse"></span>
      </a>
    </div>
  );
}
