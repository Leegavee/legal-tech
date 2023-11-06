import { describe, it, expect } from 'vitest';
import { identify } from './identify';
describe('identify', () => {
  it('should return an object', async () => {
    const response = await identify('');

    expect(response).toBeInstanceOf(Object);
  });

  it('should return an object with a `results` property', async () => {
    const response = await identify('');

    expect(response.entities).toBeInstanceOf(Array);
  });

  describe('when given a string containing PII', () => {
    it('should return an object with a `entities` property containing an array of results that represent the PII', async () => {
      const input =
        'The applicants name is Lewis Barclay and his email address is john.doe@gmail.com. He has lived at 123 Fake Street, London, SW1A 1AA for 10 years.';
      const response = await identify(input);

      expect(response).toEqual({
        entities: [
          {
            BeginOffset: 23,
            EndOffset: 36,
            Score: 0.9969717860221863,
            Text: 'Lewis Barclay',
            Type: 'PERSON',
          },
          {
            BeginOffset: 62,
            EndOffset: 80,
            Score: 0.9931702613830566,
            Text: 'john.doe@gmail.com',
            Type: 'OTHER',
          },
          {
            BeginOffset: 98,
            EndOffset: 131,
            Score: 0.9725995659828186,
            Text: '123 Fake Street, London, SW1A 1AA',
            Type: 'LOCATION',
          },
          {
            BeginOffset: 136,
            EndOffset: 144,
            Score: 0.9969053268432617,
            Text: '10 years',
            Type: 'QUANTITY',
          },
        ],
      });
    });

    it('should return an object with a `entities` property containing an array of results that represent the PII for a different string', async () => {
      const input =
        'Our client Miss Familar is 23 years of age and has separated from your client Mr Johnson since February 2010, their children Jack and Jill are 10 and 5 years old respectively';
      const response = await identify(input);

      expect(response).toEqual({
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
      });
    });
  });
});
