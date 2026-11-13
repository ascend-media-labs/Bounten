import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Droplets,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import WhatsAppIcon from './WhatsAppIcon';
import { HARD_WATER_PROBLEMS } from '../data/problems';
import { COMPANY_CONFIG } from '../data/config';

export default function ProblemsWithHardWater() {
  const [selectedProblem, setSelectedProblem] = useState(null);

  // Close modal on Escape key and prevent body scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProblem(null);
      }
    };

    if (selectedProblem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProblem]);

  return (
    <section
      id="problems"
      className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative"
    >
      <div className="relative rounded-3xl bg-gradient-to-b from-white via-sky-50/20 to-white p-4 sm:p-5 md:p-6 lg:p-7 border border-slate-200/80 shadow-xs overflow-hidden">
        
        {/* Top Water Splash Decorative Graphic */}
        <div className="hidden md:block absolute right-0 top-0 w-80 lg:w-[480px] xl:w-[560px] h-32 lg:h-36 pointer-events-none select-none overflow-hidden z-0">
          <img
            src="/images/problems/water_splash_banner.jpg"
            alt="Water Splash"
            className="w-full h-full object-cover object-left opacity-85 [mask-image:linear-gradient(to_left,black_60%,transparent_100%)]"
          />
        </div>

        {/* Section Header */}
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="relative z-10 max-w-2xl mb-3.5 sm:mb-4.5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#081C3B] tracking-tight leading-[1.12]">
              Problems with <br className="hidden sm:inline" />
              <span className="text-[#0284c7]">Hard Water</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-1.5 font-normal leading-relaxed">
              Hard water may look clear, but it can cause daily problems at home.
            </p>
            <div className="w-12 h-1 bg-[#0284c7] rounded-full mt-2"></div>
          </div>
        </AnimatedSection>

        {/* 4 Problems Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {HARD_WATER_PROBLEMS.map((problem, idx) => (
            <AnimatedSection
              key={problem.id}
              animation="zoom"
              delay={idx * 90}
              duration={600}
            >
              <div
                onClick={() => setSelectedProblem(problem)}
                className={`group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover-lift transition-all duration-300 cursor-pointer overflow-hidden flex flex-col ${problem.themeClass.glow}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProblem(problem);
                  }
                }}
                aria-label={`View details about ${problem.title}`}
              >
                {/* Exact Card Graphic Image */}
                <div className="relative w-full overflow-hidden bg-white">
                  <img
                    src={problem.cardImage}
                    alt={problem.title}
                    className="w-full h-auto block object-cover transform group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Hover Action Hint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 p-3">
                    <span className="bg-white/95 backdrop-blur-xs text-[#081C3B] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span>Click to view solutions</span>
                      <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                    </span>
                  </div>
                </div>

                {/* Mobile / Screen-reader Accessible Label */}
                <div className="sr-only">
                  <h3>{problem.title}</h3>
                  <ul>
                    {problem.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal Dialog */}
      {selectedProblem && typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProblem(null);
            }}
          >
            <div
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-labelledby="problem-modal-title"
            >
              {/* Modal Colored Header Strip */}
              <div className={`h-2.5 w-full bg-gradient-to-r ${selectedProblem.themeClass.headerBg}`} />

              {/* Modal Header */}
              <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border ${selectedProblem.themeClass.badge}`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{selectedProblem.category}</span>
                  </span>
                  <h3
                    id="problem-modal-title"
                    className="text-xl sm:text-2xl font-black text-[#081C3B] tracking-tight pt-1"
                  >
                    {selectedProblem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal">
                    Daily impacts of hard water & how Bounten Zoftner resolves it permanently.
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProblem(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors flex-shrink-0"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
                
                {/* 3 Core Symptoms Grid (Matching the Card) */}
                <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span>Observed Symptoms at Home</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {selectedProblem.points.map((pt, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${selectedProblem.themeClass.checkIcon}`}
                        />
                        <span className="text-xs font-semibold text-slate-800 leading-snug">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* In-Depth Problem Analysis */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Why This Happens
                  </h4>
                  <div className="space-y-2">
                    {selectedProblem.detailedPoints.map((dp, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 space-y-1"
                      >
                        <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                          <span>{dp.heading}</span>
                        </div>
                        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal pl-4">
                          {dp.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The Chemical / Physical Cause */}
                <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-1.5">
                  <div className="text-xs font-bold text-sky-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-sky-600" />
                    <span>The Underlying Scientific Cause</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                    {selectedProblem.scientificCause}
                  </p>
                </div>

                {/* The Bounten Non-Chemical Zoftner Solution */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/90 space-y-2">
                  <div className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>How Bounten Solves This Permanently</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed">
                    {selectedProblem.bountenSolution}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-emerald-900">
                    <span className="bg-white/90 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                      ✓ 100% Salt-Free
                    </span>
                    <span className="bg-white/90 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                      ✓ Zero Chemicals
                    </span>
                    <span className="bg-white/90 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                      ✓ Retains Essential Minerals
                    </span>
                    <span className="bg-white/90 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                      ✓ Zero Maintenance & No Refills
                    </span>
                  </div>
                </div>

                {/* Recommended Models */}
                <div className="text-xs text-slate-500 flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-slate-100">
                  <span>
                    Recommended Solution: <strong className="text-slate-800">{selectedProblem.recommendedModels}</strong>
                  </span>
                  <span className="text-emerald-700 font-medium">Suitable for Independent Homes, Villas & Apartments</span>
                </div>

              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(selectedProblem.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Consult Expert on WhatsApp</span>
                </a>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Link
                    to="/products"
                    onClick={() => setSelectedProblem(null)}
                    className="btn-press flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#081C3B] hover:bg-[#0c2340] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all"
                  >
                    <span>View Softeners</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  
                  <button
                    onClick={() => setSelectedProblem(null)}
                    className="btn-press px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-xs sm:text-sm font-bold text-slate-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

