// src/components/Chat.tsx
import { useEffect, useState } from "react";
import socket from "../utils/socket";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  // WebSocket'ten gelen mesajları dinle
  useEffect(() => {
    socket.on("receive_message", (newMessage: string) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("receive_message"); // Bileşen unmount olduğunda dinleyiciyi kaldır
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", message); // Mesajı backend'e gönder
      setMessage("");
    }
  };

  return (
    <div>
      <div>
        <div>
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
