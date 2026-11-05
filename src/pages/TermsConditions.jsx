import React from 'react';
import { FileText, ShieldCheck, Scale, AlertCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';

export default function TermsConditions() {
  return (
    <div className="bg-slate-50/50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
              User Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#081C3B]">
              Terms and Conditions
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              KCS Pride Products LLP (BOUNTEN) • Valid for bounten.com & Associated Sales
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">1. Introduction & Acceptance</h2>
              <p>
                By accessing <strong>bounten.com</strong>, downloading product brochures or flyers, or placing inquiries via our integrated WhatsApp channel, you agree to be bound by these Terms and Conditions established by <strong>KCS Pride Products LLP</strong> ("BOUNTEN", "we", "our").
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">2. Enquiry-Based Product Catalogue</h2>
              <p>
                The BOUNTEN website functions as an informative, enquiry-based product showcase. Clicking "Enquire on WhatsApp" generates a direct prefilled enquiry message connecting you with our technical sales team for personalized sizing, borewell TDS review, and site consultation. Prices listed on the website are in Indian Rupees (INR) and represent standard MRP / catalog guide values subject to custom site pipe fittings and optional AMC add-ons.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">3. Installation & Technical Guidelines</h2>
              <p>
                To maintain full warranty coverage, Bounten water softeners must be installed in accordance with our provided technical user manual:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Pre-filtration (such as a disc or bag filter) should be installed ahead of the Zoftnor unit to catch heavy mud, sand, and particulate suspended silt.</li>
                <li>Proper electrical earthing must be verified for all electronic controller modules.</li>
                <li>Maximum recommended pipeline operating pressure is 8 to 10 Bar unless equipped with industrial pressure relief valves.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">4. Intellectual Property Rights</h2>
              <p>
                The trademark "BOUNTEN", the blue-and-orange overlapping oval emblem, the "Zoftnor" series brand names, technical diagrams, brochure layouts, and digital media hosted on this website are the proprietary intellectual property of KCS Pride Products LLP. Unauthorized reproduction or commercial impersonation is strictly prohibited under Indian trademark and copyright law.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">5. Limitation of Liability & Governing Law</h2>
              <p>
                Bounten shall not be liable for indirect, incidental, or consequential damages resulting from improper third-party plumbing execution or pipe freeze conditions. These terms are governed exclusively by the laws of India, and any disputes shall be adjudicated solely within the competent civil courts of Hyderabad, Telangana.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">6. Corporate Contact Information</h2>
              <p>
                <strong>KCS Pride Products LLP (BOUNTEN)</strong><br />
                Head Office: {COMPANY_CONFIG.headOffice.fullAddress}<br />
                Phone / WhatsApp: {COMPANY_CONFIG.phone}<br />
                Email: <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-sky-600 hover:underline">{COMPANY_CONFIG.email}</a>
              </p>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}

