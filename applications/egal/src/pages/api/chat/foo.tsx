import { NextApiRequest, NextApiResponse } from 'next';
import {
  Configuration,
  CreateChatCompletionResponseChoicesInner,
  OpenAIApi,
} from 'openai';

const openAIConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAi = new OpenAIApi(openAIConfig);

interface ChatResponse {
  messages: {
    role: 'user' | 'assistant' | 'system' | undefined;
    content: string;
  }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>,
) {
  const { messages }: ChatResponse = req.body;

  try {
    console.error(messages);

    const chatGptResponse = await openAi.createChatCompletion({
      model: 'gpt-3.5-turbo',
      // @ts-ignore
      messages,
    });

    // Extract the chatGptResponse text from the API chatGptResponse
    const chatMessage = chatGptResponse.data
      .choices[0] as CreateChatCompletionResponseChoicesInner;

    // Send the chatGptResponse back to the client
    res.status(200).json({
      messages: [
        ...messages,
        {
          role: chatMessage?.message?.role,
          content: chatMessage?.message?.content || '',
        },
      ],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      messages: [
        ...messages,
        {
          role: 'assistant',
          content: 'unknown error occurred',
        },
      ],
    });
  }
}
