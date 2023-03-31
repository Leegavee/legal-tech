import React from 'react';
import { Event } from './types';
import {
  BellIcon,
  InboxIcon,
  EnvelopeOpenIcon,
  CheckIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';

type EventListProps = {
  events: Event[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  const sortedEvents = [...events].sort(
    (a, b) => b.date.getTime() - a.date.getTime(),
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="flex items-center justify-end min-w-full">
              <button
                type="button"
                className="block rounded-md bg-indigo-600 py-2 px-8 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                New event
              </button>
            </div>

            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    &nbsp;
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Summary
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Date
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {sortedEvents.map((event: Event) => (
                  <tr key={event.id}>
                    <td>
                      <div className="whitespace-nowrap px-5 py-4 text-sm text-gray-500">
                        {renderIcon(event)}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900">{event.type}</div>
                      <div className="text-gray-500">{event.summary}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {event.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {event.date.toLocaleDateString()}{' '}
                      {event.date.toLocaleTimeString()}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <div className="flex items-center justify-end">
                        <Link
                          href={
                            '/case/0000-0000-0000/case-events/0000-0000-0000'
                          }
                          className="block rounded-md bg-indigo-600 py-2 px-8 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          View
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  function renderIcon(event: Event) {
    switch (event.type) {
      case 'Communication: in':
        return <InboxIcon className="h-5 w-5 text-indigo-600" />;
      case 'Communication: out':
        return <EnvelopeOpenIcon className="h-5 w-5 text-indigo-600" />;
      case 'Communication: internal':
        return (
          <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-indigo-600" />
        );
      case 'Notification':
        return <BellIcon className="h-5 w-5 text-indigo-600" />;
      case 'Work completed':
        return <CheckIcon className="h-5 w-5 text-indigo-600" />;
      default:
        return null;
    }
  }

  function renderDetails(event: Event) {
    switch (event.status) {
      case 'NEW':
        return 'This is new.';
      case 'AWAITING CLIENT':
        return 'This is awaiting client action.';
      case 'AWAITING SOLICITOR':
        return 'This is awaiting solicitor action.';
      case 'ACTIONED':
        return 'This has been actioned.';
      case 'CLOSED':
        return 'This has been closed.';
      case 'ARCHIVED':
        return 'This has been archived.';
      case 'COMPLETE':
        return 'This has been completed.';
      case 'INSTRUCTIONS RECEIVED':
        return 'We have received instructions.';
      case 'READ':
        return 'This message has been read.';
      case 'UNREAD':
        return 'This message has not been read.';
      default:
        return null;
    }
  }
};

export default EventList;
