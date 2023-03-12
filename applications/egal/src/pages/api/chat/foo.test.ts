import { NextApiRequest, NextApiResponse } from 'next';
import {
  Configuration,
  CreateChatCompletionResponseChoicesInner,
  OpenAIApi,
} from 'openai';
import handler from './foo';

jest.mock('openai');

const mockCreateChatCompletion = jest.fn();
const mockOpenAIApi = {
  createChatCompletion: mockCreateChatCompletion,
} as unknown as OpenAIApi;

beforeEach(() => {
  jest.clearAllMocks();

  (OpenAIApi as jest.Mock).mockReturnValue(mockOpenAIApi);
});

describe('API handler', () => {
  it.skip('should send error message to client if openAI request fails', async () => {
    const req = {
      body: {
        messages: [
          {
            role: 'user',
            content: 'Hello',
          },
        ],
      },
    } as NextApiRequest;

    const res = {
      status: jest.fn(() => ({ json: jest.fn() })),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    const error = new Error('openAI error');
    mockCreateChatCompletion.mockRejectedValueOnce(error);

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      messages: [
        {
          role: 'user',
          content: 'Hello',
        },
        {
          role: 'assistant',
          content: 'unknown error occurred',
        },
      ],
    });
  });

  it('should send messages to openAI API and return the response', async () => {
    const req = {
      body: {
        messages: [
          {
            role: 'user',
            content: 'Hello',
          },
        ],
      },
    } as NextApiRequest;

    const res = {
      status: jest.fn(() => ({ json: jest.fn() })),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    const response = {
      data: {
        choices: [
          {
            message: {
              role: 'assistant',
              content: 'Hi there',
            },
          },
        ] as CreateChatCompletionResponseChoicesInner[],
      },
    };
    mockCreateChatCompletion.mockResolvedValueOnce(response);

    await handler(req, res);

    expect(mockCreateChatCompletion).toHaveBeenCalledWith({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are acting as a legal assistant',
        },
        {
          role: 'assistant',
          content: 'Hello there',
        },
        {
          role: 'user',
          content: 'Hello',
        },
        {
          role: 'assistant',
          content: 'Hi there',
        },
      ],
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      messages: [
        {
          role: 'user',
          content: 'Hello',
        },
        {
          role: 'assistant',
          content: 'Hi there',
        },
      ],
    });
  });
});
