// 'use client';

// import { useState, useEffect } from 'react';

// const testimonials = [
//   {
//     quote:
//       "Our daughter started in Grade 5 not knowing what she wanted to be. Five years into the FutureReady system, she presented her own business prototype to a panel of parents. I've never seen her this confident.",
//     name: "Parent of a Grade 10 Student",
//     role: "FutureReady™ Journey, Years 1–5",
//   },
//   {
//     quote:
//       "The difference between a tuition class and FutureReady is the portfolio. My son walked out of Grade 12 with a resume, a capstone project, and real interview practice — not just marks on a report card.",
//     name: "Parent of a Grade 12 Graduate",
//     role: "FutureReady™ Capstone Cohort",
//   },
//   {
//     quote:
//       "They don't teach you to memorize; they teach you to build. I designed a product in Grade 7, learned CAD in Grade 8, and by Grade 10 I had chosen my engineering pathway for real.",
//     name: "Rohan Verma",
//     role: "Grade 10 — Engineering & Technology Pathway",
//   },
// ];

// export default function TestimonialsFAQ() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (isPaused) return;

//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [isPaused]);

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const current = testimonials[currentIndex];

//   return (
//     <section
//       className="py-24 px-6 bg-altiusNavy text-white relative overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <div className="max-w-4xl mx-auto relative">

//         <button
//           onClick={prevTestimonial}
//           className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-altiusBlue transition shadow-sm z-20 text-lg"
//           aria-label="Previous Testimonial"
//         >
//           ‹
//         </button>

//         <button
//           onClick={nextTestimonial}
//           className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-altiusBlue transition shadow-sm z-20 text-lg"
//           aria-label="Next Testimonial"
//         >
//           ›
//         </button>

//         <div className="text-center px-6 md:px-12 transition-all duration-700">

//           <div className="flex justify-center mb-6">
//             <svg className="w-8 h-8 text-altiusGold fill-current opacity-80" viewBox="0 0 24 24">
//               <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.998v10h-9.998z"/>
//             </svg>
//           </div>

//           <p className="font-serif text-lg md:text-2xl text-white italic leading-relaxed mb-8 max-w-3xl mx-auto">
//             &ldquo;{current.quote}&rdquo;
//           </p>

//           <div className="space-y-1">
//             <h4 className="font-bold text-altiusGold text-sm uppercase tracking-wider">
//               {current.name}
//             </h4>
//             <p className="text-gray-300 text-xs font-medium">
//               {current.role}
//             </p>
//           </div>

//           <div className="flex justify-center items-center gap-2 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6 bg-altiusGold' : 'w-2 bg-white/30'}`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }



'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote:
      "Our daughter started in Grade 5 not knowing what she wanted to be. Five years into the FutureReady system, she presented her own business prototype to a panel of parents. I've never seen her this confident.",
    name: "Parent of a Grade 10 Student",
    role: "FutureReady™ Journey, Years 1–5",
  },
  {
    quote:
      "The difference between a tuition class and FutureReady is the portfolio. My son walked out of Grade 12 with a resume, a capstone project, and real interview practice — not just marks on a report card.",
    name: "Parent of a Grade 12 Graduate",
    role: "FutureReady™ Capstone Cohort",
  },
  {
    quote:
      "They don't teach you to memorize; they teach you to build. I designed a product in Grade 7, learned CAD in Grade 8, and by Grade 10 I had chosen my engineering pathway for real.",
    name: "Rohan Verma",
    role: "Grade 10 — Engineering & Technology Pathway",
  },
];

export default function TestimonialsFAQ() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      className="relative py-28 px-6 bg-altiusNavy text-white overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/bg1.png')" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Lighter navy gradient overlays with increased transparency to showcase the parallax background image */}
      <div className="absolute inset-0 bg-altiusNavy/60 mix-blend-multiply z-0" />
      <div className="absolute inset-0 bg-altiusNavy/50 z-0" />

      <div className="max-w-4xl mx-auto relative z-10">

        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-altiusBlue transition shadow-sm z-20 text-lg"
          aria-label="Previous Testimonial"
        >
          ‹
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-altiusBlue transition shadow-sm z-20 text-lg"
          aria-label="Next Testimonial"
        >
          ›
        </button>

        <div className="text-center px-6 md:px-12 transition-all duration-700">

          <div className="flex justify-center mb-6">
            <svg className="w-8 h-8 text-altiusGold fill-current opacity-80" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.998v10h-9.998z"/>
            </svg>
          </div>

          <p className="font-serif text-lg md:text-2xl text-white italic leading-relaxed mb-8 max-w-3xl mx-auto drop-shadow-sm">
            &ldquo;{current.quote}&rdquo;
          </p>

          <div className="space-y-1">
            <h4 className="font-bold text-altiusGold text-sm uppercase tracking-wider">
              {current.name}
            </h4>
            <p className="text-gray-200 text-xs font-medium">
              {current.role}
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6 bg-altiusGold' : 'w-2 bg-white/30'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}