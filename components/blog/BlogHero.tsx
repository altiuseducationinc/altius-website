'use client';

import Image from 'next/image';

export default function BlogHero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[300px] sm:h-[380px] w-full bg-altiusNavy">
        <Image
          src="/bg1.webp"
          alt="Altius FutureReady Blog & Insights"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-altiusNavy/90 via-altiusNavy/40 to-transparent flex items-end justify-center pb-12">
          <div className="text-center space-y-2 px-6">
            <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">
              Career Readiness • Leadership • Innovation
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
              FutureReady Insights
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed pt-1">
              Ideas and guidance for parents helping their child build a future-ready career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}