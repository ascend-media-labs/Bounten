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
  ShoppingBag
} from 'lucide-react';
import { PRODUCTS_DATA, CATEGORIES, PRODUCT_HIGHLIGHTS } from '../data/products';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openProductEnquiry } from '../utils/whatsapp';
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
  const [cartItems, setCartItems] = useState([]);
  const [addedNotice, setAddedNotice] = useState(null);

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

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setAddedNotice(`Added "${product.name}" to cart! Opening WhatsApp enquiry...`);
    setTimeout(() => setAddedNotice(null), 4000);
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
    <div className="bg-white min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Success toast notification when Add to Cart is clicked */}
        {addedNotice && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg flex items-center justify-between shadow-xs transition-all animate-in fade-in">
            <span>{addedNotice}</span>
            <button onClick={() => setAddedNotice(null)} className="text-emerald-600 hover:text-emerald-900 ml-4 font-bold">✕</button>
          </div>
        )}

        {/* ============================================================== */}
        {/* MAIN STORE CONTAINER (GRID ON LEFT + SIDEBAR ON RIGHT)        */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ============================================================ */}
          {/* LEFT: 3x3 PRODUCT GRID (9 PRODUCTS PER PAGE)                */}
          {/* ============================================================ */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            
            {/* Top Right: Default Sorting Dropdown */}
            <div className="flex justify-end items-center">
              <select
                id="shop-sorting"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-slate-300 text-slate-700 text-xs rounded px-3 py-1.5 bg-white cursor-pointer focus:outline-none focus:border-blue-500 shadow-2xs"
              >
                <option value="default">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="latest">Sort by latest</option>
                <option value="price-low-high">Sort by price: low to high</option>
                <option value="price-high-low">Sort by price: high to low</option>
              </select>
            </div>

            {/* 3 Columns Grid of Products */}
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {displayedProducts.map((product) => (
                  <div key={product.id} className="flex flex-col space-y-2.5 group text-left">
                    {/* Square Product Image */}
                    <Link
                      to={`/products/${product.id}`}
                      className="w-full aspect-square bg-white border border-slate-200/90 rounded-lg p-4 flex items-center justify-center overflow-hidden hover:border-blue-500 transition-colors shadow-2xs"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </Link>

                    {/* Product Name */}
                    <Link to={`/products/${product.id}`}>
                      <h3 className="font-bold text-[#081C3B] text-sm hover:text-blue-600 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Price */}
                    <div className="text-slate-800 font-bold text-xs sm:text-sm">
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>

                    {/* Blue Add to Cart Button */}
                    <div className="pt-1">
                      <button
                        onClick={() => {
                          handleAddToCart(product);
                          openProductEnquiry(product);
                        }}
                        className="bg-[#1d5ed8] hover:bg-[#154db8] active:bg-[#103e96] text-white px-4 py-2 rounded text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                        title="Add to cart & Enquire on WhatsApp"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
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

            {/* Bottom Left Pagination: 1 2 Next > */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2 pt-6 text-xs sm:text-sm">
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

              {/* Category Links List */}
              <div className="space-y-2 pt-2 text-xs">
                <div>
                  <button
                    onClick={() => handleCategorySelect('Zoftner Pro')}
                    className={`hover:text-blue-600 cursor-pointer transition-colors ${
                      selectedCategory === 'Zoftner Pro' ? 'text-blue-600 font-bold' : 'text-slate-600'
                    }`}
                  >
                    Water Softner 2
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleCategorySelect('All Products')}
                    className={`hover:text-blue-600 cursor-pointer transition-colors ${
                      selectedCategory === 'All Products' ? 'text-blue-600 font-bold' : 'text-slate-600'
                    }`}
                  >
                    All Products 16
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleCategorySelect('Zoftner Quick Fix')}
                    className={`hover:text-blue-600 cursor-pointer transition-colors ${
                      selectedCategory === 'Zoftner Quick Fix' ? 'text-blue-600 font-bold' : 'text-slate-600'
                    }`}
                  >
                    Zoftner
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Cart Section */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Cart
              </h2>

              {cartItems.length === 0 ? (
                <div className="space-y-3">
                  <div className="bg-slate-100 rounded-lg p-3.5 flex items-center gap-2.5 text-xs text-slate-600">
                    <Bell className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span>Your cart is currently empty.</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCategory('All Products');
                      setSearchQuery('');
                      setSearchInputText('');
                      setSelectedAttribute('all');
                      setCurrentPage(1);
                    }}
                    className="bg-[#1d5ed8] hover:bg-[#154db8] text-white px-4 py-2 rounded text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
                  >
                    Return to shop
                  </button>
                </div>
              ) : (
                <div className="space-y-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <div className="space-y-2 text-xs">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-slate-800">
                        <span className="font-medium line-clamp-1">{item.name} × {item.quantity}</span>
                        <span className="font-bold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-xs text-slate-900">
                    <span>Total:</span>
                    <span>
                      ₹{cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const summary = cartItems.map((i) => `${i.name} (Qty: ${i.quantity}) - ₹${i.price}`).join('\n');
                      const total = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
                      const message = `Hello Bounten Team,\n\nI want to order:\n${summary}\n\nTotal: ₹${total.toLocaleString('en-IN')}\n\nPlease proceed with my order.`;
                      window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2 px-3 rounded text-xs font-bold shadow-xs transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Checkout on WhatsApp</span>
                  </button>
                </div>
              )}
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
