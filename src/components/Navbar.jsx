import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, FileDown, PhoneCall } from 'lucide-react';
import BountenLogo from './BountenLogo';
import WhatsAppIcon from './WhatsAppIcon';
import { NAV_LINKS } from '../data/navigation';
import { openGeneralEnquiry } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../data/config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Sticky navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#081C3B] text-slate-300 text-xs py-2 px-4 border-b border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              India's Leading Salt-Free Water Softeners
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline">Call / WhatsApp: <strong className="text-white">{COMPANY_CONFIG.displayWhatsApp}</strong></span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={openGeneralEnquiry}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors btn-press"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp: {COMPANY_CONFIG.displayWhatsApp}</span>
            </button>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-slate-400">Head Office: Banjara Hills, Hyderabad</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-400 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5' 
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo on Left with smooth hover scale */}
            <div className="flex-shrink-0 flex items-center transform hover:scale-105 transition-transform duration-300">
              <BountenLogo className="h-10 sm:h-12 w-auto" />
            </div>

            {/* Desktop Navigation Links on Right */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
              {NAV_LINKS.map((link) => {
                if (link.isDownload) {
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 rounded-xl hover:bg-sky-50 transition-all duration-300 relative overflow-hidden"
                      title={`Open official ${link.name}`}
                    >
                      <FileDown className="w-4 h-4 text-sky-500 transform group-hover:translate-y-0.5 transition-transform duration-200" />
                      <span>{link.name}</span>
                    </a>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 group ${
                        isActive
                          ? 'text-sky-600 bg-sky-50/80 font-bold shadow-xs'
                          : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">{link.name}</span>
                        {/* Animated expanding bottom underline on active/hover */}
                        <span
                          className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full transition-transform duration-300 ${
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                );
              })}

              {/* WhatsApp Quick Icon Button with fluid bounce */}
              <button
                onClick={openGeneralEnquiry}
                className="btn-press ml-3 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                title="Enquire on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Enquire</span>
              </button>
            </nav>

            {/* Tablet & Compact Menu Actions (< 1280px) */}
            <div className="flex items-center xl:hidden space-x-2">
              {/* Mobile WhatsApp Button */}
              <button
                onClick={openGeneralEnquiry}
                className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors btn-press"
                aria-label="WhatsApp Enquiry"
                title="WhatsApp Enquiry"
              >
                <WhatsAppIcon className="w-6 h-6 fill-[#25D366]" />
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl focus:outline-none transition-colors"
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6 text-sky-600" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Smooth Slide & Spring Feel */}
        {isOpen && (
          <div className="fixed inset-0 top-[108px] z-50 xl:hidden">
            {/* Backdrop Fade */}
            <div
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-Down Menu Content */}
            <div className="relative bg-white border-b border-slate-200 px-5 pt-3 pb-8 shadow-2xl max-h-[calc(100vh-120px)] overflow-y-auto animate-in slide-in-from-top-4 duration-300 space-y-3">
              <nav className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => {
                  if (link.isDownload) {
                    return (
                      <a
                        key={link.name}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-sky-700 bg-sky-50/70 hover:bg-sky-100 border border-sky-100 transition-colors my-1"
                      >
                        <span className="flex items-center gap-2">
                          <FileDown className="w-4 h-4 text-sky-600" />
                          <span>{link.name}</span>
                        </span>
                        <span className="text-xs bg-white text-sky-800 px-2 py-0.5 rounded-full font-bold">PDF</span>
                      </a>
                    );
                  }

                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? 'text-sky-600 bg-sky-50 font-bold border-l-4 border-sky-600'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-sky-600'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                    </NavLink>
                  );
                })}
              </nav>

              {/* Bottom Quick Contact on Mobile Menu */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => {
                    openGeneralEnquiry();
                    setIsOpen(false);
                  }}
                  className="btn-press w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
