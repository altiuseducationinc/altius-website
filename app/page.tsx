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

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
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