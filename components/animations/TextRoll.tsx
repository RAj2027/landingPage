"use client";

import React, { useMemo } from "react";
import { motion, Variants } from "framer-motion";

export interface TextRollProps {
  children: string | React.ReactNode;
  className?: string;
  center?: boolean;
  stagger?: number;
  duration?: number;
}

const TextRollComponent: React.FC<TextRollProps> = ({
  children,
  className = "",
  center = true,
  stagger = 0.03,
  duration = 0.45,
}) => {
  // Extract text string and compute lines & character delays memoized for performance
  const { linesData, originalText } = useMemo(() => {
    const textStr = typeof children === "string" ? children : String(children || "");
    const lines = textStr.split("\n");

    const data = lines.map((line) => {
      const chars = line.split("");
      const centerIdx = (chars.length - 1) / 2;
      return {
        line,
        chars: chars.map((char, idx) => {
          const delay = center
            ? Math.abs(idx - centerIdx) * stagger
            : idx * stagger;
          return { char, delay };
        }),
      };
    });

    return { linesData: data, originalText: textStr.replace(/\n/g, " ") };
  }, [children, center, stagger]);

  // Top character span animation variants (rolls UP out of view)
  const topVariants: Variants = {
    initial: { y: "0%" },
    hover: { y: "-100%" },
  };

  // Bottom character span animation variants (rolls UP into view)
  const bottomVariants: Variants = {
    initial: { y: "100%" },
    hover: { y: "0%" },
  };

  return (
    <motion.span
      initial="initial"
      whileHover="hover"
      whileFocus="hover"
      className={`inline-block cursor-pointer select-none ${className}`}
    >
      {/* 1. Screen Reader Accessibility: Plain original text */}
      <span className="sr-only">{originalText}</span>

      {/* 2. Visual Animated Character Roll (hidden from screen readers) */}
      <span aria-hidden="true" className="inline-block">
        {linesData.map((lineObj, lineIdx) => (
          <React.Fragment key={lineIdx}>
            <span className="inline-block">
              {lineObj.chars.map((item, charIdx) => (
                <span
                  key={charIdx}
                  className="relative inline-block overflow-hidden"
                >
                  <motion.span
                    variants={topVariants}
                    transition={{
                      duration: duration,
                      ease: [0.65, 0, 0.35, 1],
                      delay: item.delay,
                    }}
                    className="inline-block"
                  >
                    {item.char === " " ? "\u00A0" : item.char}
                  </motion.span>
                  <motion.span
                    variants={bottomVariants}
                    transition={{
                      duration: duration,
                      ease: [0.65, 0, 0.35, 1],
                      delay: item.delay,
                    }}
                    className="absolute left-0 top-0 inline-block"
                  >
                    {item.char === " " ? "\u00A0" : item.char}
                  </motion.span>
                </span>
              ))}
            </span>
            {/* Preserve line breaks between independent lines */}
            {lineIdx < linesData.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    </motion.span>
  );
};

export const TextRoll = React.memo(TextRollComponent);
export default TextRoll;
