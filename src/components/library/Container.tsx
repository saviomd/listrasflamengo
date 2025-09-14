import type { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

function Container({ children }: PropsType) {
  return <div className="container mx-auto max-w-7xl px-4">{children}</div>;
}

export default Container;
