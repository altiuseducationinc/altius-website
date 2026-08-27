// 'use client';

// export default function CncContent() {
//   return (
//     <div id="cnc-content" className="space-y-6">
//       <div className="bg-white p-6 sm:p-8 border border-gray-200 space-y-4" style={{ borderRadius: '8px' }}>
//         <h3 className="font-serif font-bold text-xl text-altiusNavy">Core Concepts</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           {["CNC Technology", "Computer-Aided Manufacturing", "CNC Programming Concepts", "Machine Operations", "Design and Manufacturing", "Practical Technology Skills"].map((item, idx) => (
//             <div key={idx} className="bg-altiusLight p-3 text-xs font-semibold text-altiusNavy flex items-center gap-2" style={{ borderRadius: '6px' }}>
//               <svg className="w-4 h-4 text-altiusBlue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





'use client';

export default function CncContent() {
  return (
    <div id="cnc-content" className="space-y-6">
      <div className="bg-gradient-to-br from-white via-white to-altiusLight/50 p-6 sm:p-8 border border-gray-200/80 space-y-4 rounded-[10px] shadow-sm">
        <h3 className="font-serif font-bold text-xl bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-600 bg-clip-text text-transparent">
          Core Concepts
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {["CNC Technology", "Computer-Aided Manufacturing", "CNC Programming Concepts", "Machine Operations", "Design and Manufacturing", "Practical Technology Skills"].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-r from-altiusLight to-white p-3 text-xs font-semibold text-altiusNavy flex items-center gap-2.5 rounded-[10px] border border-gray-100 shadow-xs">
              <div className="w-6 h-6 rounded-[5px] bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 flex items-center justify-center text-white shrink-0 shadow-xs">
                <svg className="w-3.5 h-3.5 text-altiusNavy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}