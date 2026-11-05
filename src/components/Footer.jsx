import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  FileDown,
  ShieldCheck,
  ChevronRight,
  ArrowUp
} from 'lucide-react';
import BountenLogo from './BountenLogo';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_CONFIG } from '../data/config';
import { openGeneralEnquiry } from '../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081C3B] text-slate-300 border-t border-slate-800 relative">
      {/* Upper Value Proposition Strip - Compact & Sleek */}
      <div className="border-b border-slate-800/80 bg-[#0B2447]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-center md:text-left">
              <span className="inline-block text-[11px] uppercase tracking-wider font-bold text-sky-400 mb-0.5">
                Zero-Maintenance Water Softening
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Ready to protect your home and appliances from limescale?
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Speak directly with a Bounten water treatment specialist for a free water TDS consultation.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 flex-shrink-0">
              <button
                onClick={openGeneralEnquiry}
                className="btn-press inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2 rounded-lg font-bold text-xs shadow-md transition-all whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white flex-shrink-0" />
                <span>Chat on WhatsApp</span>
              </button>
              <a
                href={COMPANY_CONFIG.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white border border-slate-700 px-3.5 py-2 rounded-lg font-bold text-xs transition-all whitespace-nowrap"
              >
                <FileDown className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Brochure</span>
              </a>
              <a
                href={COMPANY_CONFIG.flyerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white border border-slate-700 px-3.5 py-2 rounded-lg font-bold text-xs transition-all whitespace-nowrap"
              >
                <FileDown className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Flyer</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid - Reduced Padding & Optimized Spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="bg-white p-2 rounded-lg inline-block shadow-xs transform hover:scale-105 transition-transform duration-300">
              <BountenLogo className="h-7 sm:h-8 w-auto" />
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed font-normal max-w-sm">
              <strong className="text-white">BOUNTEN</strong> (KCS Pride Products LLP) is India’s foremost manufacturer of advanced, salt-free electrolysis water softeners. Delivering 100% eco-friendly, zero-maintenance hard water scale protection for homes, villas, commercial spaces, and industrial operations.
            </p>

            {/* Quick Contact Badges - Compact */}
            <div className="space-y-1.5 pt-1 text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <span className="w-6 h-6 rounded-md bg-sky-950 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-slate-400">Phone:</span>
                  <a href={`tel:${COMPANY_CONFIG.phone}`} className="font-bold hover:text-sky-400 transition-colors">
                    {COMPANY_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200">
                <span className="w-6 h-6 rounded-md bg-emerald-950 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                </span>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-slate-400">WhatsApp:</span>
                  <button onClick={openGeneralEnquiry} className="font-bold hover:text-emerald-400 transition-colors text-left">
                    {COMPANY_CONFIG.displayWhatsApp}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200">
                <span className="w-6 h-6 rounded-md bg-amber-950 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-slate-400">Email:</span>
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="font-bold hover:text-amber-400 transition-colors">
                    {COMPANY_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-sky-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs">
              {[
                { name: 'Home', path: '/' },
                { name: 'All Products', path: '/products' },
                { name: 'Zoftner Pro', path: '/products?cat=Zoftner+Pro' },
                { name: 'Zoftner Quick Fix', path: '/products?cat=Zoftner+Quick+Fix' },
                { name: 'Services & AMC', path: '/services' },
                { name: 'Solutions & Uses', path: '/solutions' },
                { name: 'About Bounten', path: '/about' },
                { name: 'Installation Gallery', path: '/gallery' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-slate-300 hover:text-sky-400 transition-colors inline-flex items-center gap-1 group py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions & Applications (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-sky-500 pl-2">
              Applications
            </h4>
            <ul className="space-y-1.5 text-xs">
              {[
                { name: 'Residential Spaces', path: '/solutions#residential' },
                { name: 'Commercial Buildings', path: '/solutions#commercial' },
                { name: 'Bathing & Shower Care', path: '/products' },
                { name: 'Geysers & Heaters', path: '/products' },
                { name: 'Hotels & Resorts', path: '/solutions#hospitality' },
                { name: 'Swimming Pools', path: '/solutions#swimming-pools' },
                { name: 'Agriculture & Drip', path: '/solutions#agriculture' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-slate-300 hover:text-sky-400 transition-colors inline-flex items-center gap-1 group py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-slate-800">
              <span className="block text-[11px] font-semibold text-sky-400 uppercase tracking-wider mb-1">
                Official Catalogues
              </span>
              <div className="space-y-1 text-xs">
                <a
                  href={COMPANY_CONFIG.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-300 hover:text-sky-400 transition-colors py-0.5"
                >
                  <FileDown className="w-3 h-3 text-sky-400 flex-shrink-0" />
                  <span>Brochure (PDF)</span>
                </a>
                <a
                  href={COMPANY_CONFIG.flyerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-300 hover:text-sky-400 transition-colors py-0.5"
                >
                  <FileDown className="w-3 h-3 text-sky-400 flex-shrink-0" />
                  <span>Flyer (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Official Company Addresses (4 cols) - Compact Cards */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-sky-500 pl-2">
              Corporate Addresses
            </h4>

            {/* Head Office Address */}
            <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-[11px] space-y-0.5 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold uppercase tracking-wide">
                <MapPin className="w-3 h-3 text-sky-400 flex-shrink-0" />
                <span>Head Office Address</span>
              </div>
              <p className="text-slate-300 leading-snug font-normal">
                {COMPANY_CONFIG.headOffice.fullAddress}
              </p>
            </div>

            {/* Authorised Distributor in Tamil Nadu */}
            <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-[11px] space-y-0.5 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-wide">
                <MapPin className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <span>Authorised Distributor in Tamil Nadu</span>
              </div>
              <p className="text-slate-300 leading-snug font-normal">
                {COMPANY_CONFIG.tamilNaduDistributor.fullAddress}
              </p>
            </div>

            {/* Marketing By */}
            <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-[11px] space-y-0.5 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wide">
                <ShieldCheck className="w-3 h-3 text-amber-400 flex-shrink-0" />
                <span>Marketing By</span>
              </div>
              <p className="text-slate-300 leading-snug font-normal">
                <strong className="text-white">{COMPANY_CONFIG.marketingBy.company}</strong> — {COMPANY_CONFIG.marketingBy.address} | Phone: <a href={`tel:${COMPANY_CONFIG.marketingBy.phone}`} className="text-sky-400 hover:underline">{COMPANY_CONFIG.marketingBy.phone}</a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip with Back to Top Button - Compact */}
      <div className="border-t border-slate-800/80 bg-[#06142A] py-3 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
          <div className="text-[11px] text-slate-400">
            © {currentYear} <strong className="text-slate-300">BOUNTEN Global</strong> (KCS Pride Products LLP). All rights reserved.
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-400 flex-wrap justify-center">
            <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">Privacy</Link>
            <span>•</span>
            <Link to="/shipping-policy" className="hover:text-slate-200 transition-colors">Shipping</Link>
            <span>•</span>
            <Link to="/return-and-refund-policy" className="hover:text-slate-200 transition-colors">Returns & Refunds</Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
          </div>

          {/* Smooth Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="btn-press inline-flex items-center gap-1 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 py-1 px-2.5 rounded-md text-[11px] font-medium transition-all border border-slate-700"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
