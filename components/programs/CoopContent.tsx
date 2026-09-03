// 'use client';

// export default function CoopContent() {
//   return (
//     <div id="coop-content" className="space-y-6">
//       <div className="bg-white p-6 sm:p-8 border border-gray-200 space-y-4" style={{ borderRadius: '8px' }}>
//         <h3 className="font-serif font-bold text-xl text-altiusNavy">Exploration Areas</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//           {["Technology", "Skilled Trades", "Education and Training", "Career Exploration", "Workplace Skills", "Practical Learning Experiences"].map((item, idx) => (
//             <div key={idx} className="bg-altiusLight p-3 text-xs font-semibold text-altiusNavy text-center" style={{ borderRadius: '6px' }}>
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

export default function CoopContent() {
  return (
    <div id="coop-content" className="space-y-6">
      <div className="bg-gradient-to-br from-white via-white to-altiusLight/50 p-6 sm:p-8 border border-gray-200/80 space-y-4 rounded-[20px] shadow-sm">
        <h3 className="font-serif font-bold text-xl text-altiusNavy">
          Exploration Areas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {["Technology", "Skilled Trades", "Education and Training", "Career Exploration", "Workplace Skills", "Practical Learning Experiences"].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-r from-altiusLight to-white p-3.5 text-xs font-semibold text-altiusNavy text-center rounded-[12px] border border-gray-100 shadow-xs flex items-center justify-center">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}