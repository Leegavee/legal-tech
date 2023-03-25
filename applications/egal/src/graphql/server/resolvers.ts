import prisma from './prisma-client';
import { type Prisma } from '@prisma/client';
import { Resolvers } from './server-gql-types';

const resolvers: Resolvers = {
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

    casesForClient: (
      _: any,
      { clientId }: { clientId: string },
    ): Prisma.Prisma__CaseClient<Prisma.CaseGetPayload<Prisma.CaseArgs>[]> => {
      // @ts-ignore
      return prisma.case.findMany({
        where: { clientId },
      });
    },
  },
  Mutation: {
    createClient: (_, args) => {
      return prisma.client.create({
        data: args.client as Prisma.ClientCreateInput, // TODO: fix this
      });
    },

    updateClient: (_, args): any => {
      return prisma.client.update({
        where: { auth0_id: args.client.auth0_id },
        data: args.client as Prisma.ClientCreateInput, // TODO: fix this
      });
    },

    createCase: (_, args): any => {
      return prisma.case.create({
        data: args.case as Prisma.CaseUncheckedCreateInput, // TODO: fix this
      });
    },

    updateCase: (_, args): any => {
      return prisma.case.update({
        where: { id: args.case.id as string },
        data: args.case as Prisma.CaseUncheckedCreateInput, // TODO: fix this
      });
    },
  },
};
export default resolvers;
