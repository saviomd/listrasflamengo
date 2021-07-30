import React from "react";

import Jersey, { initialColors } from "./Jersey";

export default {
  title: "Example/Jersey",
  component: Jersey,
  argTypes: {
    initialColor: { options: initialColors },
  },
};

const Template = (args) => (
  <div style={{ maxWidth: 200 }}>
    <Jersey {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  count: 5,
  initialColor: initialColors[0],
  manufacturer: "manufacturer",
  year: new Date().getFullYear(),
};
