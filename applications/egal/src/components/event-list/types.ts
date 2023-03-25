export type Event = {
  id: number;
  type:
    | 'Communication: in'
    | 'Communication: out'
    | 'Communication: internal'
    | 'Notification'
    | 'Work completed';
  summary: string;
  date: Date;
  status:
    | 'NEW'
    | 'INSTRUCTIONS RECEIVED'
    | 'AWAITING CLIENT'
    | 'AWAITING SOLICITOR'
    | 'ACTIONED'
    | 'COMPLETE'
    | 'CLOSED'
    | 'ARCHIVED'
    | 'UNREAD'
    | 'READ';
};
