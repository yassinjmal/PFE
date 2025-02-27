import React, { useState, useEffect, useRef } from "react";
import ChatBody from "../components/ChatBody";
import ChatInput from "../components/ChatInput";
import "./ChatPage.css";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  const handleSend = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setIsTyping(true);

    // Simulate a bot response after 2 seconds
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Hello, I'm a bot!" },
      ]);
      setIsTyping(false);
    }, 2000);
  };

  // Auto-scroll when messages or typing state change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Clear the chat by resetting the messages state
  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="chat-page">
      <div className="chat-controls">
        <button className="clear-chat-btn" onClick={clearChat}>
          Clear Chat
        </button>
      </div>
      <ChatBody messages={messages} isTyping={isTyping} ref={chatBodyRef} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default ChatPage;
