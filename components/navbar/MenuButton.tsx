"use client";

import React from "react";

interface MenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  isOpen = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2.5 px-5 py-2.5 bg-white text-charcoal rounded-full hover:bg-gray-50 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 transition-all duration-200 shadow-sm cursor-pointer select-none font-sans text-sm font-semibold ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      id="menu-button"
      {...props}
    >
      {/* Hamburger icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
      <span className="hidden sm:inline">Menu</span>
    </button>
  );
};

export default MenuButton;
