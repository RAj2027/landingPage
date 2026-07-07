import React from "react";

interface BodyTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  as?: "p" | "div" | "span";
  size?: "sm" | "md" | "lg";
}

const BodyText: React.FC<BodyTextProps> = ({
  children,
  className = "",
  as: Component = "p",
  size = "md",
  ...props
}) => {
  const sizeClasses = {
    sm: "text-xs sm:text-sm leading-relaxed",
    md: "text-sm sm:text-base leading-relaxed",
    lg: "text-base sm:text-lg leading-relaxed",
  };

  return (
    <Component
      className={`font-body ${sizeClasses[size]} text-charcoal/80 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default BodyText;
