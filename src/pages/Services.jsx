import React from 'react';
import {
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  PhoneCall,
  FileCheck,
  Zap,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, SERVICE_BENEFITS } from '../data/services';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openServiceEnquiry } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../data/config';

export default function Services() {
  return (
    <div className="bg-slate-50/50 min-h-screen py-6 sm:py-10 space-y-8 sm:space-y-10">
      
      {/* 1. Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-down" duration={700}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md text-center max-w-4xl mx-auto space-y-4 hover-lift transition-all">
            <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-sky-600 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
              Certified Manufacturer Support
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#081C3B] tracking-tight">
              Genuine Bounten Service & Maintenance Support
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Ensure peak water conditioning performance with factory-trained engineers, genuine SS 304 spare parts, annual maintenance contracts (AMC), and responsive PAN India technical coverage.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openServiceEnquiry("Book a Service Visit")}
                className="btn-press inline-flex items-center gap-2 bg-[#081C3B] hover:bg-[#0B2447] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-xl transition-all"
              >
                <Wrench className="w-4 h-4 text-sky-400" />
                <span>Book a Service</span>
              </button>

              <button
                onClick={() => openServiceEnquiry("General Service Enquiry")}
                className="btn-press inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-xl transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>WhatsApp Enquiry</span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. Core Service Offerings Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Dedicated Customer Care
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#081C3B]">
              Official Service Capabilities
            </h2>
            <p className="text-slate-600 text-sm">
              We don't rely on unverified third-party contractors. Every Bounten service call is attended by certified in-house technical personnel.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <AnimatedSection key={service.id} animation="fade-up" delay={idx * 100} duration={600}>
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-2xl hover-lift transition-all duration-400 flex flex-col justify-between space-y-5 h-full">
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
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openServiceEnquiry(service.title)}
                    className="btn-press w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-sky-600 text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Enquire for {service.title}</span>
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 3. Service Benefits Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="zoom" duration={700}>
          <div className="bg-gradient-to-r from-[#081C3B] via-slate-900 to-[#081C3B] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 space-y-8 hover-lift transition-all">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                The Bounten Guarantee
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Why Sign an Annual Maintenance Contract?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICE_BENEFITS.map((benefit, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 hover:bg-white/10 transition-colors">
                  <div className="text-lg font-bold text-sky-300">{benefit.title}</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
