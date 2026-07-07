import React from "react";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "light" | "medium" | "dark";
}

const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "light",
  className = "",
  ...props
}) => {
  const orientations = {
    horizontal: "w-full h-px",
    vertical: "h-full w-px min-h-[1.5rem]",
  };

  const variants = {
    light: "bg-gray-200/80",
    medium: "bg-gray-300",
    dark: "bg-white/20",
  };

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={`shrink-0 ${orientations[orientation]} ${variants[variant]} ${className}`}
      {...props}
    />
  );
};

export default Divider;
