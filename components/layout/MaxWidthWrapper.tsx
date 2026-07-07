import React from "react";

interface MaxWidthWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  max?: "1400" | "1200" | "1000" | "800" | "full";
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  className = "",
  max = "1400",
  ...props
}) => {
  const maxClasses = {
    "1400": "max-w-[1400px]",
    "1200": "max-w-[1200px]",
    "1000": "max-w-[1000px]",
    "800": "max-w-[800px]",
    full: "max-w-full",
  };

  return (
    <div
      className={`w-full mx-auto ${maxClasses[max]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
