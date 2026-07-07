import React from "react";
import Navbar from "../navbar/Navbar";
import PropertyCard from "../property/PropertyCard";

const Hero: React.FC = () => {
  return (
    <section 
      className="relative w-full min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/heroBg.avif')" }}
    >
      {/* ─── Floating Navbar ─── */}
      <Navbar />

      {/* ─── Hero Content Area ─── */}
      <div className="flex-1 flex flex-col justify-between pt-24 sm:pt-28 md:pt-32">
        {/* ─── Left Content Block ─── */}
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10 flex-1 flex items-center">
          <div className="flex flex-col items-start gap-6 sm:gap-8 max-w-2xl py-12 sm:py-16 md:py-0">
            {/* Location Label */}
            <p className="font-accent text-sm sm:text-base font-semibold italic text-white/90 tracking-wide">
              Palm Springs, CA
            </p>

            {/* Large Hero Heading */}
            <h1 className="font-display text-[52px] sm:text-[64px] md:text-[72px] lg:text-[88px] font-bold text-white leading-[1.02] tracking-tight">
              Futuristic
              <br />
              Haven
            </h1>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mt-1">
              {/* Primary Button — white fill, charcoal text, pill */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-charcoal font-sans text-sm font-semibold rounded-full shadow-sm hover:bg-gray-50 transition-colors duration-200 select-none"
              >
                Get in touch
              </a>

              {/* Secondary Button — transparent, white border, white text, pill */}
              <a
                href="#details"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border border-white/40 text-white font-sans text-sm font-semibold rounded-full hover:bg-white/10 transition-colors duration-200 select-none"
              >
                View Details
              </a>
            </div>
          </div>
        </div>

        {/* ─── Floating Bottom Property Card ─── */}
        <div className="relative z-10 w-full">
          <div className="mx-auto w-full max-w-[1400px] px-0 md:px-6 lg:px-10">
            <PropertyCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
