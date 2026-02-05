import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function Paragraph({ children }: IProps) {
  return <p className="mb-4">{children}</p>;
}

export default Paragraph;
