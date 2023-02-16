import React, { useEffect } from 'react';
import styles from '@legavee/styles/Home.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { user } = useUser();
  return (
    <>
      <main className={styles.Main}>{children}</main>
    </>
  );
};
