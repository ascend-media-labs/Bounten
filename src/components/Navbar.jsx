import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, FileDown, PhoneCall } from 'lucide-react';
import BountenLogo from './BountenLogo';
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
    window.addEventListener('scroll', handleScroll);
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

  const handleDownload = (url, fileName) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#081C3B] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              India's Leading Salt-Free Water Softeners
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline">Toll Free: <strong className="text-white">{COMPANY_CONFIG.tollFree}</strong></span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={openGeneralEnquiry}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp: {COMPANY_CONFIG.displayWhatsApp}</span>
            </button>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-slate-400">Head Office: Banjara Hills, Hyderabad</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md ${
          isScrolled ? 'shadow-md border-b border-slate-200/80 py-2.5' : 'border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo on Left */}
            <div className="flex-shrink-0 flex items-center">
              <BountenLogo className="h-10 sm:h-12 w-auto" />
            </div>

            {/* Desktop Navigation Links on Right */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
              {NAV_LINKS.map((link) => {
                if (link.isDownload) {
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleDownload(link.path, link.fileName)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 rounded-lg hover:bg-sky-50 transition-all duration-200"
                      title={`Download official ${link.name}`}
                    >
                      <FileDown className="w-4 h-4 text-sky-500" />
                      <span>{link.name}</span>
                    </button>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'text-sky-600 bg-sky-50/80 font-bold'
                          : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-sky-600 rounded-full" />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}

              {/* WhatsApp Quick Icon Button */}
              <button
                onClick={openGeneralEnquiry}
                className="ml-3 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 active:scale-95"
                title="Enquire on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Enquire</span>
              </button>
            </nav>

            {/* Tablet & Compact Menu Actions (< 1280px) */}
            <div className="flex items-center xl:hidden space-x-2">
              {/* Mobile WhatsApp Button */}
              <button
                onClick={openGeneralEnquiry}
                className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                aria-label="WhatsApp Enquiry"
                title="WhatsApp Enquiry"
              >
                <MessageCircle className="w-6 h-6 fill-[#25D366] stroke-none" />
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer panel */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <BountenLogo className="h-8 w-auto" />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
              {NAV_LINKS.map((link) => {
                if (link.isDownload) {
                  return (
                    <button
                      key={link.name}
                      onClick={() => {
                        handleDownload(link.path, link.fileName);
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3.5 py-3 text-base font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors text-left"
                    >
                      <FileDown className="w-5 h-5 text-sky-500" />
                      <span>{link.name}</span>
                    </button>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-3.5 py-3 text-base font-semibold rounded-xl transition-colors ${
                        isActive
                          ? 'text-sky-600 bg-sky-50 font-bold'
                          : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
              <button
                onClick={() => {
                  openGeneralEnquiry();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-bold shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                <span>Contact on WhatsApp</span>
              </button>

              <div className="text-center text-xs text-slate-500 pt-1">
                Toll Free: <strong className="text-slate-800">{COMPANY_CONFIG.tollFree}</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
