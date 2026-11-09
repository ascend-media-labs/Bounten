import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  Maximize2,
  MapPin,
  Filter,
  CheckCircle2,
  ChevronRight,
  Sparkles
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
    <div className="bg-slate-50 min-h-screen py-3 sm:py-5">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6 sm:space-y-7">
        
        {/* Page Breadcrumb & Side Heading Header */}
        <div className="space-y-2">
          <nav className="flex items-center space-x-1.5 text-xs text-slate-500">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-800">Media & Installation Gallery</span>
          </nav>

          <AnimatedSection animation="fade-up" duration={500}>
            <div className="space-y-1.5 pt-0.5 max-w-4xl text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-sky-100 text-sky-800 border border-sky-200 w-fit">
                <Sparkles className="w-3 h-3 text-sky-600" />
                Visual Proof of Excellence
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B] tracking-tight">
                BOUNTEN Media & Installation Gallery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify">
                Explore authentic photographs of real residential villa installations, commercial cooling plants, manufacturing assembly lines, certified water testing labs, and company leadership.
              </p>

              {/* Category Filter Tabs */}
              <div className="pt-2 flex flex-wrap items-center justify-start gap-1.5 sm:gap-2">
                {GALLERY_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`btn-press px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                      selectedCategory === cat
                        ? 'bg-[#081C3B] text-white border-[#081C3B] shadow-md scale-105'
                        : 'bg-white hover:bg-sky-50 text-slate-700 border-slate-200 hover:border-sky-300 shadow-xs'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 2. Responsive Image Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
    </div>
  );
}
