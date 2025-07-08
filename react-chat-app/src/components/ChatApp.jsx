import React, { useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import './ChatApp.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    const newMessage = {
      text,
      id: Date.now(),
      sender: "You",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
};

export default ChatApp;
<div className="chat-app">
  <div className="chat-header">Let's Chat</div>
  <MessageList />
  <MessageInput />
</div>
