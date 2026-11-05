import React from 'react';
import { Link } from 'react-router-dom';
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
  ShowerHead,
  Shirt,
  Flame,
  UtensilsCrossed,
  Pipette,
  Layers
} from 'lucide-react';
import { PRODUCTS_DATA, PRODUCT_HIGHLIGHTS } from '../data/products';
import { SOLUTIONS_DATA } from '../data/solutions';
import { SERVICES_DATA } from '../data/services';
import { GALLERY_ITEMS } from '../data/gallery';
import { COMPANY_CONFIG } from '../data/config';
import ProductCard from '../components/ProductCard';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openGeneralEnquiry } from '../utils/whatsapp';

export default function Home() {
  // Top featured products (show 2 from Zoftner Pro, 2 from Zoftner Quick Fix)
  const proFeatured = PRODUCTS_DATA.filter((p) => p.category === 'Zoftner Pro').slice(0, 2);
  const quickFixFeatured = PRODUCTS_DATA.filter((p) => p.category === 'Zoftner Quick Fix').slice(0, 2);
  const featuredProducts = [...proFeatured, ...quickFixFeatured];

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
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 pt-8 sm:pt-16 pb-12 sm:pb-20 border-b border-slate-100">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-sky-100/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-[#081C3B] font-bold text-xs uppercase tracking-wider py-1.5 px-3.5 rounded-full shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Resin-Free | Salt-Free | Chemical-Free</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#081C3B] tracking-tight leading-[1.12]">
                One Smart Solution. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-900 bg-clip-text text-transparent">
                  Multiple Applications.
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-700 mt-2">
                  Better Water for Everyday Living.
                </span>
              </h1>

              {/* Supporting Technology Description */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {PRODUCT_HIGHLIGHTS.technology} BOUNTEN restructures hard minerals into soft, non-adherent crystals—protecting pipes, geysers, appliances, skin, and hair with zero salt refills, zero chemicals, and zero water wastage.
              </p>

              {/* Two CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#081C3B] hover:bg-[#0B2447] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <button
                  onClick={openGeneralEnquiry}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Contact on WhatsApp</span>
                </button>
              </div>

              {/* Key Trust Specifications */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/70 max-w-2xl mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-xl font-black text-[#081C3B]">≤ 1,999 ppm</div>
                  <div className="text-xs text-slate-500 font-medium">TDS Compatibility</div>
                </div>
                <div>
                  <div className="text-xl font-black text-emerald-600">5 Years</div>
                  <div className="text-xs text-slate-500 font-medium">Electrode Warranty</div>
                </div>
                <div>
                  <div className="text-xl font-black text-sky-600">1 Year</div>
                  <div className="text-xs text-slate-500 font-medium">Cabinet Warranty</div>
                </div>
                <div>
                  <div className="text-xl font-black text-amber-600">SS304</div>
                  <div className="text-xs text-slate-500 font-medium">Food Grade Alloy</div>
                </div>
              </div>
            </div>

            {/* Right Showcase Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    ISO 9001 & ISO 14001
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Salt-Free
                  </span>
                </div>

                {/* Hero Product Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                  <img
                    src="/images/products/zoftnor-pro-w2.jpg"
                    alt="Bounten Zoftner Water Softener"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Quick Specs Table */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500 font-medium">Product Categories:</span>
                    <span className="font-bold text-[#081C3B]">Zoftner Pro & Quick Fix</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500 font-medium">Water Quality:</span>
                    <span className="font-bold text-sky-700">TDS up to 1,999 ppm</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500 font-medium">Warranty Assurance:</span>
                    <span className="font-bold text-emerald-700">1-Yr Body | 5-Yr Electrode</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Core Material:</span>
                    <span className="font-bold text-slate-800">Food Grade SS304</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/products"
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-bold text-xs transition-colors shadow-xs"
                  >
                    <span>View All Models ({PRODUCTS_DATA.length})</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TWO CATEGORIES SHOWCASE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Product Categories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
            Two Distinct Series. Tailored to Your Water Setup.
          </h2>
          <p className="text-slate-600 text-sm">
            Choose between integrated pre-stage bag filtration or direct streamlined inline descaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Category 1 Card: Zoftner Pro */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-sky-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-emerald-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>With Bag Filter</span>
                </span>
                <span className="text-xs font-bold text-sky-600">
                  {PRODUCTS_DATA.filter((p) => p.category === 'Zoftner Pro').length} Models Available
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#081C3B]">
                  Zoftner Pro
                </h3>
                <p className="text-sm font-semibold text-emerald-700 mt-1">
                  All models come with a bag filter.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
              className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-3 px-4 rounded-xl font-bold text-xs transition-colors shadow-xs"
            >
              <span>Explore Zoftner Pro Models</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Category 2 Card: Zoftner Quick Fix */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-slate-800 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  Without Bag Filter
                </span>
                <span className="text-xs font-bold text-slate-600">
                  {PRODUCTS_DATA.filter((p) => p.category === 'Zoftner Quick Fix').length} Models Available
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#081C3B]">
                  Zoftner Quick Fix
                </h3>
                <p className="text-sm font-semibold text-slate-700 mt-1">
                  All models come without a bag filter.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
              className="w-full inline-flex items-center justify-center gap-2 bg-[#081C3B] hover:bg-[#0B2447] text-white py-3 px-4 rounded-xl font-bold text-xs transition-colors shadow-xs"
            >
              <span>Explore Zoftner Quick Fix Models</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (4 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
              Our Products
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
              Featured Water Softening Systems
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Engineered for residential apartments, villas, and commercial properties. Direct WhatsApp enquiry without checkout friction.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800 self-start sm:self-auto"
          >
            <span>View All Products ({PRODUCTS_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. WATER SOFTENER - APPLICATIONS & USES (USER REQUESTED SECTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Water Softener
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#081C3B]">
            {PRODUCT_HIGHLIGHTS.applications.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            {PRODUCT_HIGHLIGHTS.applications.subtitle}
          </p>
        </div>

        {/* 3 Columns: Residential, Commercial, Everyday */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Residential */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-md">
              <HomeIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#081C3B]">
              {PRODUCT_HIGHLIGHTS.applications.residential.title}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {PRODUCT_HIGHLIGHTS.applications.residential.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#081C3B]">
              {PRODUCT_HIGHLIGHTS.applications.commercial.title}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {PRODUCT_HIGHLIGHTS.applications.commercial.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Everyday Applications */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#081C3B]">
              {PRODUCT_HIGHLIGHTS.applications.everyday.title}
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
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

        {/* 4. KEY BENEFITS ROW */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#081C3B]">
              {PRODUCT_HIGHLIGHTS.applications.keyBenefits.title}
            </h3>
            <span className="text-xs font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded-full w-fit">
              Resin-Free | Salt-Free | Chemical-Free
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {PRODUCT_HIGHLIGHTS.applications.keyBenefits.items.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800"
              >
                <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  ✓
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WARRANTY & TDS BAR */}
        <div className="bg-gradient-to-r from-[#081C3B] via-slate-900 to-[#081C3B] text-white p-6 sm:p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-1">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block">
              Warranty Assurance
            </span>
            <h4 className="text-base font-bold text-white">Unconditional Manufacturer Warranty</h4>
            <p className="text-xs text-slate-300">
              1-Year Unconditional on Cabinet & Electricals.<br />
              5-Year Unconditional on Electrode.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-sky-400 font-bold text-xs uppercase tracking-wider block">
              Water Quality Compatibility
            </span>
            <h4 className="text-base font-bold text-white">Input TDS up to 1,999 ppm</h4>
            <p className="text-xs text-slate-300">
              Works with water TDS up to 1,999 ppm. For TDS above 2,000 ppm, backwashing is recommended.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">
              Standards & Materials
            </span>
            <h4 className="text-base font-bold text-white">ISO 9001 & ISO 14001</h4>
            <p className="text-xs text-slate-300">
              Food grade material: SS304 stainless steel. Non-toxic, safe for drinking lines and skin contact.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS OVERVIEW (SECTOR CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
            Tailored Applications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
            Water Solutions for Every Sector
          </h2>
          <p className="text-slate-600 text-sm">
            Whether for your home overhead tank, commercial cooling loops, agricultural drip lines, or hotel facilities, Bounten delivers customized flow capacities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS_DATA.map((solution) => {
            const Icon = solutionIcons[solution.id] || Droplets;
            return (
              <div
                key={solution.id}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Solution Image */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <span className="w-8 h-8 rounded-lg bg-sky-500/90 backdrop-blur-md flex items-center justify-center text-white">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="font-bold text-base text-white">
                      {solution.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {solution.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">Suitable For: </span>
                      {solution.applications.slice(0, 2).join(", ")}
                    </div>

                    <Link
                      to={`/solutions#${solution.id}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 py-2.5 px-3 rounded-xl font-bold text-xs transition-colors"
                    >
                      <span>Explore More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
              Reliable Technical Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
              Comprehensive Services & AMC
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              From site feasibility inspections to professional installation, electronics synchronization, and Annual Maintenance Contracts.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800 self-start sm:self-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Wrench className="w-6 h-6" />
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
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
              Field Installations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
              Real Installations Across India
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Take a look at Bounten water softeners installed in residential apartments, luxury villas, gated communities, and commercial spaces.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800 self-start sm:self-auto"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryPreview.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                <span className="text-white text-[11px] font-semibold line-clamp-2">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
