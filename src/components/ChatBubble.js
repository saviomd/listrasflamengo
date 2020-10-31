import { Box } from '@material-ui/core';

import theme from '../data/theme';

const ChatBubble = ({ author, message, self }) => (
  <Box bgcolor={theme.chatBubble[self ? 'self' : 'default']} borderRadius={8} mb={1} ml={self ? 8 : 0} mr={!self ? 8 : 0} p={1} textAlign={self ? 'right' : 'left'}>
    <Box fontWeight="fontWeightBold">{author}</Box>
    <div>{message}</div>
  </Box>
);

export default ChatBubble;
