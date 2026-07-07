import React from "react";

interface CaptionTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  as?: "span" | "p" | "div";
}

const CaptionText: React.FC<CaptionTextProps> = ({
  children,
  className = "",
  as: Component = "span",
  ...props
}) => {
  return (
    <Component
      className={`font-body text-xs sm:text-sm text-slate font-normal leading-normal ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default CaptionText;
