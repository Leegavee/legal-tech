import { identify } from './identify';
import { replaceEntities } from './replaceEntities';

async function redactPii(input: string): Promise<string> {
  const response = await identify(input);
  return replaceEntities(input, response);
}

export { redactPii };
