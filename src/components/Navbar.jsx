import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FileDown, PhoneCall } from 'lucide-react';
import BountenLogo from './BountenLogo';
import WhatsAppIcon from './WhatsAppIcon';
import { NAV_LINKS } from '../data/navigation';
import { openGeneralEnquiry } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../data/config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Sticky navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on scroll when on home page
  useEffect(() => {
    if (!isHomePage) {
      // If on another page, set active section based on current path
      const currentNav = NAV_LINKS.find(
        (link) => !link.isDownload && link.path === location.pathname
      );
      if (currentNav && currentNav.sectionId) {
        setActiveSection(currentNav.sectionId);
      }
      return;
    }

    const sections = ['home', 'products', 'services', 'solutions', 'benefits', 'about', 'gallery'];

    const handleScrollSpy = () => {
      // Top of page
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const secId = sections[i];
        const el = document.getElementById(secId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(secId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy(); // initialize on load
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [isHomePage, location.pathname]);

  // Handle clicking on nav items (smooth scroll on home, navigate otherwise)
  const handleNavClick = (e, link) => {
    if (link.isDownload) return; // native download

    if (link.name === 'Products') {
      e.preventDefault();
      navigate('/products');
      setIsOpen(false);
      return;
    }

    if (link.name === 'Benefits') {
      e.preventDefault();
      navigate('/benefits');
      setIsOpen(false);
      return;
    }

    if (link.name === 'Services') {
      e.preventDefault();
      navigate('/services');
      setIsOpen(false);
      return;
    }

    if (link.name === 'Home') {
      e.preventDefault();
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      } else {
        navigate('/');
      }
      setIsOpen(false);
      return;
    }

    if (isHomePage) {
      e.preventDefault();
      const secId = link.sectionId || 'home';
      const el = document.getElementById(secId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(secId);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      }
    } else {
      // If on another page, navigate directly to page path or home anchor
      if (link.path && !link.path.includes('#') && link.path !== '/') {
        navigate(link.path);
      } else if (link.sectionId) {
        e.preventDefault();
        navigate(`/#${link.sectionId}`);
      } else {
        navigate(link.path);
      }
    }
    setIsOpen(false);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile drawer is open & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#081C3B] text-slate-300 text-xs py-2 px-4 border-b border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse flex-shrink-0"></span>
              India's Leading Salt-Free Water Softeners
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline whitespace-nowrap">Call / WhatsApp: <strong className="text-white">{COMPANY_CONFIG.displayWhatsApp}</strong></span>
          </div>

          <div className="flex items-center gap-4 text-xs whitespace-nowrap">
            <button
              onClick={openGeneralEnquiry}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors btn-press"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current flex-shrink-0" />
              <span>WhatsApp: {COMPANY_CONFIG.displayWhatsApp}</span>
            </button>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-slate-400">Head Office: Banjara Hills, Hyderabad</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 relative ${
          isScrolled 
            ? 'bg-white shadow-md border-b border-slate-200/80 py-2.5' 
            : 'bg-white border-b border-slate-100 py-3'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between gap-2 lg:gap-3">
            
            {/* Logo on Left - strictly flex-shrink-0 */}
            <div className="flex-shrink-0 flex items-center mr-1 sm:mr-2">
              <Link
                to="/"
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setActiveSection('home');
                  }
                }}
                className="transform hover:scale-105 transition-transform duration-300 inline-block"
              >
                <BountenLogo className="h-8 sm:h-9 xl:h-10 w-auto flex-shrink-0" />
              </Link>
            </div>

            {/* Desktop Navigation Links - STRICTLY SINGLE LINE WITH whitespace-nowrap */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-nowrap whitespace-nowrap flex-shrink-0">
              {NAV_LINKS.map((link) => {
                if (link.isDownload) {
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-nowrap flex-shrink-0 group inline-flex items-center gap-1 px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold text-slate-700 hover:text-sky-600 rounded-xl hover:bg-sky-50 transition-all duration-300 relative"
                      title={`Open official ${link.name}`}
                    >
                      <FileDown className="w-3.5 h-3.5 text-sky-500 flex-shrink-0 transform group-hover:translate-y-0.5 transition-transform duration-200" />
                      <span className="whitespace-nowrap">{link.name}</span>
                    </a>
                  );
                }

                // Check active state: either based on scrollspy (on home) or pathname (on subpage)
                const isActive = isHomePage
                  ? activeSection === link.sectionId
                  : location.pathname === link.path;

                return (
                  <a
                    key={link.name}
                    href={isHomePage ? `#${link.sectionId}` : link.path}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`whitespace-nowrap flex-shrink-0 relative px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold rounded-xl transition-all duration-300 ease-in-out cursor-pointer ${
                      isActive
                        ? 'text-sky-600 bg-sky-50/90 font-bold shadow-xs'
                        : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="relative z-10 whitespace-nowrap">{link.name}</span>
                  </a>
                );
              })}

              {/* WhatsApp Quick Icon Button - strictly single line, no cut off */}
              <button
                onClick={openGeneralEnquiry}
                className="btn-press ml-1.5 xl:ml-2.5 inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-xs xl:text-sm font-bold shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap flex-shrink-0"
                title="Enquire on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white flex-shrink-0" />
                <span className="whitespace-nowrap">Enquire on WhatsApp</span>
              </button>
            </nav>

            {/* Tablet & Compact Menu Actions (< 1024px) */}
            <div className="flex items-center lg:hidden space-x-1.5 flex-shrink-0">
              {/* Mobile WhatsApp Button (visible when menu is closed) */}
              {!isOpen && (
                <button
                  onClick={openGeneralEnquiry}
                  className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors btn-press"
                  aria-label="WhatsApp Enquiry"
                  title="WhatsApp Enquiry"
                >
                  <WhatsAppIcon className="w-6 h-6 fill-[#25D366]" />
                </button>
              )}

              {/* Mobile Hamburger / Close Toggle on Top-Right */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-xl transition-colors focus:outline-none ${
                  isOpen
                    ? 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {isOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-800" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown directly attached under navbar with ZERO GAP */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-50 lg:hidden max-h-[calc(100vh-65px)] overflow-y-auto px-5 pt-3 pb-8 space-y-2.5 animate-in slide-in-from-top-2 duration-200">
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
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-sky-700 bg-sky-50/70 hover:bg-sky-100 border border-sky-100 transition-colors my-0.5 whitespace-nowrap"
                    >
                      <span className="flex items-center gap-2 whitespace-nowrap">
                        <FileDown className="w-4 h-4 text-sky-600 flex-shrink-0" />
                        <span className="whitespace-nowrap">{link.name}</span>
                      </span>
                      <span className="text-[11px] bg-white text-sky-800 px-2 py-0.5 rounded-full font-bold shadow-xs">PDF</span>
                    </a>
                  );
                }

                const isActive = isHomePage
                  ? activeSection === link.sectionId
                  : location.pathname === link.path;

                return (
                  <a
                    key={link.name}
                    href={isHomePage ? `#${link.sectionId}` : link.path}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ease-in-out whitespace-nowrap ${
                      isActive
                        ? 'text-sky-600 bg-sky-50 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-sky-600'
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Bottom Quick Contact on Mobile Menu */}
            <div className="pt-3 pb-2 border-t border-slate-100">
              <button
                onClick={() => {
                  openGeneralEnquiry();
                  setIsOpen(false);
                }}
                className="btn-press w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md transition-all whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white flex-shrink-0" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-xs lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
