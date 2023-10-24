import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="mb-3 font-semibold uppercase md:text-xl" {...props}>
      {children}
    </p>
  );
};

export default SectionTitle;
