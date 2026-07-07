import React from "react";
import PhoneIconWrapper from "./PhoneIconWrapper";

const ContactInfo: React.FC = () => {
  return (
    <div className="hidden md:flex items-center gap-6 lg:gap-8">
      {/* Phone */}
      <a
        href="tel:+11234567890"
        className="flex items-center gap-2 font-sans text-sm font-medium text-charcoal/80 hover:text-mint transition-colors duration-200 group"
        aria-label="Call us"
      >
        <PhoneIconWrapper type="phone" size="sm" />
        <span className="tracking-tight">+1 (123) 456-7890</span>
      </a>

      {/* Email */}
      <a
        href="mailto:hello@homelly.com"
        className="flex items-center gap-2 font-sans text-sm font-medium text-charcoal/80 hover:text-mint transition-colors duration-200 group"
        aria-label="Email us"
      >
        <PhoneIconWrapper type="email" size="sm" />
        <span className="tracking-tight">hello@homelly.com</span>
      </a>
    </div>
  );
};

export default ContactInfo;
