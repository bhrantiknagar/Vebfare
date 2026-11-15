import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, CheckCircle2, AlertCircle, RefreshCw, Layers } from 'lucide-react';
import { calculateReadiness } from '../services/api';

export default function ReadinessCalculator({ onProceedWithScore }) {
  const [formData, setFormData] = useState({
    problemUrgency: 'acute',
    marketClarity: 'clear_paying',
    primaryBlocker: 'Financial & Prototyping Capital',
    validationState: 'interviews_done',
    commitment: 'nights_weekends'
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await calculateReadiness(formData);
      setResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#080b11] relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate your idea's foundry readiness.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Answer 5 realistic questions to test whether your concept qualifies for our non-dilutive micro-grant and fractional guild pairing.
          </p>
        </div>

        {/* Main Box */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleCalculate} className="space-y-7">
            {/* Question 1: Problem Urgency */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                1. How severe and frequent is the problem you want to solve?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'acute', label: 'Acute & Daily', desc: 'Directly wastes thousands of dollars, health safety, or hours every week.' },
                  { id: 'moderate', label: 'Moderate & Recurring', desc: 'Significant friction experienced several times a month.' },
                  { id: 'convenience', label: 'Nice to Have', desc: 'Saves minor personal convenience or marginal time.' }
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setFormData({ ...formData, problemUrgency: opt.id })}
                    className={`p-3.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                      formData.problemUrgency === opt.id
                        ? 'bg-amber-400/10 border-amber-500 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-slate-200">{opt.label}</div>
                    <div className="mt-1 text-[11px] text-slate-400 leading-normal">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Market Clarity */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                2. How well-defined is the buyer or decision-maker?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'clear_paying', label: 'Precise Title Identified', desc: 'E.g., "ICU Nurse Supervisors" or "Independent HVAC Subcontractors"' },
                  { id: 'clear_untested', label: 'General Sector Known', desc: 'E.g., "Small farming co-ops", but haven\'t contacted them directly yet.' },
                  { id: 'vague', label: 'Broad Consumer Base', desc: '"Anyone who uses an iPhone" or broad mass-market audience.' }
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setFormData({ ...formData, marketClarity: opt.id })}
                    className={`p-3.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                      formData.marketClarity === opt.id
                        ? 'bg-amber-400/10 border-amber-500 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-slate-200">{opt.label}</div>
                    <div className="mt-1 text-[11px] text-slate-400 leading-normal">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Primary Blocker */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                3. What is the single biggest obstacle holding your idea back?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  'Financial & Prototyping Capital',
                  'Technical Execution (Cannot Code)',
                  'Market Sizing & Commercial Strategy',
                  'Fear of Idea Theft & Legal IP Cost'
                ].map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setFormData({ ...formData, primaryBlocker: b })}
                    className={`p-3 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                      formData.primaryBlocker === b
                        ? 'bg-amber-400/10 border-amber-500 text-white font-semibold'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 4 & 5 side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  4. Current Level of Validation
                </label>
                <select
                  value={formData.validationState}
                  onChange={(e) => setFormData({ ...formData, validationState: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="interviews_done">I’ve interviewed 10+ potential users who confirmed the pain</option>
                  <option value="prototype_built">I built a rough sketch, spreadsheet, or physical mockup</option>
                  <option value="raw_thought">Direct workplace observation (no external interviews yet)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  5. Your Availability / Commitment
                </label>
                <select
                  value={formData.commitment}
                  onChange={(e) => setFormData({ ...formData, commitment: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="nights_weekends">10–15 hours/week nights & weekends while keeping my job</option>
                  <option value="full_time_ready">Ready to dedicate full-time once initial grant is secured</option>
                  <option value="just_idea">I just want to represent the idea and have someone else build it</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Analyzing Viability Matrices...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 fill-slate-950" />
                    <span>Generate Viability Score & Action Roadmap</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Results Output */}
          {result && (
            <div className="mt-8 pt-8 border-t border-slate-800 animate-fadeIn">
              <div className="bg-slate-950/80 border border-amber-500/40 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
                  <div className="text-center sm:text-left">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
                      Algorithmic Assessment Result
                    </span>
                    <h3 className="text-2xl font-bold text-white">{result.tier}</h3>
                    <p className="mt-1 text-xs text-slate-400 max-w-md">{result.summary}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-center p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-3xl font-extrabold text-amber-400 font-mono">
                        {result.score}<span className="text-xs text-slate-400 font-normal">/100</span>
                      </div>
                      <div className="text-[10px] uppercase font-mono text-slate-400 mt-1">Readiness Score</div>
                    </div>

                    <div className="text-center p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-base font-bold text-emerald-400 font-mono whitespace-nowrap">
                        {result.estimatedGrant}
                      </div>
                      <div className="text-[10px] uppercase font-mono text-slate-400 mt-1">Grant Potential</div>
                    </div>
                  </div>
                </div>

                {/* Guild Pairing & Roadmap */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                      Recommended Guild Co-Builder
                    </span>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 font-semibold flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <span>{result.guildPairing}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                      Next 60-Day Action Roadmap
                    </span>
                    <ul className="space-y-2">
                      {result.roadmap.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 font-mono text-center sm:text-left">
                    Your assessment results have been saved for this session.
                  </span>
                  <button
                    onClick={() => onProceedWithScore({ ...formData, ...result })}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                  >
                    <span>Fast-Track Application With This Score</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
