export interface ChatResponse {
  content: string;
  role: 'user' | 'assistant' | 'system';
}

export interface SendMessageRequest {
  content: string;
}
