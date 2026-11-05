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
  ChevronRight
} from 'lucide-react';
import BountenLogo from './BountenLogo';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_CONFIG } from '../data/config';
import { openGeneralEnquiry, openWhatsApp } from '../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleDownload = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#081C3B] text-slate-300 border-t border-slate-800">
      {/* Upper Newsletter / Value Proposition Strip */}
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
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </button>
              <button
                onClick={() => handleDownload(COMPANY_CONFIG.brochureUrl, 'Bounten-Broucher.pdf')}
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white border border-slate-700 px-5 py-3 rounded-xl font-bold text-sm transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white p-3 rounded-xl inline-block shadow-sm">
              <BountenLogo className="h-10 w-auto" />
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed">
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
                  <a href={`tel:${COMPANY_CONFIG.phone}`} className="font-bold hover:text-sky-400 text-sm">
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
                  <button onClick={openGeneralEnquiry} className="font-bold hover:text-emerald-400 text-sm text-left">
                    {COMPANY_CONFIG.displayWhatsApp}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <span className="w-7 h-7 rounded-lg bg-sky-950 flex items-center justify-center text-sky-400">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <span className="block text-slate-400">Email Enquiries:</span>
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="font-bold hover:text-sky-400 text-sm">
                    {COMPANY_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="block text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                Follow Bounten
              </span>
              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a
                  href={COMPANY_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* Twitter / X */}
                <a
                  href={COMPANY_CONFIG.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Twitter / X"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* LinkedIn */}
                <a
                  href={COMPANY_CONFIG.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                {/* YouTube */}
                <a
                  href={COMPANY_CONFIG.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#FF0000] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                {/* Instagram */}
                <a
                  href={COMPANY_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#E4405F] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Products (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-sky-500 pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/#benefits" className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Benefits & Features</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Gallery</span>
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Legal & Policies
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>
                  <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/shipping-policy" className="hover:text-slate-200 transition-colors">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link to="/return-and-refund-policy" className="hover:text-slate-200 transition-colors">
                    Return & Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="hover:text-slate-200 transition-colors">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-sky-500 pl-2.5">
              Our Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Residential Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Commercial Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Industrial Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Agriculture Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Swimming Pool Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Hospitality Solutions
                </Link>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <span className="block text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                Key Downloads
              </span>
              <div className="space-y-2 text-xs">
                <button
                  onClick={() => handleDownload(COMPANY_CONFIG.brochureUrl, 'Bounten-Broucher.pdf')}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white"
                >
                  <FileDown className="w-3.5 h-3.5 text-sky-400" />
                  <span>Download Product Brochure</span>
                </button>
                <button
                  onClick={() => handleDownload(COMPANY_CONFIG.flyerUrl, 'bounten-flyer.pdf')}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white"
                >
                  <FileDown className="w-3.5 h-3.5 text-sky-400" />
                  <span>Download Sales Flyer</span>
                </button>
              </div>
            </div>
          </div>

          {/* Column 4: Official Company Addresses (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-sky-500 pl-2.5">
              Corporate Addresses
            </h4>

            {/* Head Office Address */}
            <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold uppercase tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Head Office Address</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {COMPANY_CONFIG.headOffice.fullAddress}
              </p>
            </div>

            {/* Authorised Distributor in Tamil Nadu */}
            <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Authorised Distributor in Tamil Nadu</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {COMPANY_CONFIG.tamilNaduDistributor.fullAddress}
              </p>
            </div>

            {/* Marketing By */}
            <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Marketing By</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                <strong>{COMPANY_CONFIG.marketingBy.company}</strong><br />
                {COMPANY_CONFIG.marketingBy.address}<br />
                Phone: <a href={`tel:${COMPANY_CONFIG.marketingBy.phone}`} className="text-sky-400 hover:underline">{COMPANY_CONFIG.marketingBy.phone}</a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip */}
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
        </div>
      </div>
    </footer>
  );
}

