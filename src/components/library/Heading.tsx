import type { ElementType, ReactNode } from "react";

type HeadingLevelType = keyof typeof levels;

interface IProps {
  children: ReactNode;
  level: HeadingLevelType;
}

const levels = {
  1: "text-3xl",
  2: "text-2xl",
  3: "text-xl",
};
const levelKeys = Object.keys(levels).map((item) => parseInt(item, 10));

function Heading({ children, level }: IProps) {
  const HeadingTag = `h${String(level)}` as ElementType;
  return (
    <HeadingTag className={`mb-2 font-bold ${levels[level]}`}>
      {children}
    </HeadingTag>
  );
}

export default Heading;
export { levelKeys };
export type { HeadingLevelType };
