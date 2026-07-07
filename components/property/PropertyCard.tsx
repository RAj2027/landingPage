import React from "react";

const PropertyCard: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-t-3xl md:rounded-tl-3xl md:rounded-tr-none md:rounded-b-none shadow-[0_-4px_40px_-8px_rgba(23,32,35,0.12)] px-6 py-4.5 sm:px-8 sm:py-5 lg:px-8 lg:py-4.5">
      {/* 
        Responsive layout:
        - Mobile & Tablet: Grid of items
        - Desktop (lg+): Flex row with dividers
      */}
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4 xl:gap-6">
        {/* Item 1: Residential Properties */}
        <div className="flex flex-col items-center justify-center text-center gap-1.5 flex-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal shrink-0">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="font-sans text-xs font-semibold text-charcoal leading-tight">
            Residential<br />Properties
          </span>
        </div>

        <div className="w-px h-8 bg-gray-200 shrink-0" aria-hidden="true" />

        {/* Item 2: Commercial Spaces */}
        <div className="flex flex-col items-center justify-center text-center gap-1.5 flex-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal shrink-0">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <line x1="9" y1="22" x2="9" y2="16" />
            <line x1="15" y1="22" x2="15" y2="16" />
            <line x1="9" y1="16" x2="15" y2="16" />
            <path d="M8 6h.01" />
            <path d="M16 6h.01" />
            <path d="M8 10h.01" />
            <path d="M16 10h.01" />
          </svg>
          <span className="font-sans text-xs font-semibold text-charcoal leading-tight">
            Commercial<br />Spaces
          </span>
        </div>

        <div className="w-px h-8 bg-gray-200 shrink-0" aria-hidden="true" />

        {/* Item 3: Plots & Land */}
        <div className="flex flex-col items-center justify-center text-center gap-1.5 flex-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal shrink-0">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="font-sans text-xs font-semibold text-charcoal leading-tight">
            Plots &<br />Land
          </span>
        </div>

        <div className="w-px h-8 bg-gray-200 shrink-0" aria-hidden="true" />

        {/* Item 4: Investment Consulting */}
        <div className="flex flex-col items-center justify-center text-center gap-1.5 flex-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal shrink-0">
            <path d="M17.5 19v-2a4 4 0 0 0-4-4h-3a4 4 0 0 0-4 4v2" />
            <circle cx="11" cy="7" r="4" />
            <path d="M22 19v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="font-sans text-xs font-semibold text-charcoal leading-tight">
            Investment<br />Consulting
          </span>
        </div>

        <div className="w-px h-8 bg-gray-200 shrink-0" aria-hidden="true" />

        {/* Item 5: End-to-End Documentation */}
        <div className="flex flex-col items-center justify-center text-center gap-1.5 flex-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal shrink-0">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          <span className="font-sans text-xs font-semibold text-charcoal leading-tight">
            End-to-End<br />Documentation
          </span>
        </div>

        {/* 
          Vertical divider is deliberately omitted here before the final right-side text block
          to match the visual separation specifications.
        */}

        {/* Right Section — We help you buy... */}
        <div className="flex-1 max-w-[200px] xl:max-w-[240px] text-right pl-4">
          <p className="font-sans text-xs xl:text-sm font-semibold text-charcoal leading-snug">
            We help you buy, sell, and invest in properties that truly matter.
          </p>
        </div>
      </div>

      {/* Grid view for Mobile / Tablet (lg:hidden) */}
      <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4">
        {/* Item 1 */}
        <div className="flex flex-col items-center justify-center text-center gap-1.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal shrink-0">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="font-sans text-xs font-semibold text-charcoal leading-tight">
            Residential Properties
          </span>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center justify-center text-center gap-1.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal shrink-0">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <line x1="9" y1="22" x2="9" y2="16" />
            <line x1="15" y1="22" x2="15" y2="16" />
            <line x1="9" y1="16" x2="15" y2="16" />
            <path d="M8 6h.01" />
            <path d="M16 6h.01" />
            <path d="M8 10h.01" />
            <path d="M16 10h.01" />
          </svg>
          <span className="font-sans text-xs font-semibold text-charcoal leading-tight">
            Commercial Spaces
          </span>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center justify-center text-center gap-1.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal shrink-0">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="font-sans text-xs font-semibold text-charcoal leading-tight">
            Plots & Land
          </span>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center justify-center text-center gap-1.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal shrink-0">
            <path d="M17.5 19v-2a4 4 0 0 0-4-4h-3a4 4 0 0 0-4 4v2" />
            <circle cx="11" cy="7" r="4" />
            <path d="M22 19v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="font-sans text-xs font-semibold text-charcoal leading-tight">
            Investment Consulting
          </span>
        </div>

        {/* Item 5 */}
        <div className="flex flex-col items-center justify-center text-center gap-1.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal shrink-0">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          <span className="font-sans text-xs font-semibold text-charcoal leading-tight">
            End-to-End Documentation
          </span>
        </div>

        {/* Right Section (Full Width / Spans Grid on mobile) */}
        <div className="col-span-2 md:col-span-3 border-t border-gray-100 pt-4 mt-2 text-center md:text-right">
          <p className="font-sans text-sm font-semibold text-charcoal leading-snug">
            We help you buy, sell, and invest in properties that truly matter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
