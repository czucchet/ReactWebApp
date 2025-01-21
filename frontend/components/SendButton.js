import React, { useContext } from 'react';
import { ChatContext } from '../contexts/ChatContext';

function SendButton() {
  const { sendMessage } = useContext(ChatContext);

  return (
    <button onClick={sendMessage}>Send</button>
  );
}

export default SendButton;