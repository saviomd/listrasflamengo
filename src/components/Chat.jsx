import React from "react";

import ChatBubble from "./ChatBubble";

import chat from "../data/chat";

const Chat = () => (
  <>
    {chat.map(({ author, message }) => (
      <ChatBubble
        author={author}
        key={message}
        message={message}
        self={author === "Sávio"}
      />
    ))}
  </>
);

export default Chat;
