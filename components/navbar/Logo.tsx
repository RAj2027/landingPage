import React from "react";

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Homelly Home">
      {/* Placeholder logo icon */}
      <div className="w-8 h-8 bg-gray-300 rounded-sm flex items-center justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </div>
      <span className="text-lg font-semibold tracking-tight">Homelly</span>
    </a>
  );
};

export default Logo;
