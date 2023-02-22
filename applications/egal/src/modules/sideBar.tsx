import React from 'react';
import {
  SideBarHeader,
  UserProfileType,
  UserProfile,
} from '@legavee/components';
import Link from 'next/link';

type SideBarProps = {
  user: UserProfileType;
};

export const SideBar = (props: SideBarProps) => {
  const { user } = props;
  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 relative">
      <SideBarHeader />
      <UserProfile {...user} />
      <div className='absolute bottom-10 text-center left-0 w-full'>
        <Link href={'/api/auth/logout'} className='font-bold underline'>
          Sign out
        </Link>
      </div>
    </div>
  );
};
