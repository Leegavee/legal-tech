import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    client(auth0_id: String!): Client
    casesForClient(clientId: String!): [Case!]!
  }

  type Mutation {
    createClient(client: ClientInput!): Client
    updateClient(client: ClientInput!): Client
    createCase(case: CaseInput!): Case
    updateCase(case: CaseInput!): Case
  }

  type Client {
    id: String!
    auth0_id: String!
    title: String!
    first_name: String!
    last_name: String!
    email: String!
    phone_number: String!
    street_address: String!
    city: String!
    county: String!
    post_code: String!
  }

  input ClientInput {
    id: String
    auth0_id: String!
    title: String!
    first_name: String!
    last_name: String!
    email: String!
    phone_number: String!
    street_address: String!
    city: String!
    county: String!
    post_code: String!
  }

  type Case {
    id: String!
    title: String!
    notes: String!
    clientId: String!
  }

  input CaseInput {
    id: String
    title: String!
    notes: String!
    clientId: String!
  }
`;

export default typeDefs;
