import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  Filter,
  X,
  Sparkles,
  Zap,
  PhoneCall,
  CheckCircle2,
  FileDown,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Building2,
  ShowerHead,
  Shirt,
  Flame,
  UtensilsCrossed,
  Pipette,
  Layers,
  Award,
  Clock,
  Droplets,
  Check
} from 'lucide-react';
import { PRODUCTS_DATA, CATEGORIES, PRODUCT_HIGHLIGHTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openGeneralEnquiry } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../data/config';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Search, category, sort and pagination states
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('cat') || 'All Products');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Products per page for pagination
  const ITEMS_PER_PAGE = 6;

  // Sync category changes to page 1
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    if (category === 'All Products') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', category);
    }
    setSearchParams(searchParams);
    setIsMobileFilterOpen(false);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setCurrentPage(1);
    if (val.trim()) {
      searchParams.set('q', val);
    } else {
      searchParams.delete('q');
    }
    setSearchParams(searchParams);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Products');
    setSortBy('default');
    setCurrentPage(1);
    setSearchParams({});
  };

  // Filter & Sort Logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS_DATA];

    // 1. Category Filter
    if (selectedCategory && selectedCategory !== 'All Products') {
      result = result.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // 2. Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(q) ||
          product.shortDescription.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          (product.filterNote && product.filterNote.toLowerCase().includes(q))
      );
    }

    // 3. Sorting
    switch (sortBy) {
      case 'popularity':
        result.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        break;
      case 'latest':
        result.sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
        break;
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'default':
      default:
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // Pagination calculation
  const totalItems = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

  // Slice for current page
  const displayedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedProducts, currentPage]);

  // Adjust page if out of bounds
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  return (
    <div className="bg-slate-50/50 min-h-screen py-5 sm:py-8 space-y-6 sm:space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        
        {/* HERO BANNER: Suggested Catalogue Headline & Trust Badges */}
        <AnimatedSection animation="fade-down" duration={700}>
          <div className="bg-gradient-to-br from-[#081C3B] via-[#0B2447] to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 space-y-6 relative overflow-hidden">
            {/* Subtle background ambient glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 font-bold text-xs uppercase tracking-wider py-1.5 px-3.5 rounded-full shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span>Resin-Free | Salt-Free | Chemical-Free</span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-[1.15]">
                  Bounten Water Softening Systems
                </h1>

                {/* Side Heading / Catalogue Headline */}
                <div className="text-sm sm:text-base font-bold text-sky-300">
                  {PRODUCT_HIGHLIGHTS.headline}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {PRODUCT_HIGHLIGHTS.technology}
                </p>
              </div>

              {/* Quick WhatsApp consultation button */}
              <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  onClick={openGeneralEnquiry}
                  className="btn-press inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </button>
                <div className="text-center text-xs text-slate-400">
                  Direct WhatsApp: <strong className="text-white">{COMPANY_CONFIG.displayWhatsApp}</strong>
                </div>
              </div>
            </div>

            {/* Core Trust Specs Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-slate-700/60 text-xs relative z-10">
              <div className="bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10 flex items-center gap-2.5 hover:bg-white/10 transition-colors">
                <ShieldCheck className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase font-semibold">TDS Limit</span>
                  <span className="font-bold text-white">Up to 1,999 ppm</span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10 flex items-center gap-2.5 hover:bg-white/10 transition-colors">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase font-semibold">Warranty</span>
                  <span className="font-bold text-white">1-Yr Body | 5-Yr Electrode</span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10 flex items-center gap-2.5 hover:bg-white/10 transition-colors">
                <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase font-semibold">Certifications</span>
                  <span className="font-bold text-white">ISO 9001 & ISO 14001</span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10 flex items-center gap-2.5 hover:bg-white/10 transition-colors">
                <Droplets className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase font-semibold">Material Grade</span>
                  <span className="font-bold text-white">Food Grade SS304</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* TWO CATEGORIES SHOWCASE / SELECTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category 1: Zoftner Pro */}
          <AnimatedSection animation="fade-right" delay={100} duration={600}>
            <button
              onClick={() => handleCategorySelect("Zoftner Pro")}
              className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group hover-lift shine-sweep ${
                selectedCategory === "Zoftner Pro"
                  ? "bg-white border-sky-500 shadow-lg ring-2 ring-sky-500/30"
                  : "bg-white border-slate-200 hover:border-sky-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">
                    <Check className="w-3 h-3 stroke-[3]" />
                    <span>Category 1 • All models come with a bag filter</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#081C3B] group-hover:text-sky-600 transition-colors">
                    Zoftner Pro
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Includes heavy-duty bag filtration to trap suspended sediment and silt alongside advanced electrolysis descaling.
                  </p>
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
                  selectedCategory === "Zoftner Pro"
                    ? "bg-sky-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-sky-600"
                }`}>
                  {PRODUCTS_DATA.filter(p => p.category === "Zoftner Pro").length} Models
                </span>
              </div>
            </button>
          </AnimatedSection>

          {/* Category 2: Zoftner Quick Fix */}
          <AnimatedSection animation="fade-left" delay={150} duration={600}>
            <button
              onClick={() => handleCategorySelect("Zoftner Quick Fix")}
              className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group hover-lift shine-sweep ${
                selectedCategory === "Zoftner Quick Fix"
                  ? "bg-white border-sky-500 shadow-lg ring-2 ring-sky-500/30"
                  : "bg-white border-slate-200 hover:border-sky-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">
                    <Zap className="w-3 h-3 text-sky-600" />
                    <span>Category 2 • All models come without a bag filter</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#081C3B] group-hover:text-sky-600 transition-colors">
                    Zoftner Quick Fix
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Streamlined inline electrolysis and physical descalers engineered for direct pipe fitment without a bag filter.
                  </p>
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
                  selectedCategory === "Zoftner Quick Fix"
                    ? "bg-sky-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-sky-600"
                }`}>
                  {PRODUCTS_DATA.filter(p => p.category === "Zoftner Quick Fix").length} Models
                </span>
              </div>
            </button>
          </AnimatedSection>
        </div>

        {/* Mobile Filter Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 py-3 px-4 rounded-xl text-sm font-bold shadow-xs transition-colors btn-press"
          >
            <Filter className="w-4 h-4 text-sky-600" />
            <span>Filter Categories & Search ({selectedCategory})</span>
          </button>
        </div>

        {/* Main Grid: Catalogue on Left (lg:col-span-8 or 9), Sidebar on Right (lg:col-span-4 or 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Product Catalogue Listing (9 columns) */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            
            {/* Top Toolbar: Showing Results count + Functional Sorting Dropdown */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-slate-600 font-medium text-center sm:text-left">
                Showing{' '}
                <span className="font-bold text-[#081C3B]">
                  {totalItems > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}–
                  {Math.min(currentPage * ITEMS_PER_PAGE, totalItems)}
                </span>{' '}
                of <span className="font-bold text-[#081C3B]">{totalItems}</span> products
                {selectedCategory !== 'All Products' && (
                  <span className="ml-1 text-sky-600 font-bold">in "{selectedCategory}"</span>
                )}
                {searchQuery && (
                  <span className="ml-1 text-sky-600 font-bold">matching "{searchQuery}"</span>
                )}
              </div>

              {/* Sorting Dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <label htmlFor="product-sort" className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                  Sort By:
                </label>
                <select
                  id="product-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium cursor-pointer transition-colors"
                >
                  <option value="default">Default Sorting</option>
                  <option value="popularity">Sort by Popularity</option>
                  <option value="latest">Sort by Latest</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid: Staggered with AnimatedSection */}
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {displayedProducts.map((product, idx) => (
                  <AnimatedSection key={product.id} animation="fade-up" delay={idx * 60} duration={500}>
                    <ProductCard product={product} />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              /* No products found state */
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
                <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#081C3B]">No products match your criteria</h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                  We couldn't find any products matching your search query or selected category.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="btn-press inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* PAGINATION: Functional Previous, Page 1, Page 2, Next */}
            {totalPages > 1 && (
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`btn-press inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    currentPage === 1
                      ? 'text-slate-300 cursor-not-allowed bg-slate-50'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {/* Page Number Buttons */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-9 h-9 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                        currentPage === pageNum
                          ? 'bg-sky-600 text-white shadow-xs scale-105'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-sky-600'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`btn-press inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    currentPage === totalPages
                      ? 'text-slate-300 cursor-not-allowed bg-slate-50'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

          {/* RIGHT: Desktop Sidebar (Categories, Product Search, Help Card, Brochure) */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 space-y-6">
            
            {/* Search Widget */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#081C3B] border-l-2 border-sky-500 pl-2">
                Search Products
              </h3>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search model or specs..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-9 pr-8 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      searchParams.delete('q');
                      setSearchParams(searchParams);
                    }}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Product Categories Widget: strictly two categories + All */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#081C3B] border-l-2 border-sky-500 pl-2">
                  Categories ({CATEGORIES.length - 1})
                </h3>
                {(selectedCategory !== 'All Products' || searchQuery) && (
                  <button
                    onClick={handleClearFilters}
                    className="text-[11px] font-semibold text-sky-600 hover:underline"
                  >
                    Reset
                  </button>
                )}
              </div>

              <div className="space-y-1.5 pt-1">
                {CATEGORIES.map((cat) => {
                  const count =
                    cat === 'All Products'
                      ? PRODUCTS_DATA.length
                      : PRODUCTS_DATA.filter(
                          (p) => p.category.toLowerCase() === cat.toLowerCase()
                        ).length;

                  const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();

                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-sky-50 text-sky-700 font-bold border border-sky-200 shadow-xs translate-x-1'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-sky-600 hover:translate-x-0.5'
                      }`}
                    >
                      <div className="flex flex-col text-left">
                        <span>{cat}</span>
                        {cat === "Zoftner Pro" && (
                          <span className="text-[10px] text-emerald-600 font-normal">With Bag Filter</span>
                        )}
                        {cat === "Zoftner Quick Fix" && (
                          <span className="text-[10px] text-slate-500 font-normal">Without Bag Filter</span>
                        )}
                      </div>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full transition-colors ${
                          isSelected ? 'bg-sky-200/70 text-sky-800' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Warranty Assurance Box in Sidebar */}
            <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200/80 space-y-3 text-xs hover-lift transition-all">
              <div className="flex items-center gap-2 text-emerald-900 font-bold uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Warranty Assurance</span>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>1-Year Unconditional Warranty</strong> on cabinet body & electrical components.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>5-Year Unconditional Warranty</strong> on the electrode.</span>
                </li>
              </ul>
            </div>

            {/* Water Quality Box in Sidebar */}
            <div className="bg-sky-50/70 p-5 rounded-2xl border border-sky-200/80 space-y-2 text-xs hover-lift transition-all">
              <div className="flex items-center gap-2 text-sky-900 font-bold uppercase tracking-wide">
                <Droplets className="w-4 h-4 text-sky-600" />
                <span>Water Quality Compatibility</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-normal">
                Works with input water TDS up to <strong>1,999 ppm</strong>.
              </p>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                * For TDS above 2,000 ppm, backwashing is recommended.
              </p>
            </div>

            {/* Quick WhatsApp Assistance Card */}
            <div className="bg-gradient-to-br from-[#081C3B] to-slate-900 text-white p-6 rounded-2xl shadow-xl space-y-4 hover-lift transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <PhoneCall className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Need Sizing Guidance?</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Confused between <strong>Zoftner Pro</strong> (with bag filter) and <strong>Zoftner Quick Fix</strong> (without bag filter)? Let our water engineers advise you on WhatsApp.
                </p>
              </div>
              <button
                onClick={openGeneralEnquiry}
                className="btn-press w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md"
              >
                <span>Chat on WhatsApp</span>
              </button>
              <div className="text-center text-[11px] text-slate-400">
                Direct: <strong className="text-white">{COMPANY_CONFIG.displayWhatsApp}</strong>
              </div>
            </div>

            {/* Download Brochure Widget */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wide">
                <FileDown className="w-4 h-4 text-sky-600" />
                <span>Product Brochures</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Download the official high-resolution Bounten brochure and flyer.
              </p>
              <div className="space-y-2 pt-1">
                <a
                  href={COMPANY_CONFIG.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-2 px-3 rounded-xl text-xs font-bold transition-colors shadow-xs"
                >
                  <span>Download Brochure PDF</span>
                </a>
                <a
                  href={COMPANY_CONFIG.flyerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 py-2 px-3 rounded-xl text-xs font-bold transition-colors"
                >
                  <span>Download Flyer PDF</span>
                </a>
              </div>
            </div>

          </aside>

        </div>

        {/* ============================================================== */}
        {/* COMPREHENSIVE APPLICATIONS & USES SECTION                     */}
        {/* ============================================================== */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-10">
          
          {/* Section Header with Fade Up */}
          <AnimatedSection animation="fade-up" duration={700}>
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
                Applications & Uses
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
                {PRODUCT_HIGHLIGHTS.applications.title}
              </h2>
              <p className="text-slate-600 text-sm mt-0.5">
                {PRODUCT_HIGHLIGHTS.applications.subtitle}
              </p>
            </div>
          </AnimatedSection>

          {/* Grid of 3 Main Applications: Residential, Commercial, Everyday */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Residential Applications */}
            <AnimatedSection animation="fade-up" delay={100} duration={700}>
              <div className="bg-gradient-to-b from-sky-50/60 to-white rounded-2xl p-6 border border-sky-100/80 shadow-xs hover-lift transition-all space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
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
                <div className="pt-3 border-t border-sky-100/60">
                  <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider block">
                    Recommended: Zoftner Pro W1 / W2 or Quick Fix W1 / W2
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* 2. Commercial Applications */}
            <AnimatedSection animation="fade-up" delay={200} duration={700}>
              <div className="bg-gradient-to-b from-emerald-50/60 to-white rounded-2xl p-6 border border-emerald-100/80 shadow-xs hover-lift transition-all space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
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
                <div className="pt-3 border-t border-emerald-100/60">
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                    Recommended: Zoftner Pro Max W3 / W4 / W6
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* 3. Everyday Applications */}
            <AnimatedSection animation="fade-up" delay={300} duration={700}>
              <div className="bg-gradient-to-b from-amber-50/60 to-white rounded-2xl p-6 border border-amber-100/80 shadow-xs hover-lift transition-all space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
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
                <div className="pt-3 border-t border-amber-100/60">
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                    Full Whole-Property Conditioning Protection
                  </span>
                </div>
              </div>
            </AnimatedSection>

          </div>

          {/* 4. KEY BENEFITS CARD */}
          <AnimatedSection animation="fade-up" delay={150} duration={700}>
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#081C3B]">
                    {PRODUCT_HIGHLIGHTS.applications.keyBenefits.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Why homeowners, builders, and commercial enterprises choose Bounten electrolytic systems.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-xs">
                  <span>100% Salt-Free & Chemical-Free</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {PRODUCT_HIGHLIGHTS.applications.keyBenefits.items.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-xs flex items-start gap-3 hover-lift transition-all"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* WARRANTY ASSURANCE & WATER QUALITY BANNER */}
          <AnimatedSection animation="zoom" delay={200} duration={800}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Warranty Assurance Card */}
              <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-[#081C3B] text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-4 border border-emerald-800/60 hover-lift transition-all">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-400/20">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Warranty Assurance</span>
                </div>
                <h4 className="text-xl font-bold text-white">
                  Unconditional Manufacturer Warranty
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>1-Year Unconditional Warranty</strong> on the cabinet body and electrical components.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>5-Year Unconditional Warranty</strong> on the electrode.</span>
                  </li>
                </ul>
              </div>

              {/* Water Quality & Certifications Card */}
              <div className="bg-gradient-to-br from-sky-950 via-sky-900 to-[#081C3B] text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-4 border border-sky-800/60 hover-lift transition-all">
                <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-sky-400/20">
                  <Award className="w-4 h-4" />
                  <span>Water Compatibility & Certifications</span>
                </div>
                <h4 className="text-xl font-bold text-white">
                  Input Water TDS & International Standards
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Water Quality Compatibility:</strong> Works with input water TDS up to <strong>1,999 ppm</strong>. (For TDS above 2,000 ppm, backwashing is recommended).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Certifications & Construction:</strong> ISO 9001, ISO 14001 certified. Food grade material: <strong>SS304</strong>.</span>
                  </li>
                </ul>
              </div>

            </div>
          </AnimatedSection>

        </section>

      </div>

      {/* MOBILE COLLAPSIBLE FILTER DRAWER */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col z-10 animate-in slide-in-from-right duration-300 space-y-6 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-bold text-base text-[#081C3B]">Filter Products</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500">Search</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search products..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-9 pr-3 text-xs"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            {/* Mobile Categories */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500">Categories</label>
              <div className="space-y-1.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-sky-50 text-sky-700 font-bold border border-sky-200'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div>{cat}</div>
                    {cat === "Zoftner Pro" && <div className="text-[10px] text-emerald-600">With Bag Filter</div>}
                    {cat === "Zoftner Quick Fix" && <div className="text-[10px] text-slate-500">Without Bag Filter</div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 space-y-2">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="btn-press w-full bg-sky-600 text-white py-2.5 rounded-xl font-bold text-xs shadow-sm"
              >
                Apply Filters
              </button>
              <button
                onClick={() => {
                  handleClearFilters();
                  setIsMobileFilterOpen(false);
                }}
                className="w-full bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-xs"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
