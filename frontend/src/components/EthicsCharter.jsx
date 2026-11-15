import React from 'react';
import { ShieldCheck, HeartHandshake, Percent, Scale, Lock, FileText, Check } from 'lucide-react';

export default function EthicsCharter() {
  const pledges = [
    {
      title: 'Zero Upfront Fees, Ever',
      desc: 'We never charge application fees, program tuition, or office fees. If an incubator asks you for money to "review your idea," run.',
      icon: HeartHandshake,
      badge: '100% Free to Apply'
    },
    {
      title: 'Non-Dilutive Feasibility Grants',
      desc: 'Our $15,000 to $50,000 sprint grants are non-dilutive. If your idea fails customer feasibility, you owe zero dollars and keep your day job intact.',
      icon: Percent,
      badge: 'Zero Personal Debt'
    },
    {
      title: 'The Fair-Foundry Cap (Founder Majority)',
      desc: 'Unlike predatory agencies that demand 40% equity or $150k invoices, Vebfare takes only a modest 4%–6% warrant upon commercial customer contracts.',
      icon: Scale,
      badge: 'You Own 94%+'
    },
    {
      title: 'Clean IP & Source Code Handover',
      desc: 'Every line of code written by our Guild and every patent drafted belongs 100% to your newly incorporated entity. We hold no encumbrances.',
      icon: Lock,
      badge: 'Your Intellectual Property'
    }
  ];

  return (
    <section id="ethics" className="py-24 bg-[#0a0d14] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Founder-First Charter</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How we protect you from venture predators.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            For decades, people with breakthrough domain insights have been exploited by dev shops charging six-figure invoices or predatory incubators taking half their company. Here is our binding ethical pledge.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pledges.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-6 sm:p-8 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-800 text-emerald-400 border border-slate-700">
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Covenant comparison callout */}
        <div className="mt-12 max-w-5xl mx-auto bg-gradient-to-r from-amber-950/20 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono uppercase text-amber-400 tracking-wider">Cryptographic IP Proof</div>
            <h4 className="text-lg font-bold text-white">SHA-256 Invention Priority Guarantee</h4>
            <p className="text-xs text-slate-400 max-w-xl">
              Every idea submission generates a cryptographic SHA-256 hash stored on our immutable ledger, establishing legal evidence of your priority of invention date under international patent covenants.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950/80 px-4 py-2.5 rounded-xl border border-slate-800 text-xs font-mono text-emerald-400 whitespace-nowrap">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Mutual NDA Activated by Default</span>
          </div>
        </div>
      </div>
    </section>
  );
}
