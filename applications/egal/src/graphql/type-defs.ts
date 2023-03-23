import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    people: [Person!]!
    person(id: Int!): Person
    client(auth0_id: String!): Client
  }

  type Mutation {
    createClient(client: ClientInput!): Client
    updateClient(client: ClientInput!): Client
  }

  type Person {
    id: Int!
    name: String!
    age: Int!
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
`;

export default typeDefs;
