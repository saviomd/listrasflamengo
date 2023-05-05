import type { Meta, StoryObj } from "@storybook/react";

import ChatBubble from "./ChatBubble";

const meta = {
  title: "app/ChatBubble",
  component: ChatBubble,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: "author",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat non quasi molestias quo quisquam vero harum, praesentium modi ipsam assumenda temporibus, expedita illo facilis molestiae enim dicta soluta dolorum.",
    self: false,
  },
};
