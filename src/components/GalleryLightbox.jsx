import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export default function GalleryLightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md transition-opacity">
      {/* Top Bar with counter & close button */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-white z-20">
        <div className="text-xs sm:text-sm font-medium text-slate-300">
          <span className="font-bold text-white">{currentIndex + 1}</span> of {items.length}
        </div>
        <button
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-110 z-20 focus:outline-none"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-110 z-20 focus:outline-none"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-4xl max-h-[85vh] p-4 flex flex-col items-center justify-center z-10">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[65vh] w-auto object-contain mx-auto"
          />

          {/* Caption overlay */}
          <div className="p-4 sm:p-6 bg-slate-900/95 text-white border-t border-white/10 space-y-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white">
                {currentItem.title}
              </h3>
              {currentItem.location && (
                <span className="inline-flex items-center gap-1 text-xs text-sky-400">
                  <MapPin className="w-3.5 h-3.5" />
                  {currentItem.location}
                </span>
              )}
            </div>
            {currentItem.description && (
              <p className="text-xs sm:text-sm text-slate-300">
                {currentItem.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

