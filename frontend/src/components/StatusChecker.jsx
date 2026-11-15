import React, { useState, useEffect } from 'react';
import { Search, CheckCircle2, Clock, AlertCircle, RefreshCw, MessageSquare } from 'lucide-react';
import { trackApplication } from '../services/api';

export default function StatusChecker({ initialCode }) {
  const [code, setCode] = useState(initialCode || '');
  const [loading, setLoading] = useState(false);
  const [application, setApplication] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
      lookup(initialCode);
    }
  }, [initialCode]);

  const lookup = async (target) => {
    const searchCode = (target || code).trim();
    if (!searchCode) {
      setError('Please enter your reference code.');
      return;
    }

    setLoading(true);
    setError(null);
    setApplication(null);

    try {
      const data = await trackApplication(searchCode);
      setApplication(data);
    } catch (err) {
      setError(err.message || 'No application found with this reference code.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="check-status" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Transparency</h2>
          <p className="mt-2 text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Check the status of your idea.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Enter your reference code below to see which review stage your concept is in.
          </p>
        </div>

        {/* Input bar */}
        <div className="bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="e.g. VEB-2026-8841"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              className="w-full pl-9.5 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 uppercase font-mono tracking-wider placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => lookup(code)}
            disabled={loading}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <span>Lookup Status</span>}
          </button>
        </div>

        {/* Quick sample test codes */}
        <div className="mt-2.5 flex items-center justify-center gap-2 text-xs text-slate-500">
          <span>Try sample codes:</span>
          <button
            onClick={() => {
              setCode('VEB-2026-8841');
              lookup('VEB-2026-8841');
            }}
            className="text-blue-600 font-mono hover:underline cursor-pointer"
          >
            VEB-2026-8841
          </button>
          <span>•</span>
          <button
            onClick={() => {
              setCode('VEB-2026-9104');
              lookup('VEB-2026-9104');
            }}
            className="text-blue-600 font-mono hover:underline cursor-pointer"
          >
            VEB-2026-9104
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Results */}
        {application && (
          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
              <div>
                <span className="text-xs font-mono font-bold text-blue-700">{application.trackingId}</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">{application.ideaTitle}</h3>
                <p className="text-xs text-slate-500">
                  Founder: <strong className="text-slate-700">{application.founderName}</strong> ({application.founderRole || 'Founder'})
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                  {application.status}
                </span>
                <span className="block text-[11px] text-slate-500 mt-1">
                  Submitted: {application.createdAt.split('T')[0]}
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">
                Review Milestones:
              </h4>
              <div className="space-y-3">
                {application.timeline.map((st, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border flex items-start gap-3 transition-colors ${
                      st.completed
                        ? 'bg-white border-slate-200 text-slate-700'
                        : st.current
                        ? 'bg-blue-50/70 border-blue-200 text-blue-900 font-medium'
                        : 'bg-white/60 border-slate-200/60 text-slate-400'
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {st.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : st.current ? (
                        <span className="w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        </span>
                      ) : (
                        <Clock className="w-4 h-4 text-slate-300" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className={st.current ? 'font-bold text-blue-900' : 'font-semibold text-slate-800'}>
                          {st.stage}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">{st.date}</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">{st.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviewer Feedback */}
            {application.reviewerFeedback && (
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                  <span>Reviewer Notes</span>
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "{application.reviewerFeedback}"
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
