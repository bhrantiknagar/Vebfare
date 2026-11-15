import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function FAQSection({ onOpenSubmit }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What if I have a breakthrough idea but zero coding or tech skills?',
      a: 'That is literally why Vebfare exists. Over 80% of our founders cannot write a single line of code. Elena was a rural ICU nurse, Marcus was a trade electrician, and Tariq was a date-palm farmer. You provide the irreplaceable frontline domain insight; our Guild engineers write the software, design the circuits, and build the prototype.'
    },
    {
      q: 'Will someone at Vebfare or a reviewer steal my idea?',
      a: 'No. The moment you click submit, your submission is cryptographically hashed with SHA-256 and recorded with an immutable timestamp to prove priority of invention under international intellectual property frameworks. Furthermore, every reviewer operates under our legally binding Mutual Non-Disclosure Covenant.'
    },
    {
      q: 'Do I have to quit my full-time job to participate?',
      a: 'No. We deliberately structured our Stage 1 (IP & Blind Review) and Stage 2 (Feasibility & Discovery) to require only 8–12 hours per week, completely manageable on evenings and weekends. You only decide whether to transition full-time when your venture secures paying customer pilot contracts and seed financing.'
    },
    {
      q: 'How do the micro-grants work? Do I have to pay them back if the idea fails?',
      a: 'No. Our $15,000 to $50,000 sprint grants are 100% non-dilutive. They are not loans, and they require no personal collateral. If customer discovery reveals that the market will not pay for the solution, the sprint concludes and you owe zero dollars.'
    },
    {
      q: 'What does Vebfare get in return for building with me?',
      a: 'Unlike dev agencies that charge $150,000 invoices or old-school incubators that demand 40%–50% equity, Vebfare operates on a Fair-Foundry model: we take only a modest 4%–6% warrant, and only after commercial customer pilot agreements are executed. You retain 94%+ ownership and voting control.'
    },
    {
      q: 'What kinds of ideas qualify? Does it have to be software?',
      a: 'We accept physical hardware, bio-materials, supply chain logistics, health diagnostics, educational tools, and software protocols. What matters most is that the problem is real, painful, and experienced firsthand by you.'
    }
  ];

  return (
    <section className="py-24 bg-[#0a0d14] border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            No jargon, no evasive answers. Here is the unvarnished truth about how we work.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA banner inside FAQ */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/20 text-center">
          <h3 className="text-xl font-bold text-white">Still have a question about your specific idea?</h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Submit your idea for our zero-risk blind review. Our domain reviewers provide personalized written feedback within 48 hours.
          </p>
          <button
            onClick={onOpenSubmit}
            className="mt-6 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
          >
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>Submit Idea for Review</span>
          </button>
        </div>
      </div>
    </section>
  );
}
