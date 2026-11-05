import React from 'react';
import {
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  PhoneCall,
  MessageCircle,
  FileCheck,
  Zap,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, SERVICE_BENEFITS } from '../data/services';
import { openServiceEnquiry, openWhatsApp } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../data/config';

export default function Services() {
  return (
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-16 space-y-16">
      
      {/* 1. Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Certified Manufacturer Support
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#081C3B] tracking-tight">
            Genuine Bounten Service & Maintenance Support
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Ensure peak water conditioning performance with factory-trained engineers, genuine SS 304 spare parts, annual maintenance contracts (AMC), and responsive PAN India technical coverage.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openServiceEnquiry("Book a Service Visit")}
              className="inline-flex items-center gap-2 bg-[#081C3B] hover:bg-[#0B2447] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <Wrench className="w-4 h-4 text-sky-400" />
              <span>Book a Service</span>
            </button>

            <button
              onClick={() => openServiceEnquiry("General Service Enquiry")}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              <span>WhatsApp Enquiry</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Service Offerings Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Dedicated Customer Care
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
            Official Service Capabilities
          </h2>
          <p className="text-slate-600 text-sm">
            We don't rely on unverified third-party contractors. Every Bounten service call is attended by certified in-house technical personnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                    {service.badge}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>

                <h3 className="text-xl font-bold text-[#081C3B]">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Card Footer with Actions */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="text-[11px] text-slate-500 font-medium">
                  <strong>SLA:</strong> {service.sla}
                </div>
                
                <button
                  onClick={() => openServiceEnquiry(service.title)}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-3 rounded-xl font-bold text-xs transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  <span>Enquire for {service.title}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Genuine Bounten Service (Benefits) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#081C3B] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Service Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Choose Genuine Bounten Service?
            </h2>
            <p className="text-slate-300 text-sm">
              Avoid improper plumbing installations and counterfeit parts that void warranties and reduce water conditioning efficacy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left text-xs text-slate-300">
              Need immediate technical help? Call or WhatsApp us: <strong className="text-white text-sm">{COMPANY_CONFIG.displayWhatsApp}</strong>
            </div>

            <button
              onClick={() => openServiceEnquiry("Annual Maintenance Contract (AMC)")}
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
            >
              <span>Explore AMC Plans</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Book a Service CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Rapid Technician Dispatch
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Ready to schedule an installation or service visit?
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed">
              Message us directly on WhatsApp with your location and requirement, and our service coordinator will confirm your time slot.
            </p>
          </div>

          <button
            onClick={() => openServiceEnquiry("Direct Service Booking")}
            className="inline-flex items-center gap-2.5 bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-4 rounded-2xl font-black text-sm shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95 flex-shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-emerald-600 stroke-none" />
            <span>Book a Service via WhatsApp</span>
          </button>
        </div>
      </section>

    </div>
  );
}

