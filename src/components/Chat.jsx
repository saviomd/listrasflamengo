import React from "react";

import ChatBubble from "./ChatBubble";

import chat from "../data/chat";

function Chat() {
  return (
    <div className="mb-4">
      {chat.map(({ author, message }) => (
        <ChatBubble
          author={author}
          key={message}
          message={message}
          self={author === "Sávio"}
        />
      ))}
    </div>
  );
}

export default Chat;
