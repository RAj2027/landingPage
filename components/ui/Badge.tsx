import React from "react";
import LabelText from "./typography/LabelText";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "glass" | "mint" | "charcoal" | "outline";
}

const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "glass",
  ...props
}) => {
  const variants = {
    glass:
      "bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-sm",
    mint: "bg-mint/15 border border-mint/30 text-mint",
    charcoal: "bg-charcoal text-white border border-charcoal",
    outline: "bg-transparent border border-gray-300 text-charcoal",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm w-fit ${variants[variant]} ${className}`}
      {...props}
    >
      <LabelText className="!text-current">{children}</LabelText>
    </div>
  );
};

export default Badge;
