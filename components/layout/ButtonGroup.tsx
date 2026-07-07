import React from "react";

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  align?: "start" | "center" | "end" | "stretch";
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className = "",
  align = "start",
  ...props
}) => {
  const alignClasses = {
    start: "sm:justify-start",
    center: "sm:justify-center",
    end: "sm:justify-end",
    stretch: "sm:justify-stretch",
  };

  return (
    <div
      className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto ${alignClasses[align]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
