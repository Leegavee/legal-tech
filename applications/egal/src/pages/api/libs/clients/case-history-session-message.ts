import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type CaseSessionHistoryMessageValue = {
  type: string;
  role: string;
  content: string;
  case_history_session_id: string;
};

/*
usage example:

create({
  type: 'TEXT',
  role: 'USER',
  content: 'Hello',
  case_history_session_id: 'clf047wlt00006ekzbhkzzj0r',
})
  .then(async (result) => {
    console.log(result);
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
*/
export const create = async (
  caseSessionHistoryMessageValue: CaseSessionHistoryMessageValue,
) => {
  return prisma.caseHistorySessionMessage.create({
    data: {
      type: caseSessionHistoryMessageValue.type,
      role: caseSessionHistoryMessageValue.role,
      content: caseSessionHistoryMessageValue.content,
      caseHistorySessionId:
        caseSessionHistoryMessageValue.case_history_session_id,
    },
  });
};
