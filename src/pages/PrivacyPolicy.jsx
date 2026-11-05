import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50/50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
              Legal Document
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#081C3B]">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Last Updated: March 2026 • <strong>BOUNTEN Global (KCS Pride Products LLP)</strong>
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">1. Overview & Commitment</h2>
              <p>
                At <strong>BOUNTEN</strong> (operated by KCS Pride Products LLP, headquartered in Hyderabad, Telangana), we respect your privacy and are committed to protecting any personal information you share with us through our website (bounten.com), direct WhatsApp communications, phone inquiries, and service requests.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">2. Information We Collect</h2>
              <p>We only collect information necessary to answer product enquiries, process water treatment consultations, and fulfill on-site service appointments:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Contact details:</strong> Name, phone number, WhatsApp number, email address.</li>
                <li><strong>Property details:</strong> Location, city, type of dwelling (apartment/villa/commercial), water source (borewell/municipal).</li>
                <li><strong>Water Quality Parameters:</strong> TDS levels, hardness values, or test reports submitted for sizing recommendation.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">3. How We Use Your Data</h2>
              <p>Your information is used solely for legitimate business purposes:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Providing customized water softener sizing and price quotations.</li>
                <li>Dispatching certified technicians for installation and Annual Maintenance Contract (AMC) visits.</li>
                <li>Sending official warranty certificates and user manuals via WhatsApp or email.</li>
                <li>Direct customer service support and technical troubleshooting.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">4. No Sharing or Selling of Data</h2>
              <p>
                We do not sell, lease, or rent customer contact information to third-party advertisers or data brokers under any circumstances. Information is only shared with our authorized regional distributors (such as Global Talent Nexus in Tamil Nadu) and logistics partners strictly for product delivery and on-site service execution.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">5. Security & Jurisdiction</h2>
              <p>
                We implement strict administrative, technical, and physical measures to safeguard your data in compliance with the Information Technology Act, 2000 and related Indian cybersecurity rules. Any disputes are subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">6. Contact Privacy Officer</h2>
              <p>
                For questions regarding this policy or to request deletion of your records, contact:<br />
                <strong>KCS Pride Products LLP (BOUNTEN)</strong><br />
                Email: <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-sky-600 hover:underline">{COMPANY_CONFIG.email}</a><br />
                Address: {COMPANY_CONFIG.headOffice.fullAddress}
              </p>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
