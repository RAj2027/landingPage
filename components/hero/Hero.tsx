import React from "react";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import PropertyCard from "../property/PropertyCard";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Main Hero Section */}
      <section className="relative flex-1 flex flex-col justify-center min-h-[600px] md:h-[800px] 2xl:h-[900px] w-full pt-20">
        {/* Hero Image Container */}
        <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-900">
          <Image
            src="/herobg.avif"
            alt="Luxury Real Estate Hero Background"
            fill
            priority
            className="object-cover object-center opacity-70"
          />
          {/* Subtle overlay for text contrast in skeleton */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="mx-auto flex h-full w-full max-w-[1400px] flex-col justify-center px-6 py-12 lg:px-10 z-10">
          <div className="max-w-3xl flex flex-col items-start gap-6">
            {/* Location Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest text-white">
              <span>📍 Los Angeles, California</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Discover Your Next Luxury Residence
            </h1>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
              <a
                href="#explore"
                className="px-8 py-4 bg-white text-gray-900 font-semibold text-center text-sm hover:bg-gray-100 transition-colors shadow-sm"
              >
                Explore Properties
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-black/40 backdrop-blur-md border border-white/30 text-white font-semibold text-center text-sm hover:bg-black/60 transition-colors"
              >
                Contact an Agent
              </a>
            </div>
          </div>
        </div>

        {/* Floating Property Information Card */}
        {/* 
          Responsive positioning:
          - Mobile (< 810px/md): Relative flow at bottom of hero section
          - Tablet/Desktop (>= md): Absolute positioned at bottom-right
        */}
        <div className="relative md:absolute md:bottom-0 md:right-0 z-20 w-full md:w-[90%] lg:w-[85%] max-w-[1200px]">
          <PropertyCard />
        </div>
      </section>
    </div>
  );
};

export default Hero;
