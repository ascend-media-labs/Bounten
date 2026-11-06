import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Check, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { formatINR, openProductEnquiry } from '../utils/whatsapp';

export default function ProductCard({ product }) {
  const formattedPrice = formatINR(product.price);
  const formattedOriginalPrice = product.originalPrice ? formatINR(product.originalPrice) : null;

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-sky-400 hover-lift shine-sweep shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden relative">
      {/* Product Image Section: Clean, Full Display, No Badges */}
      <div className="relative h-64 sm:h-72 p-5 flex items-center justify-center bg-gradient-to-b from-slate-50/60 via-white to-slate-50/30 overflow-hidden">
        <Link to={`/products/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 drop-shadow-xs"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Card Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Product Name with color transition */}
          <Link to={`/products/${product.id}`}>
            <h3 className="text-lg font-bold text-[#081C3B] group-hover:text-sky-600 transition-colors duration-300 line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Pricing Row */}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#081C3B] group-hover:text-slate-900 transition-colors">
              {formattedPrice}
            </span>
            {formattedOriginalPrice && (
              <span className="text-sm font-medium text-slate-400 line-through">
                {formattedOriginalPrice}
              </span>
            )}
          </div>

          {/* Key Product Highlights Badge Row */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            <span className="inline-block bg-sky-50 text-sky-700 text-[10px] font-bold px-2 py-0.5 rounded-md border border-sky-100/80 transition-colors group-hover:bg-sky-100">
              Resin-Free | Salt-Free
            </span>
            <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-100/80 transition-colors group-hover:bg-emerald-100">
              5-Yr Electrode
            </span>
            <span className="inline-block bg-amber-50 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-md border border-amber-100/80 transition-colors group-hover:bg-amber-100">
              TDS ≤ 1,999 ppm
            </span>
          </div>

          {/* Short Description */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
            {product.shortDescription}
          </p>
        </div>

        {/* CTA Buttons: View Details & Enquire on WhatsApp */}
        <div className="pt-2 space-y-2">
          {/* Primary WhatsApp Enquiry Button with tactile click */}
          <button
            onClick={() => openProductEnquiry(product)}
            className="btn-press w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
            title={`Enquire on WhatsApp about ${product.name}`}
          >
            <WhatsAppIcon className="w-4 h-4 fill-white transform group-hover:rotate-12 transition-transform duration-300" />
            <span>Enquire on WhatsApp</span>
          </button>

          {/* Secondary View Details Link with arrow slide on hover */}
          <Link
            to={`/products/${product.id}`}
            className="w-full flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-slate-700 py-2 px-3 rounded-xl font-semibold text-xs transition-all duration-300 group/btn"
          >
            <span>View Details & Specs</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
