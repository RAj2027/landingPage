import React from "react";
import FeatureLabel from "./FeatureLabel";
import FeatureValue from "./FeatureValue";
import IconWrapper from "../ui/IconWrapper";

interface PropertyFeatureItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | React.ReactNode;
  icon?: React.ReactNode;
  subtext?: string;
  valueSize?: "sm" | "md" | "lg" | "xl";
  highlight?: boolean;
}

const PropertyFeatureItem: React.FC<PropertyFeatureItemProps> = ({
  label,
  value,
  icon,
  subtext,
  valueSize = "md",
  highlight = false,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`flex items-start gap-3.5 group transition-all duration-200 ${className}`}
      {...props}
    >
      {icon && (
        <IconWrapper
          variant={highlight ? "mint" : "default"}
          size="md"
          rounded="md"
          className="group-hover:scale-105 transition-transform duration-200 mt-0.5"
        >
          {icon}
        </IconWrapper>
      )}
      <div className="flex flex-col">
        <FeatureLabel>{label}</FeatureLabel>
        {typeof value === "string" ? (
          <FeatureValue size={valueSize} highlight={highlight}>
            {value}
          </FeatureValue>
        ) : (
          value
        )}
        {subtext && (
          <span className="text-[11px] text-slate/70 font-sans mt-0.5">
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
};

export default PropertyFeatureItem;
