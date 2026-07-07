import React from "react";

interface HeroTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "div";
}

const HeroTitle: React.FC<HeroTitleProps> = ({
  children,
  className = "",
  as: Component = "h1",
  ...props
}) => {
  return (
    <Component
      className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal leading-[1.08] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default HeroTitle;
