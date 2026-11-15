import React from 'react';
import { DollarSign, HelpCircle, Code, Lock, AlertCircle } from 'lucide-react';

export default function ObstaclesSection() {
  const obstacles = [
    {
      icon: DollarSign,
      title: 'Financial Constraints',
      subtitle: 'Lack of initial money to test or build',
      desc: 'Developing even an early prototype or testing materials can easily cost $10,000 to $40,000. Most people have families to support and cannot afford to gamble their life savings. Traditional banks refuse loans to unproven ideas, and investors usually want to see existing revenue before talking to you.'
    },
    {
      icon: HelpCircle,
      title: 'Not Understanding the Market or Business Side',
      subtitle: 'Knowing the problem, but not how to build a company',
      desc: 'You understand the daily problem better than anyone, but you might not know how to size a market, negotiate pricing, form a legal business, or talk to enterprise buyers. Without commercial guidance, it is hard to turn a genuine problem into a viable product.'
    },
    {
      icon: Code,
      title: 'Technical & Execution Barriers',
      subtitle: 'Not knowing how to code or manufacture',
      desc: 'If you are a nurse, electrician, or retail manager, you likely do not write code or design hardware schematics. Outside software agencies quote $50,000 to $120,000 upfront, and finding a trustworthy technical partner on your own is often overwhelming.'
    },
    {
      icon: Lock,
      title: 'Fear of Having the Idea Stolen',
      subtitle: 'Worried about sharing without protection',
      desc: 'Many great ideas stay locked inside people\'s heads for years because they are terrified that if they tell someone with more capital or technical ability, their idea will be taken and they will be left behind with nothing.'
    }
  ];

  return (
    <section id="why-ideas-stuck" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wider">The Reality</h2>
          <p className="mt-2 text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Why brilliant ideas never get worked on.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Having a great idea is only 10% of the journey. The other 90% requires capital, industry knowledge, and technical skills that most everyday people don't have access to.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {obstacles.map((obs, idx) => {
            const Icon = obs.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{obs.title}</h3>
                <div className="text-xs font-medium text-blue-600 mt-0.5 mb-3">{obs.subtitle}</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {obs.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-700 text-center sm:text-left">
            <strong className="text-slate-900">Recognize yourself in one of these roadblocks?</strong> You are not alone. That is the exact reason Vebfare exists.
          </div>
          <a
            href="#how-we-help"
            className="text-xs font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-2 whitespace-nowrap"
          >
            See how we support you →
          </a>
        </div>
      </div>
    </section>
  );
}
