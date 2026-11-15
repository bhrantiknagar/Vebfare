import React from 'react';
import { Banknote, Hammer, Compass, Presentation, ShieldCheck, Check } from 'lucide-react';

export default function SupportSection({ onScrollTo }) {
  const supports = [
    {
      icon: Banknote,
      title: '1. Seed Funding & Cost Coverage',
      headline: 'We cover the early bills so you don’t risk your savings.',
      desc: 'We provide $10,000 to $40,000 in direct grants to pay for initial prototypes, testing parts, software hosting, lab tests, and legal filings. If the idea doesn’t pan out after testing, you don’t owe us a penny.',
      highlights: [
        'No personal debt or collateral required',
        'Covers actual hard prototype & testing expenses',
        'Transparent milestone releases'
      ]
    },
    {
      icon: Hammer,
      title: '2. Hands-On Technical Building',
      headline: 'Our engineers build the software or physical prototype with you.',
      desc: 'You don’t have to learn programming or get ripped off by outside agencies. Our in-house team of developers and hardware designers works directly with you to turn your sketches and concepts into a working model.',
      highlights: [
        'Web & mobile apps built to production quality',
        'CAD modeling & 3D functional prototypes',
        'You guide the requirements, we write the code'
      ]
    },
    {
      icon: Compass,
      title: '3. Market & Business Guidance',
      headline: 'We teach you the market side in plain, practical English.',
      desc: 'We help you research who the real buyers are, how much to charge, and how to position your solution against existing alternatives. We help you set up clean company paperwork and draft fair contracts.',
      highlights: [
        'Direct customer interview assistance',
        'Realistic pricing & cost-margin modeling',
        'Clear legal formation and IP protection'
      ]
    },
    {
      icon: Presentation,
      title: '4. Representation & Presentation',
      headline: 'We help you present your idea with confidence and credibility.',
      desc: 'Having a working product is only half the battle. We create professional product demo videos, one-page briefs, and presentation decks. We introduce your idea to pilot partners, suppliers, and mission-aligned angel investors.',
      highlights: [
        'Professional demo & pitch materials',
        'Warm introductions to commercial partners',
        'Representation in negotiation meetings'
      ]
    }
  ];

  return (
    <section id="how-we-help" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Our Support</h2>
          <p className="mt-2 text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            How we bring your idea to life.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            We are not an online course or an advice forum. We are hands-on partners who provide real funds, real developers, and real market guidance.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {supports.map((sup, idx) => {
            const Icon = sup.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      {sup.title}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {sup.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {sup.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2">
                  {sup.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Protection callout */}
        <div className="mt-12 p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold">Our Promise: You Own Your Idea</h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                We sign a confidentiality agreement before reviewing any proprietary details. You maintain majority ownership and voting control. We never take predatory 40% equity stakes.
              </p>
            </div>
          </div>
          <button
            onClick={() => onScrollTo('submit-idea')}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            Submit for Free Review
          </button>
        </div>
      </div>
    </section>
  );
}
