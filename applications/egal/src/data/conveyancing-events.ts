export const mockEvents: Event[] = [
  {
    id: 1,
    type: 'Communication: in',
    summary: 'Received initial instructions from client',
    date: new Date('2023-03-15T09:00:00'),
    status: 'INSTRUCTIONS RECEIVED',
  },
  {
    id: 2,
    type: 'Communication: internal',
    summary: 'Conducted client care and money laundering checks',
    date: new Date('2023-03-16T10:00:00'),
    status: 'AWAITING SOLICITOR',
  },
  {
    id: 3,
    type: 'Work completed',
    summary: 'Completed pre-contract searches and enquiries',
    date: new Date('2023-03-18T15:00:00'),
    status: 'ACTIONED',
  },
  {
    id: 4,
    type: 'Communication: out',
    summary: 'Sent draft contract to client for review',
    date: new Date('2023-03-20T09:00:00'),
    status: 'AWAITING CLIENT',
  },
  {
    id: 5,
    type: 'Communication: in',
    summary: 'Received signed contract and deposit from client',
    date: new Date('2023-03-22T14:00:00'),
    status: 'ACTIONED',
  },
  {
    id: 6,
    type: 'Work completed',
    summary: 'Prepared completion statement',
    date: new Date('2023-03-23T10:00:00'),
    status: 'ACTIONED',
  },
  {
    id: 7,
    type: 'Work completed',
    summary: 'Prepared transfer deed',
    date: new Date('2023-03-24T11:00:00'),
    status: 'ACTIONED',
  },
  {
    id: 8,
    type: 'Communication: in',
    summary: 'Received mortgage offer and report from buyer’s lender',
    date: new Date('2023-03-25T12:00:00'),
    status: 'ACTIONED',
  },
  {
    id: 9,
    type: 'Work completed',
    summary:
      'Calculated stamp duty land tax payable by the buyer and informed client',
    date: new Date('2023-03-26T14:00:00'),
    status: 'ACTIONED',
  },
  {
    id: 10,
    type: 'Work completed',
    summary:
      'Prepared and submitted application to Land Registry to register the transfer of ownership',
    date: new Date('2023-03-27T16:00:00'),
    status: 'ACTIONED',
  },
];
