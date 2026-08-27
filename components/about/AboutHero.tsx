// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';

// export default function AboutHero() {
//   return (
//     <section className="relative w-full">
//       <div className="relative h-[300px] sm:h-[380px] w-full bg-altiusNavy">
//         <Image
//           src="/bg1.png"
//           alt="Altius Education Campus"
//           fill
//           priority
//           className="object-cover object-center opacity-70"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-altiusNavy/90 via-altiusNavy/40 to-transparent flex items-end justify-center pb-12">
//           <div className="text-center space-y-2 px-6">
//             <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">
//               Learn Higher. Achieve Greater.
//             </span>
//             <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
//               About Altius Education
//             </h1>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           <div className="lg:col-span-5 space-y-3">
//             <div className="inline-flex items-center space-x-2 text-altiusGold">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//               </svg>
//               <span className="font-semibold uppercase tracking-widest text-xs">Who We Are</span>
//             </div>
//             <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy leading-snug">
//               An 8-Year System for Career Readiness — Not a Regular Tuition Centre
//             </h2>
//           </div>
//           <div className="lg:col-span-7 space-y-4 text-gray-600 text-sm leading-relaxed border-l-2 border-altiusGold/40 pl-6">
//             <p>
//               <strong className="text-altiusNavy">ALTIUS EDUCATION INC.</strong> is an educational
//               and training centre built around one flagship idea: the{" "}
//               <strong className="text-altiusNavy">Altius FutureReady™</strong> system — a structured
//               Grades 5–12 program that moves students through eight stages of career discovery,
//               leadership, technology, business, and real-world skills.
//             </p>
//             <p>
//               Every year, students accumulate evidence in their <strong className="text-altiusNavy">FutureReady Passport</strong> —
//               projects, prototypes, presentations, and professional experiences. By Grade 12, they
//               leave with a portfolio showing what they actually did, not just a certificate.
//             </p>
//             <p>
//               Specialty offerings in academic tutoring, languages (English, French, Punjabi),
//               TCF/TEF prep, music, CNC programming, 3D printing, and skilled trades run alongside
//               the journey for students who want to go deeper in a specific skill.
//             </p>
//             <div className="pt-2">
//               <Link
//                 href="/contact"
//                 className="inline-block bg-altiusNavy text-white text-xs font-semibold px-6 py-3 rounded-md shadow-sm hover:bg-altiusBlue transition tracking-wider uppercase"
//               >
//                 Contact Us Today
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[300px] sm:h-[380px] w-full bg-altiusNavy">
        <Image
          src="/bg1.png"
          alt="Altius Education Campus"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-altiusNavy/90 via-altiusNavy/40 to-transparent flex items-end justify-center pb-12">
          <div className="text-center space-y-2 px-6">
            <span className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 bg-clip-text text-transparent font-bold uppercase tracking-widest text-xs">
              Learn Higher. Achieve Greater.
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              About Altius Education
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center space-x-2 text-altiusGold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-semibold uppercase tracking-widest text-xs">Who We Are</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-600 bg-clip-text text-transparent leading-snug">
              An 8-Year System for Career Readiness — Not a Regular Tuition Centre
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-4 text-gray-600 text-sm leading-relaxed border-l-2 border-altiusGold/40 pl-6">
            <p>
              <strong className="text-altiusNavy">ALTIUS EDUCATION INC.</strong> is an educational
              and training centre built around one flagship idea: the{" "}
              <strong className="text-altiusNavy">Altius FutureReady™</strong> system — a structured
              Grades 5–12 program that moves students through eight stages of career discovery,
              leadership, technology, business, and real-world skills.
            </p>
            <p>
              Every year, students accumulate evidence in their <strong className="text-altiusNavy">FutureReady Passport</strong> —
              projects, prototypes, presentations, and professional experiences. By Grade 12, they
              leave with a portfolio showing what they actually did, not just a certificate.
            </p>
            <p>
              Specialty offerings in academic tutoring, languages (English, French, Punjabi),
              TCF/TEF prep, music, CNC programming, 3D printing, and skilled trades run alongside
              the journey for students who want to go deeper in a specific skill.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 text-white text-xs font-extrabold px-6 py-3 rounded-xl shadow-md hover:opacity-95 transition tracking-wider uppercase text-center"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}   