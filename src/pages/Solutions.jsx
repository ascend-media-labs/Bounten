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
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  PhoneCall
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/solutions';
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
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-16 space-y-16">
      
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Engineered Across All Flow Rates
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#081C3B] tracking-tight">
            Tailored Water Treatment Solutions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From single-point bathroom fixtures and whole-home villas to multi-building corporate campuses, boilers, and agriculture, Bounten delivers custom-calibrated salt-free systems.
          </p>

          {/* Quick jump navigation pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {SOLUTIONS_DATA.map((sol) => (
              <a
                key={sol.id}
                href={`#${sol.id}`}
                className="bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-slate-700 text-xs font-bold px-3.5 py-1.5 rounded-full transition-colors border border-slate-200"
              >
                {sol.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Solutions Sections (6 Categories) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SOLUTIONS_DATA.map((solution, index) => {
          const Icon = icons[solution.id] || Zap;
          const isReversed = index % 2 !== 0;

          return (
            <section
              key={solution.id}
              id={solution.id}
              className="scroll-mt-28 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Solution Image (5 cols) */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Category 0{index + 1}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="font-bold text-sm tracking-wide">{solution.title}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solution Details (7 cols) */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider">
                      <Icon className="w-4 h-4" />
                      <span>{solution.title}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#081C3B]">
                      {solution.subtitle}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {solution.description}
                  </p>

                  {/* Benefits Grid */}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                      Key Engineering Benefits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {solution.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suitable Applications Pills */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Suitable Applications
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {solution.applications.map((app) => (
                        <span
                          key={app}
                          className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-lg border border-slate-200"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button: Enquire Now with solution name */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => openSolutionEnquiry(solution.title)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-6 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                      <span>Enquire Now on WhatsApp</span>
                    </button>

                    <Link
                      to="/products"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-5 rounded-xl font-semibold text-xs transition-colors"
                    >
                      <span>Explore Suitable Models</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* 3. Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#081C3B] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Custom Flow Calibration
            </span>
            <h3 className="text-2xl font-bold text-white">
              Need a custom high-flow skid up to 2,00,000 LPH?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our engineering team designs bespoke SS 304 skid assemblies for industrial plants and large institutions.
            </p>
          </div>

          <button
            onClick={() => openSolutionEnquiry("Custom Industrial Skid / High Flow")}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none" />
            <span>Consult Chief Engineer</span>
          </button>
        </div>
      </section>

    </div>
  );
}
