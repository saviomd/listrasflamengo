import type { Meta, StoryObj } from "@storybook/react-vite";

import Jersey, { initialColors } from "./Jersey";

const meta = {
  title: "app/Jersey",
  component: Jersey,
  argTypes: {
    initialColor: { options: initialColors },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "inline-block" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Jersey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 5,
    initialColor: initialColors[0],
    manufacturer: "manufacturer",
    year: 1895,
  },
};
