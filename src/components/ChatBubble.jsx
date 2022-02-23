import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import theme from "../data/theme";

function ChatBubble({ author, message, self }) {
  return (
    <Box
      bgcolor={theme.chatBubble[self ? "self" : "default"]}
      borderRadius={2}
      mb={1}
      ml={self ? 8 : 0}
      mr={!self ? 8 : 0}
      p={1}
      textAlign={self ? "right" : "left"}
    >
      <Box fontWeight="fontWeightBold">{author}</Box>
      <div>{message}</div>
    </Box>
  );
}

ChatBubble.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  self: PropTypes.bool.isRequired,
};

export default ChatBubble;
