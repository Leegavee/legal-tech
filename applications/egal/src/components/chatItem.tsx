import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useState } from 'react';
import axiosClient from '../utils/axios';
import { MessageItem } from './messageLeft';

export interface IChatItemProps {
  pushMessage: (e: MessageItem) => void;
  setLoading: (e: boolean) => void;
}

export const ChatItem = (props: IChatItemProps) => {
  const { user } = useUser();
  const { pushMessage, setLoading } = props;
  const [message, setMessage] = useState('');
  const [onRequest, setOnRequest] = useState(false);

  const handleSendMessage = async () => {
    
    if (!message.trim()) return;
    if (onRequest) return;
    pushMessage({
      avatar: user?.nickname ? user?.nickname[0].toUpperCase() : 'A',
      message: message,
      createdAt: new Date(),
      position: 'right',
    });
    setMessage('');
    setOnRequest(true);
    setLoading(true);

    const res: any = await axiosClient.post('/chat/ask', {
      prompt: message.trim(),
    });
    if (res && res.text) {
      pushMessage({
        avatar: 'B',
        message: res.text,
        createdAt: new Date(),
        position: 'left',
      });
      setOnRequest(false);
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-row items-center py-5 rounded-xl bg-white w-full px-4">
      <div className="flex-grow ml-4 h-auto">
        <div>
          <textarea
            style={{
              maxHeight: '200px',
              resize: 'none',
              paddingTop: '5px',
              paddingBottom: '5px',
            }}
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              if (e.target.scrollHeight > 58) {
                e.target.style.height = 'inherit';
                e.target.style.height = `${e.target.scrollHeight}px`;
              }
              if (!e.target.value) {
                e.target.style.height = `40px`;
              }
              if (e.target.value.trim()) {
                setMessage(e.target.value);
              }
            }}
            onKeyDown={(e: any) => {
              if (!e.target.value) {
                e.target.style.height = `40px`;
              }
              if (e.key === 'Enter') {
                e.target.style.height = `40px`;
                handleSendMessage();
              }
            }}
            className="flex w-full bg-white border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
          />
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
