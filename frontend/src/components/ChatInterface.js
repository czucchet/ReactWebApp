import React from 'react';
import MessageInput from './MessageInput';
import SendButton from './SendButton';
import ChatInterface from '../components/ChatInterface';

function ChatInterface() {
  return (
    <div className="chat-interface">
      <div className="chat-prompt">How can I help you today?</div>
      <MessageInput />
      <SendButton />
    </div>
  );
}

export default ChatInterface;