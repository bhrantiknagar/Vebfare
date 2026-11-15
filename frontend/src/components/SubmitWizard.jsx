import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Shield, Sparkles, Copy, CheckCheck, AlertCircle, RefreshCw } from 'lucide-react';
import { submitApplication } from '../services/api';

export default function SubmitWizard({ isOpen, onClose, initialData, onTrackNow }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    founderName: '',
    founderEmail: '',
    founderPhone: '',
    founderRole: '',
    founderLocation: '',
    ideaTitle: '',
    category: 'HealthTech',
    problemStatement: '',
    solutionSummary: '',
    targetAudience: '',
    primaryBlocker: 'Financial & Prototyping Capital',
    estimatedNeed: '$25,000 Micro-Grant + Fractional Tech Guild',
    existingValidation: '',
    agreedToNda: true
  });

  // Prefill if passed from calculator
  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        primaryBlocker: initialData.primaryBlocker || prev.primaryBlocker,
        estimatedNeed: initialData.estimatedGrant ? `${initialData.estimatedGrant} + ${initialData.guildPairing || 'Guild Co-builder'}` : prev.estimatedNeed,
        existingValidation: initialData.validationState ? `Validation level: ${initialData.validationState}` : prev.existingValidation
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const totalSteps = 4;

  const handleNext = () => {
    setError(null);
    if (step === 1) {
      if (!formData.founderName.trim() || !formData.founderEmail.trim()) {
        setError('Please provide your name and email to proceed.');
        return;
      }
    }
    if (step === 2) {
      if (!formData.ideaTitle.trim() || !formData.problemStatement.trim()) {
        setError('Please provide your idea title and describe the problem you see.');
        return;
      }
    }
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setError(null);
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await submitApplication(formData);
      setSubmissionResult(res);
    } catch (err) {
      setError(err.message || 'Something went wrong submitting your idea. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyTrackingCode = () => {
    if (submissionResult?.trackingId) {
      navigator.clipboard.writeText(submissionResult.trackingId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#0d111a] border border-slate-700/80 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submissionResult ? (
          /* Success Screen */
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-amber-500/10">
              <Shield className="w-8 h-8" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-3">
              Cryptographically Timestamped & Sealed
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Idea Successfully Submitted!
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Your concept has been assigned a unique foundry tracking reference and timestamped with SHA-256 IP protection.
            </p>

            {/* Tracking Code Box */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-amber-500/40 max-w-md mx-auto flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Your Application Reference Code:
                </span>
                <span className="text-xl font-extrabold text-amber-400 font-mono tracking-wider">
                  {submissionResult.trackingId}
                </span>
              </div>
              <button
                onClick={copyTrackingCode}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-600 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <p className="mt-3 text-[11px] font-mono text-slate-400">
              IP Shield Hash: #{submissionResult.ipShieldHash}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onTrackNow(submissionResult.trackingId);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
              >
                Track Live Application Status Now
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          /* Step-by-Step Form */
          <div>
            {/* Step Progress Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>Phase 1 Intake Wizard</span>
                <span className="text-amber-400">Step {step} of {totalSteps}</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-400 h-full transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* STEP 1: Founder Info */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Tell us about yourself</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    You don't need a fancy tech resume. We prioritize everyday domain experts (nurses, tradespeople, teachers, logistics workers).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g., Sarah Jenkins"
                      value={formData.founderName}
                      onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      placeholder="e.g., sarah@example.com"
                      value={formData.founderEmail}
                      onChange={(e) => setFormData({ ...formData, founderEmail: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Current Job / Role</label>
                    <input
                      type="text"
                      placeholder="e.g., Head Pharmacist (10 yrs) or Electrician"
                      value={formData.founderRole}
                      onChange={(e) => setFormData({ ...formData, founderRole: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">City / Region</label>
                    <input
                      type="text"
                      placeholder="e.g., Denver, CO or London, UK"
                      value={formData.founderLocation}
                      onChange={(e) => setFormData({ ...formData, founderLocation: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: The Idea & The Acute Pain */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">The Spark & The Problem</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Describe what is broken in the real world that you want to fix.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Working Idea Title *</label>
                  <input
                    type="text"
                    placeholder="e.g., DoseGuard Automatic Pill Verifier"
                    value={formData.ideaTitle}
                    onChange={(e) => setFormData({ ...formData, ideaTitle: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Sector</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="HealthTech">HealthTech / Clinical Operations</option>
                    <option value="AgriTech & Climate">AgriTech, Soil & Food Systems</option>
                    <option value="FinTech / GovTech">FinTech, Payments & Public Works</option>
                    <option value="Hardware / Materials">Hardware, IoT & Bio-Materials</option>
                    <option value="Social Impact">Social Impact & Community Logistics</option>
                    <option value="EdTech">EdTech & Practical STEM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    What acute problem do you see every day? *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Explain the recurring friction, wasted money, or safety risk. E.g., 'Elderly patients living alone take 5+ medications daily and regularly double-dose, causing hospital readmissions...'"
                    value={formData.problemStatement}
                    onChange={(e) => setFormData({ ...formData, problemStatement: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Your Proposed Solution Concept
                  </label>
                  <textarea
                    rows={2}
                    placeholder="How would your product or platform solve this? (High level concept is totally fine!)"
                    value={formData.solutionSummary}
                    onChange={(e) => setFormData({ ...formData, solutionSummary: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            )}

            {/* STEP 3: The Blockers Holding You Back */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">What's Stopping You?</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Why haven't you been able to bring this idea to life until now?
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Primary Roadblock *</label>
                  <select
                    value={formData.primaryBlocker}
                    onChange={(e) => setFormData({ ...formData, primaryBlocker: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Financial & Prototyping Capital">Financial: Cannot afford $20k–$40k dev agency or tooling costs</option>
                    <option value="Technical Execution (Cannot Code)">Technical: Need software/firmware engineers (I cannot code)</option>
                    <option value="Market Sizing & Commercial Strategy">Market Knowledge: Don't know unit economics or enterprise pricing</option>
                    <option value="Fear of Idea Theft & Legal IP Cost">Legal / IP: Fear of idea theft; cannot afford patent lawyers</option>
                    <option value="All of the above">Combination of financial, technical, and market barriers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Who is the target customer who would pay for this?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Home health nurses, independent electrical sub-contractors, small farmers"
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    What support would you request from Vebfare?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., $25,000 Micro-Grant + Fractional Tech Guild Co-builder"
                    value={formData.estimatedNeed}
                    onChange={(e) => setFormData({ ...formData, estimatedNeed: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            )}

            {/* STEP 4: IP Shield & Submission */}
            {step === 4 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Review & IP Shield Sealing</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Your idea is protected from the instant you submit.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-mono">Founder:</span>
                    <span className="text-white font-semibold">{formData.founderName} ({formData.founderRole || 'Founder'})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-mono">Idea:</span>
                    <span className="text-amber-400 font-semibold">{formData.ideaTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-mono">Sector:</span>
                    <span className="text-white">{formData.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-mono">Core Blocker:</span>
                    <span className="text-rose-300">{formData.primaryBlocker}</span>
                  </div>
                </div>

                {/* IP Shield Pledge Box */}
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-slate-300 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-amber-400">
                    <Shield className="w-4 h-4" />
                    <span>The Vebfare Mutual Non-Disclosure Covenant</span>
                  </div>
                  <p className="leading-relaxed text-[11px] text-slate-400">
                    By submitting, your text is hashed with SHA-256 for provable priority of invention. Vebfare covenant binds our team and reviewers never to use, copy, or share your proprietary domain insight without your written consent.
                  </p>
                  <label className="flex items-center gap-2 pt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreedToNda}
                      onChange={(e) => setFormData({ ...formData, agreedToNda: e.target.checked })}
                      className="rounded text-amber-500 focus:ring-amber-400"
                    />
                    <span className="text-slate-200 text-xs">
                      I understand my idea is legally protected and I confirm the accuracy of my submission.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={loading || !formData.agreedToNda}
                  onClick={handleSubmit}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 transition-all flex items-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Hashing & Sealing Idea...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 fill-slate-950" />
                      <span>Seal & Submit Idea</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
