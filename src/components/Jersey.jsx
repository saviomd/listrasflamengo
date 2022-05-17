import PropTypes from "prop-types";
import React from "react";

import { Heading } from "./system";

const initialColors = ["black", "red"];

function Jersey({ count, initialColor, manufacturer, year }) {
  const colors =
    initialColor === initialColors[0]
      ? ["bg-stripe-black", "bg-stripe-red"]
      : ["bg-stripe-red", "bg-stripe-black"];
  const stripes = [...Array(count).keys()];
  return (
    <div className="text-center px-2 min-w-fit" key={year}>
      <Heading level={2}>{year}</Heading>
      <div className="relative w-36">
        <div className="absolute font-squadaOne leading-jersey left-0 right-0 text-8xl text-white">
          {count}
        </div>
        <div className="flex flex-col h-jersey">
          {stripes.map((item) => (
            <div className={`${colors[item % 2]} grow`} key={item} />
          ))}
        </div>
        <div>{manufacturer}</div>
      </div>
    </div>
  );
}

Jersey.propTypes = {
  count: PropTypes.number.isRequired,
  initialColor: PropTypes.oneOf(initialColors).isRequired,
  manufacturer: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Jersey;
export { initialColors };
