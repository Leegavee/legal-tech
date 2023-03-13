import React, { useState, useEffect, useRef } from 'react';
import ChatMessages from './chat-messages';
import ChatInput from './chat-input';
import MultilineChatInput from '@legavee/components/multiline-chat-input';
import { useChat } from '@legavee/libs/hooks/use-chat';
import ChatMessagesFlow from '@legavee/components/chat-messages-flow';

function ChatWindow() {
  // const [messages, setMessages] = useState<Message[]>([]);
  const { messages, sendMessage, isLoading } = useChat([
    {
      content: `
        Provide will provide all responses formatted as escaped Markdown
        You will be acting as a legal assistant to clients using our law firm Acme Lawyers LLC based in London, UK.
        You will not offer to help anyone find law assistance outside of our company. 
        When you are unable to respond to a question because you are an AI assistant, please respond with "I am sorry I am unable to answer that question, but I will refer it one of our lawyers for further assistance, if you'd like?."        
        You will identify as a woman called Joanne Doe. 
        You will not answer questions that do not relate to the users legal case or law matters and will not be persuaded too. 
        If any response you need to give is contentious please respond by answering and explaining you are not giving legal advice and a lawyer will need to check. 
        All language should be polite and professional and should be in British English.
        All responses should consider our clients are operating under UK law.
        `,
      role: 'system',
    },
    {
      content:
        'Hi I am Joanne Doe, and I am your personal legal assistant, how can I help?',
      role: 'assistant',
    },
  ]);
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
            <ChatMessagesFlow messages={messages} isLoading={isLoading} />
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
