import { Entity } from '@aws-sdk/client-comprehend';

// type Entity = {
//   BeginOffset: number;
//   EndOffset: number;
//   Score: number;
//   Text: string;
//   Type: string;
// };

export type IdentifyResponse = {
  entities: Entity[];
  errors?: any[];
};
