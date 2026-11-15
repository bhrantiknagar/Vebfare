import React from 'react';
import { CheckCircle2, User, ArrowRight } from 'lucide-react';

export default function StoriesSection({ onScrollTo }) {
  const stories = [
    {
      name: 'Elena Rostova',
      role: 'Rural ICU Head Nurse',
      location: 'Montana',
      idea: 'MedRoute Temperature Tracker',
      problem: 'Saw $15,000+ worth of pediatric medicines spoil in courier vans due to unreliable vehicle cooling.',
      blocker: 'Zero coding or hardware skills; quoted $85,000 by software agencies she couldn’t afford.',
      howWeHelped: [
        'Provided a $25,000 grant to buy sensors and testing equipment',
        'Our hardware developer built the live GPS and temperature logging unit',
        'Helped her close an initial trial with 3 county health clinics'
      ],
      result: 'Now actively used across 38 rural health routes'
    },
    {
      name: 'Marcus Vance',
      role: 'Independent Electrical Contractor',
      location: 'Ohio',
      idea: 'CivicPay Subcontractor Escrow',
      problem: 'Nearly went bankrupt twice because general contractors took 120 days to release payments for city jobs.',
      blocker: 'Had an airtight operational blueprint, but had zero software experience and no tech co-founder.',
      howWeHelped: [
        'Our developers built the milestone verification web app in 6 weeks',
        'Structured legal compliance for state prompt-payment regulations',
        'Introduced the platform to 2 regional builders associations'
      ],
      result: 'Payment delays reduced from 118 days to 4 days'
    },
    {
      name: 'Tariq Al-Mansoor',
      role: 'Agronomist & Date-Palm Farmer',
      location: 'Arizona',
      idea: 'Acoustic Soil Moisture Probe',
      problem: 'Commercial soil probes cost $1,200 per acre, making proper irrigation impossible for small farms.',
      blocker: 'Didn’t know how to manufacture, and feared sharing the concept would lead to idea theft.',
      howWeHelped: [
        'Signed mutual NDA and filed provisional patent protection',
        'Designed a 3D-printable casing costing under $25 to produce',
        'Facilitated pilot trials with 14 farming co-operatives'
      ],
      result: 'Over 600 active probes deployed with 30% water savings'
    },
    {
      name: 'Priya Patel',
      role: 'Textile Quality Inspector',
      location: 'North Carolina',
      idea: 'Bio-Stalk Eco Packaging',
      problem: 'Tons of agricultural hemp and plant stalk waste were burned after harvests every autumn.',
      blocker: 'Needed $18,000 for university lab strength certifications that banks refused to lend.',
      howWeHelped: [
        'Funded independent ASTM laboratory tensile and degradation tests',
        'Created a professional one-page commercial sample dossier',
        'Set up meetings with 2 sustainable apparel brands'
      ],
      result: 'Currently evaluating commercial manufacturing partner'
    }
  ];

  return (
    <section id="stories" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Proof of Work</h2>
          <p className="mt-2 text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Real people. Real ideas. Now in the real world.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            None of these founders were Silicon Valley tech insiders. They were nurses, farmers, and tradespeople who had great ideas and needed someone to help build and represent them.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{s.name}</h3>
                    <p className="text-xs text-slate-500">{s.role} • {s.location}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {s.idea}
                  </span>
                </div>

                {/* The problem & blocker */}
                <div className="space-y-2.5 text-xs text-slate-600 mb-4">
                  <div>
                    <strong className="text-slate-800 block text-[11px] uppercase tracking-wide">The Frustration:</strong>
                    <span>{s.problem}</span>
                  </div>
                  <div>
                    <strong className="text-slate-800 block text-[11px] uppercase tracking-wide">Why They Were Stuck:</strong>
                    <span className="text-rose-700">{s.blocker}</span>
                  </div>
                </div>

                {/* What Vebfare Did */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 mb-4">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block mb-2">
                    How We Supported:
                  </span>
                  <div className="space-y-1.5">
                    {s.howWeHelped.map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Result */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  {s.result}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-600">
            Have an idea in your field? You don't need a finished deck. Just tell us what problem you want to fix.
          </p>
          <button
            onClick={() => onScrollTo('submit-idea')}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-2 cursor-pointer"
          >
            Submit your idea for review <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
