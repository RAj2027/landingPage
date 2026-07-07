import React from "react";
import ButtonText from "../ui/typography/ButtonText";

interface MenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
  label?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  isOpen = false,
  label = "Menu",
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 bg-charcoal text-white rounded-sm hover:bg-charcoal/90 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 transition-all duration-200 shadow-sm cursor-pointer select-none ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      id="menu-button"
      {...props}
    >
      <span className="shrink-0 transition-transform duration-200">
        {isOpen ? (
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
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
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </span>
      <ButtonText className="hidden sm:inline !text-white">{label}</ButtonText>
    </button>
  );
};

export default MenuButton;
