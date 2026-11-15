import React, { useState } from 'react';
import { DollarSign, Code, Compass, ArrowRight, ShieldAlert, CheckCircle2, XCircle, Layers, Cpu, TrendingUp } from 'lucide-react';

export default function ChasmSection({ onOpenSubmit }) {
  const [activeTab, setActiveTab] = useState(0);

  const chasms = [
    {
      id: 'financial',
      badge: 'Roadblock #1',
      title: 'The Financial Chasm',
      subtitle: 'Why capital markets fail frontline innovators',
      icon: DollarSign,
      color: 'amber',
      problemSummary: 'Banks demand collateral you don\'t have. VCs demand revenue you can\'t make yet. Dev agencies quote $120,000 for a bare-bones prototype.',
      realityPoints: [
        'Commercial banks refuse small business loans without 2+ years of operating cash flow',
        'Traditional tech dev agencies charge $150–$250/hr, burning life savings in 6 weeks',
        'Early-stage angel investors rarely invest outside their personal Ivy League / tech networks',
        'Creators are forced to risk personal credit or abandon breakthrough solutions'
      ],
      vebfareIntervention: {
        headline: 'How Vebfare Solves It:',
        badge: 'Non-Dilutive Grant Track',
        features: [
          '$15,000 to $50,000 non-dilutive feasibility grants disbursed in milestone tranches',
          'We cover testing lab costs, compliance certifications, and prototype materials',
          'Zero upfront fee, zero debt obligation, and no collateral required',
          'Founders retain majority ownership: we only take fair-tier warrants upon commercial success'
        ]
      }
    },
    {
      id: 'technical',
      badge: 'Roadblock #2',
      title: 'The Execution & Technical Wall',
      subtitle: 'You understand the problem; you just can\'t code the solution',
      icon: Code,
      color: 'blue',
      problemSummary: 'Deep domain specialists (nurses, contractors, educators) possess irreplaceable frontline insights, but finding a trustworthy technical co-founder is nearly impossible.',
      realityPoints: [
        'Non-technical founders get ghosted or ripped off by freelance offshore developers',
        'Hardware concepts get stuck in CAD limbo due to lack of firmware and electrical engineering',
        '90% of time is wasted trying to find a "Technical Co-founder" on networking apps',
        'Software architecture mistakes early on lead to rebuilds that kill momentum'
      ],
      vebfareIntervention: {
        headline: 'How Vebfare Solves It:',
        badge: 'The Guild Co-Builder Engine',
        features: [
          'Fractional CTOs and senior staff engineers embedded directly into your venture',
          'We build production-grade web apps, mobile clients, and IoT firmware in 4–8 week sprints',
          'Full code ownership transferred to the founder with documented architecture and APIs',
          'You stay the CEO and visionary; our Guild acts as your on-demand technical arm'
        ]
      }
    },
    {
      id: 'market',
      badge: 'Roadblock #3',
      title: 'The Market & Company Maze',
      subtitle: 'Navigating unit economics, enterprise sales, and legal shielding',
      icon: Compass,
      color: 'emerald',
      problemSummary: 'Having a great product is useless if you don\'t know how to navigate regulatory audits, price for enterprise buyers, or safeguard your intellectual property.',
      realityPoints: [
        'Fear of idea theft causes inventors to stay silent and never test in the wild',
        'Unclear pricing and margin models lead to early cash flow starvation',
        'Enterprise procurement, HIPAA, FDA, and state regulations seem like impenetrable black boxes',
        'Founders don\'t know how to pitch or negotiate fair cap tables with seed investors'
      ],
      vebfareIntervention: {
        headline: 'How Vebfare Solves It:',
        badge: 'Venture Navigator & Legal Shield',
        features: [
          'Cryptographic IP timestamping and enforceable mutual NDA coverage from day one',
          'Structured customer discovery sprint with 20–30 real enterprise decision-makers',
          'Guidance from seasoned regulatory directors (FDA 510(k), OSHA, FCC, State Escrow)',
          'Syndicate Demo Day introducing your validated venture to mission-aligned angel funds'
        ]
      }
    }
  ];

  const currentChasm = chasms[activeTab];

  return (
    <section id="chasms" className="py-24 bg-[#0a0d14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>The Reality of Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why brilliant ideas die on napkins.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            The startup world pretends ideas fail because founders "lack grit." In reality, they fail because the system requires $150k in disposable cash and a Silicon Valley network just to build a prototype.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {chasms.map((chasm, idx) => {
            const Icon = chasm.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={chasm.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 scale-[1.02]'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'stroke-slate-950' : 'text-slate-400'}`} />
                <span>{chasm.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Comparison Card */}
        <div className="mt-10 max-w-5xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header Bar */}
          <div className="bg-slate-950/80 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">{currentChasm.badge}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">{currentChasm.title}</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              {currentChasm.subtitle}
            </span>
          </div>

          {/* Side-by-Side: The Harsh Reality vs The Vebfare Bridge */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {/* Left: The Harsh Reality */}
            <div className="p-6 sm:p-8 bg-red-950/5">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider mb-4">
                <XCircle className="w-4 h-4" />
                <span>The Traditional Barrier</span>
              </div>
              <p className="text-sm text-slate-300 font-medium leading-relaxed mb-6">
                "{currentChasm.problemSummary}"
              </p>
              <ul className="space-y-3.5">
                {currentChasm.realityPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500/80 mt-1.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: The Vebfare Bridge */}
            <div className="p-6 sm:p-8 bg-amber-950/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Vebfare Bridge</span>
                </div>
                <span className="text-[11px] font-mono bg-amber-400/10 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  {currentChasm.vebfareIntervention.badge}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-6">
                {currentChasm.vebfareIntervention.headline}
              </h4>
              <ul className="space-y-3.5">
                {currentChasm.vebfareIntervention.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Ready to break this barrier?</span>
                <button
                  onClick={onOpenSubmit}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  Apply with your idea <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
