import React from 'react';
import { ArrowRight, ShieldCheck, Banknote, Code2, Users, Sparkles, Check, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenSubmit, onScrollTo, stats }) {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-500/10 via-amber-600/5 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-inner shadow-amber-500/10">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span>The Anti-Agency, Non-Dilutive Idea Foundry</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Founded for Unconventional Innovators</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            You have the frontline idea. <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              We bring the capital, code, and market bridge.
            </span>
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            87% of high-conviction ideas die before day 30 because the creator isn't rich, can't code, or can't afford to quit their job. <strong className="text-white font-semibold">Vebfare exists to bridge that chasm.</strong> We pair your domain insight with micro-grants, fractional engineers, and go-to-market muscle.
          </p>

          {/* Primary Call to Action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenSubmit}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Submit Your Idea (Zero Fee)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onScrollTo('calculator')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Calculate Idea Readiness</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Four Pillar Guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Cryptographic IP Timestamp</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Banknote className="w-4 h-4 text-amber-400" />
              <span>$15k–$50k Non-Dilutive Grants</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-blue-400" />
              <span>Fractional CTO & Guild Builders</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-purple-400" />
              <span>Zero Upfront Cost to Apply</span>
            </div>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight text-amber-400">
              {stats?.totalNonDilutiveCapital || '$1.85M'}
            </div>
            <div className="mt-1 text-xs font-mono uppercase tracking-wider text-slate-400">
              Capital Deployed
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Zero-debt, non-dilutive micro-grants for customer validation sprints.
            </p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight text-emerald-400">
              {stats?.totalVenturesSupported || 48}
            </div>
            <div className="mt-1 text-xs font-mono uppercase tracking-wider text-slate-400">
              Ventures in Flight
            </div>
            <p className="mt-2 text-xs text-slate-400">
              From nurse-led cold-chains to farmer-led acoustic sensors.
            </p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight text-blue-400">
              {stats?.averageTimeToPilot || '42 Days'}
            </div>
            <div className="mt-1 text-xs font-mono uppercase tracking-wider text-slate-400">
              Average Time to MVP
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Our Guild engineers code the MVP so you don't waste 18 months searching.
            </p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight text-purple-400">
              {stats?.successOrFundedRate || '78%'}
            </div>
            <div className="mt-1 text-xs font-mono uppercase tracking-wider text-slate-400">
              Market Success Rate
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Reaching active pilot contracts, paying customers, or seed syndicates.
            </p>
          </div>
        </div>

        {/* Founder Spotlight Strip */}
        <div className="mt-14 max-w-5xl mx-auto bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3 overflow-hidden">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1594824813598-f94d93d1469e?auto=format&fit=crop&w=150&q=80"
                alt="Elena"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                alt="Tariq"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                alt="Marcus"
              />
            </div>
            <div className="text-xs">
              <span className="text-white font-medium">Frontline innovators backed this year:</span>
              <span className="block text-slate-400">Nurses, mechanics, teachers, farmers, and supply chain operators.</span>
            </div>
          </div>

          <button 
            onClick={() => onScrollTo('ventures')}
            className="text-xs text-amber-400 hover:text-amber-300 font-mono flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            Explore Incubated Ventures <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
