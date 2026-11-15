import React, { useState } from 'react';
import { Users, Briefcase, Award, ArrowRight, CheckCircle2, RefreshCw, Sparkles, MessageSquare } from 'lucide-react';
import { applyAsMentor } from '../services/api';

export default function MentorGuildSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    expertise: 'Fractional CTO / Software Architecture',
    hoursPerWeek: '2-4 hours/week',
    motivation: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await applyAsMentor(formData);
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Error submitting application.');
    } finally {
      setLoading(false);
    }
  };

  const mentors = [
    {
      name: 'Dr. Aris Thorne',
      role: 'Former VP of Hardware, Philips Healthcare',
      expertise: 'MedTech & FDA 510(k) Clearances',
      backed: 'MedRoute & NeuroNudge',
      quote: 'The best healthcare ideas come from nurses on hospital floors who are too busy saving lives to build cap tables. Vebfare bridges that gap.'
    },
    {
      name: 'Maya Lin',
      role: 'Ex-Stripe Principal Systems Architect',
      expertise: 'FinTech Protocols & High-Throughput APIs',
      backed: 'CivicPay Escrow',
      quote: 'Instead of advising another Web3 clone, I spend 3 hours a week helping veteran electricians get paid on time for city public works.'
    },
    {
      name: 'Julian Vance',
      role: 'Founding Partner, Horizon Climate Syndicate',
      expertise: 'AgriTech & Bio-Composites',
      backed: 'AgriPulse & KiteWeave',
      quote: 'Silicon Valley misses 95% of real innovation because they only look within their existing social graph. Vebfare is the real deal.'
    }
  ];

  return (
    <section id="guild" className="py-24 bg-[#080b11] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>The Builder Guild</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Backed by seasoned operators who build alongside you.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Our Guild consists of 190+ fractional CTOs, medical device directors, patent attorneys, and former founders who dedicate hours each week to turn raw domain insights into functional ventures.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>{m.expertise}</span>
                </div>
                <h4 className="text-base font-bold text-white">{m.name}</h4>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{m.role}</p>

                <p className="mt-4 text-xs text-slate-300 italic leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  "{m.quote}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Ventures Backed:</span>
                <span className="text-emerald-400 font-semibold">{m.backed}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Co-Builder / Angel Application Box */}
        <div className="mt-14 max-w-3xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white">Join the Guild as a Fractional Co-Builder or Angel</h3>
            <p className="text-xs text-slate-400 mt-1">
              Give 2–5 hours a week to build code, advise on regulations, or syndicate seed rounds for verified frontline founders.
            </p>
          </div>

          {success ? (
            <div className="p-6 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-center animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
              <h4 className="text-base font-bold text-white">Application Received!</h4>
              <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                Thank you for stepping up to back grassroots innovation. Our Guild Coordinator will reach out within 48 hours for an introductory briefing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-950/30 border border-red-800 text-xs text-rose-300">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Primary Skill Area</label>
                  <select
                    value={formData.expertise}
                    onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Fractional CTO / Software Architecture">Fractional CTO / Full-Stack Engineering</option>
                    <option value="Hardware, Firmware & Tooling">Hardware, Firmware & PCB Tooling</option>
                    <option value="FDA & Medical Device Compliance">FDA & Clinical Regulatory Compliance</option>
                    <option value="Enterprise Sales & Go-To-Market">B2B Sales & Pilot Structuring</option>
                    <option value="Angel Investor / Syndicate Backer">Angel Investor / Capital Syndicate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Available Commitment</label>
                  <select
                    value={formData.hoursPerWeek}
                    onChange={(e) => setFormData({ ...formData, hoursPerWeek: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="2-4 hours/week">2–4 hours/week (Fractional advisory)</option>
                    <option value="5-10 hours/week">5–10 hours/week (Sprint co-builder)</option>
                    <option value="Capital syndication only">Capital syndication only (Angel checks)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Why do you want to back frontline founders?</label>
                <textarea
                  rows={2}
                  placeholder="Share a sentence or two on what motivates you to support non-traditional founders..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow disabled:opacity-50"
                >
                  {loading ? <RefreshCw className="w-4 h-4 animate-spin text-slate-950" /> : <span>Apply to Join Guild</span>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
