import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: "div" | "section" | "main" | "header" | "footer";
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: Component = "div",
  ...props
}) => {
  return (
    <Component
      className={`w-full mx-auto px-6 sm:px-8 lg:px-10 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
