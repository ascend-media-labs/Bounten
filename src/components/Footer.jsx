import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  FileDown,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
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
      {/* Upper Value Proposition Strip */}
      <div className="border-b border-slate-800/80 bg-[#0B2447]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="inline-block text-xs uppercase tracking-wider font-bold text-sky-400 mb-1">
                Zero-Maintenance Water Softening
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Ready to protect your home and appliances from limescale?
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Speak directly with a Bounten water treatment specialist for a free water TDS consultation.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={openGeneralEnquiry}
                className="btn-press inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </button>
              <a
                href={COMPANY_CONFIG.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white border border-slate-700 px-5 py-3 rounded-xl font-bold text-sm transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Brochure</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white p-3 rounded-xl inline-block shadow-sm transform hover:scale-105 transition-transform duration-300">
              <BountenLogo className="h-10 w-auto" />
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              <strong>BOUNTEN</strong> (KCS Pride Products LLP) is India’s foremost manufacturer of advanced, salt-free electrolysis water softeners. Delivering 100% eco-friendly, zero-maintenance hard water scale protection for homes, villas, commercial spaces, and industrial operations.
            </p>

            {/* Quick Contact Badges */}
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-center gap-3 text-slate-200">
                <span className="w-7 h-7 rounded-lg bg-sky-950 flex items-center justify-center text-sky-400">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <span className="block text-slate-400">Phone Support:</span>
                  <a href={`tel:${COMPANY_CONFIG.phone}`} className="font-bold hover:text-sky-400 text-sm transition-colors">
                    {COMPANY_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <span className="w-7 h-7 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400">
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                </span>
                <div>
                  <span className="block text-slate-400">WhatsApp Support:</span>
                  <button onClick={openGeneralEnquiry} className="font-bold hover:text-emerald-400 text-sm text-left transition-colors">
                    {COMPANY_CONFIG.displayWhatsApp}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <span className="w-7 h-7 rounded-lg bg-amber-950 flex items-center justify-center text-amber-400">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <span className="block text-slate-400">Official Email:</span>
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="font-bold hover:text-amber-400 text-sm transition-colors">
                    {COMPANY_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-sky-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: 'Home', path: '/' },
                { name: 'All Products', path: '/products' },
                { name: 'Zoftner Pro (With Bag Filter)', path: '/products?cat=Zoftner+Pro' },
                { name: 'Zoftner Quick Fix', path: '/products?cat=Zoftner+Quick+Fix' },
                { name: 'Solutions & Uses', path: '/solutions' },
                { name: 'Installation Gallery', path: '/gallery' },
                { name: 'About Bounten', path: '/about' },
                { name: 'Services & AMC', path: '/services' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-slate-300 hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions & Applications (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-sky-500 pl-2.5">
              Applications
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: 'Residential Applications', path: '/solutions#residential' },
                { name: 'Commercial Spaces', path: '/solutions#commercial' },
                { name: 'Everyday Bathing & Shower', path: '/products' },
                { name: 'Geysers & Water Heaters', path: '/products' },
                { name: 'Hotels & Resorts', path: '/solutions#hospitality' },
                { name: 'Swimming Pool Care', path: '/solutions#swimming-pools' },
                { name: 'Agriculture & Drip', path: '/solutions#agriculture' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-slate-300 hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <span className="block text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                Official Catalogues
              </span>
              <div className="space-y-2 text-xs">
                <a
                  href={COMPANY_CONFIG.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5 text-sky-400" />
                  <span>Product Brochure (PDF)</span>
                </a>
                <a
                  href={COMPANY_CONFIG.flyerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5 text-sky-400" />
                  <span>Quick Flyer (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Official Company Addresses (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-sky-500 pl-2.5">
              Corporate Addresses
            </h4>

            {/* Head Office Address */}
            <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold uppercase tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Head Office Address</span>
              </div>
              <p className="text-slate-300 leading-relaxed font-normal">
                {COMPANY_CONFIG.headOffice.fullAddress}
              </p>
            </div>

            {/* Authorised Distributor in Tamil Nadu */}
            <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Authorised Distributor in Tamil Nadu</span>
              </div>
              <p className="text-slate-300 leading-relaxed font-normal">
                {COMPANY_CONFIG.tamilNaduDistributor.fullAddress}
              </p>
            </div>

            {/* Marketing By */}
            <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Marketing By</span>
              </div>
              <p className="text-slate-300 leading-relaxed font-normal">
                <strong>{COMPANY_CONFIG.marketingBy.company}</strong><br />
                {COMPANY_CONFIG.marketingBy.address}<br />
                Phone: <a href={`tel:${COMPANY_CONFIG.marketingBy.phone}`} className="text-sky-400 hover:underline">{COMPANY_CONFIG.marketingBy.phone}</a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip with Back to Top Button */}
      <div className="border-t border-slate-800/80 bg-[#06142A] py-6 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            © {currentYear} <strong>BOUNTEN Global</strong> (KCS Pride Products LLP). All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400 flex-wrap justify-center">
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
            className="btn-press inline-flex items-center gap-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all border border-slate-700"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
