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
  MessageCircle,
  Building2
} from 'lucide-react';
import { ABOUT_DATA } from '../data/about';
import { openGeneralEnquiry } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../data/config';

export default function AboutUs() {
  return (
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-16 space-y-16">
      
      {/* 1. Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/80 shadow-xs text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-sky-600 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
            About Bounten Global
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#081C3B] tracking-tight">
            Advancing Water Science Through Sustainable Innovation
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {ABOUT_DATA.tagline}. Headquartered in Banjara Hills, Hyderabad, {ABOUT_DATA.fullName} is redefining how residential, commercial, and industrial properties resolve hard water scaling.
          </p>
        </div>
      </section>

      {/* 2. Company Overview & Core Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Our Story & Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
              Solving India's Hard Water Challenge Without Salt or Pollution
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {ABOUT_DATA.overview}
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {ABOUT_DATA.achievements.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-sky-600">{item.number}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#081C3B] to-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Corporate Standards</span>
            </div>

            <h3 className="text-xl font-bold text-white">
              KCS Pride Products LLP (BOUNTEN)
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
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

        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#081C3B]">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {ABOUT_DATA.mission}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#081C3B]">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {ABOUT_DATA.vision}
            </p>
          </div>

        </div>
      </section>

      {/* 4. Water Softening Technology Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              The Proprietary Science
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
              {ABOUT_DATA.technologyOverview.headline}
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4 whitespace-pre-line font-normal">
            {ABOUT_DATA.technologyOverview.description}
          </div>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ABOUT_DATA.technologyOverview.advantages.map((adv, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 text-xs font-semibold text-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Company Founders & Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Visionary Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
            Executive Leadership
          </h2>
          <p className="text-slate-600 text-sm">
            Meet the leaders driving Bounten's technological breakthroughs, manufacturing quality, and nationwide distributor partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ABOUT_DATA.founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-slate-900 relative">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{founder.name}</h3>
                  <span className="text-xs text-sky-300 font-semibold">{founder.role}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                  {founder.experience}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Company History Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Our Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C3B]">
            Milestones of Excellence
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="space-y-8">
            {ABOUT_DATA.history.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="w-24 flex-shrink-0">
                  <span className="inline-block bg-sky-50 text-sky-700 font-black text-sm px-3 py-1 rounded-lg border border-sky-100">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-base font-bold text-[#081C3B]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industries Served */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#081C3B] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Versatile Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Industries We Proudly Serve
            </h2>
            <p className="text-slate-300 text-sm">
              Delivering customized water conditioning across diverse commercial, residential, and agricultural operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ABOUT_DATA.industriesServed.map((ind, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 text-xs font-semibold text-slate-200 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>{ind}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={openGeneralEnquiry}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Connect with Corporate Team</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

