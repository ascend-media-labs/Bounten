import React, { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { openGeneralEnquiry } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../data/config';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-medium py-2.5 px-3.5 rounded-xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-right-3 duration-200">
          <div className="flex flex-col">
            <span className="font-semibold text-slate-900">Need hard water advice?</span>
            <span className="text-slate-500">Chat directly on WhatsApp ({COMPANY_CONFIG.displayWhatsApp})</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-1"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Circular WhatsApp Button */}
      <button
        onClick={openGeneralEnquiry}
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-300 active:scale-95"
        aria-label="Contact Bounten on WhatsApp"
        title="Chat with Bounten on WhatsApp"
      >
        {/* Subtle pulsing background glow ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:opacity-0 transition-opacity"></span>

        {/* Real Official WhatsApp Icon */}
        <WhatsAppIcon className="w-7 h-7 fill-white relative z-10" />

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full"></span>
      </button>
    </div>
  );
}

