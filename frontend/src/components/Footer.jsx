import React, { useState } from 'react';
import { Lightbulb, CheckCircle2, RefreshCw } from 'lucide-react';
import { subscribeNewsletter } from '../services/api';

export default function Footer({ onScrollTo }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setLoading(true);
    try {
      await subscribeNewsletter(email);
      setSubscribed(true);
      setEmail('');
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-100">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <Lightbulb className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-slate-900">Vebfare</span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Supporting everyday people with breakthrough ideas who lack the money, business knowledge, or technical skills to bring them to market.
            </p>
            <div className="text-[11px] text-slate-400">
              Zero upfront fees • Strict mutual confidentiality
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onScrollTo('why-ideas-stuck')} className="hover:text-blue-600 cursor-pointer">
                  Why Ideas Get Stuck
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('how-we-help')} className="hover:text-blue-600 cursor-pointer">
                  How We Support You
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('stories')} className="hover:text-blue-600 cursor-pointer">
                  Founder Stories
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('how-it-works')} className="hover:text-blue-600 cursor-pointer">
                  4-Step Process
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('check-status')} className="hover:text-blue-600 cursor-pointer">
                  Check Status
                </button>
              </li>
            </ul>
          </div>

          {/* Updates Newsletter */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Stay Informed</h4>
            <p className="text-xs text-slate-500 mb-2">
              Hear about new cohort openings and founder stories.
            </p>
            {subscribed ? (
              <div className="p-2 rounded bg-emerald-50 text-emerald-700 text-[11px] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Subscribed! Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-1.5">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-blue-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Vebfare. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Confidentiality Pledge</span>
            <span>•</span>
            <span>Founder Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
