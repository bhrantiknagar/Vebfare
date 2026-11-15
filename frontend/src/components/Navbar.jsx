import React, { useState } from 'react';
import { Lightbulb, Menu, X, ArrowRight, Search } from 'lucide-react';

export default function Navbar({ onScrollTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (id) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2.5 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Vebfare
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-slate-500 font-medium border-l border-slate-200 pl-2">
                Idea Support & Representation
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
            <button onClick={() => handleNav('why-ideas-stuck')} className="hover:text-blue-600 transition-colors cursor-pointer">
              Why Ideas Get Stuck
            </button>
            <button onClick={() => handleNav('how-we-help')} className="hover:text-blue-600 transition-colors cursor-pointer">
              How We Help
            </button>
            <button onClick={() => handleNav('stories')} className="hover:text-blue-600 transition-colors cursor-pointer">
              Real Stories
            </button>
            <button onClick={() => handleNav('how-it-works')} className="hover:text-blue-600 transition-colors cursor-pointer">
              Process
            </button>
            <button onClick={() => handleNav('faq')} className="hover:text-blue-600 transition-colors cursor-pointer">
              FAQ
            </button>
          </nav>

          {/* Action buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => handleNav('check-status')}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Track Idea</span>
            </button>
            <button
              onClick={() => handleNav('submit-idea')}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
            >
              Submit an Idea
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-3">
          <button 
            onClick={() => handleNav('why-ideas-stuck')} 
            className="block w-full text-left py-2 text-sm text-slate-600 font-medium"
          >
            Why Ideas Get Stuck
          </button>
          <button 
            onClick={() => handleNav('how-we-help')} 
            className="block w-full text-left py-2 text-sm text-slate-600 font-medium"
          >
            How We Help
          </button>
          <button 
            onClick={() => handleNav('stories')} 
            className="block w-full text-left py-2 text-sm text-slate-600 font-medium"
          >
            Real Stories
          </button>
          <button 
            onClick={() => handleNav('how-it-works')} 
            className="block w-full text-left py-2 text-sm text-slate-600 font-medium"
          >
            Process
          </button>
          <button 
            onClick={() => handleNav('faq')} 
            className="block w-full text-left py-2 text-sm text-slate-600 font-medium"
          >
            FAQ
          </button>
          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => handleNav('check-status')}
              className="w-full py-2 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg text-center"
            >
              Track Existing Application
            </button>
            <button
              onClick={() => handleNav('submit-idea')}
              className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg text-center shadow-sm"
            >
              Submit an Idea
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
