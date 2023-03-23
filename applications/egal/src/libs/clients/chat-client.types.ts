export type ChatMessage = {
  content: string;
  role: 'user' | 'assistant' | 'system';
};

export type ChatResponse = {
  messages: ChatMessage[];
};

export interface SendMessageRequest {
  content: string;
}
