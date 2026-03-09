import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Paragraph({ children }: Props) {
  return <p className="mb-4">{children}</p>;
}

export default Paragraph;
