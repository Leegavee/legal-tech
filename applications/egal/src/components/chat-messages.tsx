import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import { marked } from 'marked';
import renderer from './markdown-renderer';

interface Props {
  messages: {
    content: string;
    role: 'user' | 'assistant' | 'system';
  }[];
  isLoading: boolean;
}

function ChatMessages({ messages, isLoading }: Props) {
  const userAvatarPhoto = useUser().user?.picture;

  // console.log(messages);
  return (
    <div className="flex-grow bg-gray-200 overflow-y-scroll px-4 py-8">
      {messages
        .filter((msg) => msg.role !== 'system')
        .map((message, index) => (
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
              } inline-block rounded-lg px-4 py-2 max-w-xl `}
            >
              <div
                className={`msg msg-${message.role}`}
                dangerouslySetInnerHTML={{
                  __html: marked.parse(message.content, { renderer }),
                }}
              />
            </div>
            <div
              className={`${
                message.role === 'user' ? 'mr-2' : 'ml-2'
              } mt-2 text-sm text-gray-500`}
            >
              {message.role === 'user' ? 'You' : 'Assistant'}
            </div>
            <div
              className={`${message.role === 'user' ? 'mr-2' : 'ml-2'} mt-1`}
            >
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
      {isLoading && <div className="text-center">Loading...</div>}
    </div>
  );
}

export default ChatMessages;
