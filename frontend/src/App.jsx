import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ObstaclesSection from './components/ObstaclesSection';
import SupportSection from './components/SupportSection';
import StoriesSection from './components/StoriesSection';
import ProcessSection from './components/ProcessSection';
import SubmitSection from './components/SubmitSection';
import StatusChecker from './components/StatusChecker';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  const [activeTrackingCode, setActiveTrackingCode] = useState('');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplicationSubmitted = (trackingId) => {
    setActiveTrackingCode(trackingId);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Clean Navigation */}
      <Navbar onScrollTo={scrollTo} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero */}
        <Hero onScrollTo={scrollTo} />

        {/* Why ideas stay stuck: financial, market, technical */}
        <ObstaclesSection />

        {/* How we actually support you */}
        <SupportSection onScrollTo={scrollTo} />

        {/* Real stories from everyday people */}
        <StoriesSection onScrollTo={scrollTo} />

        {/* The 4-step process */}
        <ProcessSection />

        {/* Direct on-page idea submission form */}
        <SubmitSection onApplicationSubmitted={handleApplicationSubmitted} />

        {/* Status Tracker */}
        <StatusChecker initialCode={activeTrackingCode} />

        {/* Frequently Asked Questions */}
        <FAQSection onScrollTo={scrollTo} />
      </main>

      {/* Footer */}
      <Footer onScrollTo={scrollTo} />
    </div>
  );
}
