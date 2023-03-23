import { ChatResponse } from './chat-client.types';

export type SendMessageRequest = {
  messages: {
    role: 'user' | 'assistant' | 'system';
    content: string;
  }[];
};

export async function sendMessage(
  request: SendMessageRequest,
): Promise<ChatResponse> {
  const response = await fetch('/api/chat/foo', {
    method: 'POST',
    body: JSON.stringify(request),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('An error occurred while processing your request.');
  }

  const data = await response.json();
  return data;
}
