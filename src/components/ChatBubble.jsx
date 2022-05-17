import PropTypes from "prop-types";
import React from "react";

function ChatBubble({ author, message, self }) {
  return (
    <div
      className={`rounded-lg mb-2 p-2 ${
        self
          ? "bg-chat-self ml-16 text-right"
          : "bg-chat-default mr-16 text-left"
      }`}
    >
      <div className="font-bold">{author}</div>
      <div>{message}</div>
    </div>
  );
}

ChatBubble.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  self: PropTypes.bool.isRequired,
};

export default ChatBubble;
