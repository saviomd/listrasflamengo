import React from "react";

import { Container } from "../system";
import Jersey from "./Jersey";
import { jerseys } from "../../data";

function Jerseys() {
  return (
    <Container>
      <div className="-mx-2 flex flex-nowrap overflow-x-scroll py-4">
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
