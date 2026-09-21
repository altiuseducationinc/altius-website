'use client';

import Image from 'next/image';

export default function CurriculumHero() {
  return (
    <section className="relative w-full">
      {/* Base container matching AboutHero dimensions and styling */}
      <div className="relative h-[320px] sm:h-[380px] w-full bg-altiusNavy overflow-hidden">
        <Image
          src="/CurriculumHero.webp"
          alt="Altius Education Curriculum & Resources"
          fill
          priority
          className="object-cover object-center"
        />
        
        {/* Deep Navy Tint & Vertical Gradient Overlay Matching Reference Style */}
        <div className="absolute inset-0 bg-altiusNavy/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-altiusNavy via-altiusNavy/50 to-transparent flex items-end justify-center pb-12">
          <div className="text-center space-y-2 px-6 max-w-4xl mx-auto">
            <span className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 bg-clip-text text-transparent font-bold uppercase tracking-widest text-xs sm:text-sm">
              CAREER • LEADERSHIP • INNOVATION • LIFE SKILLS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white drop-shadow-md">
              Ontario Curriculum &amp; Resources
            </h1>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-light pt-1">
              Official Ontario Ministry of Education curriculum policy documents, grade expectations, parent guides, and course outlines seamlessly integrated into the Altius FutureReady™ learning system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}