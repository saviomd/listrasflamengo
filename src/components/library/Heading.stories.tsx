import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading, { HeadingLevelType, levelKeys } from "./Heading";

export default {
  title: "library/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: { type: null } },
    level: { control: "radio", options: levelKeys },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum dolor sit amet",
  level: levelKeys[0] as HeadingLevelType,
};
