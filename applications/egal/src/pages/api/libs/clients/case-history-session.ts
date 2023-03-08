import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type CASE_HISTORY_SESSION_STATE =
  | 'OPEN'
  | 'ACTIVE'
  | 'UNDER REVIEW'
  | 'CLOSED'
  | 'ARCHIVED';

type CaseSessionHistoryValue = {
  id?: string;
  case_session_type: string;
  messages?: string[];
  case_history_session_state: CASE_HISTORY_SESSION_STATE;
};
/* Example usage
    create({
      case_session_type: 'CHAT',
      case_history_session_state: 'OPEN',
    }).then((result) => {
      console.log(result);
    });
*/
export const create = (
  caseSessionHistoryValue: CaseSessionHistoryValue,
): Prisma.Prisma__CaseHistorySessionClient<any> => {
  return prisma.caseHistorySession.create({
    data: {
      case_session_type: caseSessionHistoryValue.case_session_type,
      messages: {},
      case_history_session_state:
        caseSessionHistoryValue.case_history_session_state,
    },
  });
};
