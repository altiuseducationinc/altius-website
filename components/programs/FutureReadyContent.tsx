// 'use client';

// import { useState } from 'react';
// import { STAGES, PROGRESSION, PILLARS, PATHWAY_LABELS } from '@/components/programs/futurereadyData';

// export default function FutureReadyContent() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const current = STAGES[activeIndex];

//   return (
//     <div id="futureready-content" className="space-y-10">

//       <div className="bg-altiusNavy text-white rounded-[10px] p-8 sm:p-10 relative overflow-hidden">
//         <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-altiusGold/10 blur-2xl" />
//         <div className="relative space-y-3">
//           <span className="inline-flex items-center gap-2 bg-altiusGold/15 border border-altiusGold/40 text-altiusGold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
//             The Flagship System
//           </span>
//           <h2 className="font-serif text-2xl sm:text-3xl font-bold">
//             The 8-Year Altius FutureReady™ Journey
//           </h2>
//           <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
//             A structured Grades 5–12 system that takes a child from career discovery to complete
//             career readiness. Select a stage to explore the curriculum and signature project for
//             that year.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
//         {PROGRESSION.map((p, index) => (
//           <button
//             key={p.stage}
//             onClick={() => setActiveIndex(index)}
//             aria-pressed={activeIndex === index}
//             className={`px-2 py-3 rounded-lg text-center transition border ${
//               activeIndex === index
//                 ? 'bg-altiusNavy text-altiusGold border-altiusNavy shadow-md'
//                 : 'bg-white text-altiusNavy border-gray-200 hover:border-altiusBlue'
//             }`}
//           >
//             <span className="block text-[10px] font-bold uppercase tracking-wider opacity-80">
//               {p.grade}
//             </span>
//             <span className="block font-serif font-bold text-sm mt-0.5">{p.stage}</span>
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

//         <div className="lg:col-span-8 space-y-6">
//           <div className="bg-white border border-gray-200/80 shadow-sm p-6 sm:p-8 space-y-5" style={{ borderRadius: '10px' }}>
//             <div className="flex items-center justify-between flex-wrap gap-3">
//               <div>
//                 <span className="text-altiusGold font-semibold uppercase tracking-widest text-[10px] block">
//                   Stage {activeIndex + 1} of 8
//                 </span>
//                 <h3 className="font-serif text-2xl font-bold text-altiusNavy mt-1">
//                   {current.grade} — {current.stage.toUpperCase()}
//                 </h3>
//               </div>
//               <div className="flex items-center gap-2 bg-altiusLight border border-gray-200 px-3 py-2 rounded-lg">
//                 <span className="text-xl">{current.emoji}</span>
//                 <div>
//                   <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
//                     The guiding question
//                   </p>
//                   <p className="font-serif italic text-sm text-altiusNavy">
//                     “{current.question}”
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <p className="text-gray-600 text-sm leading-relaxed">
//               <strong className="text-altiusNavy">Main goal:</strong> {current.goal}
//             </p>

//             <div className="pt-2">
//               <h4 className="text-xs font-bold uppercase tracking-widest text-altiusNavy mb-3">
//                 Year Curriculum
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {current.curriculum.map((area) => (
//                   <div
//                     key={area.area}
//                     className="bg-altiusLight border border-gray-200/80 rounded-lg p-4"
//                   >
//                     <p className="text-[11px] font-bold uppercase tracking-wider text-altiusBlue mb-1.5">
//                       {area.area}
//                     </p>
//                     <ul className="space-y-1">
//                       {area.items.map((item, i) => (
//                         <li key={i} className="flex items-start gap-2 text-gray-600 text-xs leading-relaxed">
//                           <span className="w-1 h-1 rounded-full bg-altiusGold mt-1.5 shrink-0" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="lg:col-span-4 space-y-6">
//           <div className="bg-altiusGold/10 border border-altiusGold/40 p-6 rounded-[10px] space-y-3">
//             <span className="inline-block bg-altiusGold text-altiusNavy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
//               Signature Project
//             </span>
//             <h4 className="font-serif text-xl font-bold text-altiusNavy">
//               {current.majorProject.title}
//             </h4>
//             <p className="text-gray-700 text-xs leading-relaxed">
//               {current.majorProject.detail}
//             </p>
//           </div>

//           <div className="bg-white border border-gray-200/80 p-6 rounded-[10px] space-y-3 shadow-sm">
//             <h4 className="text-xs font-bold uppercase tracking-widest text-altiusNavy">
//               What goes in the Passport
//             </h4>
//             <ul className="space-y-2">
//               {PILLARS.map((pillar, i) => (
//                 <li key={pillar.title} className="flex items-center gap-3 text-gray-600 text-xs">
//                   <span className="w-6 h-6 rounded-full bg-altiusNavy text-altiusGold flex items-center justify-center text-[11px] shrink-0">
//                     {i + 1}
//                   </span>
//                   <span className="font-medium">{pillar.title}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//       </div>

//       {activeIndex === 5 && (
//         <div className="bg-white border border-gray-200/80 shadow-sm p-6 sm:p-8 space-y-4" style={{ borderRadius: '10px' }}>
//           <h4 className="font-serif text-xl font-bold text-altiusNavy">
//             Grade 10 — The Five Career Pathways
//           </h4>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//             {PATHWAY_LABELS.map((pathway) => (
//               <div key={pathway.title} className="bg-altiusLight border border-gray-200/80 rounded-lg p-4 text-center space-y-2">
//                 <div className="text-2xl">{pathway.emoji}</div>
//                 <p className="font-serif font-bold text-sm text-altiusNavy leading-snug">
//                   {pathway.title}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }




// 'use client';

// import { useState } from 'react';
// import { STAGES, PROGRESSION, PILLARS, PATHWAY_LABELS } from '@/components/programs/futurereadyData';
// import { 
//   Rocket, Compass, PenTool, Wrench, Eye, Target, Briefcase, Flag,
//   Fingerprint, MessageCircle, Users, Wallet, Laptop, Lightbulb, Palette, Clock, CheckCircle2
// } from 'lucide-react';

// // --- Helper Functions for UI Icons & Colors ---

// const getGradeIcon = (index: number) => {
//   const icons = [Compass, Eye, PenTool, Wrench, Users, Target, Briefcase, Rocket];
//   const Icon = icons[index] || Compass;
//   return <Icon className="w-6 h-6 mb-2 opacity-80" strokeWidth={1.5} />;
// };

// const getCurriculumStyle = (areaName: string) => {
//   const name = areaName.toLowerCase();
//   if (name.includes('personality')) return { Icon: Fingerprint, color: 'text-altiusBlue', bg: 'bg-altiusBlue/10' };
//   if (name.includes('communication')) return { Icon: MessageCircle, color: 'text-altiusNavy', bg: 'bg-altiusNavy/10' };
//   if (name.includes('social')) return { Icon: Users, color: 'text-altiusGold', bg: 'bg-altiusGold/10' };
//   if (name.includes('career')) return { Icon: Briefcase, color: 'text-altiusBlue', bg: 'bg-altiusBlue/10' };
//   if (name.includes('money') || name.includes('finance') || name.includes('financial')) return { Icon: Wallet, color: 'text-emerald-600', bg: 'bg-emerald-50' };
//   if (name.includes('technology') || name.includes('coding')) return { Icon: Laptop, color: 'text-cyan-600', bg: 'bg-cyan-50' };
//   if (name.includes('innovation') || name.includes('design') || name.includes('ai')) return { Icon: Lightbulb, color: 'text-altiusGold', bg: 'bg-altiusGold/10' };
//   if (name.includes('creativity') || name.includes('media')) return { Icon: Palette, color: 'text-altiusBlue', bg: 'bg-altiusBlue/10' };
//   if (name.includes('life')) return { Icon: Clock, color: 'text-altiusNavy', bg: 'bg-altiusNavy/10' };
//   if (name.includes('leadership') || name.includes('business') || name.includes('entrepreneurship')) return { Icon: Flag, color: 'text-altiusNavy', bg: 'bg-altiusNavy/10' };
  
//   return { Icon: CheckCircle2, color: 'text-gray-500', bg: 'bg-gray-50' }; 
// };

// export default function FutureReadyContent() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const current = STAGES[activeIndex];

//   // Dynamic icon for the active stage header based on index
//   const ActiveStageIcon = [Compass, Eye, PenTool, Wrench, Users, Target, Briefcase, Rocket][activeIndex] || Target;

//   return (
//     <div id="futureready-content" className="space-y-8 max-w-7xl mx-auto text-altiusNavy w-full">
      
//       {/* 1. HERO SECTION */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-white via-white to-altiusBlue/5 border border-gray-200 rounded-[24px] shadow-sm p-8 sm:p-12 min-h-[320px] flex items-center">
        
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//           <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-b from-altiusLight to-transparent opacity-60 blur-3xl" />
//         </div>

//         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          
//           <div className="lg:col-span-7 space-y-5">
//             <span className="inline-block text-altiusGold text-[11px] font-bold uppercase tracking-[0.15em]">
//               The Flagship System
//             </span>
//             <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-serif font-bold leading-[1.05] text-altiusNavy tracking-tight">
//               The 8-Year Altius <br />
//               FutureReady™ Journey
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
//               A structured Grades 5–12 system that takes a child from career discovery to complete career readiness. 
//               Select a stage to explore the curriculum and signature project for that year.
//             </p>
//           </div>

//           <div className="lg:col-span-5 hidden lg:flex justify-end items-center relative h-full min-h-[250px]">
//              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
//                <div className="w-[340px] h-[340px] rounded-full border-[1px] border-altiusNavy/5 absolute" />
//                <div className="w-[260px] h-[260px] rounded-full border-[1px] border-altiusNavy/10 absolute" />
//                <div className="w-[180px] h-[180px] rounded-full border-[1px] border-altiusNavy/15 absolute" />
//                <div className="w-[100px] h-[100px] rounded-full bg-altiusGold flex items-center justify-center shadow-[0_8px_24px_rgba(29,78,216,0.25)] relative z-10">
//                   <Rocket className="text-white w-10 h-10" strokeWidth={1.5} />
//                </div>
//              </div>
//           </div>
//         </div>
//       </div>

//       {/* 2. FULL-WIDTH GRADE NAVIGATION */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 w-full">
//         {PROGRESSION.map((p, index) => {
//           const isActive = activeIndex === index;
//           return (
//             <button
//               key={p.stage}
//               onClick={() => setActiveIndex(index)}
//               aria-pressed={isActive}
//               className={`flex flex-col items-center justify-center px-4 py-5 rounded-[16px] transition-all duration-300 w-full border ${
//                 isActive
//                   ? 'bg-altiusNavy text-white border-altiusGold shadow-[0_6px_20px_rgba(11,27,61,0.25)] scale-[1.02]'
//                   : 'bg-white text-altiusNavy border-gray-200 hover:border-altiusBlue hover:-translate-y-1'
//               }`}
//             >
//               {getGradeIcon(index)}
//               <span className={`block text-[10px] font-bold uppercase tracking-wider mt-1 mb-0.5 ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
//                 {p.grade}
//               </span>
//               <span className="block font-sans font-semibold text-sm">{p.stage}</span>
//             </button>
//           );
//         })}
//       </div>

//       {/* 3. MAIN CONTENT LAYOUT */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pt-6">

//         {/* --- LEFT COLUMN: MAIN CONTENT --- */}
//         <div className="lg:col-span-8 space-y-8">
          
//           <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
//             <div className="space-y-3 max-w-xl">
//               <span className="text-altiusGold text-[11px] font-bold uppercase tracking-widest block">
//                 Stage {activeIndex + 1} of 8
//               </span>
//               <h3 className="text-2xl sm:text-3xl font-serif font-bold text-altiusNavy">
//                 {current.grade} — <span className="text-altiusBlue">{current.stage.toUpperCase()}</span>
//               </h3>
//             </div>

//             <div className="flex items-start gap-3 min-w-[220px]">
//               <div className="w-10 h-10 rounded-full bg-altiusBlue flex items-center justify-center shrink-0 shadow-sm text-white">
//                  <ActiveStageIcon className="w-5 h-5" strokeWidth={1.8} />
//               </div>
//               <div>
//                 <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-1">
//                   The Guiding Question
//                 </p>
//                 <p className="font-serif font-semibold italic text-[15px] text-altiusNavy">
//                   “{current.question}”
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Table Curriculum Grid */}
//           <div className="mt-6 border-t border-l border-altiusGold/40">
//              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//               {current.curriculum.map((area) => {
//                 const { Icon, color, bg } = getCurriculumStyle(area.area);
//                 return (
//                   <div
//                     key={area.area}
//                     className="p-6 border-b border-r border-altiusGold/40"
//                   >
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bg}`}>
//                         <Icon className={`w-5 h-5 ${color}`} strokeWidth={2} />
//                       </div>
//                       <h4 className="text-[14px] font-bold text-altiusNavy font-sans">
//                         {area.area}
//                       </h4>
//                     </div>
//                     <ul className="space-y-2">
//                       {area.items.map((item, i) => (
//                         <li key={i} className="flex items-start gap-2 text-gray-600 text-[13px] leading-snug font-sans">
//                           <span className="w-1.5 h-1.5 rounded-full bg-altiusGold mt-1.5 shrink-0" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* --- RIGHT COLUMN: SIDEBAR --- */}
//         <div className="lg:col-span-4 space-y-10 pt-2">
          
//           {/* Signature Project */}
//           <div className="space-y-4 pr-4">
//             <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest border-b border-altiusGold/40 pb-2 flex w-full">
//               Signature Project
//             </span>
//             <h4 className="text-xl font-serif font-bold text-altiusNavy">
//               {current.majorProject.title}
//             </h4>
//             <p className="text-gray-600 text-sm leading-relaxed pb-2 font-sans">
//               {current.majorProject.detail}
//             </p>
//             <button className="text-[13px] font-semibold bg-altiusGold text-white px-5 py-2.5 rounded-[8px] hover:bg-altiusNavy transition-colors inline-flex items-center gap-2 shadow-sm">
//               Explore Project <span>→</span>
//             </button>
//           </div>

//           {/* Passport */}
//           <div className="bg-white border border-gray-200 p-6 rounded-[16px] space-y-5 shadow-sm">
//             <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
//               What goes in the Passport
//             </h4>
//             <ul className="space-y-3">
//               {PILLARS.map((pillar, i) => (
//                 <li key={pillar.title} className="flex items-center gap-3 text-altiusNavy text-sm font-semibold font-sans">
//                   <span className="w-6 h-6 rounded-full bg-altiusNavy text-altiusGold flex items-center justify-center text-[10px] font-bold shrink-0">
//                     {String(i + 1).padStart(2, '0')}
//                   </span>
//                   <span>{pillar.title}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }





// 'use client';

// import { useState, useEffect } from 'react';
// import { STAGES, PROGRESSION, PILLARS } from '@/components/programs/futurereadyData';
// import { 
//   Rocket, Compass, PenTool, Wrench, Eye, Target, Briefcase, Flag,
//   Fingerprint, MessageCircle, Users, Wallet, Laptop, Lightbulb, Palette, Clock, CheckCircle2
// } from 'lucide-react';

// const getGradeIcon = (index: number) => {
//   const icons = [Compass, Eye, PenTool, Wrench, Users, Target, Briefcase, Rocket];
//   const Icon = icons[index] || Compass;
//   return <Icon className="w-6 h-6 mb-2 opacity-90" strokeWidth={1.5} />;
// };

// const getCurriculumStyle = (areaName: string) => {
//   const name = areaName.toLowerCase();
//   if (name.includes('personality')) return { Icon: Fingerprint, color: 'text-altiusBlue', bg: 'bg-gradient-to-br from-altiusBlue/15 to-altiusBlue/5' };
//   if (name.includes('communication')) return { Icon: MessageCircle, color: 'text-altiusNavy', bg: 'bg-gradient-to-br from-altiusNavy/15 to-altiusNavy/5' };
//   if (name.includes('social')) return { Icon: Users, color: 'text-altiusGold', bg: 'bg-gradient-to-br from-altiusGold/15 to-altiusGold/5' };
//   if (name.includes('career')) return { Icon: Briefcase, color: 'text-altiusBlue', bg: 'bg-gradient-to-br from-altiusBlue/15 to-altiusBlue/5' };
//   if (name.includes('money') || name.includes('finance') || name.includes('financial')) return { Icon: Wallet, color: 'text-emerald-600', bg: 'bg-gradient-to-br from-emerald-100 to-emerald-50' };
//   if (name.includes('technology') || name.includes('coding')) return { Icon: Laptop, color: 'text-cyan-600', bg: 'bg-gradient-to-br from-cyan-100 to-cyan-50' };
//   if (name.includes('innovation') || name.includes('design') || name.includes('ai')) return { Icon: Lightbulb, color: 'text-altiusGold', bg: 'bg-gradient-to-br from-altiusGold/15 to-altiusGold/5' };
//   if (name.includes('creativity') || name.includes('media')) return { Icon: Palette, color: 'text-altiusBlue', bg: 'bg-gradient-to-br from-altiusBlue/15 to-altiusBlue/5' };
//   if (name.includes('life')) return { Icon: Clock, color: 'text-altiusNavy', bg: 'bg-gradient-to-br from-altiusNavy/15 to-altiusNavy/5' };
//   if (name.includes('leadership') || name.includes('business') || name.includes('entrepreneurship')) return { Icon: Flag, color: 'text-altiusNavy', bg: 'bg-gradient-to-br from-altiusNavy/15 to-altiusNavy/5' };
  
//   return { Icon: CheckCircle2, color: 'text-gray-600', bg: 'bg-gradient-to-br from-gray-100 to-gray-50' }; 
// };

// export default function FutureReadyContent() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
  
//   const current = STAGES[activeIndex];
//   const ActiveStageIcon = [Compass, Eye, PenTool, Wrench, Users, Target, Briefcase, Rocket][activeIndex] || Target;

//   // Automatic slide rotation handler with pause check
//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % PROGRESSION.length);
//     }, 2000); // Changes every 4 seconds

//     return () => clearInterval(interval);
//   }, [isPaused]);

//   return (
//     <div 
//       id="futureready-content" 
//       className="space-y-10 max-w-7xl mx-auto text-altiusNavy w-full"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
      
//       {/* 1. HERO SECTION */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-white via-altiusLight/40 to-altiusBlue/10 border border-gray-200/80 rounded-[10px] shadow-sm p-8 sm:p-12 min-h-[320px] flex items-center">
        
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//           <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-b from-altiusGold/10 via-altiusBlue/5 to-transparent opacity-70 blur-3xl" />
//         </div>

//         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          
//           <div className="lg:col-span-7 space-y-5">
//             <span className="inline-block bg-gradient-to-r from-altiusGold to-amber-600 bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-[0.15em]">
//               The Flagship System
//             </span>
//             <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-serif font-bold leading-[1.05] tracking-tight">
//               <span className="bg-gradient-to-r from-altiusNavy via-blue-950 to-altiusBlue bg-clip-text text-transparent">
//                 The 8-Year Altius <br />
//                 FutureReady™ Journey
//               </span>
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
//               A structured Grades 5–12 system that takes a child from career discovery to complete career readiness. 
//               Select a stage to explore the curriculum and signature project for that year.
//             </p>
//           </div>

//           <div className="lg:col-span-5 hidden lg:flex justify-end items-center relative h-full min-h-[250px]">
//              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
//                <div className="w-[340px] h-[340px] rounded-full border-[1px] border-altiusBlue/10 absolute bg-gradient-to-tr from-transparent to-altiusBlue/5" />
//                <div className="w-[260px] h-[260px] rounded-full border-[1px] border-altiusGold/20 absolute" />
//                <div className="w-[180px] h-[180px] rounded-full border-[1px] border-altiusNavy/15 absolute" />
//                <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-altiusGold via-amber-500 to-altiusNavy flex items-center justify-center shadow-[0_8px_24px_rgba(29,78,216,0.25)] relative z-10">
//                   <Rocket className="text-white w-10 h-10" strokeWidth={1.5} />
//                </div>
//              </div>
//           </div>
//         </div>
//       </div>

//       {/* 2. FULL-WIDTH GRADE NAVIGATION */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 w-full">
//         {PROGRESSION.map((p, index) => {
//           const isActive = activeIndex === index;
//           return (
//             <button
//               key={p.stage}
//               onClick={() => setActiveIndex(index)}
//               aria-pressed={isActive}
//               className={`flex flex-col items-center justify-center px-4 py-5 rounded-[8px] transition-all duration-300 w-full border ${
//                 isActive
//                   ? 'bg-gradient-to-br from-altiusNavy via-blue-950 to-altiusBlue text-white border-altiusGold shadow-[0_8px_25px_rgba(11,27,61,0.3)] scale-[1.02]'
//                   : 'bg-gradient-to-b from-white to-gray-50/50 text-altiusNavy border-gray-200 hover:border-altiusBlue hover:shadow-md hover:-translate-y-1'
//               }`}
//             >
//               {getGradeIcon(index)}
//               <span className={`block text-[10px] font-bold uppercase tracking-wider mt-1 mb-0.5 ${isActive ? 'text-altiusGold' : 'text-gray-500'}`}>
//                 {p.grade}
//               </span>
//               <span className="block font-sans font-semibold text-sm">{p.stage}</span>
//             </button>
//           );
//         })}
//       </div>

//       {/* 3. MAIN CONTENT LAYOUT */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pt-4">

//         {/* --- LEFT COLUMN: MAIN CONTENT --- */}
//         <div className="lg:col-span-8 space-y-8 bg-gradient-to-br from-white via-white to-altiusLight/30 p-6 sm:p-8 rounded-[10px] border border-gray-200/80 shadow-sm">
          
//           <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-gray-100 pb-6">
//             <div className="space-y-3 max-w-xl">
//               <span className="bg-gradient-to-r from-altiusGold to-amber-600 bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-widest block">
//                 Stage {activeIndex + 1} of 8
//               </span>
//               <h3 className="text-2xl sm:text-3xl font-serif font-bold text-altiusNavy">
//                 {current.grade} — <span className="bg-gradient-to-r from-altiusBlue to-blue-600 bg-clip-text text-transparent">{current.stage.toUpperCase()}</span>
//               </h3>
//             </div>

//             <div className="flex items-start gap-3 min-w-[220px] bg-altiusLight/60 p-3.5 rounded-[8px] border border-gray-200/60">
//               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-altiusBlue to-blue-700 flex items-center justify-center shrink-0 shadow-sm text-white">
//                  <ActiveStageIcon className="w-5 h-5" strokeWidth={1.8} />
//               </div>
//               <div>
//                 <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-1">
//                   The Guiding Question
//                 </p>
//                 <p className="font-serif font-semibold italic text-[15px] text-altiusNavy">
//                   “{current.question}”
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Table Curriculum Grid */}
//           <div className="mt-6 border-t border-l border-altiusGold/30 rounded-[8px] overflow-hidden shadow-sm bg-white">
//              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//               {current.curriculum.map((area) => {
//                 const { Icon, color, bg } = getCurriculumStyle(area.area);
//                 return (
//                   <div
//                     key={area.area}
//                     className="p-6 border-b border-r border-altiusGold/30 bg-gradient-to-b from-white to-gray-50/30 hover:to-altiusBlue/[0.02] transition-colors"
//                   >
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${bg}`}>
//                         <Icon className={`w-5 h-5 ${color}`} strokeWidth={2} />
//                       </div>
//                       <h4 className="text-[14px] font-bold text-altiusNavy font-sans">
//                         {area.area}
//                       </h4>
//                     </div>
//                     <ul className="space-y-2">
//                       {area.items.map((item, i) => (
//                         <li key={i} className="flex items-start gap-2 text-gray-600 text-[13px] leading-snug font-sans">
//                           <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-altiusGold to-amber-500 mt-1.5 shrink-0" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* --- RIGHT COLUMN: SIDEBAR --- */}
//         <div className="lg:col-span-4 space-y-8 pt-2">
          
//           {/* Signature Project */}
//           <div className="bg-gradient-to-br from-white via-altiusLight/20 to-altiusGold/[0.04] border border-gray-200/80 p-6 sm:p-8 rounded-[10px] space-y-4 shadow-sm">
//             <span className="bg-gradient-to-r from-altiusGold to-amber-600 bg-clip-text text-transparent text-[10px] font-bold uppercase tracking-widest border-b border-altiusGold/30 pb-2 flex w-full">
//               Signature Project
//             </span>
//             <h4 className="text-xl font-serif font-bold text-altiusNavy">
//               {current.majorProject.title}
//             </h4>
//             <p className="text-gray-600 text-sm leading-relaxed pb-2 font-sans">
//               {current.majorProject.detail}
//             </p>
//             <button className="text-[13px] font-semibold bg-gradient-to-r from-altiusGold via-amber-500 to-amber-600 text-white px-5 py-2.5 rounded-[8px] hover:from-altiusNavy hover:to-blue-950 transition-all duration-300 inline-flex items-center gap-2 shadow-sm">
//               Explore Project <span>→</span>
//             </button>
//           </div>

//           {/* Passport */}
//           <div className="bg-gradient-to-br from-white via-white to-gray-50 border border-gray-200/80 p-6 sm:p-8 rounded-[10px] space-y-5 shadow-sm">
//             <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
//               What goes in the Passport
//             </h4>
//             <ul className="space-y-3">
//               {PILLARS.map((pillar, i) => (
//                 <li key={pillar.title} className="flex items-center gap-3 text-altiusNavy text-sm font-semibold font-sans">
//                   <span className="w-6 h-6 rounded-full bg-gradient-to-br from-altiusNavy to-blue-950 text-altiusGold flex items-center justify-center text-[10px] font-bold shrink-0 shadow-sm">
//                     {String(i + 1).padStart(2, '0')}
//                   </span>
//                   <span>{pillar.title}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }




// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import { STAGES, PROGRESSION, PILLARS } from '@/components/programs/futurereadyData';
// import { 
//   Rocket, Compass, PenTool, Wrench, Eye, Target, Briefcase, Flag,
//   Fingerprint, MessageCircle, Users, Wallet, Laptop, Lightbulb, Palette, Clock, CheckCircle2
// } from 'lucide-react';

// const getGradeIcon = (index: number) => {
//   const icons = [Compass, Eye, PenTool, Wrench, Users, Target, Briefcase, Rocket];
//   const Icon = icons[index] || Compass;
//   return <Icon className="w-6 h-6 mb-2 opacity-90" strokeWidth={1.5} />;
// };

// const getCurriculumStyle = (areaName: string) => {
//   const name = areaName.toLowerCase();
//   if (name.includes('personality')) return { Icon: Fingerprint, color: 'text-altiusBlue', bg: 'bg-gradient-to-br from-altiusBlue/15 to-altiusBlue/5' };
//   if (name.includes('communication')) return { Icon: MessageCircle, color: 'text-altiusNavy', bg: 'bg-gradient-to-br from-altiusNavy/15 to-altiusNavy/5' };
//   if (name.includes('social')) return { Icon: Users, color: 'text-altiusGold', bg: 'bg-gradient-to-br from-altiusGold/15 to-altiusGold/5' };
//   if (name.includes('career')) return { Icon: Briefcase, color: 'text-altiusBlue', bg: 'bg-gradient-to-br from-altiusBlue/15 to-altiusBlue/5' };
//   if (name.includes('money') || name.includes('finance') || name.includes('financial')) return { Icon: Wallet, color: 'text-emerald-600', bg: 'bg-gradient-to-br from-emerald-100 to-emerald-50' };
//   if (name.includes('technology') || name.includes('coding')) return { Icon: Laptop, color: 'text-cyan-600', bg: 'bg-gradient-to-br from-cyan-100 to-cyan-50' };
//   if (name.includes('innovation') || name.includes('design') || name.includes('ai')) return { Icon: Lightbulb, color: 'text-altiusGold', bg: 'bg-gradient-to-br from-altiusGold/15 to-altiusGold/5' };
//   if (name.includes('creativity') || name.includes('media')) return { Icon: Palette, color: 'text-altiusBlue', bg: 'bg-gradient-to-br from-altiusBlue/15 to-altiusBlue/5' };
//   if (name.includes('life')) return { Icon: Clock, color: 'text-altiusNavy', bg: 'bg-gradient-to-br from-altiusNavy/15 to-altiusNavy/5' };
//   if (name.includes('leadership') || name.includes('business') || name.includes('entrepreneurship')) return { Icon: Flag, color: 'text-altiusNavy', bg: 'bg-gradient-to-br from-altiusNavy/15 to-altiusNavy/5' };
  
//   return { Icon: CheckCircle2, color: 'text-gray-600', bg: 'bg-gradient-to-br from-gray-100 to-gray-50' }; 
// };

// export default function FutureReadyContent() {
//   // Initialize activeIndex from sessionStorage so it persists across page transitions
//   const [activeIndex, setActiveIndex] = useState(() => {
//     if (typeof window !== 'undefined') {
//       const saved = sessionStorage.getItem('altius_futureready_index');
//       return saved !== null ? parseInt(saved, 10) : 0;
//     }
//     return 0;
//   });

//   const [isPaused, setIsPaused] = useState(false);
  
//   const current = STAGES[activeIndex] || STAGES[0];
//   const ActiveStageIcon = [Compass, Eye, PenTool, Wrench, Users, Target, Briefcase, Rocket][activeIndex] || Target;

//   // Save active index to sessionStorage whenever it changes
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       sessionStorage.setItem('altius_futureready_index', activeIndex.toString());
//     }
//   }, [activeIndex]);

//   // Continuous auto-rotation timer that respects pause state and restarts cleanly on remount
//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % PROGRESSION.length);
//     }, 2000); // Changes every 4 seconds

//     return () => clearInterval(interval);
//   }, [isPaused]);

//   const handleStageSelect = useCallback((index: number) => {
//     setActiveIndex(index);
//   }, []);

//   return (
//     <div 
//       id="futureready-content" 
//       className="space-y-10 max-w-7xl mx-auto text-altiusNavy w-full"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
      
//       {/* 1. HERO SECTION */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-white via-altiusLight/40 to-altiusBlue/10 border border-gray-200/80 rounded-[10px] shadow-sm p-8 sm:p-12 min-h-[320px] flex items-center">
        
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//           <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-b from-altiusGold/10 via-altiusBlue/5 to-transparent opacity-70 blur-3xl" />
//         </div>

//         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          
//           <div className="lg:col-span-7 space-y-5">
//             <span className="inline-block bg-gradient-to-r from-altiusGold to-amber-600 bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-[0.15em]">
//               The Flagship System
//             </span>
//             <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-serif font-bold leading-[1.05] tracking-tight">
//               <span className="bg-gradient-to-r from-altiusNavy via-blue-950 to-altiusBlue bg-clip-text text-transparent">
//                 The 8-Year Altius <br />
//                 FutureReady™ Journey
//               </span>
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
//               A structured Grades 5–12 system that takes a child from career discovery to complete career readiness. 
//               Select a stage to explore the curriculum and signature project for that year.
//             </p>
//           </div>

//           <div className="lg:col-span-5 hidden lg:flex justify-end items-center relative h-full min-h-[250px]">
//              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
//                <div className="w-[340px] h-[340px] rounded-full border-[1px] border-altiusBlue/10 absolute bg-gradient-to-tr from-transparent to-altiusBlue/5" />
//                <div className="w-[260px] h-[260px] rounded-full border-[1px] border-altiusGold/20 absolute" />
//                <div className="w-[180px] h-[180px] rounded-full border-[1px] border-altiusNavy/15 absolute" />
//                <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-altiusGold via-amber-500 to-altiusNavy flex items-center justify-center shadow-[0_8px_24px_rgba(29,78,216,0.25)] relative z-10">
//                   <Rocket className="text-white w-10 h-10" strokeWidth={1.5} />
//                </div>
//              </div>
//           </div>
//         </div>
//       </div>

//       {/* 2. FULL-WIDTH GRADE NAVIGATION */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 w-full">
//         {PROGRESSION.map((p, index) => {
//           const isActive = activeIndex === index;
//           return (
//             <button
//               key={p.stage}
//               onClick={() => handleStageSelect(index)}
//               aria-pressed={isActive}
//               className={`flex flex-col items-center justify-center px-4 py-5 rounded-[8px] transition-all duration-300 w-full border cursor-pointer ${
//                 isActive
//                   ? 'bg-gradient-to-br from-altiusNavy via-blue-950 to-altiusBlue text-white border-altiusGold shadow-[0_8px_25px_rgba(11,27,61,0.3)] scale-[1.02]'
//                   : 'bg-gradient-to-b from-white to-gray-50/50 text-altiusNavy border-gray-200 hover:border-altiusBlue hover:shadow-md hover:-translate-y-1'
//               }`}
//             >
//               {getGradeIcon(index)}
//               <span className={`block text-[10px] font-bold uppercase tracking-wider mt-1 mb-0.5 ${isActive ? 'text-altiusGold' : 'text-gray-500'}`}>
//                 {p.grade}
//               </span>
//               <span className="block font-sans font-semibold text-sm">{p.stage}</span>
//             </button>
//           );
//         })}
//       </div>

//       {/* 3. MAIN CONTENT LAYOUT */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pt-4">

//         {/* --- LEFT COLUMN: MAIN CONTENT --- */}
//         <div className="lg:col-span-8 space-y-8 bg-gradient-to-br from-white via-white to-altiusLight/30 p-6 sm:p-8 rounded-[10px] border border-gray-200/80 shadow-sm">
          
//           <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-gray-100 pb-6">
//             <div className="space-y-3 max-w-xl">
//               <span className="bg-gradient-to-r from-altiusGold to-amber-600 bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-widest block">
//                 Stage {activeIndex + 1} of 8
//               </span>
//               <h3 className="text-2xl sm:text-3xl font-serif font-bold text-altiusNavy">
//                 {current.grade} — <span className="bg-gradient-to-r from-altiusBlue to-blue-600 bg-clip-text text-transparent">{current.stage.toUpperCase()}</span>
//               </h3>
//             </div>

//             <div className="flex items-start gap-3 min-w-[220px] bg-altiusLight/60 p-3.5 rounded-[8px] border border-gray-200/60">
//               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-altiusBlue to-blue-700 flex items-center justify-center shrink-0 shadow-sm text-white">
//                  <ActiveStageIcon className="w-5 h-5" strokeWidth={1.8} />
//               </div>
//               <div>
//                 <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-1">
//                   The Guiding Question
//                 </p>
//                 <p className="font-serif font-semibold italic text-[15px] text-altiusNavy">
//                   “{current.question}”
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Table Curriculum Grid */}
//           <div className="mt-6 border-t border-l border-altiusGold/30 rounded-[8px] overflow-hidden shadow-sm bg-white">
//              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//               {current.curriculum.map((area) => {
//                 const { Icon, color, bg } = getCurriculumStyle(area.area);
//                 return (
//                   <div
//                     key={area.area}
//                     className="p-6 border-b border-r border-altiusGold/30 bg-gradient-to-b from-white to-gray-50/30 hover:to-altiusBlue/[0.02] transition-colors"
//                   >
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${bg}`}>
//                         <Icon className={`w-5 h-5 ${color}`} strokeWidth={2} />
//                       </div>
//                       <h4 className="text-[14px] font-bold text-altiusNavy font-sans">
//                         {area.area}
//                       </h4>
//                     </div>
//                     <ul className="space-y-2">
//                       {area.items.map((item, i) => (
//                         <li key={i} className="flex items-start gap-2 text-gray-600 text-[13px] leading-snug font-sans">
//                           <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-altiusGold to-amber-500 mt-1.5 shrink-0" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* --- RIGHT COLUMN: SIDEBAR --- */}
//         <div className="lg:col-span-4 space-y-8 pt-2">
          
//           {/* Signature Project */}
//           <div className="bg-gradient-to-br from-white via-altiusLight/20 to-altiusGold/[0.04] border border-gray-200/80 p-6 sm:p-8 rounded-[10px] space-y-4 shadow-sm">
//             <span className="bg-gradient-to-r from-altiusGold to-amber-600 bg-clip-text text-transparent text-[10px] font-bold uppercase tracking-widest border-b border-altiusGold/30 pb-2 flex w-full">
//               Signature Project
//             </span>
//             <h4 className="text-xl font-serif font-bold text-altiusNavy">
//               {current.majorProject.title}
//             </h4>
//             <p className="text-gray-600 text-sm leading-relaxed pb-2 font-sans">
//               {current.majorProject.detail}
//             </p>
//             <button className="text-[13px] font-semibold bg-gradient-to-r from-altiusGold via-amber-500 to-amber-600 text-white px-5 py-2.5 rounded-[8px] hover:from-altiusNavy hover:to-blue-950 transition-all duration-300 inline-flex items-center gap-2 shadow-sm cursor-pointer">
//               Explore Project <span>→</span>
//             </button>
//           </div>

//           {/* Passport */}
//           <div className="bg-gradient-to-br from-white via-white to-gray-50 border border-gray-200/80 p-6 sm:p-8 rounded-[10px] space-y-5 shadow-sm">
//             <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
//               What goes in the Passport
//             </h4>
//             <ul className="space-y-3">
//               {PILLARS.map((pillar, i) => (
//                 <li key={pillar.title} className="flex items-center gap-3 text-altiusNavy text-sm font-semibold font-sans">
//                   <span className="w-6 h-6 rounded-full bg-gradient-to-br from-altiusNavy to-blue-950 text-altiusGold flex items-center justify-center text-[10px] font-bold shrink-0 shadow-sm">
//                     {String(i + 1).padStart(2, '0')}
//                   </span>
//                   <span>{pillar.title}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }





'use client';

import { useState, useEffect, useCallback } from 'react';
import { STAGES, PROGRESSION, PILLARS } from '@/components/programs/futurereadyData';
import { 
  Rocket, Compass, PenTool, Wrench, Eye, Target, Briefcase, Flag,
  Fingerprint, MessageCircle, Users, Wallet, Laptop, Lightbulb, Palette, Clock, CheckCircle2, ChevronDown
} from 'lucide-react';

const getGradeIcon = (index: number) => {
  const icons = [Compass, Eye, PenTool, Wrench, Users, Target, Briefcase, Rocket];
  const Icon = icons[index] || Compass;
  return <Icon className="w-6 h-6 mb-2 opacity-90" strokeWidth={1.5} />;
};

const getCurriculumStyle = (areaName: string) => {
  const name = areaName.toLowerCase();
  if (name.includes('personality')) return { Icon: Fingerprint, color: 'text-altiusBlue', bg: 'bg-gradient-to-br from-altiusBlue/15 to-altiusBlue/5' };
  if (name.includes('communication')) return { Icon: MessageCircle, color: 'text-altiusNavy', bg: 'bg-gradient-to-br from-altiusNavy/15 to-altiusNavy/5' };
  if (name.includes('social')) return { Icon: Users, color: 'text-altiusGold', bg: 'bg-gradient-to-br from-altiusGold/15 to-altiusGold/5' };
  if (name.includes('career')) return { Icon: Briefcase, color: 'text-altiusBlue', bg: 'bg-gradient-to-br from-altiusBlue/15 to-altiusBlue/5' };
  if (name.includes('money') || name.includes('finance') || name.includes('financial')) return { Icon: Wallet, color: 'text-emerald-600', bg: 'bg-gradient-to-br from-emerald-100 to-emerald-50' };
  if (name.includes('technology') || name.includes('coding')) return { Icon: Laptop, color: 'text-cyan-600', bg: 'bg-gradient-to-br from-cyan-100 to-cyan-50' };
  if (name.includes('innovation') || name.includes('design') || name.includes('ai')) return { Icon: Lightbulb, color: 'text-altiusGold', bg: 'bg-gradient-to-br from-altiusGold/15 to-altiusGold/5' };
  if (name.includes('creativity') || name.includes('media')) return { Icon: Palette, color: 'text-altiusBlue', bg: 'bg-gradient-to-br from-altiusBlue/15 to-altiusBlue/5' };
  if (name.includes('life')) return { Icon: Clock, color: 'text-altiusNavy', bg: 'bg-gradient-to-br from-altiusNavy/15 to-altiusNavy/5' };
  if (name.includes('leadership') || name.includes('business') || name.includes('entrepreneurship')) return { Icon: Flag, color: 'text-altiusNavy', bg: 'bg-gradient-to-br from-altiusNavy/15 to-altiusNavy/5' };
  
  return { Icon: CheckCircle2, color: 'text-gray-600', bg: 'bg-gradient-to-br from-gray-100 to-gray-50' }; 
};

export default function FutureReadyContent() {
  // Initialize activeIndex from sessionStorage so it persists across page transitions
  const [activeIndex, setActiveIndex] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('altius_futureready_index');
      return saved !== null ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  const [isPaused, setIsPaused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const current = STAGES[activeIndex] || STAGES[0];
  const ActiveStageIcon = [Compass, Eye, PenTool, Wrench, Users, Target, Briefcase, Rocket][activeIndex] || Target;

  // Save active index to sessionStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('altius_futureready_index', activeIndex.toString());
    }
  }, [activeIndex]);

  // Continuous auto-rotation timer that respects pause state and restarts cleanly on remount
  useEffect(() => {
    if (isPaused || isMobileMenuOpen) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % PROGRESSION.length);
    }, 4000); // Changes every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, isMobileMenuOpen]);

  const handleStageSelect = useCallback((index: number) => {
    setActiveIndex(index);
    setIsMobileMenuOpen(false); // Close dropdown on selection for mobile view
  }, []);

  return (
    <div 
      id="futureready-content" 
      className="space-y-10 max-w-7xl mx-auto text-altiusNavy w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* 1. HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-altiusLight/40 to-altiusBlue/10 border border-gray-200/80 rounded-[10px] shadow-sm p-8 sm:p-12 min-h-[320px] flex items-center">
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-b from-altiusGold/10 via-altiusBlue/5 to-transparent opacity-70 blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block bg-gradient-to-r from-altiusGold to-amber-600 bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-[0.15em]">
              The Flagship System
            </span>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-serif font-bold leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-altiusNavy via-blue-950 to-altiusBlue bg-clip-text text-transparent">
                The 8-Year Altius <br />
                FutureReady™ Journey
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
              A structured Grades 5–12 system that takes a child from career discovery to complete career readiness. 
              Select a stage to explore the curriculum and signature project for that year.
            </p>
          </div>

          <div className="lg:col-span-5 hidden lg:flex justify-end items-center relative h-full min-h-[250px]">
             <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
               <div className="w-[340px] h-[340px] rounded-full border-[1px] border-altiusBlue/10 absolute bg-gradient-to-tr from-transparent to-altiusBlue/5" />
               <div className="w-[260px] h-[260px] rounded-full border-[1px] border-altiusGold/20 absolute" />
               <div className="w-[180px] h-[180px] rounded-full border-[1px] border-altiusNavy/15 absolute" />
               <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-altiusGold via-amber-500 to-altiusNavy flex items-center justify-center shadow-[0_8px_24px_rgba(29,78,216,0.25)] relative z-10">
                  <Rocket className="text-white w-10 h-10" strokeWidth={1.5} />
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* 2. GRADE NAVIGATION (COLLAPSIBLE ON MOBILE, GRID ON TABLET/DESKTOP) */}
      <div className="w-full">
        {/* Mobile Accordion Toggle Button */}
        <div className="lg:hidden w-full">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between px-5 py-4 rounded-[8px] bg-gradient-to-br from-altiusNavy via-blue-950 to-altiusBlue text-white shadow-md border border-altiusGold cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-altiusGold/20 flex items-center justify-center text-altiusGold">
                <ActiveStageIcon className="w-4 h-4" strokeWidth={1.8} />
              </span>
              <div className="text-left">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-altiusGold">
                  {PROGRESSION[activeIndex].grade}
                </span>
                <span className="block font-sans font-semibold text-sm">
                  {PROGRESSION[activeIndex].stage}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-altiusLight">
              <span>{isMobileMenuOpen ? 'Close Stages' : 'Select Stage'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {/* Collapsible Dropdown List for Mobile */}
          {isMobileMenuOpen && (
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-white p-3 rounded-[8px] border border-gray-200 shadow-xl animate-fade-in z-30 relative">
              {PROGRESSION.map((p, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={p.stage}
                    onClick={() => handleStageSelect(index)}
                    aria-pressed={isActive}
                    className={`flex items-center gap-3 px-4 py-3 rounded-[6px] transition-all duration-200 w-full border text-left cursor-pointer ${
                      isActive
                        ? 'bg-altiusNavy text-white border-altiusGold font-bold shadow-sm'
                        : 'bg-gray-50 text-altiusNavy border-gray-200 hover:bg-altiusLight/40'
                    }`}
                  >
                    <span className={`text-xs font-bold uppercase ${isActive ? 'text-altiusGold' : 'text-gray-500'}`}>
                      {p.grade}:
                    </span>
                    <span className="font-sans text-sm">{p.stage}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Standard Grid for Desktop/Tablet */}
        <div className="hidden lg:grid grid-cols-8 gap-3 w-full">
          {PROGRESSION.map((p, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={p.stage}
                onClick={() => handleStageSelect(index)}
                aria-pressed={isActive}
                className={`flex flex-col items-center justify-center px-4 py-5 rounded-[8px] transition-all duration-300 w-full border cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-altiusNavy via-blue-950 to-altiusBlue text-white border-altiusGold shadow-[0_8px_25px_rgba(11,27,61,0.3)] scale-[1.02]'
                    : 'bg-gradient-to-b from-white to-gray-50/50 text-altiusNavy border-gray-200 hover:border-altiusBlue hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {getGradeIcon(index)}
                <span className={`block text-[10px] font-bold uppercase tracking-wider mt-1 mb-0.5 ${isActive ? 'text-altiusGold' : 'text-gray-500'}`}>
                  {p.grade}
                </span>
                <span className="block font-sans font-semibold text-sm">{p.stage}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. MAIN CONTENT LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pt-4">

        {/* --- LEFT COLUMN: MAIN CONTENT --- */}
        <div className="lg:col-span-8 space-y-8 bg-gradient-to-br from-white via-white to-altiusLight/30 p-6 sm:p-8 rounded-[10px] border border-gray-200/80 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-gray-100 pb-6">
            <div className="space-y-3 max-w-xl">
              <span className="bg-gradient-to-r from-altiusGold to-amber-600 bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-widest block">
                Stage {activeIndex + 1} of 8
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-altiusNavy">
                {current.grade} — <span className="bg-gradient-to-r from-altiusBlue to-blue-600 bg-clip-text text-transparent">{current.stage.toUpperCase()}</span>
              </h3>
            </div>

            <div className="flex items-start gap-3 min-w-[220px] bg-altiusLight/60 p-3.5 rounded-[8px] border border-gray-200/60">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-altiusBlue to-blue-700 flex items-center justify-center shrink-0 shadow-sm text-white">
                 <ActiveStageIcon className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                  The Guiding Question
                </p>
                <p className="font-serif font-semibold italic text-[15px] text-altiusNavy">
                  “{current.question}”
                </p>
              </div>
            </div>
          </div>

          {/* Table Curriculum Grid */}
          <div className="mt-6 border-t border-l border-altiusGold/30 rounded-[8px] overflow-hidden shadow-sm bg-white">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {current.curriculum.map((area) => {
                const { Icon, color, bg } = getCurriculumStyle(area.area);
                return (
                  <div
                    key={area.area}
                    className="p-6 border-b border-r border-altiusGold/30 bg-gradient-to-b from-white to-gray-50/30 hover:to-altiusBlue/[0.02] transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${bg}`}>
                        <Icon className={`w-5 h-5 ${color}`} strokeWidth={2} />
                      </div>
                      <h4 className="text-[14px] font-bold text-altiusNavy font-sans">
                        {area.area}
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {area.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-[13px] leading-snug font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-altiusGold to-amber-500 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: SIDEBAR --- */}
        <div className="lg:col-span-4 space-y-8 pt-2">
          
          {/* Signature Project */}
          <div className="bg-gradient-to-br from-white via-altiusLight/20 to-altiusGold/[0.04] border border-gray-200/80 p-6 sm:p-8 rounded-[10px] space-y-4 shadow-sm">
            <span className="bg-gradient-to-r from-altiusGold to-amber-600 bg-clip-text text-transparent text-[10px] font-bold uppercase tracking-widest border-b border-altiusGold/30 pb-2 flex w-full">
              Signature Project
            </span>
            <h4 className="text-xl font-serif font-bold text-altiusNavy">
              {current.majorProject.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed pb-2 font-sans">
              {current.majorProject.detail}
            </p>
            <button className="text-[13px] font-semibold bg-gradient-to-r from-altiusGold via-amber-500 to-amber-600 text-white px-5 py-2.5 rounded-[8px] hover:from-altiusNavy hover:to-blue-950 transition-all duration-300 inline-flex items-center gap-2 shadow-sm cursor-pointer">
              Explore Project <span>→</span>
            </button>
          </div>

          {/* Passport */}
          <div className="bg-gradient-to-br from-white via-white to-gray-50 border border-gray-200/80 p-6 sm:p-8 rounded-[10px] space-y-5 shadow-sm">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
              What goes in the Passport
            </h4>
            <ul className="space-y-3">
              {PILLARS.map((pillar, i) => (
                <li key={pillar.title} className="flex items-center gap-3 text-altiusNavy text-sm font-semibold font-sans">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-altiusNavy to-blue-950 text-altiusGold flex items-center justify-center text-[10px] font-bold shrink-0 shadow-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{pillar.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}