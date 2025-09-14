import type { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

function Paragraph({ children }: PropsType) {
  return <p className="mb-4">{children}</p>;
}

export default Paragraph;
