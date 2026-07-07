import React from "react";

interface FeatureValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  highlight?: boolean;
}

const FeatureValue: React.FC<FeatureValueProps> = ({
  children,
  className = "",
  size = "md",
  highlight = false,
  ...props
}) => {
  const sizeClasses = {
    sm: "text-sm font-semibold",
    md: "text-base sm:text-lg font-bold",
    lg: "text-lg sm:text-xl font-bold",
    xl: "text-xl sm:text-2xl font-extrabold",
  };

  const colorClass = highlight ? "text-mint" : "text-charcoal";

  return (
    <span
      className={`font-display tracking-tight leading-none ${sizeClasses[size]} ${colorClass} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default FeatureValue;
