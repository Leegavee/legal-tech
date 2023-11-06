import { describe, it, expect } from 'vitest';
import { replaceEntities } from './replaceEntities';
import { IdentifyResponse } from './types';

describe('replaceEntities', () => {
  it('should replace identified entities with their respective types', () => {
    const input =
      'Our client Miss Familar is 23 years of age and has separated from your client Mr Johnson since February 2010, their children Jack and Jill are 10 and 5 years old respectively';
    const response: IdentifyResponse = {
      entities: [
        {
          BeginOffset: 11,
          EndOffset: 15,
          Score: 0.8599380254745483,
          Text: 'Miss',
          Type: 'PERSON',
        },
        {
          BeginOffset: 16,
          EndOffset: 23,
          Score: 0.9042508602142334,
          Text: 'Familar',
          Type: 'PERSON',
        },
        {
          BeginOffset: 27,
          EndOffset: 35,
          Score: 0.9953301548957825,
          Text: '23 years',
          Type: 'QUANTITY',
        },
        {
          BeginOffset: 78,
          EndOffset: 80,
          Score: 0.6534842252731323,
          Text: 'Mr',
          Type: 'PERSON',
        },
        {
          BeginOffset: 81,
          EndOffset: 88,
          Score: 0.9872766137123108,
          Text: 'Johnson',
          Type: 'PERSON',
        },
        {
          BeginOffset: 95,
          EndOffset: 108,
          Score: 0.9976819753646851,
          Text: 'February 2010',
          Type: 'DATE',
        },
        {
          BeginOffset: 125,
          EndOffset: 129,
          Score: 0.9968101382255554,
          Text: 'Jack',
          Type: 'PERSON',
        },
        {
          BeginOffset: 134,
          EndOffset: 138,
          Score: 0.9371882677078247,
          Text: 'Jill',
          Type: 'PERSON',
        },
        {
          BeginOffset: 143,
          EndOffset: 145,
          Score: 0.9967153072357178,
          Text: '10',
          Type: 'QUANTITY',
        },
        {
          BeginOffset: 150,
          EndOffset: 161,
          Score: 0.9347970485687256,
          Text: '5 years old',
          Type: 'QUANTITY',
        },
      ],
    };

    const redactedOutput = replaceEntities(input, response);

    // Expected output based on your entities
    const expectedOutput =
      'Our client {PERSON} {PERSON} is {QUANTITY} of age and has separated from your client {PERSON} {PERSON} since {DATE}, their children {PERSON} and {PERSON} are {QUANTITY} and {QUANTITY} respectively';

    expect(redactedOutput).toEqual(expectedOutput);
  });
});
