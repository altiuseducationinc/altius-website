'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-altiusLight text-altiusNavy border-y border-gray-200/60 scroll-mt-28">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block mb-2">
                About Altius Education
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-altiusNavy leading-snug">
                We Don&apos;t Teach Classes.
                <br />
                <span className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 bg-clip-text text-transparent inline-block pb-1">
                  We Build Careers, Year by Year.
                </span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At <strong>ALTIUS EDUCATION INC.</strong>, we believe the best time to start a career
              is childhood — not graduation. The Altius FutureReady™ system gives every student from
              Grade 5 to Grade 12 a structured, escalating path through careers, leadership,
              technology, business, and real-world skills.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Along the way they accumulate an evidence portfolio in their FutureReady Passport —
              projects, presentations, prototypes, and professional experiences — so that when they
              graduate, they don&apos;t just have a certificate. They have proof of what they can do.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/about"
                className="inline-block bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy text-xs font-extrabold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-altiusGold/25 hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 tracking-wider uppercase text-center"
              >
                Learn More About Us &rarr;
              </Link>
              <Link
                href="/programs"
                className="inline-block border-2 border-altiusNavy text-altiusNavy text-xs font-bold px-7 py-3 rounded-xl hover:bg-altiusNavy hover:text-white transition tracking-wider uppercase text-center"
              >
                View the Curriculum
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[450px] w-full rounded-[10px] overflow-hidden shadow-2xl">
              <Image
                src="/bg.webp"
                alt="Altius Campus and Students"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating box with dark blue gradient background */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-gradient-to-br from-blue-950 via-altiusNavy to-blue-900 text-white p-6 rounded-[10px] shadow-xl max-w-xs border border-white/15">
              <p className="font-serif text-altiusGold font-bold text-lg mb-1">Discover → Launch.</p>
              <p className="text-gray-300 text-xs leading-relaxed">
                An 8-year system, 7 competency pillars, and one passport of real-world proof.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}