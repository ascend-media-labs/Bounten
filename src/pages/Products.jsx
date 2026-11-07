import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  Bell,
  Check,
  CheckCircle2,
  ShieldCheck,
  Award,
  Zap,
  ShoppingBag,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS_DATA, CATEGORIES, PRODUCT_HIGHLIGHTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openProductEnquiry, openGeneralEnquiry } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../data/config';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Search, category, sort and pagination states
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [searchInputText, setSearchInputText] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('cat') || 'All Products');
  const [selectedAttribute, setSelectedAttribute] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);

  // Exactly 9 products per page as shown in example screenshot
  const ITEMS_PER_PAGE = 9;

  // Sync category changes
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    if (category === 'All Products') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', category);
    }
    setSearchParams(searchParams);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setSearchQuery(searchInputText);
    setCurrentPage(1);
    if (searchInputText.trim()) {
      searchParams.set('q', searchInputText.trim());
    } else {
      searchParams.delete('q');
    }
    setSearchParams(searchParams);
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

    // 3. Attribute Filter
    if (selectedAttribute === 'with-bag') {
      result = result.filter((p) => p.hasBagFilter === true);
    } else if (selectedAttribute === 'without-bag') {
      result = result.filter((p) => p.hasBagFilter === false);
    } else if (selectedAttribute === 'under-10k') {
      result = result.filter((p) => p.price < 10000);
    } else if (selectedAttribute === 'above-50k') {
      result = result.filter((p) => p.price >= 50000);
    }

    // 4. Sorting
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
        // Preserves the natural order matching the screenshot
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, selectedAttribute, sortBy]);

  // Pagination calculation
  const totalItems = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

  // Slice for current page (exactly 9 products on page 1)
  const displayedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedProducts, currentPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  return (
    <div id="products" className="bg-white min-h-screen py-3 sm:py-5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">

        {/* Page Breadcrumb */}
        <nav className="flex items-center space-x-1.5 text-xs text-slate-500">
          <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Products</span>
        </nav>

        {/* ============================================================== */}
        {/* MAIN STORE CONTAINER (GRID ON LEFT + SIDEBAR ON RIGHT)        */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ============================================================ */}
          {/* LEFT: CATEGORY CARDS + 3x3 PRODUCT GRID                     */}
          {/* ============================================================ */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            
            {/* Top: Two Categories Showcase Cards (Direct Selection) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Category 1: Zoftner Pro */}
              <button
                type="button"
                onClick={() => handleCategorySelect(selectedCategory === 'Zoftner Pro' ? 'All Products' : 'Zoftner Pro')}
                className={`text-left p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                  selectedCategory === 'Zoftner Pro'
                    ? 'border-sky-500 bg-sky-50/90 shadow-md ring-2 ring-sky-400/20'
                    : 'border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50/70 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
                    {PRODUCTS_DATA.filter((p) => p.category === 'Zoftner Pro').length} Models Available
                  </span>
                  {selectedCategory === 'Zoftner Pro' ? (
                    <span className="text-xs font-bold text-sky-600 flex items-center gap-1">
                      <Check className="w-4 h-4" /> Selected
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400 font-medium">Click to filter</span>
                  )}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#081C3B] mt-2">
                  1. Zoftner Pro
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-emerald-700 mt-0.5">
                  All models come with a bag filter.
                </p>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-normal">
                  Heavy sediment & silt filtration + molecular scale prevention in one complete package.
                </p>
              </button>

              {/* Category 2: Zoftner Quick Fix */}
              <button
                type="button"
                onClick={() => handleCategorySelect(selectedCategory === 'Zoftner Quick Fix' ? 'All Products' : 'Zoftner Quick Fix')}
                className={`text-left p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                  selectedCategory === 'Zoftner Quick Fix'
                    ? 'border-[#081C3B] bg-slate-100/90 shadow-md ring-2 ring-slate-800/20'
                    : 'border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50/70 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800">
                    {PRODUCTS_DATA.filter((p) => p.category === 'Zoftner Quick Fix').length} Models Available
                  </span>
                  {selectedCategory === 'Zoftner Quick Fix' ? (
                    <span className="text-xs font-bold text-[#081C3B] flex items-center gap-1">
                      <Check className="w-4 h-4" /> Selected
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400 font-medium">Click to filter</span>
                  )}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#081C3B] mt-2">
                  2. Zoftner Quick Fix
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                  All models come without a bag filter.
                </p>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-normal">
                  Compact inline electrolytic descalers for direct plumbing with pre-filtration.
                </p>
              </button>

            </div>

            {/* Quick Filter Status Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-slate-500 font-medium">Filter by Category:</span>
              <button
                type="button"
                onClick={() => handleCategorySelect('All Products')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  selectedCategory === 'All Products'
                    ? 'bg-[#081C3B] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Products ({PRODUCTS_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => handleCategorySelect('Zoftner Pro')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  selectedCategory === 'Zoftner Pro'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Zoftner Pro ({PRODUCTS_DATA.filter((p) => p.category === 'Zoftner Pro').length})
              </button>
              <button
                type="button"
                onClick={() => handleCategorySelect('Zoftner Quick Fix')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  selectedCategory === 'Zoftner Quick Fix'
                    ? 'bg-[#081C3B] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Zoftner Quick Fix ({PRODUCTS_DATA.filter((p) => p.category === 'Zoftner Quick Fix').length})
              </button>
            </div>

            {/* Top Toolbar: Products Side Heading on Left + Sorting Dropdown on Right */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#081C3B] tracking-tight">
                  {selectedCategory === 'All Products' ? 'Products' : selectedCategory}
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  Showing {filteredAndSortedProducts.length > 0 ? `${(currentPage - 1) * ITEMS_PER_PAGE + 1}–${Math.min(currentPage * ITEMS_PER_PAGE, filteredAndSortedProducts.length)} of ${filteredAndSortedProducts.length} results` : '0 results'}
                  {selectedCategory === 'Zoftner Pro' && ' • All models come with a bag filter.'}
                  {selectedCategory === 'Zoftner Quick Fix' && ' • All models come without a bag filter.'}
                </p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <select
                  id="shop-sorting"
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="border border-slate-300 text-slate-700 text-xs rounded-lg px-3 py-1.5 bg-white cursor-pointer focus:outline-none focus:border-sky-500 shadow-2xs"
                >
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="latest">Sort by latest</option>
                  <option value="price-low-high">Sort by price: low to high</option>
                  <option value="price-high-low">Sort by price: high to low</option>
                </select>
              </div>
            </div>

            {/* 3 Columns Grid of Products (9 items per page) */}
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
                {displayedProducts.map((product, idx) => (
                  <AnimatedSection key={product.id} animation="fade-up" delay={idx * 50} duration={500}>
                    <ProductCard product={product} />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <div className="bg-slate-50 rounded-xl p-10 text-center border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-800">No products found</h3>
                <p className="text-xs text-slate-500">Try adjusting your search or selected category.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSearchInputText('');
                    setSelectedCategory('All Products');
                    setSelectedAttribute('all');
                  }}
                  className="bg-[#1d5ed8] text-white text-xs px-4 py-2 rounded font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Bottom Left Pagination: < Prev 1 2 Next > */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2 pt-6 text-xs sm:text-sm">
                {currentPage > 1 && (
                  <button
                    onClick={() => {
                      setCurrentPage((prev) => prev - 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-2.5 py-1 text-slate-600 hover:text-blue-600 font-semibold cursor-pointer"
                  >
                    &lt; Prev
                  </button>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => {
                      setCurrentPage(pageNum);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`px-2.5 py-1 font-bold cursor-pointer transition-colors ${
                      currentPage === pageNum
                        ? 'text-slate-900 border-b-2 border-slate-900'
                        : 'text-slate-500 hover:text-blue-600'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button
                    onClick={() => {
                      setCurrentPage((prev) => prev + 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-2.5 py-1 text-slate-600 hover:text-blue-600 font-semibold cursor-pointer"
                  >
                    Next &gt;
                  </button>
                )}
              </div>
            )}

          </div>

          {/* ============================================================ */}
          {/* RIGHT SIDEBAR: CATEGORIES, CART, FILTER BY ATTRIBUTE         */}
          {/* ============================================================ */}
          <aside className="lg:col-span-4 xl:col-span-3 space-y-8 text-left border-l border-slate-100 lg:pl-8">
            
            {/* 1. Categories Section */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Categories
              </h2>

              {/* Search Form */}
              <form onSubmit={handleSearchSubmit} className="space-y-2">
                <label className="text-xs text-slate-600 font-medium block">Search</label>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={searchInputText}
                    onChange={(e) => setSearchInputText(e.target.value)}
                    placeholder="Search products..."
                    className="w-full border border-slate-300 rounded px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-2xs"
                  />
                  <button
                    type="submit"
                    className="bg-[#1d5ed8] hover:bg-[#154db8] text-white px-4 py-1.5 rounded text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* Category Links List: Strictly Only Two Categories */}
              <div className="space-y-2.5 pt-2 text-xs">
                <div>
                  <button
                    onClick={() => handleCategorySelect('All Products')}
                    className={`flex items-center justify-between w-full text-left py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                      selectedCategory === 'All Products'
                        ? 'bg-[#081C3B] text-white font-bold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>All Products</span>
                    <span className="text-[11px] opacity-80">{PRODUCTS_DATA.length}</span>
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => handleCategorySelect('Zoftner Pro')}
                    className={`flex flex-col w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedCategory === 'Zoftner Pro'
                        ? 'border-sky-500 bg-sky-50/90 text-sky-950 font-bold shadow-xs ring-1 ring-sky-400'
                        : 'border-slate-200 text-slate-700 hover:border-sky-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-bold text-xs text-[#081C3B]">1. Zoftner Pro</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-bold">
                        {PRODUCTS_DATA.filter((p) => p.category === 'Zoftner Pro').length}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 mt-1">
                      All models come with a bag filter.
                    </span>
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => handleCategorySelect('Zoftner Quick Fix')}
                    className={`flex flex-col w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedCategory === 'Zoftner Quick Fix'
                        ? 'border-slate-800 bg-slate-100 text-slate-900 font-bold shadow-xs ring-1 ring-slate-700'
                        : 'border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-bold text-xs text-[#081C3B]">2. Zoftner Quick Fix</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 font-bold">
                        {PRODUCTS_DATA.filter((p) => p.category === 'Zoftner Quick Fix').length}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 mt-1">
                      All models come without a bag filter.
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Direct WhatsApp Assistance */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Direct Consultation
              </h2>
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                  <span>Instant Technical Guidance</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Need help choosing the right capacity or model? Connect directly with our certified water specialists on WhatsApp.
                </p>
                <button
                  onClick={openGeneralEnquiry}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-3 rounded-lg text-xs font-bold shadow-xs transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* 3. Filter by attribute Section */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Filter by attribute
              </h2>

              <div className="space-y-1.5 text-xs">
                <button
                  onClick={() => {
                    setSelectedAttribute('all');
                    setCurrentPage(1);
                  }}
                  className={`block w-full text-left py-1 hover:text-blue-600 transition-colors ${
                    selectedAttribute === 'all' ? 'text-blue-600 font-bold' : 'text-slate-600'
                  }`}
                >
                  All Attributes
                </button>
                <button
                  onClick={() => {
                    setSelectedAttribute('with-bag');
                    setCurrentPage(1);
                  }}
                  className={`block w-full text-left py-1 hover:text-blue-600 transition-colors ${
                    selectedAttribute === 'with-bag' ? 'text-blue-600 font-bold' : 'text-slate-600'
                  }`}
                >
                  With Bag Filter (Zoftner Pro)
                </button>
                <button
                  onClick={() => {
                    setSelectedAttribute('without-bag');
                    setCurrentPage(1);
                  }}
                  className={`block w-full text-left py-1 hover:text-blue-600 transition-colors ${
                    selectedAttribute === 'without-bag' ? 'text-blue-600 font-bold' : 'text-slate-600'
                  }`}
                >
                  Without Bag Filter (Zoftner Quick Fix)
                </button>
                <button
                  onClick={() => {
                    setSelectedAttribute('under-10k');
                    setCurrentPage(1);
                  }}
                  className={`block w-full text-left py-1 hover:text-blue-600 transition-colors ${
                    selectedAttribute === 'under-10k' ? 'text-blue-600 font-bold' : 'text-slate-600'
                  }`}
                >
                  Under ₹10,000 (Descalers & Minis)
                </button>
                <button
                  onClick={() => {
                    setSelectedAttribute('above-50k');
                    setCurrentPage(1);
                  }}
                  className={`block w-full text-left py-1 hover:text-blue-600 transition-colors ${
                    selectedAttribute === 'above-50k' ? 'text-blue-600 font-bold' : 'text-slate-600'
                  }`}
                >
                  ₹50,000 & Above (Whole-Property Systems)
                </button>
              </div>
            </div>

          </aside>

        </div>

        {/* ============================================================== */}
        {/* COMPREHENSIVE APPLICATIONS & USES (VERIFIED CERTIFIED DATA)   */}
        {/* ============================================================== */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
              Applications & Uses
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
              {PRODUCT_HIGHLIGHTS.applications.title}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              {PRODUCT_HIGHLIGHTS.applications.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-xl border border-slate-200/70 space-y-2">
              <h3 className="font-bold text-sm text-[#081C3B]">{PRODUCT_HIGHLIGHTS.applications.residential.title}</h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                {PRODUCT_HIGHLIGHTS.applications.residential.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/70 space-y-2">
              <h3 className="font-bold text-sm text-[#081C3B]">{PRODUCT_HIGHLIGHTS.applications.commercial.title}</h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                {PRODUCT_HIGHLIGHTS.applications.commercial.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/70 space-y-2">
              <h3 className="font-bold text-sm text-[#081C3B]">{PRODUCT_HIGHLIGHTS.applications.keyBenefits.title}</h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                {PRODUCT_HIGHLIGHTS.applications.keyBenefits.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Warranty & TDS Assurance Badges */}
          <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span><strong>Warranty:</strong> 1-Yr Cabinet & Electrical | 5-Yr Electrode</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-600 flex-shrink-0" />
              <span><strong>Certifications:</strong> ISO 9001 & ISO 14001 | Food Grade SS304</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span><strong>TDS Limit:</strong> Up to 1,999 ppm (Backwash &gt;2,000 ppm)</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
