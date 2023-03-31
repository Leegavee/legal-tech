import { Fragment } from 'react';
import {
  CalendarIcon,
  CurrencyPoundIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid';

export default function DashboardHeader() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-indigo-600">
          <span className="text-4xl font-bold">
            Sale: 14 Glossop Road, CR5 1ED
          </span>
          &nbsp;
          <span className="text-1xl font-light text-gray-400">
            (d012-ae98-9009-fd23)
          </span>
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <UserCircleIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Christopher Andrews
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <UserCircleIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Michelle Ramone
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Opened: March 1, 2023
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyPoundIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            £ 800.00
          </div>
        </div>
      </div>
    </div>
  );
}
