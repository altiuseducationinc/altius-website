// 'use client';

// export default function MusicContent() {
//   return (
//     <div id="music-content" className="space-y-6">
//       <div className="bg-altiusNavy text-white p-8 space-y-4" style={{ borderRadius: '8px' }}>
//         <h3 className="font-serif font-bold text-xl text-altiusGold">Discover the Joy of Learning Music</h3>
//         <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
//           Students build their understanding of rhythm, musical concepts, and performance while discovering their unique creative potential.
//         </p>
//       </div>
//     </div>
//   );
// }
'use client';

export default function MusicContent() {
  return (
    <div id="music-content" className="space-y-6">
      <div className="bg-gradient-to-br from-blue-950 via-altiusNavy to-blue-900 text-white p-8 space-y-4 rounded-[20px] shadow-lg relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-altiusGold/10 blur-xl pointer-events-none" />
        <h3 className="font-serif font-bold text-xl bg-gradient-to-r from-amber-400 via-altiusGold to-yellow-300 bg-clip-text text-transparent">
          Discover the Joy of Learning Music
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed relative z-10">
          Students build their understanding of rhythm, musical concepts, and performance while discovering their unique creative potential.
        </p>
      </div>
    </div>
  );
}