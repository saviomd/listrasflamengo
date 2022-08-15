import { ComponentStory, ComponentMeta } from "@storybook/react";

import ChatBubble from "./ChatBubble";

export default {
  title: "app/ChatBubble",
  component: ChatBubble,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ChatBubble>;

const Template: ComponentStory<typeof ChatBubble> = (args) => (
  <div style={{ maxWidth: 500 }}>
    <ChatBubble {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  author: "author",
  message:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat non quasi molestias quo quisquam vero harum, praesentium modi ipsam assumenda temporibus, expedita illo facilis molestiae enim dicta soluta dolorum.",
  self: false,
};
