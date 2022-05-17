import React from "react";

import Jersey, { initialColors } from "./Jersey";

export default {
  title: "components/Jersey",
  component: Jersey,
  argTypes: {
    initialColor: { options: initialColors },
  },
};

function Template(args) {
  return (
    <div style={{ display: "inline-block" }}>
      <Jersey {...args} />
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {
  count: 5,
  initialColor: initialColors[0],
  manufacturer: "manufacturer",
  year: 1895,
};
