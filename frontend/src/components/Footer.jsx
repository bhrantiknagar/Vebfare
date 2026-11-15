import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';
import { subscribeNewsletter } from '../services/api';

export default function Footer({ onOpenSubmit, onOpenTrack, onScrollTo }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setError(null);
    try {
      await subscribeNewsletter(email);
      setSubscribed(true);
      setEmail('');
    } catch (err) {
      setError(err.message || 'Subscription failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#07090e] border-t border-slate-800 text-slate-400 text-xs">
      {/* Top Banner / Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vebfare Founder Dispatch</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Get notified of micro-grant openings & cohort drops.
            </h3>
            <p className="mt-2 text-slate-400 max-w-md text-xs sm:text-sm">
              We send practical domain teardowns, feasibility frameworks, and grant announcements once every two weeks. Zero marketing spam.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span className="font-semibold text-xs">You're subscribed! Welcome to the Vebfare dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <span>Subscribe</span>}
                </button>
              </form>
            )}
            {error && <p className="mt-2 text-xs text-rose-400">{error}</p>}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-400/30">
                <Sparkles className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Vebfare<span className="text-amber-500">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Vebfare is the idea realization foundry and venture collective for people with breakthrough frontline insights who lack capital, technical execution, or business networks.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational • REST API Live</span>
            </div>
          </div>

          {/* Column 1: Foundry */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3">Foundry Engine</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onScrollTo('chasms')} className="hover:text-amber-400 transition-colors">The Gap We Bridge</button></li>
              <li><button onClick={() => onScrollTo('foundry')} className="hover:text-amber-400 transition-colors">4-Stage Methodology</button></li>
              <li><button onClick={() => onScrollTo('calculator')} className="hover:text-amber-400 transition-colors">Readiness Calculator</button></li>
              <li><button onClick={onOpenSubmit} className="hover:text-amber-400 transition-colors">Submit Your Idea</button></li>
            </ul>
          </div>

          {/* Column 2: Ventures & Community */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3">Portfolio & Guild</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onScrollTo('ventures')} className="hover:text-amber-400 transition-colors">Ventures in Flight</button></li>
              <li><button onClick={() => onScrollTo('guild')} className="hover:text-amber-400 transition-colors">Join as Co-Builder</button></li>
              <li><button onClick={() => onScrollTo('guild')} className="hover:text-amber-400 transition-colors">Angel Syndicates</button></li>
              <li><button onClick={onOpenTrack} className="hover:text-amber-400 transition-colors">Track Reference Code</button></li>
            </ul>
          </div>

          {/* Column 3: Trust & Rights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3">Ethics & Legal</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onScrollTo('ethics')} className="hover:text-amber-400 transition-colors">Founder Rights Charter</button></li>
              <li><span className="text-slate-400">SHA-256 IP Timestamping</span></li>
              <li><span className="text-slate-400">Non-Dilutive Grant Terms</span></li>
              <li><span className="text-slate-400">Mutual NDA Covenant</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} Vebfare Venture Collective. All intellectual property remains 100% with the respective founders.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400">Privacy & Confidentiality Pledge</span>
            <span>•</span>
            <span className="hover:text-slate-400">Founder Protection Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
