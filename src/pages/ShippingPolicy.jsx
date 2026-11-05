import React from 'react';
import { Truck, Clock, ShieldCheck, MapPin, PackageCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';

export default function ShippingPolicy() {
  return (
    <div className="bg-slate-50/50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
              Logistics & Fulfillment
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#081C3B]">
              Shipping & Delivery Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              PAN India Delivery • Direct Dispatch from Hyderabad & Regional Hubs
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">1. PAN India Service Coverage</h2>
              <p>
                <strong>BOUNTEN</strong> ships its complete range of water treatment products, including Zoftnor Max Easyfit models, Zoftnor Pro units, inline Descalers, and Turbfree sediment pre-filters, across all states and union territories in India.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">2. Order Processing & Dispatch Timelines</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li><strong>Order Confirmation:</strong> Following confirmation through our WhatsApp sales team or authorized distributor, orders are processed within 24 business hours.</li>
                <li><strong>Metro Cities (Hyderabad, Bengaluru, Chennai, Mumbai, Delhi NCR, Pune):</strong> Estimated delivery within 2 to 4 business days.</li>
                <li><strong>Tier 2 & Tier 3 Towns / Rural Regions:</strong> Estimated delivery within 4 to 7 business days.</li>
                <li><strong>Commercial & High-Flow Skids (above 10,000 LPH):</strong> Custom fabrication and dispatch within 7 to 14 business days.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">3. Packaging & Transit Insurance</h2>
              <p>
                All Bounten systems are shipped in reinforced wooden crates or multi-layered corrugated packaging with custom shock-absorbent foam inserts to safeguard electronic controllers, sensors, and stainless steel chambers. Shipments carry comprehensive transit insurance against transit breakage or loss.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">4. Tracking & Unboxing Instructions</h2>
              <p>
                Upon dispatch, customers receive courier tracking details and AWB numbers directly via WhatsApp and SMS. We request customers to inspect the outer seal before accepting delivery. In the rare event of visible outer container damage, please photograph the parcel and notify our support hotline immediately.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-base sm:text-lg font-bold text-[#081C3B]">5. Dispatch Support</h2>
              <p>
                For status enquiries regarding ongoing dispatches:<br />
                Helpline: <strong>{COMPANY_CONFIG.phone}</strong> | WhatsApp: <strong>{COMPANY_CONFIG.displayWhatsApp}</strong><br />
                Email: <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-sky-600 hover:underline">{COMPANY_CONFIG.email}</a>
              </p>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}

