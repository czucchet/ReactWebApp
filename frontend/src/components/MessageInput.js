import React, { useContext, useState } from 'react';
import { ChatContext } from '../contexts/ChatContext';

function MessageInput() {
  const [message, setMessage] = useState('');
  const { sendMessage } = useContext(ChatContext);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    sendMessage(message);
    setMessage('');
  };

  return (
    <input
      type="text"
      value={message}
      onChange={handleChange}
      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
    />
  );
}

export default MessageInput;