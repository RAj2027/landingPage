import React from "react";
import ButtonText from "../typography/ButtonText";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className = "",
  disabled = false,
  href,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none";

  const variants = {
    primary:
      "bg-charcoal text-white hover:bg-charcoal/90 active:scale-[0.98] shadow-sm hover:shadow",
    secondary:
      "bg-white text-charcoal hover:bg-cream/50 active:scale-[0.98] shadow-sm border border-gray-200",
    outline:
      "bg-black/40 backdrop-blur-md border border-white/30 text-white hover:bg-black/60 hover:border-white/50 active:scale-[0.98]",
    ghost:
      "bg-transparent text-charcoal hover:bg-charcoal/5 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-sm",
    md: "px-6 py-3 text-sm rounded-sm",
    lg: "px-8 py-4 text-sm rounded-sm",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <ButtonText>{children}</ButtonText>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
