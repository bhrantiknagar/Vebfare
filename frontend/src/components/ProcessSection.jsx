import React from 'react';
import { Send, PhoneCall, ClipboardCheck, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      icon: Send,
      title: 'Submit Your Idea',
      time: 'Takes 5 Minutes',
      desc: 'Fill out our simple form below. Tell us what problem you noticed, what your idea is, and what has been holding you back. You don\'t need a business plan or pitch deck.'
    },
    {
      num: '02',
      icon: PhoneCall,
      title: 'Informal 1-on-1 Discussion',
      time: 'Within 48 Hours',
      desc: 'We review your submission with strict confidentiality. If there is a clear pain point, we invite you to an informal 30-minute conversation to talk through your vision.'
    },
    {
      num: '03',
      icon: ClipboardCheck,
      title: 'Roadmap & Grant Allocation',
      time: 'Week 2',
      desc: 'We create a transparent plan: what technical pieces need to be built, the exact budget needed, and how much seed grant money we allocate to cover development costs.'
    },
    {
      num: '04',
      icon: Rocket,
      title: 'Building & Representation',
      time: 'Days 30 – 60',
      desc: 'Our developers and designers build the working model while our market leads prepare presentations and connect you with early pilot customers or partners.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wider">The Process</h2>
          <p className="mt-2 text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            From an idea in your head to a real product.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            We keep the process straightforward and accessible so you don't waste time on bureaucratic nonsense.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {st.num}
                    </span>
                    <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {st.time}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
