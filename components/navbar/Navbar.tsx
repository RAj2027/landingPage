import React from "react";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";
import MenuButton from "./MenuButton";
import Divider from "../ui/Divider";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* 
        Slightly reduced left padding/margin (pl-4 lg:pl-6) so the logo sits closer to the left edge,
        while maintaining normal right spacing and centering max-width structure.
      */}
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between pl-4 pr-6 py-5 lg:pl-6 lg:pr-10">
        {/* Left: Logo */}
        <Logo />

        {/* Right: Contact Info + Divider + Menu Button */}
        <div className="flex items-center gap-5">
          <ContactInfo />

          {/* Vertical divider — visible only on md+ when ContactInfo is shown */}
          <Divider
            orientation="vertical"
            variant="dark"
            className="hidden md:block !min-h-[28px] !bg-white/25"
          />

          <MenuButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
