import React from "react";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h2" | "h3" | "h4" | "div";
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className = "",
  as: Component = "h2",
  ...props
}) => {
  return (
    <Component
      className={`font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-charcoal leading-snug ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default SectionHeading;
