import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
interface Props {
  messages: {
    content: string;
    role: 'user' | 'assistant' | 'error' | 'system';
  }[];
}

function ChatMessages({ messages }: Props) {
  const userAvatarPhoto = useUser().user?.picture;

  console.log(messages);
  return (
    <div className="flex-grow bg-gray-200 overflow-y-scroll px-4 py-8">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            message.role === 'user' ? 'items-end' : 'items-start'
          }`}
        >
          <div
            className={`${
              message.role === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-800'
            } inline-block rounded-lg px-4 py-2 max-w-md break-all`}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {message.content}
          </div>
          <div
            className={`${
              message.role === 'user' ? 'mr-2' : 'ml-2'
            } mt-2 text-sm text-gray-500`}
          >
            {message.role === 'user' ? 'You' : 'Assistant'}
          </div>
          <div className={`${message.role === 'user' ? 'mr-2' : 'ml-2'} mt-1`}>
            <Image
              src={`${
                message.role === 'user' ? userAvatarPhoto : '/avatars/img.png'
              }`}
              alt="Avatar"
              className="rounded-full "
              width={32}
              height={32}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;
