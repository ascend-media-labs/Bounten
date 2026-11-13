import React from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

// Custom faceted mineral crystals SVG icon matching the reference design
function MineralCrystalsIcon({ className = "w-6 h-6 text-[#0070cc]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Central prominent crystal shard */}
      <polygon points="12,2 15,8 12,21 9,8" />
      <line x1="12" y1="2" x2="12" y2="21" />
      {/* Left crystal shard */}
      <polygon points="6,9 9,13 6,21 3,14" />
      <line x1="6" y1="9" x2="6" y2="21" />
      {/* Right crystal shard */}
      <polygon points="18,9 21,14 18,21 15,13" />
      <line x1="18" y1="9" x2="18" y2="21" />
    </svg>
  );
}

export default function WhyWaterSoftenerRequired() {
  return (
    <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
      <AnimatedSection animation="fade-up" duration={700}>
        <div className="relative rounded-3xl bg-gradient-to-r from-white via-sky-50/60 to-[#eaf5fc] border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Content Area (Editable Text & Icons) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between space-y-6 sm:space-y-7 relative z-10">
              
              {/* Header with TYENT INDIA Logo & Title */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <img
                  src="/images/problems/tyent_logo_2x.png"
                  alt="TYENT India"
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain flex-shrink-0"
                />
                <div className="hidden sm:block w-[1.5px] h-10 sm:h-12 bg-slate-300 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-black text-[#081C3B] tracking-tight leading-snug">
                  Why is a <span className="text-[#0070cc]">Water Softener</span> Required..?
                </h2>
              </div>

              {/* Core Feature Bullet Points */}
              <div className="space-y-4 sm:space-y-5 pt-1">
                {/* Point 1: Mineral reduction */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e1f2fc] text-[#0070cc] flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                    <MineralCrystalsIcon className="w-6 h-6 text-[#0070cc]" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-[15px] text-slate-700 leading-relaxed font-normal">
                    A water softener reduces hardness-causing minerals like calcium and magnesium, preventing scale build-up in pipes, taps and appliances.
                  </p>
                </div>

                {/* Point 2: Protection of plumbing & surfaces */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e1f2fc] text-[#0070cc] flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                    <ShieldCheck className="w-6 h-6 text-[#0070cc]" strokeWidth={2} />
                  </div>
                  <p className="text-xs sm:text-sm md:text-[15px] text-slate-700 leading-relaxed font-normal">
                    It helps protect plumbing, improve cleaning efficiency and keep surfaces free from hard-water deposits.
                  </p>
                </div>
              </div>

              {/* Bottom Warning Alert Box (Salt / Resin / Chemicals) */}
              <div className="pt-1">
                <div className="inline-flex items-center gap-3 sm:gap-3.5 bg-[#ffeceb] border border-[#fecaca]/80 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-2xs max-w-full">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-[#dc2626] flex-shrink-0" strokeWidth={2.2} />
                  <span className="text-[#991b1b] font-bold text-xs sm:text-sm md:text-[15px] leading-snug">
                    But conventional water softeners use Salt / Resin / Chemicals.
                  </span>
                </div>
              </div>

            </div>

            {/* Right Photo Area (Showerhead Limescale & Crystal Macro Zoom) */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[420px] overflow-hidden bg-slate-100">
              <img
                src="/images/problems/shower_scale_macro.jpg"
                alt="Hard water limescale build-up on shower head with microscopic calcium crystal view"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Desktop Curved Swoosh Divider Edge with Blue Accent */}
              <div className="hidden lg:block absolute inset-y-0 -left-1 w-20 xl:w-24 pointer-events-none">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="w-full h-full text-[#eaf5fc] fill-current"
                >
                  <path d="M0,0 L85,0 C55,30 20,70 0,100 L0,0 Z" />
                  <path
                    d="M85,0 C55,30 20,70 0,100"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="3.5"
                    className="opacity-90"
                  />
                </svg>
              </div>
            </div>

          </div>

        </div>
      </AnimatedSection>
    </section>
  );
}

