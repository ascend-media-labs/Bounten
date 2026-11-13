import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openServiceEnquiry } from '../utils/whatsapp';

export default function Services() {
  return (
    <div className="bg-slate-50/50 min-h-screen py-4 sm:py-6 lg:py-8">
      
      {/* Core Service Offerings Cards Grid */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-4">
        {/* Page Breadcrumb */}
        <nav className="flex items-center space-x-1.5 text-xs text-slate-500">
          <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Services & AMC</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
          {SERVICES_DATA.map((service, idx) => (
            <AnimatedSection key={service.id} animation="fade-up" delay={idx * 100} duration={600}>
              <div
                id={service.id}
                className="scroll-mt-20 sm:scroll-mt-24 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover-lift glow-sky transition-all duration-300 flex flex-col justify-between space-y-5 h-full cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                      {service.badge}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>

                  <h2 className="text-xl font-bold text-[#081C3B]">
                    {service.title}
                  </h2>

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

    </div>
  );
}
