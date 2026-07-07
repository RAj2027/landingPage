import React from "react";
import Divider from "../ui/Divider";

interface VerticalDividerProps {
  className?: string;
}

const VerticalDivider: React.FC<VerticalDividerProps> = ({ className = "" }) => {
  return (
    <div className={`hidden sm:block self-stretch py-1 ${className}`}>
      <Divider orientation="vertical" variant="light" className="!h-full" />
    </div>
  );
};

export default VerticalDivider;
