type Sizes =
  | "micro"
  | "small"
  | "base"
  | "large"
  | "xl"
  | "h4"
  | "h3"
  | "h2"
  | "h1";

type Weight = "normal" | "medium" | "semiBold" | "bold";

interface Props {
  text: string;
  size: Sizes;
  color?: string;
  weight?: Weight;
  className?: string;
}

export const Text = ({
  size,
  text,
  className,
  color = "text-black",
  weight = "normal",
}: Props) => {
  const TextSizes = {
    micro: "text-xs",
    small: "text-sm",
    base: "text-base",
    large: "text-lg",
    xl: "text-xl",
    h4: "text-2xl",
    h3: "text-3xl",
    h2: "text-4xl",
    h1: "text-5xl",
    null: "",
  };

  const TextWeigth = {
    normal: "font-normal",
    medium: "font-medium",
    semiBold: "font-semibold",
    bold: "font-bold",
  };
  return (
    <p
      className={`${color} ${TextWeigth[weight]} ${className}  ${TextSizes[size]}`}
    >
      {text}
    </p>
  );
};
