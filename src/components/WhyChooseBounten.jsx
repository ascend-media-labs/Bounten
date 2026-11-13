import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function WhyChooseBounten() {
  const badges = [
    {
      id: 'salt',
      image: '/images/problems/badge_no_salt.png',
      alt: 'No Salt Required',
      label: 'Salt',
      isStacked: false,
    },
    {
      id: 'resin',
      image: '/images/problems/badge_no_resin.png',
      alt: 'No Resin Required',
      label: 'Resin',
      isStacked: false,
    },
    {
      id: 'backwash',
      image: '/images/problems/badge_no_backwash.png',
      alt: 'No Backwash Required',
      labelTop: 'Backwash',
      labelBottom: 'Required',
      isStacked: true,
    },
  ];

  return (
    <section id="about" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
      <AnimatedSection animation="fade-up" duration={700}>
        <div className="relative rounded-3xl bg-gradient-to-r from-[#00275c] via-[#004a94] to-[#006bb5] border border-sky-400/30 shadow-xl shadow-[#00275c]/25 overflow-hidden">
          
          {/* Bottom Water Wave Splash Effect - Silky Smooth Fade */}
          <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 md:h-28 pointer-events-none select-none overflow-hidden z-0">
            <img
              src="/images/problems/water_wave_faded_2x.png"
              alt="Water Wave"
              className="w-full h-full object-cover object-bottom opacity-90 mix-blend-screen"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center p-5 sm:p-6 lg:p-7 xl:p-8 gap-5 lg:gap-6">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-2.5 sm:space-y-3.5">
              
              {/* Header with Official BOUNTEN Logo & Title */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 flex-wrap sm:flex-nowrap">
                <img
                  src="/images/bounten_official_logo.png"
                  alt="BOUNTEN"
                  className="h-7 sm:h-9 md:h-10 w-auto object-contain flex-shrink-0"
                />
                <div className="hidden sm:block w-[1.5px] h-9 sm:h-10 bg-white/40 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-black tracking-tight leading-tight">
                  <span className="text-white block">Why Choose</span>
                  <span className="text-[#38bdf8] block">Bounten Water Softeners?</span>
                </h2>
              </div>

              {/* Cyan Accent Line */}
              <div className="w-12 h-1 bg-[#38bdf8] rounded-full"></div>

              {/* Descriptive Paragraphs */}
              <div className="space-y-3 pt-1 text-white/95 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed max-w-2xl">
                <p>
                  Powered by advanced electrolysis technology, Bounten helps combat hard-water scaling without salt, resin or added chemicals.
                </p>
                <p>
                  It helps protect pipes and appliances, reduce scale deposits, improve cleaning efficiency and support better hair and skin care.
                </p>
              </div>

            </div>

            {/* Right Badges Column (3 Circular Prohibitions) */}
            <div className="lg:col-span-6 xl:col-span-5 flex items-end justify-center lg:justify-end gap-3.5 sm:gap-5 md:gap-6 pb-2">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex flex-col items-center gap-2.5 sm:gap-3 group"
                >
                  {/* Circular Badge - Seamless Edge-to-Edge Fit (No bubble gap) */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full shadow-lg border-2 border-white overflow-hidden flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 bg-white">
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="w-full h-full object-cover select-none"
                      loading="lazy"
                    />
                  </div>

                  {/* NO Label Pill Badge */}
                  <div className="bg-white rounded-full px-3 sm:px-4 py-1 sm:py-1.5 shadow-md flex items-center gap-1.5 border border-slate-100 flex-shrink-0 transform group-hover:translate-y-[-2px] transition-transform">
                    <span className="bg-[#0070cc] text-white text-[10px] sm:text-xs font-black px-1.5 py-0.5 rounded-full tracking-wider flex-shrink-0">
                      NO
                    </span>
                    {badge.isStacked ? (
                      <div className="text-[#081C3B] font-extrabold text-[10px] sm:text-xs leading-tight text-left">
                        <div>{badge.labelTop}</div>
                        <div>{badge.labelBottom}</div>
                      </div>
                    ) : (
                      <span className="text-[#081C3B] font-extrabold text-xs sm:text-sm">
                        {badge.label}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </AnimatedSection>
    </section>
  );
}

