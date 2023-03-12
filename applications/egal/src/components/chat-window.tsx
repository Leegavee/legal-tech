import React, { useState, useEffect, useRef } from 'react';
import ChatMessages from './chat-messages';
import ChatInput from './chat-input';
import MultilineChatInput from '@legavee/components/multiline-chat-input';
import { useChat } from '@legavee/libs/hooks/use-chat';

function ChatWindow() {
  // const [messages, setMessages] = useState<Message[]>([]);
  const { messages, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  function handleInputSubmit(text: string) {
    sendMessage({ messages: [...messages, { content: text, role: 'user' }] });
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        <div className="flex flex-col h-full justify-end">
          <div className="flex-grow pb-20">
            <ChatMessages messages={messages} />
            <div ref={messagesEndRef} />
          </div>
          <div className="fixed w-full bottom-1">
            <MultilineChatInput onSubmit={handleInputSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
