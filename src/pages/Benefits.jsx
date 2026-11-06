import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Zap,
  Droplets,
  CheckCircle2,
  Award,
  Clock,
  Sparkles,
  Home as HomeIcon,
  Building2,
  PhoneCall,
  Check,
  Layers,
  Wrench,
  Activity,
  Heart,
  ChevronRight,
  TrendingDown
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { COMPANY_CONFIG } from '../data/config';
import { openGeneralEnquiry, formatINR } from '../utils/whatsapp';

export default function Benefits() {
  const priceListData = [
    {
      category: "With Bag Filter (Zoftner Pro)",
      badge: "WITH BAG FILTER",
      badgeColor: "bg-emerald-600 text-white",
      models: [
        { model: "W1", name: "Zoftner Pro", price: 74865, capacity: "500 - 1500 LPH" },
        { model: "W2", name: "Zoftner Pro", price: 80445, capacity: "1500 - 2500 LPH" },
        { model: "W3", name: "Zoftner Pro", price: 85715, capacity: "2500 - 3500 LPH" },
        { model: "W4", name: "Zoftner Pro", price: 93465, capacity: "2500 - 3500 LPH" },
        { model: "W5", name: "Zoftner Pro", price: 103655, capacity: "2500 - 3500 LPH" },
        { model: "W6", name: "Zoftner Pro", price: 111655, capacity: "2500 - 3500 LPH" },
      ]
    },
    {
      category: "Without Bag Filter (Zoftner Quick Fix)",
      badge: "WITHOUT BAG FILTER",
      badgeColor: "bg-slate-700 text-white",
      models: [
        { model: "W1", name: "Zoftner Quick Fix", price: 41695, capacity: "500 - 1500 LPH" },
        { model: "W2", name: "Zoftner Quick Fix", price: 47275, capacity: "1500 - 2500 LPH" },
        { model: "W3", name: "Zoftner Quick Fix", price: 52545, capacity: "2500 - 3500 LPH" },
        { model: "W4", name: "Zoftner Quick Fix", price: 58745, capacity: "2500 - 3500 LPH" },
        { model: "W5", name: "Zoftner Quick Fix", price: 76415, capacity: "2500 - 3500 LPH" },
        { model: "W6", name: "Zoftner Quick Fix", price: 77965, capacity: "2500 - 3500 LPH" },
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Page Breadcrumb & Header */}
        <div className="space-y-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800">Benefits & Technology</span>
          </nav>

          <AnimatedSection animation="fade-up" duration={600}>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                Comprehensive Technology & Value Guide
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#081C3B] tracking-tight">
                Bounten Water Softener Benefits
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Advanced Electrolysis Technology for Soft, Healthy & Scale-Free Living. Explore our complete engineering specifications, maintenance details, and model pricing below.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* ============================================================== */}
        {/* SECTION 1: BOUNTEN PRO WATER SOFTENER (Image 1 Data) */}
        {/* ============================================================== */}
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-8 lg:p-10 space-y-8">
            
            {/* 1. Image Container */}
            <div className="space-y-2">
              <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm flex items-center justify-center overflow-hidden">
                <img
                  src="/images/benefits/bounten-pro-technology.jpg"
                  alt="Bounten Pro Water Softener Technology and Maintenance"
                  className="max-h-[520px] w-auto object-contain rounded-xl drop-shadow-sm"
                />
              </div>
              <p className="text-center text-[11px] text-slate-500 font-medium">
                Figure 1: Bounten Pro Water Softener Architecture & Maintenance Overview
              </p>
            </div>

            {/* 2. Structured Text and Data Under Image 1 */}
            <div className="space-y-6 pt-2 border-t border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#081C3B]">
                    BOUNTEN PRO WATER SOFTENER
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-sky-700">
                    Advanced Electrolysis Technology for Soft, Healthy & Scale-Free Living
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                    100% CHEMICAL FREE
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                    100% SALT FREE
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                    100% RESIN FREE
                  </span>
                </div>
              </div>

              {/* Advanced Electrolysis Technology Box */}
              <div className="bg-sky-50/70 rounded-2xl p-5 border border-sky-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-900 font-extrabold text-sm sm:text-base">
                  <Zap className="w-5 h-5 text-sky-600" />
                  <span>ADVANCED ELECTROLYSIS TECHNOLOGY</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  The Bounten Pro Water Softener, like Tyent Water Ionizer, operates using the principle of electrolysis. Unlike conventional water softeners, it does not require resin, salt, or chemicals, making it a <strong>100% resin-free, salt-free, and chemical-free</strong> water softening solution.
                </p>
              </div>

              {/* Maintenance Guidelines Grid */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#081C3B] font-extrabold text-sm sm:text-base">
                  <Wrench className="w-5 h-5 text-amber-600" />
                  <span>OPERATIONAL MAINTENANCE GUIDELINES</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block font-bold">• Titanium Electrode Cleaning:</strong>
                    <span>Clean the titanium electrode after every <strong>150 hours</strong> of operation.</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block font-bold">• Operating Hours Calculation:</strong>
                    <span>The operating hours are calculated based on the <strong>motor</strong> that pumps water to the overhead tank.</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block font-bold">• Normal Water Conditions:</strong>
                    <span>Under normal water conditions, backwashing is generally <strong>not required</strong>.</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block font-bold">• High TDS / Water Hardness (&gt; 2,000 ppm):</strong>
                    <span>For applications with very high TDS or water hardness above <strong>2000 ppm</strong>, periodic backwashing is recommended to facilitate easier cleaning and maintain optimal performance.</span>
                  </div>
                </div>
              </div>

              {/* Warranty Guarantee */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/70 p-4 sm:p-5 rounded-2xl border border-emerald-300 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-emerald-600 text-white flex flex-col items-center justify-center font-black flex-shrink-0 shadow-md">
                    <span className="text-2xl leading-none">1</span>
                    <span className="text-[10px] uppercase font-bold">Year</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950 text-sm">WARRANTY ON BODY & ELECTRICAL COMPONENTS</h4>
                    <p className="text-xs text-emerald-800">Unconditional manufacturer warranty coverage.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-sky-50 to-sky-100/70 p-4 sm:p-5 rounded-2xl border border-sky-300 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-sky-600 text-white flex flex-col items-center justify-center font-black flex-shrink-0 shadow-md">
                    <span className="text-2xl leading-none">5</span>
                    <span className="text-[10px] uppercase font-bold">Years</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sky-950 text-sm">WARRANTY ON TITANIUM ELECTRODE</h4>
                    <p className="text-xs text-sky-800">Industry-leading core conditioning element warranty.</p>
                  </div>
                </div>
              </div>

              {/* 5 Core Feature Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2 text-center text-xs font-bold text-slate-800">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <span>SCALE PREVENTION</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <Droplets className="w-5 h-5 text-sky-600 mx-auto mb-1" />
                  <span>PROTECTS PLUMBING & APPLIANCES</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <Zap className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                  <span>ENERGY EFFICIENT</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <Wrench className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
                  <span>LOW MAINTENANCE</span>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <HomeIcon className="w-5 h-5 text-rose-600 mx-auto mb-1" />
                  <span>HOMES & COMMERCIALS</span>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>

        {/* ============================================================== */}
        {/* SECTION 2: BETTER WATER FOR BETTER LIVING (Image 2 Data) */}
        {/* ============================================================== */}
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-8 lg:p-10 space-y-8">
            
            {/* 1. Image Container */}
            <div className="space-y-2">
              <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm flex items-center justify-center overflow-hidden">
                <img
                  src="/images/benefits/better-water-better-living.jpg"
                  alt="Better Water for Better Living by Bounten"
                  className="max-h-[520px] w-auto object-contain rounded-xl drop-shadow-sm"
                />
              </div>
              <p className="text-center text-[11px] text-slate-500 font-medium">
                Figure 2: Whole-Home Water Protection & Hard Water Impact Analysis
              </p>
            </div>

            {/* 2. Structured Text and Data Under Image 2 */}
            <div className="space-y-6 pt-2 border-t border-slate-100">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#081C3B]">
                  Better Water for Better Living
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-sky-700">
                  Protect your home, your appliances and the people you love.
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>BOUNTEN ZOFTNER PRO</strong> is a first-of-its-kind water treatment solution powered with a breakthrough technology that redefines conventional water softening.
                </p>
                <p>
                  Unlike traditional systems that rely on salt, chemicals and recurring maintenance, Bounten's intelligent electrolysis-based solution delivers hard water protection through a smarter and maintenance-free approach.
                </p>
                <p>
                  Designed for complete home integration, including kitchen water lines, it preserves your appliances and enhances everyday living.
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="text-2xl sm:text-3xl font-black text-sky-600">11+</div>
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wide mt-1">Years of Excellence</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600">20,000+</div>
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wide mt-1">Homes Protected</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="text-2xl sm:text-3xl font-black text-amber-600">500+</div>
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wide mt-1">Hotels & Resorts</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="text-2xl sm:text-3xl font-black text-indigo-600">500 GPH</div>
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wide mt-1">High-Capacity Treatment</div>
                </div>
              </div>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
                <div className="bg-sky-50/70 p-4 rounded-xl border border-sky-200 space-y-1">
                  <h4 className="font-extrabold text-sky-900 text-sm">SALT-FREE TECHNOLOGY</h4>
                  <p className="text-slate-700">No salts, no chemicals, no hassle.</p>
                </div>
                <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 space-y-1">
                  <h4 className="font-extrabold text-emerald-900 text-sm">SMART & SAFE</h4>
                  <p className="text-slate-700">Protects your pipes and appliances from within.</p>
                </div>
                <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200 space-y-1">
                  <h4 className="font-extrabold text-amber-900 text-sm">ZERO MAINTENANCE</h4>
                  <p className="text-slate-700">No refills. No backwash. No ongoing cost.</p>
                </div>
                <div className="bg-teal-50/70 p-4 rounded-xl border border-teal-200 space-y-1">
                  <h4 className="font-extrabold text-teal-900 text-sm">ECO-FRIENDLY</h4>
                  <p className="text-slate-700">Conserves water. Kind to the planet.</p>
                </div>
              </div>

              {/* Hard Water Damage Reality */}
              <div className="bg-rose-50/60 p-5 rounded-2xl border border-rose-200 space-y-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-rose-950">
                    Hard water silently affects every part of your home.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1">
                    Hard water gradually leaves mineral deposits inside plumbing systems, appliances and fixtures, reducing efficiency, increasing maintenance and affecting everyday comfort.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-rose-100 space-y-1">
                    <strong className="text-rose-900 font-bold block">• Limescale Build-up:</strong>
                    <span>Clogs showerheads and reduces water flow.</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-rose-100 space-y-1">
                    <strong className="text-rose-900 font-bold block">• Reduced Efficiency:</strong>
                    <span>Appliances work harder and consume more energy.</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-rose-100 space-y-1">
                    <strong className="text-rose-900 font-bold block">• Shorter Appliance Life:</strong>
                    <span>Scale build-up reduces performance and appliance lifespan.</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-rose-100 space-y-1">
                    <strong className="text-rose-900 font-bold block">• Dry Skin & Hair:</strong>
                    <span>Hard water leaves skin dry and hair rough and lifeless.</span>
                  </div>
                </div>
              </div>

              {/* Smart Way Tagline */}
              <div className="bg-gradient-to-r from-[#081C3B] to-sky-900 text-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base">The smarter way to protect your home.</h4>
                  <p className="text-xs text-sky-200">Pure performance. Zero compromise.</p>
                </div>
                <span className="font-black text-sm uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-xl border border-white/20 whitespace-nowrap">
                  ZOFTNER PRO Intelligent Water Softener
                </span>
              </div>

            </div>
          </div>
        </AnimatedSection>

        {/* ============================================================== */}
        {/* SECTION 3: THE BOUNTEN DIFFERENCE (Image 3 Data) */}
        {/* ============================================================== */}
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-8 lg:p-10 space-y-8">
            
            {/* 1. Image Container */}
            <div className="space-y-2">
              <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm flex items-center justify-center overflow-hidden">
                <img
                  src="/images/benefits/bounten-difference.jpg"
                  alt="The Bounten Difference: 4-Step Process & Everyday Protection"
                  className="max-h-[520px] w-auto object-contain rounded-xl drop-shadow-sm"
                />
              </div>
              <p className="text-center text-[11px] text-slate-500 font-medium">
                Figure 3: The 4-Step Electrolysis Process & Comparative Protection Guide
              </p>
            </div>

            {/* 2. Structured Text and Data Under Image 3 */}
            <div className="space-y-6 pt-2 border-t border-slate-100">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#081C3B]">
                  THE BOUNTEN DIFFERENCE
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1">
                  Powered by intelligent electrolysis technology, <strong>ZOFTNER PRO</strong> conditions hardness minerals instead of relying on salt regeneration, providing long-term protection with zero maintenance.
                </p>
              </div>

              {/* 4-Step Process Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="bg-slate-900 text-white p-4 rounded-2xl space-y-2">
                  <div className="text-2xl font-black text-sky-400">01</div>
                  <h4 className="font-bold text-sm uppercase tracking-wide">FILTRATION</h4>
                  <p className="text-xs text-slate-300">
                    Helps remove visible sediment and protects the treatment system.
                  </p>
                </div>
                <div className="bg-sky-800 text-white p-4 rounded-2xl space-y-2">
                  <div className="text-2xl font-black text-sky-300">02</div>
                  <h4 className="font-bold text-sm uppercase tracking-wide">ELECTROLYSIS PROCESS</h4>
                  <p className="text-xs text-slate-200">
                    Advanced internal technology conditions hardness minerals at a molecular level.
                  </p>
                </div>
                <div className="bg-sky-600 text-white p-4 rounded-2xl space-y-2">
                  <div className="text-2xl font-black text-white">03</div>
                  <h4 className="font-bold text-sm uppercase tracking-wide">SCALE-CONTROL ACTION</h4>
                  <p className="text-xs text-sky-100">
                    Helps reduce mineral adhesion and prevents hard scale crystallization.
                  </p>
                </div>
                <div className="bg-sky-500 text-white p-4 rounded-2xl space-y-2">
                  <div className="text-2xl font-black text-white">04</div>
                  <h4 className="font-bold text-sm uppercase tracking-wide">TREATED WATER DISTRIBUTION</h4>
                  <p className="text-xs text-sky-100">
                    Delivers soft, non-scaling water across the selected home or facility network.
                  </p>
                </div>
              </div>

              {/* Why Choose Bounten Checklist */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-[#081C3B] text-base sm:text-lg">
                    WHY CHOOSE BOUNTEN?
                  </h3>
                  <span className="text-xs font-bold text-sky-700 bg-sky-100 px-3 py-0.5 rounded-full">
                    Intelligent Protection. Every Drop. Every Day.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Salt-Free Technology</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Chemical-Free Operation</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Zero Maintenance</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>No Water Wastage</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Whole-Home Water Protection</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Kitchen & Drinking Line Safe</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Smart Digital Service Indicator</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Professional Installation</span>
                  </div>
                </div>
              </div>

              {/* Everyday Benefits: Home, Appliances, Skin & Hair */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                    <HomeIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#081C3B] text-base">HOME & FITTINGS</h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span>Helps minimise scale formation on bathroom fittings</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span>Reduces stubborn mineral deposits across tiles & showers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#081C3B] text-base">APPLIANCES</h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Protects water-connected appliances from scale build-up</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Supports longer service life and reduces electricity consumption</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#081C3B] text-base">SKIN & HAIR</h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span>Supports softer-feeling, hydrated skin</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span>Helps minimise hair dryness, frizz, and roughness</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>

        {/* ============================================================== */}
        {/* SECTION 4: COMPLETE MODEL PRICE & CAPACITY LIST (Image 4 Data) */}
        {/* ============================================================== */}
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-8 lg:p-10 space-y-8">
            
            {/* 1. Image Container */}
            <div className="space-y-2">
              <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm flex items-center justify-center overflow-hidden">
                <img
                  src="/images/benefits/pricing-models.jpg"
                  alt="Bounten Water Softener Price List and Model Capacities"
                  className="max-h-[520px] w-auto object-contain rounded-xl drop-shadow-sm"
                />
              </div>
              <p className="text-center text-[11px] text-slate-500 font-medium">
                Figure 4: Complete Official Model Pricing & Flow Capacity Breakdown
              </p>
            </div>

            {/* 2. Structured Text and Data Under Image 4 */}
            <div className="space-y-6 pt-2 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#081C3B]">
                    OFFICIAL PRICE LIST & CAPACITY CHART
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-sky-700">
                    Premium Home & Commercial Water Softening Solutions
                  </p>
                </div>
                <span className="text-xs font-black bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full uppercase tracking-wider w-fit">
                  SPECIAL LAUNCH OFFER INCLUDED
                </span>
              </div>

              {/* Tables for With Bag Filter & Without Bag Filter */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {priceListData.map((group) => (
                  <div key={group.category} className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                    <div className="bg-slate-900 text-white p-3.5 flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm">{group.category}</span>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${group.badgeColor}`}>
                        {group.badge}
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200">
                          <tr>
                            <th className="py-2.5 px-3">Model</th>
                            <th className="py-2.5 px-3">Product Name</th>
                            <th className="py-2.5 px-3">MRP (INR)</th>
                            <th className="py-2.5 px-3">Capacity (L.P.H)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {group.models.map((item, idx) => (
                            <tr key={item.model} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                              <td className="py-2.5 px-3 font-bold text-sky-700">{item.model}</td>
                              <td className="py-2.5 px-3 font-semibold text-slate-800">{item.name}</td>
                              <td className="py-2.5 px-3 font-black text-[#081C3B] whitespace-nowrap">
                                {formatINR(item.price)}
                              </td>
                              <td className="py-2.5 px-3 text-slate-600 font-medium whitespace-nowrap">
                                {item.capacity}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              {/* Soft Water. Better Life. Healthier Home. */}
              <div className="bg-gradient-to-br from-sky-900 via-[#081C3B] to-slate-900 text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg">
                <div className="space-y-1.5 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl font-black">
                    SOFT WATER. BETTER LIFE. HEALTHIER HOME.
                  </h3>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-sky-200 font-medium pt-1">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 font-bold" /> Better for your family
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 font-bold" /> Better for your appliances
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 font-bold" /> Better for your lifestyle
                    </span>
                  </div>
                </div>

                <button
                  onClick={openGeneralEnquiry}
                  className="btn-press flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap flex-shrink-0"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Enquire on Pricing / Sizing</span>
                </button>
              </div>

            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
