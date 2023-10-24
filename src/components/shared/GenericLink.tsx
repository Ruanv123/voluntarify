import Link from "next/link";

type Target = "_blank" | "_self" | "_parent" | "_top";

interface Props {
  children: React.ReactNode;
  href: string;
  target?: Target;
  className?: string;
}
export const GenericLink = ({ children, href, target, className }: Props) => {
  return (
    <Link href={href} target={target} className={className}>
      {children}
    </Link>
  );
};
