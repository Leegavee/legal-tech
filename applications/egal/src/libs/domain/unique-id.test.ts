// uniqueID.test.ts

import { generateUniqueID } from './unique-id';

describe('generateUniqueID', () => {
  it('should generate a unique ID with the given prefix', () => {
    const prefix = 'Smith';
    const id = generateUniqueID(prefix);
    expect(id.startsWith(prefix)).toBe(true);
  });

  it('should generate different IDs for subsequent calls', () => {
    const prefix = 'Jones';
    const id1 = generateUniqueID(prefix);
    const id2 = generateUniqueID(prefix);
    expect(id1).not.toBe(id2);
  });

  it('should contain three words from the wordlist after the prefix', () => {
    const prefix = 'Doe';
    const id = generateUniqueID(prefix);
    const parts = id.split('-');
    expect(parts[0]).toBe(prefix);
    expect(parts.length).toBe(4); // Prefix + 3 words
  });
});
