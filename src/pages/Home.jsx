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
  PhoneCall
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { SOLUTIONS_DATA } from '../data/solutions';
import { SERVICES_DATA } from '../data/services';
import { GALLERY_ITEMS } from '../data/gallery';
import { COMPANY_CONFIG } from '../data/config';
import ProductCard from '../components/ProductCard';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openGeneralEnquiry, openWhatsApp } from '../utils/whatsapp';

export default function Home() {
  // Select top featured products for home page display
  const featuredProducts = PRODUCTS_DATA.slice(0, 4);

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

  const handleDownload = (url, fileName) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-slate-50/50 pt-8 sm:pt-16 pb-12 sm:pb-20 border-b border-slate-100">
        {/* Subtle decorative background water rings */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-sky-100/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Top Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-[#081C3B] font-bold text-xs uppercase tracking-wider py-1.5 px-3.5 rounded-full shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Zero Salt • Zero Maintenance • 15+ Year Lifespan</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#081C3B] tracking-tight leading-[1.12]">
                Advanced Salt-Free <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">
                  Water Softening Solutions
                </span>
              </h1>

              {/* Supporting Description based on original website */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                BOUNTEN engineers revolutionary electrolysis water treatment systems that eliminate hard water limescale without salt, chemicals, or water wastage. Safeguard your home plumbing, geysers, appliances, skin, and hair with permanent zero-maintenance technology.
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

              {/* Verified Trust Stats */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/70 max-w-2xl mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl font-black text-[#081C3B]">15,000+</div>
                  <div className="text-xs text-slate-500 font-medium">Installations</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Salt-Free</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-600">Zero</div>
                  <div className="text-xs text-slate-500 font-medium">Water Wastage</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-amber-600">15+ Yrs</div>
                  <div className="text-xs text-slate-500 font-medium">Core Durability</div>
                </div>
              </div>
            </div>

            {/* Right Product Showcase Hero Banner (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
                {/* Floating highlight tag */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Flagship Technology
                </div>

                {/* Hero Product Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                  <img
                    src="/images/products/zoftnor-max-w2.jpg"
                    alt="Bounten Zoftnor Max Easyfit Water Softener"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Feature highlight bullet bar */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm border-b border-slate-100 pb-2">
                    <span className="font-semibold text-slate-700">Technology:</span>
                    <span className="font-bold text-sky-700">Electrolytic Aragonite Conditioning</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-b border-slate-100 pb-2">
                    <span className="font-semibold text-slate-700">Maintenance:</span>
                    <span className="font-bold text-emerald-700">Zero Maintenance / No Salt Bags</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-700">Support:</span>
                    <span className="font-bold text-slate-800">PAN India Direct Dispatch & AMC</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Starting from</span>
                    <span className="text-xl font-black text-[#081C3B]">₹2,748 - ₹83,855</span>
                  </div>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors"
                  >
                    <span>View All Models</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT BOUNTEN SUMMARY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-sky-600">
                About Bounten Global
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
                Pioneering Non-Chemical Hard Water Treatment in India Since 2017
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Headquartered in Banjara Hills, Hyderabad, <strong>BOUNTEN</strong> (KCS Pride Products LLP) was founded to end the cycle of salt dependency and groundwater pollution caused by outdated water softeners. Our advanced Zoftnor systems treat hard water at a molecular level, preventing limescale encrustation while preserving vital healthy minerals like calcium and magnesium.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700 font-semibold">
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
                  <span>100% Retained Healthy Drinking Minerals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Certified PAN India Technical Network</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800"
                >
                  <span>Learn more about our company & technology</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 space-y-4 text-center">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#081C3B]">Our Quality Commitment</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every Bounten unit undergoes strict 10-bar hydraulic pressure validation, electrode calibration, and electrical safety testing before installation.
              </p>
              <div className="pt-2">
                <button
                  onClick={openGeneralEnquiry}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Consult an Expert</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR FEATURED PRODUCTS */}
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

      {/* 4. OUR SOLUTIONS (6 CARDS) */}
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

      {/* 5. BENEFITS & FEATURES */}
      <section id="benefits" className="bg-[#081C3B] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Why Zoftnor Is Superior
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Core Benefits of Bounten Technology
            </h2>
            <p className="text-slate-300 text-sm">
              Discover how Bounten replaces high-maintenance salt softeners with effortless, eco-friendly electrolytic mineral conditioning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Benefit 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Salt-Free Technology</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero salt refills required ever. No messy sodium bags to haul up overhead tanks, and no unhealthy sodium added to your household bathing and washing lines.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Zero-Maintenance Operation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fit-and-forget engineering. With solid-state electronics and high-durability reactor cells, you never have to worry about resin replacement or frequent valve breakdowns.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Eco-Friendly Water Treatment</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Conventional softeners dump thousands of litres of salty backwash effluent into municipal drains and soak pits. Bounten produces 0 litres of wastewater.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Extended Appliance Lifespan</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Safeguards heating elements in geysers, washing machines, and solar water heaters from calcification, slashing electricity consumption by up to 25%.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Cost-Effective Solutions</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Eliminates ongoing recurring expenditures of ₹8,000–₹15,000 per year on salt bags, filter cartridges, and plumbing descaling visits.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">PAN India Service Support</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Supported nationwide through our Hyderabad corporate base and regional distribution hubs, with trained on-site technicians and genuine spare parts.
              </p>
            </div>

          </div>
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
            className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <span className="inline-block text-[11px] font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">
                {service.badge}
              </span>
              <h3 className="text-lg font-bold text-[#081C3B]">
                {service.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {service.shortDescription}
              </p>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="text-xs font-bold text-sky-600 hover:text-sky-800 inline-flex items-center gap-1"
                >
                  <span>Read details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHY CHOOSE BOUNTEN? (VERIFIED METRICS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-900 to-[#081C3B] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Trusted by 15,000+ Customers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Indian Families & Industries Choose Bounten
            </h2>
            <p className="text-slate-300 text-sm">
              We stand apart through genuine technological innovation, rigorous engineering standards, and responsive nationwide service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="text-3xl font-black text-sky-400">18-Level</div>
              <h3 className="text-base font-bold text-white">Electrolytic Reaction</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Proprietary Mixed Metal Oxide (MMO) reaction chamber alters calcite molecular shape into non-stick Aragonite crystals.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="text-3xl font-black text-emerald-400">Zero Salt</div>
              <h3 className="text-base font-bold text-white">Zero Chemical Drain</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Preserves scarce freshwater reserves and protects lawns, gardens, and community groundwater recharge systems.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="text-3xl font-black text-amber-400">15+ Years</div>
              <h3 className="text-base font-bold text-white">Heavy-Duty SS 304</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Engineered with surgical-grade stainless steel to endure high pressure up to 10 Bar with zero rust or degradation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
              Real Installations & Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
              Gallery & Company Media
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Photographs from residential villa installations, manufacturing QA, water analysis labs, and industry awards.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryPreview.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className="group relative aspect-square rounded-xl overflow-hidden bg-slate-100 shadow-xs hover:shadow-md transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                <span className="text-[11px] font-semibold text-white line-clamp-1">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#081C3B] text-white p-8 sm:p-14 text-center border border-slate-800 shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-sky-400">
              Permanent Limescale Protection
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Transform Your Water Quality with Bounten.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Say goodbye to chalky tiles, choked geysers, hard water hair fall, and expensive recurring salt bills. Speak with our water experts today for the right system size for your property.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={openGeneralEnquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Talk to Our Experts</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

