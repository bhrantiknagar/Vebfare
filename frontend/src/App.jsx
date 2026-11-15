import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChasmSection from './components/ChasmSection';
import FoundryModel from './components/FoundryModel';
import VenturesGallery from './components/VenturesGallery';
import ReadinessCalculator from './components/ReadinessCalculator';
import EthicsCharter from './components/EthicsCharter';
import MentorGuildSection from './components/MentorGuildSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import SubmitWizard from './components/SubmitWizard';
import ApplicationTracker from './components/ApplicationTracker';
import { fetchStats } from './services/api';

export default function App() {
  const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const [trackModalOpen, setTrackModalOpen] = useState(false);
  const [trackCode, setTrackCode] = useState('');
  const [calculatorData, setCalculatorData] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats().then(data => setStats(data)).catch(console.error);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedWithScore = (scoreData) => {
    setCalculatorData(scoreData);
    setSubmitModalOpen(true);
  };

  const handleTrackNow = (code) => {
    setTrackCode(code);
    setTrackModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">
      {/* Sticky Navbar */}
      <Navbar
        onOpenSubmit={() => {
          setCalculatorData(null);
          setSubmitModalOpen(true);
        }}
        onOpenTrack={() => {
          setTrackCode('');
          setTrackModalOpen(true);
        }}
        onScrollTo={scrollTo}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenSubmit={() => {
            setCalculatorData(null);
            setSubmitModalOpen(true);
          }}
          onScrollTo={scrollTo}
          stats={stats}
        />

        {/* The 3 Chasms We Bridge */}
        <ChasmSection
          onOpenSubmit={() => {
            setCalculatorData(null);
            setSubmitModalOpen(true);
          }}
        />

        {/* How It Works (The 4-Stage Foundry) */}
        <FoundryModel
          onOpenSubmit={() => {
            setCalculatorData(null);
            setSubmitModalOpen(true);
          }}
        />

        {/* Ideas in Flight (Ventures Portfolio) */}
        <VenturesGallery
          onOpenSubmit={() => {
            setCalculatorData(null);
            setSubmitModalOpen(true);
          }}
        />

        {/* Interactive Readiness & Viability Calculator */}
        <ReadinessCalculator
          onProceedWithScore={handleProceedWithScore}
        />

        {/* Founder Rights & Ethics Charter */}
        <EthicsCharter />

        {/* The Guild: Co-Builders & Angel Syndicates */}
        <MentorGuildSection />

        {/* Frequently Asked Questions */}
        <FAQSection
          onOpenSubmit={() => {
            setCalculatorData(null);
            setSubmitModalOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenSubmit={() => {
          setCalculatorData(null);
          setSubmitModalOpen(true);
        }}
        onOpenTrack={() => {
          setTrackCode('');
          setTrackModalOpen(true);
        }}
        onScrollTo={scrollTo}
      />

      {/* Modals */}
      <SubmitWizard
        isOpen={submitModalOpen}
        onClose={() => setSubmitModalOpen(false)}
        initialData={calculatorData}
        onTrackNow={handleTrackNow}
      />

      <ApplicationTracker
        isOpen={trackModalOpen}
        onClose={() => setTrackModalOpen(false)}
        initialCode={trackCode}
      />
    </div>
  );
}
