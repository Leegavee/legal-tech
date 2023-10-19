import { IdentifyResponse } from './types';

/**
 * Redacts the identified entities in the given string.
 * @param input The original string.
 * @param response The result from the identify function.
 * @returns The redacted string.
 */
const replaceEntities = (input: string, response: IdentifyResponse): string => {
  const sortedEntities = [...response.entities].sort(
    (a, b) => b.BeginOffset! - a.BeginOffset!,
  );

  return sortedEntities.reduce((redactedString, entity, currentIndex) => {
    const beforeEntity = redactedString.substring(0, entity.BeginOffset);
    const afterEntity = redactedString.substring(entity.EndOffset!);
    return beforeEntity + '{' + entity.Type + '}' + afterEntity;
  }, input);
};

export { replaceEntities };
