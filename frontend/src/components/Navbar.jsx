import React, { useState, useEffect } from 'react';
import { Sparkles, Shield, Compass, Search, ArrowRight, Menu, X, CheckCircle, Zap } from 'lucide-react';

export default function Navbar({ onOpenSubmit, onOpenTrack, onScrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-950/70 via-amber-900/40 to-slate-900 border-b border-amber-500/20 px-4 py-2 text-xs text-amber-200/90 font-mono flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-amber-300">Cohort 2026-Q4 Review Open:</span>
            <span className="hidden sm:inline text-slate-300">Non-dilutive micro-grants ($15k–$50k) available for non-technical frontline founders.</span>
          </div>
          <button 
            onClick={() => onScrollTo('calculator')} 
            className="hover:text-amber-100 flex items-center gap-1 font-semibold text-amber-400 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Check Your Eligibility <ArrowRight className="w-3 h-3 inline" />
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl' : 'bg-[#0b0f17]/70 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-400/30">
                <Sparkles className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
                  Vebfare<span className="text-amber-500 text-3xl leading-none">.</span>
                </span>
                <span className="block text-[10px] uppercase font-mono tracking-widest text-slate-400">
                  Idea Realization Foundry
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-300">
              <button onClick={() => onScrollTo('chasms')} className="hover:text-amber-400 transition-colors">
                The Gap We Bridge
              </button>
              <button onClick={() => onScrollTo('foundry')} className="hover:text-amber-400 transition-colors">
                How It Works
              </button>
              <button onClick={() => onScrollTo('ventures')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <span>Ventures in Flight</span>
                <span className="px-1.5 py-0.5 text-[10px] font-mono bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/30">
                  48 Active
                </span>
              </button>
              <button onClick={() => onScrollTo('calculator')} className="hover:text-amber-400 transition-colors">
                Readiness Score
              </button>
              <button onClick={() => onScrollTo('ethics')} className="hover:text-amber-400 transition-colors">
                Founder Rights
              </button>
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center space-x-4">
              <button
                onClick={onOpenTrack}
                className="px-3.5 py-2 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 text-amber-400" />
                <span>Track Application</span>
              </button>

              <button
                onClick={onOpenSubmit}
                className="relative group px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 fill-slate-950 stroke-[1.5]" />
                  <span>Submit Your Idea</span>
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c1017] border-b border-slate-800 px-4 pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
              <button 
                onClick={() => { onScrollTo('chasms'); setMobileMenuOpen(false); }} 
                className="text-left py-2 hover:text-amber-400"
              >
                The Gap We Bridge
              </button>
              <button 
                onClick={() => { onScrollTo('foundry'); setMobileMenuOpen(false); }} 
                className="text-left py-2 hover:text-amber-400"
              >
                How It Works
              </button>
              <button 
                onClick={() => { onScrollTo('ventures'); setMobileMenuOpen(false); }} 
                className="text-left py-2 hover:text-amber-400"
              >
                Ventures in Flight
              </button>
              <button 
                onClick={() => { onScrollTo('calculator'); setMobileMenuOpen(false); }} 
                className="text-left py-2 hover:text-amber-400"
              >
                Readiness Calculator
              </button>
              <button 
                onClick={() => { onScrollTo('ethics'); setMobileMenuOpen(false); }} 
                className="text-left py-2 hover:text-amber-400"
              >
                Founder Rights & IP
              </button>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
              <button
                onClick={() => { onOpenTrack(); setMobileMenuOpen(false); }}
                className="w-full py-2.5 rounded-lg text-xs font-mono text-center text-slate-200 bg-slate-900 border border-slate-700 flex items-center justify-center gap-2"
              >
                <Search className="w-3.5 h-3.5 text-amber-400" />
                <span>Track Application Code</span>
              </button>
              <button
                onClick={() => { onOpenSubmit(); setMobileMenuOpen(false); }}
                className="w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 text-center shadow-lg"
              >
                Submit Your Idea (Zero Fee)
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
