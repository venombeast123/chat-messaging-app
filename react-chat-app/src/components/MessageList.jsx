import React from "react";
import './MessageList.css';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div key={msg.id} className="message">
          <div className="message-sender">{msg.sender}</div>
          <div className="message-text">{msg.text}</div>
          <div className="message-time">{msg.time}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
