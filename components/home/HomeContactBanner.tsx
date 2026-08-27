'use client';

import Link from 'next/link';

export default function HomeContactBanner() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-950 via-altiusNavy to-blue-900 text-white rounded-[10px] p-10 md:p-14 text-center shadow-xl relative overflow-hidden flex flex-col items-center">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-altiusGold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            FutureReady™ Admissions Desk
          </div>

          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-3">
            Give Your Child an 8-Year Head Start on Their Career
          </h2>

          <p className="text-gray-300 text-xs md:text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Book a consultation and see which grade stage your child should join this year.
            Our admissions team is available Mon–Sat (9 AM to 8 PM).
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 hover:bg-yellow-500 text-altiusNavy text-xs md:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-[10px] shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Reserve Your Child&apos;s Seat
          </Link>

        </div>
      </div>
    </section>
  );
}