import React from "react";

const MenuButton: React.FC = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
      aria-label="Open menu"
      id="menu-button"
    >
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
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
      <span className="hidden sm:inline">Menu</span>
    </button>
  );
};

export default MenuButton;
