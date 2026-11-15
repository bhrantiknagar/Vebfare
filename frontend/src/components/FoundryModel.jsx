import React, { useState } from 'react';
import { Shield, Search, Hammer, Rocket, ArrowRight, Check, Clock, Award, Terminal } from 'lucide-react';

export default function FoundryModel({ onOpenSubmit }) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'IP Shield & Blind Review',
      timeframe: 'Days 1 – 7',
      tagline: 'Your idea is sealed cryptographically before a single human reviews it.',
      icon: Shield,
      color: 'amber',
      keyActivities: [
        'Automatic SHA-256 cryptographic timestamp generated upon idea upload',
        'Legally binding mutual non-disclosure and intellectual property protection in effect',
        'Blind review audit: names, background, and pedigree removed so only problem acuity is judged',
        'Sector Lead evaluates whether problem is acute, recurring, and economically painful'
      ],
      deliverable: 'IP Cryptographic Certificate & Preliminary Domain Fit Score',
      founderRole: 'Share the raw problem you see every day. No deck or business jargon required.'
    },
    {
      step: '02',
      title: 'Blocker Diagnostics & Feasibility Sprint',
      timeframe: 'Days 8 – 21',
      tagline: 'We pinpoint the exact roadblock stopping your idea and test customer urgency.',
      icon: Search,
      color: 'blue',
      keyActivities: [
        'Blocker diagnostic: determine if failure point is capital, code, hardware tooling, or regulation',
        'Customer Discovery Sprint: our research team helps conduct 20+ structured interviews with target buyers',
        'Economic & unit-margin analysis: verifying if customers will pay to solve this problem',
        'Clear technical specification created: what is the minimum functional solution needed?'
      ],
      deliverable: 'Commercial Feasibility Dossier & MVP Engineering Spec',
      founderRole: 'Participate in customer interview debriefs (can be done nights & weekends).'
    },
    {
      step: '03',
      title: 'Guild Co-Building & Micro-Grant Release',
      timeframe: 'Days 22 – 60',
      tagline: 'We disburse $15k–$50k non-dilutive capital and assign our senior Guild engineers.',
      icon: Hammer,
      color: 'emerald',
      keyActivities: [
        'Milestone-based non-dilutive grant tranche released ($15,000–$50,000 based on sector)',
        'Pairing with a dedicated Guild Lead (Fractional CTO, Hardware Architect, or Regulatory Director)',
        'Rapid building sprint: software code written or 3D/electronic physical prototypes fabricated',
        'Direct testing with initial pilot cohort to capture feedback and iterate'
      ],
      deliverable: 'Working Production-Grade MVP & Initial Pilot Evidence',
      founderRole: 'Act as the domain product visionary guiding requirements and testing usability.'
    },
    {
      step: '04',
      title: 'Commercial Launch & Syndicate Demo Day',
      timeframe: 'Day 61 Onward',
      tagline: 'Present a working, validated venture to commercial buyers and angel syndicates.',
      icon: Rocket,
      color: 'purple',
      keyActivities: [
        'Pilot contract execution with commercial or institutional partners',
        'Syndicate Demo Day: curated pitch to 150+ angel investors and seed funds specializing in your sector',
        'Incorporation & clean cap table architecture: founders retain majority control',
        'Ongoing access to Vebfare Alumni Network, legal retainers, and fractional executive hours'
      ],
      deliverable: 'Signed Pilot Contracts & Seed Capital Financing Facility',
      founderRole: 'Step into the CEO role with commercial momentum and trusted backing.'
    }
  ];

  const current = stages[activeStage];

  return (
    <section id="foundry" className="py-24 bg-[#080b11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>The Foundry Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From raw spark to market pilot in 60 days.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            We don't give you generic video courses or ask you for homework. We roll up our sleeves, fund the initial milestones, and build the product alongside you.
          </p>
        </div>

        {/* 4 Steps Timeline Buttons */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {stages.map((stg, idx) => {
            const isCurrent = activeStage === idx;
            return (
              <button
                key={stg.step}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-xl text-left transition-all border cursor-pointer relative ${
                  isCurrent
                    ? 'bg-slate-900 border-amber-500 shadow-xl shadow-amber-500/10'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-amber-400' : 'text-slate-400'}`}>
                    STAGE {stg.step}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {stg.timeframe}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white line-clamp-1">{stg.title}</h4>
                {isCurrent && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-500 rotate-45 transform pointer-events-none hidden lg:block" />
                )}
              </button>
            );
          })}
        </div>

        {/* Stage In-Depth Detail Card */}
        <div className="mt-8 max-w-5xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Phase {current.step} / 04
                </span>
                <span className="text-xs font-mono text-slate-400">{current.timeframe}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {current.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-amber-200/90 font-medium">
                {current.tagline}
              </p>

              <div className="mt-6 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  What Vebfare Executes in this Phase:
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {current.keyActivities.map((act, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar with Founder Expectation & Deliverable */}
            <div className="w-full lg:w-80 bg-slate-950/80 border border-slate-800/90 rounded-xl p-5 space-y-5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                  Guaranteed Deliverable
                </span>
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-500/20">
                  <Award className="w-4 h-4 flex-shrink-0" />
                  <span>{current.deliverable}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                  Founder's Commitment
                </span>
                <p className="text-xs text-slate-300 bg-slate-900 p-2.5 rounded-lg border border-slate-800 leading-relaxed">
                  {current.founderRole}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenSubmit}
                  className="w-full py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <span>Begin Phase 1 Application</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
