import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  Zap,
  Droplets,
  CheckCircle2,
  FileDown,
  PhoneCall,
  Clock,
  Sparkles,
  ChevronRight,
  Check,
  Award,
  AlertCircle,
  Plus,
  Minus
} from 'lucide-react';
import { PRODUCTS_DATA, PRODUCT_HIGHLIGHTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { formatINR, openProductEnquiry } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../data/config';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Scroll to top on id change and reset quantity
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setQuantity(1);
  }, [id]);

  const product = useMemo(() => {
    return PRODUCTS_DATA.find(
      (p) => p.id === id || p.slug === id || (p.aliases && p.aliases.includes(id))
    );
  }, [id]);

  // Related products from same category or fallback
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS_DATA.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-[#081C3B]">Product Not Found</h2>
        <p className="text-slate-500 text-sm">
          The requested product could not be found in our catalogue.
        </p>
        <Link
          to="/products"
          className="btn-press inline-flex items-center gap-2 bg-sky-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalogue</span>
        </Link>
      </div>
    );
  }

  const formattedPrice = formatINR(product.price);
  const formattedOriginalPrice = product.originalPrice ? formatINR(product.originalPrice) : null;

  return (
    <div className="bg-slate-50/50 min-h-screen py-4 sm:py-6">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-4 sm:space-y-5">

        {/* Navigation & Back Link */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <nav className="flex items-center space-x-1.5 text-xs text-slate-500 flex-wrap">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/products" className="hover:text-sky-600 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-xs">{product.name}</span>
          </nav>

          <button
            onClick={() => navigate('/products')}
            className="btn-press inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Products</span>
          </button>
        </div>

        {/* Main Product Section: Two Columns (Image Left, Details Right) */}
        <AnimatedSection animation="fade-up" duration={600}>
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-7 border border-slate-200/90 shadow-sm hover-lift transition-all grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">

            {/* Left: Product Image & Badges (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative w-full aspect-square rounded-2xl bg-white border border-slate-200/90 p-2 sm:p-3 flex items-center justify-center overflow-hidden group shadow-xs">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Quality Seals Row */}
              <div className="grid grid-cols-3 gap-2 text-center text-slate-600 text-[10px] sm:text-[11px] font-semibold">
                <div className="bg-slate-50 py-2 px-1 rounded-lg border border-slate-100 flex flex-col items-center gap-1 hover:border-emerald-200 transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Resin & Salt-Free</span>
                </div>
                <div className="bg-slate-50 py-2 px-1 rounded-lg border border-slate-100 flex flex-col items-center gap-1 hover:border-sky-200 transition-colors">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>5-Yr Electrode</span>
                </div>
                <div className="bg-slate-50 py-2 px-1 rounded-lg border border-slate-100 flex flex-col items-center gap-1 hover:border-amber-200 transition-colors">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Food Grade SS304</span>
                </div>
              </div>

              {/* Bag Filter Status Notice */}
              <div className={`p-2.5 rounded-lg border text-[11px] sm:text-xs font-medium flex items-center gap-2 ${
                product.hasBagFilter 
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' 
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}>
                {product.hasBagFilter ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span><strong>Zoftner Pro Model:</strong> Includes integrated high-efficiency bag filter unit.</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                    <span><strong>Zoftner Quick Fix Model:</strong> Designed for direct inline fitment without a bag filter.</span>
                  </>
                )}
              </div>
            </div>

            {/* Right: Product Info & Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              <div className="space-y-1 sm:space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                    Resin-Free | Salt-Free | Chemical-Free
                  </span>
                </div>

                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#081C3B] tracking-tight">
                  {product.name}
                </h1>

                <p className="text-xs text-slate-500 font-medium">
                  {PRODUCT_HIGHLIGHTS.technology}
                </p>
              </div>

              {/* Price Box */}
              <div className="bg-slate-50 py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl border border-slate-200/80 flex items-baseline gap-2.5 flex-wrap">
                <span className="text-2xl sm:text-3xl font-black text-[#081C3B]">
                  {formatINR(product.price * quantity)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm sm:text-base text-slate-400 font-medium line-through">
                    {formatINR(product.originalPrice * quantity)}
                  </span>
                )}
                {quantity > 1 && (
                  <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                    {formattedPrice} × {quantity}
                  </span>
                )}
                <span className="text-[11px] text-emerald-700 bg-emerald-100/70 font-bold px-2 py-0.5 rounded-full sm:ml-auto">
                  Inclusive of all taxes
                </span>
              </div>

              {/* Detailed Description */}
              <div className="space-y-1">
                <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  Product Overview
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Key Assurance Cards Row: Warranty & TDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
                {/* Warranty Assurance Box */}
                <div className="bg-emerald-50/70 rounded-xl p-2.5 sm:p-3 border border-emerald-200/80 space-y-1 hover-lift transition-all">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-900 uppercase tracking-wide">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Warranty Assurance</span>
                  </div>
                  <div className="text-[11px] text-slate-700 space-y-0.5">
                    <p><strong>• 1-Year Unconditional Warranty</strong> on cabinet & electricals.</p>
                    <p><strong>• 5-Year Unconditional Warranty</strong> on electrode.</p>
                  </div>
                </div>

                {/* Water Quality Box */}
                <div className="bg-sky-50/70 rounded-xl p-2.5 sm:p-3 border border-sky-200/80 space-y-1 hover-lift transition-all">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-sky-900 uppercase tracking-wide">
                    <Droplets className="w-3.5 h-3.5 text-sky-600" />
                    <span>Water Quality Compatibility</span>
                  </div>
                  <div className="text-[11px] text-slate-700 space-y-0.5">
                    <p>• Works with water TDS up to <strong>1,999 ppm</strong>.</p>
                    <p className="text-slate-500 text-[10px]">• Above 2,000 ppm TDS, backwashing recommended.</p>
                  </div>
                </div>
              </div>

              {/* Primary Action Section: Quantity (+/-) & WhatsApp Enquiry */}
              <div className="pt-1 space-y-2">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {/* Quantity Selector Matching User Design */}
                  <div className="inline-flex items-center border border-sky-500 rounded-lg bg-white overflow-hidden shadow-xs h-11 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      disabled={quantity <= 1}
                      className="w-9 sm:w-10 h-full flex items-center justify-center text-slate-700 hover:text-sky-600 hover:bg-sky-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    </button>
                    <span className="w-9 sm:w-11 text-center font-bold text-sm sm:text-base text-[#081C3B] select-none">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-9 sm:w-10 h-full flex items-center justify-center text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>

                  {/* Primary Action Button: WhatsApp Enquiry */}
                  <button
                    onClick={() => openProductEnquiry(product, quantity)}
                    className="btn-press flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 sm:px-5 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all h-11"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white flex-shrink-0" />
                    <span className="truncate">Enquire on WhatsApp {quantity > 1 ? `(${quantity})` : ''}</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                  <span>Direct WhatsApp: <strong>{COMPANY_CONFIG.displayWhatsApp}</strong></span>
                  <span className="text-emerald-600 font-semibold">Immediate Sizing Support</span>
                </div>
              </div>

              {/* Suitable Applications Pills */}
              {product.applications && product.applications.length > 0 && (
                <div className="pt-2.5 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Recommended For
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="bg-sky-50 text-sky-800 text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-sky-100 hover:bg-sky-100 transition-colors"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </AnimatedSection>

        {/* Specifications & Features Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">

          {/* Specifications Table (Left 7 cols) */}
          <div className="lg:col-span-7">
            <AnimatedSection animation="fade-right" delay={150} duration={600}>
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-sm space-y-4 hover-lift transition-all">
                <div className="flex items-center justify-between">
                  <h2 className="text-base sm:text-lg font-bold text-[#081C3B] border-l-4 border-sky-600 pl-2.5">
                    Technical Specifications
                  </h2>
                  <span className="text-[11px] text-slate-500 font-semibold">
                    ISO 9001 & ISO 14001
                  </span>
                </div>

                {product.specifications && product.specifications.length > 0 ? (
                  <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden">
                    {product.specifications.map((spec, idx) => (
                      <div
                        key={spec.label}
                        className={`grid grid-cols-1 sm:grid-cols-12 p-2.5 sm:p-3 text-xs ${
                          idx % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'
                        }`}
                      >
                        <span className="sm:col-span-5 font-semibold text-slate-600">
                          {spec.label}
                        </span>
                        <span className="sm:col-span-7 font-bold text-slate-900 mt-0.5 sm:mt-0">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500">Specifications available on request.</p>
                )}

                {/* Download Brochure Link */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={COMPANY_CONFIG.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download Brochure PDF</span>
                  </a>
                  <span className="text-slate-300">|</span>
                  <a
                    href={COMPANY_CONFIG.flyerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download Flyer PDF</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Features and Benefits (Right 5 cols) */}
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-left" delay={200} duration={600}>
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-sm space-y-4 hover-lift transition-all">
                <h2 className="text-base sm:text-lg font-bold text-[#081C3B] border-l-4 border-emerald-600 pl-2.5">
                  Key Features & Benefits
                </h2>

                {product.features && product.features.length > 0 ? (
                  <div className="space-y-2.5">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* Certifications & Material Assurance Card */}
                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-700">
                  <div className="font-bold text-[#081C3B] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>Manufacturing Standard & Quality</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    Certified under <strong>ISO 9001</strong> (Quality Management) and <strong>ISO 14001</strong> (Environmental Management). Contact surfaces built using <strong>Food grade SS304</strong>.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>

        {/* Other Details / Comprehensive Overview */}
        {product.otherDetails && (
          <AnimatedSection animation="fade-up" duration={600}>
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm space-y-3 hover-lift transition-all">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B] border-l-4 border-sky-600 pl-2.5">
                Other Details
              </h2>
              <div className="text-xs sm:text-[13px] text-slate-700 leading-relaxed space-y-3">
                {Array.isArray(product.otherDetails) ? (
                  product.otherDetails.map((paragraph, idx) => (
                    <p key={idx} className="whitespace-pre-line">{paragraph}</p>
                  ))
                ) : (
                  <p className="whitespace-pre-line">{product.otherDetails}</p>
                )}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <AnimatedSection animation="fade-up" duration={600}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    More in {product.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
                    Related Models in this Category
                  </h2>
                </div>
                <Link
                  to={`/products?cat=${encodeURIComponent(product.category)}`}
                  className="text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-800"
                >
                  View Category
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct, idx) => (
                <AnimatedSection key={relProduct.id} animation="fade-up" delay={idx * 100} duration={600}>
                  <ProductCard product={relProduct} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
