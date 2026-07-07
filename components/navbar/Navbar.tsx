import React from "react";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";
import MenuButton from "./MenuButton";
import Divider from "../ui/Divider";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
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
