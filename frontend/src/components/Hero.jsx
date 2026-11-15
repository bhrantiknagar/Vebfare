import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, DollarSign, Wrench, Users } from 'lucide-react';

export default function Hero({ onScrollTo }) {
  return (
    <section className="bg-white border-b border-slate-200 pt-16 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Simple badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          Supporting unrepresented ideas & everyday innovators
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Have an idea, but don't have the <br className="hidden sm:block" />
          <span className="text-blue-600">money, tech skills, or business background</span> to build it?
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Some of the best solutions are thought up by people working regular jobs who see problems every day. But without capital, developers, or business experience, most ideas never get a chance. 
          <strong className="text-slate-900 font-semibold block mt-2">
            Vebfare exists to bridge that gap and help represent your idea to the world.
          </strong>
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onScrollTo('submit-idea')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Tell Us Your Idea</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onScrollTo('how-we-help')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer"
          >
            How We Support You
          </button>
        </div>

        {/* 4 simple points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>100% Free initial review</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Strict confidentiality agreement</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>No technical knowledge needed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Keep your full-time job</span>
          </div>
        </div>

        {/* Simple Honest Stats Box */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900">48+</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Ideas Funded</div>
            <p className="text-xs text-slate-600 mt-1">From nurses, farmers, and everyday workers.</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">$1.8M+</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Seed Grants Given</div>
            <p className="text-xs text-slate-600 mt-1">Direct support without burying founders in debt.</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900">45 Days</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Average Build Time</div>
            <p className="text-xs text-slate-600 mt-1">From sketch to working prototype or pilot.</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600">78%</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Success Rate</div>
            <p className="text-xs text-slate-600 mt-1">Reached real customers or trial partners.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
