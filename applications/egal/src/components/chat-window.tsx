import React, { useState, useEffect, useRef } from 'react';
import ChatMessages from './chat-messages';
import ChatInput from './chat-input';
import MultilineChatInput from '@legavee/components/multiline-chat-input';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  function handleInputSubmit(text: string) {
    setMessages([...messages, { text, sender: 'bot' }]);
    // Call your chat bot API here and update the messages state with the bot's response
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        <div className="flex flex-col h-full justify-end">
          <div className="flex-grow">
            <ChatMessages messages={messages} />
            <div ref={messagesEndRef} />
          </div>
          <MultilineChatInput onSubmit={handleInputSubmit} />
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
