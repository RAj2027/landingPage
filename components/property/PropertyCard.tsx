import React from "react";

const PropertyCard: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-t-2xl md:rounded-2xl shadow-[0_-4px_40px_-8px_rgba(23,32,35,0.12)] px-6 py-6 sm:px-8 sm:py-7 md:px-10 md:py-8">
      <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-0 md:justify-between">
        {/* Feature Item 1: Bedrooms */}
        <div className="flex items-center gap-3.5 md:flex-1 md:justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cream/60 flex items-center justify-center shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 4v16" />
              <path d="M22 4v16" />
              <path d="M2 8h20" />
              <path d="M2 16h20" />
              <path d="M2 12h8" />
              <path d="M14 12h8" />
              <rect x="6" y="8" width="4" height="4" rx="1" />
              <rect x="14" y="8" width="4" height="4" rx="1" />
            </svg>
          </div>
          <span className="font-sans text-sm font-medium text-charcoal/80">Bedrooms</span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-200/80 shrink-0" aria-hidden="true" />

        {/* Feature Item 2: Swingpool */}
        <div className="flex items-center gap-3.5 md:flex-1 md:justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cream/60 flex items-center justify-center shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h20" />
              <path d="M2 16c1.5-1 3-2 4-2s2.5 1 4 2 3 2 4 2 2.5-1 4-2" />
              <path d="M2 20c1.5-1 3-2 4-2s2.5 1 4 2 3 2 4 2 2.5-1 4-2" />
              <path d="M9 12V8a3 3 0 0 1 6 0v4" />
              <line x1="6" y1="12" x2="6" y2="8" />
            </svg>
          </div>
          <span className="font-sans text-sm font-medium text-charcoal/80">Swingpool</span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-200/80 shrink-0" aria-hidden="true" />

        {/* Feature Item 3: Parking Space */}
        <div className="flex items-center gap-3.5 md:flex-1 md:justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cream/60 flex items-center justify-center shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12" />
              <path d="M1 21h22" />
              <path d="M9 7V3h6v4" />
              <rect x="6" y="13" width="4" height="4" rx="0.5" />
              <rect x="14" y="13" width="4" height="4" rx="0.5" />
            </svg>
          </div>
          <span className="font-sans text-sm font-medium text-charcoal/80">Parking Space</span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-200/80 shrink-0" aria-hidden="true" />

        {/* Selling Price */}
        <div className="flex flex-col md:flex-1 md:items-center">
          <span className="font-display text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight text-charcoal leading-none">
            $ 4,750,000
          </span>
          <span className="text-xs sm:text-sm text-slate font-sans mt-1">
            For selling price
          </span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px h-10 bg-gray-200/80 shrink-0" aria-hidden="true" />

        {/* Made in Framer Badge */}
        <div className="hidden lg:flex items-center gap-2 px-4 py-2.5 bg-cream/50 rounded-full border border-gray-200/60">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#172023">
            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
          </svg>
          <span className="font-sans text-sm font-semibold text-charcoal tracking-tight">
            Made in Framer
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
