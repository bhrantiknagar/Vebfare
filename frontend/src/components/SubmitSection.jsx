import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ShieldCheck, RefreshCw, Copy, CheckCheck } from 'lucide-react';
import { submitApplication } from '../services/api';

export default function SubmitSection({ onApplicationSubmitted }) {
  const [formData, setFormData] = useState({
    founderName: '',
    founderEmail: '',
    founderRole: '',
    founderPhone: '',
    ideaTitle: '',
    category: 'General Problem',
    problemStatement: '',
    solutionSummary: '',
    primaryBlocker: 'Financial: Cannot afford prototype or dev costs',
    estimatedNeed: 'Need initial funding & developer support',
    agreedToNda: true
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.founderName.trim() || !formData.founderEmail.trim() || !formData.ideaTitle.trim() || !formData.problemStatement.trim()) {
      setError('Please fill out your name, email, idea title, and description.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await submitApplication(formData);
      setSubmittedData(res);
      if (onApplicationSubmitted) {
        onApplicationSubmitted(res.trackingId);
      }
    } catch (err) {
      setError(err.message || 'Something went wrong submitting your idea. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyCode = () => {
    if (submittedData?.trackingId) {
      navigator.clipboard.writeText(submittedData.trackingId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="submit-idea" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Get Started</h2>
          <p className="mt-2 text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Tell us about your idea.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            It doesn't have to be a polished business pitch. Just describe the problem you see and your thought on how to solve it. Everything is kept strictly confidential.
          </p>
        </div>

        {submittedData ? (
          /* Success Box */
          <div className="bg-white border border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Thank you, {formData.founderName.split(' ')[0]}! Your idea has been received.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Our review team will examine your submission confidentially within 48 hours. Please save your reference code below to track status anytime.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto flex items-center justify-between">
              <div className="text-left">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                  Your Reference Tracking Code:
                </span>
                <span className="text-lg font-bold text-blue-700 font-mono">
                  {submittedData.trackingId}
                </span>
              </div>
              <button
                type="button"
                onClick={copyCode}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-xs font-medium text-slate-700 flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="mt-6">
              <a
                href="#check-status"
                className="inline-block px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
              >
                Track Live Status Below
              </a>
            </div>
          </div>
        ) : (
          /* The Form */
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
            {error && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={formData.founderName}
                  onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. elena@example.com"
                  value={formData.founderEmail}
                  onChange={(e) => setFormData({ ...formData, founderEmail: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Current Role & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Job or Background
                </label>
                <input
                  type="text"
                  placeholder="e.g. Head Nurse, Electrician, High School Teacher"
                  value={formData.founderRole}
                  onChange={(e) => setFormData({ ...formData, founderRole: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="e.g. (555) 019-2834"
                  value={formData.founderPhone}
                  onChange={(e) => setFormData({ ...formData, founderPhone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Working Title */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                What would you call this idea? <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. A portable temperature alert box for rural medicine vans"
                value={formData.ideaTitle}
                onChange={(e) => setFormData({ ...formData, ideaTitle: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Problem description */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                What problem did you notice? <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                required
                placeholder="Describe what is frustrating or wasteful in your daily work or experience. E.g. 'In our clinic vans, medicine spoils because standard coolers have no alarms when the compressor stops...'"
                value={formData.problemStatement}
                onChange={(e) => setFormData({ ...formData, problemStatement: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Proposed Solution */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                How do you envision solving it?
              </label>
              <textarea
                rows={2}
                placeholder="Explain in simple words how a tool, device, or app could fix this problem."
                value={formData.solutionSummary}
                onChange={(e) => setFormData({ ...formData, solutionSummary: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* What is holding you back */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                What has been the biggest obstacle holding you back?
              </label>
              <select
                value={formData.primaryBlocker}
                onChange={(e) => setFormData({ ...formData, primaryBlocker: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="Financial: Cannot afford prototype or dev costs">Financial: Cannot afford $15k–$30k prototype or development fees</option>
                <option value="Technical: Do not know how to code or build hardware">Technical: I have no coding or engineering background</option>
                <option value="Market: Do not know how to start a company or sell">Business: Don't know how to size the market, price it, or form a company</option>
                <option value="Fear of idea theft: Afraid someone will take it">Confidentiality: Afraid to share without legal protection</option>
                <option value="All of the above">Combination of financial, technical, and business hurdles</option>
              </select>
            </div>

            {/* Confidentiality Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.agreedToNda}
                  onChange={(e) => setFormData({ ...formData, agreedToNda: e.target.checked })}
                  className="rounded text-blue-600 focus:ring-blue-500 mt-0.5"
                />
                <span>
                  I understand that Vebfare treats my idea with strict confidentiality, and I retain full ownership of my concept.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Submitting Your Idea...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Idea for Review (Zero Fee)</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
