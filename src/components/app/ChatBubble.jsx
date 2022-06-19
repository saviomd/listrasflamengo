import PropTypes from "prop-types";
import React from "react";

function ChatBubble({ author, message, self }) {
  return (
    <div
      className={`mb-2 rounded-lg p-2 ${
        self
          ? "ml-16 bg-chat-self text-right"
          : "mr-16 bg-chat-default text-left"
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
