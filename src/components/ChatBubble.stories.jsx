import React from "react";

import ChatBubble from "./ChatBubble";

export default {
  title: "components/ChatBubble",
  component: ChatBubble,
};

function Template(args) {
  return (
    <div style={{ maxWidth: 500 }}>
      <ChatBubble {...args} />
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {
  author: "author",
  message:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat non quasi molestias quo quisquam vero harum, praesentium modi ipsam assumenda temporibus, expedita illo facilis molestiae enim dicta soluta dolorum.",
  self: false,
};
