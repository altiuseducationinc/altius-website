// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
// <header className="sticky top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-gray-200/40 shadow-xs">      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 sm:h-22 flex items-center justify-between">
        
//         {/* Logo Image - Enlarged & Direct in Bar (No partition box) */}
//         <Link 
//           href="/" 
//           className="relative w-48 sm:w-56 md:w-64 h-12 sm:h-14 md:h-15 flex items-center shrink-0 transition-transform duration-300 hover:scale-[1.02]"
//         >
//           <Image 
//             src="/logo-tight.png" 
//             alt="Altius Logo" 
//             fill 
//             priority
//             className="object-contain object-left select-none"
//           />
//         </Link>

//         {/* Desktop Navigation Links - Single Unified Bar with Enlarged Letters (No partition box) */}
//         <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[13px] xl:text-[14px] font-bold uppercase tracking-wider text-altiusNavy">
//           <Link href="/" className="hover:text-altiusBlue transition">Home</Link>
//           <Link href="/about" className="hover:text-altiusBlue transition whitespace-nowrap">About Us</Link>
//           <Link href="/programs" className="hover:text-altiusBlue transition">Programs</Link>
//           <Link href="/curriculum" className="hover:text-altiusBlue transition">Curriculum</Link>
//           <Link href="/blog" className="hover:text-altiusBlue transition">Blog</Link>
//           <Link href="/partner" className="hover:text-altiusBlue transition">Partners</Link>
//           <Link href="/contact" className="hover:text-altiusBlue transition whitespace-nowrap">Contact Us</Link>
//         </nav>

//         {/* Action Button */}
//         <div className="hidden lg:block">
//           <Link 
//             href="/contact" 
//             className="bg-gradient-to-r from-blue-950 via-altiusNavy to-altiusBlue text-white text-xs sm:text-[13px] font-bold px-6 xl:px-7 py-3 rounded-xl shadow-md hover:opacity-95 hover:shadow-lg transition tracking-wider uppercase inline-block shrink-0"
//           >
//             Enrol Now
//           </Link>
//         </div>

//         {/* Mobile & Tablet Hamburger Menu Button */}
//         <button 
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-altiusNavy focus:outline-none p-2.5 rounded-xl hover:bg-slate-100 transition cursor-pointer"
//           aria-label="Toggle Menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>

//       </div>

//       {/* Mobile & Tablet Menu Dropdown */}
//       {isOpen && (
//         <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-6 space-y-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-altiusNavy shadow-xl animate-fade-in">
//           <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5 border-b border-gray-50">Home</Link>
//           <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5 border-b border-gray-50">About Us</Link>
//           <Link href="/programs" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5 border-b border-gray-50">Programs</Link>
//           <Link href="/curriculum" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5 border-b border-gray-50">Curriculum</Link>
//           <Link href="/blog" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5 border-b border-gray-50">Blog</Link>
//           <Link href="/partner" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5 border-b border-gray-50">Partners</Link>
//           <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5">Contact Us</Link>
//           <div className="pt-3">
//             <Link 
//               href="/contact" 
//               onClick={() => setIsOpen(false)}
//               className="block text-center bg-gradient-to-r from-blue-950 via-altiusNavy to-altiusBlue text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl shadow uppercase tracking-wider"
//             >
//               Enrol Now
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     // Changed to sticky top-[37px] so it sits right under the announcement bar, and bg-white/30 for high transparency
//     <header className="sticky top-[37px] left-0 w-full z-50 bg-white/30 backdrop-blur-xl border-b border-gray-200/40 shadow-xs">
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 sm:h-22 flex items-center justify-between">
        
//         {/* Logo Image */}
//         <Link 
//           href="/" 
//           className="relative w-48 sm:w-56 md:w-64 h-12 sm:h-14 md:h-15 flex items-center shrink-0 transition-transform duration-300 hover:scale-[1.02]"
//         >
//           <Image 
//             src="/logo-tight.png" 
//             alt="Altius Logo" 
//             fill 
//             priority
//             className="object-contain object-left select-none"
//           />
//         </Link>

//         {/* Desktop Navigation Links */}
//         <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[13px] xl:text-[14px] font-bold uppercase tracking-wider text-altiusNavy">
//           <Link href="/" className="hover:text-altiusBlue transition">Home</Link>
//           <Link href="/about" className="hover:text-altiusBlue transition whitespace-nowrap">About Us</Link>
//           <Link href="/programs" className="hover:text-altiusBlue transition">Programs</Link>
//           <Link href="/curriculum" className="hover:text-altiusBlue transition">Curriculum</Link>
//           <Link href="/blog" className="hover:text-altiusBlue transition">Blog</Link>
//           <Link href="/partner" className="hover:text-altiusBlue transition">Partners</Link>
//           <Link href="/contact" className="hover:text-altiusBlue transition whitespace-nowrap">Contact Us</Link>
//         </nav>

//         {/* Action Button */}
//         <div className="hidden lg:block">
//           <Link 
//             href="/contact" 
//             className="bg-gradient-to-r from-blue-950 via-altiusNavy to-altiusBlue text-white text-xs sm:text-[13px] font-bold px-6 xl:px-7 py-3 rounded-xl shadow-md hover:opacity-95 hover:shadow-lg transition tracking-wider uppercase inline-block shrink-0"
//           >
//             Enrol Now
//           </Link>
//         </div>

//         {/* Mobile & Tablet Hamburger Menu Button */}
//         <button 
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-altiusNavy focus:outline-none p-2.5 rounded-xl hover:bg-slate-100 transition cursor-pointer"
//           aria-label="Toggle Menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>

//       </div>

//       {/* Mobile & Tablet Menu Dropdown */}
//       {isOpen && (
//         <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-6 space-y-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-altiusNavy shadow-xl animate-fade-in">
//           <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5 border-b border-gray-50">Home</Link>
//           <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5 border-b border-gray-50">About Us</Link>
//           <Link href="/programs" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5 border-b border-gray-50">Programs</Link>
//           <Link href="/curriculum" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5 border-b border-gray-50">Curriculum</Link>
//           <Link href="/blog" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5 border-b border-gray-50">Blog</Link>
//           <Link href="/partner" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5 border-b border-gray-50">Partners</Link>
//           <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1.5">Contact Us</Link>
//           <div className="pt-3">
//             <Link 
//               href="/contact" 
//               onClick={() => setIsOpen(false)}
//               className="block text-center bg-gradient-to-r from-blue-950 via-altiusNavy to-altiusBlue text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl shadow uppercase tracking-wider"
//             >
//               Enrol Now
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-[37px] left-0 w-full z-50 bg-white/30 backdrop-blur-xl border-b border-gray-200/40 shadow-xs">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Logo Image */}
        <Link 
          href="/" 
          className="relative w-48 sm:w-56 md:w-64 h-12 sm:h-14 md:h-15 flex items-center shrink-0 transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image 
            src="/logo-tight.webp" 
            alt="Altius Logo" 
            fill 
            priority
            className="object-contain object-left select-none"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[13px] xl:text-[14px] font-bold uppercase tracking-wider text-altiusNavy">
          <Link href="/" className="hover:text-altiusBlue transition">Home</Link>
          <Link href="/about" className="hover:text-altiusBlue transition whitespace-nowrap">About Us</Link>
          <Link href="/programs" className="hover:text-altiusBlue transition">Programs</Link>
          <Link href="/curriculum" className="hover:text-altiusBlue transition">Curriculum</Link>
          <Link href="/blog" className="hover:text-altiusBlue transition">Blog</Link>
          <Link href="/partner" className="hover:text-altiusBlue transition">Partners</Link>
          <Link href="/contact" className="hover:text-altiusBlue transition whitespace-nowrap">Contact Us</Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-blue-950 via-altiusNavy to-altiusBlue text-white text-xs sm:text-[13px] font-bold px-6 xl:px-7 py-3 rounded-xl shadow-md hover:opacity-95 hover:shadow-lg transition tracking-wider uppercase inline-block shrink-0"
          >
            Enrol Now
          </Link>
        </div>

        {/* Mobile & Tablet Hamburger Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-altiusNavy focus:outline-none p-2.5 rounded-xl hover:bg-slate-100 transition cursor-pointer"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile & Tablet Menu Dropdown (Tighter Spacing) */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-4 space-y-0 text-xs sm:text-sm font-bold uppercase tracking-wider text-altiusNavy shadow-xl max-h-[calc(100vh-6rem)] overflow-y-auto animate-fade-in">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-3 border-b border-gray-100">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-3 border-b border-gray-100">About Us</Link>
          <Link href="/programs" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-3 border-b border-gray-100">Programs</Link>
          <Link href="/curriculum" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-3 border-b border-gray-100">Curriculum</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-3 border-b border-gray-100">Blog</Link>
          <Link href="/partner" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-3 border-b border-gray-100">Partners</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-3">Contact Us</Link>
          <div className="pt-4 pb-2">
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="block text-center bg-gradient-to-r from-blue-950 via-altiusNavy to-altiusBlue text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl shadow uppercase tracking-wider"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}