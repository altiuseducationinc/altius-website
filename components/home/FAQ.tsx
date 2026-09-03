'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Is this just another tutoring or classes program?",
    answer:
      "No. FutureReady™ is a structured 8-year system (Grades 5–12). Tutoring teaches subjects; FutureReady builds careers — students accumulate real evidence across leadership, technology, business, finance, and career readiness in their Passport each year.",
  },
  {
    question: "How does the Altius FutureReady Passport work?",
    answer:
      "Every year students collect proof of growth across seven competency pillars — communication, leadership, technology, innovation, business, financial literacy, and career readiness. By Grade 12 they graduate with a portfolio showing the projects, presentations, prototypes, and professional experiences they actually completed.",
  },
  {
    question: "Which grade should my child join?",
    answer:
      "The system is designed to begin in Grade 5, but students can join at any grade. Each year's stage (Discover, Explore, Create, Develop, Experience, Specialize, Apply, Launch) builds on the previous one, so older students enter at their current stage.",
  },
  {
    question: "What happens in Grade 10 when students choose a pathway?",
    answer:
      "Grade 10 students pick one of five career pathways — Engineering & Technology, Business & Entrepreneurship, Education & Leadership, Digital Media, or Manufacturing & Skilled Trades — and complete a full career portfolio including a resume, career plan, and mock interview.",
  },
  {
    question: "Can students still take specialty programs like music or languages?",
    answer:
      "Yes. Specialty programs — academic tutoring, languages, TCF/TEF prep, music, CNC, 3D printing, and welding — run alongside the FutureReady journey for students who want to go deeper in a specific skill.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white text-altiusNavy">
      <div className="max-w-4xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block mb-2">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-altiusNavy leading-normal">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="font-serif font-bold text-base sm:text-lg text-altiusNavy">
                  {faq.question}
                </span>

                <span className="text-altiusNavy ml-4 shrink-0">
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <div className="mt-3 pr-8">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}