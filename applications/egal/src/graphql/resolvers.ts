import prisma from './prisma-client';
import { type Prisma } from '@prisma/client';

export type Client = {
  id?: string;
  auth0_id: string;
  title: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  street_address: string;
  city: string;
  county: string;
  post_code: string;
  case?: any[];
};

const resolvers = {
  Query: {
    client: (
      _: any,
      { auth0_id }: { auth0_id: string },
    ): Prisma.Prisma__ClientClient<
      Prisma.ClientGetPayload<Prisma.ClientArgs> | null,
      null
    > | null => {
      let client = null;
      try {
        client = prisma.client.findFirst({ where: { auth0_id } });
      } catch (e) {
        console.error(e);
      }
      return client;
    },
  },
  Mutation: {
    createClient: (_: any, { client }: { client: Client }): any => {
      return prisma.client.create({ data: client });
    },
    updateClient: (_: any, { client }: { client: Client }): any => {
      return prisma.client.update({
        where: { auth0_id: client.auth0_id },
        data: client,
      });
    },
  },
};
export default resolvers;
