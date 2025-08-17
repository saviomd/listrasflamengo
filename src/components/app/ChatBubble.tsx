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
          ? "bg-chat-self ml-16 text-right"
          : "bg-chat-default mr-16 text-left"
      }`}
    >
      <div className="font-bold">{author}</div>
      <div>{message}</div>
    </div>
  );
}

export default ChatBubble;
