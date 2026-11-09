import React, { useState, useEffect } from 'react';
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
  Award
} from 'lucide-react';
import { PRODUCTS_DATA, PRODUCT_HIGHLIGHTS } from '../data/products';
import { SOLUTIONS_DATA } from '../data/solutions';
import { SERVICES_DATA } from '../data/services';
import { GALLERY_ITEMS } from '../data/gallery';
import { ABOUT_DATA } from '../data/about';
import { COMPANY_CONFIG } from '../data/config';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
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
      <section id="home" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 relative overflow-hidden bg-slate-50 py-4 sm:py-10 lg:py-14 border-b border-slate-100">
        
        {/* RIGHT-TO-LEFT SLIDING BACKGROUND CAROUSEL */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="flex w-full h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${heroSlide * 100}%)` }}
          >
            {HERO_SLIDES.map((slide) => (
              <div key={slide.id} className="w-full h-full shrink-0 relative">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center md:object-[70%_center]"
                />
              </div>
            ))}
          </div>

          {/* Significantly Reduced White Fade so Images Are Rich & Vibrant */}
          {/* Desktop: Gentle soft mist on the left for text, completely transparent on center and right */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-white/65 via-white/25 to-transparent pointer-events-none" />
          {/* Mobile: Light transparent tint so images are clearly visible without heavy whiteout */}
          <div className="sm:hidden absolute inset-0 bg-white/30 pointer-events-none" />
          {/* Delicate bottom edge blend */}
          <div className="absolute bottom-0 inset-x-0 h-8 sm:h-10 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
        </div>

        {/* Content Container (Mobile-Optimized to Fit Screen Naturally) */}
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-2.5 sm:space-y-4 lg:space-y-5 text-left">
            <AnimatedSection animation="fade-right" duration={700}>
              {/* Trust Tag with animated pulse */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md border border-sky-200/90 text-[#081C3B] font-bold text-[10px] sm:text-xs uppercase tracking-wider py-0.5 sm:py-1 px-2.5 sm:px-3.5 rounded-full shadow-xs hover:border-sky-400 transition-colors">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-sky-800 font-extrabold">Next-Gen Electrolysis</span>
                <span className="text-slate-300">•</span>
                <span>100% Salt-Free & Chemical-Free</span>
              </div>
            </AnimatedSection>

            {/* Main Headline */}
            <AnimatedSection animation="fade-right" delay={100} duration={800}>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-[#081C3B] tracking-tight leading-[1.15]">
                Advanced Salt-Free <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-[#081C3B] bg-clip-text text-transparent">
                  Water Softeners
                </span>
                <span className="block text-sm sm:text-xl md:text-2xl lg:text-[24px] font-extrabold text-[#081C3B] mt-1 sm:mt-2">
                  Pure, Scale-Free Living for Homes & Businesses
                </span>
              </h1>

              {/* Subtitle / Value proposition */}
              <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm md:text-base font-bold text-[#034078]">
                One Smart Solution. Zero Maintenance. Better Water for Everyday Living.
              </p>
            </AnimatedSection>

            {/* Action Buttons: Compact Grid on Mobile, Row on Desktop */}
            <AnimatedSection animation="fade-right" delay={200} duration={800}>
              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2 sm:gap-3">
                <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3">
                  <Link
                    to="/solutions"
                    className="btn-press inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#081C3B] hover:bg-[#0B2447] text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all group"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/products"
                    className="btn-press inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white hover:bg-sky-50/80 text-[#081C3B] border border-slate-200 hover:border-sky-300 px-3 sm:px-5 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all"
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

            {/* Key Trust Specifications: Compact on Mobile, Spacious on Desktop */}
            <AnimatedSection animation="fade-up" delay={400} duration={800}>
              <div className="pt-2 sm:pt-3 grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-3 border-t border-slate-200/80 max-w-3xl text-left">
                <div className="bg-white/85 backdrop-blur-xs p-1.5 sm:p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-slate-100 hover:border-sky-300 transition-colors shadow-2xs">
                  <div className="text-sm sm:text-base sm:text-lg font-black text-[#081C3B]">≤ 1,999 ppm</div>
                  <div className="text-[9px] sm:text-[11px] text-slate-500 font-medium">TDS Compatibility</div>
                </div>
                <div className="bg-white/85 backdrop-blur-xs p-1.5 sm:p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-slate-100 hover:border-emerald-300 transition-colors shadow-2xs">
                  <div className="text-sm sm:text-base sm:text-lg font-black text-emerald-600">5 Years</div>
                  <div className="text-[9px] sm:text-[11px] text-slate-500 font-medium">Electrode Warranty</div>
                </div>
                <div className="bg-white/85 backdrop-blur-xs p-1.5 sm:p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-slate-100 hover:border-sky-300 transition-colors shadow-2xs">
                  <div className="text-sm sm:text-base sm:text-lg font-black text-sky-600">Zero Refills</div>
                  <div className="text-[9px] sm:text-[11px] text-slate-500 font-medium">No Salt or Resin</div>
                </div>
                <div className="bg-white/85 backdrop-blur-xs p-1.5 sm:p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-slate-100 hover:border-amber-300 transition-colors shadow-2xs">
                  <div className="text-sm sm:text-base sm:text-lg font-black text-amber-600">SS 304</div>
                  <div className="text-[9px] sm:text-[11px] text-slate-500 font-medium">Food Grade Alloy</div>
                </div>
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

      {/* 2. ABOUT BOUNTEN SUMMARY SECTION - id="about" */}
      <section id="about" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover-lift transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-3.5">
                <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-sky-600">
                  About Bounten Global
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
                  Pioneering Non-Chemical Hard Water Treatment in India
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Headquartered in Banjara Hills, Hyderabad, <strong>BOUNTEN</strong> (KCS Pride Products LLP) was founded to end the cycle of salt dependency and groundwater pollution caused by outdated water softeners. Our advanced Zoftner systems treat hard water at a molecular level, preventing limescale encrustation while preserving vital healthy minerals like calcium and magnesium.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Food-Grade SS 304 Reactor Materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>0.06-Micron Iridium Mesh Technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>100% Retained Healthy Minerals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Certified PAN India Technical Network</span>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800 group"
                  >
                    <span>Learn more about our company & technology</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 space-y-3 text-center">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#081C3B]">Our Quality Commitment</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Every Bounten unit undergoes strict 10-bar hydraulic pressure validation, electrode calibration, and electrical safety testing before dispatch.
                </p>
                <div className="pt-1">
                  <button
                    onClick={openGeneralEnquiry}
                    className="btn-press w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2 px-3.5 rounded-xl text-xs font-bold transition-all shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Consult an Expert</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 3. PRODUCT SERIES CATEGORIES OVERVIEW - id="products" */}
      <section id="products" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Product Series Categories Overview */}
        <div className="space-y-4">
          <AnimatedSection animation="fade-up" duration={700}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="space-y-1">
                <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
                  Product Series
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
                  Two Distinct Series. Tailored to Your Water Setup.
                </h2>
                <p className="text-slate-600 text-sm mt-0.5 lg:whitespace-nowrap">
                  Choose between integrated pre-stage bag filtration or direct streamlined inline descaling.
                </p>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800 self-start sm:self-auto group flex-shrink-0"
              >
                <span>View Full Catalogue ({PRODUCTS_DATA.length})</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Categories Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Category 1 Card: Zoftner Pro */}
            <AnimatedSection animation="fade-right" delay={100} duration={800}>
              <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-sky-200/80 shadow-md hover-lift shine-sweep transition-all duration-500 flex flex-col justify-between space-y-5 h-full">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-end">
                    <span className="text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                      {PRODUCTS_DATA.filter((p) => p.category === 'Zoftner Pro').length} Models Available
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#081C3B]">
                      Zoftner Pro
                    </h3>
                    <p className="text-sm font-semibold text-emerald-700 mt-1">
                      All models come with a bag filter.
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Engineered for households and commercial spaces seeking complete scale prevention along with heavy sediment, silt, and turbidity filtration in one integrated package.
                  </p>

                  <ul className="space-y-2 text-xs text-slate-700 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Integrated washable high-efficiency bag filter</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Resin-Free | Salt-Free | Chemical-Free Electrolysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>1-Year Body & 5-Year Electrode Unconditional Warranty</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/products?cat=Zoftner+Pro"
                  className="btn-press w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-3 px-4 rounded-xl font-bold text-xs transition-colors shadow-sm"
                >
                  <span>Explore Zoftner Pro Models</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Category 2 Card: Zoftner Quick Fix */}
            <AnimatedSection animation="fade-left" delay={200} duration={800}>
              <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-slate-200 shadow-md hover-lift shine-sweep transition-all duration-500 flex flex-col justify-between space-y-5 h-full">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-end">
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      {PRODUCTS_DATA.filter((p) => p.category === 'Zoftner Quick Fix').length} Models Available
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#081C3B]">
                      Zoftner Quick Fix
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 mt-1">
                      All models come without a bag filter.
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Streamlined, compact electrolytic conditioners and appliance descalers designed for direct inline plumbing connections where pre-filtration is already present.
                  </p>

                  <ul className="space-y-2 text-xs text-slate-700 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      <span>Fast, direct inline connection without bag housing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      <span>Resin-Free | Salt-Free | Chemical-Free Electrolysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      <span>1-Year Body & 5-Year Electrode Unconditional Warranty</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/products?cat=Zoftner+Quick+Fix"
                  className="btn-press w-full inline-flex items-center justify-center gap-2 bg-[#081C3B] hover:bg-[#0B2447] text-white py-3 px-4 rounded-xl font-bold text-xs transition-colors shadow-sm"
                >
                  <span>Explore Zoftner Quick Fix Models</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

          </div>
        </div>

      </section>

      {/* 4. WATER SOFTENER - APPLICATIONS & USES (Right below Product Series, No Fade) - id="solutions" */}
      <section id="solutions" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
              Applications & Uses
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
              {PRODUCT_HIGHLIGHTS.applications.title}
            </h2>
            <p className="text-slate-600 text-sm mt-0.5 lg:whitespace-nowrap">
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
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover-lift transition-all space-y-3 h-full flex flex-col justify-between">
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
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover-lift transition-all space-y-3 h-full flex flex-col justify-between">
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
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover-lift transition-all space-y-3 h-full flex flex-col justify-between">
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
      <section id="services" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
                Reliable Technical Support
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
                Comprehensive Services & AMC
              </h2>
              <p className="text-slate-600 text-sm mt-0.5 lg:whitespace-nowrap">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES_DATA.map((service, idx) => (
            <AnimatedSection key={service.id} animation="fade-up" delay={idx * 100} duration={600}>
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover-lift transition-all duration-400 flex flex-col justify-between space-y-3.5 h-full">
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
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 5. BOUNTEN WATER SOFTENER BENEFITS - id="benefits" */}
      <section id="benefits" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
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
                1-Year Unconditional on Cabinet & Electricals.<br />
                5-Year Unconditional on Electrode.
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
      <section id="gallery" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
                Field Installations
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
                Real Installations Across India
              </h2>
              <p className="text-slate-600 text-sm mt-0.5 lg:whitespace-nowrap">
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
      </section>

    </div>
  );
}
