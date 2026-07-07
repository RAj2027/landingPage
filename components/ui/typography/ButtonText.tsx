import React from "react";

interface ButtonTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const ButtonText: React.FC<ButtonTextProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <span
      className={`font-sans text-sm font-semibold tracking-wide leading-none ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default ButtonText;
