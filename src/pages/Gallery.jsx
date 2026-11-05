import React, { useState, useMemo } from 'react';
import {
  Camera,
  Maximize2,
  MapPin,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import GalleryLightbox from '../components/GalleryLightbox';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
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
        <AnimatedSection animation="fade-down" duration={700}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md text-center max-w-4xl mx-auto space-y-4 hover-lift transition-all">
            <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-sky-600 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
              Visual Proof of Excellence
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#081C3B] tracking-tight">
              BOUNTEN Media & Installation Gallery
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Explore authentic photographs of real residential villa installations, commercial cooling plants, manufacturing assembly lines, certified water testing labs, and company leadership.
            </p>

            {/* Category Filter Tabs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn-press px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#081C3B] text-white shadow-md scale-105'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. Responsive Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <AnimatedSection key={item.id} animation="fade-up" delay={(index % 6) * 80} duration={600}>
              <div
                onClick={() => handleOpenLightbox(index)}
                className="group cursor-pointer bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover-lift shine-sweep transition-all duration-400 overflow-hidden flex flex-col h-full"
              >
                {/* Image Preview with Hover Overlay */}
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#081C3B]/85 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Caption Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-bold text-base text-[#081C3B] group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.location && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-2 border-t border-slate-100">
                      <MapPin className="w-3.5 h-3.5 text-sky-500" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for enlarged view */}
      {lightboxOpen && (
        <GalleryLightbox
          items={filteredItems}
          currentIndex={activeImageIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
