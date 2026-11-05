import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  Droplets,
  Award,
  Users,
  Target,
  Compass,
  ArrowRight,
  Building2
} from 'lucide-react';
import { ABOUT_DATA } from '../data/about';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openGeneralEnquiry } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../data/config';

export default function AboutUs() {
  return (
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-16 space-y-16">
      
      {/* 1. Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-down" duration={700}>
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/80 shadow-md text-center max-w-4xl mx-auto space-y-4 hover-lift transition-all">
            <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-sky-600 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
              About Bounten Global
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#081C3B] tracking-tight">
              Advancing Water Science Through Sustainable Innovation
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              {ABOUT_DATA.tagline}. Headquartered in Banjara Hills, Hyderabad, {ABOUT_DATA.fullName} is redefining how residential, commercial, and industrial properties resolve hard water scaling.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. Company Overview & Core Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <AnimatedSection animation="fade-right" duration={700}>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Our Story & Heritage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B] mt-1">
                Solving India's Hard Water Challenge Without Salt or Pollution
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-3">
                {ABOUT_DATA.overview}
              </p>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {ABOUT_DATA.achievements.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-center hover-lift transition-all">
                    <div className="text-xl sm:text-2xl font-black text-sky-600">{item.number}</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-left" delay={150} duration={700}>
              <div className="bg-gradient-to-br from-[#081C3B] to-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-2xl hover-lift border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 animate-pulse" />
                  <span>Corporate Standards</span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  KCS Pride Products LLP (BOUNTEN)
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Every Bounten water softening system is manufactured in accordance with strict metallurgical benchmarks using food-grade Stainless Steel 304 and precision-coated MMO electrodes.
                </p>

                <div className="space-y-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Zero Salt Refills / Zero Chemical Discharges</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Retains Essential Calcium & Magnesium</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>15 to 18 Year Designed Reactor Durability</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <AnimatedSection animation="fade-right" delay={100} duration={700}>
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover-lift transition-all space-y-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#081C3B]">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {ABOUT_DATA.mission}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200} duration={700}>
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover-lift transition-all space-y-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#081C3B]">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {ABOUT_DATA.vision}
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* 4. Technology Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection animation="fade-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Why We Are Different
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
              Core Pillars of Bounten Innovation
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_DATA.pillars.map((pillar, idx) => (
            <AnimatedSection key={idx} animation="fade-up" delay={idx * 80} duration={600}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover-lift transition-all space-y-3 h-full">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#081C3B]">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{pillar.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 5. WhatsApp Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="zoom" duration={700}>
          <div className="bg-gradient-to-r from-[#081C3B] via-slate-900 to-[#081C3B] text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 hover-lift transition-all">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Direct Engineering Connect
              </span>
              <h3 className="text-2xl font-bold text-white">
                Have questions about your local borewell water TDS?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Connect directly with our Hyderabad headquarters technical team on WhatsApp.
              </p>
            </div>

            <button
              onClick={openGeneralEnquiry}
              className="btn-press inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg flex-shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Connect on WhatsApp</span>
            </button>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
