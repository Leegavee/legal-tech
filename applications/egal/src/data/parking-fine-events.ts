import { Event } from '@legavee/components/event-list/types';

export const mockEvents: Event[] = [
  {
    id: 1,
    type: 'Communication: in',
    summary: 'Received email from Laura Richards',
    date: new Date(2022, 2, 15, 10, 30),
    status: 'NEW',
  },
  {
    id: 2,
    type: 'Communication: out',
    summary: 'Sent email to Laura Richards',
    date: new Date(2022, 2, 14, 14, 0),
    status: 'COMPLETE',
  },
  {
    id: 3,
    type: 'Work completed',
    summary: 'Drafted email for client',
    date: new Date(2022, 2, 14, 10, 0),
    status: 'COMPLETE',
  },
  {
    id: 4,
    type: 'Notification',
    summary: 'Reminder: Awaiting payment',
    date: new Date(2022, 2, 10, 16, 30),
    status: 'READ',
  },
  {
    id: 5,
    type: 'Notification',
    summary: 'Deadline approaching for statement',
    date: new Date(2022, 2, 10, 10, 0),
    status: 'READ',
  },
  {
    id: 6,
    type: 'Communication: out',
    summary: 'Sent letter to Christine French',
    date: new Date(2022, 2, 8, 11, 0),
    status: 'COMPLETE',
  },
  {
    id: 7,
    type: 'Communication: in',
    summary: 'Received phone call from Laura Richards',
    date: new Date(2022, 2, 7, 14, 30),
    status: 'COMPLETE',
  },
  {
    id: 8,
    type: 'Communication: internal',
    summary: 'Discuss case with assistant',
    date: new Date(2022, 2, 4, 9, 0),
    status: 'COMPLETE',
  },
];
