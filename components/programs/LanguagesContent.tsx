// 'use client';

// export default function LanguagesContent() {
//   return (
//     <div id="languages-content" className="space-y-6">
//       <div className="bg-white p-6 sm:p-8 border border-gray-200 space-y-4" style={{ borderRadius: '8px' }}>
//         <h3 className="font-serif font-bold text-xl text-altiusNavy">Languages Offered: English, French, Punjabi</h3>
//         <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
//           Our language classes focus on developing important practical skills such as speaking, listening, reading, and writing to build absolute fluency.
//         </p>
//       </div>
//     </div>
//   );
// }
'use client';

export default function LanguagesContent() {
  return (
    <div id="languages-content" className="space-y-6">
      <div className="bg-gradient-to-br from-white via-white to-altiusLight/50 p-6 sm:p-8 border border-gray-200/80 space-y-4 rounded-[20px] shadow-sm">
        <h3 className="font-serif font-bold text-xl bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-600 bg-clip-text text-transparent">
          Languages Offered: English, French, Punjabi
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
          Our language classes focus on developing important practical skills such as speaking, listening, reading, and writing to build absolute fluency.
        </p>
      </div>
    </div>
  );
}