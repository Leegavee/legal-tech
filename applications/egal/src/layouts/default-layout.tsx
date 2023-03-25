import NavBar from '@legavee/components/nav-bar';
import ChatWindow from '@legavee/components/chat-window';
import React from 'react';

export type LayoutProps = {
  children?: React.ReactNode;
};
export const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-grow bg-white">{children}</div>
    </div>
  );
};
