'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSlide {
  id: string;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'futureready',
    badge: 'Grades 5–12 • Career • Leadership • Innovation • Life Skills',
    titleLine1: 'One System. Eight Years.',
    titleLine2: 'A Career-Ready Graduate.',
    description:
      'Altius FutureReady™ is not another tutoring program — it is a structured 8-year journey that takes a child from career discovery in Grade 5 to complete career readiness in Grade 12, building an evidence portfolio along the way.',
    primaryBtnText: 'Explore the 8-Year Journey',
    primaryBtnLink: '/#journey',
    secondaryBtnText: 'Enrol for 2026–27',
    secondaryBtnLink: '/contact',
  },
  {
    id: 'tutoring',
    badge: 'Grades K–12 • Core Subject Mastery & Confidence',
    titleLine1: 'Academic Tutoring.',
    titleLine2: 'Excel in Math, Science & English.',
    description:
      'Personalized tutoring and academic support designed to help students master core fundamentals, overcome learning hurdles, and build confidence in essential school subjects.',
    primaryBtnText: 'Explore Academic Tutoring',
    primaryBtnLink: '/programs?tab=academic-tutoring#specialty-programs',
    secondaryBtnText: 'Enrol for 2026–27',
    secondaryBtnLink: '/contact',
  },
  {
    id: 'languages',
    badge: 'Global Communication & Fluency',
    titleLine1: 'Language Mastery.',
    titleLine2: 'English, French & Punjabi.',
    description:
      'Comprehensive language learning programs focused on developing critical speaking, listening, reading, and writing skills for academic excellence and global opportunity.',
    primaryBtnText: 'Explore Language Programs',
    primaryBtnLink: '/programs?tab=language-programs#specialty-programs',
    secondaryBtnText: 'Enrol for 2026–27',
    secondaryBtnLink: '/contact',
  },
  {
    id: 'tcf-tef',
    badge: 'French Language Examination Mastery',
    titleLine1: 'TCF & TEF Exam Prep.',
    titleLine2: 'Achieve CLB 7+ For Canada.',
    description:
      'Targeted preparation with structured practice, test simulation, and dedicated coaching to help candidates master the French language test format and achieve top immigration scores.',
    primaryBtnText: 'Explore TCF & TEF Prep',
    primaryBtnLink: '/programs?tab=tcf-tef#specialty-programs',
    secondaryBtnText: 'Enrol for 2026–27',
    secondaryBtnLink: '/contact',
  },
  {
    id: 'music',
    badge: 'Creativity, Discipline & Performance',
    titleLine1: 'Music Education.',
    titleLine2: 'Harmonium, Tabla & Vocals.',
    description:
      'Develop musical talent, rhythm, discipline, and performance confidence through structured training in classical harmonium, tabla, and vocal arts in an inspiring environment.',
    primaryBtnText: 'Explore Music Programs',
    primaryBtnLink: '/programs?tab=music#specialty-programs',
    secondaryBtnText: 'Enrol for 2026–27',
    secondaryBtnLink: '/contact',
  },
  {
    id: 'coop',
    badge: 'Real-World Skills & Practical Experience',
    titleLine1: 'Career-Focused Learning.',
    titleLine2: 'Hands-On Co-op & Real Experience.',
    description:
      'Connecting classroom learning with real-world skills, practical industry exposure, and career exploration to give high school students a decisive head start.',
    primaryBtnText: 'Explore Co-op Programs',
    primaryBtnLink: '/programs?tab=coop#specialty-programs',
    secondaryBtnText: 'Enrol for 2026–27',
    secondaryBtnLink: '/contact',
  },
  {
    id: 'cnc',
    badge: 'Advanced Manufacturing & Industrial Technology',
    titleLine1: 'CNC Programming.',
    titleLine2: 'High-Precision Modern Manufacturing.',
    description:
      'Hands-on training in computer numerical control (CNC), machine tool operations, CAD/CAM fundamentals, and technical design for high-demand industrial careers.',
    primaryBtnText: 'Explore CNC Programming',
    primaryBtnLink: '/programs?tab=cnc#specialty-programs',
    secondaryBtnText: 'Enrol for 2026–27',
    secondaryBtnLink: '/contact',
  },
  {
    id: '3d-printing',
    badge: 'Innovation, Design & Robotics',
    titleLine1: '3D Printing & Technology.',
    titleLine2: 'Design, Prototype & Innovate.',
    description:
      'Hands-on technology education covering 3D CAD modeling, rapid additive prototyping, robotics, and creative problem-solving to turn concepts into real functional models.',
    primaryBtnText: 'Explore 3D Printing & Tech',
    primaryBtnLink: '/programs?tab=3d-printing#specialty-programs',
    secondaryBtnText: 'Enrol for 2026–27',
    secondaryBtnLink: '/contact',
  },
  {
    id: 'welding',
    badge: 'Foundational Craft & Safety Awareness',
    titleLine1: 'Welding & Skilled Trades.',
    titleLine2: 'High-Growth Hands-On Careers.',
    description:
      'Practical foundational learning introducing students to welding techniques, workplace safety awareness, and essential trade skills for rewarding future careers.',
    primaryBtnText: 'Explore Skilled Trades',
    primaryBtnLink: '/programs?tab=welding#specialty-programs',
    secondaryBtnText: 'Enrol for 2026–27',
    secondaryBtnLink: '/contact',
  },
];

const AUTOPLAY_INTERVAL = 6000; // 6 seconds per slide

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
    setAnimKey((prev) => prev + 1);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  const current = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full min-h-screen lg:min-h-[720px] flex items-center overflow-hidden bg-altiusNavy pt-24 pb-14 sm:pt-28 sm:pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Altius Education Programs Carousel"
    >
      {/* Background Image with optimized overlays */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/bg1.png"
          alt="Altius FutureReady campus background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Left-to-right gradient overlay: solid/dark on the left, fading smoothly */}
        <div className="absolute inset-0 bg-gradient-to-r from-altiusNavy via-altiusNavy/95 sm:via-altiusNavy/90 to-altiusNavy/60 sm:to-transparent mix-blend-multiply" />

        {/* Secondary color blend layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-altiusNavy/85 via-altiusNavy/50 to-transparent mix-blend-color" />
        
        {/* Subtle radial ambient glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-altiusGold/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-white">
        <div className="max-w-2xl space-y-6">

          {/* Dynamic Content Container with Animated Key */}
          <div
            key={animKey}
            className="space-y-5 animate-hero-fade min-h-[280px] sm:min-h-[290px] flex flex-col justify-between"
          >
            {/* Program Badge */}
            <div>
              <span className="inline-flex items-center gap-2 bg-altiusGold/15 border border-altiusGold/40 text-altiusGold px-3.5 py-1.2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-xs">
                <span className="w-2 h-2 rounded-full bg-altiusGold animate-pulse" />
                {current.badge}
              </span>
            </div>

            {/* Dynamic Headlines */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] tracking-tight">
              {current.titleLine1}
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-altiusGold to-yellow-300 bg-clip-text text-transparent drop-shadow-sm">
                {current.titleLine2}
              </span>
            </h1>

            {/* Dynamic Program Description */}
            <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-light">
              {current.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href={current.primaryBtnLink}
                className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy text-[11px] sm:text-xs font-extrabold px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg hover:shadow-altiusGold/30 hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 tracking-wider uppercase text-center flex items-center justify-center gap-2 group shrink-0"
              >
                <span>{current.primaryBtnText}</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link
                href={current.secondaryBtnLink}
                className="border-2 border-white/80 text-white text-[11px] sm:text-xs font-bold px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl hover:bg-white hover:text-altiusNavy transition-all duration-300 tracking-wider uppercase text-center backdrop-blur-xs shrink-0"
              >
                {current.secondaryBtnText}
              </Link>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15">
            {/* Previous / Next Controls and Counter */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full border border-white/25 bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="text-xs font-mono font-semibold tracking-wider text-gray-300">
                <span className="text-altiusGold font-bold">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-gray-400"> / {String(HERO_SLIDES.length).padStart(2, '0')}</span>
              </div>

              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full border border-white/25 bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Student Proof Badges */}
            <div className="flex items-center gap-3.5">
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="relative inline-block h-8 w-8 rounded-full ring-2 ring-altiusNavy overflow-hidden bg-gray-200">
                  <Image src="/student1.jpg" alt="Altius student 1" fill className="object-cover" />
                </div>
                <div className="relative inline-block h-8 w-8 rounded-full ring-2 ring-altiusNavy overflow-hidden bg-gray-200">
                  <Image src="/student2.jpg" alt="Altius student 2" fill className="object-cover" />
                </div>
                <div className="relative inline-block h-8 w-8 rounded-full ring-2 ring-altiusNavy overflow-hidden bg-gray-200">
                  <Image src="/student3.jpg" alt="Altius student 3" fill className="object-cover" />
                </div>
                <div className="relative inline-block h-8 w-8 rounded-full ring-2 ring-altiusNavy overflow-hidden bg-gray-200">
                  <Image src="/student4.jpg" alt="Altius student 4" fill className="object-cover" />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">Every grade. One destination.</p>
                <p className="text-[11px] text-gray-300">Reserve a seat for 2026–27</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes heroFade {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-hero-fade {
          animation: heroFade 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}