import React, { useState, useEffect } from 'react';
import { Search, CheckCircle2, Clock, Shield, AlertCircle, RefreshCw, X, MessageSquare, ChevronRight } from 'lucide-react';
import { trackApplication } from '../services/api';

export default function ApplicationTracker({ isOpen, onClose, initialCode }) {
  const [code, setCode] = useState(initialCode || '');
  const [loading, setLoading] = useState(false);
  const [application, setApplication] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
      handleSearch(initialCode);
    }
  }, [initialCode]);

  const handleSearch = async (trackingCodeToSearch) => {
    const targetCode = (trackingCodeToSearch || code).trim();
    if (!targetCode) {
      setError('Please enter a valid tracking reference code.');
      return;
    }

    setLoading(true);
    setError(null);
    setApplication(null);

    try {
      const data = await trackApplication(targetCode);
      setApplication(data);
    } catch (err) {
      setError(err.message || 'Application not found. Please verify your reference code.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#0d111a] border border-slate-700/80 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <Search className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Founder Application Tracker</h2>
            <p className="text-xs text-slate-400">Track review stages, reviewer feedback, and grant milestone status.</p>
          </div>
        </div>

        {/* Input Bar */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="e.g. VEB-2026-8841"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              className="w-full pl-9.5 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white uppercase font-mono tracking-wider placeholder-slate-400 focus:outline-none focus:border-amber-500"
            />
          </div>
          <button
            onClick={() => handleSearch(code)}
            disabled={loading}
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin text-slate-950" /> : <span>Lookup Code</span>}
          </button>
        </div>

        {/* Quick Demo Pre-fills */}
        <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>Try sample codes:</span>
          <button
            onClick={() => {
              setCode('VEB-2026-8841');
              handleSearch('VEB-2026-8841');
            }}
            className="text-amber-400 hover:underline cursor-pointer"
          >
            VEB-2026-8841
          </button>
          <span>•</span>
          <button
            onClick={() => {
              setCode('VEB-2026-9104');
              handleSearch('VEB-2026-9104');
            }}
            className="text-amber-400 hover:underline cursor-pointer"
          >
            VEB-2026-9104
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div className="mt-6 p-4 rounded-xl bg-red-950/30 border border-red-800/40 text-xs text-rose-300 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Result details */}
        {application && (
          <div className="mt-6 space-y-6 animate-fadeIn">
            {/* Summary card */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-amber-400 font-bold">{application.trackingId}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs text-slate-400 font-mono">{application.category}</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">{application.ideaTitle}</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Founder: <strong className="text-slate-200">{application.founderName}</strong> ({application.founderRole || 'Founder'})
                </p>
              </div>

              <div className="text-right self-start sm:self-auto">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30 font-semibold">
                  {application.status}
                </span>
                <span className="block text-[11px] font-mono text-slate-400 mt-1">
                  Submitted: {application.createdAt.split('T')[0]}
                </span>
              </div>
            </div>

            {/* Timeline Progress */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Foundry Milestone Timeline:
              </h4>
              <div className="space-y-3">
                {application.timeline.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border transition-colors flex items-start gap-3.5 ${
                      step.completed
                        ? 'bg-slate-950/60 border-slate-800 text-slate-300'
                        : step.current
                        ? 'bg-amber-950/15 border-amber-500/40 text-amber-100'
                        : 'bg-slate-950/30 border-slate-800/60 text-slate-400'
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {step.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : step.current ? (
                        <span className="w-4 h-4 rounded-full border-2 border-amber-400 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                        </span>
                      ) : (
                        <Clock className="w-4 h-4 text-slate-400" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold ${step.current ? 'text-amber-300' : 'text-slate-200'}`}>
                          {step.stage}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">{step.date}</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">{step.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviewer Feedback Note */}
            {application.reviewerFeedback && (
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Reviewer Assessment Note</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{application.reviewerFeedback}"
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
