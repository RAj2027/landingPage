import React from "react";
import Navbar from "../navbar/Navbar";
import PropertyCard from "../property/PropertyCard";
import TextRoll from "../animations/TextRoll";

const Hero: React.FC = () => {
  return (
    <section 
      className="relative w-full min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/heroBg.avif')" }}
    >
      {/* ─── Floating Navbar ─── */}
      <Navbar />

      {/* ─── Hero Content Area ─── */}
      <div className="relative flex-1 flex flex-col justify-between pt-10 sm:pt-14 md:pt-18">
        {/* ─── Left Content Block ─── */}
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10 flex-1 flex items-center">
          <div className="flex flex-col items-start gap-4 sm:gap-4 max-w-2xl py-12 sm:py-16 md:py-0 -translate-y-2 sm:-translate-y-4 md:-translate-y-6 lg:-translate-y-8 transition-transform duration-200">
            {/* Location Label (Eyebrow text) */}
            <p className="font-accent text-sm sm:text-base font-semibold italic text-white/90 tracking-wide">
              Your Trusted Real Estate Partner
            </p>

            {/* Large Hero Heading */}
            <h1 className="font-display text-[52px] sm:text-[64px] md:text-[72px] lg:text-[88px] font-bold text-white leading-[1.02] tracking-tight">
              <TextRoll center={true}>Connecting</TextRoll>
              <br />
              <TextRoll center={true}>Vision</TextRoll>{" "}
              <TextRoll center={true}>with</TextRoll>
              <br />
              <TextRoll center={true}>Reality</TextRoll>
            </h1>

            {/* Supporting Description Paragraph */}
            <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed text-white/85 max-w-lg">
              Discover premium properties, expert guidance, and seamless real estate solutions tailored for you.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Primary Button — white fill, charcoal text, pill */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white border border-transparent text-charcoal font-sans text-sm font-semibold rounded-full shadow-sm hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300 ease-in-out select-none"
              >
                Get in touch
              </a>

              {/* Secondary Button — transparent, white border, white text, pill */}
              <a
                href="#details"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border border-white/70 text-white font-sans text-sm font-semibold rounded-full hover:bg-white hover:text-charcoal hover:border-white transition-all duration-300 ease-in-out select-none"
              >
                Explore Properties
              </a>
            </div>
          </div>
        </div>

        {/* ─── Floating Bottom Property Card ─── */}
        {/* 
          Aligned to the right edge of the Hero section, flush with the right viewport boundary.
          Leaves exactly 27vw empty space on the left (w-[73vw]) on desktop/tablet.
        */}
        <div className="relative md:absolute md:bottom-0 md:right-0 z-20 w-full md:w-[73vw]">
          <PropertyCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
