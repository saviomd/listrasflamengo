type PropsType = {
  author: string;
  message: string;
  self?: boolean;
};

function ChatBubble({ author, message, self = false }: PropsType) {
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

export default ChatBubble;
