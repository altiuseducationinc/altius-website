// 'use client';

// import Link from 'next/link';
// import { PILLARS } from '@/components/programs/futurereadyData';

// export default function Passport() {
//   return (
//     <section className="py-24 px-6 bg-altiusNavy text-white relative overflow-hidden">
//       <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-altiusBlue/20 blur-3xl" />
//       <div className="max-w-7xl mx-auto relative">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

//           <div className="lg:col-span-5 space-y-6">
//             <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
//               The Differentiator
//             </span>
//             <h2 className="font-serif text-3xl sm:text-[40px] font-bold leading-tight">
//               Not Another Tutoring Program.
//               <br />
//               <span className="text-altiusGold">An Evidence-Building System.</span>
//             </h2>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Every student carries an <strong className="text-white">Altius FutureReady Passport</strong>.
//               Year after year, they collect proof of growth across seven competency pillars — real
//               projects, real skills, real results. By Grade 12 they don&apos;t just receive a
//               certificate. They walk out with a <strong className="text-white">portfolio showing what they actually did</strong>.
//             </p>
//             <Link
//               href="/about"
//               className="inline-block bg-altiusGold text-altiusNavy text-xs font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-500 transition tracking-wider uppercase"
//             >
//               How the System Works
//             </Link>
//           </div>

//           <div className="lg:col-span-7">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {PILLARS.map((pillar, index) => (
//                 <div
//                   key={pillar.title}
//                   className="bg-white/5 border border-white/10 p-6 rounded-[10px] backdrop-blur-sm hover:bg-white/10 transition space-y-3"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full bg-altiusGold/15 border border-altiusGold/30 text-altiusGold flex items-center justify-center text-lg shrink-0">
//                       {pillar.emoji}
//                     </div>
//                     <div>
//                       <span className="text-[10px] font-bold uppercase tracking-widest text-altiusGold">
//                         Pillar {index + 1}
//                       </span>
//                       <h3 className="font-serif font-bold text-lg text-white leading-tight">
//                         {pillar.title}
//                       </h3>
//                     </div>
//                   </div>
//                   <p className="text-gray-400 text-xs leading-relaxed">
//                     {pillar.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';

// import Link from 'next/link';
// import { PILLARS } from '@/components/programs/futurereadyData';

// // Custom SVG Icons for each of the 7 competency pillars
// const PILLAR_ICONS = [
//   // 1. Critical Thinking / Analysis
//   <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//   </svg>,
//   // 2. Communication / Expression
//   <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//   </svg>,
//   // 3. Leadership / Collaboration
//   <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//   </svg>,
//   // 4. Innovation / Creativity
//   <svg key="4" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//   </svg>,
//   // 5. Resilience / Growth
//   <svg key="5" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
//   </svg>,
//   // 6. Global Citizenship
//   <svg key="6" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="10" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
//   </svg>,
//   // 7. Career Readiness / Execution
//   <svg key="7" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   </svg>
// ];

// export default function Passport() {
//   return (
//     <section className="py-24 px-6 bg-altiusNavy text-white relative overflow-hidden">
//       <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-altiusBlue/20 blur-3xl" />
//       <div className="max-w-7xl mx-auto relative">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

//           <div className="lg:col-span-5 space-y-6">
//             <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
//               The Differentiator
//             </span>
//             <h2 className="font-serif text-3xl sm:text-[40px] font-bold leading-tight">
//               Not Another Tutoring Program.
//               <br />
//               <span className="text-altiusGold">An Evidence-Building System.</span>
//             </h2>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Every student carries an <strong className="text-white">Altius FutureReady Passport</strong>.
//               Year after year, they collect proof of growth across seven competency pillars — real
//               projects, real skills, real results. By Grade 12 they don&apos;t just receive a
//               certificate. They walk out with a <strong className="text-white">portfolio showing what they actually did</strong>.
//             </p>
//             <Link
//               href="/about"
//               className="inline-block bg-altiusGold text-altiusNavy text-xs font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-500 transition tracking-wider uppercase"
//             >
//               How the System Works
//             </Link>
//           </div>

//           <div className="lg:col-span-7">
//             {/* Clean list layout separated by fine horizontal lines instead of grid boxes */}
//             <div className="divide-y divide-white/10">
//               {PILLARS.map((pillar, index) => (
//                 <div
//                   key={pillar.title}
//                   className="py-5 first:pt-0 last:pb-0 flex items-start gap-4 group"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-altiusGold/15 border border-altiusGold/30 text-altiusGold flex items-center justify-center shrink-0 mt-0.5">
//                     {PILLAR_ICONS[index] ?? PILLAR_ICONS[0]}
//                   </div>
//                   <div className="space-y-1 flex-1">
//                     <div className="flex items-center justify-between">
//                       <span className="text-[10px] font-bold uppercase tracking-widest text-altiusGold">
//                         Pillar {index + 1} of 7
//                       </span>
//                     </div>
//                     <h3 className="font-serif font-bold text-lg text-white group-hover:text-altiusGold transition">
//                       {pillar.title}
//                     </h3>
//                     <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
//                       {pillar.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import Link from 'next/link';
import { PILLARS } from '@/components/programs/futurereadyData';

// Custom SVG Icons for each of the 7 competency pillars
const PILLAR_ICONS = [
  // 1. Critical Thinking / Analysis
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  // 2. Communication / Expression
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>,
  // 3. Leadership / Collaboration
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  // 4. Innovation / Creativity
  <svg key="4" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>,
  // 5. Resilience / Growth
  <svg key="5" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // 6. Global Citizenship
  <svg key="6" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>,
  // 7. Career Readiness / Execution
  <svg key="7" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
];

export default function Passport() {
  return (
    <section className="min-h-screen py-16 lg:py-24 px-6 bg-gradient-to-br from-blue-950 via-altiusNavy to-blue-900 text-white relative overflow-hidden flex items-center">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-altiusBlue/20 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative w-full py-6 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
              The Differentiator
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight">
              Not Another Tutoring Program.
              <br />
              <span className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 bg-clip-text text-transparent">
                An Evidence-Building System.
              </span>
            </h2>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              Every student carries an <strong className="text-white font-semibold">Altius FutureReady Passport</strong>.
              Year after year, they collect proof of growth across seven competency pillars — real
              projects, real skills, real results. By Grade 12 they don&apos;t just receive a
              certificate. They walk out with a <strong className="text-white font-semibold">portfolio showing what they actually did</strong>.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-block bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy text-xs sm:text-sm font-extrabold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-altiusGold/25 hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 tracking-wider uppercase text-center"
              >
                How the System Works
              </Link>
            </div>
          </div>

          {/* Right Column: Pillars Grid with larger text */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 relative">
              
              {/* Vertical line separating columns */}
              <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/10" />

              {PILLARS.map((pillar, index) => {
                const isTopRow = index === 0 || index === 1;

                return (
                  <div
                    key={pillar.title}
                    className={`flex flex-col justify-between space-y-2.5 group ${
                      !isTopRow ? 'pt-6 border-t border-white/10' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500/15 via-altiusGold/20 to-yellow-400/15 border border-altiusGold/40 text-altiusGold flex items-center justify-center shrink-0">
                        {PILLAR_ICONS[index] ?? PILLAR_ICONS[0]}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-altiusGold">
                          Pillar {index + 1} of 7
                        </span>
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-altiusGold transition leading-snug">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}