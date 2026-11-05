import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  Sparkles,
  Zap,
  PhoneCall,
  CheckCircle2,
  FileDown
} from 'lucide-react';
import { PRODUCTS_DATA, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
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
          product.category.toLowerCase().includes(q)
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
        // Original order
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
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Title & Breadcrumb Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600 block mb-1">
                Official Product Catalogue
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#081C3B] tracking-tight">
                Bounten Water Softeners & Descalers
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Zero-maintenance, salt-free electrolysis water treatment systems. Enquire directly on WhatsApp for sizing & quotes.
              </p>
            </div>

            {/* Mobile Filter Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 px-4 rounded-xl text-sm font-bold transition-colors"
              >
                <Filter className="w-4 h-4 text-sky-600" />
                <span>Filters & Search</span>
                {(selectedCategory !== 'All Products' || searchQuery) && (
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid: Catalogue on Left (lg:col-span-8 or 9), Sidebar on Right (lg:col-span-4 or 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Product Catalogue Listing (8 or 9 columns) */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            
            {/* Top Toolbar: Showing Results count + Functional Sorting Dropdown */}
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
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
                  className="bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium cursor-pointer"
                >
                  <option value="default">Default Sorting</option>
                  <option value="popularity">Sort by Popularity</option>
                  <option value="latest">Sort by Latest</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid:
                Desktop: 3 cards per row
                Tablet: 2 cards per row
                Mobile: 1 or 2 cards per row
            */}
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
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
                  We couldn't find any products matching your search query or selected category. Try clearing your filters.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* PAGINATION: Functional Previous, Page 1, Page 2, Next */}
            {totalPages > 1 && (
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
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
                          ? 'bg-sky-600 text-white shadow-xs'
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
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
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

          {/* RIGHT: Desktop Sidebar (Categories, Product Search, Help Card) (4 or 3 cols) */}
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
                  placeholder="Search by product name..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-9 pr-8 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
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

            {/* Product Categories Widget */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#081C3B] border-l-2 border-sky-500 pl-2">
                  Product Categories
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

              <div className="space-y-1 pt-1">
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
                          ? 'bg-sky-50 text-sky-700 font-bold border border-sky-200'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-sky-600'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${
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

            {/* Quick WhatsApp Assistance Card */}
            <div className="bg-gradient-to-br from-[#081C3B] to-slate-900 text-white p-6 rounded-2xl shadow-md space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Need Sizing Guidance?</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Not sure which Zoftnor model fits your borewell TDS or household bathroom count? Our water consultants can help.
                </p>
              </div>
              <button
                onClick={openGeneralEnquiry}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                <span>Chat on WhatsApp</span>
              </button>
              <div className="text-center text-[11px] text-slate-400">
                Call / WhatsApp: <strong className="text-white">{COMPANY_CONFIG.displayWhatsApp}</strong>
              </div>
            </div>

            {/* Download Brochure Widget */}
            <div className="bg-sky-50/70 p-5 rounded-2xl border border-sky-100 space-y-3">
              <div className="flex items-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-wide">
                <FileDown className="w-4 h-4 text-sky-600" />
                <span>Product Catalogue</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Download the official high-resolution Bounten brochure with complete specifications.
              </p>
              <button
                onClick={() => handleDownload(COMPANY_CONFIG.brochureUrl, 'bounten-brochure.pdf')}
                className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-2 px-3 rounded-xl text-xs font-bold transition-colors shadow-xs"
              >
                <span>Download PDF</span>
              </button>
            </div>

          </aside>

        </div>
      </div>

      {/* MOBILE COLLAPSIBLE FILTER DRAWER */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col z-10 animate-in slide-in-from-right duration-300 space-y-6 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-bold text-base text-[#081C3B]">Filter Products</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600"
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
              <div className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold ${
                      selectedCategory === cat
                        ? 'bg-sky-50 text-sky-700 font-bold border border-sky-200'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 space-y-2">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full bg-sky-600 text-white py-2.5 rounded-xl font-bold text-xs"
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

