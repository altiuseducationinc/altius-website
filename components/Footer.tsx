// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';

// export default function Footer() {
//   return (
//     <footer className="bg-altiusNavy text-white pt-16 pb-12 px-6">
//       <div className="max-w-7xl mx-auto">

//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-white/10 gap-6">

//           <div className="bg-white rounded-md relative w-45 h-20 shadow-sm">
//             <Image
//               src="/logo.png"
//               alt="Altius Logo"
//               fill
//               className="object-contain p-1"
//             />
//           </div>

//           <div className="flex items-center gap-3">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/10">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
//               </svg>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/10">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//               </svg>
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/10">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z"/>
//               </svg>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/10">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//               </svg>
//             </a>
//           </div>

//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-10">

//           <div className="space-y-3 lg:pr-4">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">About Altius</h4>
//             <p className="text-gray-300 text-xs leading-relaxed">
//               Altius FutureReady™ — an 8-year Grades 5–12 system that takes a child from career
//               discovery to career readiness, building a Passport of real-world evidence along the way.
//             </p>
//           </div>

//           <div className="space-y-3">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Quick Links</h4>
//             <ul className="space-y-2 text-xs text-gray-300">
//               <li><Link href="/" className="hover:text-altiusGold transition">Home</Link></li>
//               <li><Link href="/about" className="hover:text-altiusGold transition">About Us</Link></li>
//               <li><Link href="/programs" className="hover:text-altiusGold transition">Our Programs</Link></li>
//               <li><Link href="/blog" className="hover:text-altiusGold transition">Blog & Articles</Link></li>
//               <li><Link href="/contact" className="hover:text-altiusGold transition">Contact Us</Link></li>
//             </ul>
//           </div>

//           <div className="space-y-3">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Programs</h4>
//             <ul className="space-y-2 text-xs text-gray-300">
//               <li><Link href="/programs" className="text-altiusGold hover:text-yellow-500 transition font-semibold">FutureReady™ (Grades 5–12)</Link></li>
//               <li><Link href="/programs?tab=academic-tutoring" className="hover:text-altiusGold transition">Academic Tutoring</Link></li>
//               <li><Link href="/programs?tab=language-programs" className="hover:text-altiusGold transition">Language Programs</Link></li>
//               <li><Link href="/programs?tab=tcf-tef-preparation" className="hover:text-altiusGold transition">TCF & TEF Prep</Link></li>
//               <li><Link href="/programs?tab=music-programs" className="hover:text-altiusGold transition">Music Programs</Link></li>
//               <li><Link href="/programs?tab=cnc-programming" className="hover:text-altiusGold transition">CNC Programming</Link></li>
//               <li><Link href="/programs?tab=3d-printing" className="hover:text-altiusGold transition">3D Printing & Tech</Link></li>
//               <li><Link href="/programs?tab=welding-trades" className="hover:text-altiusGold transition">Welding & Skilled Trades</Link></li>
//             </ul>
//           </div>

//           <div className="space-y-3">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Reach Us</h4>
//             <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
//               <li className="flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
//                 <span>Altius Education Centre, Surat</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
//                 <span>+91 XXXXX XXXXX</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
//                 <span>info@altiuseducation.com</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
//                 <span>Mon–Sat, 9 AM – 8 PM</span>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-3">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">FutureReady™ Passport</h4>
//             <p className="text-gray-300 text-[11px]">
//               Every year your child accumulates evidence across 7 competency pillars — so they
//               graduate with a portfolio that shows what they can actually do.
//             </p>
//             <div className="pt-1">
//               <Link
//                 href="/programs"
//                 className="inline-block bg-altiusGold text-altiusNavy text-xs font-bold px-5 py-2.5 rounded-md hover:bg-yellow-500 transition shadow-sm uppercase tracking-wider"
//               >
//                 Start the Journey
//               </Link>
//             </div>
//           </div>

//         </div>

//         <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
//           <p>© {new Date().getFullYear()} ALTIUS EDUCATION INC. All rights reserved.</p>
//           <div className="flex gap-4 mt-2 sm:mt-0">
//             <span className="hover:text-altiusGold cursor-pointer transition">Privacy Policy</span>
//             <span>•</span>
//             <span className="hover:text-altiusGold cursor-pointer transition">Terms of Service</span>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }





// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-t from-blue-950 via-altiusNavy to-white text-white pt-16 pb-12 px-6">
//       <div className="max-w-7xl mx-auto">

//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-white/15 gap-6">

//           {/* Logo container removed */}
//           <div className="relative w-45 h-20">
//             <Image
//               src="/logo.png"
//               alt="Altius Logo"
//               fill
//               className="object-contain"
//             />
//           </div>

//           <div className="flex items-center gap-3">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/20">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
//               </svg>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/20">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//               </svg>
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/20">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z"/>
//               </svg>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/20">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//               </svg>
//             </a>
//           </div>

//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-10">

//           <div className="space-y-3 lg:pr-4">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">About Altius</h4>
//             <p className="text-gray-200 text-xs leading-relaxed">
//               Altius FutureReady™ — an 8-year Grades 5–12 system that takes a child from career
//               discovery to career readiness, building a Passport of real-world evidence along the way.
//             </p>
//           </div>

//           <div className="space-y-3">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Quick Links</h4>
//             <ul className="space-y-2 text-xs text-gray-200">
//               <li><Link href="/" className="hover:text-altiusGold transition">Home</Link></li>
//               <li><Link href="/about" className="hover:text-altiusGold transition">About Us</Link></li>
//               <li><Link href="/programs" className="hover:text-altiusGold transition">Our Programs</Link></li>
//               <li><Link href="/blog" className="hover:text-altiusGold transition">Blog & Articles</Link></li>
//               <li><Link href="/contact" className="hover:text-altiusGold transition">Contact Us</Link></li>
//             </ul>
//           </div>

//           <div className="space-y-3">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Programs</h4>
//             <ul className="space-y-2 text-xs text-gray-200">
//               <li><Link href="/programs" className="text-altiusGold hover:text-yellow-500 transition font-semibold">FutureReady™ (Grades 5–12)</Link></li>
//               <li><Link href="/programs?tab=academic-tutoring" className="hover:text-altiusGold transition">Academic Tutoring</Link></li>
//               <li><Link href="/programs?tab=language-programs" className="hover:text-altiusGold transition">Language Programs</Link></li>
//               <li><Link href="/programs?tab=tcf-tef-preparation" className="hover:text-altiusGold transition">TCF & TEF Prep</Link></li>
//               <li><Link href="/programs?tab=music-programs" className="hover:text-altiusGold transition">Music Programs</Link></li>
//               <li><Link href="/programs?tab=cnc-programming" className="hover:text-altiusGold transition">CNC Programming</Link></li>
//               <li><Link href="/programs?tab=3d-printing" className="hover:text-altiusGold transition">3D Printing & Tech</Link></li>
//               <li><Link href="/programs?tab=welding-trades" className="hover:text-altiusGold transition">Welding & Skilled Trades</Link></li>
//             </ul>
//           </div>

//           <div className="space-y-3">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Reach Us</h4>
//             <ul className="space-y-2 text-xs text-gray-200 leading-relaxed">
//               <li className="flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
//                 <span>Altius Education Centre, Surat</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
//                 <span>+91 XXXXX XXXXX</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
//                 <span>info@altiuseducation.com</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
//                 <span>Mon–Sat, 9 AM – 8 PM</span>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-3">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">FutureReady™ Passport</h4>
//             <p className="text-gray-200 text-[11px]">
//               Every year your child accumulates evidence across 7 competency pillars — so they
//               graduate with a portfolio that shows what they can actually do.
//             </p>
//             <div className="pt-1">
//               <Link
//                 href="/programs"
//                 className="inline-block bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-altiusGold/25 hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 uppercase tracking-wider text-center"
//               >
//                 Start the Journey
//               </Link>
//             </div>
//           </div>

//         </div>

//         <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-300">
//           <p>© {new Date().getFullYear()} ALTIUS EDUCATION INC. All rights reserved.</p>
//           <div className="flex gap-4 mt-2 sm:mt-0">
//             <span className="hover:text-altiusGold cursor-pointer transition">Privacy Policy</span>
//             <span>•</span>
//             <span className="hover:text-altiusGold cursor-pointer transition">Terms of Service</span>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }





// 'use client';
 
// import Link from 'next/link';
// import Image from 'next/image';
 
// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-t from-blue-950 via-altiusNavy to-white text-white pt-16 pb-0 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
 
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-white/15 gap-6">
 
//           {/* Logo container */}
//           <div className="relative w-45 h-20">
//             <Image
//               src="/logo.png"
//               alt="Altius Logo"
//               fill
//               className="object-contain"
//             />
//           </div>
 
//           <div className="flex items-center gap-3">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/20">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
//               </svg>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/20">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//               </svg>
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/20">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z"/>
//               </svg>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/20">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//               </svg>
//             </a>
//           </div>
 
//         </div>
 
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-10">
 
//           <div className="space-y-3 lg:pr-4">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">About Altius</h4>
//             <p className="text-gray-200 text-xs leading-relaxed">
//               Altius FutureReady™ — an 8-year Grades 5–12 system that takes a child from career discovery to career readiness, building a Passport of real-world evidence along the way.
//             </p>
//           </div>
 
//           <div className="space-y-3">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Quick Links</h4>
//             <ul className="space-y-2 text-xs text-gray-200">
//               <li><Link href="/" className="hover:text-altiusGold transition">Home</Link></li>
//               <li><Link href="/about" className="hover:text-altiusGold transition">About Us</Link></li>
//               <li><Link href="/programs" className="hover:text-altiusGold transition">Our Programs</Link></li>
//               <li><Link href="/blog" className="hover:text-altiusGold transition">Blog & Articles</Link></li>
//               <li><Link href="/contact" className="hover:text-altiusGold transition">Contact Us</Link></li>
//             </ul>
//           </div>
 
//           <div className="space-y-3">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Programs</h4>
//             <ul className="space-y-2 text-xs text-gray-200">
//               <li><Link href="/programs" className="text-altiusGold hover:text-yellow-500 transition font-semibold">FutureReady™ (Grades 5–12)</Link></li>
//               <li><Link href="/programs?tab=academic-tutoring" className="hover:text-altiusGold transition">Academic Tutoring</Link></li>
//               <li><Link href="/programs?tab=language-programs" className="hover:text-altiusGold transition">Language Programs</Link></li>
//               <li><Link href="/programs?tab=tcf-tef-preparation" className="hover:text-altiusGold transition">TCF & TEF Prep</Link></li>
//               <li><Link href="/programs?tab=music-programs" className="hover:text-altiusGold transition">Music Programs</Link></li>
//               <li><Link href="/programs?tab=cnc-programming" className="hover:text-altiusGold transition">CNC Programming</Link></li>
//               <li><Link href="/programs?tab=3d-printing" className="hover:text-altiusGold transition">3D Printing & Tech</Link></li>
//               <li><Link href="/programs?tab=welding-trades" className="hover:text-altiusGold transition">Welding & Skilled Trades</Link></li>
//             </ul>
//           </div>
 
//           <div className="space-y-3">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Reach Us</h4>
//             <ul className="space-y-2 text-xs text-gray-200 leading-relaxed">
//               <li className="flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
//                 <span>Altius Education Centre, Surat</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
//                 <span>+91 XXXXX XXXXX</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
//                 <span>info@altiuseducation.com</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
//                 <span>Mon–Sat, 9 AM – 8 PM</span>
//               </li>
//             </ul>
//           </div>
 
//           <div className="space-y-3">
//             <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">FutureReady™ Passport</h4>
//             <p className="text-gray-200 text-[11px]">
//               Every year your child accumulates evidence across 7 competency pillars — so they graduate with a portfolio that shows what they can actually do.
//             </p>
//             <div className="pt-1">
//               <Link
//                 href="/programs"
//                 className="inline-block bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-altiusGold/25 hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 uppercase tracking-wider text-center"
//               >
//                 Start the Journey
//               </Link>
//             </div>
//           </div>
 
//         </div>
 
//         <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-300 pb-12">
//           <p>© {new Date().getFullYear()} ALTIUS EDUCATION INC. All rights reserved.</p>
//           <div className="flex gap-4 mt-2 sm:mt-0">
//             <span className="hover:text-altiusGold cursor-pointer transition">Privacy Policy</span>
//             <span>•</span>
//             <span className="hover:text-altiusGold cursor-pointer transition">Terms of Service</span>
//           </div>
//         </div>
 
//       </div>

//       {/* Massive End-to-End Brand Text with 0 margin */}
//       <div className="w-full text-center m-0 p-0 select-none pointer-events-none">
//         <h1 className="text-[17vw] leading-none m-0 p-0 font-black tracking-tighter uppercase text-white/90">
//           ALTIUS
//         </h1>
//       </div>
//     </footer>
//   );
// }





'use client';
 
import Link from 'next/link';
import Image from 'next/image';
 
export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-blue-950 via-altiusNavy to-white text-white pt-16 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
 
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-white/15 gap-6">
 
          {/* Logo container */}
          <div className="relative w-45 h-20">
            <Image
              src="/logo.png"
              alt="Altius Logo"
              fill
              className="object-contain"
            />
          </div>
 
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/20">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/20">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/20">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/20">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
 
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-10">
 
          <div className="space-y-3 lg:pr-4">
            <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">About Altius</h4>
            <p className="text-gray-200 text-xs leading-relaxed">
              Altius FutureReady™ — an 8-year Grades 5–12 system that takes a child from career discovery to career readiness, building a Passport of real-world evidence along the way.
            </p>
          </div>
 
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-200">
              <li><Link href="/" className="hover:text-altiusGold transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-altiusGold transition">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-altiusGold transition">Our Programs</Link></li>
              <li><Link href="/curriculum" className="hover:text-altiusGold transition">Ontario Curriculum</Link></li>
              <li><Link href="/blog" className="hover:text-altiusGold transition">Blog & Articles</Link></li>
              <li><Link href="/contact" className="hover:text-altiusGold transition">Contact Us</Link></li>
            </ul>
          </div>
 
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2 text-xs text-gray-200">
              <li><Link href="/programs" className="text-altiusGold hover:text-yellow-500 transition font-semibold">FutureReady™ (Grades 5–12)</Link></li>
              <li><Link href="/programs?tab=academic-tutoring" className="hover:text-altiusGold transition">Academic Tutoring</Link></li>
              <li><Link href="/programs?tab=language-programs" className="hover:text-altiusGold transition">Language Programs</Link></li>
              <li><Link href="/programs?tab=tcf-tef-preparation" className="hover:text-altiusGold transition">TCF & TEF Prep</Link></li>
              <li><Link href="/programs?tab=music-programs" className="hover:text-altiusGold transition">Music Programs</Link></li>
              <li><Link href="/programs?tab=cnc-programming" className="hover:text-altiusGold transition">CNC Programming</Link></li>
              <li><Link href="/programs?tab=3d-printing" className="hover:text-altiusGold transition">3D Printing & Tech</Link></li>
              <li><Link href="/programs?tab=welding-trades" className="hover:text-altiusGold transition">Welding & Skilled Trades</Link></li>
            </ul>
          </div>
 
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Reach Us</h4>
            <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-altiusGold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>6 Dewside Dr, Unit 18, Brampton, ON L6R 3Y3</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="https://wa.me/19057815450" target="_blank" rel="noopener noreferrer" className="hover:text-altiusGold transition">+1 (905) 781-5450</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>info@altiuseducation.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Mon–Sat, 9 AM – 8 PM</span>
              </li>
            </ul>
          </div>
 
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">FutureReady™ Passport</h4>
            <p className="text-gray-200 text-[11px]">
              Every year your child accumulates evidence across 7 competency pillars — so they graduate with a portfolio that shows what they can actually do.
            </p>
            <div className="pt-1">
              <Link
                href="/programs"
                className="inline-block bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-altiusGold/25 hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 uppercase tracking-wider text-center"
              >
                Start the Journey
              </Link>
            </div>
          </div>
 
        </div>
 
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-300 pb-8">
          <p>© {new Date().getFullYear()} ALTIUS EDUCATION INC. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span className="hover:text-altiusGold cursor-pointer transition">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-altiusGold cursor-pointer transition">Terms of Service</span>
          </div>
        </div>
 
      </div>
    </footer>
  );
}