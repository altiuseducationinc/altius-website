// // 'use client';

// // import Link from 'next/link';
// // import { PROGRESSION, STAGES, PILLARS } from '@/components/programs/futurereadyData';

// // export default function ProgramSteps() {
// //   return (
// //     <section className="py-20 px-6 bg-altiusLight text-altiusNavy border-y border-gray-200">
// //       <div className="max-w-6xl mx-auto space-y-12">

// //         <div className="text-center max-w-xl mx-auto space-y-2">
// //           <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Our Curriculum</span>
// //           <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy">
// //             How the 8-Year System Works
// //           </h2>
// //           <p className="text-gray-600 text-sm">
// //             Eight stages. One escalating path. Every year students answer a bigger question.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
// //           {PROGRESSION.map((p, index) => {
// //             const stage = STAGES[index];
// //             return (
// //               <div
// //                 key={p.stage}
// //                 className="bg-white p-6 rounded-md border border-gray-200/80 shadow-sm hover:shadow transition flex flex-col justify-between space-y-4"
// //               >
// //                 <div className="flex items-center justify-between">
// //                   <div className="w-10 h-10 rounded-full bg-altiusNavy text-altiusGold flex items-center justify-center text-lg">
// //                     {stage?.emoji}
// //                   </div>
// //                   <span className="text-[10px] font-bold uppercase tracking-widest bg-altiusGold/15 text-altiusGold px-2.5 py-1 rounded-full">
// //                     {p.grade}
// //                   </span>
// //                 </div>
// //                 <div className="space-y-1">
// //                   <h3 className="font-serif font-bold text-lg text-altiusNavy">{p.stage}</h3>
// //                   <p className="font-serif italic text-xs text-gray-600">&ldquo;{p.question}&rdquo;</p>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>

// //         <div className="bg-altiusNavy rounded-md p-8 text-white">
// //           <div className="text-center mb-8 space-y-1">
// //             <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">
// //               The FutureReady Passport
// //             </span>
// //             <h3 className="font-serif text-xl sm:text-2xl font-bold">
// //               Proof of growth across 7 competency pillars, every single year
// //             </h3>
// //           </div>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //             {PILLARS.map((pillar) => (
// //               <div key={pillar.title} className="bg-white/5 border border-white/10 rounded-md p-4 flex items-center gap-3">
// //                 <span className="text-xl">{pillar.emoji}</span>
// //                 <div>
// //                   <p className="font-serif font-bold text-sm">{pillar.title}</p>
// //                   <p className="text-gray-400 text-[11px] leading-snug">{pillar.desc}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="text-center">
// //           <Link
// //             href="/programs"
// //             className="inline-block bg-altiusBlue text-white text-xs font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-600 transition tracking-wider uppercase"
// //           >
// //             Explore the Curriculum
// //           </Link>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }




// 'use client';
// import { PROGRESSION, STAGES } from '@/components/programs/futurereadyData';

// export default function ProgramSteps() {
//   return (
//     <section className="py-20 lg:py-32 px-6 bg-[#F8F9FB] border-y border-gray-200 overflow-hidden">
//       <div className="max-w-7xl mx-auto">

//         {/* --- INTRODUCTION SECTION --- */}
//         <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 lg:mb-28">
//           <span className="text-[#D5A928] font-bold uppercase tracking-[0.2em] text-[11px]">
//             FutureReady™ Journey
//           </span>
//           <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E1B3D] leading-tight">
//             8 Years. One Journey. <br className="hidden sm:block" /> A Future Ready Student.
//           </h2>
//           <p className="text-[#667085] text-sm sm:text-base font-sans mt-4 max-w-lg mx-auto">
//             From discovering who they are to applying their skills in the real world, every grade builds the next step.
//           </p>
//         </div>

//         {/* --- LINEAR TIMELINE GRID --- */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6 max-w-6xl mx-auto relative z-10">

//           {PROGRESSION.map((p, index) => {
//             const stage = STAGES[index];
//             const stageNumber = String(index + 1).padStart(2, '0');
//             const isNavyNode = index === 0 || index === 7;
//             return (
//               <div
//                 key={p.stage}
//                 className="relative flex flex-col items-center text-center group"
//               >

//                 {/* --- 1. TIMELINE CONNECTING LINES --- */}
//                 {/* Desktop horizontal lines (Connects 0->1, 1->2, 2->3 AND 4->5, 5->6, 6->7) */}
//                 {(index !== 3 && index !== 7) && (
//                   <div className="hidden lg:block absolute top-5 left-1/2 w-full h-[2px] bg-[#0E1B3D] -z-10 opacity-80" />
//                 )}
//                 {/* Tablet horizontal lines */}
//                 {(index === 0 || index === 2 || index === 4 || index === 6) && (
//                   <div className="hidden sm:block lg:hidden absolute top-5 left-1/2 w-full h-[2px] bg-[#0E1B3D] -z-10 opacity-80" />
//                 )}
//                 {/* Mobile vertical line */}
//                 {index !== 7 && (
//                   <div className="block sm:hidden absolute top-10 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+4rem)] bg-[#0E1B3D] -z-10 opacity-80" />
//                 )}

//                 {/* --- 2. TIMELINE NUMBER NODE --- */}
//                 <div
//                   className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[13px] text-white relative z-10 shadow-sm transition-transform group-hover:scale-110
//     ${isNavyNode ? 'bg-[#0E1B3D]' : 'bg-[#D5A928]'}
//   `}
//                 >
//                   {stageNumber}
//                 </div>

//                 {/* --- 3. FLOATING ICON --- */}
//                 <div className="mt-8 mb-6 text-[#0E1B3D] [&>svg]:w-9 [&>svg]:h-9 [&>svg]:stroke-[1.5px] transition-transform group-hover:-translate-y-1 mx-auto">
//                   {stage?.emoji}
//                 </div>

//                 {/* --- 4. GRADE LABEL --- */}
//                 <p className="text-[#D5A928] text-[11px] font-bold uppercase tracking-[0.15em] mb-1.5">
//                   {p.grade}
//                 </p>

//                 {/* --- 5. STAGE TITLE --- */}
//                 <h3 className="font-serif text-2xl lg:text-[26px] font-bold text-[#0E1B3D] mb-4">
//                   {p.stage}
//                 </h3>

//                 {/* --- 6. GOLD DIVIDER LINE --- */}
//                 <div className="w-10 h-[3px] bg-[#D5A928] mb-4 mx-auto transition-all group-hover:w-16" />

//                 {/* --- 7. GUIDING QUESTION --- */}
//                 <p className="font-serif italic text-[15px] text-[#667085] leading-relaxed px-2">
//                   &ldquo;{p.question}&rdquo;
//                 </p>

//               </div>
//             );
//           })}
//         </div>

//         {/* --- SEPARATOR --- */}
//         <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent mt-24" />


//       </div>
//     </section>
//   );
// }


'use client';
import { PROGRESSION, STAGES } from '@/components/programs/futurereadyData';

// Helper to assign a compact inline SVG icon for each progression step/stage title
const getStageIcon = (index: number) => {
  switch (index) {
    case 0:
      return (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-altiusGold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 1:
      return (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-altiusGold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case 2:
      return (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-altiusGold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case 3:
      return (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-altiusGold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case 4:
      return (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-altiusGold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 5:
      return (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-altiusGold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 6:
      return (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-altiusGold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 7:
      return (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-altiusGold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.536 11.464a5 5 0 10-7.072 0l.282.282c.394.394.394 1.033 0 1.427-.394.394-1.033.394-1.427 0l-.282-.282a7 7 0 119.9 0l-.282.282c-.394.394-.394 1.033 0 1.427.394.394 1.033.394 1.427 0l.282-.282zM12 12v4m0 4h.01" />
        </svg>
      );
    default:
      return (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-altiusGold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
        </svg>
      );
  }
};

export default function ProgramSteps() {
  return (
    <section className="py-20 lg:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

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

        <div className="relative max-w-6xl mx-auto z-10">
          
          {/* Mobile/Tablet Continuous Left Line */}
          <div className="lg:hidden absolute left-5 top-5 bottom-5 w-[2px] bg-[#0E1B3D] opacity-80 -z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-6">
            {PROGRESSION.map((p, index) => {
              const stage = STAGES[index];
              const stageNumber = String(index + 1).padStart(2, '0');
              const isNavyNode = index === 0 || index === 7;
              
              return (
                <div
                  key={p.stage}
                  className="relative flex flex-col lg:items-center items-start text-left lg:text-center group pl-14 sm:pl-16 lg:pl-0"
                >
                  {(index !== 3 && index !== 7) && (
                    <div className="hidden lg:block absolute top-5 left-1/2 w-full h-[2px] bg-[#0E1B3D] -z-10 opacity-80" />
                  )}
                  {(index === 0 || index === 2 || index === 4 || index === 6) && (
                    <div className="hidden sm:block lg:hidden absolute top-5 left-1/2 w-full h-[2px] bg-[#0E1B3D] -z-10 opacity-80" />
                  )}

                  <div
                    className={`lg:relative absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-[13px] text-white z-10 shadow-sm transition-transform group-hover:scale-110
                    ${isNavyNode ? 'bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900' : 'bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy'}
                    `}
                  >
                    {stageNumber}
                  </div>

                  <p className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-[0.15em] lg:mt-8 mt-0 mb-1.5">
                    {p.grade}
                  </p>

                  <div className="flex items-center lg:justify-center justify-start gap-2 mb-3 lg:mb-4 transition-transform group-hover:-translate-y-0.5">
                    {getStageIcon(index)}
                    <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold text-altiusNavy">
                      {p.stage}
                    </h3>
                  </div>

                  <div className="w-10 h-[3px] bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 mb-3 lg:mb-4 lg:mx-auto transition-all group-hover:w-16" />

                  <p className="font-serif italic text-sm lg:text-[15px] text-[#667085] leading-relaxed lg:px-2">
                    &ldquo;{p.question}&rdquo;
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}