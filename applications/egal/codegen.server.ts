import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/graphql/schema/schema.ts',
  documents: './src/graphql/client/documents/**/*.ts',
  generates: {
    './src/graphql/server/server-gql-types.ts': {
      config: {
        useIndexSignature: true,
        mappers: {
          Case: '.prisma/client#Case as CaseModel',
          Client: '.prisma/client#Client as ClientModel',
        },
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;
