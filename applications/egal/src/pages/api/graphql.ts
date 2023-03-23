import Cors from 'micro-cors';
import { ApolloServer, gql } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';
import resolvers from '../../graphql/resolvers';
import typeDefs from '../../graphql/type-defs';

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors();
const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  try {
    await startServer;
    await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
  } catch (e) {
    console.error(e);
  }
});
