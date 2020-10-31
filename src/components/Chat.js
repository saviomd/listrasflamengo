import ChatBubble from './ChatBubble';

import chat from '../data/chat';

const Chat = () => (
  <>
    {chat.map(({ author, message }, index) => (
      <ChatBubble
        author={author}
        key={index}
        message={message}
        self={author === 'Sávio'}
      />
    ))}
  </>
);

export default Chat;
