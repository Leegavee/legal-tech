import { Event } from '@legavee/components/event-list/types';
export const mockEvents: Event[] = [
  {
    id: 1,
    type: 'Communication: in',
    summary:
      'Received instructions from Mr John Smith for 14 Glossop Road, CR5 1ED',
    date: new Date('2023-03-01T09:00:00'),
    status: 'INSTRUCTIONS RECEIVED',
  },
  {
    id: 2,
    type: 'Work completed',
    summary: 'Title deeds obtained from Land Registry',
    date: new Date('2023-03-03T14:30:00'),
    status: 'COMPLETE',
  },
  {
    id: 3,
    type: 'Communication: out',
    summary: 'Sent initial paperwork to Mr John Smith',
    date: new Date('2023-03-04T11:00:00'),
    status: 'READ',
  },
  {
    id: 4,
    type: 'Communication: in',
    summary: 'Received signed paperwork from Mr John Smith',
    date: new Date('2023-03-10T09:15:00'),
    status: 'AWAITING SOLICITOR',
  },
  {
    id: 5,
    type: 'Work completed',
    summary: 'Reviewed signed paperwork',
    date: new Date('2023-03-12T15:30:00'),
    status: 'COMPLETE',
  },
  {
    id: 6,
    type: 'Communication: out',
    summary: "Sent draft contract to buyer's solicitor",
    date: new Date('2023-03-14T10:45:00'),
    status: 'ACTIONED',
  },
  {
    id: 7,
    type: 'Communication: in',
    summary: "Received enquiries from buyer's solicitor",
    date: new Date('2023-03-20T11:30:00'),
    status: 'AWAITING CLIENT',
  },
  {
    id: 8,
    type: 'Communication: out',
    summary: 'Sent enquiries to Mr John Smith',
    date: new Date('2023-03-20T15:15:00'),
    status: 'UNREAD',
  },
];
