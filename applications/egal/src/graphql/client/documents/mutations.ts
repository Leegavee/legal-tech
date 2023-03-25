import { gql } from '@apollo/client';

export const CREATE_CLIENT_MUTATION = gql`
  mutation createClient($client: ClientInput!) {
    createClient(client: $client) {
      title
      first_name
      last_name
      auth0_id
      email
      phone_number
      street_address
      city
      county
      post_code
    }
  }
`;

export const UPDATE_CLIENT_MUTATION = gql`
  mutation updateClient($client: ClientInput!) {
    updateClient(client: $client) {
      title
      first_name
      last_name
      auth0_id
      email
      phone_number
      street_address
      city
      county
      post_code
    }
  }
`;
