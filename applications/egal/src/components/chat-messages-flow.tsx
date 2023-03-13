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

function ChatMessagesFlow({ messages, isLoading }: Props) {
  const userAvatarPhoto = useUser().user?.picture;

  return (
    <div className="flex-grow bg-gray-200 overflow-y-scroll px-4 py-8">
      <div className="flex flex-col space-y-2">
        {messages
          .filter((msg) => msg.role !== 'system')
          .map((message, index) => (
            <div
              key={index}
              className={`flex items-start p-2 ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.role === 'assistant' && (
                <div className="mr-2">
                  <Image
                    src="/avatars/img.png"
                    alt="Bot Avatar"
                    className="rounded-full "
                    width={32}
                    height={32}
                  />
                </div>
              )}
              <div
                className={`flex-1 text-gray-900 rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'ml-2 bg-blue-500 text-white'
                    : 'mr-2 bg-white text-gray-800'
                }`}
              >
                <div
                  className={`text-sm font-bold mb-1
                    ${message.role === 'user' ? 'text-right' : 'text-left'}
                  `}
                >
                  {message.role === 'user' ? 'You' : 'Assistant'}
                </div>
                <div
                  className={`text-base ${
                    message.role === 'user' ? 'text-right' : 'text-left'
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(message.content, { renderer }),
                  }}
                />
              </div>
              {message.role === 'user' && (
                <div className="ml-2">
                  <Image
                    src={userAvatarPhoto as string}
                    alt="User Avatar"
                    className="rounded-full "
                    width={32}
                    height={32}
                  />
                </div>
              )}
            </div>
          ))}
      </div>
      {isLoading && <div className="text-center">Loading...</div>}
    </div>
  );
}

export default ChatMessagesFlow;
