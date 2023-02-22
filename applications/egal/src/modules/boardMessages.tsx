import {
  MessageItem,
  MessageLeft,
  MessageRight,
  ChatItem,
} from '@legavee/components';
import React, { useState } from 'react';

export const BoardMessages = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const pushMessage = (newMessage: any) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-12 gap-y-2">
              {messages.map((item: MessageItem, index: number) => {
                return item.position === 'left' ? (
                  <MessageLeft key={`key-left-${index}`} {...item} />
                ) : (
                  <MessageRight key={`key-right-${index}`} {...item} />
                );
              })}
            </div>
          </div>
        </div>
        <ChatItem pushMessage={pushMessage} />
      </div>
    </div>
  );
};
