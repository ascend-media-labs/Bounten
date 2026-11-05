import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { formatINR, openProductEnquiry } from '../utils/whatsapp';

export default function ProductCard({ product }) {
  const formattedPrice = formatINR(product.price);
  const formattedOriginalPrice = product.originalPrice ? formatINR(product.originalPrice) : null;

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Product Image Section */}
      <div className="relative aspect-[4/3] bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden flex items-center justify-center p-4">
        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-[#081C3B] font-bold text-xs px-2.5 py-1 rounded-md shadow-xs border border-slate-200/60">
            <Zap className="w-3 h-3 text-sky-500 fill-sky-500" />
            {product.category}
          </span>
        </div>

        {/* Salt-free badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
            Salt-Free
          </span>
        </div>

        <Link to={`/products/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Card Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Product Name */}
          <Link to={`/products/${product.id}`}>
            <h3 className="text-lg font-bold text-[#081C3B] group-hover:text-sky-600 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Pricing Row */}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#081C3B]">
              {formattedPrice}
            </span>
            {formattedOriginalPrice && (
              <span className="text-sm font-medium text-slate-400 line-through">
                {formattedOriginalPrice}
              </span>
            )}
          </div>

          {/* Short Description */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* CTA Buttons: View Details & Enquire on WhatsApp */}
        <div className="pt-2 space-y-2">
          {/* Primary WhatsApp Enquiry Button */}
          <button
            onClick={() => openProductEnquiry(product)}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-3 rounded-xl font-bold text-sm shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
            title={`Enquire on WhatsApp about ${product.name}`}
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none" />
            <span>Enquire on WhatsApp</span>
          </button>

          {/* Secondary View Details Link */}
          <Link
            to={`/products/${product.id}`}
            className="w-full flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 text-slate-700 py-2 px-3 rounded-xl font-semibold text-xs transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
