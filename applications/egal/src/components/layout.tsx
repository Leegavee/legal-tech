import React from 'react';
import styles from '@legavee/styles/Home.module.css';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className={styles.Main}>{children}</main>
    </>
  );
};
