import { useEffect, useState } from 'react';
import { sendMessage, type SendMessageRequest } from '../clients/chat-client';
import {
  type ChatMessage,
  type ChatResponse,
} from '../clients/chat-client.types';

export function useChat(initialState: ChatMessage[]) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageAsync = async (request: SendMessageRequest) => {
    setIsLoading(true);
    try {
      setMessages(request.messages);
      const response = await sendMessage(request);
      setMessages([...response.messages]);
    } catch (error) {
      console.error(error);
      setMessages([
        ...messages,
        {
          content: 'An error occurred while processing your request.',
          role: 'assistant',
        },
      ]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!messages.length) {
      // Send an initial message when the component mounts
      // sendMessageAsync({
      //   messages: [
      //     {
      //       role: 'system',
      //       content: "You are going to act as a laywer's assistant in the UK",
      //     },
      //   ],
      // });
    }
  }, [messages.length]);

  return {
    messages,
    sendMessage: sendMessageAsync,
    isLoading,
  };
}
