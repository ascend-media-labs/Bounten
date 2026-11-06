import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  Wrench,
  Heart,
  ChevronRight,
  ChevronLeft,
  Check,
  X,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openGeneralEnquiry, formatINR } from '../utils/whatsapp';

export default function Benefits() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

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

  const leafletImages = [
    {
      src: "/images/benefits/bounten-pro-technology.jpg",
      title: "1. Technology & Maintenance",
      subtitle: "Bounten Pro Technology & Operation Guidelines"
    },
    {
      src: "/images/benefits/better-water-better-living.jpg",
      title: "2. Whole-Home Protection",
      subtitle: "Hard Water Impact & 20,000+ Homes Track Record"
    },
    {
      src: "/images/benefits/bounten-difference.jpg",
      title: "3. The Bounten Difference",
      subtitle: "4-Step Process & Multi-Application Benefits"
    },
    {
      src: "/images/benefits/pricing-models.jpg",
      title: "4. Official Model Price List",
      subtitle: "Complete Specifications & Capacity Pricing"
    }
  ];

  const currentIndex = selectedImage ? leafletImages.findIndex(img => img.src === selectedImage.src) : -1;

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedImage(leafletImages[currentIndex - 1]);
    } else {
      setSelectedImage(leafletImages[leafletImages.length - 1]);
    }
    setZoomLevel(1);
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    if (currentIndex < leafletImages.length - 1) {
      setSelectedImage(leafletImages[currentIndex + 1]);
    } else {
      setSelectedImage(leafletImages[0]);
    }
    setZoomLevel(1);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
        setZoomLevel(1);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, currentIndex]);

  return (
    <div className="bg-slate-50 min-h-screen py-3 sm:py-5">
      <div className="w-full max-w-[1380px] mx-auto px-3 sm:px-5 lg:px-6 space-y-6 sm:space-y-7">

        {/* Page Breadcrumb & Header */}
        <div className="space-y-2">
          <nav className="flex items-center space-x-1.5 text-xs text-slate-500">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-800">Benefits & Technology</span>
          </nav>

          <AnimatedSection animation="fade-up" duration={500}>
            <div className="text-center max-w-3xl mx-auto space-y-1.5 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-sky-100 text-sky-800 border border-sky-200">
                <Sparkles className="w-3 h-3 text-sky-600" />
                Comprehensive Technology & Value Guide
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#081C3B] tracking-tight">
                Bounten Water Softener Benefits
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                Advanced Electrolysis Technology for Soft, Healthy & Scale-Free Living. Explore our complete engineering specifications, maintenance details, operational guidelines, and model pricing below.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* ============================================================== */}
        {/* SECTION 1: BOUNTEN PRO WATER SOFTENER (Text & Data Only) */}
        {/* ============================================================== */}
        <AnimatedSection animation="fade-up" duration={600}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-7 space-y-5">
            
            {/* Header & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#081C3B]">
                  BOUNTEN PRO WATER SOFTENER
                </h2>
                <p className="text-xs sm:text-sm font-bold text-sky-700 mt-0.5">
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
            <div className="bg-sky-50/80 rounded-2xl p-5 sm:p-6 border border-sky-200 space-y-2.5">
              <div className="flex items-center gap-2 text-sky-950 font-black text-sm sm:text-base">
                <Zap className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <span>ADVANCED ELECTROLYSIS TECHNOLOGY</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                The Bounten Pro Water Softener, like Tyent Water Ionizer, operates using the principle of electrolysis. Unlike conventional water softeners, it does not require resin, salt, or chemicals, making it a <strong>100% resin-free, salt-free, and chemical-free</strong> water softening solution.
              </p>
            </div>

            {/* Maintenance Guidelines Grid */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#081C3B] font-black text-sm sm:text-base">
                <Wrench className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>OPERATIONAL MAINTENANCE GUIDELINES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-800">
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
                  <span>For applications with very high TDS or water hardness above <strong>2,000 ppm</strong>, periodic backwashing is recommended to facilitate easier cleaning and maintain optimal performance.</span>
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
                  <h4 className="font-extrabold text-emerald-950 text-sm">WARRANTY ON BODY & ELECTRICAL COMPONENTS</h4>
                  <p className="text-xs text-emerald-900 font-medium">Unconditional manufacturer warranty coverage.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-sky-100/70 p-4 sm:p-5 rounded-2xl border border-sky-300 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-sky-600 text-white flex flex-col items-center justify-center font-black flex-shrink-0 shadow-md">
                  <span className="text-2xl leading-none">5</span>
                  <span className="text-[10px] uppercase font-bold">Years</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-sky-950 text-sm">WARRANTY ON TITANIUM ELECTRODE</h4>
                  <p className="text-xs text-sky-900 font-medium">Industry-leading core conditioning element warranty.</p>
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

            {/* Soft Water. Better Living Bottom Bar */}
            <div className="bg-slate-900 text-white p-4 rounded-xl flex flex-wrap items-center justify-around gap-3 text-xs font-bold text-center">
              <span className="text-sky-300 font-black uppercase tracking-wider block sm:inline">
                SOFT WATER. BETTER LIVING:
              </span>
              <span>• Gentle on Skin & Hair</span>
              <span>• Longer Appliance Life</span>
              <span>• Reduces Scaling</span>
              <span>• Better Soap Efficiency</span>
            </div>

          </div>
        </AnimatedSection>

        {/* ============================================================== */}
        {/* SECTION 2: BETTER WATER FOR BETTER LIVING (Text & Data Only) */}
        {/* ============================================================== */}
        <AnimatedSection animation="fade-up" duration={600}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-7 space-y-5">
            
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#081C3B]">
                Better Water for Better Living
              </h2>
              <p className="text-xs sm:text-sm font-bold text-sky-700 mt-0.5">
                Protect your home, your appliances and the people you love.
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
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
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">Years of Excellence</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">20,000+</div>
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">Homes Protected</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-2xl sm:text-3xl font-black text-amber-600">500+</div>
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">Hotels & Resorts</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-2xl sm:text-3xl font-black text-indigo-600">500 GPH</div>
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">High-Capacity Treatment</div>
              </div>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
              <div className="bg-sky-50/80 p-4 rounded-xl border border-sky-200 space-y-1">
                <h4 className="font-black text-sky-950 text-sm">SALT-FREE TECHNOLOGY</h4>
                <p className="text-slate-800">No salts, no chemicals, no hassle.</p>
              </div>
              <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-200 space-y-1">
                <h4 className="font-black text-emerald-950 text-sm">SMART & SAFE</h4>
                <p className="text-slate-800">Protects your pipes and appliances from within.</p>
              </div>
              <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200 space-y-1">
                <h4 className="font-black text-amber-950 text-sm">ZERO MAINTENANCE</h4>
                <p className="text-slate-800">No refills. No backwash. No ongoing cost.</p>
              </div>
              <div className="bg-teal-50/80 p-4 rounded-xl border border-teal-200 space-y-1">
                <h4 className="font-black text-teal-950 text-sm">ECO-FRIENDLY</h4>
                <p className="text-slate-800">Conserves water. Kind to the planet.</p>
              </div>
            </div>

            {/* Hard Water Damage Reality */}
            <div className="bg-rose-50/70 p-5 rounded-2xl border border-rose-200 space-y-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-rose-950">
                  Hard water silently affects every part of your home.
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 mt-1 font-normal">
                  Hard water gradually leaves mineral deposits inside plumbing systems, appliances and fixtures, reducing efficiency, increasing maintenance and affecting everyday comfort.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-rose-200 space-y-1 shadow-xs">
                  <strong className="text-rose-900 font-bold block">• Limescale Build-up:</strong>
                  <span className="text-slate-800">Clogs showerheads and reduces water flow.</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-rose-200 space-y-1 shadow-xs">
                  <strong className="text-rose-900 font-bold block">• Reduced Efficiency:</strong>
                  <span className="text-slate-800">Appliances work harder and consume more energy.</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-rose-200 space-y-1 shadow-xs">
                  <strong className="text-rose-900 font-bold block">• Shorter Appliance Life:</strong>
                  <span className="text-slate-800">Scale build-up reduces performance and appliance lifespan.</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-rose-200 space-y-1 shadow-xs">
                  <strong className="text-rose-900 font-bold block">• Dry Skin & Hair:</strong>
                  <span className="text-slate-800">Hard water leaves skin dry and hair rough and lifeless.</span>
                </div>
              </div>
            </div>

            {/* Smart Way Tagline */}
            <div className="bg-gradient-to-r from-[#081C3B] to-sky-900 text-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
              <div>
                <h4 className="font-extrabold text-sm sm:text-base">The smarter way to protect your home.</h4>
                <p className="text-xs text-sky-200">Pure performance. Zero compromise.</p>
              </div>
              <span className="font-black text-sm uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-xl border border-white/20 whitespace-nowrap">
                ZOFTNER PRO Intelligent Water Softener
              </span>
            </div>

          </div>
        </AnimatedSection>

        {/* ============================================================== */}
        {/* SECTION 3: THE BOUNTEN DIFFERENCE (Text & Data Only) */}
        {/* ============================================================== */}
        <AnimatedSection animation="fade-up" duration={600}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-7 space-y-5">
            
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#081C3B]">
                THE BOUNTEN DIFFERENCE
              </h2>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed mt-1 font-normal">
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-black text-[#081C3B] text-base sm:text-lg">
                  WHY CHOOSE BOUNTEN?
                </h3>
                <span className="text-xs font-bold text-sky-700 bg-sky-100 px-3 py-0.5 rounded-full w-fit">
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
                <ul className="text-xs text-slate-800 space-y-1.5 pt-1">
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
                <ul className="text-xs text-slate-800 space-y-1.5 pt-1">
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
                <ul className="text-xs text-slate-800 space-y-1.5 pt-1">
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
        </AnimatedSection>

        {/* ============================================================== */}
        {/* SECTION 4: COMPLETE MODEL PRICE & CAPACITY LIST (Text & Data Only) */}
        {/* ============================================================== */}
        <AnimatedSection animation="fade-up" duration={600}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-7 space-y-5">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#081C3B]">
                  OFFICIAL PRICE LIST & CAPACITY CHART
                </h2>
                <p className="text-xs sm:text-sm font-bold text-sky-700 mt-0.5">
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
                      <thead className="bg-slate-100 text-slate-800 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200">
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
                            <td className="py-2.5 px-3 text-slate-700 font-medium whitespace-nowrap">
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

            {/* Soft Water. Better Life. Healthier Home. Action Banner */}
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
        </AnimatedSection>

        {/* ============================================================== */}
        {/* BOTTOM SECTION: 4 IMAGES IN SMALL SIZE HORIZONTAL ALIGNMENT */}
        {/* ============================================================== */}
        <AnimatedSection animation="fade-up" duration={600}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#081C3B]">
                  Official Reference Brochures & Leaflets
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Click any thumbnail to view full image in high resolution
                </p>
              </div>
              <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100 w-fit">
                4 Reference Posters
              </span>
            </div>

            {/* Horizontal 4-Column Grid of Small Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
              {leafletImages.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedImage(item);
                    setZoomLevel(1);
                  }}
                  className="group bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-sky-400 p-2.5 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer flex flex-col justify-between select-none"
                  title="Click to expand & view full size"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedImage(item);
                      setZoomLevel(1);
                    }
                  }}
                >
                  <div className="relative h-44 sm:h-52 w-full bg-white rounded-xl border border-slate-100 flex items-center justify-center overflow-hidden p-1.5">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xs pointer-events-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-900/15 group-hover:bg-slate-900/25 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                      <span className="bg-sky-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 transform group-hover:scale-105 transition-all">
                        <Maximize2 className="w-3.5 h-3.5 text-white" />
                        Expand
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 text-center pointer-events-none">
                    <p className="text-xs font-bold text-slate-800 group-hover:text-sky-600 transition-colors line-clamp-1">
                      {item.title}
                    </p>
                    <span className="text-[10px] text-slate-500 font-medium block truncate">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>

      {/* Lightbox Modal for Full Image Viewing with Zoom & Controls */}
      {selectedImage && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 select-none"
          onClick={() => {
            setSelectedImage(null);
            setZoomLevel(1);
          }}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white transition-all backdrop-blur-sm shadow-lg border border-white/10 focus:outline-none"
            aria-label="Previous image"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white transition-all backdrop-blur-sm shadow-lg border border-white/10 focus:outline-none"
            aria-label="Next image"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative w-full max-w-5xl max-h-[94vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-100 bg-slate-50/80 flex-shrink-0">
              <div className="flex-1 min-w-0 pr-3">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-sm sm:text-base text-[#081C3B] truncate">
                    {selectedImage.title}
                  </h4>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full flex-shrink-0">
                    {currentIndex + 1} of {leafletImages.length}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium truncate">
                  {selectedImage.subtitle}
                </p>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                {/* Zoom Out */}
                <button
                  onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.5))}
                  className="p-1.5 sm:p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-xs"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>

                {/* Zoom Percentage / Reset */}
                <button
                  onClick={() => setZoomLevel(1)}
                  className="px-2 py-1 text-xs font-semibold rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-xs"
                  title="Reset Zoom"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>

                {/* Zoom In */}
                <button
                  onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 3))}
                  className="p-1.5 sm:p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-xs"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                {/* Open Original */}
                <a
                  href={selectedImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-xs"
                  title="Open full resolution in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setZoomLevel(1);
                  }}
                  className="p-1.5 sm:p-2 rounded-lg bg-slate-900 hover:bg-red-600 text-white transition-colors shadow-xs ml-1"
                  aria-label="Close modal"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="flex-1 overflow-auto p-3 sm:p-4 flex items-center justify-center bg-slate-900/5 min-h-[50vh] max-h-[calc(94vh-80px)]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.2s ease-out'
                }}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-md"
                draggable={false}
              />
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
