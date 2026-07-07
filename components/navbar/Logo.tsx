import React from "react";
import IconWrapper from "../ui/IconWrapper";

const Logo: React.FC = () => {
  return (
    <a
      href="/"
      className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 rounded-sm"
      aria-label="Homelly Home"
    >
      <IconWrapper
        variant="charcoal"
        size="md"
        rounded="sm"
        className="group-hover:bg-mint transition-colors duration-200"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </IconWrapper>
      <span className="font-display text-xl font-bold tracking-tight text-charcoal group-hover:text-mint transition-colors duration-200">
        Homelly
      </span>
    </a>
  );
};

export default Logo;
