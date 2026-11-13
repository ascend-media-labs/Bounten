import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Home,
  Building2,
  Factory,
  Tractor,
  Waves,
  Utensils,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  PhoneCall,
  ChevronRight
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/solutions';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openSolutionEnquiry, openGeneralEnquiry } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../data/config';

export default function Solutions() {
  const location = useLocation();

  // Scroll to hash anchor if present (e.g. #residential)
  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const icons = {
    residential: Home,
    commercial: Building2,
    industrial: Factory,
    agriculture: Tractor,
    "swimming-pools": Waves,
    hospitality: Utensils
  };

  return (
    <div className="bg-slate-50 min-h-screen py-3 sm:py-5">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6 sm:space-y-7">
        
        {/* Page Breadcrumb & Quick Jump Navigation */}
        <div className="space-y-3">
          <nav className="flex items-center space-x-1.5 text-xs text-slate-500">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-800">Applications & Solutions</span>
          </nav>

          {/* Quick jump navigation pills with hover bounce */}
          <div className="flex flex-wrap items-center justify-start gap-1.5 sm:gap-2">
            {SOLUTIONS_DATA.map((sol) => (
              <a
                key={sol.id}
                href={`#${sol.id}`}
                className="bg-white hover:bg-sky-50 hover:text-sky-700 text-slate-700 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all border border-slate-200 shadow-xs hover:border-sky-300 hover:scale-105 active:scale-95"
              >
                {sol.title}
              </a>
            ))}
          </div>
        </div>

        {/* 2. Detailed Solutions Sections (6 Categories) */}
        <div className="space-y-4 sm:space-y-5">
        {SOLUTIONS_DATA.map((solution, index) => {
          const Icon = icons[solution.id] || Zap;
          const isReversed = index % 2 !== 0;
          const glowMap = {
            residential: 'glow-sky',
            commercial: 'glow-emerald',
            industrial: 'glow-amber',
            agriculture: 'glow-emerald',
            'swimming-pools': 'glow-cyan',
            hospitality: 'glow-purple'
          };

          return (
            <AnimatedSection key={solution.id} animation="fade-up" delay={index * 80} duration={700}>
              <section
                id={solution.id}
                className={`scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-slate-200/90 shadow-sm hover-lift ${glowMap[solution.id] || 'glow-sky'} transition-all duration-400 overflow-hidden`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-stretch ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Solution Image (5 cols) - Equal length/height matching text */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'} flex flex-col`}>
                    <div className="relative w-full h-full min-h-[240px] sm:min-h-[280px] lg:min-h-0 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 shadow-md group shine-sweep flex-1 flex flex-col">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out flex-1"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                      
                      {/* Badge */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-sky-500/90 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md z-10">
                        Category 0{index + 1}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white z-10">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </span>
                          <span className="font-bold text-xs sm:text-sm tracking-wide">{solution.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Solution Details (7 cols) - Equal length/height matching image */}
                  <div className={`lg:col-span-7 flex flex-col justify-between space-y-3 sm:space-y-3.5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-sky-600 uppercase tracking-wider">
                        <Icon className="w-3.5 h-3.5 animate-pulse" />
                        <span>{solution.title}</span>
                      </div>
                      <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#081C3B] leading-snug">
                        {solution.subtitle}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {solution.description}
                    </p>

                    {/* Benefits Grid */}
                    <div className="space-y-1.5 pt-1 border-t border-slate-100">
                      <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                        Key Engineering Benefits
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                        {solution.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700 leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Suitable Applications Pills */}
                    <div className="pt-1.5 border-t border-slate-100 space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Suitable Applications
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {solution.applications.map((app) => (
                          <span
                            key={app}
                            className="bg-slate-100 text-slate-700 text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg border border-slate-200 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button: Enquire Now with solution name */}
                    <div className="pt-2 sm:pt-2.5 flex flex-col sm:flex-row items-center gap-2.5">
                      <button
                        onClick={() => openSolutionEnquiry(solution.title)}
                        className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2 sm:py-2.5 px-4 sm:px-5 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white" />
                        <span>Enquire Now on WhatsApp</span>
                      </button>

                      <Link
                        to="/products"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl font-semibold text-xs transition-colors group"
                      >
                        <span>Explore Suitable Models</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>

                </div>
              </section>
            </AnimatedSection>
          );
        })}
      </div>

        {/* 3. Bottom Consultation Banner */}
        <section>
          <AnimatedSection animation="zoom" duration={700}>
            <div className="bg-gradient-to-r from-[#081C3B] via-slate-900 to-[#081C3B] text-white rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 hover-lift transition-all">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Custom Flow Calibration
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Need a custom high-flow skid up to 2,00,000 LPH?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Our engineering team designs bespoke SS 304 skid assemblies for industrial plants and large institutions.
                </p>
              </div>

              <button
                onClick={() => openSolutionEnquiry("Custom Industrial Skid / High Flow")}
                className="btn-press inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg flex-shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Consult Chief Engineer</span>
              </button>
            </div>
          </AnimatedSection>
        </section>

      </div>
    </div>
  );
}
