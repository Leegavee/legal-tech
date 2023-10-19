import { Comprehend } from '@aws-sdk/client-comprehend';
import { IdentifyResponse } from './types';

// Configuring AWS
// AWS.config.update({
//   region: 'eu-west-2', // Change this to your region
// });

// Initializing Comprehend
const comprehend = new Comprehend({ region: 'eu-west-2' });

// Sample Text
// const text = 'It is raining today in Seattle';

// Detecting entities in the text using Comprehend

async function identify(input: string): Promise<IdentifyResponse> {
  if (!input || input.length === 0) {
    return {
      entities: [],
      errors: [
        {
          code: 'NoInput',
          message: 'No input provided',
        },
      ],
    };
  }

  const result = await comprehend.detectEntities({
    LanguageCode: 'en', // You can change this to other supported languages
    Text: input,
  });

  if (result.Errors && result.Errors.length > 0) {
    return {
      entities: [],
      errors: result.Errors,
    };
  }

  if (!result.Entities || result.Entities.length === 0) {
    return {
      entities: [],
      errors: [
        {
          code: 'NoData',
          message: 'No data returned',
        },
      ],
    };
  }

  return {
    entities: result.Entities,
  };
}

export { identify };
