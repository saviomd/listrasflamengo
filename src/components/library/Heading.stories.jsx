import React from "react";

import Heading, { levelKeys } from "./Heading";

export default {
  title: "library/Heading",
  component: Heading,
  argTypes: {
    children: { control: { type: null } },
    level: { control: "radio", options: levelKeys },
  },
};

function Template(args) {
  return <Heading {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum dolor sit amet",
  level: levelKeys[0],
};
