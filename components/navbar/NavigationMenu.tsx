"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. Updated navigation order: Home, Properties, About (removed Search Properties & Contact)
const navItems = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

// Staggered parent animation container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

// Child item spring animation
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, x: -8 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 220,
    },
  },
  exit: {
    opacity: 0,
    y: 12,
    transition: { duration: 0.2 },
  },
};

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isOpen, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // 1. Scroll locking on body when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // 2. ESC key listener for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // 3. Focus trapping inside the opened menu
  useEffect(() => {
    if (isOpen && panelRef.current) {
      const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* ─── Backdrop Overlay ─── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-[4px] cursor-pointer"
            aria-hidden="true"
          />

          {/* ─── Sliding Menu Panel ─── */}
          {/* 
            Optimized padding (p-6 sm:p-8 lg:p-10) and flex layout (overflow-hidden) 
            to guarantee zero horizontal or vertical scrolling on any standard viewport.
          */}
          <motion.div
            ref={panelRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 280,
              mass: 0.8,
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="absolute top-0 right-0 bottom-0 w-full sm:w-[56vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] h-full bg-[#FAf8F5] sm:rounded-l-[32px] shadow-2xl flex flex-col justify-between p-6 sm:p-8 lg:p-10 overflow-hidden border-l border-white/40"
          >
            {/* Top Bar: Title & Close Button */}
            <div className="flex items-center justify-between shrink-0">
              <span className="font-accent text-xs font-bold uppercase tracking-widest text-charcoal/40">
                Navigation
              </span>

              {/* Circular Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-charcoal/5 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:rotate-90"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Middle: Staggered Navigation Items */}
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex flex-col gap-3.5 sm:gap-4 my-auto py-2 shrink-0"
            >
              {navItems.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="group inline-flex items-center gap-4 font-display text-[32px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-charcoal hover:text-mint transition-colors duration-200 select-none"
                  >
                    <span className="relative">
                      {item.label}
                      {/* Subtle underline on hover */}
                      <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-mint transition-all duration-300 group-hover:w-full rounded-full" />
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-mint"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </motion.nav>

            {/* Bottom: Contact & Socials Sections (Vertically Stacked & Left Aligned) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col gap-5 sm:gap-6 pt-5 sm:pt-6 border-t border-charcoal/10 font-sans shrink-0"
            >
              {/* Contact Section */}
              <div className="flex flex-col gap-1 sm:gap-1.5 text-left">
                <span className="font-accent text-xs font-bold uppercase tracking-widest text-charcoal/40">
                  Contact
                </span>
                <a
                  href="mailto:hello@realtorsworld.in"
                  className="text-sm sm:text-base font-semibold text-charcoal hover:text-mint transition-colors duration-200 w-fit"
                >
                  hello@realtorsworld.in
                </a>
                <a
                  href="tel:+917529015606"
                  className="text-sm sm:text-base font-semibold text-charcoal hover:text-mint transition-colors duration-200 w-fit"
                >
                  +91-75290-15606
                </a>
              </div>

              {/* Social Section (Stacked directly beneath Contact, vertically one per line) */}
              <div className="flex flex-col gap-1 sm:gap-1.5 text-left">
                <span className="font-accent text-xs font-bold uppercase tracking-widest text-charcoal/40">
                  Socials
                </span>
                <div className="flex flex-col gap-1 text-sm sm:text-base font-semibold text-charcoal">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-mint transition-colors duration-200 w-fit"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
