import React from 'react';
import { RotateCcw, ShieldAlert, CheckCircle2, FileQuestion } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';

export default function RefundPolicy() {
  return (
    <div className="bg-slate-50/50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
              Customer Assurance
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#081C3B]">
              Return & Refund Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Transparent Warranties & Guarantee Guidelines • BOUNTEN Global
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">1. 100% Quality Assurance & Warranty Guarantee</h2>
              <p>
                Every <strong>BOUNTEN</strong> water treatment unit is thoroughly tested before leaving our assembly facility. We stand behind our engineering with a comprehensive limited manufacturer warranty protecting against manufacturing defects in the reactor core and electronic controller.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">2. Eligibility for Returns & Replacements</h2>
              <p>Items are eligible for return or free replacement under the following conditions:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Transit Damage:</strong> If the product arrives physically dented or damaged, reported within 48 hours of delivery with photographic proof.</li>
                <li><strong>Incorrect Model:</strong> If the model delivered differs from the invoice or WhatsApp consultation agreement.</li>
                <li><strong>Manufacturing Malfunction:</strong> Inherent electronic or mechanical defects confirmed by our authorized service technician upon unboxing/installation.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">3. Non-Returnable Scenarios</h2>
              <p>Returns cannot be accepted in the following circumstances:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Damage resulting from unapproved third-party modifications, unauthorized opening of sealed electronic enclosures, or severe electrical lightning surges without proper earthing.</li>
                <li>Products operated outside prescribed pressure limits (exceeding 10 Bar) without pressure-reducing valves where specified.</li>
                <li>Units that have been installed and used for more than 30 days without reporting an issue.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">4. Refund Process & Settlement Timelines</h2>
              <p>
                Once an authorized return is received and inspected at our central warehouse in Hyderabad, approved refunds are initiated within 3 to 5 business days. The refund amount will be credited back via original payment method (NEFT / IMPS / UPI) and confirmed via WhatsApp.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">5. Support Helpline</h2>
              <p>
                To initiate a warranty claim or return inspection:<br />
                WhatsApp: <strong>{COMPANY_CONFIG.displayWhatsApp}</strong> | Toll Free: <strong>{COMPANY_CONFIG.tollFree}</strong><br />
                Email: <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-sky-600 hover:underline">{COMPANY_CONFIG.email}</a>
              </p>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
