import React from "react";

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gap?: "2" | "4" | "6" | "8" | "10" | "12" | "16";
  align?: "start" | "center" | "end" | "stretch";
}

const Stack: React.FC<StackProps> = ({
  children,
  className = "",
  gap = "6",
  align = "start",
  ...props
}) => {
  const gapClasses = {
    "2": "gap-2",
    "4": "gap-4",
    "6": "gap-6",
    "8": "gap-8",
    "10": "gap-10",
    "12": "gap-12",
    "16": "gap-16",
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  return (
    <div
      className={`flex flex-col ${gapClasses[gap]} ${alignClasses[align]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Stack;
