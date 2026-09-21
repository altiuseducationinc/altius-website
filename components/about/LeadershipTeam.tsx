// // 'use client';

// // import Image from 'next/image';

// // const team = [
// //   { name: 'Career Mentors', role: 'Discover → Launch Journey Guides', image: '/student1.jpg' },
// //   { name: 'Pathway Specialists', role: 'Engineering, Business, Media & Trades', image: '/student2.jpg' },
// //   { name: 'Technology Instructors', role: 'Coding, AI, CAD & 3D Printing', image: '/student3.jpg' },
// //   { name: 'Industry & Workplace Guides', role: 'Co-op, Interviews & Career Readiness', image: '/student4.jpg' },
// // ];

// // export default function LeadershipTeam() {
// //   return (
// //     <section className="py-20 px-6 bg-altiusLight text-altiusNavy">
// //       <div className="max-w-6xl mx-auto space-y-10">

// //         <div className="text-center max-w-lg mx-auto space-y-2">
// //           <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Our Mentors</span>
// //           <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy">
// //             Mentors Who Build Careers, Not Just Lessons
// //           </h2>
// //           <p className="text-gray-600 text-sm">
// //             Every stage of the FutureReady™ journey is guided by mentors who connect classroom
// //             learning to real industries and workplaces.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {team.map((member, index) => (
// //             <div key={index} className="bg-white rounded-md overflow-hidden border border-gray-200/80 shadow-sm flex flex-col">
// //               <div className="relative h-60 w-full bg-gray-100">
// //                 <Image src={member.image} alt={member.name} fill className="object-cover" />
// //               </div>
// //               <div className="p-4 text-center space-y-1">
// //                 <h3 className="font-serif font-bold text-altiusNavy text-sm">{member.name}</h3>
// //                 <p className="text-gray-500 text-xs font-medium">{member.role}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }




// 'use client';

// import Image from 'next/image';
// import { Compass, Network, Code2, BriefcaseBusiness, ArrowRight } from 'lucide-react';

// // Augmented existing data with Lucide icons
// const team = [
//   { name: 'Career Mentors', role: 'Discover → Launch Journey Guides', image: '/student1.jpg', icon: Compass },
//   { name: 'Pathway Specialists', role: 'Engineering, Business, Media & Trades', image: '/student2.jpg', icon: Network },
//   { name: 'Technology Instructors', role: 'Coding, AI, CAD & 3D Printing', image: '/student3.jpg', icon: Code2 },
//   { name: 'Industry & Workplace Guides', role: 'Co-op, Interviews & Career Readiness', image: '/student4.jpg', icon: BriefcaseBusiness },
// ];

// // Helper to handle responsive inner borders for the dark strip
// const getBorderClasses = (index: number) => {
//   let classes = "border-white/[0.12] ";

//   // Mobile: Bottom border on all except the last item
//   classes += index < 3 ? "border-b " : "";

//   // Tablet (2x2 Grid): Reset mobile bottom, apply proper right/bottom
//   classes += "md:border-b-0 ";
//   classes += index < 2 ? "md:border-b " : "";
//   classes += index % 2 === 0 ? "md:border-r " : "md:border-r-0 ";

//   // Desktop (4 columns): Right borders on 0, 1, 2. No bottom borders.
//   classes += "lg:border-b-0 ";
//   classes += index < 3 ? "lg:border-r " : "lg:border-r-0 ";

//   return classes;
// };

// export default function LeadershipTeam() {
//   return (
//     <section className="py-24 px-6 bg-[#F8F9FB] overflow-hidden">
//       <div className="max-w-7xl mx-auto space-y-16">

//         {/* =========================================
//             SECTION HEADER
//             ========================================= */}
//         <div className="text-center max-w-2xl mx-auto relative">

//           {/* Subtle Decorative Dots (Matches Reference Image) */}
//           <div className="hidden lg:block absolute top-4 -left-16 w-8 h-8 opacity-20 bg-[radial-gradient(#D5A928_2px,transparent_2px)] [background-size:8px_8px]" />
//           <div className="hidden lg:block absolute top-4 -right-16 w-8 h-8 opacity-20 bg-[radial-gradient(#D5A928_2px,transparent_2px)] [background-size:8px_8px]" />

//           <span className="text-[#D5A928] font-bold uppercase tracking-[0.15em] text-[11px] block mb-4">
//             Our Mentors
//           </span>
//           <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0E1B3D] leading-[1.2] mb-6">
//             Mentors Who Build Careers, <br className="hidden sm:block" /> Not Just Lessons
//           </h2>

//           {/* Subtle Gold Accent Line */}
//           <div className="w-12 h-[2px] bg-[#D5A928] mx-auto mb-6" />

//           <p className="text-[#667085] text-[15px] leading-relaxed font-sans max-w-[500px] mx-auto">
//             Every stage of the FutureReady™ journey is guided by mentors who connect classroom learning to real industries and workplaces.
//           </p>
//         </div>

//         {/* =========================================
//             DARK ACCENT MENTOR STRIP
//             ========================================= */}
//         <div className="w-full bg-[#0E1B3D] rounded-[24px] shadow-[0_18px_45px_rgba(14,27,61,0.12)] relative overflow-hidden">

//           {/* Minimal interior dot pattern overlay for premium texture */}
//           <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
//             {team.map((member, index) => {
//               const Icon = member.icon;
//               return (
//                 <div
//                   key={index}
//                   className={`group relative h-[360px] sm:h-[340px] flex transition-colors duration-300 hover:bg-white/[0.035] cursor-default ${getBorderClasses(index)}`}
//                 >

//                   {/* --- LEFT: Mentor Image Cutout --- */}
//                   <div className="w-[45%] h-full relative overflow-hidden flex items-end">
//                     {/* The image wraps inside a container that slightly floats on hover */}
//                     <div className="relative w-full h-[90%] transition-transform duration-300 ease-out group-hover:-translate-y-2">
//                       <Image
//                         src={member.image}
//                         alt={member.name}
//                         fill
//                         className="object-contain object-bottom drop-shadow-2xl"
//                       />
//                     </div>
//                   </div>

//                   {/* --- RIGHT: Content & Typography --- */}
//                   <div className="w-[55%] flex flex-col justify-center py-8 pr-6 pl-2">

//                     {/* Icon Accent */}
//                     <div className="mb-5">
//                       <Icon
//                         className="w-[22px] h-[22px] text-[#D5A928] group-hover:brightness-110 transition-all duration-300"
//                         strokeWidth={1.5}
//                       />
//                     </div>

//                     {/* Category Title */}
//                     <h3 className="text-white font-serif font-bold text-[18px] lg:text-[20px] leading-tight mb-2.5">
//                       {member.name}
//                     </h3>

//                     {/* Supporting Description */}
//                     <p className="text-[#CBD5E1] text-[13px] leading-[1.6] mb-8 pr-2">
//                       {member.role}
//                     </p>

//                     {/* Subtle Gold Arrow Interaction */}
//                     <div className="mt-auto">
//                       <ArrowRight
//                         className="w-4 h-4 text-[#D5A928] transition-transform duration-300 ease-out group-hover:translate-x-1.5"
//                         strokeWidth={2}
//                       />
//                     </div>

//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }



'use client';

import Image from 'next/image';
import { Compass, Network, Code2, BriefcaseBusiness, ArrowUpRight } from 'lucide-react';

const team = [
  { name: 'Career Mentors', role: 'Discover → Launch Journey Guides', image: '/f1.webp', icon: Compass },
  { name: 'Pathway Specialists', role: 'Engineering, Business, Media & Trades', image: '/f2.webp', icon: Network },
  { name: 'Technology Instructors', role: 'Coding, AI, CAD & 3D Printing', image: '/f3.webp', icon: Code2 },
  { name: 'Industry & Workplace Guides', role: 'Co-op, Interviews & Career Readiness', image: '/f4.webp', icon: BriefcaseBusiness },
];

export default function LeadershipTeam() {
  return (
    <section className="py-24 px-6 bg-[#F8F9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* --- Section Header --- */}
        <div className="text-center max-w-2xl mx-auto relative space-y-4">
          <span className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 bg-clip-text text-transparent font-bold uppercase tracking-[0.15em] text-[11px] block">
            Our Mentors
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0E1B3D] leading-[1.2]">
            Mentors Who Build Careers, <br className="hidden sm:block" /> Not Just Lessons
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 mx-auto" />
          <p className="text-[#667085] text-[15px] leading-relaxed font-sans max-w-[500px] mx-auto">
            Every stage of the FutureReady™ journey is guided by mentors who connect classroom learning to real industries and workplaces.
          </p>
        </div>

        {/* --- Modern Editorial Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={index}
                className="group relative h-[420px] rounded-[24px] overflow-hidden shadow-xl bg-altiusNavy flex flex-col justify-end p-6 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Multi-step Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-altiusNavy via-altiusNavy/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                </div>

                {/* Top Floating Icon Badge */}
                <div className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-altiusGold transition-transform duration-300 group-hover:rotate-12">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>

                {/* Content Container */}
                <div className="relative z-10 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-white font-serif font-bold text-xl leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-xs font-medium leading-relaxed line-clamp-2">
                      {member.role}
                    </p>
                  </div>

                  {/* Interactive Bottom Accent */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/10">
                    <span className="text-[11px] uppercase tracking-wider text-altiusGold font-semibold">
                      FutureReady Expert
                    </span>
                    <div className="w-7 h-7 rounded-full bg-altiusGold/20 flex items-center justify-center text-altiusGold transition-all duration-300 group-hover:bg-altiusGold group-hover:text-altiusNavy">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}