import {
  MessageItem,
  MessageLeft,
  MessageRight,
  ChatItem,
} from '@legavee/components';
import React from 'react';

export type BoardMessageType = {
  messages: MessageItem[];
};

export const BoardMessages = (props: BoardMessageType) => {
  return (
    <div className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-12 gap-y-2">
              {props.messages.map((item: MessageItem) => {
                return item.position === 'left' ? (
                  <MessageLeft {...item} />
                ) : (
                  <MessageRight {...item} />
                );
              })}
            </div>
          </div>
        </div>
        <ChatItem />
      </div>
    </div>
  );
};
