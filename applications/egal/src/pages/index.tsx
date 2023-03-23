import { BoardMessages, Layout } from '@legavee/modules';
import { Inter } from '@next/font/google';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <BoardMessages />
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();
