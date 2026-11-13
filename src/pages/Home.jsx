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
  Maximize2,
  Layers,
  Droplet,
  TrendingUp,
  ShowerHead,
  WashingMachine,
  Flame,
  Grid2X2
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

// Rich Creative Key Benefits Data
const KEY_BENEFITS_DATA = [
  {
    icon: ShieldCheck,
    badge: 'Zero Limescale',
    badgeColor: 'text-sky-700 bg-sky-100 border-sky-200/80',
    iconGradient: 'from-sky-500 to-blue-600',
    title: 'Helps Prevent Scale Build-up',
    description: 'Stops stubborn calcium and magnesium crusting in overhead tanks, concealed internal pipes, and solar geysers.',
    highlight: '100% Pipeline Protection'
  },
  {
    icon: Zap,
    badge: '2x Longevity',
    badgeColor: 'text-emerald-700 bg-emerald-100 border-emerald-200/80',
    iconGradient: 'from-emerald-500 to-teal-600',
    title: 'Extends Appliance Lifespan',
    description: 'Protects expensive heating coils in geysers, washing machines, and dishwashers from premature burnout.',
    highlight: 'Prevents Coil Burnout'
  },
  {
    icon: Wrench,
    badge: 'Zero Clogging',
    badgeColor: 'text-indigo-700 bg-indigo-100 border-indigo-200/80',
    iconGradient: 'from-indigo-500 to-blue-600',
    title: 'Reduces Plumbing Maintenance',
    description: 'Maintains optimal water flow rate throughout your home, ending frequent plumber callouts and acid descaling.',
    highlight: 'Preserves Water Pressure'
  },
  {
    icon: Sparkles,
    badge: 'Spotless Chrome',
    badgeColor: 'text-cyan-700 bg-cyan-100 border-cyan-200/80',
    iconGradient: 'from-cyan-500 to-blue-600',
    title: 'Keeps Bathroom Fixtures Cleaner',
    description: 'Eliminates ugly white chalk stains on luxury chrome taps, shower glass partitions, mirrors, and designer tiles.',
    highlight: 'Effortless Bathroom Cleaning'
  },
  {
    icon: Droplets,
    badge: 'Skin & Hair Care',
    badgeColor: 'text-rose-700 bg-rose-100 border-rose-200/80',
    iconGradient: 'from-rose-500 to-pink-600',
    title: 'Improves Everyday Bathing Comfort',
    description: 'Conditioned soft water reduces hair brittleness and fall, keeping your skin naturally soft, hydrated, and rash-free.',
    highlight: 'Gentle on Skin & Hair'
  },
  {
    icon: TrendingUp,
    badge: 'Up to 40% Savings',
    badgeColor: 'text-amber-700 bg-amber-100 border-amber-200/80',
    iconGradient: 'from-amber-500 to-orange-600',
    title: 'Supports Long-Term Cost Savings',
    description: 'Significantly cuts power consumption through efficient heat transfer and reduces soap and detergent use by up to 50%.',
    highlight: 'Lower Electricity & Detergent Bills'
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
    <div className="space-y-4 sm:space-y-5 lg:space-y-6 pb-4 sm:pb-6 overflow-hidden">
      
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
      <section id="products" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-3.5 sm:space-y-4.5 relative">
        
        {/* Product Series Header */}
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            
            {/* Header Text */}
            <div className="space-y-1 max-w-2xl relative z-10">
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
              className="btn-press inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#081C3B] bg-white border border-sky-300 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 shadow-xs hover:border-sky-500 hover:text-sky-600 hover:shadow-md transition-all group flex-shrink-0 self-start sm:self-auto relative z-10"
            >
              <span>View Full Catalogue ({PRODUCTS_DATA.length})</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-sky-600" />
            </Link>
          </div>
        </AnimatedSection>

        {/* 2 Symmetrical Product Series Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4.5">
          
          {/* Card 1: Zoftner Pro */}
          <AnimatedSection animation="fade-right" delay={100} duration={800} className="h-full">
            <div className="relative bg-gradient-to-br from-white via-sky-50/20 to-white rounded-3xl border border-sky-100 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 overflow-hidden h-full flex flex-col justify-between group">
              
              {/* Left Content Area */}
              <div className="relative z-10 w-full sm:w-[62%] lg:w-[58%] p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full space-y-2.5 sm:space-y-3">
                
                <div className="space-y-2 sm:space-y-2.5">
                  {/* Title & Badge */}
                  <div className="flex items-center flex-wrap gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-6 bg-[#0070cc] rounded-full inline-block flex-shrink-0" />
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
                </div>

                {/* 3 Feature Icons Row */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-100/90">
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
                <div className="pt-1">
                  <Link
                    to="/products?cat=Zoftner+Pro"
                    className="btn-press inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0066cc] to-[#0099ff] hover:from-[#0055b3] hover:to-[#0088ee] text-white py-2.5 sm:py-3 px-6 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                  >
                    <span>Explore Zoftner Pro Models</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

              {/* Right Integrated Product Visual (Curved Organic Shape Blend) */}
              <div className="relative sm:absolute sm:right-0 sm:top-0 sm:bottom-0 w-full sm:w-[46%] lg:w-[48%] h-60 sm:h-full overflow-hidden mask-organic-curve sm:mask-organic-curve-side z-0 pointer-events-none select-none">
                <img
                  src="/images/products/zoftner_pro_showcase.jpg"
                  alt="Bounten Zoftner Pro water softener system with integrated bag filter"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

            </div>
          </AnimatedSection>

          {/* Card 2: Zoftner Quick Fix */}
          <AnimatedSection animation="fade-left" delay={200} duration={800} className="h-full">
            <div className="relative bg-gradient-to-br from-white via-slate-50/30 to-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 overflow-hidden h-full flex flex-col justify-between group">
              
              {/* Left Content Area */}
              <div className="relative z-10 w-full sm:w-[62%] lg:w-[58%] p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full space-y-2.5 sm:space-y-3">
                
                <div className="space-y-2 sm:space-y-2.5">
                  {/* Title & Badge */}
                  <div className="flex items-center flex-wrap gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-6 bg-[#081C3B] rounded-full inline-block flex-shrink-0" />
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
                </div>

                {/* 3 Feature Icons Row */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-100/90">
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
                <div className="pt-1">
                  <Link
                    to="/products?cat=Zoftner+Quick+Fix"
                    className="btn-press inline-flex items-center justify-center gap-2 bg-[#081C3B] hover:bg-[#0c244d] text-white py-2.5 sm:py-3 px-6 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                  >
                    <span>Explore Zoftner Quick Fix Models</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

              {/* Right Integrated Product Visual (Curved Organic Shape Blend) */}
              <div className="relative sm:absolute sm:right-0 sm:top-0 sm:bottom-0 w-full sm:w-[46%] lg:w-[48%] h-60 sm:h-full overflow-hidden mask-organic-curve sm:mask-organic-curve-side z-0 pointer-events-none select-none">
                <img
                  src="/images/products/zoftner_quick_fix_showcase.jpg"
                  alt="Bounten Zoftner Quick Fix inline water descaler cylinder"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

            </div>
          </AnimatedSection>

        </div>

      </section>

      {/* 4. WATER SOFTENER - APPLICATIONS & USES (Pixel-Level Recreated 3-Card Layout) - id="solutions" */}
      <section id="solutions" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative">
        <div className="relative rounded-3xl bg-gradient-to-b from-sky-50/40 via-white to-sky-50/20 p-4 sm:p-6 lg:p-8 border border-sky-100/80 shadow-xs overflow-hidden space-y-4 sm:space-y-6">
          
          {/* Top Right Decorative Water Droplets & Wave Ribbon */}
          <div className="hidden sm:block absolute right-0 top-0 w-80 lg:w-[500px] xl:w-[600px] h-28 lg:h-32 pointer-events-none select-none overflow-hidden z-0 opacity-85">
            <img
              src="/images/solutions/top_water_wave_banner.png"
              alt="Water Wave Banner"
              className="w-full h-full object-contain object-right-top"
              loading="lazy"
            />
          </div>

          {/* Section Header */}
          <AnimatedSection animation="fade-up" duration={700}>
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0070cc]">
                  <span>APPLICATIONS & USES</span>
                  <span className="w-6 h-0.5 bg-[#0070cc] rounded-full inline-block" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  <span className="text-[#081C3B]">Water Softener – </span>
                  <span className="text-[#0070cc]">Applications & Uses</span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-1 font-normal">
                  Ideal for Homes, Apartments, Villas and Commercial Spaces.
                </p>
              </div>

              <Link
                to="/solutions"
                className="btn-press inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0070cc] hover:text-white bg-white/95 hover:bg-[#0070cc] border border-sky-300 hover:border-[#0070cc] rounded-full px-4 py-2 sm:px-5 sm:py-2.5 shadow-2xs hover:shadow-md transition-all group flex-shrink-0 self-start sm:self-auto relative z-10"
              >
                <span>View All Solutions</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          {/* 3 Premium Theme Cards: Residential (Blue), Commercial (Green), Everyday (Orange) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 relative z-10 items-stretch">
            
            {/* Card 1: Residential Applications (Blue) */}
            <AnimatedSection animation="fade-up" delay={100} duration={700} className="h-full">
              <div className="bg-white rounded-3xl border border-sky-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group relative h-full">
                
                {/* Top Image + Wave Cutout + Floating Badge */}
                <div className="relative h-44 sm:h-48 md:h-52 w-full flex-shrink-0">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src="/images/solutions/card_residential_top.jpg"
                      alt="Residential Applications - Luxury Villa"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Organic Wave Cutout with Smooth Curve */}
                    <div className="absolute -bottom-0.5 left-0 right-0 h-10 pointer-events-none">
                      <svg
                        viewBox="0 0 400 45"
                        preserveAspectRatio="none"
                        className="w-full h-full text-white fill-current"
                      >
                        <path d="M0,20 C90,42 160,8 240,30 C320,48 370,18 400,24 L400,45 L0,45 Z" />
                      </svg>
                      <svg
                        viewBox="0 0 400 45"
                        preserveAspectRatio="none"
                        className="absolute inset-0 w-full h-full fill-none pointer-events-none"
                      >
                        <path
                          d="M0,20 C90,42 160,8 240,30 C320,48 370,18 400,24"
                          stroke="#bae6fd"
                          strokeWidth="2.5"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Floating Squircle Category Icon */}
                  <div className="absolute -bottom-4 left-5 sm:left-6 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white flex items-center justify-center shadow-md shadow-sky-500/30 border-2 border-white z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <HomeIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" strokeWidth={2.4} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 pt-6 sm:pt-7 flex flex-col justify-between flex-grow relative z-10 space-y-4">
                  <div className="space-y-3.5">
                    <h3 className="text-lg sm:text-xl font-black text-[#081C3B] tracking-tight">
                      {PRODUCT_HIGHLIGHTS.applications.residential.title}
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      {PRODUCT_HIGHLIGHTS.applications.residential.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full border border-sky-400 bg-sky-50 text-[#0284c7] flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5" strokeWidth={3} />
                          </div>
                          <span className="font-medium text-slate-700 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Right Decoration */}
                  <img
                    src="/images/solutions/card1_splash.png"
                    alt=""
                    className="absolute bottom-0 right-0 w-28 sm:w-32 pointer-events-none select-none opacity-90 z-0"
                    loading="lazy"
                  />
                </div>

              </div>
            </AnimatedSection>

            {/* Card 2: Commercial Applications (Green) */}
            <AnimatedSection animation="fade-up" delay={200} duration={700} className="h-full">
              <div className="bg-white rounded-3xl border border-emerald-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group relative h-full">
                
                {/* Top Image + Wave Cutout + Floating Badge */}
                <div className="relative h-44 sm:h-48 md:h-52 w-full flex-shrink-0">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src="/images/solutions/card_commercial_top.jpg"
                      alt="Commercial Applications - Hotel & Offices"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Organic Wave Cutout with Smooth Curve */}
                    <div className="absolute -bottom-0.5 left-0 right-0 h-10 pointer-events-none">
                      <svg
                        viewBox="0 0 400 45"
                        preserveAspectRatio="none"
                        className="w-full h-full text-white fill-current"
                      >
                        <path d="M0,20 C90,42 160,8 240,30 C320,48 370,18 400,24 L400,45 L0,45 Z" />
                      </svg>
                      <svg
                        viewBox="0 0 400 45"
                        preserveAspectRatio="none"
                        className="absolute inset-0 w-full h-full fill-none pointer-events-none"
                      >
                        <path
                          d="M0,20 C90,42 160,8 240,30 C320,48 370,18 400,24"
                          stroke="#a7f3d0"
                          strokeWidth="2.5"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Floating Squircle Category Icon */}
                  <div className="absolute -bottom-4 left-5 sm:left-6 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#10b981] to-[#059669] text-white flex items-center justify-center shadow-md shadow-emerald-500/30 border-2 border-white z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Building2 className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" strokeWidth={2.4} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 pt-6 sm:pt-7 flex flex-col justify-between flex-grow relative z-10 space-y-4">
                  <div className="space-y-3.5">
                    <h3 className="text-lg sm:text-xl font-black text-[#081C3B] tracking-tight">
                      {PRODUCT_HIGHLIGHTS.applications.commercial.title}
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      {PRODUCT_HIGHLIGHTS.applications.commercial.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full border border-emerald-400 bg-emerald-50 text-[#10b981] flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5" strokeWidth={3} />
                          </div>
                          <span className="font-medium text-slate-700 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Right Decoration */}
                  <img
                    src="/images/solutions/card2_skyline.png"
                    alt=""
                    className="absolute bottom-0 right-0 w-24 sm:w-28 pointer-events-none select-none opacity-85 z-0"
                    loading="lazy"
                  />
                </div>

              </div>
            </AnimatedSection>

            {/* Card 3: Everyday Applications (Orange) */}
            <AnimatedSection animation="fade-up" delay={300} duration={700} className="h-full">
              <div className="bg-white rounded-3xl border border-amber-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group relative h-full">
                
                {/* Top Image + Wave Cutout + Floating Badge */}
                <div className="relative h-44 sm:h-48 md:h-52 w-full flex-shrink-0">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src="/images/solutions/card_everyday_top.jpg"
                      alt="Everyday Applications - Shower & Bathroom"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Organic Wave Cutout with Smooth Curve */}
                    <div className="absolute -bottom-0.5 left-0 right-0 h-10 pointer-events-none">
                      <svg
                        viewBox="0 0 400 45"
                        preserveAspectRatio="none"
                        className="w-full h-full text-white fill-current"
                      >
                        <path d="M0,20 C90,42 160,8 240,30 C320,48 370,18 400,24 L400,45 L0,45 Z" />
                      </svg>
                      <svg
                        viewBox="0 0 400 45"
                        preserveAspectRatio="none"
                        className="absolute inset-0 w-full h-full fill-none pointer-events-none"
                      >
                        <path
                          d="M0,20 C90,42 160,8 240,30 C320,48 370,18 400,24"
                          stroke="#fed7aa"
                          strokeWidth="2.5"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Floating Squircle Category Icon */}
                  <div className="absolute -bottom-4 left-5 sm:left-6 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white flex items-center justify-center shadow-md shadow-amber-500/30 border-2 border-white z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Droplets className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" strokeWidth={2.4} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 pt-6 sm:pt-7 flex flex-col justify-between flex-grow relative z-10 space-y-4">
                  <div className="space-y-3.5">
                    <h3 className="text-lg sm:text-xl font-black text-[#081C3B] tracking-tight">
                      {PRODUCT_HIGHLIGHTS.applications.everyday.title}
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700">
                      {PRODUCT_HIGHLIGHTS.applications.everyday.items.map((item, idx) => {
                        const iconMap = [ShowerHead, WashingMachine, Flame, Utensils, Wrench, Grid2X2];
                        const ItemIcon = iconMap[idx] || Droplets;
                        return (
                          <li key={idx} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-md bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                              <ItemIcon className="w-3.5 h-3.5" strokeWidth={2.2} />
                            </div>
                            <div className="leading-snug">
                              <strong className="text-slate-900 font-bold">{item.name}:</strong>{' '}
                              <span className="text-slate-600">{item.description}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Bottom Right Decoration */}
                  <img
                    src="/images/solutions/card3_wave.png"
                    alt=""
                    className="absolute bottom-0 right-0 w-28 sm:w-32 pointer-events-none select-none opacity-85 z-0"
                    loading="lazy"
                  />
                </div>

              </div>
            </AnimatedSection>

          </div>

        </div>
      </section>

      {/* 5. SERVICES OVERVIEW - id="services" */}
      <section id="services" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-3.5 sm:space-y-4">
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
                Reliable Technical Support
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
                Comprehensive Services & AMC
              </h2>
              <p className="text-slate-600 text-sm mt-0.5 max-w-none lg:whitespace-nowrap">
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
      <section id="benefits" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-3.5 sm:space-y-4">
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="relative bg-gradient-to-br from-white via-sky-50/20 to-white rounded-3xl p-5 sm:p-6 lg:p-7 border border-sky-100/90 shadow-xl shadow-sky-950/5 overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

            {/* Header Area */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 sm:pb-5 border-b border-slate-100">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0070cc] animate-pulse" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#0070cc]">
                    PROVEN SYSTEM ADVANTAGES
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#081C3B] tracking-tight">
                  Bounten Water Softener Key Benefits
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Advanced Non-Chemical Electrolysis Technology for Scale-Free Living Across Your Entire Home.
                </p>
              </div>

              <Link
                to="/benefits"
                className="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-[#0066cc] to-[#0099ff] hover:from-[#0055b3] hover:to-[#0088ee] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all group flex-shrink-0 self-start md:self-auto"
              >
                <span>View Full Benefits & Technology Guide</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 6 Creative & Premium Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-5 relative z-10">
              {KEY_BENEFITS_DATA.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="relative bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden flex flex-col justify-between"
                  >
                    {/* Hover Ambient Corner Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-100/50 via-sky-50/20 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="space-y-2.5 relative z-10">
                      {/* Icon + Badge Row */}
                      <div className="flex items-center justify-between gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.iconGradient} text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <IconComponent className="w-5 h-5" strokeWidth={2.2} />
                        </div>
                        <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor} shadow-2xs`}>
                          {item.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-sm sm:text-base font-bold text-[#081C3B] group-hover:text-[#0070cc] transition-colors leading-snug tracking-tight">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Result Highlight */}
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-700 relative z-10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{item.highlight}</span>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </AnimatedSection>

        {/* 3-CARD QUALITY, WARRANTY & STANDARDS SHOWCASE */}
        <AnimatedSection animation="fade-up" delay={150} duration={800}>
          <div className="relative py-2 sm:py-3 overflow-hidden">
            
            {/* Ambient Water Wave Background Ribbons */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-50/60 via-blue-50/40 to-sky-50/60 pointer-events-none rounded-3xl" />
            
            {/* Top Wave Ribbon SVG */}
            <div className="absolute top-0 left-0 right-0 h-10 overflow-hidden pointer-events-none opacity-40">
              <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full text-sky-300 fill-current">
                <path d="M0,0 C300,45 600,-25 900,30 C1050,55 1150,20 1200,0 L1200,0 L0,0 Z" />
              </svg>
            </div>

            {/* Bottom Wave Ribbon SVG */}
            <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden pointer-events-none opacity-40">
              <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full text-sky-300 fill-current">
                <path d="M0,60 C300,15 600,85 900,30 C1050,5 1150,40 1200,60 L1200,60 L0,60 Z" />
              </svg>
            </div>

            {/* 3 Symmetrical Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4.5 relative z-10 p-1 sm:p-2">
              
              {/* Card 1: Warranty Assurance */}
              <div className="bg-white rounded-3xl border border-sky-100/90 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 overflow-hidden relative group p-5 sm:p-6 flex flex-col justify-between min-h-[260px] sm:min-h-[280px]">
                
                {/* Content on Left */}
                <div className="w-[54%] sm:w-[52%] z-10 relative flex flex-col justify-between h-full space-y-2 sm:space-y-3">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#0099ff] text-white flex items-center justify-center shadow-md flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" strokeWidth={2.4} />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs font-black text-[#0070cc] tracking-wider uppercase block leading-tight">
                        WARRANTY
                      </span>
                      <span className="text-[11px] sm:text-xs font-black text-[#0070cc] tracking-wider uppercase block leading-tight">
                        ASSURANCE
                      </span>
                      <span className="w-6 h-0.5 bg-[#0070cc] rounded-full block mt-0.5" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-base sm:text-lg font-black text-[#081C3B] leading-tight tracking-tight mt-1">
                    Unconditional<br />Manufacturer<br />Warranty
                  </h3>

                  {/* Bullets */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full border border-sky-400 bg-sky-50 text-[#0070cc] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight">
                        1-Year Unconditional on Descalers & Electrolytic.
                      </span>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full border border-sky-400 bg-sky-50 text-[#0070cc] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight">
                        5-Year Unconditional on Electrodes.
                      </span>
                    </div>
                  </div>

                </div>

                {/* Right Integrated Visual */}
                <div className="absolute right-0 top-0 bottom-0 w-[49%] sm:w-[50%] h-full pointer-events-none select-none overflow-hidden z-0 flex items-center justify-end">
                  <img
                    src="/images/warranty/warranty_shield.png"
                    alt="Unconditional Manufacturer Warranty Shield"
                    className="w-full h-full object-cover object-right transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

              </div>

              {/* Card 2: Water Quality Compatibility */}
              <div className="bg-white rounded-3xl border border-sky-100/90 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 overflow-hidden relative group p-5 sm:p-6 flex flex-col justify-between min-h-[260px] sm:min-h-[280px]">
                
                {/* Content on Left */}
                <div className="w-[54%] sm:w-[52%] z-10 relative flex flex-col justify-between h-full space-y-2 sm:space-y-3">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#06b6d4] text-white flex items-center justify-center shadow-md flex-shrink-0">
                      <Droplet className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs font-black text-[#0070cc] tracking-wider uppercase block leading-tight">
                        WATER QUALITY
                      </span>
                      <span className="text-[11px] sm:text-xs font-black text-[#0070cc] tracking-wider uppercase block leading-tight">
                        COMPATIBILITY
                      </span>
                      <span className="w-6 h-0.5 bg-[#00b4d8] rounded-full block mt-0.5" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-base sm:text-lg font-black text-[#081C3B] leading-tight tracking-tight mt-1">
                    Input TDS up to<br />
                    <span className="text-[#0070cc] text-lg sm:text-xl font-black">1,999 ppm</span>
                  </h3>

                  {/* Bullets */}
                  <div className="pt-1">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full border border-teal-400 bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-700 leading-snug">
                        Works with water TDS up to 1,999 ppm. For TDS above 2,000 ppm, backwashing is recommended.
                      </span>
                    </div>
                  </div>

                </div>

                {/* Right Integrated Visual */}
                <div className="absolute right-0 top-0 bottom-0 w-[49%] sm:w-[50%] h-full pointer-events-none select-none overflow-hidden z-0 flex items-center justify-end">
                  <img
                    src="/images/warranty/water_splash.png"
                    alt="Water Quality Compatibility Splash"
                    className="w-full h-full object-cover object-right transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

              </div>

              {/* Card 3: Standards & Materials */}
              <div className="bg-white rounded-3xl border border-sky-100/90 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 overflow-hidden relative group p-5 sm:p-6 flex flex-col justify-between min-h-[260px] sm:min-h-[280px]">
                
                {/* Content on Left */}
                <div className="w-[54%] sm:w-[52%] z-10 relative flex flex-col justify-between h-full space-y-2 sm:space-y-3">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white flex items-center justify-center shadow-md flex-shrink-0">
                      <Layers className="w-5 h-5" strokeWidth={2.4} />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs font-black text-[#0070cc] tracking-wider uppercase block leading-tight">
                        STANDARDS &
                      </span>
                      <span className="text-[11px] sm:text-xs font-black text-[#0070cc] tracking-wider uppercase block leading-tight">
                        MATERIALS
                      </span>
                      <span className="w-6 h-0.5 bg-[#f59e0b] rounded-full block mt-0.5" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-base sm:text-lg font-black text-[#081C3B] leading-tight tracking-tight mt-1">
                    ISO 9001 &<br />
                    ISO 14001
                  </h3>

                  {/* Bullets */}
                  <div className="pt-1">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full border border-amber-400 bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-700 leading-snug">
                        Food-grade materials ensure stainless steel. Non-toxic, safe for drinking lines and skin contact.
                      </span>
                    </div>
                  </div>

                </div>

                {/* Right Integrated Visual */}
                <div className="absolute right-0 top-0 bottom-0 w-[49%] sm:w-[50%] h-full pointer-events-none select-none overflow-hidden z-0 flex items-center justify-end">
                  <img
                    src="/images/warranty/stainless_steel_pipes.png"
                    alt="ISO Standards and Stainless Steel Materials"
                    className="w-full h-full object-cover object-right transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

              </div>

            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* 6. GALLERY PREVIEW - id="gallery" */}
      <section id="gallery" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-3.5 sm:space-y-4">
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
