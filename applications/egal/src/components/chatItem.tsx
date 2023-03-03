import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useState } from 'react';
import axiosClient from '../utils/axios';
import { MessageItem } from './messageLeft';

export interface IChatItemProps {
  pushMessage: (e: MessageItem) => void;
}

export const ChatItem = (props: IChatItemProps) => {
  const { user } = useUser();
  const { pushMessage } = props;
  const [message, setMessage] = useState('');
  const [onRequest, setOnRequest] = useState(false);

  const handleSendMessage = async () => {
    if (onRequest) return;

    pushMessage({
      avatar: user?.nickname ? user?.nickname[0] : 'A',
      message: message,
      createdAt: new Date(),
      position: 'right',
    });
    setMessage('');
    setOnRequest(true);

    const res: any = await axiosClient.post('/chat/ask', { prompt: message });
    if (res && res.text) {
      pushMessage({
        avatar: 'B',
        message: res.text,
        createdAt: new Date(),
        position: 'left',
      });
      setOnRequest(false);
    }
  };
  return (
    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
      <div>
        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            type="text"
            className="flex w-full bg-white border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
          />
          <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="ml-4">
        <button
          onClick={handleSendMessage}
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
        >
          <span>Send</span>
          <span className="ml-2">
            <svg
              className="w-4 h-4 transform rotate-45 -mt-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};
