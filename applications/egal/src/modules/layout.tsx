import { SideBar } from '@legavee/modules';
import React from 'react';
import NavBar from '@legavee/components/nav-bar';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <SideBar />
          {children}
        </div>
      </div>
    </>
  );
};
