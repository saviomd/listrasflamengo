import PropTypes from "prop-types";
import React from "react";

const levels = {
  1: "text-3xl",
  2: "text-2xl",
  3: "text-xl",
};
const levelKeys = Object.keys(levels).map((item) => parseInt(item, 10));

function Heading({ children, level }) {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag className={`mb-2 font-bold ${levels[level]}`}>
      {children}
    </HeadingTag>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf(levelKeys).isRequired,
};

export default Heading;
export { levelKeys };
