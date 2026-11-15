import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQSection({ onScrollTo }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Will you steal or copy my idea?',
      a: 'No. We operate under strict mutual confidentiality. You retain full ownership of your concept, and we never share or use your domain insights without your explicit written consent.'
    },
    {
      q: 'Do I have to pay any money upfront?',
      a: 'No. Submitting your idea and discussing it with our team is completely free. When an idea is accepted, we provide a non-dilutive grant to cover testing, prototype parts, and software costs so you don\'t have to risk your personal savings.'
    },
    {
      q: 'Do I need to quit my full-time job?',
      a: 'Absolutely not. Over 90% of the people we work with keep their day jobs. We structure early interviews, prototype reviews, and weekly check-ins during evenings or weekends to respect your time.'
    },
    {
      q: 'What if I have zero coding or design experience?',
      a: 'That is exactly why we are here. Most everyday innovators are not software programmers. You bring the real-world problem and user requirements; our developers and designers write the software and build the prototype.'
    },
    {
      q: 'What does Vebfare get in return?',
      a: 'We only succeed when you succeed. We do not charge agency invoices or take 40% of your business. If and only if your product reaches paying pilot customers or commercial revenue, we take a modest 4% to 6% warrant. You always maintain majority ownership and voting control.'
    },
    {
      q: 'How long does the review take?',
      a: 'Our team reviews all submissions within 48 hours. You will receive an email update and can also track your progress using your reference code on this site.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Answers</h2>
          <p className="mt-2 text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Clear, honest answers about how we partner with you.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">{f.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 bg-white border border-slate-200 rounded-xl text-center">
          <h4 className="text-sm font-bold text-slate-900">Have a specific question not covered here?</h4>
          <p className="text-xs text-slate-500 mt-1">
            Submit your idea with your question in the notes, and our team will answer directly.
          </p>
          <button
            onClick={() => onScrollTo('submit-idea')}
            className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Submit Your Idea
          </button>
        </div>
      </div>
    </section>
  );
}
