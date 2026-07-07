import React from "react";

const PropertyCard: React.FC = () => {
  return (
    <div className="w-full lg:w-auto bg-white/90 backdrop-blur-md p-6 sm:p-8 border border-gray-200 shadow-sm">
      {/* 
        Responsive layout: 
        - Mobile (< 810px/md): 2x2 Grid (grid-cols-1 sm:grid-cols-2 gap-6)
        - Tablet/Desktop (>= md): Horizontal Flex Row (flex-row gap-8 lg:gap-[50px])
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row md:items-center justify-between gap-6 md:gap-8 lg:gap-[50px]">
        {/* Item 1: Property Title & Location */}
        <div className="flex flex-col">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Featured Property
          </span>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-1">
            Skyline Penthouse
          </h3>
          <p className="text-sm text-gray-600">Beverly Hills, CA</p>
        </div>

        {/* Item 2: Price */}
        <div className="flex flex-col sm:border-l sm:border-gray-200 sm:pl-6 md:border-l-0 md:pl-0">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Price
          </span>
          <span className="text-base sm:text-lg font-semibold text-gray-900 mt-1">
            $3,850,000
          </span>
          <span className="text-sm text-gray-600">Est. $14,200/mo</span>
        </div>

        {/* Item 3: Specs */}
        <div className="flex flex-col sm:border-t sm:border-gray-200 sm:pt-6 md:border-t-0 md:pt-0">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Specifications
          </span>
          <span className="text-base sm:text-lg font-semibold text-gray-900 mt-1">
            4 Beds • 4.5 Baths
          </span>
          <span className="text-sm text-gray-600">4,200 sq. ft.</span>
        </div>

        {/* Item 4: CTA / Action */}
        <div className="flex items-center sm:border-t sm:border-l sm:border-gray-200 sm:pt-6 sm:pl-6 md:border-t-0 md:border-l-0 md:pt-0 md:pl-0">
          <a
            href="#view-property"
            className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <span>View Details</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
