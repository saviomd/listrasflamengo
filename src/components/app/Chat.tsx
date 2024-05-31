import ChatBubble from "./ChatBubble";
import { chat } from "src/data";

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
