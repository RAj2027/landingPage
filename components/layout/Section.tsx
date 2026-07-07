import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  fullHeight = false,
  ...props
}) => {
  const heightClass = fullHeight
    ? "min-h-[600px] md:min-h-[800px] 2xl:min-h-[900px] flex flex-col justify-center"
    : "py-16 sm:py-20 md:py-24";

  return (
    <section
      className={`relative w-full overflow-hidden ${heightClass} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
