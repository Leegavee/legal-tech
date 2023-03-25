import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import ChatWindow from '@legavee/components/chat-window';
import { DefaultLayout } from '@legavee/layouts/default-layout';

export default function Chat() {
  return (
    <DefaultLayout>
      <ChatWindow />
    </DefaultLayout>
  );
}

export const getServerSideProps = withPageAuthRequired();
