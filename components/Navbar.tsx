'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Image */}
        <Link href="/" className="relative w-50 h-30 flex items-center">
          <Image 
            src="/logo.png" 
            alt="Altius Logo" 
            fill 
            priority
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-altiusNavy">
          <Link href="/" className="hover:text-altiusBlue transition">Home</Link>
          <Link href="/about" className="hover:text-altiusBlue transition">About Us</Link>
          <Link href="/programs" className="hover:text-altiusBlue transition">Programs</Link>
          <Link href="/blog" className="hover:text-altiusBlue transition">Blog</Link>
          <Link href="/contact" className="hover:text-altiusBlue transition">Contact Us</Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-blue-950 via-altiusNavy to-altiusBlue text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md hover:opacity-95 transition tracking-wider uppercase"
          >
            Enrol Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-altiusNavy focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 px-6 py-6 space-y-4 text-xs font-semibold uppercase tracking-wider text-altiusNavy">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1">About Us</Link>
          <Link href="/programs" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1">Programs</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1">Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-altiusBlue transition py-1">Contact Us</Link>
          <div className="pt-2">
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="block text-center bg-gradient-to-r from-blue-950 via-altiusNavy to-altiusBlue text-white text-xs font-bold py-3 rounded-xl shadow uppercase tracking-wider"
            >
              Enrol Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}