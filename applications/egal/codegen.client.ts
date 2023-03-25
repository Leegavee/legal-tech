const codeGenClientConfig = {
  overwrite: true,
  schema: './src/graphql/schema/schema.ts',
  documents: './src/graphql/client/documents/**/*.ts',
  generates: {
    './src/graphql/client/client-gql-types.ts': {
      plugins: [
        'typescript',
        'typescript-react-apollo',
        'typescript-operations',
      ],
      config: {
        withHooks: true,
        apolloReactHooksImportFrom: '@apollo/client',
      },
    },
    './src/graphql/client/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default codeGenClientConfig;
