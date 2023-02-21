import React from 'react';
import {
  SideBarHeader,
  UserProfileType,
  UserProfile,
} from '@legavee/components';

type SideBarProps = {
  user: UserProfileType;
};

export const SideBar = (props: SideBarProps) => {
  const { user } = props;
  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <SideBarHeader />
      <UserProfile {...user} />
    </div>
  );
};
