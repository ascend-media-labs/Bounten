import React, { useState, useEffect } from 'react';
import { X, PhoneCall } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { openGeneralEnquiry } from '../utils/whatsapp';
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
    <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-50 flex items-end gap-3 pointer-events-none">
      {/* Interactive Tooltip Card with Smooth Spring Fade */}
      {showTooltip && (
        <div className="pointer-events-auto hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md text-slate-800 text-xs py-2.5 px-3.5 rounded-2xl shadow-2xl border border-slate-200/80 animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
            <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#081C3B]">Need hard water advice?</span>
            <span className="text-slate-500 text-[11px]">Call or WhatsApp: {COMPANY_CONFIG.displayWhatsApp}</span>
          </div>
          <button
            onClick={() => {
              setShowTooltip(false);
              setHasInteracted(true);
            }}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors ml-1 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Buttons: Phone Call on Top, WhatsApp on Bottom */}
      <div className="pointer-events-auto flex flex-col items-center gap-2.5 sm:gap-3">
        
        {/* 1. Phone Call Floating Button (Directly Above WhatsApp) */}
        <a
          href={`tel:${COMPANY_CONFIG.whatsappNumber}`}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#081C3B] hover:bg-[#0B2447] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-sky-300/60 cursor-pointer"
          aria-label="Call Bounten Support"
          title={`Call Bounten: ${COMPANY_CONFIG.displayWhatsApp}`}
        >
          {/* Subtle Ambient Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-sky-500 opacity-30 animate-water-pulse pointer-events-none"></span>

          {/* Phone Call Icon with gentle hover wiggle */}
          <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10 transform group-hover:rotate-12 transition-transform duration-300 drop-shadow-xs" />

          {/* Active Status Indicator Dot */}
          <span className="absolute top-1 right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-sky-400 border-2 border-white rounded-full shadow-xs animate-pulse"></span>

          {/* Desktop Hover Tooltip Pill */}
          <span className="hidden sm:group-hover:inline-block absolute right-full mr-3.5 bg-slate-900/95 backdrop-blur-md text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-xl pointer-events-none whitespace-nowrap">
            Call: {COMPANY_CONFIG.displayWhatsApp}
          </span>
        </a>

        {/* 2. Floating Circular WhatsApp Button (Below) */}
        <button
          onClick={() => {
            openGeneralEnquiry();
            setHasInteracted(true);
          }}
          onMouseEnter={() => setShowTooltip(true)}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-400 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300/60 cursor-pointer"
          aria-label="Contact Bounten on WhatsApp"
          title={`Chat on WhatsApp: ${COMPANY_CONFIG.displayWhatsApp}`}
        >
          {/* Outer Pulsing Water Radar Rings */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-water-pulse pointer-events-none"></span>
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-20 animate-ping pointer-events-none"></span>

          {/* Real Official WhatsApp Icon with hover wiggle */}
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white relative z-10 transform group-hover:rotate-12 transition-transform duration-300 drop-shadow-xs" />

          {/* Active Online Indicator Dot */}
          <span className="absolute top-1 right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-300 border-2 border-white rounded-full shadow-xs animate-pulse"></span>

          {/* Desktop Hover Tooltip Pill */}
          <span className="hidden sm:group-hover:inline-block absolute right-full mr-3.5 bg-slate-900/95 backdrop-blur-md text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-xl pointer-events-none whitespace-nowrap">
            WhatsApp: {COMPANY_CONFIG.displayWhatsApp}
          </span>
        </button>

      </div>
    </div>
  );
}
