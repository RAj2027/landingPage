import React from "react";

interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "glass" | "card" | "elevated" | "flat";
  padding?: "none" | "sm" | "md" | "lg";
  as?: "div" | "article" | "aside" | "section";
}

const Surface: React.FC<SurfaceProps> = ({
  children,
  className = "",
  variant = "glass",
  padding = "md",
  as: Component = "div",
  ...props
}) => {
  const variants = {
    glass:
      "bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-[0_4px_20px_-2px_rgba(23,32,35,0.05),0_0_1px_1px_rgba(23,32,35,0.05)]",
    card: "bg-white border border-gray-200 shadow-sm",
    elevated:
      "bg-white border border-gray-100 shadow-[0_10px_30px_-5px_rgba(23,32,35,0.1),0_0_1px_1px_rgba(23,32,35,0.08)]",
    flat: "bg-cream/40 border border-gray-200/50",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10 md:p-12",
  };

  return (
    <Component
      className={`rounded-sm transition-all duration-200 ${variants[variant]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Surface;
