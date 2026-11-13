import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  Zap,
  Droplets,
  Wrench,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  FileDown,
  Building2,
  Home as HomeIcon,
  Factory,
  Tractor,
  Waves,
  Utensils,
  ChevronRight,
  PhoneCall,
  Check,
  Award,
  Link2,
  Maximize2
} from 'lucide-react';
import { PRODUCTS_DATA, PRODUCT_HIGHLIGHTS } from '../data/products';
import { SOLUTIONS_DATA } from '../data/solutions';
import { SERVICES_DATA } from '../data/services';
import { GALLERY_ITEMS } from '../data/gallery';
import { ABOUT_DATA } from '../data/about';
import { COMPANY_CONFIG } from '../data/config';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
import ProblemsWithHardWater from '../components/ProblemsWithHardWater';
import WhyWaterSoftenerRequired from '../components/WhyWaterSoftenerRequired';
import WhyChooseBounten from '../components/WhyChooseBounten';
import { openGeneralEnquiry } from '../utils/whatsapp';

// High-resolution realistic water treatment background carousel slides (strictly only 2 slides)
const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/hero/zoftnor-cabinet-closed.jpg',
    alt: 'Bounten Zoftnor exterior closed cabinet salt-free water softener'
  },
  {
    id: 2,
    image: '/images/hero/zoftnor-cabinet-open.jpg',
    alt: 'Bounten Zoftnor opened cabinet showing interior electrolysis cylinder and bag filter'
  }
];

// Auto-incrementing specifications cards triggered while scrolling
function TrustSpecsBar() {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState({ ppm: 0, years: 0, alloy: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false); // Re-triggers auto-increment when scrolling back into view
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -20px 0px' }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    if (!inView) {
      setCounts({ ppm: 0, years: 0, alloy: 0 });
      return;
    }

    let start = null;
    const duration = 1600; // 1.6s smooth easing count-up
    let animationFrameId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Smooth cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        ppm: Math.round(ease * 1999),
        years: Math.round(ease * 5),
        alloy: Math.round(ease * 304)
      });

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView]);

  return (
    <section ref={containerRef} className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {/* Card 1: TDS Compatibility */}
        <div className="bg-white p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs hover-lift glow-sky text-left group cursor-pointer">
          <div className="text-sm sm:text-base md:text-xl font-black text-[#081C3B] tabular-nums tracking-tight">
            ≤ {counts.ppm.toLocaleString()} ppm
          </div>
          <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">TDS Compatibility</div>
        </div>

        {/* Card 2: Electrode Warranty */}
        <div className="bg-white p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs hover-lift glow-emerald text-left group cursor-pointer">
          <div className="text-sm sm:text-base md:text-xl font-black text-emerald-600 tabular-nums tracking-tight">
            {counts.years} Years*
          </div>
          <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">Electrode Warranty*</div>
        </div>

        {/* Card 3: Zero Refills */}
        <div className="bg-white p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs hover-lift glow-sky text-left group cursor-pointer">
          <div className="text-sm sm:text-base md:text-xl font-black text-sky-600 tracking-tight">
            Zero Refills
          </div>
          <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">No Salt or Resin</div>
        </div>

        {/* Card 4: Food Grade Alloy */}
        <div className="bg-white p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs hover-lift glow-amber text-left group cursor-pointer">
          <div className="text-sm sm:text-base md:text-xl font-black text-amber-600 tabular-nums tracking-tight">
            SS {counts.alloy}
          </div>
          <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">Food Grade Alloy</div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const location = useLocation();
  const [heroSlide, setHeroSlide] = useState(0);

  // Auto-advance hero background carousel every 5 seconds (right-to-left transition)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  // Scroll to anchor on load or hash change
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location.hash]);

  // Gallery preview (top 6 images)
  const galleryPreview = GALLERY_ITEMS.slice(0, 6);

  const solutionIcons = {
    residential: HomeIcon,
    commercial: Building2,
    industrial: Factory,
    agriculture: Tractor,
    "swimming-pools": Waves,
    hospitality: Utensils
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-6 sm:pb-8 overflow-hidden">
      
      {/* 1. HERO SECTION WITH BACKGROUND CAROUSEL - id="home" */}
      <section id="home" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 relative overflow-hidden bg-slate-50 py-4 sm:py-6 lg:py-8 min-h-[400px] sm:min-h-[440px] lg:min-h-[480px] xl:min-h-[500px] flex items-center border-b border-slate-100">
        
        {/* RIGHT-TO-LEFT SLIDING BACKGROUND CAROUSEL */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="flex w-full h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${heroSlide * 100}%)` }}
          >
            {HERO_SLIDES.map((slide) => (
              <div key={slide.id} className="w-full h-full shrink-0 relative flex items-center justify-end overflow-hidden">
                {/* Edge-to-edge seamless background fill - Guarantees ZERO white gap on the left */}
                <img
                  src={slide.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-left pointer-events-none"
                  aria-hidden="true"
                />
                {/* Main full-length crisp image - Faded smoothly on the left edge to eliminate hard vertical seam line */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-auto max-w-none object-contain relative z-1 ml-auto"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 160px, black 100%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 160px, black 100%)'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Transparent Gradient Overlays for Text Readability */}
          {/* Desktop: Soft light mist on the left for crisp text contrast, transparent on center and right */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-white/75 via-white/35 to-transparent pointer-events-none z-10" />
          {/* Mobile: Light transparent tint so images are clearly visible without heavy whiteout */}
          <div className="sm:hidden absolute inset-0 bg-white/30 pointer-events-none z-10" />
          {/* Delicate bottom edge blend */}
          <div className="absolute bottom-0 inset-x-0 h-6 sm:h-8 bg-gradient-to-t from-white/20 to-transparent pointer-events-none z-10" />
        </div>

        {/* Content Container (Positioned to the Left to Keep Cabinet Clear) */}
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="max-w-md sm:max-w-lg lg:max-w-[520px] xl:max-w-[560px] space-y-2 sm:space-y-3 lg:space-y-3.5 text-left">
            <AnimatedSection animation="fade-right" duration={700}>
              {/* Trust Tag with animated pulse */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md border border-sky-200/90 text-[#081C3B] font-bold text-[9px] sm:text-[11px] uppercase tracking-wider py-0.5 sm:py-1 px-2.5 sm:px-3 rounded-full shadow-xs hover:border-sky-400 transition-colors">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-sky-900 font-extrabold">Next-Gen Electrolysis</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-900 font-bold">100% Salt-Free & Chemical-Free</span>
              </div>
            </AnimatedSection>

            {/* Main Headline */}
            <AnimatedSection animation="fade-right" delay={100} duration={800}>
              <h1 className="text-xl sm:text-3xl md:text-[36px] lg:text-[40px] font-black text-slate-950 tracking-tight leading-[1.18] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                Advanced Salt-Free <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#004e8c] to-[#041226] bg-clip-text text-transparent">
                  Water Softeners
                </span>
                <span className="block text-xs sm:text-base md:text-lg lg:text-[20px] font-black text-slate-950 mt-1 sm:mt-1.5">
                  Pure, Scale-Free Living for Homes & Businesses
                </span>
              </h1>

              {/* Subtitle / Value proposition */}
              <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs md:text-sm font-bold text-slate-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                One Smart Solution. Zero Maintenance. Better Water for Everyday Living.
              </p>
            </AnimatedSection>

            {/* Action Buttons: Compact Grid on Mobile, Row on Desktop */}
            <AnimatedSection animation="fade-right" delay={200} duration={800}>
              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2 sm:gap-3">
                <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3">
                  <Link
                    to="/solutions"
                    className="btn-press inline-flex items-center justify-center gap-1 sm:gap-2 bg-[#081C3B] hover:bg-[#0B2447] text-white px-2.5 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-[11px] sm:text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all group whitespace-nowrap"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/products"
                    className="btn-press inline-flex items-center justify-center gap-1 sm:gap-2 bg-white hover:bg-sky-50/80 text-[#081C3B] border border-slate-200 hover:border-sky-300 px-2.5 sm:px-5 py-2 sm:py-3 rounded-xl font-bold text-[11px] sm:text-sm shadow-xs transition-all whitespace-nowrap"
                  >
                    <span>View Products ({PRODUCTS_DATA.length})</span>
                  </Link>
                </div>

                <button
                  onClick={openGeneralEnquiry}
                  className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                  <span>Consult Expert</span>
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Carousel Slide Indicator Dots */}
        <div className="absolute bottom-2 sm:bottom-4 right-3 sm:right-8 z-20 flex items-center gap-1.5 sm:gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroSlide(idx)}
              className={`transition-all duration-300 rounded-full h-1.5 sm:h-2 cursor-pointer ${
                heroSlide === idx
                  ? 'w-5 sm:w-7 bg-[#081C3B]'
                  : 'w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-500'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* KEY TRUST SPECIFICATIONS STRIP WITH AUTO-INCREMENT ON SCROLL */}
      <TrustSpecsBar />

      {/* 2. PROBLEMS WITH HARD WATER SECTION */}
      <ProblemsWithHardWater />

      {/* WHY IS A WATER SOFTENER REQUIRED SECTION */}
      <WhyWaterSoftenerRequired />

      {/* WHY CHOOSE BOUNTEN WATER SOFTENERS SECTION */}
      <WhyChooseBounten />

      {/* 3. PRODUCT SERIES CATEGORIES OVERVIEW - id="products" */}
      <section id="products" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6 sm:space-y-8 relative">
        
        {/* Product Series Header */}
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            
            {/* Header Text */}
            <div className="space-y-1.5 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0070cc]">
                <span className="w-5 h-0.5 bg-[#0070cc] rounded-full inline-block" />
                <span>PRODUCT SERIES</span>
                <span className="w-5 h-0.5 bg-[#0070cc] rounded-full inline-block" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#081C3B] tracking-tight leading-tight">
                Two Distinct Series. Tailored to <span className="text-[#0070cc]">Your Water Setup.</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed">
                Choose between integrated pre-stage bag filtration or direct streamlined inline descaling.
              </p>
            </div>

            {/* View Full Catalogue Button */}
            <Link
              to="/products"
              className="btn-press inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#081C3B] bg-white border border-sky-300 rounded-full px-5 py-2.5 shadow-xs hover:border-sky-500 hover:text-sky-600 hover:shadow-md transition-all group flex-shrink-0 self-start sm:self-auto relative z-10"
            >
              <span>View Full Catalogue ({PRODUCTS_DATA.length})</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-sky-600" />
            </Link>
          </div>
        </AnimatedSection>

        {/* 2 Symmetrical Product Series Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Card 1: Zoftner Pro */}
          <AnimatedSection animation="fade-right" delay={100} duration={800}>
            <div className="bg-white rounded-3xl border border-sky-200/90 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 overflow-hidden flex flex-col justify-between h-full p-5 sm:p-6 lg:p-7 relative group">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                
                {/* Left Content Column */}
                <div className="sm:col-span-7 space-y-3 sm:space-y-3.5 flex flex-col justify-between z-10">
                  
                  {/* Title & Badge */}
                  <div className="flex items-center flex-wrap gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-6 bg-[#0070cc] rounded-full inline-block flex-shrink-0" />
                      <h3 className="text-xl sm:text-2xl font-black text-[#081C3B] tracking-tight">
                        Zoftner Pro
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-[#0070cc] bg-[#e1f2fc] px-2.5 py-0.5 rounded-full border border-sky-200/60">
                      7 Models Available
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm font-bold text-emerald-600">
                    All models come with a bag filter.
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    Engineered for households and commercial spaces seeking complete scale prevention along with heavy sediment, silt, and turbidity filtration in one integrated package.
                  </p>

                  {/* 3 Feature Icons Row */}
                  <div className="grid grid-cols-3 gap-2 pt-2 pb-1 border-t border-slate-100">
                    {/* Feature 1: Complete Protection */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#e1f2fc] text-[#0070cc] flex items-center justify-center flex-shrink-0 shadow-2xs">
                        <ShieldCheck className="w-4 h-4" strokeWidth={2.2} />
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        <div>Complete</div>
                        <div>Protection</div>
                      </div>
                    </div>

                    {/* Feature 2: Sediment & Turbidity Filtration */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#e1f2fc] text-[#0070cc] flex items-center justify-center flex-shrink-0 shadow-2xs">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <rect x="6" y="3" width="12" height="18" rx="2" />
                          <line x1="6" y1="7" x2="18" y2="7" />
                          <line x1="6" y1="12" x2="18" y2="12" />
                          <line x1="6" y1="17" x2="18" y2="17" />
                          <line x1="10" y1="3" x2="10" y2="21" strokeDasharray="1 1" />
                          <line x1="14" y1="3" x2="14" y2="21" strokeDasharray="1 1" />
                        </svg>
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        <div>Sediment &</div>
                        <div>Turbidity Filtration</div>
                      </div>
                    </div>

                    {/* Feature 3: Scale Prevention */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#e1f2fc] text-[#0070cc] flex items-center justify-center flex-shrink-0 shadow-2xs">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <circle cx="8" cy="8" r="3.5" />
                          <circle cx="16" cy="8" r="3.5" />
                          <circle cx="12" cy="16" r="3.5" />
                        </svg>
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        <div>Scale</div>
                        <div>Prevention</div>
                      </div>
                    </div>
                  </div>

                  {/* Rounded Action Button */}
                  <div className="pt-2">
                    <Link
                      to="/products?cat=Zoftner+Pro"
                      className="btn-press inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0066cc] to-[#0099ff] hover:from-[#0055b3] hover:to-[#0088ee] text-white py-2.5 sm:py-3 px-6 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                    >
                      <span>Explore Zoftner Pro Models</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>

                {/* Right Product Image Column (Image 3) */}
                <div className="sm:col-span-5 relative flex items-center justify-center min-h-[200px] sm:min-h-[270px] overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50/50 to-white">
                  <img
                    src="/images/products/zoftner_pro_showcase.jpg"
                    alt="Bounten Zoftner Pro water softener system with integrated bag filter"
                    className="w-full h-full max-h-[290px] object-contain transform group-hover:scale-105 transition-transform duration-600 ease-out select-none"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>
          </AnimatedSection>

          {/* Card 2: Zoftner Quick Fix */}
          <AnimatedSection animation="fade-left" delay={200} duration={800}>
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 overflow-hidden flex flex-col justify-between h-full p-5 sm:p-6 lg:p-7 relative group">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                
                {/* Left Content Column */}
                <div className="sm:col-span-7 space-y-3 sm:space-y-3.5 flex flex-col justify-between z-10">
                  
                  {/* Title & Badge */}
                  <div className="flex items-center flex-wrap gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-6 bg-[#081C3B] rounded-full inline-block flex-shrink-0" />
                      <h3 className="text-xl sm:text-2xl font-black text-[#081C3B] tracking-tight">
                        Zoftner Quick Fix
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      11 Models Available
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm font-bold text-emerald-600">
                    All models come without a bag filter.
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    Streamlined, compact electrolytic conditioners and appliance descalers designed for direct inline plumbing connections where pre-filtration is already present.
                  </p>

                  {/* 3 Feature Icons Row */}
                  <div className="grid grid-cols-3 gap-2 pt-2 pb-1 border-t border-slate-100">
                    {/* Feature 1: Direct Inline Setup */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#e1f2fc] text-[#0070cc] flex items-center justify-center flex-shrink-0 shadow-2xs">
                        <Link2 className="w-4 h-4" strokeWidth={2.2} />
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        <div>Direct</div>
                        <div>Inline Setup</div>
                      </div>
                    </div>

                    {/* Feature 2: Compact & Space-Saving */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#e1f2fc] text-[#0070cc] flex items-center justify-center flex-shrink-0 shadow-2xs">
                        <Maximize2 className="w-4 h-4" strokeWidth={2.2} />
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        <div>Compact</div>
                        <div>& Space-Saving</div>
                      </div>
                    </div>

                    {/* Feature 3: Effective Descaling */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#e1f2fc] text-[#0070cc] flex items-center justify-center flex-shrink-0 shadow-2xs">
                        <Zap className="w-4 h-4" strokeWidth={2.2} />
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        <div>Effective</div>
                        <div>Descaling</div>
                      </div>
                    </div>
                  </div>

                  {/* Rounded Action Button */}
                  <div className="pt-2">
                    <Link
                      to="/products?cat=Zoftner+Quick+Fix"
                      className="btn-press inline-flex items-center justify-center gap-2 bg-[#081C3B] hover:bg-[#0c244d] text-white py-2.5 sm:py-3 px-6 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                    >
                      <span>Explore Zoftner Quick Fix Models</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>

                {/* Right Product Image Column (Image 4) */}
                <div className="sm:col-span-5 relative flex items-center justify-center min-h-[200px] sm:min-h-[270px] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white">
                  <img
                    src="/images/products/zoftner_quick_fix_showcase.jpg"
                    alt="Bounten Zoftner Quick Fix inline water descaler cylinder"
                    className="w-full h-full max-h-[290px] object-contain transform group-hover:scale-105 transition-transform duration-600 ease-out select-none"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>
          </AnimatedSection>

        </div>

      </section>

      {/* 4. WATER SOFTENER - APPLICATIONS & USES (Right below Product Series, No Fade) - id="solutions" */}
      <section id="solutions" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-5 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
              Applications & Uses
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
              {PRODUCT_HIGHLIGHTS.applications.title}
            </h2>
            <p className="text-slate-600 text-sm mt-0.5 max-w-2xl">
              {PRODUCT_HIGHLIGHTS.applications.subtitle}
            </p>
          </div>

          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800 self-start sm:self-auto group flex-shrink-0"
          >
            <span>View All Solutions</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Columns: Residential, Commercial, Everyday - 100% Solid & Crisp */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          
          {/* 1. Residential */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover-lift glow-sky transition-all space-y-3 h-full flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-md">
                <HomeIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#081C3B]">
                {PRODUCT_HIGHLIGHTS.applications.residential.title}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {PRODUCT_HIGHLIGHTS.applications.residential.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Commercial */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover-lift glow-emerald transition-all space-y-3 h-full flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#081C3B]">
                {PRODUCT_HIGHLIGHTS.applications.commercial.title}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {PRODUCT_HIGHLIGHTS.applications.commercial.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Everyday Applications */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover-lift glow-amber transition-all space-y-3 h-full flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#081C3B]">
                {PRODUCT_HIGHLIGHTS.applications.everyday.title}
              </h3>
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {PRODUCT_HIGHLIGHTS.applications.everyday.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-semibold">{item.name}:</strong>{' '}
                      <span className="text-slate-600">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SERVICES OVERVIEW - id="services" */}
      <section id="services" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-5 sm:space-y-6">
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
                Reliable Technical Support
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
                Comprehensive Services & AMC
              </h2>
              <p className="text-slate-600 text-sm mt-0.5 max-w-2xl">
                From site feasibility inspections to professional installation, electronics synchronization, and Annual Maintenance Contracts.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800 self-start sm:self-auto group flex-shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Single Row Auto-scrolling Services Carousel */}
        <div className="relative w-full overflow-hidden py-2 -mx-4 sm:mx-0 px-4 sm:px-0">
          {/* Subtle Left & Right Edge Fade Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Continuous Infinite Auto-scroll Track */}
          <div className="flex w-max gap-4 sm:gap-5 animate-services-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            {[...SERVICES_DATA, ...SERVICES_DATA].map((service, idx) => (
              <div
                key={`${service.id}-${idx}`}
                className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover-lift glow-sky transition-all duration-400 flex flex-col justify-between space-y-3.5 select-none cursor-pointer"
              >
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#081C3B]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-600">Available PAN India</span>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-bold text-sky-600 hover:text-sky-800"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOUNTEN WATER SOFTENER BENEFITS - id="benefits" */}
      <section id="benefits" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-5 sm:space-y-6">
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#081C3B]">
                  Bounten Water Softener Key Benefits
                </h3>
                <p className="text-xs text-slate-500 font-medium">Advanced Electrolysis Technology for Scale-Free Living</p>
              </div>
              <Link
                to="/benefits"
                className="btn-press inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-100 hover:bg-sky-200 px-3.5 py-1.5 rounded-full transition-colors w-fit"
              >
                <span>View Full Benefits & Technology Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-0.5">
              {PRODUCT_HIGHLIGHTS.applications.keyBenefits.items.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 hover:border-emerald-300 transition-colors"
                >
                  <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* WARRANTY & TDS BAR */}
        <AnimatedSection animation="zoom" delay={150} duration={800}>
          <div className="bg-gradient-to-r from-[#081C3B] via-slate-900 to-[#081C3B] text-white p-5 sm:p-6 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center border border-slate-800">
            <div className="space-y-0.5">
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block">
                Warranty Assurance
              </span>
              <h4 className="text-base font-bold text-white">Unconditional Manufacturer Warranty</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                1-Year Unconditional on Cabinet & Electricals.*<br />
                5-Year Unconditional on Electrode.*
              </p>
            </div>

            <div className="space-y-0.5">
              <span className="text-sky-400 font-bold text-xs uppercase tracking-wider block">
                Water Quality Compatibility
              </span>
              <h4 className="text-base font-bold text-white">Input TDS up to 1,999 ppm</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Works with water TDS up to 1,999 ppm. For TDS above 2,000 ppm, backwashing is recommended.
              </p>
            </div>

            <div className="space-y-0.5">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">
                Standards & Materials
              </span>
              <h4 className="text-base font-bold text-white">ISO 9001 & ISO 14001</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Food grade material: SS304 stainless steel. Non-toxic, safe for drinking lines and skin contact.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 6. GALLERY PREVIEW - id="gallery" */}
      <section id="gallery" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-5 sm:space-y-6">
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
                Field Installations
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
                Real Installations Across India
              </h2>
              <p className="text-slate-600 text-sm mt-0.5 max-w-2xl">
                Take a look at Bounten water softeners installed in residential apartments, luxury villas, gated communities, and commercial spaces.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800 self-start sm:self-auto group flex-shrink-0"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {galleryPreview.map((item, idx) => (
            <AnimatedSection key={item.id} animation="zoom" delay={idx * 80} duration={600}>
              <div className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs hover:shadow-lg hover-lift transition-all duration-400">
                <img
                  src={item.image || item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-115 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                  <span className="text-white text-[11px] font-semibold line-clamp-2">
                    {item.title}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Conditions disclaimer */}
        <div className="pt-2 text-slate-500 text-xs sm:text-[13px] space-y-0.5 text-left">
          <p className="font-semibold text-slate-700">*Conditions apply</p>
          <p className="text-slate-500">Depends on input water conditions</p>
        </div>
      </section>

    </div>
  );
}
