import React from "react";
import LabelText from "../ui/typography/LabelText";

interface FeatureLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const FeatureLabel: React.FC<FeatureLabelProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <LabelText
      className={`!text-[11px] !text-slate/90 !tracking-wider block mb-1 ${className}`}
      {...props}
    >
      {children}
    </LabelText>
  );
};

export default FeatureLabel;
