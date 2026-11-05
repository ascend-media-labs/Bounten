import React, { useEffect, useMemo } from 'react';
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
  ChevronRight
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import ProductCard from '../components/ProductCard';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { formatINR, openProductEnquiry } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../data/config';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const product = useMemo(() => {
    return PRODUCTS_DATA.find((p) => p.id === id || p.slug === id);
  }, [id]);

  // Related products from same category or fallback
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS_DATA.filter((p) => p.id !== product.id).slice(0, 3);
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
          className="inline-flex items-center gap-2 bg-sky-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalogue</span>
        </Link>
      </div>
    );
  }

  const formattedPrice = formatINR(product.price);
  const formattedOriginalPrice = product.originalPrice ? formatINR(product.originalPrice) : null;

  const handleDownload = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
          <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/products" className="hover:text-sky-600 transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800 truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Back Link */}
        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Products</span>
        </button>

        {/* Main Product Section: Two Columns (Image Left, Details Right) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Large Product Image (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-100 p-8 flex items-center justify-center overflow-hidden">
              <span className="absolute top-4 left-4 bg-[#081C3B] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
              <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Salt-Free
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Quality Seals */}
            <div className="grid grid-cols-3 gap-2 text-center text-slate-600 text-[11px] font-semibold pt-2">
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Zero Salt</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center gap-1">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>15+ Yrs Life</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center gap-1">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Zero Waste</span>
              </div>
            </div>
          </div>

          {/* Right: Product Info & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Bounten System</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#081C3B] tracking-tight">
                {product.name}
              </h1>
            </div>

            {/* Price Box */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-black text-[#081C3B]">
                {formattedPrice}
              </span>
              {formattedOriginalPrice && (
                <span className="text-base sm:text-lg text-slate-400 font-medium line-through">
                  {formattedOriginalPrice}
                </span>
              )}
              <span className="text-xs text-emerald-700 bg-emerald-100/70 font-bold px-2.5 py-0.5 rounded-full ml-auto">
                Inclusive of all taxes
              </span>
            </div>

            {/* Detailed Description */}
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Product Overview
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {product.description}
              </p>
            </div>

            {/* Primary Action Button: WhatsApp Enquiry */}
            <div className="pt-2 space-y-3">
              <button
                onClick={() => openProductEnquiry(product)}
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <WhatsAppIcon className="w-6 h-6 fill-white" />
                <span>Enquire on WhatsApp</span>
              </button>

              <p className="text-center text-xs text-slate-500">
                Tap above to open WhatsApp with prefilled message containing <strong>{product.name}</strong> and price.
              </p>
            </div>

            {/* Suitable Applications Pills */}
            {product.applications && product.applications.length > 0 && (
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Recommended For
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="bg-sky-50 text-sky-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-sky-100"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Specifications & Features Tabs/Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Specifications Table (Left 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
            <h2 className="text-lg sm:text-xl font-bold text-[#081C3B] border-l-4 border-sky-600 pl-3">
              Technical Specifications
            </h2>

            {product.specifications && product.specifications.length > 0 ? (
              <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden">
                {product.specifications.map((spec, idx) => (
                  <div
                    key={spec.label}
                    className={`grid grid-cols-1 sm:grid-cols-12 p-3.5 text-xs sm:text-sm ${idx % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'
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
            <div className="pt-3">
              <a
                href={COMPANY_CONFIG.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-800"
              >
                <FileDown className="w-4 h-4" />
                <span>Download full technical brochure PDF</span>
              </a>
            </div>
          </div>

          {/* Features and Benefits (Right 5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
            <h2 className="text-lg sm:text-xl font-bold text-[#081C3B] border-l-4 border-emerald-600 pl-3">
              Features & Benefits
            </h2>

            {product.features && product.features.length > 0 ? (
              <div className="space-y-3">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {/* Need Help Card */}
            <div className="mt-6 p-4 rounded-xl bg-sky-50 border border-sky-100 space-y-2 text-xs text-sky-900">
              <div className="font-bold flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-sky-700" />
                <span>Need Installation Feasibility?</span>
              </div>
              <p className="text-sky-800">
                Our technicians provide site inspection and water TDS testing across all major Indian cities.
              </p>
            </div>
          </div>

        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Alternative Capacities
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
                  Related Products You May Also Like
                </h2>
              </div>
              <Link
                to="/products"
                className="text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-800"
              >
                View Catalogue
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

