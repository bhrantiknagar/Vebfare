import React, { useState, useEffect } from 'react';
import { Search, Filter, ArrowUpRight, CheckCircle2, DollarSign, X, Layers, Activity, User, Sparkles } from 'lucide-react';
import { fetchProjects } from '../services/api';

export default function VenturesGallery({ onOpenSubmit }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBlocker, setSelectedBlocker] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'HealthTech', 'AgriTech', 'FinTech', 'CleanTech', 'MedTech', 'Social Impact'];
  const blockers = ['All', 'Financial', 'Technical', 'Market'];

  useEffect(() => {
    loadProjects();
  }, [selectedCategory, selectedBlocker, searchQuery]);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const data = await fetchProjects(selectedCategory, searchQuery, selectedBlocker);
      setProjects(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ventures" className="py-24 bg-[#0a0d14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Incubated Ventures</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ideas in Flight.
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Real ventures conceived by everyday frontline domain experts. Backed with zero predatory dilution.
            </p>
          </div>

          <button
            onClick={onOpenSubmit}
            className="self-start md:self-end px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-2 cursor-pointer shadow"
          >
            <span>Have an idea? Pitch here</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-10 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by founder, sector, or idea..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/60 transition-colors"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveModalProject(proj)}
              className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-amber-500/5 relative"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-800 text-amber-300 border border-slate-700">
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {proj.stage}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>{proj.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  {proj.tagline}
                </p>

                {/* Founder Info */}
                <div className="mt-5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-3">
                  <img
                    src={proj.founder.avatar}
                    alt={proj.founder.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <div className="text-xs">
                    <div className="font-semibold text-white">{proj.founder.name}</div>
                    <div className="text-slate-400 font-mono text-[11px]">{proj.founder.priorRole}</div>
                  </div>
                </div>

                {/* Blocker Overcome */}
                <div className="mt-4 text-xs">
                  <span className="font-mono text-slate-400 uppercase text-[10px] block">Initial Blocker Solved:</span>
                  <span className="text-slate-300 font-medium">{proj.blocker}</span>
                </div>
              </div>

              {/* Bottom Metric Bar */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400 font-bold">{proj.fundingSecured}</span>
                <span className="text-slate-400 group-hover:text-slate-200">View Dossier →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Full Dossier */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#0e131d] border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {activeModalProject.category}
                </span>
                <span className="text-xs font-mono text-emerald-400">{activeModalProject.stage}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeModalProject.name}
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                {activeModalProject.tagline}
              </p>

              {/* Founder Section */}
              <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                <img
                  src={activeModalProject.founder.avatar}
                  alt={activeModalProject.founder.name}
                  className="w-14 h-14 rounded-full object-cover border border-amber-500/30 flex-shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{activeModalProject.founder.name}</h4>
                  <p className="text-xs font-mono text-amber-400">{activeModalProject.founder.priorRole}</p>
                  <p className="mt-2 text-xs text-slate-300 italic leading-relaxed">
                    "{activeModalProject.founder.story}"
                  </p>
                </div>
              </div>

              {/* The Blocker & Intervention */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-950/10 border border-red-900/30">
                  <div className="text-[11px] font-mono text-rose-400 uppercase tracking-wider mb-1">
                    The Initial Obstacle
                  </div>
                  <div className="text-xs font-semibold text-white mb-2">{activeModalProject.blocker}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {activeModalProject.blockerDetails}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30">
                  <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-1">
                    Capital & Runway
                  </div>
                  <div className="text-xs font-semibold text-white mb-2">{activeModalProject.fundingSecured}</div>
                  <p className="text-xs text-slate-300">
                    Non-dilutive milestone tranches enabling rapid customer pilot validation.
                  </p>
                </div>
              </div>

              {/* Support provided */}
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                  What Vebfare Delivered:
                </h4>
                <div className="space-y-2">
                  {activeModalProject.vebfareSupport.map((sup, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{sup}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traction metrics */}
              <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-3">
                  Live Pilot Traction Metrics:
                </h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {Object.entries(activeModalProject.impactMetrics).map(([k, v]) => (
                    <div key={k} className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                      <div className="text-base font-extrabold text-amber-400 font-mono">{v}</div>
                      <div className="text-[10px] uppercase font-mono text-slate-400 mt-1 capitalize">
                        {k.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onOpenSubmit();
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  Apply to Incubate Your Idea
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
