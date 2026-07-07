import React from "react";

interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "mint" | "charcoal" | "ghost";
  rounded?: "sm" | "md" | "full";
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  className = "",
  size = "md",
  variant = "default",
  rounded = "sm",
  ...props
}) => {
  const sizes = {
    sm: "w-6 h-6 p-1",
    md: "w-8 h-8 p-1.5",
    lg: "w-10 h-10 p-2",
  };

  const variants = {
    default: "bg-gray-100 text-charcoal",
    mint: "bg-mint/10 text-mint",
    charcoal: "bg-charcoal text-white",
    ghost: "bg-transparent text-current",
  };

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    full: "rounded-full",
  };

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${sizes[size]} ${variants[variant]} ${roundedClasses[rounded]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
