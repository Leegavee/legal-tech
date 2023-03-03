import React from 'react';
export interface MessageItem {
  avatar?: string;
  message?: string;
  createdAt?: Date;
  position?: 'left' | 'right';
  children?: React.ReactNode;
}
export const MessageLeft = (props: MessageItem) => {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          {props.avatar}
        </div>
        <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <div>{props.message}</div>
          {props.children}
        </div>
      </div>
    </div>
  );
};
