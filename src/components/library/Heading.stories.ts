import type { Meta, StoryObj } from "@storybook/react";

import Heading, { HeadingLevelType, levelKeys } from "./Heading";

const meta = {
  title: "library/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: false },
    level: { control: "radio", options: levelKeys },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet",
    level: levelKeys[0] as HeadingLevelType,
  },
};
