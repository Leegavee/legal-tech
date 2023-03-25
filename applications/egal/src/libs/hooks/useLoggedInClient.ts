import { useUser } from '@auth0/nextjs-auth0/client';
import {
  Client,
  useGetClientQuery,
} from '@legavee/graphql/client/client-gql-types';
import { useEffect, useState } from 'react';
import { ApolloError } from '@apollo/client';

export default function useLoggedInClient() {
  const { user } = useUser();
  const { data, loading, error } = useGetClientQuery({
    variables: {
      // @ts-ignore
      auth0_id: user?.sub,
    },
  });
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    if (data && data.client) {
      // @ts-ignore
      setClient(data.client);
    } else {
      setClient({
        auth0_id: user?.sub || '',
        title: '',
        email: user?.email || '',
        phone_number: '',
        street_address: '',
        city: '',
        county: '',
        post_code: '',
        // @ts-ignore
        first_name: user?.given_name || '',
        // @ts-ignore
        last_name: user?.family_name || '',
      });
    }
  }, [data, user]);

  return { client, loading, error, isClientPersisted: !!data?.client };
}
