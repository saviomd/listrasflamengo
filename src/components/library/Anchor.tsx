import type { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  href: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
};

function Anchor({ children, href, target }: PropsType) {
  return (
    <a
      className="text-anchor underline"
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default Anchor;
