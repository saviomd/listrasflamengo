import { ComponentStory, ComponentMeta } from "@storybook/react";

import Jersey, { initialColors } from "./Jersey";

export default {
  title: "app/Jersey",
  component: Jersey,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    initialColor: { options: initialColors },
  },
} as ComponentMeta<typeof Jersey>;

const Template: ComponentStory<typeof Jersey> = (args) => (
  <div style={{ display: "inline-block" }}>
    <Jersey {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  count: 5,
  initialColor: initialColors[0],
  manufacturer: "manufacturer",
  year: 1895,
};
