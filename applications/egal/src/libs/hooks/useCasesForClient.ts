import {
  Case,
  Client,
  useGetCasesForClientQuery,
} from '@legavee/graphql/client/client-gql-types';
import { useEffect, useState } from 'react';

export const useCasesForClient = (client: Client) => {
  const { data, loading, error } = useGetCasesForClientQuery({
    variables: {
      clientId: client.id,
    },
  });
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    if (data && data.case) {
      setCases(data.case);
    }
  }, [data]);

  return { cases, loading, error };
};
