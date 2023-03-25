import { BoardMessages, Layout } from '@legavee/modules';
import { Inter } from '@next/font/google';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import { DefaultLayout } from '@legavee/layouts/default-layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <DefaultLayout>
      <div className="p-8">
        <h1 className="text-3xl">Home</h1>
      </div>
    </DefaultLayout>
  );
}

export const getServerSideProps = withPageAuthRequired();
