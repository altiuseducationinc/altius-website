'use client';

import { PROGRESSION } from '@/components/programs/futurereadyData';

// Helper to assign the authentic inline SVG icon with hover animation support
const getStageIcon = (index: number) => {
  switch (index) {
    case 0:
      // 1. Discover (Compass / Needle rotates)
      return (
        <svg
          className="w-8 h-8 text-altiusGold shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon
            className="journey-compass-needle"
            points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
            style={{ transformOrigin: '12px 12px' }}
          />
        </svg>
      );
    case 1:
      // 2. Explore (Magnifying Glass / 2 Flips + Bounce)
      return (
        <svg
          className="w-8 h-8 text-altiusGold shrink-0 overflow-visible"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          style={{ overflow: 'visible' }}
        >
          <g className="journey-magnifier-icon" style={{ transformOrigin: '12px 12px' }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </g>
        </svg>
      );
    case 2:
      // 3. Create (Lightbulb / Warm Glow Pulse)
      return (
        <svg
          className="w-8 h-8 text-altiusGold shrink-0 journey-bulb-glow"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          style={{ transformOrigin: '12px 12px' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      );
    case 3:
      // 4. Develop (Code / Brackets spread + Slash pulse)
      return (
        <svg
          className="w-8 h-8 text-altiusGold shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            className="journey-code-left"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 16l-4-4 4-4"
          />
          <path
            className="journey-code-slash"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16"
            style={{ transformOrigin: '12px 12px' }}
          />
          <path
            className="journey-code-right"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 8l4 4-4 4"
          />
        </svg>
      );
    case 4:
      // 5. Experience (Briefcase / Handle lifts + Flap opens)
      return (
        <svg
          className="w-8 h-8 text-altiusGold shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            className="journey-briefcase-handle"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
            style={{ transformOrigin: '12px 6px' }}
          />
          <path
            className="journey-briefcase-body"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
          <g className="journey-briefcase-lid" style={{ transformOrigin: '12px 7px' }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v.01" />
          </g>
        </svg>
      );
    case 5:
      // 6. Specialize (Target / Arrow hits bullseye)
      return (
        <svg
          className="w-8 h-8 text-altiusGold shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <g className="journey-target-rings" style={{ transformOrigin: '12px 12px' }}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1" />
          </g>
          <g className="journey-target-arrow" style={{ opacity: 0 }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 5L12 12M12 12H15.5M12 12V8.5"
              strokeWidth="1.8"
            />
          </g>
        </svg>
      );
    case 6:
      // 7. Apply (Document / Page processing swap)
      return (
        <svg
          className="w-8 h-8 text-altiusGold shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <g className="journey-document-next" style={{ opacity: 0 }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </g>
          <g className="journey-document-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </g>
        </svg>
      );
    case 7:
      // 8. Launch (Rocket / Flame launch & return)
      return (
        <svg
          className="w-8 h-8 text-altiusGold shrink-0 overflow-visible"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <g className="journey-rocket-flame" style={{ opacity: 0 }}>
            <path
              strokeLinecap="round"
              strokeWidth="1.6"
              stroke="#F59E0B"
              d="M9.5 15.5l-4 4m2.2-1l-3 3m3.8-3l-2 2"
            />
            <circle cx="5" cy="19" r="0.75" fill="#FBBF24" stroke="none" />
            <circle cx="7.5" cy="17.5" r="0.6" fill="#F59E0B" stroke="none" />
            <circle cx="3.5" cy="21" r="0.5" fill="#D4AF37" stroke="none" />
          </g>
          <g className="journey-rocket-next" style={{ opacity: 0 }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m-.2-8.38a6 6 0 01-7.38 5.84v4.8h4.8a6 6 0 012.58-5.84z"
            />
          </g>
          <g className="journey-rocket-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m-.2-8.38a6 6 0 01-7.38 5.84v4.8h4.8a6 6 0 012.58-5.84z"
            />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

export default function ProgramSteps() {
  return (
    <section className="py-20 lg:py-32 px-6 bg-[#F8F9FB] border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Introduction */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 lg:mb-28">
          <span className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 bg-clip-text text-transparent font-bold uppercase tracking-[0.2em] text-[11px]">
            FutureReady™ Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-altiusNavy leading-snug">
            8 Years. One Journey. <br className="hidden sm:block" /> A Future Ready Student.
          </h2>
          <p className="text-[#667085] text-sm sm:text-base font-sans mt-4 max-w-lg mx-auto">
            From discovering who they are to applying their skills in the real world, every grade builds the next step.
          </p>
        </div>

        {/* --- DESKTOP 4-COLUMN HORIZONTAL TIMELINE (lg and above) --- */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-y-16 gap-x-6 max-w-6xl mx-auto relative z-10">
          {PROGRESSION.map((p, index) => {
            const stageNumber = String(index + 1).padStart(2, '0');
            const isNavyNode = index === 0 || index === 7;
            return (
              <div
                key={`desktop-${p.stage}`}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Horizontal connecting line: connects 0->1, 1->2, 2->3 (row 1) and 4->5, 5->6, 6->7 (row 2) */}
                {(index !== 3 && index !== 7) && (
                  <div className="absolute top-5 left-1/2 w-full h-[2px] bg-[#0E1B3D] -z-10 opacity-80" />
                )}

                {/* Number node */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[13px] text-white relative z-10 shadow-sm transition-transform group-hover:scale-110
                  ${isNavyNode ? 'bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900' : 'bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy'}
                  `}
                >
                  {stageNumber}
                </div>

                {/* Grade Label */}
                <p className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-[0.15em] mt-8 mb-1.5">
                  {p.grade}
                </p>

                {/* Stage Title with Inline SVG Icon Next to It */}
                <div className="flex items-center justify-center gap-2 mb-4 transition-transform group-hover:-translate-y-0.5">
                  {getStageIcon(index)}
                  <h3 className="font-serif text-2xl lg:text-[26px] font-bold text-altiusNavy">
                    {p.stage}
                  </h3>
                </div>

                {/* Gold Divider Line */}
                <div className="w-10 h-[3px] bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 mb-4 mx-auto transition-all group-hover:w-16" />

                {/* Guiding Question */}
                <p className="font-serif italic text-[15px] text-[#667085] leading-relaxed px-2">
                  &ldquo;{p.question}&rdquo;
                </p>
              </div>
            );
          })}
        </div>

        {/* --- MOBILE / TABLET DEDICATED VERTICAL TIMELINE (below lg) --- */}
        <div className="block lg:hidden max-w-xl mx-auto px-2 sm:px-4">
          {PROGRESSION.map((p, index) => {
            const stageNumber = String(index + 1).padStart(2, '0');
            const isNavyNode = index === 0 || index === 7;
            const isLast = index === PROGRESSION.length - 1;
            return (
              <div
                key={`mobile-${p.stage}`}
                className="relative flex items-start gap-4 sm:gap-6 pb-12 sm:pb-14 last:pb-0 group"
              >
                {/* Vertical connecting line - runs down through the number column only */}
                {!isLast && (
                  <div className="absolute top-10 bottom-0 left-5 -translate-x-1/2 w-[2px] bg-[#0E1B3D] opacity-80" />
                )}

                {/* Left Column: Number Node */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[13px] text-white shadow-sm transition-transform group-hover:scale-110
                    ${isNavyNode ? 'bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900' : 'bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy'}
                    `}
                  >
                    {stageNumber}
                  </div>
                </div>

                {/* Right Column: Stage Content */}
                <div className="flex-1 pt-0.5 space-y-1.5 min-w-0">
                  {/* Grade Label */}
                  <p className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-[0.15em]">
                    {p.grade}
                  </p>

                  {/* Stage Title + Icon */}
                  <div className="flex items-center gap-2.5 transition-transform group-hover:-translate-y-0.5">
                    {getStageIcon(index)}
                    <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-altiusNavy leading-tight">
                      {p.stage}
                    </h3>
                  </div>

                  {/* Gold Divider Line */}
                  <div className="w-10 h-[3px] bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 transition-all group-hover:w-16" />

                  {/* Guiding Question */}
                  <p className="font-serif italic text-[14px] sm:text-[15px] text-[#667085] leading-relaxed max-w-md pt-0.5">
                    &ldquo;{p.question}&rdquo;
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}