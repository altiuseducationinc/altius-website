// // 'use client';

// // import Image from 'next/image';

// // const stats = [
// //   { value: '8', label: 'Grades of Progression' },
// //   { value: '8', label: 'Journey Stages' },
// //   { value: '5', label: 'Career Pathways' },
// //   { value: '1', label: 'FutureReady Passport' },
// // ];

// // export default function VisionSection() {
// //   return (
// //     <section className="py-24 px-6 bg-white text-altiusNavy">
// //       <div className="max-w-6xl mx-auto space-y-20">

// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
// //           <div className="lg:col-span-5 relative">
// //             <div className="relative h-[340px] w-full rounded-md overflow-hidden shadow-md">
// //               <Image src="/bg.jpg" alt="Altius Learning Environment" fill className="object-cover" />
// //             </div>
// //             <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-md text-center shadow-sm border border-gray-200">
// //               <p className="font-serif font-bold text-altiusNavy text-xs tracking-wider">ALTIUS EDUCATION INC.</p>
// //             </div>
// //           </div>

// //           <div className="lg:col-span-7 space-y-5">
// //             <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Mission & Vision</span>
// //             <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy leading-snug">
// //               From Career Discovery in Grade 5 to Career Readiness in Grade 12
// //             </h2>
// //             <p className="text-gray-600 text-sm leading-relaxed">
// //               Our mission is to give every student a structured, escalating path through careers,
// //               leadership, technology, business, and life skills — not just a series of classes.
// //             </p>
// //             <p className="text-gray-600 text-sm leading-relaxed">
// //               We connect education, technology, creativity, and real-world experience so students
// //               graduate with the knowledge, confidence, and evidence to step into the world of work
// //               and higher education with purpose.
// //             </p>
// //             <div className="font-serif italic text-altiusGold text-lg font-bold pt-2">
// //               — Not another tutoring program. An 8-year system.
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bg-altiusNavy rounded-md grid grid-cols-2 md:grid-cols-4 gap-6 p-8 text-center text-white shadow-lg">
// //           {stats.map((stat, index) => (
// //             <div key={index} className="space-y-1">
// //               <h3 className="font-serif text-3xl md:text-4xl font-bold text-altiusGold">{stat.value}</h3>
// //               <p className="text-gray-300 text-xs uppercase tracking-wider font-medium">{stat.label}</p>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }





// 'use client';

// import { GraduationCap, MessageCircle, Briefcase, BookOpen } from 'lucide-react';

// const stats = [
//   { value: '8', label: 'Grades of Progression', icon: GraduationCap },
//   { value: '8', label: 'Journey Stages', icon: MessageCircle },
//   { value: '5', label: 'Career Pathways', icon: Briefcase },
//   { value: '1', label: 'FutureReady Passport', icon: BookOpen },
// ];

// export default function VisionSection() {
//   return (
//     <section className="py-24 px-6 bg-[#F8F9FB] text-[#0E1B3D] overflow-hidden">
//       <div className="max-w-7xl mx-auto lg:pl-16">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

//           {/* =========================================
//               COLUMN 1: MISSION & VISION TEXT
//               ========================================= */}
//           <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col justify-center">
//             <span className="text-[#D5A928] text-[11px] font-bold uppercase tracking-[0.15em] mb-4 block">
//               Mission & Vision
//             </span>

//             <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-[#0E1B3D] leading-[1.15] mb-6 tracking-tight">
//               From Career Discovery in Grade 5 to Career Readiness in Grade 12
//             </h2>

//             {/* Elegant Gold Divider */}
//             <div className="w-12 h-[3px] bg-[#D5A928] mb-6" />

//             <div className="space-y-5 text-[#667085] text-[15px] leading-relaxed font-sans">
//               <p>
//                 Our mission is to give every student a structured, escalating path through careers,
//                 leadership, technology, business, and life skills — not just a series of classes.
//               </p>
//               <p>
//                 We connect education, technology, creativity, and real-world experience so students
//                 graduate with the knowledge, confidence, and evidence to step into the world of work
//                 and higher education with purpose.
//               </p>
//             </div>

//             <div className="font-serif italic text-[#D5A928] text-xl font-bold mt-10">
//               — Not another tutoring program. <br className="hidden lg:block" /> An 8-year system.
//             </div>
//           </div>

//           {/* =========================================
//               COLUMN 2: CENTERED VERTICAL VIDEO
//               ========================================= */}
//           <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center w-full">
//             <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(14,27,61,0.12)] border border-[#0E1B3D]/5 bg-gray-100">
//               {/* 
//                 Replace src with your actual video path. 
//                 Using autoPlay, loop, muted, and playsInline ensures infinite background playback on all devices.
//               */}
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover"
//               >
//                 <source src="/abt1.mp4" type="video/mp4" />
//                 {/* Fallback image if video fails to load */}
//                 <img src="/program1.jpg" alt="Altius Learning Environment" className="w-full h-full object-cover" />
//               </video>
//             </div>
//           </div>

//           {/* =========================================
//               COLUMN 3: VERTICAL STATS TIMELINE
//               ========================================= */}
//           <div className="lg:col-span-3 order-3 lg:order-3 flex justify-center lg:justify-end mt-4 lg:mt-0">
//             <div className="relative flex flex-col space-y-10 w-full max-w-[280px]">

//               {/* Connecting Vertical Line */}
//               <div className="absolute left-[23px] top-[24px] bottom-[24px] w-[2px] bg-[#E5E7EB] -z-10" />

//               {stats.map((stat, index) => {
//                 const Icon = stat.icon;
//                 return (
//                   <div key={index} className="flex items-center gap-5 relative z-10 group">
//                     {/* Icon Node */}
//                     <div className="w-[48px] h-[48px] rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center text-[#D5A928] shrink-0 shadow-sm transition-transform group-hover:scale-110 group-hover:border-[#D5A928] duration-300">
//                       <Icon className="w-5 h-5" strokeWidth={1.5} />
//                     </div>

//                     {/* Stat Text */}
//                     <div className="flex flex-col">
//                       <h3 className="font-serif text-3xl font-bold text-[#0E1B3D] leading-none mb-1">
//                         {stat.value}
//                       </h3>
//                       <p className="text-[#667085] text-[10px] uppercase tracking-[0.15em] font-bold leading-tight">
//                         {stat.label.split(' ').map((word, i) => (
//                           <span key={i} className="block">{word}</span>
//                         ))}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import { GraduationCap, MessageCircle, Briefcase, BookOpen } from 'lucide-react';

const stats = [
  { value: '8', label: 'Grades of Progression', icon: GraduationCap },
  { value: '8', label: 'Journey Stages', icon: MessageCircle },
  { value: '5', label: 'Career Pathways', icon: Briefcase },
  { value: '1', label: 'FutureReady Passport', icon: BookOpen },
];

export default function VisionSection() {
  return (
    <section className="pt-24 pb-16 px-6 bg-altiusNavy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto lg:pl-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col justify-center">
            <span className="bg-gradient-to-r from-amber-400 via-altiusGold to-yellow-300 bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-[0.15em] mb-4 block">
              Mission & Vision
            </span>

            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white leading-snug mb-6 tracking-tight">
              From Career Discovery in Grade 5 to Career Readiness in Grade 12
            </h2>

            <div className="w-12 h-[3px] bg-gradient-to-r from-amber-400 via-altiusGold to-yellow-300 mb-6" />

            <div className="space-y-5 text-gray-300 text-[15px] leading-relaxed font-sans">
              <p>
                Our mission is to give every student a structured, escalating path through careers,
                leadership, technology, business, and life skills — not just a series of classes.
              </p>
              <p>
                We connect education, technology, creativity, and real-world experience so students
                graduate with the knowledge, confidence, and evidence to step into the world of work
                and higher education with purpose.
              </p>
            </div>

            <div className="font-serif italic bg-gradient-to-r from-amber-400 via-altiusGold to-yellow-300 bg-clip-text text-transparent text-xl font-bold mt-10">
              — Not another tutoring program. <br className="hidden lg:block" /> An 8-year system.
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center w-full">
            <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 bg-blue-950">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/abt1.mp4" type="video/mp4" />
                <img src="/program1.jpg" alt="Altius Learning Environment" className="w-full h-full object-cover" />
              </video>
            </div>
          </div>

          <div className="lg:col-span-3 order-3 lg:order-3 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative flex flex-col space-y-10 w-full max-w-[280px]">
              <div className="absolute left-[23px] top-[24px] bottom-[24px] w-[2px] bg-white/10 -z-10" />

              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-5 relative z-10 group">
                    <div className="w-[48px] h-[48px] rounded-full border border-white/10 bg-blue-950/80 flex items-center justify-center text-altiusGold shrink-0 shadow-sm transition-transform group-hover:scale-110 group-hover:border-altiusGold duration-300">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-serif text-3xl font-bold text-white leading-none mb-1">
                        {stat.value}
                      </h3>
                      <p className="text-gray-400 text-[10px] uppercase tracking-[0.15em] font-bold leading-tight">
                        {stat.label.split(' ').map((word, i) => (
                          <span key={i} className="block">{word}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}