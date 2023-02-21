import { useUser } from '@auth0/nextjs-auth0/client';
import { SideBar } from '@legavee/modules';
import React from 'react';
export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { user } = useUser();
  console.log(user)
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <SideBar user={user} />
        {children}
      </div>
    </div>
  );
};
