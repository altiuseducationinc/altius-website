// 'use client';

// export default function AnnouncementBar() {
//   return (
//     <div className="w-full bg-altiusNavy text-white text-xs font-bold uppercase tracking-wider py-2.5 overflow-hidden shadow-sm block">
//       <div className="flex w-max whitespace-nowrap animate-[marquee_30s_linear_infinite]">
//         {[...Array(2)].map((_, i) => (
//           <div key={i} className="flex items-center gap-8 shrink-0 px-4">
//             {/* Compass Item */}
//             <span className="inline-flex items-center gap-2">
//               <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="12" cy="12" r="10" />
//                 <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" />
//               </svg>
//               <span>Altius FutureReady™ — the 8-year journey from Grade 5 to career readiness</span>
//             </span>
//             <span className="text-altiusGold/60">•</span>
//             {/* Location Item */}
//             <span className="inline-flex items-center gap-2">
//               <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
//                 <circle cx="12" cy="9" r="2.5" fill="currentColor" />
//               </svg>
//               <span>Brampton, Ontario, Canada</span>
//             </span>
//             <span className="text-altiusGold/60">•</span>
//             {/* Phone Item */}
//             <span className="inline-flex items-center gap-2">
//               <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//               <span>+1 (905) 781-5450</span>
//             </span>
//             <span className="text-altiusGold/60">•</span>
//             {/* Admissions Highlight Tag */}
//             <span className="inline-flex items-center gap-2 text-altiusNavy bg-altiusGold px-3 py-1 rounded-full">
//               <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.636 8.41m5.954 5.96l-5.954-5.96" />
//               </svg>
//               <span>2026–27 Admissions Open — Reserve Your Child&apos;s Journey Today!</span>
//             </span>
//             <span className="text-altiusGold/60">•</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

'use client';

export default function AnnouncementBar() {
  return (
    // Added sticky top-0 and z-[60] so it stays fixed at the absolute top
    <div className="sticky top-0 z-[60] w-full bg-altiusNavy text-white text-xs font-bold uppercase tracking-wider py-2.5 overflow-hidden shadow-sm block">
      <div className="flex w-max whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0 px-4">
            
            {/* Compass Item */}
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" />
              </svg>
              <span>Altius FutureReady™ — the 8-year journey from Grade 5 to career readiness</span>
            </span>

            <span className="text-altiusGold/60">•</span>

            {/* Location Item */}
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" fill="currentColor" />
              </svg>
              <span>Brampton, Ontario, Canada</span>
            </span>

            <span className="text-altiusGold/60">•</span>

            {/* Phone Item */}
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 (905) 781-5450</span>
            </span>

            <span className="text-altiusGold/60">•</span>

            {/* Admissions Highlight Tag */}
            <span className="inline-flex items-center gap-2 text-altiusNavy bg-altiusGold px-3 py-1 rounded-full">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.636 8.41m5.954 5.96l-5.954-5.96" />
              </svg>
              <span>2026–27 Admissions Open — Reserve Your Child&apos;s Journey Today!</span>
            </span>

            <span className="text-altiusGold/60">•</span>
          </div>
        ))}

      </div>
    </div>
  );
}