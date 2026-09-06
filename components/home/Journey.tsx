'use client';

import Link from 'next/link';
import { PROGRESSION } from '@/components/programs/futurereadyData';

// Custom SVG Icons for each of the 8 stages with refined hover animation groups
const STAGE_ICONS = [
  // 1. Discover (Compass / Discovery)
  <svg
    key="1"
    className="w-6 h-6 journey-icon"
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
  </svg>,

  // 2. Explore (Magnifying Glass / Search)
  <svg
    key="2"
    className="w-6 h-6 journey-icon overflow-visible"
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
  </svg>,

  // 3. Create (Lightbulb / Innovation)
  <svg
    key="3"
    className="w-6 h-6 journey-icon journey-bulb-glow"
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
  </svg>,

  // 4. Develop (Code / Typing / Building blocks)
  <svg
    key="4"
    className="w-6 h-6 journey-icon"
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
  </svg>,

  // 5. Experience (Briefcase / Opening lid)
  <svg
    key="5"
    className="w-6 h-6 journey-icon"
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
  </svg>,

  // 6. Specialize (Target / Arrow hitting bullseye)
  <svg
    key="6"
    className="w-6 h-6 journey-icon"
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
  </svg>,

  // 7. Apply (Document / Processing swap)
  <svg
    key="7"
    className="w-6 h-6 journey-icon"
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
  </svg>,

  // 8. Launch (Rocket / Rocket launch & return)
  <svg
    key="8"
    className="w-6 h-6 journey-icon overflow-visible"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    {/* Flame & sparks */}
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

    {/* Incoming Rocket #2 */}
    <g className="journey-rocket-next" style={{ opacity: 0 }}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m-.2-8.38a6 6 0 01-7.38 5.84v4.8h4.8a6 6 0 012.58-5.84z"
      />
    </g>

    {/* Current Rocket #1 */}
    <g className="journey-rocket-current">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m-.2-8.38a6 6 0 01-7.38 5.84v4.8h4.8a6 6 0 012.58-5.84z"
      />
    </g>
  </svg>
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6 bg-altiusLight text-altiusNavy scroll-mt-28">
      <div className="max-w-7xl mx-auto space-y-14">

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
            The Flagship System
          </span>
          <h2 className="font-serif text-3xl sm:text-[44px] font-bold text-altiusNavy leading-normal">
            The 8-Year Altius FutureReady™ Journey
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Every year builds on the last. Each grade asks a bigger question — until the
            student leaves Grade 12 knowing exactly who they are and where they are going.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRESSION.map((p, index) => {
            return (
              <Link
                key={p.stage}
                href="/programs"
                className="group relative bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between space-y-4 hover:-translate-y-1"
                style={{ borderRadius: '10px' }}
              >
                <div className="flex items-start justify-between">
                  {/* Icon with dark blue gradient background & 48x48 bounds */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-950 via-altiusNavy to-blue-900 text-altiusGold flex items-center justify-center shadow-md group-hover:scale-110 group-hover:from-blue-900 group-hover:to-blue-800 transition overflow-hidden">
                    {STAGE_ICONS[index] ?? STAGE_ICONS[0]}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-altiusGold/15 text-altiusGold px-2.5 py-1 rounded-full">
                    {p.grade}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-altiusBlue">
                      Stage {index + 1} of 8
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-altiusNavy group-hover:text-altiusBlue transition">
                    {p.stage}
                  </h3>
                  <p className="font-serif italic text-sm text-gray-600">
                    “{p.question}”
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-altiusBlue">
                  View curriculum
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          {/* Bottom button with dark blue gradient background */}
          <Link
            href="/programs"
            className="inline-block bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 text-white text-xs font-bold px-8 py-4 rounded-xl shadow-lg hover:from-blue-900 hover:to-blue-800 transition-all tracking-wider uppercase"
          >
            See the Full Grades 5–12 Curriculum
          </Link>
        </div>

      </div>

      <style jsx global>{`
        /* =======================================================
           ANIMATION 1 — DISCOVER / COMPASS
           ======================================================= */
        .journey-compass-needle {
          transform-origin: 12px 12px;
          transform-box: fill-box;
        }
        @keyframes compassNeedle {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(100deg); }
          45% { transform: rotate(220deg); }
          70% { transform: rotate(320deg); }
          85% { transform: rotate(370deg); }
          100% { transform: rotate(360deg); }
        }
        .group:hover .journey-compass-needle {
          animation: compassNeedle 1.1s cubic-bezier(0.34, 1.25, 0.64, 1) forwards;
        }

        /* =======================================================
           ANIMATION 2 — EXPLORE / MAGNIFYING GLASS
           ======================================================= */
        .journey-magnifier-icon {
          transform-origin: 12px 12px;
          transform-box: fill-box;
        }
        @keyframes magnifierFlip {
          0% {
            transform: scaleX(1) scaleY(1);
          }
          18% {
            transform: scaleX(0) scaleY(1.04);
          }
          36% {
            transform: scaleX(-1) scaleY(1);
          }
          54% {
            transform: scaleX(0) scaleY(1.04);
          }
          72% {
            transform: scaleX(1) scaleY(1);
          }
          85% {
            transform: scale(1.1);
          }
          94% {
            transform: scale(0.97);
          }
          100% {
            transform: scale(1);
          }
        }
        .group:hover .journey-magnifier-icon {
          animation: magnifierFlip 1.2s cubic-bezier(0.37, 0, 0.63, 1) forwards;
        }

        /* =======================================================
           ANIMATION 3 — CREATE / LIGHTBULB
           ======================================================= */
        .journey-bulb-glow {
          transform-origin: 12px 12px;
          transform-box: fill-box;
        }
        @keyframes bulbGlow {
          0% {
            filter: drop-shadow(0 0 0 rgba(212, 175, 55, 0));
            transform: scale(1);
          }
          20% {
            filter: drop-shadow(0 0 4px #FDE047) drop-shadow(0 0 8px #D4AF37);
            transform: scale(1.05);
          }
          40% {
            filter: drop-shadow(0 0 1px rgba(253, 224, 71, 0.3));
            transform: scale(1);
          }
          65% {
            filter: drop-shadow(0 0 5px #FDE047) drop-shadow(0 0 10px #D4AF37);
            transform: scale(1.04);
          }
          85% {
            filter: drop-shadow(0 0 2px rgba(253, 224, 71, 0.4));
            transform: scale(1.01);
          }
          100% {
            filter: drop-shadow(0 0 0 rgba(212, 175, 55, 0));
            transform: scale(1);
          }
        }
        .group:hover .journey-bulb-glow {
          animation: bulbGlow 1.35s ease-in-out forwards;
        }

        /* =======================================================
           ANIMATION 4 — DEVELOP / CODE ICON
           ======================================================= */
        .journey-code-slash {
          transform-origin: 12px 12px;
          transform-box: fill-box;
        }
        @keyframes codeLeft {
          0% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          50% { transform: translateX(-2.5px); }
          75% { transform: translateX(-0.5px); }
          100% { transform: translateX(0); }
        }
        @keyframes codeRight {
          0% { transform: translateX(0); }
          25% { transform: translateX(2px); }
          50% { transform: translateX(2.5px); }
          75% { transform: translateX(0.5px); }
          100% { transform: translateX(0); }
        }
        @keyframes codeSlash {
          0% { transform: scale(1); }
          25% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.08) rotate(3deg); opacity: 1; }
          75% { transform: scale(1.02); opacity: 0.9; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .group:hover .journey-code-left {
          animation: codeLeft 1.05s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .group:hover .journey-code-right {
          animation: codeRight 1.05s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .group:hover .journey-code-slash {
          animation: codeSlash 1.05s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* =======================================================
           ANIMATION 5 — EXPERIENCE / BRIEFCASE
           ======================================================= */
        .journey-briefcase-lid {
          transform-origin: 12px 7px;
          transform-box: fill-box;
        }
        .journey-briefcase-handle {
          transform-origin: 12px 6px;
          transform-box: fill-box;
        }
        @keyframes briefcaseOpen {
          0% { transform: perspective(200px) rotateX(0deg); }
          22% { transform: perspective(200px) rotateX(-70deg) translateY(-2px); }
          45% { transform: perspective(200px) rotateX(-70deg) translateY(-2px); }
          65% { transform: perspective(200px) rotateX(-70deg) translateY(-2px); }
          82% { transform: perspective(200px) rotateX(4deg) translateY(0.5px); }
          100% { transform: perspective(200px) rotateX(0deg) translateY(0); }
        }
        @keyframes briefcaseHandle {
          0% { transform: translateY(0); }
          22% { transform: translateY(-1.5px); }
          65% { transform: translateY(-1.5px); }
          82% { transform: translateY(0.3px); }
          100% { transform: translateY(0); }
        }
        .group:hover .journey-briefcase-lid {
          animation: briefcaseOpen 1.15s cubic-bezier(0.34, 1.25, 0.64, 1) forwards;
        }
        .group:hover .journey-briefcase-handle {
          animation: briefcaseHandle 1.15s cubic-bezier(0.34, 1.25, 0.64, 1) forwards;
        }

        /* =======================================================
           ANIMATION 6 — SPECIALIZE / TARGET
           ======================================================= */
        .journey-target-rings {
          transform-origin: 12px 12px;
          transform-box: fill-box;
        }
        @keyframes targetArrowHit {
          0% {
            opacity: 0;
            transform: translate(9px, -9px);
          }
          20% {
            opacity: 1;
            transform: translate(5px, -5px);
          }
          50% {
            opacity: 1;
            transform: translate(0, 0);
          }
          68% {
            opacity: 1;
            transform: translate(0, 0);
          }
          85% {
            opacity: 0;
            transform: translate(0, 0);
          }
          100% {
            opacity: 0;
            transform: translate(9px, -9px);
          }
        }
        @keyframes targetImpactRipple {
          0%, 48% { transform: scale(1); }
          52% { transform: scale(0.92); }
          62% { transform: scale(1.08); }
          75% { transform: scale(0.98); }
          100% { transform: scale(1); }
        }
        .group:hover .journey-target-arrow {
          animation: targetArrowHit 1.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .group:hover .journey-target-rings {
          animation: targetImpactRipple 1.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        /* =======================================================
           ANIMATION 7 — APPLY / DOCUMENT
           ======================================================= */
        @keyframes docCurrentSwap {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          20% {
            transform: translate(-1.5px, -2px) scale(0.94);
            opacity: 0.85;
          }
          45% {
            transform: translate(16px, 8px) scale(0.85);
            opacity: 0;
          }
          75% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }
        @keyframes docNextSwap {
          0% {
            opacity: 0;
            transform: translate(2px, 2px) scale(0.92);
          }
          20% {
            opacity: 0.65;
            transform: translate(1.5px, 1.5px) scale(0.94);
          }
          50% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          80% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          95% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
        .group:hover .journey-document-current {
          animation: docCurrentSwap 1.7s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .group:hover .journey-document-next {
          animation: docNextSwap 1.7s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        /* =======================================================
           ANIMATION 8 — LAUNCH / ROCKET
           ======================================================= */
        @keyframes rocketCurrentLaunch {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          8% {
            transform: translate(-0.5px, 0.5px);
          }
          14% {
            transform: translate(0.5px, -0.5px);
          }
          20% {
            transform: translate(3px, -3px);
            opacity: 1;
          }
          36% {
            transform: translate(32px, -32px);
            opacity: 0;
          }
          50% {
            transform: translate(0, 0);
            opacity: 0;
          }
          94% {
            transform: translate(0, 0);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0);
            opacity: 1;
          }
        }

        @keyframes rocketFlameTrail {
          0%, 7% {
            opacity: 0;
            transform: scale(0.4);
          }
          12% {
            opacity: 0.9;
            transform: scale(0.9);
          }
          20% {
            opacity: 1;
            transform: scale(1.2) translate(-1px, 1px);
          }
          30% {
            opacity: 0.85;
            transform: scale(1.4) translate(-3px, 3px);
          }
          36% {
            opacity: 0;
            transform: scale(0.6) translate(-5px, 5px);
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes rocketNextReturn {
          0%, 36% {
            opacity: 0;
            transform: translate(-32px, 32px);
          }
          40% {
            opacity: 1;
            transform: translate(-22px, 22px);
          }
          68% {
            transform: translate(1px, -1px);
            opacity: 1;
          }
          78% {
            transform: translate(-0.8px, 0.8px);
            opacity: 1;
          }
          88% {
            transform: translate(0, 0);
            opacity: 1;
          }
          96% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(0, 0);
          }
        }

        .group:hover .journey-rocket-current {
          animation: rocketCurrentLaunch 2.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .group:hover .journey-rocket-flame {
          animation: rocketFlameTrail 2.6s ease-out forwards;
        }
        .group:hover .journey-rocket-next {
          animation: rocketNextReturn 2.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        /* =======================================================
           ACCESSIBILITY: PREFERS-REDUCED-MOTION
           ======================================================= */
        @media (prefers-reduced-motion: reduce) {
          .journey-compass-needle,
          .journey-magnifier-icon,
          .journey-bulb-glow,
          .journey-code-left,
          .journey-code-right,
          .journey-code-slash,
          .journey-briefcase-lid,
          .journey-briefcase-handle,
          .journey-target-arrow,
          .journey-target-rings,
          .journey-document-current,
          .journey-document-next,
          .journey-rocket-current,
          .journey-rocket-next,
          .journey-rocket-flame {
            animation: none !important;
            transform: none !important;
            filter: none !important;
            opacity: inherit !important;
          }
        }
      `}</style>
    </section>
  );
}