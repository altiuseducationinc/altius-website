import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import Passport from "@/components/home/Passport";
import Stats from "@/components/home/Stats";
import Courses from "@/components/home/Courses";
import About from "@/components/home/About";
import TestimonialsFAQ from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import HomeContactBanner from "@/components/home/HomeContactBanner";
import BrandBanner from "@/components/BrandBanner";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this just another tutoring or classes program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Altius FutureReady™ is a structured 8-year system (Grades 5–12) in Brampton, Ontario. Tutoring teaches subjects; FutureReady builds careers — students accumulate real evidence across leadership, technology, business, finance, and career readiness in their Passport each year.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Altius FutureReady Passport work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every year students collect proof of growth across seven competency pillars — communication, leadership, technology, innovation, business, financial literacy, and career readiness. By Grade 12 they graduate with a portfolio showing the projects, presentations, prototypes, and professional experiences they completed.",
      },
    },
    {
      "@type": "Question",
      name: "Which grade should my child join?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The system is designed to begin in Grade 5, but students can join at any grade. Each year's stage (Discover, Explore, Create, Develop, Experience, Specialize, Apply, Launch) builds on the previous one, so older students enter at their current stage.",
      },
    },
    {
      "@type": "Question",
      name: "What happens in Grade 10 when students choose a pathway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade 10 students pick one of five career pathways — Engineering & Technology, Business & Entrepreneurship, Education & Leadership, Digital Media, or Manufacturing & Skilled Trades — and complete a full career portfolio including a resume, career plan, and mock interview.",
      },
    },
    {
      "@type": "Question",
      name: "Can students still take specialty programs like music or languages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Specialty programs — academic tutoring, languages, TCF/TEF prep, music, CNC, 3D printing, and welding — run alongside the FutureReady journey for students who want to go deeper in a specific skill.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Altius Education located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Altius Education is at 6 Dewside Dr, Unit 18, Brampton, Ontario, L6R 3Y3, Canada. Call or WhatsApp (905) 781-5450, Monday to Saturday 9 AM – 8 PM EST.",
      },
    },
  ],
};

const offerCatalogLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}/#offers`,
  name: "Altius Education Brampton – Programs & Classes",
  url: `${SITE_URL}/programs`,
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Academic Tutoring in Math, Science & English" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "French TCF/TEF Exam Preparation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Language Classes – English, French, Punjabi" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Music Education – Harmonium, Tabla, Vocals" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Printing & Technology – CAD, Robotics" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "CNC Programming & Advanced Manufacturing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Welding & Skilled Trades" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Co-op & Career Connections" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Altius FutureReady™ 8-Year Career Program (Grades 5–12)" } },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <JsonLd data={faqLd} />
      <JsonLd data={offerCatalogLd} />
      <div>
        <Navbar />
        <Hero />        
        <Courses />
        <Stats />
        <Journey />
        <Passport />
        <About />
        <TestimonialsFAQ />
        <FAQ />
        <HomeContactBanner />
      </div>
      <Footer />
      {/* <BrandBanner /> */}
    </main>
  );
}