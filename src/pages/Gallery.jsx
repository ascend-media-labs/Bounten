import React, { useState, useMemo } from 'react';
import {
  Camera,
  Maximize2,
  MapPin,
  Filter,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import GalleryLightbox from '../components/GalleryLightbox';
import { openGeneralEnquiry } from '../utils/whatsapp';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-16 space-y-12">
      
      {/* 1. Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Visual Proof of Excellence
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#081C3B] tracking-tight">
            BOUNTEN Media & Installation Gallery
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Explore authentic photographs of real residential villa installations, commercial cooling plants, manufacturing assembly lines, certified water testing labs, and company leadership.
          </p>

          {/* Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#081C3B] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Responsive Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Preview with Hover Overlay */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#081C3B]/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Text Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-bold text-base text-[#081C3B] group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  {item.location && (
                    <div className="flex items-center gap-1 text-xs text-sky-600 font-semibold mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Component */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentIndex={activeImageIndex}
        items={filteredItems}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#081C3B] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              On-Site Installations
            </span>
            <h3 className="text-2xl font-bold text-white">
              Want to see how Zoftnor fits into your overhead tank line?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Send us a photo of your inlet pipe or overhead tank setup via WhatsApp for instant technical feasibility.
            </p>
          </div>

          <button
            onClick={openGeneralEnquiry}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none" />
            <span>Send Plumbing Photo</span>
          </button>
        </div>
      </section>

    </div>
  );
}

