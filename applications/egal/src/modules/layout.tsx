import { useUser } from '@auth0/nextjs-auth0/client';
import { UserProfileType } from '@legavee/components';
import { SideBar } from '@legavee/modules';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { user } = useUser();
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);
  if (!user) {
    return <>{children}</>;
  }
  console.log({ user });
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <SideBar user={user as UserProfileType} />
        {children}
      </div>
    </div>
  );
};
