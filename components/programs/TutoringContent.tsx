// 'use client';

// export default function TutoringContent() {
//   return (
//     <div id="tutoring-content" className="space-y-6">
//       <div className="bg-white p-6 sm:p-8 border border-gray-200 space-y-4" style={{ borderRadius: '8px' }}>
//         <h3 className="font-serif font-bold text-xl text-altiusNavy">Our tutoring programs include:</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//           {["Math", "Science", "English", "French", "Punjabi", "Homework Support", "Reading and Writing", "Academic Skill Development", "Test and Exam Preparation"].map((item, idx) => (
//             <div key={idx} className="bg-altiusLight p-3 text-xs font-semibold text-altiusNavy flex items-center gap-2" style={{ borderRadius: '6px' }}>
//               <svg className="w-4 h-4 text-altiusBlue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
//               {item}
//             </div>
//           ))}
//         </div>
//         <p className="text-gray-600 text-xs italic pt-2">
//           Our goal is to help students understand concepts, improve their learning skills, and feel more confident in the classroom.
//         </p>
//       </div>
//     </div>
//   );
// }


'use client';

export default function TutoringContent() {
  return (
    <div id="tutoring-content" className="space-y-6">
      <div className="bg-gradient-to-br from-white via-white to-altiusLight/50 p-6 sm:p-8 border border-gray-200/80 space-y-4 rounded-[20px] shadow-sm">
        <h3 className="font-serif font-bold text-xl text-altiusNavy">
          Our tutoring programs include:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {["Math", "Science", "English", "French", "Punjabi", "Homework Support", "Reading and Writing", "Academic Skill Development", "Test and Exam Preparation"].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-r from-altiusLight to-white p-3 text-xs font-semibold text-altiusNavy flex items-center gap-2.5 rounded-[12px] border border-gray-100 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 flex items-center justify-center text-white shrink-0 shadow-xs">
                <svg className="w-3.5 h-3.5 text-altiusNavy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
              </div>
              {item}
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-xs italic pt-2">
          Our goal is to help students understand concepts, improve their learning skills, and feel more confident in the classroom.
        </p>
      </div>
    </div>
  );
}