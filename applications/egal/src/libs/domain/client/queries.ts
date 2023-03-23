import { gql } from '@apollo/client';

export const GET_CLIENT_QUERY = gql`
  query getClient($auth0_id: String!) {
    client(auth0_id: $auth0_id) {
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
