// 'use client';

// export default function Tech3dContent() {
//   return (
//     <div id="tech3d-content" className="space-y-6">
//       <div className="bg-white p-6 sm:p-8 border border-gray-200 space-y-4" style={{ borderRadius: '8px' }}>
//         <h3 className="font-serif font-bold text-xl text-altiusNavy">Technology Modules</h3>
//         <div className="flex flex-wrap gap-2">
//           {["3D Printing", "3D Design", "Digital Technology", "Robotics", "Artificial Intelligence Concepts", "CNC Technology", "Creative Problem-Solving"].map((item, idx) => (
//             <span key={idx} className="bg-altiusLight text-altiusNavy px-4 py-2 text-xs font-bold border border-gray-200" style={{ borderRadius: '6px' }}>
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

export default function Tech3dContent() {
  return (
    <div id="tech3d-content" className="space-y-6">
      <div className="bg-gradient-to-br from-white via-white to-altiusLight/50 p-6 sm:p-8 border border-gray-200/80 space-y-4 rounded-[20px] shadow-sm">
        <h3 className="font-serif font-bold text-xl bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-600 bg-clip-text text-transparent">
          Technology Modules
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {["3D Printing", "3D Design", "Digital Technology", "Robotics", "Artificial Intelligence Concepts", "CNC Technology", "Creative Problem-Solving"].map((item, idx) => (
            <span key={idx} className="bg-gradient-to-r from-altiusLight to-white text-altiusNavy px-4 py-2 text-xs font-bold border border-gray-200/80 rounded-[10px] shadow-xs hover:border-altiusGold transition-all">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}