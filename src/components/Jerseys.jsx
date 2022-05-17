import React from "react";

import { Container } from "./system";
import Jersey from "./Jersey";
import jerseys from "../data/jerseys";

function Jerseys() {
  return (
    <Container>
      <div className="flex flex-nowrap -mx-2 overflow-x-scroll py-4">
        {[...jerseys]
          .reverse()
          .map(({ count, initialColor, manufacturer, year }) => (
            <Jersey
              count={count}
              initialColor={initialColor}
              key={year}
              manufacturer={manufacturer}
              year={year}
            />
          ))}
      </div>
    </Container>
  );
}

export default Jerseys;
