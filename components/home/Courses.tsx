'use client';

const programs = [
  {
    title: "Academic Tutoring",
    desc: "Tutoring and academic support to help students build confidence and strengthen their understanding of important subjects like Math, Science, English, and more.",
    tab: "academic-tutoring",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Language Programs",
    desc: "Language learning programs in English, French, and Punjabi focused on developing critical skills such as speaking, listening, reading, and writing.",
    tab: "language-programs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    title: "TCF & TEF Preparation",
    desc: "Targeted preparation programs for French language examinations like TCF and TEF to build confidence, test format familiarity, and communication skills.",
    tab: "tcf-tef-preparation",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Music Programs",
    desc: "Programs that help students develop creativity, confidence, discipline, and performance skills while exploring rhythm and musical concepts.",
    tab: "music-programs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    title: "Co-op & Career-Focused Programs",
    desc: "Connecting learning with real-world skills, practical learning experiences, and career exploration across multiple industries.",
    tab: "coop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "CNC Programming",
    desc: "Introducing students to concepts related to CNC technology, computer-aided manufacturing, machine operations, and technical design.",
    tab: "cnc",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "3D Printing & Technology",
    desc: "Hands-on technology programs covering 3D design, printing, robotics, artificial intelligence concepts, and creative problem-solving.",
    tab: "3d-printing",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Welding & Skilled Trades",
    desc: "Career-focused foundational learning introducing students to welding concepts, safety awareness, workplace skills, and skilled trades awareness.",
    tab: "welding",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function SpecialtyPrograms() {
  return (
    <section className="py-24 px-6 bg-altiusLight text-altiusNavy overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">

        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
            Beyond the System
          </span>
          <h2 className="font-serif text-3xl sm:text-[44px] font-bold text-altiusNavy leading-normal">
            Specialty Programs
          </h2>
          <p className="text-gray-600 text-[15px]">
            Deep-dive offerings that complement the FutureReady™ journey — for students who
            want to go further in a specific skill, language, or craft.
          </p>
        </div>

      </div>

      <div className="w-full overflow-hidden relative flex py-4 mt-8">
        <div className="flex gap-6 shrink-0 animate-marquee hover:[animation-play-state:paused]">
          {[...programs, ...programs].map((program, index) => (
            <div
              key={index}
              style={{ borderRadius: '10px', width: '320px' }}
              className="bg-white p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between space-y-6 shrink-0"
            >
              <div className="space-y-4">
                {/* Fully rounded circle with dark blue gradient background */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-950 via-altiusNavy to-blue-900 text-altiusGold flex items-center justify-center shadow-sm">
                  {program.icon}
                </div>
                {/* Heading text with a lighter shade of blue */}
                <h3 className="font-serif font-bold text-lg text-blue-900 leading-snug">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {program.desc}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`/programs?tab=${program.tab}#specialty-programs`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-altiusBlue hover:underline"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}