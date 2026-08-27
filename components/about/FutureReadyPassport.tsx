'use client';

import { PILLARS } from '@/components/programs/futurereadyData';

// Helper function to render a custom SVG for each pillar
const getPillarIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case 'leadership':
      return (
        <svg className="w-5 h-5 text-altiusGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'creativity':
    case 'innovation':
      return (
        <svg className="w-5 h-5 text-altiusGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-altiusGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
  }
};

export default function FutureReadyPassport() {
  return (
    <div 
      className="relative w-screen left-1/2 -translate-x-1/2 mt-24 mb-16 py-20 sm:py-28 overflow-hidden bg-[url('/abt.png')] bg-fixed bg-center bg-cover bg-no-repeat"
    >
      {/* --- Dark Overlays for Contrast --- */}
      <div className="absolute inset-0 bg-altiusNavy/40 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-altiusNavy via-altiusNavy/90 to-altiusNavy pointer-events-none" />

      {/* --- Content Container --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 bg-clip-text text-transparent font-bold uppercase tracking-[0.2em] text-[11px]">
            The FutureReady Passport
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Proof of growth across 7 competency pillars, <br className="hidden sm:block" /> every single year
          </h3>
        </div>
        
        {/* Pillars Grid with SVGs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div 
              key={pillar.title} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-altiusGold/50 hover:bg-white/10 transition-all duration-300 rounded-[16px] p-6 sm:p-8 flex flex-col gap-4 shadow-xl hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-altiusGold/20 transition-colors flex items-center justify-center shrink-0">
                {getPillarIcon(pillar.title)}
              </div>
              <div className="text-white">
                <p className="font-serif font-bold text-lg mb-2">{pillar.title}</p>
                <p className="text-gray-300 text-[13px] leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}