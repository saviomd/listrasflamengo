import React from "react";

import Anchor from "./Anchor";

export default {
  title: "system/Anchor",
  component: Anchor,
  argTypes: {
    children: { control: { type: null } },
    href: { control: { type: null } },
    target: { control: { type: null } },
  },
};

function Template(args) {
  return <Anchor {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum dolor sit amet",
  href: "./",
};
