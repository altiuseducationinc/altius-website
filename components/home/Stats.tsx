'use client';

import { useState, useEffect, useRef } from 'react';

const statsData = [
  {
    value: 8,
    suffix: '',
    label: 'Grades of Progression',
    icon: (
      <svg className="w-8 h-8 text-altiusNavy shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    value: 8,
    suffix: '',
    label: 'Signature Stages',
    icon: (
      <svg className="w-8 h-8 text-altiusNavy shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    value: 7,
    suffix: '',
    label: 'Competency Pillars',
    icon: (
      <svg className="w-8 h-8 text-altiusNavy shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3l1.912 5.813a2 2 0 001.272 1.272L21 12l-5.816 1.915a2 2 0 00-1.272 1.272L12 21l-1.912-5.813a2 2 0 00-1.272-1.272L3 12l5.816-1.915a2 2 0 001.272-1.272L12 3z" />
      </svg>
    ),
  },
  {
    value: 5,
    suffix: '',
    label: 'Career Pathways',
    icon: (
      <svg className="w-8 h-8 text-altiusNavy shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 21h18M3 21h0M7 10V7a2 2 0 012-2h6a2 2 0 012 2v3" />
      </svg>
    ),
  },
  {
    value: 1,
    suffix: '',
    label: 'FutureReady Passport',
    icon: (
      <svg className="w-8 h-8 text-altiusNavy shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2zM8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
  },
];

export default function Stats() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  return (
    <section ref={ref} className="py-8 px-6 bg-gradient-to-r from-yellow-400 via-altiusGold to-amber-500 text-altiusNavy border-y border-altiusNavy/15 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 items-center justify-items-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 justify-start w-full max-w-[220px] ${
                index !== statsData.length - 1 ? 'md:border-r md:border-altiusNavy/25' : ''
              } md:pr-4`}
            >
              <div className="shrink-0">{stat.icon}</div>
              <div>
                <h3 className="font-serif text-2xl lg:text-[40px] font-extrabold bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 bg-clip-text text-transparent tracking-wide">
                  {inView ? <Counter target={stat.value} /> : 0}
                  {stat.suffix}
                </h3>
                <p className="text-altiusNavy font-bold text-[11px] tracking-tight uppercase">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 1200;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOut * target));
      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [target]);

  return <>{count.toLocaleString()}</>;
}