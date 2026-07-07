import React from "react";
import Surface from "../ui/Surface";
import PropertyFeatureItem from "./PropertyFeatureItem";
import VerticalDivider from "./VerticalDivider";
import Button from "../ui/button/Button";

const PropertyCard: React.FC = () => {
  return (
    <Surface
      variant="glass"
      padding="md"
      className="w-full lg:w-auto !p-6 sm:!p-8"
    >
      {/* 
        Responsive layout: 
        - Mobile (< 810px/md): 2x2 Grid (grid-cols-1 sm:grid-cols-2 gap-6)
        - Tablet/Desktop (>= md): Horizontal Flex Row (flex-row gap-6 md:gap-8 lg:gap-[40px])
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row md:items-center justify-between gap-6 md:gap-8 lg:gap-[40px]">
        {/* Item 1: Property Title & Location */}
        <PropertyFeatureItem
          label="Featured Property"
          value="Skyline Penthouse"
          subtext="Beverly Hills, CA"
          valueSize="lg"
        />

        <VerticalDivider className="hidden md:block" />

        {/* Item 2: Price */}
        <PropertyFeatureItem
          label="Price"
          value="$3,850,000"
          subtext="Est. $14,200/mo"
          valueSize="lg"
          highlight
        />

        <VerticalDivider className="hidden md:block" />

        {/* Item 3: Specs */}
        <PropertyFeatureItem
          label="Specifications"
          value="4 Beds • 4.5 Baths"
          subtext="4,200 sq. ft."
          valueSize="lg"
        />

        <VerticalDivider className="hidden md:block" />

        {/* Item 4: CTA / Action */}
        <div className="flex items-center sm:border-t sm:border-l sm:border-gray-200 sm:pt-6 sm:pl-6 md:border-t-0 md:border-l-0 md:pt-0 md:pl-0">
          <Button
            variant="primary"
            size="md"
            href="#view-property"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            }
          >
            View Details
          </Button>
        </div>
      </div>
    </Surface>
  );
};

export default PropertyCard;
