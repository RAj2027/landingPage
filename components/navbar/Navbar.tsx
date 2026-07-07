import React from "react";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";
import MenuButton from "./MenuButton";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        {/* Left: Logo */}
        <Logo />

        {/* Right: Contact Info + Divider + Menu Button */}
        <div className="flex items-center gap-4">
          <ContactInfo />

          {/* Vertical divider - visible only when ContactInfo is visible */}
          <div className="hidden md:block h-6 w-px bg-gray-300" aria-hidden="true" />

          <MenuButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
