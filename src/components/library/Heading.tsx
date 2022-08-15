import { ReactNode } from "react";

type HeadingLevelType = keyof typeof levels;

type PropsType = {
  children: ReactNode;
  level: HeadingLevelType;
};

const levels = {
  1: "text-3xl",
  2: "text-2xl",
  3: "text-xl",
};
const levelKeys = Object.keys(levels).map((item) => parseInt(item, 10));

function Heading({ children, level }: PropsType) {
  const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`;
  return (
    <HeadingTag className={`mb-2 font-bold ${levels[level]}`}>
      {children}
    </HeadingTag>
  );
}

export default Heading;
export { levelKeys };
export type { HeadingLevelType };
