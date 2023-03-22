import {
  ApolloClient,
  gql,
  InMemoryCache,
  useMutation,
  useQuery,
} from '@apollo/client';
import { Client } from '@legavee/graphql/resolvers';
import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/dist/client';

const apolloClient = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

/* A hook to save the account settings in from the AccountSettingsForm */
const useSaveClient = () => {
  const SAVE_CLIENT_MUTATION = gql`
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

  const [saveClient, { loading, error }] = useMutation(SAVE_CLIENT_MUTATION);

  const handleSaveClient = async (client: Client) => {
    console.log('trying to save client:', client);
    try {
      const { data } = await saveClient({
        variables: {
          client,
        },
      });
      console.log('Client saved successfully:', data);
    } catch (err) {
      console.error('Error saving client:', err);
    }
  };

  return {
    saveClient: handleSaveClient,
    loading,
    error,
  };
};

const getClient = async (auth0_id: string) => {
  // const auth0_id = useUser()?.user?.sid;
  const GET_CLIENT_QUERY = gql`
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

  const { data, loading, error } = await useQuery(GET_CLIENT_QUERY, {
    variables: { auth0_id },
  });

  console.log(data);

  return {
    client: data,
    loading,
    error,
  };
};

const useClient = (auth0_id: string) => {
  const [client, setClient] = useState<Client>({
    auth0_id,
    title: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    street_address: '',
    city: '',
    county: '',
    post_code: '',
  });
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  const fetchClient = async () => {
    try {
      const auth0_id = useUser()?.user?.sub as string;
      const { client } = await getClient(auth0_id);
      setClient(client as Client);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(auth0_id);
  if (auth0_id) {
    (async () => await fetchClient())();
  } else {
    setClient({
      auth0_id,
      title: '',
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      street_address: '',
      city: '',
      county: '',
      post_code: '',
    });
    setLoading(false);
  }
  // }, [auth0_id]);

  return { client, loading };
};

// (async () => {
//   // TODO - handle errors
//   await saveClient({
//     title: formData.title.value,
//     first_name: formData.first_name.value,
//     last_name: formData.last_name.value,
//     auth0_id: user?.sub as string,
//     email: formData.email.value,
//     phone_number: formData.phone_number.value,
//     street_address: formData.street_address.value,
//     city: formData.city.value,
//     county: formData.county.value,
//     post_code: formData.post_code.value,
//   });
// })();
