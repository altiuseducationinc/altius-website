// 'use client';

// import Link from 'next/link';
// import { PROGRESSION } from '@/components/programs/futurereadyData';

// // Custom SVG Icons for each of the 8 stages
// const STAGE_ICONS = [
//   // 1. Discover (Compass / Discovery)
//   <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="10" />
//     <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
//   </svg>,
//   // 2. Explore (Binoculars / Search)
//   <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//   </svg>,
//   // 3. Create (Lightbulb / Innovation)
//   <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//   </svg>,
//   // 4. Develop (Code / Building blocks)
//   <svg key="4" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//   </svg>,
//   // 5. Experience (Briefcase / Real-world)
//   <svg key="5" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   </svg>,
//   // 6. Specialize (Target / Focus)
//   <svg key="6" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="9" />
//     <circle cx="12" cy="12" r="5" />
//     <circle cx="12" cy="12" r="1" />
//   </svg>,
//   // 7. Apply (Document / Execution)
//   <svg key="7" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//   </svg>,
//   // 8. Launch (Rocket / Success)
//   <svg key="8" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m-.2-8.38a6 6 0 01-7.38 5.84v4.8h4.8a6 6 0 012.58-5.84z" />
//   </svg>
// ];

// export default function Journey() {
//   return (
//     <section id="journey" className="py-24 px-6 bg-altiusLight text-altiusNavy scroll-mt-28">
//       <div className="max-w-7xl mx-auto space-y-14">

//         <div className="text-center max-w-3xl mx-auto space-y-3">
//           <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
//             The Flagship System
//           </span>
//           <h2 className="font-serif text-3xl sm:text-[44px] font-bold text-altiusNavy leading-normal">
//             The 8-Year Altius FutureReady™ Journey
//           </h2>
//           <p className="text-gray-600 text-[15px] leading-relaxed">
//             Every year builds on the last. Each grade asks a bigger question — until the
//             student leaves Grade 12 knowing exactly who they are and where they are going.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {PROGRESSION.map((p, index) => {
//             return (
//               <Link
//                 key={p.stage}
//                 href="/programs"
//                 className="group relative bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between space-y-4 hover:-translate-y-1"
//                 style={{ borderRadius: '10px' }}
//               >
//                 <div className="flex items-start justify-between">
//                   {/* Icon with dark blue gradient background */}
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-950 via-altiusNavy to-blue-900 text-altiusGold flex items-center justify-center shadow-md group-hover:scale-110 group-hover:from-blue-900 group-hover:to-blue-800 transition">
//                     {STAGE_ICONS[index] ?? STAGE_ICONS[0]}
//                   </div>
//                   <span className="text-[10px] font-bold uppercase tracking-widest bg-altiusGold/15 text-altiusGold px-2.5 py-1 rounded-full">
//                     {p.grade}
//                   </span>
//                 </div>

//                 <div className="space-y-1.5">
//                   <div className="flex items-center gap-2">
//                     <span className="text-[10px] font-bold uppercase tracking-widest text-altiusBlue">
//                       Stage {index + 1} of 8
//                     </span>
//                   </div>
//                   <h3 className="font-serif font-bold text-2xl text-altiusNavy group-hover:text-altiusBlue transition">
//                     {p.stage}
//                   </h3>
//                   <p className="font-serif italic text-sm text-gray-600">
//                     “{p.question}”
//                   </p>
//                 </div>

//                 <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-altiusBlue">
//                   View curriculum
//                   <span className="transition-transform group-hover:translate-x-1">→</span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         <div className="text-center">
//           {/* Bottom button with dark blue gradient background */}
//           <Link
//             href="/programs"
//             className="inline-block bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 text-white text-xs font-bold px-8 py-4 rounded-xl shadow-lg hover:from-blue-900 hover:to-blue-800 transition-all tracking-wider uppercase"
//           >
//             See the Full Grades 5–12 Curriculum
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }

// 'use client';

// import Link from 'next/link';
// import { PROGRESSION } from '@/components/programs/futurereadyData';

// // Custom SVG Icons for each of the 8 stages
// const STAGE_ICONS = [
//   // 1. Discover (Compass / Discovery)
//   <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="10" />
//     <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
//   </svg>,
//   // 2. Explore (Binoculars / Search)
//   <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//   </svg>,
//   // 3. Create (Lightbulb / Innovation)
//   <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//   </svg>,
//   // 4. Develop (Code / Building blocks)
//   <svg key="4" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//   </svg>,
//   // 5. Experience (Briefcase / Real-world)
//   <svg key="5" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   </svg>,
//   // 6. Specialize (Target / Focus)
//   <svg key="6" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="9" />
//     <circle cx="12" cy="12" r="5" />
//     <circle cx="12" cy="12" r="1" />
//   </svg>,
//   // 7. Apply (Document / Execution)
//   <svg key="7" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//   </svg>,
//   // 8. Launch (Rocket / Success)
//   <svg key="8" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m-.2-8.38a6 6 0 01-7.38 5.84v4.8h4.8a6 6 0 012.58-5.84z" />
//   </svg>
// ];

// export default function Journey() {
//   return (
//     <section id="journey" className="py-24 px-6 bg-altiusLight text-altiusNavy scroll-mt-28">
//       <div className="max-w-6xl mx-auto space-y-20">

//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto space-y-3 animate-fade-in">
//           <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
//             The Flagship System
//           </span>
//           <h2 className="font-serif text-3xl sm:text-[44px] font-bold text-altiusNavy leading-normal">
//             The 8-Year Altius FutureReady™ Journey
//           </h2>
//           <p className="text-gray-600 text-[15px] leading-relaxed">
//             Every year builds on the last. Each grade asks a bigger question — until the
//             student leaves Grade 12 knowing exactly who they are and where they are going.
//           </p>
//         </div>

//         {/* Timeline Layout */}
//         <div className="relative">
//           {/* Central Connecting Line for Desktop view */}
//           <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-altiusGold/40 via-altiusNavy/20 to-altiusGold/40 -translate-x-1/2" />

//           {/* Increased space between timeline rows (space-y-16) */}
//           <div className="space-y-16 lg:space-y-20">
//             {PROGRESSION.map((p, index) => {
//               const isEven = index % 2 === 0;
//               return (
//                 <div 
//                   key={p.stage} 
//                   className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-10 ${isEven ? 'lg:flex-row-reverse' : ''}`}
//                 >
//                   {/* Content Card Side (Compact Sizing: max-w-lg, p-6) */}
//                   <div className="w-full lg:w-1/2 flex justify-center">
//                     <Link
//                       href="/programs"
//                       className="group relative block w-full max-w-md bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 p-6 space-y-3 hover:-translate-y-1 hover:border-altiusBlue/30"
//                       style={{ borderRadius: '12px' }}
//                     >
//                       <div className="flex items-center justify-between">
//                         <span className="text-[10px] font-bold uppercase tracking-widest text-altiusBlue">
//                           Stage {index + 1} of 8
//                         </span>
//                         <span className="text-[10px] font-bold uppercase tracking-widest bg-altiusGold/15 text-altiusGold px-2.5 py-0.5 rounded-full">
//                           {p.grade}
//                         </span>
//                       </div>

//                       <div className="space-y-1.5">
//                         <h3 className="font-serif font-bold text-xl text-altiusNavy group-hover:text-altiusBlue transition">
//                           {p.stage}
//                         </h3>
//                         <p className="font-serif italic text-sm text-gray-600 line-clamp-2">
//                           “{p.question}”
//                         </p>
//                       </div>

//                       <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-altiusBlue">
//                         View curriculum
//                         <span className="transition-transform group-hover:translate-x-1">→</span>
//                       </div>
//                     </Link>
//                   </div>

//                   {/* Center Node Marker with soft hover scale animation */}
//                   <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-950 via-altiusNavy to-blue-900 text-altiusGold shadow-lg z-10 shrink-0 border-4 border-altiusLight transition-transform duration-300 hover:scale-110">
//                     {STAGE_ICONS[index] ?? STAGE_ICONS[0]}
//                   </div>

//                   {/* Empty Spacer Column for Desktop alternating layout balance */}
//                   <div className="hidden lg:block w-1/2" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Bottom CTA Button */}
//         <div className="text-center pt-8">
//           <Link
//             href="/programs"
//             className="inline-block bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 text-white text-xs font-bold px-8 py-4 rounded-xl shadow-lg hover:from-blue-900 hover:to-blue-800 transition-all tracking-wider uppercase hover:scale-[1.02]"
//           >
//             See the Full Grades 5–12 Curriculum
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }




'use client';

import Link from 'next/link';
import { PROGRESSION } from '@/components/programs/futurereadyData';

// Custom SVG Icons for each of the 8 stages
const STAGE_ICONS = [
  // 1. Discover (Compass / Discovery)
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>,
  // 2. Explore (Binoculars / Search)
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  // 3. Create (Lightbulb / Innovation)
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  // 4. Develop (Code / Building blocks)
  <svg key="4" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  // 5. Experience (Briefcase / Real-world)
  <svg key="5" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  // 6. Specialize (Target / Focus)
  <svg key="6" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </svg>,
  // 7. Apply (Document / Execution)
  <svg key="7" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  // 8. Launch (Rocket / Success)
  <svg key="8" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m-.2-8.38a6 6 0 01-7.38 5.84v4.8h4.8a6 6 0 012.58-5.84z" />
  </svg>
];

export default function Journey() {
  return (
    <section id="journey" className="py-16 px-4 sm:px-6 bg-altiusLight text-altiusNavy scroll-mt-28">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 px-2">
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
            The Flagship System
          </span>
          <h2 className="font-serif text-3xl sm:text-[40px] font-bold text-altiusNavy leading-normal">
            The 8-Year Altius FutureReady™ Journey
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Every year builds on the last. Each grade asks a bigger question — until the
            student leaves Grade 12 knowing exactly who they are and where they are going.
          </p>
        </div>

        {/* Editorial Clean Flow Layout */}
        <div className="divide-y divide-gray-200/80 border-t border-b border-gray-200/80">
          {PROGRESSION.map((p, index) => {
            return (
              <Link
                key={p.stage}
                href="/programs"
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 px-4 sm:px-8 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-950 hover:via-altiusNavy hover:to-blue-900 hover:shadow-md hover:border-l-[6px] hover:border-l-altiusGold"
              >
                {/* Left Side: Number, Grade, and Title */}
                <div className="flex items-start gap-4 sm:gap-6 mb-3 md:mb-0">
                  <span className="font-serif font-bold text-xl sm:text-3xl text-gray-300 group-hover:text-altiusGold transition-colors duration-300 pt-0.5">
                    0{index + 1}
                  </span>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-altiusGold/15 text-altiusGold px-2.5 py-0.5 rounded-full">
                        {p.grade}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold text-altiusBlue group-hover:text-blue-200 tracking-wider uppercase transition-colors duration-300">
                        Stage {index + 1} of 8
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg sm:text-2xl text-altiusNavy group-hover:text-white transition-colors duration-300">
                      {p.stage}
                    </h3>
                  </div>
                </div>

                {/* Right Side: Quote / Question & Link Action */}
                <div className="flex items-center justify-between md:max-w-md gap-4 pl-9 sm:pl-12 md:pl-0">
                  <p className="font-serif italic text-xs sm:text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                    “{p.question}”
                  </p>

                  <div className="shrink-0 flex items-center justify-end">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-altiusNavy/5 group-hover:bg-white/10 group-hover:text-altiusGold text-altiusBlue transition-all flex items-center justify-center text-sm">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}