import React from "react";

interface LabelTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  as?: "span" | "div" | "p";
}

const LabelText: React.FC<LabelTextProps> = ({
  children,
  className = "",
  as: Component = "span",
  ...props
}) => {
  return (
    <Component
      className={`font-sans text-xs font-semibold uppercase tracking-widest text-charcoal/90 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default LabelText;
